const en = {
  navigation: {
    label: "Main navigation",
    toggleMenu: "Open or close menu",
    language: "Select language",
    home: "Home",
    about: "About",
    technologies: "Technologies",
    projects: "Projects",
    experience: "Experience",
    education: "Education",
    certifications: "Certifications",
    themeToDark: "Switch to dark mode",
    themeToLight: "Switch to light mode",
    backToTop: "Back to top",
  },

  about: {
    title: "About me",
    text: [
      "Hi, I'm Patrick. I'm a Full Stack developer with hands-on experience in Java, React, Vue, Angular and PostgreSQL, working on system development, integrations and business-oriented applications.",
      "I have a strong interest in new technologies and keep a constant learning routine, always looking to grow technically and deliver efficient, scalable and well-structured solutions.",
      "I completed an MBA in Project Management, which broadened my strategic vision, organizational skills and ability to work with a results-oriented mindset.",
      "I'm currently also taking German and English classes.",
    ],
  },

  techStack: {
    title: "Technologies",
    experienceLabel: "Experience",
    year: "year",
    years: "years",
    month: "month",
    months: "months",
    and: "and",
    lessThanMonth: "less than 1 month",
  },

  techLabels: {
    "Clean Architecture": "Clean Architecture",
  } as Record<string, string>,

  hero: {
    subtitle:
      "Full Stack Developer focused on Java, Go, React, Vue and scalable application architecture.",
    text:
      "Experience in developing APIs, modern interfaces, REST integrations, relational databases and cloud deployments using Docker and AWS.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },

  projects: {
    title: "Featured Projects",
    viewProject: "View project",
    items: [
      {
        name: "Pharmaceutical Portal Modernization",
        description:
          "Migration of a legacy portal to a modern architecture, with new interfaces and APIs, performance and maintainability refactoring, and continuous product evolution.",
      },
      {
        name: "Multi-Version Corporate Portal",
        description:
          "Corrective and evolutionary maintenance of a portal with multiple versions, including inconsistency investigation, troubleshooting, and product improvements.",
      },
      {
        name: "Online Courses Portal",
        description:
          "Development of interfaces and dynamic charts for an online learning platform, applying Clean Architecture principles and supporting its Go backend.",
      },
      {
        name: "Spincare — Home Care Management",
        description:
          "Full stack development of a Home Care operations solution, covering APIs, user interfaces, and database modeling and management.",
      },
      {
        name: "Healthcare Self-Service Kiosk",
        description:
          "Development of a self-service kiosk for hospitals and laboratories, including APIs, interfaces, database design, and integration with the Tasy system.",
      },
      {
        name: "Event Management Platform",
        description:
          "Development of a web and mobile event management platform, including APIs, user interfaces, payment integration, and data persistence.",
      },
      {
        name: "Healthcare Indicators",
        description:
          "Development of APIs and dashboards with dynamic charts for monitoring and visualizing healthcare indicators.",
      },
    ],
  },

  experience: {
    title: "Experience",
    tabs: {
      it: "IT",
      other: "Other",
    },
    emptyOther: "No extra experience registered yet.",

    philips: {
      company: "Premiersoft",
      role: "Mid-Level Full Stack Developer",
      period: "12/2025 - Present",
      contract:
        "Working as a contractor at the client Bionexo Tasy (formerly Philips). I have been at the client since the Philips era and continued after the acquisition by Bionexo Tasy.",
      description: `
Multi-Version Corporate Portal
- Bug fixing and inconsistency resolution across versions
- Maintenance and evolution of existing features
- Investigation and troubleshooting of system issues
- Implementation of adjustments and improvements according to project needs

Legacy Pharmaceutical Portal Migration
- Migration and modernization of a legacy pharmaceutical portal
- Development of interfaces using React
- Creation and maintenance of Java APIs
- Code refactoring focused on performance and maintainability
- Bug fixing and implementation of new features
- Work with Oracle databases in a corporate environment
`,
    },

    lince: {
      company: "Lince Tech",
      role: "Full Stack Developer",
      period: "11/2024 - 11/2025",
      contract: "",
      description: `
- Development of an online courses portal using Vue
- Development of user interfaces and components
- Creation of dashboards and dynamic charts
- Application of Clean Architecture principles
- Support in backend feature development using Golang
`,
    },

    pulsati: {
      company: "Pulsati",
      role: "Full Stack Developer",
      period: "01/2023 - 11/2024",
      contract: "",
      description: `
Spincare Project (Home Care)
- Development of APIs using Java
- User interface development with Angular
- Implementation and management of PostgreSQL databases

Self-Service Kiosk for Hospitals and Laboratories
- Development of APIs using Java
- Interface development using React
- Database tables implementation and management
- Integration with the Tasy hospital system

Event Management System
- Development of APIs and business logic
- Development of web interface using React
- Payment system integration
- Implementation and management of PostgreSQL databases

Healthcare Indicators
- Development of APIs using Java
- Creation of dashboards and dynamic charts
- Development of user interface using React

Tasy Consulting
- Participation in the migration process to Tasy HTML5
`,
    },

    example: {
      company: "Example — edit or remove",
      role: "Your role",
      period: "01/2020 - 12/2020",
      contract: "",
      description: `
- This is a sample item for non-IT experiences
- You can edit it in src/i18n/*.ts (key "example")
- To remove, delete this item and the matching one in src/data/experience.ts
`,
    },
  },

  education: {
    title: "Education",
    showDetails: "Show details",
    hideDetails: "Hide details",
    items: [
      {
        course: "Technologist in Systems Analysis and Development",
        period: "Completed in Jul/2024",
        subjects: [
          { name: "Software Modeling", hours: 160 },
          { name: "Computational Problem Solving Programming", hours: 160 },
          { name: "Computing Environments and Connectivity", hours: 160 },
          { name: "Computer Systems and Security", hours: 160 },
          { name: "Software Management and Quality", hours: 160 },
          { name: "Software Engineering", hours: 160 },
          { name: "Distributed Systems and Mobile Development", hours: 160 },
          { name: "Usability and Web Development", hours: 160 },
        ],
      },
      {
        course: "MBA in Project Management",
        period: "Completed in Oct/2025",
        subjects: [
          { name: "Essential Topics in Management", hours: 40 },
          { name: "Strategic Management", hours: 40 },
          { name: "Financial Management", hours: 40 },
          { name: "Business Project Development", hours: 40 },
          { name: "Business Plan Development", hours: 40 },
          { name: "Project Fundamentals and Integrated Management", hours: 40 },
          { name: "Scope, Time and Cost Management in Projects", hours: 40 },
          { name: "Leadership Principles and Team Management", hours: 40 },
          { name: "Communications, Risks and Procurement Management", hours: 40 },
          { name: "Stakeholder Management and IT Tools", hours: 40 },
          { name: "Essential Topics for Project Management", hours: 40 },
        ],
      },
      {
        course: "Postgraduate Degree in Marine Biology",
        period: "Completed in Feb/2026",
        subjects: [
          { name: "Professional Development", hours: 40 },
          { name: "Marine and Coastal Ecosystems", hours: 40 },
          { name: "Coastal Management", hours: 60 },
          { name: "Marine Vertebrates", hours: 60 },
          { name: "Marine Pollution and Environmental Impact Assessment", hours: 40 },
          { name: "Environmental Law, Environmental Licensing and Environmental Management", hours: 60 },
          { name: "Marine Invertebrates", hours: 60 },
          { name: "General Fundamentals and Marine Ecology", hours: 40 },
        ],
      },
      {
        course: "Bachelor's Degree in Biological Sciences",
        period: "Expected completion in 2028",
        subjects: [
          { name: "Digital Orientation", hours: 20 },
          { name: "Human Anatomy", hours: 40 },
          { name: "Integrated Assessment of Competencies in Biological Sciences", hours: 0 },
          { name: "Brazilian Sign Language", hours: 40 },
          { name: "Plant Morphology", hours: 80 },
          { name: "Career Development Plan in Biological Sciences", hours: 10 },
          { name: "Integrated Assessment of Competencies in Biological Sciences I", hours: 0 },
          { name: "Biostatistics", hours: 40 },
          { name: "Fundamentals of Geology and Paleontology", hours: 40 },
          { name: "Brazilian Sign Language II", hours: 40 },
          { name: "Basic and Environmental Microbiology", hours: 80 },
          { name: "Career Development Plan in Biological Sciences I", hours: 10 },
          { name: "Invertebrate Zoology", hours: 80 },
          { name: "Vertebrate Zoology", hours: 80 }
        ]
      },
    ],
  },

  certifications: {
    title: "Certifications",
    viewCredential: "View credential",
    items: [
      {
        title: "AWS Partner: Accreditation (Technical)",
        institution: "Amazon Web Services (AWS)",
        period: "Issued Aug 2026",
        techs: ["AWS", "Cloud computing", "Architecture"],
      },
      {
        title: "AWS Technical Essentials",
        institution: "Amazon Web Services (AWS)",
        period: "Issued Aug 2026",
        techs: ["AWS", "Cloud computing", "AWS fundamentals"],
      },
      {
        title: "Hexagonal Architecture / Ports and Adapters",
        institution: "Udemy",
        period: "Issued Oct 2024",
        techs: ["Architecture", "Java", "System design"],
      },
      {
        title: "Complete API Course with Node.js, Express, MongoDB and SQL",
        institution: "Udemy",
        period: "Issued May 2024",
        techs: ["Node.js", "Express", "MongoDB", "SQL", "REST API"],
      },
      {
        title: "SAP TO WORK",
        institution: "AC International Group",
        period: "Issued Jun 2024",
        techs: ["SAP"],
      },
    ],
  },

  footer: {
    rights: "All rights reserved.",
  },

  languages: {
    title: "Languages",
    items: [
      { name: "Portuguese", level: "Fluent / Native" },
      { name: "Spanish", level: "Intermediate" },
      { name: "English", level: "Basic / Intermediate (in progress)" },
      { name: "German", level: "Beginner (in progress)" },
    ],
  },
};

export default en;
