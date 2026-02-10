
import { Experience, Project, SkillCategory } from './types';

// Start date: July 1, 2023
export const START_DATE = new Date('2023-07-01');

export const getExperience = () => {
  const now = new Date();
  const diff = now.getTime() - START_DATE.getTime();
  const years = diff / (1000 * 60 * 60 * 24 * 365.25);
  return years.toFixed(1);
};

export const EXPERIENCE_DATA: Experience[] = [
  {
    id: 'exp-1',
    company: 'Accenture',
    role: 'Software Developer',
    period: 'Jul 2023 - Present',
    description: 'Building scalable, enterprise-grade web applications using React.js, Next.js, and TypeScript.',
    achievements: [
      'Developed MHRA R1 (React.js) and MHRA R2 (Next.js) medicine management portals using GOV.UK Design System.',
      'Built the NXP / Aegis Responsible AI Platform using React.js and Next.js for AI use case submission and tracking.',
      'Implemented Role-Based Access Control (RBAC) and multi-level review workflows for AI Risk & Technology Committee.',
      'Improved application reliability by writing unit and component tests using Jest and React Testing Library.',
      'Conducted code reviews, mentored junior developers, and collaborated in Agile ceremonies.'
    ]
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'proj-insure-ai',
    title: 'InsureAI — Underwriting Suite',
    tech: ['React.js', 'TypeScript', 'Gemini AI', 'Tailwind CSS'],
    description: 'Engineered a Hybrid AI-Deterministic Architecture using Gemini 3 Flash/Pro for entity extraction and a TypeScript rule engine for risk assessment, preventing hallucinations in premium calculations. Implemented a custom Highlighter UI to visualize extracted medical terms and integrated jsPDF/Recharts for generating real-time professional actuarial reports.',
    link: 'https://insureai-web.vercel.app/',
    repo: 'https://github.com/yashbatham27/InsureAI-underwriting-suite'
  },
  {
    id: 'proj-portfolio',
    title: 'Personal Portfolio (Cyberpunk)',
    tech: ['React.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    description: 'A high-performance, monochrome cyberpunk-themed personal portfolio website. Features include CRT monitor simulation, custom glitch text effects, a matrix rain background, and a terminal-inspired UI interface.',
    link: 'https://yash-batham.vercel.app/',
    repo: 'https://github.com/yashbatham27/yash-batham-portfolio'
  },
  {
    id: 'proj-1',
    title: 'Yize — E-commerce',
    tech: ['Next.js', 'MongoDB', 'Node.js', 'Redux', 'Razorpay'],
    description: 'A full-stack fashion e-commerce application with authentication, product management, and order tracking. Integrated Razorpay for secure payments and Redux for global state management.',
    link: '#'
  },
  {
    id: 'proj-2',
    title: 'YNotes — Note Taking',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    description: 'Secure note-taking web application with authentication and CRUD functionality. Features RESTful API integration for user authentication and note management.',
    link: '#'
  }
];

export const SKILLS_DATA: SkillCategory[] = [
  {
    category: 'Frontend_Stack',
    items: ['React.js', 'Next.js (App Router)', 'TypeScript', 'Redux/Redux Saga', 'Tailwind CSS', 'HTML5/CSS3', 'Bootstrap']
  },
  {
    category: 'Backend_&_DB',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'SQL Server', 'Java']
  },
  {
    category: 'Testing_&_Tools',
    items: ['Jest', 'React Testing Library', 'Git/GitHub', 'Postman', 'Jira', 'Figma', 'VS Code']
  },
  {
    category: 'Engineering_Ops',
    items: ['Agile/Scrum', 'CI/CD Pipelines', 'WCAG Accessibility', 'Responsive Design', 'OOP', 'Code Reviews']
  }
];

export const SOCIAL_LINKS = {
  linkedin: 'https://www.linkedin.com/in/yash-batham-27yb',
  email: 'mailto:yashombatham@gmail.com'
};
