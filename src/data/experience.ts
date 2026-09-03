export interface ExperienceItem {
  translationKey: "philips" | "lince" | "pulsati";
  techs: string[];
}

export const experiences: ExperienceItem[] = [
  {
    translationKey: "philips",
    techs: ["Java", "React", "Oracle", "REST API", "Tasy"],
  },
  {
    translationKey: "lince",
    techs: ["Vue", "Go", "REST API", "JavaScript", "TypeScript"],
  },
  {
    translationKey: "pulsati",
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
