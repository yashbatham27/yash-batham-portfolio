export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Project {
  id: string;
  title: string;
  tech: string[];
  description: string;
  link?: string;
  repo?: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}