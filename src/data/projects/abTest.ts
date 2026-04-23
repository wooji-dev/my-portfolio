import { Project } from '../../types';

const abTest: Project = {
  id: 'project-ab-test',
  index: '02',
  title: 'JavaScript 기반 A/B 테스트 엔진',
  period: '2024 — 에코마케팅',
  overview: '쿼리스트링 불일치와 무한 리다이렉션 루프로 다운된 A/B 테스트 플랫폼을 프론트엔드 단에서 재설계.',
  stack: ['JavaScript', 'GTM', 'GA4', 'BigQuery', 'Cookie/Session'],
  issues: [
    {
      tag: 'Troubleshooting',
      title: '쿼리스트링 불일치와 무한 리다이렉션 루프로 플랫폼 다운',
      problem:
        '자사몰 20개+ 환경에서 UTM 파라미터 순서가 캠페인마다 달라 같은 URL이 다른 키로 처리 → A/B 테스트 집계 데이터 오염. 새로고침 시 그룹 재배정으로 일관성 붕괴. 중복 리다이렉션 무한루프로 플랫폼 자체가 다운되는 장애 발생.',
      solution:
        '쿼리스트링을 사전식 정렬하는 URL 정규화 함수 설계, 파라미터 순서와 무관하게 동일 URL로 인식. Cookie(7일) + SessionStorage 이중 레이어로 실험 그룹 고정. 리다이렉션 플래그를 URL에 삽입해 루프 감지 즉시 탈출하는 예외처리 구현. GA4 전환 이벤트 누락 원인 분석 후 이중 전환 방지 로직 재설계.',
      metrics: [
        { label: '전환율', before: '2.7%', after: '3.9%', delta: '+44%' },
        { label: 'ROAS', before: '190%', after: '240%', delta: '+26%' },
      ],
      result:
        '오차 없는 A/B 테스트 데이터 확보, 플랫폼 무한루프 장애 근절, 마케팅 예산 낭비 차단. Teams 웹훅 경보로 GA4 전환 이벤트 실시간 알림 연동.',
    },
  ],
};

export default abTest;
