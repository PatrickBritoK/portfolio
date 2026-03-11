export interface EducationItem {
  course: string;
  institution?: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    course: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    period: "Concluído em Jul/2024",
  },
  {
    course: "MBA em Gestão de Projetos",
    period: "Conclusão em Out/2025",
  },
  {
    course: "Pós-graduação em Biologia Marinha",
    period: "Conclusão em Fev/2026",
  },
  {
    course: "Bacharelado em Ciências Biológicas",
    period: "Previsão de conclusão em 2028",
  },
];