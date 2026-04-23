export interface Metric {
  label: string;
  before: string;
  after: string;
  delta: string;
}

export type IssueTag = 'Troubleshooting' | 'Prevention' | 'Refactoring' | 'Clean Code';

export interface Issue {
  tag: IssueTag;
  title: string;
  problem: string;
  solution: string;
  metrics?: Metric[];
  result: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  period: string;
  overview: string;
  stack: string[];
  issues: Issue[];
}

export interface CareerItem {
  company: string;
  role: string;
  period: string;
  desc: string;
}

export interface EducationItem {
  school: string;
  dept?: string;
  period: string;
}

export interface CertItem {
  name: string;
  date: string;
  issuer: string;
}

export interface BootcampItem {
  name: string;
  detail?: string;
  period: string;
}
