export interface CertificationItem {
  title: string;
  institution: string;
  period: string;
  techs: string[];
  link?: string;
}

export const certifications: CertificationItem[] = [
  {
    title: "Arquitetura Hexagonal / Ports and Adapters",
    institution: "Udemy",
    period: "Out/2024",
    techs: ["Arquitetura", "Java", "Design de Sistemas"],
  },
  {
    title: "Curso Completo de APIs com Node.js, Express, MongoDB e SQL",
    institution: "Udemy",
    period: "Mai/2024",
    techs: ["Node.js", "Express", "MongoDB", "SQL", "REST API"],
  },
  {
    title: "SAP TO WORK",
    institution: "AC International Group",
    period: "Jun/2024",
    techs: ["SAP"],
  },
];