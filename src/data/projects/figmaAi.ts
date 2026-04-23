import { Project } from '../../types';

const figmaAi: Project = {
  id: 'project-figma',
  index: '03',
  title: 'LLM, MCP 기반 디자인 자동화 도구',
  period: '2024–2025 — 에코마케팅 사이드 프로젝트',
  overview: 'Figma 시안 → 코드 변환의 반복 수작업을 LLM과 MCP 서버로 자동화, 퍼블리싱 병목 제거.',
  stack: ['LLM', 'MCP', 'Figma REST API', 'LangChain', 'Node.js'],
  issues: [
    {
      tag: 'Refactoring',
      title: 'Figma 노드 계층 파싱 시 LLM 컨텍스트 초과',
      problem:
        'Figma 시안 노드 계층이 깊어질수록 단일 LLM 요청으로 처리 시 컨텍스트 초과. 벡터 그룹과 오토레이아웃이 혼재할 때 CSS 변환 오류 반복 발생. MCP 도구 호출 순서에 따라 컨텍스트가 꼬여 결과 불일치 문제 확인.',
      solution:
        '노드 트리를 의미 단위 청크로 분할 후 병렬 처리하는 LangChain 체인 설계. 노드 타입별 CSS 변환 전략 매핑 테이블 구축(Figma 속성 → CSS 속성 대응 규칙 명문화). Tool Use 결과를 누적 컨텍스트로 관리하는 상태머신 패턴 도입, Figma 이미지 Export API를 MCP 도구로 연동해 base64 인라인 삽입으로 에셋 의존성 제거.',
      metrics: [
        { label: '업무 시간', before: '100%', after: '60%', delta: '-40%' },
        { label: 'MCP 도구', before: '0개', after: '7개', delta: '신규' },
      ],
      result:
        '팀 퍼블리싱 업무 시간 40% 단축. 레이아웃·타이포그래피·컴포넌트·이미지·반응형·인터랙션·스타일 토큰 7가지 패턴 자동화.',
    },
  ],
};

export default figmaAi;
