export interface Metric {
  label: string;
  before: string;
  after: string;
  delta: string;
}

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  period: string;
  tags: string[];
  problem: {
    heading: string;
    text: string;
  };
  analysis: {
    heading: string;
    points: string[];
  };
  solution: {
    heading: string;
    text: string;
    troubleshooting: string[];
  };
  result: {
    heading: string;
    metrics: Metric[];
    text: string;
  };
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

export type AuroraVariant = 'default' | 'alt';
