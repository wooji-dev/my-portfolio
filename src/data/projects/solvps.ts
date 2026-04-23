import { Project } from '../../types';

const solvps: Project = {
  id: 'project-solvps',
  index: '04',
  title: 'AI, Next.js 기반 알고리즘 협업 플랫폼',
  period: '2025 — 신한투자증권 프로디지털아카데미',
  overview: '백준 알고리즘 스터디 코드 공유·취약점 분석·팀 진척 관리를 하나의 플랫폼으로 통합.',
  stack: ['Next.js 15', 'Claude AI', 'Chrome Extension', 'PostgreSQL', 'AWS EC2', 'CI/CD'],
  issues: [
    {
      tag: 'Prevention',
      title: 'BOJ 도메인 → 자체 서버 간 Cross-Domain 보안 취약점',
      problem:
        'Manifest V3 Content Script에서 BOJ 도메인의 Submit 이벤트 감지 후 자체 서버로 직접 API 호출 시 Cross-Domain 보안 노출. JWT 단독 인증으로는 타 도메인 위조 요청 차단 불가. 채점 결과가 비동기 수신이라 Accepted 시점을 정확하게 감지하기 어려운 구조.',
      solution:
        'JWT 인증 위에 HMAC 기반 Integration Token을 이중 검증 레이어로 추가해 위조 요청 차단. Content Script에서 Submit DOM 이벤트 즉시 감지, Status Polling으로 Accepted 시점에 서버 전송. Claude Tool Use 다중 도구 호출 시 SSE 스트리밍으로 부분 응답 실시간 렌더링. CodeDeploy 훅에 .env backup/restore 스크립트 추가해 배포 시 환경 변수 유실 방지.',
      metrics: [
        { label: '코드 동기화', before: '수동', after: '자동', delta: '100%' },
        { label: 'AI 분석', before: '없음', after: '실시간', delta: '신규' },
      ],
      result:
        '위조 요청 차단, 제출 즉시 코드 자동 동기화, AI 기반 취약 태그 분석 및 맞춤 문제 추천 실현.',
    },
  ],
};

export default solvps;
