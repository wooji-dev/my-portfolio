import { Project } from '../../types';

const paytrace: Project = {
  id: 'project-paytrace',
  index: '06',
  title: '마이데이터 기반 비금융 신용 보조 서비스',
  period: '2025 — 신한투자증권 프로디지털아카데미',
  overview: 'Thin-filer 계층의 월세·구독료 납부 기록을 검증 가능한 신용 자산으로 전환, PDF 증명서 발행.',
  stack: ['React', 'TypeScript', 'OCR', 'MyData API', 'AWS', 'PostgreSQL'],
  issues: [
    {
      tag: 'Prevention',
      title: '납부 내역 허위 제출 방지 — OCR × 마이데이터 교차 검증',
      problem:
        '비금융 납부 데이터 기반 신용 서비스에서 스크린샷 조작이나 허위 납부 내역 제출이 신뢰성의 핵심 장벽. 단일 채널 수집으로는 위변조 방지 불가. MyData API 응답 지연으로 수집 병목 발생.',
      solution:
        'OCR로 추출한 납부 날짜·금액과 마이데이터 실이체 기록을 교차 검증, 불일치 시 자동 반려 — 단순 스크린샷 조작 불가. Scraping·Open API·MyData 3채널 병렬 수집 후 우선순위 기반 결과 병합으로 응답 지연 해소. AES-256 + TLS + 디지털 서명으로 PDF 증명서 위변조 방지. Opt-in 단계에서 납부 건별 체크박스로 사용자가 제출 데이터를 직접 선택.',
      metrics: [
        { label: '대상 계층', before: '신용 소외', after: '포용', delta: 'Thin-filer' },
        { label: '증명 방식', before: '불가', after: 'PDF 발행', delta: '공식화' },
      ],
      result:
        '이중 검증 구조로 데이터 신뢰성 확보. 금융기관 제출 가능한 공식 PDF 신용 증명서 발행. Connect → Opt-in → Verify → Report 4단계 프로세스 완성.',
    },
  ],
};

export default paytrace;
