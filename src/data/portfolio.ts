import { PersonalInfo, ContactInfo, Skill, Experience, Project, MusicProject } from '@/lib/types';

export const personalInfo: PersonalInfo = {
  name: "Felipe Jara",
  title: "Ingeniero en Computación e Informática / Músico y Sonidista mención en Composición e Interpretación musical.",
  bio: "Ingeniero en Computación e Informática y Músico Profesional buscando oportunidades en el sector IT donde pueda aplicar mi creatividad técnica y artística.",
  avatarUrl: "/images/profile.svg",
  resumeUrl: "/cv.pdf"
};

export const contactInfo: ContactInfo = {
  email: "jarad.felipe@gmail.com",
  phone: "+56 9 3265845",
  location: "Santiago, Chile",
  linkedin: "https://linkedin.com/in/felipe-jara-6582a3100/",
  github: "https://github.com/pipejarad",
  spotify: "https://open.spotify.com/playlist/0yuZpwdIGC50LnUwXF5UpE?si=dd1d85bba7f241a0",
  youtube: "https://youtube.com/@tu-canal"
};

export const skills: Skill[] = [
  // Frontend
  { name: "React", level: "Advanced", category: "Frontend" },
  { name: "Next.js", level: "Advanced", category: "Frontend" },
  { name: "TypeScript", level: "Advanced", category: "Frontend" },
  { name: "Tailwind CSS", level: "Advanced", category: "Frontend" },
  { name: "HTML5/CSS3", level: "Expert", category: "Frontend" },
  { name: "JavaScript", level: "Expert", category: "Frontend" },
  { name: "Vue.js", level: "Intermediate", category: "Frontend" },
  
  // Backend
  { name: "Node.js", level: "Intermediate", category: "Backend" },
  { name: "Python", level: "Intermediate", category: "Backend" },
  { name: "Express.js", level: "Intermediate", category: "Backend" },
  { name: "RESTful APIs", level: "Advanced", category: "Backend" },
  { name: "GraphQL", level: "Beginner", category: "Backend" },
  
  // Database
  { name: "MongoDB", level: "Intermediate", category: "Database" },
  { name: "PostgreSQL", level: "Intermediate", category: "Database" },
  { name: "Firebase", level: "Intermediate", category: "Database" },
  { name: "MySQL", level: "Intermediate", category: "Database" },
  
  // Tools
  { name: "Git", level: "Advanced", category: "Tools" },
  { name: "VS Code", level: "Expert", category: "Tools" },
  { name: "Figma", level: "Intermediate", category: "Tools" },
  { name: "Docker", level: "Beginner", category: "Tools" },
  { name: "Vercel", level: "Advanced", category: "Tools" },
  { name: "AWS", level: "Beginner", category: "Tools" },
  
  // Music
  { name: "Ableton Live", level: "Advanced", category: "Music" },
  { name: "Logic Pro", level: "Intermediate", category: "Music" },
  { name: "Mixing & Mastering", level: "Advanced", category: "Music" },
  { name: "Composición", level: "Expert", category: "Music" },
  { name: "Pro Tools", level: "Intermediate", category: "Music" },
  { name: "Sound Design", level: "Advanced", category: "Music" }
];

// Agregar función helper para obtener nivel numérico
export const getSkillLevel = (level: string): number => {
  switch (level) {
    case 'Beginner': return 25;
    case 'Intermediate': return 50;
    case 'Advanced': return 75;
    case 'Expert': return 90;
    default: return 0;
  }
};

export const experience: Experience[] = [
  {
    id: "1",
    company: "Empresa Actual",
    position: "Desarrollador Frontend",
    startDate: "2023-01",
    description: "Desarrollo de aplicaciones web modernas usando React y Next.js. Colaboración en equipo ágil y mejora continua de la experiencia del usuario.",
    technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    current: true
  },
  {
    id: "2",
    company: "Estudio Musical",
    position: "Productor Musical",
    startDate: "2020-06",
    endDate: "2023-12",
    description: "Producción musical para artistas independientes. Grabación, mezcla y masterización de proyectos musicales diversos.",
    technologies: ["Ableton Live", "Logic Pro", "Pro Tools"],
    current: false
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "E-commerce Platform",
    description: "Plataforma de comercio electrónico desarrollada con Next.js y Stripe para pagos. Incluye panel de administración y gestión de inventario.",
    technologies: ["Next.js", "TypeScript", "Stripe", "MongoDB", "Tailwind CSS"],
    imageUrl: "/projects/ecommerce.svg",
    liveUrl: "https://mi-ecommerce.vercel.app",
    githubUrl: "https://github.com/usuario/ecommerce",
    featured: true
  },
  {
    id: "2",
    title: "Task Management App",
    description: "Aplicación de gestión de tareas con drag & drop, colaboración en tiempo real y notificaciones push.",
    technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
    imageUrl: "/projects/taskmanager.svg",
    githubUrl: "https://github.com/usuario/task-manager",
    featured: true
  },
  {
    id: "3",
    title: "Weather App",
    description: "Aplicación del clima con geolocalización, pronósticos detallados y diseño responsive.",
    technologies: ["React", "OpenWeather API", "CSS Modules"],
    imageUrl: "/projects/weather.svg",
    liveUrl: "https://weather-app-demo.vercel.app",
    githubUrl: "https://github.com/usuario/weather-app",
    featured: false
  }
];

export const musicProjects: MusicProject[] = [
  {
    id: "1",
    title: "Midnight Dreams",
    artist: "Tu Nombre Artístico",
    description: "EP de música electrónica ambient con influencias de synthwave y música cinematográfica.",
    genre: ["Electronic", "Ambient", "Synthwave"],
    releaseDate: "2023-12",
    imageUrl: "/music/midnight-dreams.svg",
    spotifyUrl: "https://open.spotify.com/album/ejemplo",
    youtubeUrl: "https://youtube.com/watch?v=ejemplo",
    featured: true
  },
  {
    id: "2",
    title: "Code Symphony",
    artist: "Tu Nombre Artístico",
    description: "Álbum conceptual que combina sonidos de programación con melodías orgánicas.",
    genre: ["Experimental", "Electronic", "Ambient"],
    releaseDate: "2023-08",
    imageUrl: "/music/code-symphony.svg",
    spotifyUrl: "https://open.spotify.com/album/ejemplo2",
    soundcloudUrl: "https://soundcloud.com/usuario/code-symphony",
    featured: true
  },
  {
    id: "3",
    title: "Digital Folklore",
    artist: "Colaboración",
    description: "Proyecto colaborativo fusionando música tradicional con elementos electrónicos modernos.",
    genre: ["Folk", "Electronic", "World Music"],
    releaseDate: "2023-05",
    imageUrl: "/music/digital-folklore.svg",
    youtubeUrl: "https://youtube.com/watch?v=ejemplo3",
    featured: false
  }
];
