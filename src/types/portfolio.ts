export interface PersonalInfo {
  name: string;
  role: string;
  tagline: string;
  bio: string;
  shortBio: string;
  location: string;
  email: string;
  phone?: string;
  availableForHire: boolean;
  resumeUrl: string;
  socials: {
    github: string;
    linkedin: string;
    twitter?: string;
    instagram?: string;
  };
}

export interface StatItem {
  value: string;
  label: string;
  description: string;
}

export interface ServiceItem {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

export interface Skill {
  name: string;
  level: number; // 0 - 100
  experience: string;
  iconName?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  category: string;
  description: string;
  items: Skill[];
}

export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'Semua' | 'Web Apps' | 'Dashboard' | 'E-Commerce' | 'UI Library';
  description: string;
  challenge: string;
  solution: string;
  metrics: string[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  mockupType: 'dashboard' | 'ecommerce' | 'saas' | 'uikit';
}

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
  relationship: string;
}
