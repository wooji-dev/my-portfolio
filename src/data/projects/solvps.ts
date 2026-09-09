import { Project } from '../../types';

const solvps: Project = {
  id: 'project-solvps',
  index: '04',
  title: 'AI, Next.js 기반 알고리즘 협업 플랫폼',
  period: '2025 — 신한투자증권 프로디지털아카데미',
  overview:
    '백준 알고리즘 스터디의 코드 공유 번거로움·취약점 파악 불가 문제를 해결하는 협업 학습 & 자동 동기화 플랫폼. 크롬 확장으로 제출 코드를 실시간 수집하고 Claude AI가 풀이 페르소나를 분류해 맞춤 로드맵을 제공.',
  stack: ['Next.js 16 (App Router)', 'React 19', 'TailwindCSS 4', 'PostgreSQL (Supabase)', 'Drizzle ORM', 'Claude SDK', 'OpenAI SDK', 'Chrome Extension (MV3)', 'AWS EC2', 'GitHub Actions'],
  issues: [
    {
      tag: 'Prevention',
      title: 'BOJ 도메인 → 자체 서버 Cross-Domain 보안 + 채점 결과 비동기 감지',
      problem:
        'Manifest V3 Content Script가 BOJ 도메인에서 자체 서버 API를 호출하면 Cross-Domain 위조 요청 위험 노출. JWT 단독으로는 타 도메인 위조 요청 차단 불가. 채점 결과가 비동기로 수신되어 Pending → Accepted 전환 시점을 정확히 잡기 어려움. CodeDeploy 배포 시 운영 환경 변수(.env)가 사라지는 장애도 반복 발생.',
      solution:
        'JWT 위에 HMAC 기반 Integration Token을 추가한 이중 검증 체계로 위조 차단(타이밍 공격 방지를 위해 timingSafeEqual 사용). Content/Background Script가 BOJ Submit DOM 이벤트를 즉시 감지, Status DOM Polling으로 Accepted 전환 순간을 안정적으로 포착해 데이터 유실·중복 없이 수집. CodeDeploy 훅에 .env backup/restore 스크립트를 도입해 환경 변수 영속성 확보, EC2 ubuntu 사용자 권한 통일과 PM2 재기동 시 인증값 재주입 절차 고정으로 500/403 차단.',
      metrics: [
        { label: '코드 동기화', before: '수동(카톡/GitHub)', after: '자동', delta: '제출 즉시' },
        { label: '배포 안정성', before: '환경 변수 유실', after: '무중단', delta: 'CI/CD 안정화' },
      ],
      result:
        'GitHub Actions → S3(Artifact) → CodeDeploy → EC2 무중단 배포 파이프라인 확립. Better Auth + Custom JWT로 웹/익스텐션 이중 인증 통합 관리.',
    },
    {
      tag: 'Refactoring',
      title: 'Claude Tool Use — 사용자 풀이 페르소나 분류 & SSE 실시간 가시화',
      problem:
        '단순 정답률 평가로는 사용자의 실제 약점을 진단할 수 없고, 메타 태그(Ad-hoc·수학)가 통계를 오염시킴. AI의 다단계 추론 대기 시간이 길어 사용자가 무엇이 진행 중인지 알 수 없으면 신뢰도가 떨어짐.',
      solution:
        'Claude SDK(claude-haiku-4-5)에 solved.ac 연동 커스텀 Tool 3종(get_user_info·get_tag_stats·search_problems)을 정의해 AI가 스스로 다음 행동을 결정하는 지능형 워크플로우 설계. 메타 태그를 제외하고 풀이율 낮고 문제 수 많은 분야를 우선순위화하는 자체 알고리즘 적용. Next.js API Routes + SSE(Server-Sent Events)로 도구 호출 상태와 중간 결과를 대시보드에 실시간 스트리밍 — 분석 신뢰도를 사용자가 직관적으로 체감. analysis_reports 캐싱으로 API 비용 절감.',
      metrics: [
        { label: 'AI 분석', before: '없음', after: '실시간', delta: '신규' },
        { label: '맞춤 진단', before: '단순 정답률', after: '페르소나 분류', delta: '끈기형·DP 전문가 등' },
      ],
      result:
        '최근 푼 상위 100문제 기반으로 사용자 풀이 페르소나 분류 → 개인화 단계별 로드맵 자동 생성. AI 코드 비교 분석(가독성·안정성·유지보수성) API로 팀 내 풀이 방식 차이 명확히 파악.',
    },
  ],
};

export default solvps;
