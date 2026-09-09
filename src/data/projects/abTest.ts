import { Project } from '../../types';

const abTest: Project = {
  id: 'project-ab-test',
  index: '02',
  title: 'JavaScript 기반 A/B 테스트 엔진 (ELO)',
  period: '2024 — 에코마케팅',
  overview:
    'URL 기반으로 고객군을 분류해 행동 데이터를 분석하는 사내 A/B 테스트 플랫폼. "데이터 무결성"을 최우선 가치로 두고 프론트엔드 테스트 로직 전반을 설계 — 중복·누락 0건 확보.',
  stack: ['JavaScript', 'Cookie / SessionStorage', 'GA4', 'GTM', 'BigQuery', 'Teams Webhook'],
  issues: [
    {
      tag: 'Troubleshooting',
      title: '쿼리스트링 규칙 불일치 & 무한 리다이렉션 루프로 플랫폼 다운',
      problem:
        '자사몰 20개+ 환경에서 캠페인마다 UTM 파라미터 순서가 달라 같은 URL이 다른 키로 처리 → 원본과 대안 URL 매칭 실패로 A/B 집계가 오염. 새로고침 시 그룹 재배정으로 일관성 붕괴. 원본↔대안 리다이렉션이 서로를 호출하며 무한 루프가 발생해 플랫폼 자체가 다운되는 장애 발생.',
      solution:
        '쿼리스트링을 사전식으로 정렬하는 URL 정규화 함수를 직접 설계해 파라미터 순서와 무관하게 동일 URL로 인식. Cookie(7일) + SessionStorage 이중 레이어로 새로고침에도 동일 테스트 UI 노출. 리다이렉션 플래그를 URL에 삽입해 루프 즉시 탈출하는 예외처리 구현. URL 인식 오류 발생 시 Teams 웹훅으로 경고 메시지를 보내 운영팀이 즉시 인지하도록 알림 채널 구축.',
      metrics: [
        { label: '전환율', before: '2.7%', after: '3.9%', delta: '+44%' },
        { label: 'ROAS', before: '190%', after: '240%', delta: '+26%' },
      ],
      result:
        '오차 없는 A/B 테스트 데이터 확보 → 마케팅 지표 신뢰도 회복. 백엔드·데이터 엔지니어와 사용자 이벤트 로그 전송 포맷을 끊임없이 질문·검증하며 정의해 무결성을 구조적으로 확보. 무한루프 장애 근절 + 이중 전환 방지 로직으로 마케팅 예산 낭비 차단.',
    },
  ],
};

export default abTest;
