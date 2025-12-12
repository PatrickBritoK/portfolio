export interface ExperienceItem {
  company: string;
  role: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    company: "Empresa 1",
    role: "Desenvolvedor Full Stack Pleno",
    description:
      "Desenvolvimento de soluções internas e SaaS usando Go, Java, React, PostgreSQL e integrações com CRM, Zendesk e pipelines de dados.",
  },
  {
    company: "Lince Tech",
    role: "Desenvolvedor Full Stack",
    description:
      "Criação de produtos como Envius, OrceJá e TVCorp, atuando no backend, frontend, cloud, arquitetura e UX.",
  },
  {
    company: "Pulsati",
    role: "Desenvolvedor Backend",
    description:
      "Desenvolvimento de soluções internas e SaaS usando Go, Java, React, PostgreSQL e integrações com CRM, Zendesk e pipelines de dados.",
  },
];
