import { PersonalInfo, ContactInfo, Skill, Experience, Project, MusicStory } from '@/lib/types';

export const personalInfo: PersonalInfo = {
  name: "Felipe Jara",
  title: "Ingeniero en Computación e Informática / Músico y Sonidista mención en Composición e Interpretación musical.",
  bio: "Ingeniero en Computación e Informática con pasión por el desarrollo de software y la música. Busco combinar mi formación técnica con mi experiencia musical para crear soluciones innovadoras en el sector IT. Mi objetivo es integrarme a un equipo donde pueda aportar tanto mis habilidades de programación como mi capacidad creativa y de trabajo en equipo desarrollada a través de la música.",
  avatarUrl: "/images/profile.svg",
  resumeUrl: "/cv.pdf"
};

export const contactInfo: ContactInfo = {
  email: "jarad.felipe@gmail.com",
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

export const musicStory: MusicStory = {
  title: "Mi Lado Musical",
  heroImage: "/music/hero-bass.jpg",
  story: [
    "Comencé a tocar bajo eléctrico a los 15 años, y desde entonces he desarrollado una carrera profesional que me ha permitido trabajar con distintos artistas y proyectos en vivo y de estudio. A lo largo del tiempo, he participado en estilos muy diversos —rock, funk, jazz, soul, blues, reggae, gospel, reggaetón, cumbia, salsa, merengue, entre otros— lo que me ha dado una visión amplia y flexible del trabajo musical.",
    "He colaborado como bajista y director musical con artistas como Luis Pedraza, Vesta Lugg, Daniela Castillo, Byron Fire, Simoney y Diego Ponce, entre otros. Actualmente trabajo con la productora Fonko Rocks, una de las house bands de Hard Rock Café Santiago, y participo en presentaciones y eventos para empresas y particulares.",
    "Además, ejerzo como profesor en School of Rock Vitacura, donde imparto clases de bajo eléctrico (nivel medio y avanzado), así como piano y guitarra básica. La música me ha enseñado a trabajar en equipo, adaptarme a contextos cambiantes y mantener la calma frente a escenarios exigentes. Son habilidades que también aplico en mi desarrollo profesional dentro del área tecnológica."
  ],
  spotifyPlaylist: "https://open.spotify.com/playlist/0yuZpwdIGC50LnUwXF5UpE?si=dd1d85bba7f241a0",
  photos: [
    {
      id: "1",
      url: "/music/photos/felipe-bass-1.jpg",
      alt: "Felipe tocando bajo en presentación en vivo",
      caption: "Presentación en Hard Rock Café Santiago"
    },
    {
      id: "2", 
      url: "/music/photos/felipe-bass-2.jpg",
      alt: "Felipe en estudio de grabación",
      caption: "Sesión de grabación con Fonko Rocks"
    },
    {
      id: "3",
      url: "/music/photos/felipe-bass-3.jpg", 
      alt: "Felipe enseñando en School of Rock",
      caption: "Clase de bajo en School of Rock Vitacura"
    },
    {
      id: "4",
      url: "/music/photos/felipe-bass-4.jpg",
      alt: "Felipe con su bajo en concierto",
      caption: "Concierto con artistas locales"
    }
  ],
  philosophy: "Mi experiencia musical me ayudó a entender que las habilidades se construyen con tiempo, práctica y constancia. No partí con un talento natural, pero con disciplina y método logré profesionalizarme en un área que inicialmente me resultaba ajena. Esa misma lógica es la que aplico hoy en el desarrollo de software: aprender a fondo, mejorar cada día y mantener la atención en los detalles que hacen que un trabajo esté bien hecho."
};
