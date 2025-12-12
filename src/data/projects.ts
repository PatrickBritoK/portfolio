export interface Project {
  name: string;
  description: string;
  link?: string;
  techs: string[];
}

export const projects: Project[] = [
  {
    name: "Envius",
    description:
      "SaaS de agendamento automático de mensagens para WhatsApp usando Go, Node e n8n.",
    link: "https://envyus.com.br",
    techs: ["Go", "Node.js", "Vue", "PostgreSQL"],
  },
  {
    name: "OrceJá",
    description:
      "Sistema de orçamento para marmorarias com cálculo automático por m² e painel de clientes.",
    techs: ["Go", "React", "PostgreSQL"],
  },
  {
    name: "TVCorp",
    description:
      "Sistema de TV corporativa com layout dinâmico para barbearias e comércio local.",
    techs: ["Vue", "Node.js"],
  },
];
