import { PersonalInfo, ContactInfo, Skill, Experience, Project, MusicStory } from '@/lib/types';

export const personalInfo: PersonalInfo = {
  name: "Felipe Jara",
  title: "Ingeniero en Computación e Informática / Músico y Sonidista mención en Composición e Interpretación musical.",
  bio: "Ingeniero en Computación e Informática con interés en el desarrollo de software y experiencia en el ámbito musical. Busco integrar mis conocimientos técnicos en un entorno colaborativo que promueva el aprendizaje continuo y la calidad en los procesos de desarrollo. Mi objetivo es aportar soluciones funcionales y bien estructuradas dentro de equipos orientados a la mejora constante.",
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
  { name: "JavaScript", level: "Intermediate", category: "Frontend" },
  { name: "HTML5/CSS3", level: "Intermediate", category: "Frontend" },
  { name: "React", level: "Intermediate", category: "Frontend" },
  { name: "TypeScript", level: "Beginner", category: "Frontend" },
  { name: "Next.js", level: "Beginner", category: "Frontend" },
  { name: "Tailwind CSS", level: "Intermediate", category: "Frontend" },
  
  // Backend
  { name: "Python", level: "Intermediate", category: "Backend" },
  { name: "Java", level: "Beginner", category: "Backend" },
  { name: "Node.js", level: "Beginner", category: "Backend" },
  { name: "RESTful APIs", level: "Intermediate", category: "Backend" },
  
  // Database
  { name: "SQL", level: "Intermediate", category: "Database" },
  { name: "PostgreSQL", level: "Beginner", category: "Database" },
  { name: "Base de Datos", level: "Advanced", category: "Database" },
  
  // Tools
  { name: "Git", level: "Advanced", category: "Tools" },
  { name: "VS Code", level: "Expert", category: "Tools" },
  { name: "Linux/Terminal", level: "Beginner", category: "Tools" },
  
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
    company: "Universidad Andrés Bello",
    position: "Ingeniero en Computación e Informática",
    startDate: "2023-03",
    endDate: "2024-12",
    description: "Carrera completada con enfoque en desarrollo de aplicaciones web y bases de datos. Proyecto de título: 'Meet & Gig', comunidad digital para músicos independientes. Especialización en desarrollo web y gestión de bases de datos.",
    technologies: ["JavaScript", "Python", "SQL", "HTML/CSS", "React", "PostgreSQL"],
    current: false
  },
  {
    id: "2",
    company: "School of Rock Vitacura",
    position: "Profesor de Bajo Eléctrico",
    startDate: "2023-01",
    description: "Docente de bajo eléctrico para niveles medio y avanzado, además de piano y guitarra básica. Desarrollo de metodologías de enseñanza musical y acompañamiento en el crecimiento técnico y artístico de los estudiantes.",
    technologies: ["Bajo Eléctrico", "Piano", "Guitarra", "Pedagogía Musical"],
    current: true
  },
  {
    id: "3",
    company: "Fonko Rocks / Hard Rock Café Santiago",
    position: "Bajista Profesional",
    startDate: "2024-01",
    description: "Bajista en una de las house bands de Hard Rock Café Santiago. Presentaciones en vivo para eventos corporativos y particulares. Colaboración con diversos artistas y adaptación a múltiples géneros musicales.",
    technologies: ["Bajo Eléctrico", "Performance en Vivo", "Adaptabilidad Musical"],
    current: true
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Meet & Gig",
    description: "Proyecto de título: Comunidad digital para músicos independientes. Plataforma web que conecta músicos, permite la creación de perfiles artísticos, búsqueda de colaboradores y gestión de eventos musicales. Desarrollado con enfoque en experiencia de usuario y gestión eficiente de bases de datos.",
    technologies: ["JavaScript", "React", "Python", "PostgreSQL", "HTML/CSS"],
    imageUrl: "/projects/meet-and-gig.svg",
    githubUrl: "https://github.com/pipejarad/meet-and-gig",
    featured: true
  },
  {
    id: "2",
    title: "Portfolio Profesional",
    description: "Desarrollo de portfolio personal responsivo usando Next.js 14 y TypeScript. Incluye sección de desarrollo, experiencia musical, formulario de contacto y optimizaciones SEO. Proyecto que demuestra habilidades full-stack y diseño moderno.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    imageUrl: "/projects/portfolio.svg",
    liveUrl: "https://felipe-jara-portfolio.vercel.app",
    githubUrl: "https://github.com/pipejarad/portafolio-profesional",
    featured: true
  },
  {
    id: "3",
    title: "Proyectos Académicos",
    description: "Colección de proyectos desarrollados durante la carrera universitaria, incluyendo aplicaciones web, sistemas de bases de datos y ejercicios de programación en JavaScript, Python y Java.",
    technologies: ["JavaScript", "Python", "Java", "SQL", "HTML/CSS"],
    imageUrl: "/projects/academic.svg",
    githubUrl: "https://github.com/pipejarad",
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
