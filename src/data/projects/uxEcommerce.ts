import { Project } from '../../types';

const uxEcommerce: Project = {
  id: 'project-ux-ecommerce',
  index: '01',
  title: '데이터 기반 UX 전환율 최적화',
  period: '2024 — 에코마케팅',
  overview:
    '회원 100만+ 패션·뷰티 자사몰의 광고 유입 대비 전환율 저하 원인을 GA4·뷰저블 데이터로 규명하고 랜딩 구조를 재설계 — "디자인을 구현하는 사람"이 아니라 "최종 사용자 경험의 책임자"로서 개입.',
  stack: ['GA4', 'GTM', 'Beusable (Heatmap)', 'A/B Test', 'UTM', 'Cafe24 / 메이크샵'],
  issues: [
    {
      tag: 'Troubleshooting',
      title: '광고 유입 의도와 랜딩 정보 불일치로 인한 Above-the-fold 이탈',
      problem:
        '히트맵 분석 결과 상단 840px 구간에 핵심 정보가 부재해 53% 이상이 Above-the-fold에서 이탈. 랜딩 직후 내부 검색 사용 비율이 평균 대비 3.2배 높아 "길을 잃었다"는 신호 포착. "가격비교" 키워드로 유입된 고객이 해당 정보를 첫 화면에서 찾지 못하고 이탈하는 패턴이 반복.',
      solution:
        'UTM 파라미터 기반으로 유입 키워드를 식별하고 세그먼트별 Hero 섹션 메시지를 동적 변경해 의도-랜딩 정합성 확보. Above-the-fold에 핵심 가치 제안(헤드라인·가격·CTA)을 최우선 배치. GNB·메뉴를 제거해 단일 전환 흐름(광고 진입 → 상품 확인 → 구매)으로 단순화. 광고 전환 데이터 미수집 이슈 발생 시 로그·코드 구조를 직접 분석해 GTM 트래킹 코드 누락을 파악하고 이중 전환 방지 로직을 설계.',
      metrics: [
        { label: '전환율', before: '기준', after: '+44%', delta: '↑' },
        { label: 'Bounce Rate', before: '높음', after: '유의미 감소', delta: '↓' },
      ],
      result:
        '스크롤 없이 의사결정 가능한 구조로 전환율 44% 개선. GA4 Funnel과 Beusable 세션 레코딩을 주기적으로 교차 검토해 개선 효과를 수치로 검증. 마케팅 예산 낭비를 차단하고 데이터 신뢰도를 회복.',
    },
  ],
};

export default uxEcommerce;
