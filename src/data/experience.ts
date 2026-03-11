export interface ExperienceItem {
  company: string;
  period: string;
  role: string;
  description: string;
  techs: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Philips (via Premiersoft)",
    period: "12/2025 - Atual",
    role: "Desenvolvedor Full Stack Pleno",
    description: `
- Migração e modernização de portal legado do setor farmacêutico
- Desenvolvimento de interfaces utilizando React
- Criação e manutenção de APIs em Java
- Refatoração de código visando melhoria de performance e manutenibilidade
- Correção de bugs e implementação de novas funcionalidades
- Trabalho com banco de dados Oracle em ambiente corporativo
`,
    techs: ["Java", "React", "Oracle", "REST API", "Tasy"],
  },
  {
    company: "Lince Tech",
    period: "11/2024 - 11/2025",
    role: "Desenvolvedor Full Stack",
    description: `
- Desenvolvimento de portal de cursos utilizando Vue
- Desenvolvimento de interfaces e componentes de usuário
- Criação de dashboards e gráficos dinâmicos
- Aplicação de princípios de Clean Architecture
- Suporte no desenvolvimento de funcionalidades back-end em Golang
`,
    techs: ["Vue", "Go", "REST API", "JavaScript", "TypeScript"],
  },
  {
    company: "Pulsati",
    period: "01/2023 - 11/2024",
    role: "Desenvolvedor Full Stack",
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
    techs: [
      "Java",
      "Angular",
      "React",
      "Flutter",
      "PostgreSQL",
      "Tasy",
      "REST API",
    ],
  },
];