export interface CompanyLogo {
  // Caminho para o SVG/PNG em /public/logos/. Se ausente, usa fallback (iniciais)
  src?: string;
  alt: string;
  initials: string;
  color: string;
}

export type ExperienceCategory = "it" | "other";

export interface ExperienceItem {
  translationKey: "philips" | "lince" | "pulsati" | "example";
  category: ExperienceCategory;
  // Formato "YYYY-MM"; end = null significa em andamento
  start: string;
  end: string | null;
  techs: string[];
  logos?: CompanyLogo[];
}

export const experiences: ExperienceItem[] = [
  {
    translationKey: "philips",
    category: "it",
    start: "2025-12",
    end: null,
    techs: ["Java", "React", "TypeScript", "Oracle", "REST API", "Tasy", "Git"],
    logos: [
      {
        src: "/images/premiersoft_logo.jpg",
        alt: "Premiersoft",
        initials: "PS",
        color: "#7c3aed",
      },
      {
        src: "/images/bionexo_logo.jpg",
        alt: "Bionexo Tasy",
        initials: "BT",
        color: "#0066b3",
      },
      {
        src: "/images/philips_logo.jpg",
        alt: "Philips",
        initials: "PH",
        color: "#0089cf",
      },
    ],
  },
  {
    translationKey: "lince",
    category: "it",
    start: "2024-11",
    end: "2025-11",
    techs: ["Vue", "Go", "REST API", "JavaScript", "TypeScript", "MySQL", "Git"],
    logos: [
      {
        src: "/images/lincetech_logo.jpg",
        alt: "Lince Tech",
        initials: "LT",
        color: "#f59e0b",
      },
    ],
  },
  {
    translationKey: "pulsati",
    category: "it",
    start: "2023-01",
    end: "2024-11",
    techs: [
      "Java",
      "Angular",
      "React",
      "TypeScript",
      "Flutter",
      "PostgreSQL",
      "Tasy",
      "REST API",
      "Git",
      "Linux",
    ],
    logos: [
      {
        src: "/images/pulsati_logo.jpg",
        alt: "Pulsati",
        initials: "PU",
        color: "#10b981",
      },
      {
        src: "/images/spincare_logo.jpg",
        alt: "Spincare",
        initials: "SP",
        color: "#ef4444",
      },
    ],
  },
  {
    translationKey: "example",
    category: "other",
    start: "2020-01",
    end: "2020-12",
    techs: [],
  },
];

