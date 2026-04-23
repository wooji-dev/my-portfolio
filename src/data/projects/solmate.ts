import { Project } from '../../types';

const solmate: Project = {
  id: 'project-solmate',
  index: '05',
  title: '증권사 오픈 API 기반 모의투자 학습 서비스',
  period: '2025 — 신한투자증권 프로디지털아카데미',
  overview: '청소년·초보 투자자의 뇌동매매를 구조적으로 억제하는 멘토링 기반 모의투자 플랫폼.',
  stack: ['React', 'TypeScript', 'WebSocket', 'Redis', 'PostgreSQL', 'AWS'],
  issues: [
    {
      tag: 'Prevention',
      title: '다중 스레드 동시 매수 시 잔고 초과 차감 레이스 컨디션',
      problem:
        '멀티 스레드 환경에서 동시 매수 요청 시 계좌 잔고를 동시 조회하면 레이스 컨디션으로 잔고가 실제보다 더 많이 차감. Redis 분산 락 단독 사용 시 DB 트랜잭션과 원자성이 분리되어 원장 데이터 훼손 가능성 확인. 실시간 1분봉 데이터 처리 시 DB 쓰기 부하 급증, 서버 증설 시 증권사 WebSocket 중복 연결로 트래픽 폭증 위험.',
      solution:
        'Redis 락(TTL+UUID 검증, 1차 방어막) + DB 비관적 락(SELECT FOR UPDATE) 이중 구조로 원자성 확보. 1분봉은 Redis 실시간 갱신 후 확정 시점에만 RDS INSERT, 5분·60분봉은 Pre-aggregation으로 조회 레이턴시 최소화. 단일 수신 서버가 Redis Pub/Sub에 publish, 나머지는 subscribe만 — 호가 데이터는 Reference Counting으로 구독 자동 해제.',
      metrics: [
        { label: '잔고 오류', before: '발생', after: '0건', delta: '완전 해결' },
        { label: '시스템 안정성', before: '기준', after: '+30%', delta: '향상' },
      ],
      result:
        '금융 거래 수준의 데이터 무결성 확보. ERD 유저-토큰 순환 참조 제거로 Stateless 보안과 데이터 정합성 동시 달성.',
    },
  ],
};

export default solmate;
