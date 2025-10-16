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
  category: 'Frontend' | 'Backend' | 'Database' | 'Tools' | 'Music';
}

export interface ContactInfo {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  spotify?: string;
  youtube?: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  avatarUrl?: string;
  resumeUrl?: string;
}
