const es = {
  navigation: {
    label: "Navegación principal",
    toggleMenu: "Abrir o cerrar menú",
    language: "Seleccionar idioma",
    home: "Inicio",
    about: "Sobre mí",
    technologies: "Tecnologías",
    projects: "Proyectos",
    experience: "Experiencia",
    education: "Formación",
    certifications: "Certificaciones",
  },

  about: {
    title: "Sobre mí",
    text:
      "Soy desarrollador full stack con experiencia en la creación de interfaces, APIs y soluciones empresariales. Trabajo principalmente con Java, Go, React, Vue y bases de datos relacionales, combinando rendimiento, código bien estructurado y entregas que generan valor real para el producto.",
  },

  techStack: {
    title: "Tecnologías",
  },

  hero: {
    subtitle:
      "Desarrollador Full Stack enfocado en Java, Go, React, Vue y arquitectura de aplicaciones escalables.",
    text:
      "Experiencia en el desarrollo de APIs, interfaces modernas, integraciones REST, bases de datos relacionales y despliegue en entornos cloud con Docker y AWS.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },

  projects: {
    title: "Proyectos Destacados",
    viewProject: "Ver proyecto",
    items: [
      {
        name: "Modernización de Portal Farmacéutico",
        description:
          "Migración de un portal legado a una arquitectura moderna, con nuevas interfaces y APIs, refactorizaciones orientadas al rendimiento y mantenimiento, y evolución continua del producto.",
      },
      {
        name: "Portal Corporativo Multiversión",
        description:
          "Mantenimiento correctivo y evolutivo de un portal con diferentes versiones, incluyendo investigación de inconsistencias, resolución de problemas e implementación de mejoras.",
      },
      {
        name: "Portal de Cursos",
        description:
          "Desarrollo de interfaces y gráficos dinámicos para una plataforma de cursos, aplicando principios de Clean Architecture y brindando soporte al backend en Go.",
      },
      {
        name: "Spincare — Gestión de Home Care",
        description:
          "Desarrollo full stack de una solución para operaciones de Home Care, incluyendo APIs, interfaces de usuario y modelado y gestión de la base de datos.",
      },
      {
        name: "Tótem de Autoservicio en Salud",
        description:
          "Desarrollo de un tótem para hospitales y laboratorios, con APIs, interfaces, diseño de base de datos e integración con el sistema Tasy.",
      },
      {
        name: "Plataforma de Gestión de Eventos",
        description:
          "Desarrollo de una plataforma web y móvil para gestionar eventos, incluyendo APIs, interfaces, integración de pagos y persistencia de datos.",
      },
      {
        name: "Indicadores Asistenciales",
        description:
          "Desarrollo de APIs y dashboards con gráficos dinámicos para visualizar y dar seguimiento a indicadores asistenciales.",
      },
    ],
  },

  experience: {
    title: "Experiencia",

    philips: {
      company: "Bionexo Tasy (anteriormente Philips), vía Premiersoft",
      role: "Desarrollador Full Stack Semi Senior",
      period: "12/2025 - Actualidad",
      description: `
- Migración y modernización de portal legado del sector farmacéutico
- Desarrollo de interfaces utilizando React
- Creación y mantenimiento de APIs en Java
- Refactorización de código para mejorar rendimiento y mantenibilidad
- Corrección de errores e implementación de nuevas funcionalidades
- Trabajo con base de datos Oracle en entorno corporativo
`,
    },

    lince: {
      company: "Lince Tech",
      role: "Desarrollador Full Stack",
      period: "11/2024 - 11/2025",
      description: `
- Desarrollo de portal de cursos utilizando Vue
- Desarrollo de interfaces y componentes de usuario
- Creación de dashboards y gráficos dinámicos
- Aplicación de principios de Clean Architecture
- Apoyo en el desarrollo de funcionalidades backend en Golang
`,
    },

    pulsati: {
      company: "Pulsati",
      role: "Desarrollador Full Stack",
      period: "01/2023 - 11/2024",
      description: `
Proyecto Spincare (Home Care)
- Desarrollo de APIs utilizando Java
- Desarrollo de la interfaz de usuario en Angular
- Implementación y gestión de base de datos PostgreSQL

Totem de Autoatención para Hospitales y Laboratorios
- Desarrollo de APIs utilizando Java
- Desarrollo de la interfaz utilizando React
- Implementación de tablas y gestión de base de datos
- Integración con el sistema hospitalario Tasy

Sistema de Gestión de Eventos
- Desarrollo de APIs y lógica de negocio
- Desarrollo de interfaz web en React
- Integración con sistema de pagos
- Implementación y gestión de base de datos PostgreSQL

Indicadores Asistenciales
- Desarrollo de APIs utilizando Java
- Creación de dashboards y gráficos dinámicos
- Desarrollo de la interfaz de usuario en React

Consultoría Tasy
- Participación en proceso de migración a Tasy HTML5
`,
    },
  },

  education: {
    title: "Formación",
    showDetails: "Ver detalles",
    hideDetails: "Ocultar detalles",
    items: [
      {
        course: "Tecnólogo en Análisis y Desarrollo de Sistemas",
        period: "Finalizado en Jul/2024",
        subjects: [
          { name: "Modelado de Software", hours: 160 },
          { name: "Programación de Soluciones Computacionales", hours: 160 },
          { name: "Entornos Computacionales y Conectividad", hours: 160 },
          { name: "Sistemas Computacionales y Seguridad", hours: 160 },
          { name: "Gestión y Calidad de Software", hours: 160 },
          { name: "Ingeniería de Software", hours: 160 },
          { name: "Sistemas Distribuidos y Desarrollo Mobile", hours: 160 },
          { name: "Usabilidad y Desarrollo Web", hours: 160 },
        ],
      },
      {
        course: "MBA en Gestión de Proyectos",
        period: "Finalizado en Oct/2025",
        subjects: [
          { name: "Temas Esenciales en Gestión", hours: 40 },
          { name: "Administración Estratégica", hours: 40 },
          { name: "Administración Financiera", hours: 40 },
          { name: "Elaboración de Proyectos Empresariales", hours: 40 },
          { name: "Elaboración de Business Plan", hours: 40 },
          { name: "Fundamentos y Gestión Integrada de Proyectos", hours: 40 },
          { name: "Gestión de Alcance, Tiempo y Costos en Proyectos", hours: 40 },
          { name: "Principios de Liderazgo y Gestión de Equipos", hours: 40 },
          { name: "Gestión de Comunicaciones, Riesgos y Adquisiciones", hours: 40 },
          { name: "Gestión de Stakeholders y Herramientas de TI", hours: 40 },
          { name: "Temas Esenciales para la Gestión de Proyectos", hours: 40 },
        ],
      },
      {
        course: "Posgrado en Biología Marina",
        period: "Finalizado en Feb/2026",
        subjects: [
          { name: "Desarrollo Profesional", hours: 40 },
          { name: "Ecosistemas Marinos y Costeros", hours: 40 },
          { name: "Gestión Costera", hours: 60 },
          { name: "Vertebrados Marinos", hours: 60 },
          { name: "Contaminación Marina y Evaluación de Impactos Ambientales", hours: 40 },
          { name: "Legislación Ambiental, Licenciamiento Ambiental y Gestión Ambiental", hours: 60 },
          { name: "Invertebrados Marinos", hours: 60 },
          { name: "Fundamentos Generales y Ecología Marina", hours: 40 },
        ],
      },
      {
        course: "Licenciatura en Ciencias Biológicas",
        period: "Previsión de finalización en 2028",
        subjects: [
          { name: "Ambientación Digital", hours: 20 },
          { name: "Anatomía Humana", hours: 40 },
          { name: "Evaluación Integrada de Competencias en Ciencias Biológicas", hours: 0 },
          { name: "Lengua Brasileña de Señas", hours: 40 },
          { name: "Morfología Vegetal", hours: 80 },
          { name: "Plan de Acompañamiento de Carrera en Ciencias Biológicas", hours: 10 },
          { name: "Evaluación Integrada de Competencias en Ciencias Biológicas I", hours: 0 },
          { name: "Bioestadística", hours: 40 },
          { name: "Fundamentos de Geología y Paleontología", hours: 40 },
          { name: "Lengua Brasileña de Señas II", hours: 40 },
          { name: "Microbiología Básica y Ambiental", hours: 80 },
          { name: "Plan de Acompañamiento de Carrera en Ciencias Biológicas I", hours: 10 },
          { name: "Zoología de Invertebrados", hours: 80 },
          { name: "Zoología de Vertebrados", hours: 80 }
        ]
      },
    ],
  },

  certifications: {
    title: "Certificaciones",
    viewCredential: "Ver credencial",
    items: [
      {
        title: "AWS Partner: Accreditation (Technical)",
        institution: "Amazon Web Services (AWS)",
        period: "Emitida en ago. de 2026",
        techs: ["AWS", "Computación en la nube", "Arquitectura"],
      },
      {
        title: "AWS Technical Essentials",
        institution: "Amazon Web Services (AWS)",
        period: "Emitida en ago. de 2026",
        techs: ["AWS", "Computación en la nube", "Fundamentos de AWS"],
      },
      {
        title: "Arquitectura Hexagonal / Ports and Adapters",
        institution: "Udemy",
        period: "Emitida en oct. de 2024",
        techs: ["Arquitectura", "Java", "Diseño de sistemas"],
      },
      {
        title: "Curso Completo de APIs con Node.js, Express, MongoDB y SQL",
        institution: "Udemy",
        period: "Emitida en may. de 2024",
        techs: ["Node.js", "Express", "MongoDB", "SQL", "API REST"],
      },
      {
        title: "SAP TO WORK",
        institution: "AC International Group",
        period: "Emitida en jun. de 2024",
        techs: ["SAP"],
      },
    ],
  },

  footer: {
    rights: "Todos los derechos reservados.",
  },

  languages: {
    title: "Idiomas",
    items: [
      { name: "Portugués", level: "Fluido / Nativo" },
      { name: "Español", level: "Intermedio" },
      { name: "Inglés", level: "Básico / Intermedio (en progreso)" },
      { name: "Alemán", level: "Principiante (en progreso)" },
    ],
  },
};

export default es;
