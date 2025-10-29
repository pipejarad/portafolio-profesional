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
  instagram: "https://instagram.com/pipejarad"
};

export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", level: "Intermediate", category: "Frontend" },
  { name: "HTML5/CSS3", level: "Intermediate", category: "Frontend" },
  { name: "Ruby", level: "Beginner", category: "Frontend" },
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
  
  // Tools
  { name: "Git", level: "Advanced", category: "Tools" },
  { name: "VS Code", level: "Expert", category: "Tools" },
  { name: "Linux/Terminal", level: "Beginner", category: "Tools" },
  
  // Instrumentos
  { name: "Bajo Eléctrico", level: "Expert", category: "Instrumentos" },
  { name: "Guitarra", level: "Advanced", category: "Instrumentos" },
  { name: "Piano", level: "Intermediate", category: "Instrumentos" },
  { name: "Batería", level: "Beginner", category: "Instrumentos" },
  
  // Music
  { name: "Cubase", level: "Expert", category: "Music" },
  { name: "Pro Tools", level: "Intermediate", category: "Music" },
  { name: "Mixing & Mastering", level: "Intermediate", category: "Music" },
  { name: "Composición", level: "Advanced", category: "Music" },
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
    endDate: "2025-09",
    description: "Título universitario con enfoque en desarrollo de aplicaciones web y bases de datos. Desarrollo de proyectos personales incluyendo 'Meet & Gig' como proyecto de título. Actualmente en búsqueda activa de oportunidades laborales en el área de desarrollo de software, con especialización en tecnologías web modernas.",
    technologies: ["JavaScript", "Python", "SQL", "HTML/CSS", "React", "PostgreSQL"],
    current: false
  },
  {
    id: "2",
    company: "School of Rock Vitacura / Saint George's College",
    position: "Profesor de Bajo Eléctrico",
    startDate: "2024-01",
    description: "Docente de bajo eléctrico para niveles básico, medio y avanzado en School of Rock Vitacura. También profesor de talleres co-curriculares de bajo eléctrico y guitarra eléctrica en Saint George's College, desarrollando programas educativos musicales para estudiantes de enseñanza básica y media.",
    technologies: ["Bajo Eléctrico", "Pedagogía Musical", "Talleres musicales"],
    current: true
  },
  {
    id: "3",
    company: "Fonko Rocks / Hard Rock Café Santiago",
    position: "Bajista Profesional / Músico de Sesión",
    startDate: "2021-01",
    description: "Bajista en una de las house bands de Hard Rock Café Santiago. Presentaciones en vivo para eventos corporativos y particulares. Músico de sesión especializado en grabaciones y colaboraciones con diversos artistas, adaptándome a múltiples géneros musicales y proyectos de estudio.",
    technologies: ["Bajo Eléctrico", "Shows en Vivo", "Grabación en Estudio", "Adaptabilidad Musical", "Sesiones Profesionales"],
    current: true
  }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Meet & Gig",
    description: "Proyecto de título: Comunidad digital para músicos independientes. Plataforma web que conecta músicos, permite la creación de perfiles artísticos, búsqueda de colaboradores y gestión de eventos musicales. Desarrollado con enfoque en experiencia de usuario y gestión eficiente de bases de datos.",
    technologies: ["Python", "Django", "SQLite", "Bootstrap", "HTML/CSS"],
    imageUrl: "/projects/meet-and-gig.svg",
    githubUrl: "https://github.com/pipejarad/meet-and-gig",
    featured: true,
    slug: "meet-and-gig"
  },
  {
    id: "2",
    title: "Portfolio Profesional",
    description: "Desarrollo de portfolio personal responsivo usando Next.js 14 y TypeScript. Incluye sección de desarrollo, experiencia musical, formulario de contacto y optimizaciones SEO. Proyecto que demuestra habilidades full-stack y diseño moderno.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "React"],
    imageUrl: "/projects/portfolio.svg",
    liveUrl: "https://felipe-jara-portfolio.vercel.app",
    githubUrl: "https://github.com/pipejarad/portafolio-profesional",
    featured: true,
    slug: "portfolio-profesional"
  },
  {
    id: "3",
    title: "Ruby Learning Challenges",
    description: "Colección de 10 mini-challenges en Ruby que demuestran el dominio progresivo del lenguaje. Desde conceptos básicos como control de flujo hasta temas avanzados como metaprogramming y testing. Cada challenge está documentado con el proceso de aprendizaje y las técnicas implementadas.",
    technologies: ["Ruby", "Minitest", "JSON", "CSV", "Net::HTTP"],
    imageUrl: "/projects/ruby-challenges.svg",
    githubUrl: "https://github.com/pipejarad/ruby-learning-challenges",
    featured: true,
    slug: "ruby-learning-challenges"
  }
];

export const musicStory: MusicStory = {
  title: "Mi Lado Musical",
  heroImage: "/images/felipe-bass.jpg",
  story: [
    "Comencé a tocar bajo eléctrico a los 15 años, y desde entonces he desarrollado una carrera profesional que me ha permitido trabajar con distintos artistas y proyectos en vivo y de estudio. A lo largo del tiempo, he participado en estilos muy diversos —rock, funk, jazz, soul, blues, reggae, gospel, reggaetón, cumbia, salsa, merengue, entre otros— lo que me ha dado una visión amplia y flexible del trabajo musical.",
    "He colaborado como bajista y director musical con artistas como Luis Pedraza, Vesta Lugg, Daniela Castillo, Byron Fire y Simoney, entre otros. Actualmente soy parte de la banda/productora Fonko Rocks, una de las house bands de Hard Rock Café Santiago, y participo en presentaciones y eventos para empresas y particulares.",
    "Además, ejerzo como profesor en School of Rock Vitacura, donde imparto clases de bajo eléctrico (nivel básico, medio y avanzado). La música me ha enseñado a trabajar en equipo, adaptarme a contextos cambiantes y mantener la calma frente a escenarios exigentes. Son habilidades que también aplico en mi desarrollo profesional dentro del área tecnológica."
  ],
  spotifyPlaylist: "https://open.spotify.com/playlist/0yuZpwdIGC50LnUwXF5UpE?si=dd1d85bba7f241a0",
  photos: [
    {
      id: "1",
      url: "/images/felipe-bass-1.jpg",
      alt: "Felipe Jara tocando bajo en matrimonio",
      caption: "Matrimonio - Show en vivo"
    },
    {
      id: "2", 
      url: "/images/felipe-bass-2.jpg",
      alt: "Felipe en Hard Rock Café",
      caption: "Hard Rock Café con Fonko Rocks"
    },
    {
      id: "3",
      url: "/images/felipe-bass-3.jpg",
      alt: "Felipe enseñando en School of Rock",
      caption: "Show en Boulevard Parque Arauco"
    },
    {
      id: "4",
      url: "/images/felipe-bass-4.jpg",
      alt: "Felipe con su bajo en concierto",
      caption: "Evento de empresa"
    }
  ],
  philosophy: "Mi experiencia musical me ayudó a entender que las habilidades se construyen con tiempo, práctica y constancia. No partí con un talento natural, pero con disciplina y método logré profesionalizarme en un área que inicialmente me resultaba ajena. Esa misma lógica es la que aplico hoy en el desarrollo de software: aprender a fondo, mejorar cada día y mantener la atención en los detalles que hacen que un trabajo esté bien hecho."
};
