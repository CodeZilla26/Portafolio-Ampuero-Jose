export type ProfileMode = 'fullstack' | 'frontend' | 'backend';

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'hybrid' | 'remote' | 'onsite';
  category: 'frontend' | 'backend' | 'fullstack';
  summary: string;
  achievements: string[];
  technologies: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
}

export interface SkillItem {
  name: string;
  category: 'frontend' | 'backend' | 'database' | 'testing' | 'tools';
  level: 'Avanzado' | 'Intermedio' | 'Especializado';
  icon: string;
  description: string;
  tags: string[];
  highlightIn?: ('frontend' | 'backend' | 'fullstack')[];
}

export interface ProjectShowcase {
  id: string;
  title: string;
  tagline: string;
  role: string;
  featured: boolean;
  version: string;
  overview: string;
  impactMetrics: { label: string; value: string; detail: string }[];
  architecturePoints: { title: string; description: string; tag: string }[];
  technologies: string[];
  githubUrl: string;
  demoUrl?: string;
  docsUrl?: string;
}
