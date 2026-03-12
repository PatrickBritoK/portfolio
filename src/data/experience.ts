export interface ExperienceItem {
  company: string;
  period: string;
  roleKey: string;
  descriptionKey: string;
  techs: string[];
}

export const experiences: ExperienceItem[] = [
  {
    company: "Philips (via Premiersoft)",
    period: "12/2025 - Atual",
    roleKey: "experience.philips.role",
    descriptionKey: "experience.philips.description",
    techs: ["Java", "React", "Oracle", "REST API", "Tasy"],
  },
  {
    company: "Lince Tech",
    period: "11/2024 - 11/2025",
    roleKey: "experience.lince.role",
    descriptionKey: "experience.lince.description",
    techs: ["Vue", "Go", "REST API", "JavaScript", "TypeScript"],
  },
  {
    company: "Pulsati",
    period: "01/2023 - 11/2024",
    roleKey: "experience.pulsati.role",
    descriptionKey: "experience.pulsati.description",
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