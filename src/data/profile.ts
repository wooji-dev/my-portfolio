import { CareerItem, EducationItem, CertItem, BootcampItem } from '../types';

export const SKILLS: Record<string, string[]> = {
  Frontend: ['HTML/CSS', 'JavaScript (ES6+)', 'React.js', 'Next.js 15', 'TypeScript', 'Zustand / Redux', 'Tailwind CSS'],
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
