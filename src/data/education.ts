export interface SubjectItem {
  name: string;
  hours: number;
}

export interface EducationItem {
  course: string;
  institution?: string;
  period: string;
  subjects?: SubjectItem[];
}

export const education: EducationItem[] = [
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
    period: "Conclusão em Out/2025",
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
    period: "Conclusão em Fev/2026",
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
  },
];