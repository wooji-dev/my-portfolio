import { Project, CareerItem, EducationItem, CertItem, BootcampItem } from '../types';

export const PROJECTS: Project[] = [
  {
    id: 'project-elo',
    index: '01',
    title: 'ELO',
    subtitle: 'A/B Test Platform — Frontend Logic',
    period: '2024 — 에코마케팅',
    tags: ['JavaScript', 'GTM', 'GA4', 'BigQuery', 'Cookie/Session'],
    problem: {
      heading: '문제 정의',
      text: '광고 캠페인별로 쿼리스트링 규칙이 상이한 자사몰 환경에서, 원본 URL과 대안 URL을 동일하게 인식하지 못해 A/B 테스트 집계 데이터가 오염되는 문제가 발생했습니다. 페이지 새로고침 시 사용자가 다른 실험 그룹에 재배정되어 테스트 일관성이 무너졌습니다.',
    },
    analysis: {
      heading: '분석',
      points: [
        '자사몰 20개 이상에서 UTM 파라미터 순서가 달라 같은 URL이 다른 키로 처리됨',
        '세션 종료 시 그룹 배정 정보가 초기화되어 중복 데이터 발생',
        '중복 리다이렉션 무한루프로 플랫폼 자체가 다운되는 장애 사례 확인',
        'GA4 전환 이벤트 미수집으로 마케팅 예산 낭비',
      ],
    },
    solution: {
      heading: '해결 방안',
      text: '광고 캠페인마다 쿼리스트링 규칙이 제각각인 자사몰 20개+ 환경에서 정확한 A/B 테스트를 수행하려면, URL 정규화와 실험 그룹 고정이라는 두 가지 핵심 문제를 동시에 해결해야 했습니다. URL을 파라미터 순서와 무관하게 동일하게 인식하는 정규화 레이어와, 세션 재시작 후에도 같은 그룹을 유지하는 퍼시스턴스 레이어를 프론트엔드 단에서 설계·구현했습니다.',
      troubleshooting: [
        'UTM 파라미터 순서 불일치 → 쿼리스트링을 사전식 정렬하는 URL 정규화 함수 설계, 파라미터 순서에 무관하게 동일 URL로 인식',
        '새로고침 시 그룹 재배정 → Cookie(장기) + SessionStorage(단기) 이중 레이어로 실험 그룹 고정, 브라우저 종료 후에도 7일간 유지',
        '중복 리다이렉션 무한루프 장애 → 리다이렉션 플래그를 URL에 삽입해 루프 감지 후 즉시 탈출하는 예외처리 로직 구현',
        'GA4 전환 이벤트 미수집 → GTM 누락 원인 분석 후 이중 전환 방지 로직 재설계, Teams 웹훅 경보 시스템으로 실시간 알림 연동',
      ],
    },
    result: {
      heading: '결과',
      metrics: [
        { label: '전환율', before: '2.7%', after: '3.9%', delta: '+44%' },
        { label: 'ROAS', before: '190%', after: '240%', delta: '+26%' },
      ],
      text: '오차 없는 고객 행동 데이터를 확보하여 마케팅 예산 낭비를 막고 정확한 A/B 테스트 환경을 완성했습니다.',
    },
  },
  {
    id: 'project-figma',
    index: '02',
    title: 'Figma AI Publisher',
    subtitle: 'Design-to-Code Automation Platform',
    period: '2024–2025 — 에코마케팅 사이드 프로젝트',
    tags: ['LLM', 'MCP', 'Figma REST API', 'LangChain', 'Node.js'],
    problem: {
      heading: '문제 정의',
      text: '디자이너가 Figma에서 시안을 완성한 후, 개발자가 이를 코드로 변환하는 과정에서 반복적인 수작업이 필요했습니다. 시안 하나당 평균 2~3일의 퍼블리싱 시간이 소요되어 전체 개발 사이클의 병목이 되었습니다.',
    },
    analysis: {
      heading: '분석',
      points: [
        'Figma REST API를 통한 시안 노드 구조 파싱 가능성 확인',
        'LLM의 코드 생성 능력과 MCP(Model Context Protocol)를 활용한 자동화 가능성 검토',
        '7가지 반복 작업 패턴 식별 — 레이아웃, 타이포그래피, 컴포넌트, 이미지, 반응형, 인터랙션, 스타일 토큰',
      ],
    },
    solution: {
      heading: '해결 방안',
      text: 'Figma 시안 → 코드 변환의 반복 수작업을 없애기 위해, Figma REST API로 디자인 노드를 파싱하고 LLM이 이를 HTML/CSS로 자동 변환하는 파이프라인을 설계했습니다. 단순 번역이 아닌, 컴포넌트 재사용성 분석과 반응형 브레이크포인트 자동 적용까지 처리할 수 있도록 7가지 도구를 호출할 수 있는 MCP 서버를 직접 제작했습니다.',
      troubleshooting: [
        'Figma 노드 계층이 깊어질수록 LLM 컨텍스트 초과 → 노드 트리를 청크 단위로 분할 후 병렬 처리하는 LangChain 체인 설계',
        '벡터 그룹·오토레이아웃 혼재 시 CSS 변환 오류 → 노드 타입별 변환 전략 매핑 테이블 구축, Figma 속성 → CSS 속성 대응 규칙 명문화',
        'MCP 도구 호출 순서에 따른 컨텍스트 꼬임 → Tool Use 결과를 누적 컨텍스트로 관리하는 상태머신 패턴 도입',
        '이미지·아이콘 에셋 경로 유실 → Figma 이미지 Export API를 MCP 도구로 연동, base64 인라인 삽입으로 의존성 제거',
      ],
    },
    result: {
      heading: '결과',
      metrics: [
        { label: '업무 시간', before: '100%', after: '60%', delta: '-40%' },
        { label: 'MCP 도구', before: '0개', after: '7개', delta: '신규' },
      ],
      text: '팀 퍼블리싱 업무 시간을 약 40% 단축하고, AI와 디자인 툴을 연결하는 자동화 워크플로우를 구축했습니다.',
    },
  },
  {
    id: 'project-solvps',
    index: '03',
    title: 'SolvPS',
    subtitle: 'Algorithm Study Collaboration Platform',
    period: '2025 — 신한투자증권 프로디지털아카데미',
    tags: ['Next.js 15', 'Claude AI', 'Chrome Extension', 'PostgreSQL', 'AWS EC2', 'CI/CD'],
    problem: {
      heading: '문제 정의',
      text: '백준(BOJ) 알고리즘 스터디에서 팀원 간 코드 공유가 외부 채널을 경유해야 하는 번거로움이 있었습니다. 개인별 취약 유형 파악도 어렵고, 팀 진척도를 한눈에 보기 어려워 스터디 효율이 낮았습니다.',
    },
    analysis: {
      heading: '분석',
      points: [
        '제출 즉시 코드 동기화를 위한 Chrome Extension DOM 이벤트 감지 방식 채택',
        'BOJ 도메인에서 자체 서버 API 호출 시 Cross-Domain 보안 취약점 식별',
        'AI Tool Use 아키텍처로 취약 태그 분석 및 맞춤 문제 추천 설계',
        'CI/CD 배포 시 환경 변수 유실 및 PM2 런타임 인증 오류 패턴 분석',
      ],
    },
    solution: {
      heading: '해결 방안',
      text: '스터디 몰입도를 높이려면 세 가지를 해결해야 했습니다. 제출 즉시 코드 자동 동기화, 개인 취약점 AI 분석, 팀 진척도 실시간 확인. 이를 위해 Chrome Extension으로 BOJ 제출 이벤트를 감지하고, Claude AI Tool Use 아키텍처로 맞춤형 문제를 추천하며, CI/CD 자동화로 안정적인 배포 환경을 구축했습니다.',
      troubleshooting: [
        'BOJ 제출 후 채점 결과 비동기 수신 → Manifest V3 Content Script에서 Submit DOM 이벤트 즉시 감지, 채점 상태를 Status Polling으로 추적해 Accepted 시점에 서버 전송',
        'BOJ 도메인 → 자체 서버 간 Cross-Domain 보안 → JWT 인증 위에 HMAC 기반 Integration Token을 이중 검증 레이어로 추가해 위조 요청 차단',
        'Claude Tool Use 다중 도구 동시 호출 시 응답 지연 → SSE 스트리밍으로 부분 응답을 실시간 렌더링, 체감 응답속도 개선',
        'CI/CD 배포 시 .env 유실로 500·403 오류 반복 → CodeDeploy Before/AfterInstall 훅에 .env backup/restore 스크립트 추가, PM2 재기동 시 인증값 자동 재주입으로 해결',
      ],
    },
    result: {
      heading: '결과',
      metrics: [
        { label: '코드 동기화', before: '수동', after: '자동', delta: '100%' },
        { label: 'AI 분석', before: '없음', after: '실시간', delta: '신규' },
      ],
      text: '제출 즉시 코드 자동 동기화, AI 기반 취약점 분석, 팀 대시보드를 통해 스터디 몰입도를 높이는 올인원 협업 플랫폼을 완성했습니다.',
    },
  },
  {
    id: 'project-solmate',
    index: '04',
    title: 'SOLMate',
    subtitle: 'Mentoring-based Mock Investment Platform',
    period: '2025 — 신한투자증권 프로디지털아카데미',
    tags: ['React', 'Spring Boot', 'Redis', 'PostgreSQL', 'WebSocket', 'AWS'],
    problem: {
      heading: '문제 정의',
      text: '청소년·초보 투자자들이 올바른 투자 습관 없이 모의 투자를 하다 보니 충동적인 매매(뇌동매매)가 반복되었습니다. 다중 스레드 환경에서 동시 매수 요청 시 계좌 잔고가 실제보다 더 많이 차감되는 동시성 문제도 발생했습니다.',
    },
    analysis: {
      heading: '분석',
      points: [
        '멀티 스레드 환경 잔고 동시 조회 → 레이스 컨디션으로 잔고 초과 차감 발생',
        'Redis 분산 락 단독 사용 시 DB와 원자성이 보장되지 않는 치명적 한계 확인',
        '실시간 주식 차트 데이터(분봉) 처리 시 DB 쓰기 부하 급증 문제',
        '서버 확장 시 증권사 WebSocket 중복 연결로 인한 트래픽 과부하 위험',
      ],
    },
    solution: {
      heading: '해결 방안',
      text: '충동적 매매를 구조적으로 억제하려면 투자 전 매매일지 작성을 강제하고, 멘토의 실시간 피드백과 따라사기(Copy Trading) 기능으로 학습 동기를 유지하도록 설계했습니다. 동시에 실제 금융 거래와 동일한 수준의 데이터 무결성을 보장하기 위해, 계좌 잔고 동시성 제어와 실시간 주가 데이터 처리 아키텍처를 직접 설계·구현했습니다.',
      troubleshooting: [
        '다중 스레드 동시 매수 시 잔고 초과 차감 → Redis 락(1차 방어막, TTL+UUID 검증) + DB 비관적 락(SELECT FOR UPDATE) 이중 구조로 원자성 확보. Redis 단독으로는 DB와 트랜잭션이 분리되어 원장이 깨질 수 있음을 확인하고 이중 아키텍처 설계',
        '1분봉 실시간 처리 시 DB 쓰기 부하 급증 → Redis에 실시간 갱신 후 1분봉 확정 시점에만 RDS INSERT, 5분·60분봉은 사전 집계(Pre-aggregation)로 조회 레이턴시 최소화',
        '서버 증설 시 증권사 WebSocket 중복 연결로 트래픽 폭증 → 단일 수신 서버가 Redis Pub/Sub에 publish, 나머지는 subscribe만. 호가 데이터는 Reference Counting으로 구독 자동 해제',
        'ERD 유저-토큰 순환 참조로 제약 충돌 → 물리적 FK 연결을 끊고 인증 로직에서 식별자로 조회하도록 재설계, Stateless 보안과 데이터 정합성 동시 확보',
      ],
    },
    result: {
      heading: '결과',
      metrics: [
        { label: '시스템 안정성', before: '기준', after: '+30%', delta: '향상' },
        { label: '잔고 오류', before: '발생', after: '0건', delta: '완전 해결' },
      ],
      text: '매매일지 강제 작성, 멘토-멘티 매칭, 따라사기(Copy Trading) 기능을 갖춘 멘토링 모의투자 플랫폼을 안정적으로 출시했습니다.',
    },
  },
  {
    id: 'project-paytrace',
    index: '05',
    title: 'PayTrace',
    subtitle: 'Non-Financial Credit Score Assistant',
    period: '2025 — 신한투자증권 프로디지털아카데미',
    tags: ['React', 'Spring Boot', 'OCR', 'MyData API', 'AWS', 'PostgreSQL'],
    problem: {
      heading: '문제 정의',
      text: '2030 세대, 사회초년생, 프리랜서 등 금융 이력이 부족한 Thin-filer 계층은 월세·관리비·구독료 등 성실한 납부 기록이 있음에도 기존 신용평가에서 불이익을 받았습니다. 비금융 데이터를 검증 가능한 신용 자산으로 전환하는 방법이 필요했습니다.',
    },
    analysis: {
      heading: '분석',
      points: [
        '마이데이터 연동 + OCR 교차 검증으로 납부 데이터 신뢰성 확보 방안 도출',
        '기존 신용 점수 대체가 아닌 보조 지표(PayScore) 포지셔닝으로 규제 리스크 최소화',
        'PDF 신용 증명서 발행으로 금융기관 제출 가능한 공식 포맷 설계',
      ],
    },
    solution: {
      heading: '해결 방안',
      text: '기존 신용평가 체계를 대체하지 않고 보완하는 방향으로 포지셔닝했습니다. 월세·구독료 등 비금융 납부 데이터를 마이데이터 연동과 OCR 교차검증으로 신뢰성 있게 수집하고, 금융기관이 실제로 활용할 수 있는 PDF 신용 증명서 형태로 발행하는 Connect → Opt-in → Verify → Report 4단계 프로세스를 설계·구현했습니다.',
      troubleshooting: [
        '납부 내역 허위 제출 방지 → OCR로 추출한 납부 날짜·금액과 마이데이터 실이체 기록을 교차 검증, 불일치 시 자동 반려. 단순 스크린샷 조작 불가',
        'MyData API 응답 지연 → Scraping·Open API·MyData 3채널 병렬 수집 후 우선순위 기반 결과 병합, 응답 시간 단축',
        '금융권 수준 개인정보 보호 요건 충족 → AES-256 암호화 + 전송 구간 TLS, PDF 증명서에 디지털 서명 삽입으로 위변조 방지',
        'Opt-in 단계에서 불리한 기록 포함 방지 → 납부 건별 체크박스 UI로 사용자 직접 선택, 선택된 건만 Verify 파이프라인에 진입하도록 설계',
      ],
    },
    result: {
      heading: '결과',
      metrics: [
        { label: '대상 계층', before: '신용 소외', after: '포용', delta: 'Thin-filer' },
        { label: '증명 방식', before: '불가', after: 'PDF 발행', delta: '공식화' },
      ],
      text: '비금융 생활 지출 데이터를 검증 가능한 신용 자산으로 전환해 금융 소외 계층의 신용 접근성을 높이는 핀테크 플랫폼을 기획·구축했습니다.',
    },
  },
];

export const SKILLS: Record<string, string[]> = {
  Frontend: ['HTML/CSS', 'JavaScript (ES6+)', 'React.js', 'Next.js 16', 'TypeScript', 'Zustand / Redux', 'Tailwind CSS'],
  Backend: ['Node.js', 'Spring Boot', 'PostgreSQL', 'Redis', 'MySQL'],
  'Cloud & DevOps': ['AWS EC2', 'S3', 'CodeDeploy', 'Route53', 'GitHub Actions (CI/CD)', 'NGINX', 'PM2'],
  Analytics: ['GA4', 'GTM', 'Facebook Pixel', 'BigQuery', 'Beusable'],
  'AI / Automation': ['Claude SDK', 'OpenAI SDK', 'LangChain', 'MCP', 'Figma REST API'],
  Design: ['Figma', 'Photoshop', 'Illustrator', 'Premiere Pro'],
};

export const CAREER: CareerItem[] = [
  {
    company: '(주)에코마케팅',
    role: '마케팅테크팀 · 웹 개발 / UI·UX',
    period: '2024.05 — 2025.12',
    desc: '자사몰 20개+ 퍼블리싱, A/B 테스트 플랫폼 프론트엔드 로직 개발, AI 자동화 기획',
  },
  {
    company: '대한민국 육군 제31보병사단',
    role: '공보정훈/홍보문화장교 · 중위 만기전역',
    period: '2021.03 — 2023.06',
    desc: '메타버스(ZEP) 활용 교육 혁신, 대형 공연 기획, 군 인트라넷 UI 개선 공모전 참여',
  },
];

export const EDUCATION: EducationItem[] = [
  { school: '경희대학교', dept: '글로벌커뮤니케이션학부', period: '2017.03 — 2021.02 · GPA 4.02/4.5' },
  { school: '부일외국어고등학교', dept: '영어/중국어과', period: '2014.03 — 2017.02' },
];

export const BOOTCAMPS: BootcampItem[] = [
  { name: '신한투자증권 프로디지털아카데미 7기', detail: '클라우드 금융 플랫폼 개발', period: '2025.12 — 현재 · 970시간' },
  { name: '그린컴퓨터아카데미', detail: 'UI/UX 반응형 웹디자인 & 웹퍼블리셔', period: '2023.10 — 2024.03 · 760시간' },
];

export const CERTS: CertItem[] = [
  { name: 'AWS Certified Solutions Architect – Associate', date: '2026.02', issuer: 'Amazon Web Services' },
  { name: '웹디자인기능사', date: '2024.04', issuer: '한국산업인력공단' },
  { name: 'OPIc 영어 IH', date: '2025.03', issuer: 'ACTFL' },
];
