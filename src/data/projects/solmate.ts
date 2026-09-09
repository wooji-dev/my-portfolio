import { Project } from '../../types';

const solmate: Project = {
  id: 'project-solmate',
  index: '05',
  title: '증권사 오픈 API 기반 모의투자 학습 서비스',
  period: '2025 — 신한투자증권 프로디지털아카데미',
  overview:
    '청소년·초보 투자자의 뇌동매매를 구조적으로 억제하는 멘토링 기반 모의투자 플랫폼. 코치마크 튜토리얼·매매일지 강제 작성·따라사기(Copy Trading)로 "혼자 하는 주식이 아닌, 함께 배우고 성장하는 투자" 경험을 설계.',
  stack: ['React', 'Spring Boot', 'PostgreSQL', 'Redis', 'WebSocket + STOMP', 'LS증권 API', 'AWS (EC2, S3, RDS)'],
  mockup: {
    src: '/images/solmate-mockup.png',
    alt: 'SOLMate 모바일 — 실시간 주가 차트 화면 위에 코치마크 튜토리얼(1/4)이 오버레이된 상태',
    caption: '주가 차트 진입 시 코치마크 — 빨강/파랑 캔들과 시간축 의미를 첫 진입에 학습',
  },
  issues: [
    {
      tag: 'Prevention',
      title: '계좌 잔고 "따닥" — 다중 스레드 동시 매수 시 잔고 초과 차감',
      problem:
        '멀티 스레드에서 동일 계좌로 매수/매도가 동시에 들어오면 잔고가 차감되기 전 두 요청이 모두 기존 잔고를 읽어, 실제 보유 금액보다 더 많은 주문이 체결되는 레이스 컨디션 발생. Redis 분산 락 단독으로는 DB와 별개 시스템이라 단일 트랜잭션으로 묶이지 않아 원자성 미보장 — 서버가 죽거나 처리 시간이 TTL을 넘으면 다른 요청이 락을 가로채 원장 데이터가 깨질 위험.',
      solution:
        '1차 방어막은 Redis 락 — TTL 필수 설정, try-finally로 해제 보장, 락 해제 시 다른 스레드 락을 지우지 않도록 UUID 식별값을 Lua 스크립트로 검증 후 삭제. 최종 정합성은 DB 비관적 락(SELECT ... FOR UPDATE)으로, 계좌 조회 → 잔고 차감 → 주문 생성 → 거래 내역 기록 전 과정을 단일 트랜잭션에 묶어 중간 실패 시 전체 롤백되도록 설계.',
      metrics: [
        { label: '잔고 오류', before: '발생', after: '0건', delta: '완전 해결' },
        { label: '시스템 안정성', before: '기준', after: '+30%', delta: '향상' },
      ],
      result:
        '금융 거래 수준의 데이터 무결성 확보. 백엔드 팀의 "속도 우선" 의견과 충돌했으나 베타 테스트 중 실제 레이스 컨디션 재현 → 작동하는 코드로 시연하여 합의 도출.',
    },
    {
      tag: 'Refactoring',
      title: '실시간 차트 데이터 — Hybrid Storage & Pre-aggregation',
      problem:
        '코스피 200 종목 기준 분당 약 200개 Row가 생성되는 시계열 데이터를, 실시간 호가 갱신과 과거 차트 빠른 조회를 동시에 만족시켜야 했음. 초기 S3 + JSON 방식은 조회 시 파싱 오버헤드가 우려됐고, 5분·60분봉을 조회 시점에 매번 집계하면 DB 부하 급증.',
      solution:
        'Redis HSET으로 LS증권 웹소켓 틱 데이터의 OHLCV(현재가·고가·저가·거래량)를 실시간 갱신, 매 분 00초 확정 시점에 스케줄러가 RDS(PostgreSQL)로 INSERT하여 쓰기 부하를 평탄화. 5분·60분봉은 조회 때 집계하지 않고 1분봉 확정 시 함께 미리 계산해 저장(Pre-aggregation). 장 마감 후 증권사 REST API로 누락 캔들을 보정하는 배치 작업으로 웹소켓 유실 대비.',
      metrics: [
        { label: '상위 봉 조회', before: '실시간 집계', after: '사전 집계', delta: 'Latency ↓' },
        { label: '데이터 신뢰도', before: '웹소켓 유실 위험', after: '배치 보정', delta: '확보' },
      ],
      result:
        '쓰기 부하·조회 성능·데이터 신뢰도를 모두 만족하는 계층형 저장 구조 완성. WebSocket + STOMP /topic/market/indicators 브로드캐스트로 KOSPI/KOSDAQ/환율 지수가 폴링 없이 자동 갱신.',
    },
    {
      tag: 'Prevention',
      title: '소켓 구독 폭증 & 매매일지 휘발 — Reference Counting + 상태 동기화',
      problem:
        '서버 대수가 늘면 각 서버가 증권사 웹소켓에 개별 연결되어 동일 종목 데이터를 중복 수신, 트래픽이 폭증. 또 사용자 화면에 없는 호가까지 받아오는 낭비 발생. 별개 이슈로, 지정가 주문 시 즉시 체결되지 않으면 사용자가 필수로 작성한 매매일지가 휘발될 위험.',
      solution:
        '단일 서버가 증권사 소켓을 전담 수신해 Redis Pub/Sub으로 공유 — 다른 서버는 subscribe만. 체결가(S3_)는 일괄 구독·브로드캐스트하되, 데이터량이 큰 호가(H1_)는 Reference Counting으로 사용자가 종목을 클릭할 때만 구독 시작, 아무도 보지 않을 때만 구독 해제. 매매일지는 주문 시 DB에 "미체결" 상태로 우선 저장, 실제 체결 시 "체결"로 업데이트해 리스트에 노출, 취소 시 레코드 삭제로 라이프사이클 일치.',
      metrics: [
        { label: '호가 구독', before: '항상 ON', after: '조회 시 ON', delta: '트래픽 ↓' },
        { label: '매매일지', before: '휘발 위험', after: '상태 동기화', delta: '안정화' },
      ],
      result:
        '서버 다중화에도 증권사 소켓 단일 연결 유지. 다중 탭 환경 대응을 위해 SharedWorker 기반 단일 WebSocket 공유 아키텍처로 확장 진행 중. Access Token(30분, 세션 스토리지) + Refresh Token(HTTPOnly 쿠키 + Redis) 이원화와 OncePerRequestFilter로 인증·보안 단일 실행 보장.',
    },
  ],
};

export default solmate;
