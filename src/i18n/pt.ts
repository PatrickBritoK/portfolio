const pt = {
  navigation: {
    label: "Navegação principal",
    toggleMenu: "Abrir ou fechar menu",
    language: "Selecionar idioma",
    home: "Início",
    about: "Sobre mim",
    technologies: "Tecnologias",
    projects: "Projetos",
    experience: "Experiência",
    education: "Formação",
    certifications: "Certificações",
    themeToDark: "Ativar modo escuro",
    themeToLight: "Ativar modo claro",
    backToTop: "Voltar ao topo",
  },

  about: {
    title: "Sobre mim",
    text: [
      "Olá, me chamo Patrick. Sou desenvolvedor Full Stack com experiência prática em Java, React, Vue, Angular e PostgreSQL, atuando no desenvolvimento de sistemas, integrações e aplicações orientadas a negócio.",
      "Tenho forte interesse em novas tecnologias e mantenho uma rotina constante de aprendizado, buscando sempre evoluir tecnicamente e entregar soluções eficientes, escaláveis e bem estruturadas.",
      "Concluí um MBA em Gestão de Projetos, o que ampliou minha visão estratégica, organização e capacidade de atuar de forma orientada a resultados.",
      "Atualmente, também realizo aulas de alemão e inglês.",
    ],
  },

  techStack: {
    title: "Tecnologias",
    experienceLabel: "Experiência",
    year: "ano",
    years: "anos",
    month: "mês",
    months: "meses",
    and: "e",
    lessThanMonth: "menos de 1 mês",
  },

  techLabels: {
    "Clean Architecture": "Arquitetura Limpa",
  } as Record<string, string>,

  hero: {
    subtitle:
      "Desenvolvedor Full Stack com foco em Java, Go, React, Vue e arquitetura de aplicações escaláveis.",
    text:
      "Experiência no desenvolvimento de APIs, interfaces modernas, integrações REST, banco de dados relacionais e deploy em ambientes cloud com Docker e AWS.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },

  projects: {
    title: "Projetos em Destaque",
    viewProject: "Ver projeto",
    items: [
      {
        name: "Modernização de Portal Farmacêutico",
        description:
          "Migração de um portal legado para uma arquitetura moderna, com novas interfaces, APIs, refatorações voltadas a performance e manutenibilidade, além da evolução contínua do produto.",
      },
      {
        name: "Portal Corporativo Multiversão",
        description:
          "Manutenção evolutiva e corretiva de um portal com diferentes versões, incluindo investigação de inconsistências, resolução de problemas e implementação de melhorias.",
      },
      {
        name: "Portal de Cursos",
        description:
          "Desenvolvimento de interfaces e gráficos dinâmicos para uma plataforma de cursos, aplicando princípios de Arquitetura Limpa e prestando suporte ao back-end em Go.",
      },
      {
        name: "Spincare — Gestão de Home Care",
        description:
          "Desenvolvimento full stack de uma solução para operações de Home Care, abrangendo APIs, interfaces de usuário e modelagem e gerenciamento do banco de dados.",
      },
      {
        name: "Totem de Autoatendimento em Saúde",
        description:
          "Construção de um totem para hospitais e laboratórios, com desenvolvimento de APIs e interfaces, estruturação do banco de dados e integração com o sistema Tasy.",
      },
      {
        name: "Plataforma de Gestão de Eventos",
        description:
          "Desenvolvimento de uma plataforma web e mobile para gestão de eventos, incluindo APIs, interface do usuário, integração com pagamentos e persistência de dados.",
      },
      {
        name: "Indicadores Assistenciais",
        description:
          "Desenvolvimento de APIs e dashboards com gráficos dinâmicos para visualização e acompanhamento de indicadores da área assistencial.",
      },
    ],
  },

  experience: {
    title: "Experiência",
    tabs: {
      it: "TI",
      other: "Outras",
    },
    emptyOther: "Nenhuma experiência extra cadastrada ainda.",

    philips: {
      company: "Premiersoft",
      role: "Desenvolvedor Full Stack Pleno",
      period: "12/2025 - Atual",
      contract:
        "Alocado como terceiro no cliente Bionexo Tasy (antiga Philips). Atuo no cliente desde a época da Philips e permaneci após a aquisição pela Bionexo Tasy.",
      description: `
Portal Corporativo Multiversão
- Correção de bugs e inconsistências entre versões
- Manutenção e evolução das funcionalidades existentes
- Investigação e resolução de problemas no sistema
- Implementação de ajustes e melhorias conforme as necessidades do projeto

Migração de um portal legado do setor farmacêutico
- Migração e modernização de portal legado do setor farmacêutico
- Desenvolvimento de interfaces utilizando React
- Criação e manutenção de APIs em Java
- Refatoração de código visando melhoria de performance e manutenibilidade
- Correção de bugs e implementação de novas funcionalidades
- Trabalho com banco de dados Oracle em ambiente corporativo
`,
    },

    lince: {
      company: "Lince Tech",
      role: "Desenvolvedor Full Stack",
      period: "11/2024 - 11/2025",
      contract: "",
      description: `
- Desenvolvimento de portal de cursos utilizando Vue
- Desenvolvimento de interfaces e componentes de usuário
- Criação de dashboards e gráficos dinâmicos
- Aplicação de princípios de Arquitetura Limpa
- Suporte no desenvolvimento de funcionalidades back-end em Golang
`,
    },

    pulsati: {
      company: "Pulsati",
      role: "Desenvolvedor Full Stack",
      period: "01/2023 - 11/2024",
      contract: "",
      description: `
Projeto Spincare (Home Care)
- Desenvolvimento de APIs utilizando Java
- Desenvolvimento da interface do usuário em Angular
- Implementação e gerenciamento de banco de dados PostgreSQL

Totem de Autoatendimento para Hospitais e Laboratórios
- Desenvolvimento de APIs utilizando Java
- Desenvolvimento da interface utilizando React
- Implementação de tabelas e gerenciamento de banco de dados
- Integração com sistema hospitalar Tasy

Sistema de Gestão de Eventos
- Desenvolvimento de APIs e lógica de negócio
- Desenvolvimento de interface web em React
- Integração com sistema de pagamento
- Implementação e gerenciamento de banco de dados PostgreSQL

Indicadores Assistenciais
- Desenvolvimento de APIs utilizando Java
- Criação de dashboards e gráficos dinâmicos
- Desenvolvimento da interface do usuário em React

Consultoria Tasy
- Atuação em processo de migração para Tasy HTML5
`,
    },

    example: {
      company: "Exemplo — edite ou remova",
      role: "Sua função",
      period: "01/2020 - 12/2020",
      contract: "",
      description: `
- Este é um item de exemplo para experiências fora de TI
- Você pode editar em src/i18n/*.ts (chave "example")
- Para remover, apague este item e o correspondente em src/data/experience.ts
`,
    },
  },

  education: {
    title: "Formação",
    showDetails: "Ver detalhes",
    hideDetails: "Ocultar detalhes",
    items: [
      {
        course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
        period: "Concluído em Jul/2024",
        subjects: [
          { name: "Modelagem de Software", hours: 160 },
          { name: "Programação de Soluções Computacionais", hours: 160 },
          { name: "Ambientes Computacionais e Conectividade", hours: 160 },
          { name: "Sistemas Computacionais e Segurança", hours: 160 },
          { name: "Gestão e Qualidade de Software", hours: 160 },
          { name: "Engenharia de Software", hours: 160 },
          { name: "Sistemas Distribuídos e Mobile", hours: 160 },
          { name: "Usabilidade e Desenvolvimento Web", hours: 160 },
        ],
      },
      {
        course: "MBA em Gestão de Projetos",
        period: "Concluído em Out/2025",
        subjects: [
          { name: "Tópicos Essenciais em Gestão", hours: 40 },
          { name: "Administração Estratégica", hours: 40 },
          { name: "Administração Financeira", hours: 40 },
          { name: "Elaboração de Projetos Empresariais", hours: 40 },
          { name: "Elaboração de Business Plan", hours: 40 },
          { name: "Fundamentos e Gerenciamento Integrado de Projetos", hours: 40 },
          { name: "Gerenciamento do Escopo, Tempo e Custos em Projetos", hours: 40 },
          { name: "Princípios de Liderança e Gestão de Equipes", hours: 40 },
          { name: "Gerenciamento de Comunicações, Riscos e Aquisições", hours: 40 },
          { name: "Gerenciamento das Partes Interessadas e Ferramentas de TI", hours: 40 },
          { name: "Tópicos Essenciais para Gestão de Projetos", hours: 40 },
        ],
      },
      {
        course: "Pós-graduação em Biologia Marinha",
        period: "Concluída em Fev/2026",
        subjects: [
          { name: "Desenvolvimento Profissional", hours: 40 },
          { name: "Ecossistemas Marinhos e Costeiros", hours: 40 },
          { name: "Gerenciamento Costeiro", hours: 60 },
          { name: "Vertebrados Marinhos", hours: 60 },
          { name: "Poluição Marinha e Avaliação de Impactos Ambientais", hours: 40 },
          { name: "Legislação Ambiental, Licenciamento Ambiental e Gestão Ambiental", hours: 60 },
          { name: "Invertebrados Marinhos", hours: 60 },
          { name: "Fundamentos Gerais e Ecologia Marinha", hours: 40 },
        ],
      },
      {
        course: "Bacharelado em Ciências Biológicas",
        period: "Previsão de conclusão em 2028",
        subjects: [
          { name: "Ambientação Digital", hours: 20 },
          { name: "Anatomia Humana", hours: 40 },
          { name: "Avaliação Integrada de Competências em Ciências Biológicas", hours: 0 },
          { name: "Língua Brasileira de Sinais", hours: 40 },
          { name: "Morfologia Vegetal", hours: 80 },
          { name: "Plano de Acompanhamento de Carreira em Ciências Biológicas", hours: 10 },
          { name: "Avaliação Integrada de Competências em Ciências Biológicas I", hours: 0 },
          { name: "Bioestatística", hours: 40 },
          { name: "Fundamentos de Geologia e Paleontologia", hours: 40 },
          { name: "Língua Brasileira de Sinais II", hours: 40 },
          { name: "Microbiologia Básica e Ambiental", hours: 80 },
          { name: "Plano de Acompanhamento de Carreira em Ciências Biológicas I", hours: 10 },
          { name: "Zoologia dos Invertebrados", hours: 80 },
          { name: "Zoologia dos Vertebrados", hours: 80 }
        ]
      },
    ],
  },

  certifications: {
    title: "Certificações",
    viewCredential: "Ver credencial",
    items: [
      {
        title: "AWS Partner: Accreditation (Technical)",
        institution: "Amazon Web Services (AWS)",
        period: "Emitida em ago. de 2026",
        techs: ["AWS", "Computação em nuvem", "Arquitetura"],
      },
      {
        title: "AWS Technical Essentials",
        institution: "Amazon Web Services (AWS)",
        period: "Emitida em ago. de 2026",
        techs: ["AWS", "Computação em nuvem", "Fundamentos AWS"],
      },
      {
        title: "Arquitetura Hexagonal / Ports and Adapters",
        institution: "Udemy",
        period: "Emitida em out. de 2024",
        techs: ["Arquitetura", "Java", "Design de sistemas"],
      },
      {
        title: "Curso Completo de APIs com Node.js, Express, MongoDB e SQL",
        institution: "Udemy",
        period: "Emitida em mai. de 2024",
        techs: ["Node.js", "Express", "MongoDB", "SQL", "API REST"],
      },
      {
        title: "SAP TO WORK",
        institution: "AC International Group",
        period: "Emitida em jun. de 2024",
        techs: ["SAP"],
      },
    ],
  },

  footer: {
    rights: "Todos os direitos reservados.",
  },

  languages: {
    title: "Idiomas",
    items: [
      { name: "Português", level: "Fluente / Nativo" },
      { name: "Espanhol", level: "Intermediário" },
      { name: "Inglês", level: "Básico / Intermediário (em andamento)" },
      { name: "Alemão", level: "Iniciante (em andamento)" },
    ],
  },
};

export default pt;
