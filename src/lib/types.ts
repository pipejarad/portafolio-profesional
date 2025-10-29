// Types for portfolio data
export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  // Blog fields
  slug?: string;
  blogContent?: ProjectBlogContent;
}

export interface ProjectBlogContent {
  summary: string;
  learningJourney: LearningStep[];
  challenges: Challenge[];
  highlights: string[];
  techStackDetails: TechStackDetail[];
  gallery: ProjectImage[];
  nextSteps?: string[];
  developmentStatus: 'completed' | 'in-progress' | 'planning';
}

export interface LearningStep {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  insights: string[];
}

export interface Challenge {
  id: string;
  problem: string;
  solution: string;
  learnings: string[];
}

export interface TechStackDetail {
  technology: string;
  purpose: string;
  experience: 'new' | 'familiar' | 'expert';
  keyFeatures: string[];
}

export interface ProjectImage {
  id: string;
  url: string;
  alt: string;
  caption: string;
  type: 'screenshot' | 'gif' | 'diagram';
}

export interface MusicStory {
  title: string;
  heroImage: string;
  story: string[];
  spotifyPlaylist: string;
  photos: Photo[];
  philosophy: string;
}

export interface Photo {
  id: string;
  url: string;
  alt: string;
  caption?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  startDate: string;
  endDate?: string;
  description: string;
  technologies: string[];
  current: boolean;
}

export interface Skill {
  name: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Instrumentos' | 'Music';
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  spotify?: string;
  instagram?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatarUrl?: string;
  resumeUrl?: string;
}
