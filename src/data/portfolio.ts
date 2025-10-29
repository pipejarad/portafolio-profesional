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
    slug: "meet-and-gig",
    blogContent: {
      summary: "Meet & Gig nació de mi experiencia personal como músico. Después de años tocando en diferentes bandas y proyectos, me di cuenta de lo difícil que es encontrar músicos compatibles para colaboraciones. Este proyecto de título combina mi pasión por la música con mis conocimientos en desarrollo de software para crear una solución real a un problema que conozco de primera mano.",
      learningJourney: [
        {
          id: "concept",
          title: "Conceptualización del Problema",
          description: "Identifiqué las principales dificultades que enfrentan los músicos independientes para conectarse y colaborar.",
          technologies: ["Research", "User Stories", "Problem Analysis"],
          insights: [
            "Los músicos necesitan más que una red social tradicional",
            "La búsqueda por género, instrumento y ubicación es fundamental",
            "La gestión de eventos y ensayos es un pain point recurrente",
            "La confianza y reputación son cruciales en colaboraciones musicales"
          ]
        },
        {
          id: "architecture",
          title: "Arquitectura y Diseño de Sistema",
          description: "Definí la arquitectura de la aplicación web, modelos de datos y flujos de usuario principales.",
          technologies: ["Django", "SQLite", "MVC Pattern", "Database Design"],
          insights: [
            "Django ofrece un ORM robusto perfecto para relaciones complejas entre usuarios",
            "El patrón MVC facilita la separación de responsabilidades",
            "SQLite es ideal para desarrollo y prototipos rápidos",
            "Los modelos de Usuario, Perfil Musical y Evento son el core del sistema"
          ]
        },
        {
          id: "development",
          title: "Desarrollo Full-Stack",
          description: "Implementé tanto el backend como el frontend, desde la autenticación hasta la interfaz de usuario.",
          technologies: ["Python", "Django Templates", "Bootstrap", "JavaScript", "CSS3"],
          insights: [
            "Django Class-Based Views aceleran el desarrollo de CRUD operations",
            "Bootstrap permite crear interfaces responsivas rápidamente",
            "La validación tanto en frontend como backend es esencial para la integridad de datos",
            "Los formularios dinámicos mejoran significativamente la experiencia de usuario"
          ]
        },
        {
          id: "testing",
          title: "Testing y Validación",
          description: "Implementé pruebas unitarias y realicé testing con usuarios reales del mundo musical.",
          technologies: ["Django TestCase", "Unit Testing", "User Testing", "Bug Tracking"],
          insights: [
            "Los tests automatizados son fundamentales para mantener la calidad del código",
            "El feedback de músicos reales reveló casos de uso no considerados inicialmente",
            "La iteración rápida basada en feedback es clave en el desarrollo de productos",
            "Los edge cases en aplicaciones sociales son más complejos de lo esperado"
          ]
        }
      ],
      challenges: [
        {
          id: "user-auth",
          problem: "Implementar un sistema de autenticación robusto que manejara tanto usuarios regulares como perfiles musicales con información específica.",
          solution: "Utilicé Django's built-in authentication extendido con un modelo Profile personalizado. Implementé signals para crear automáticamente un perfil musical cada vez que se registra un usuario nuevo.",
          learnings: [
            "Los signals de Django son perfectos para automatizar la creación de objetos relacionados",
            "Separar User de Profile permite flexibilidad futura sin romper la autenticación",
            "La validación de campos únicos (como usernames musicales) requiere lógica tanto en modelo como en formulario"
          ]
        },
        {
          id: "search-functionality",
          problem: "Crear un sistema de búsqueda eficiente que permitiera filtrar músicos por múltiples criterios: instrumento, género, ubicación y disponibilidad.",
          solution: "Implementé un sistema de filtros combinados usando Django Q objects y un frontend dinámico con JavaScript que actualiza los resultados en tiempo real sin recargar la página.",
          learnings: [
            "Los Q objects de Django permiten consultas complejas de manera elegante",
            "AJAX mejora dramáticamente la experiencia de usuario en búsquedas",
            "La indexación de base de datos es crucial para consultas rápidas",
            "El debouncing en búsquedas previene requests excesivos al servidor"
          ]
        },
        {
          id: "event-management",
          problem: "Diseñar un sistema que permitiera crear, gestionar y coordinar eventos musicales entre múltiples usuarios.",
          solution: "Desarrollé un modelo de Event con estados (draft, open, confirmed, completed) y un sistema de invitaciones con confirmación. Incluí notifications in-app para mantener a los usuarios informados.",
          learnings: [
            "Los state machines simplifican la lógica de flujos complejos",
            "Las notificaciones son esenciales para el engagement en aplicaciones colaborativas",
            "La gestión de fechas y zonas horarias requiere consideración especial",
            "Los permisos granulares (organizer, participant, viewer) mejoran la seguridad"
          ]
        }
      ],
      highlights: [
        "Sistema de perfiles musicales completos con portfolios, grabaciones y reseñas",
        "Búsqueda avanzada con filtros por instrumento, género musical y ubicación geográfica",
        "Gestión completa de eventos musicales con sistema de invitaciones",
        "Sistema de reputación basado en colaboraciones anteriores",
        "Dashboard intuitivo para gestionar conexiones y proyectos activos",
        "Responsive design que funciona perfectamente en móviles y desktop"
      ],
      techStackDetails: [
        {
          technology: "Python/Django",
          purpose: "Framework principal para desarrollo web full-stack",
          experience: "new",
          keyFeatures: ["ORM robusto", "Sistema de autenticación integrado", "Admin interface", "Class-based views", "Template engine"]
        },
        {
          technology: "SQLite",
          purpose: "Base de datos para desarrollo y prototipo",
          experience: "familiar",
          keyFeatures: ["Ligera y fácil de configurar", "Perfecta para desarrollo", "Soporte completo de SQL", "Integración nativa con Django"]
        },
        {
          technology: "Bootstrap",
          purpose: "Framework CSS para diseño responsivo rápido",
          experience: "familiar",
          keyFeatures: ["Grid system responsivo", "Componentes pre-diseñados", "Utilities classes", "Cross-browser compatibility"]
        },
        {
          technology: "JavaScript",
          purpose: "Interactividad del frontend y AJAX calls",
          experience: "familiar",
          keyFeatures: ["DOM manipulation", "Event handling", "AJAX requests", "Form validation dinámica"]
        }
      ],
      gallery: [
        {
          id: "dashboard",
          url: "/projects/meet-and-gig/dashboard.png",
          alt: "Dashboard principal de Meet & Gig",
          caption: "Vista del dashboard donde los usuarios gestionan sus conexiones y eventos",
          type: "screenshot"
        },
        {
          id: "search",
          url: "/projects/meet-and-gig/search.png",
          alt: "Sistema de búsqueda de músicos",
          caption: "Búsqueda avanzada con filtros múltiples en tiempo real",
          type: "screenshot"
        },
        {
          id: "profile",
          url: "/projects/meet-and-gig/profile.png",
          alt: "Perfil musical completo",
          caption: "Ejemplo de perfil musical con portfolio y reseñas",
          type: "screenshot"
        }
      ],
      nextSteps: [
        "Integración con plataformas de streaming (Spotify, SoundCloud)",
        "Sistema de messaging in-app para comunicación directa",
        "Geolocalización para encontrar músicos cercanos",
        "Integration con calendarios externos (Google Calendar)",
        "Sistema de pagos para eventos pagados",
        "App móvil nativa para iOS y Android"
      ],
      developmentStatus: "completed"
    }
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
