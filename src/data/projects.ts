export interface Project {
  id: string;
  link?: string;
  techs: string[];
}

export const projects: Project[] = [
  {
    id: "pharmaceutical-portal",
    techs: ["React", "Java", "Oracle"],
  },
  {
    id: "multi-version-portal",
    techs: ["React", "Java", "Oracle"],
  },
  {
    id: "courses-portal",
    techs: ["Vue", "Go", "Clean Architecture"],
  },
  {
    id: "spincare",
    techs: ["Angular", "Java", "PostgreSQL"],
  },
  {
    id: "self-service-kiosk",
    techs: ["React", "Java", "PostgreSQL", "Tasy"],
  },
  {
    id: "event-management",
    techs: ["React", "Flutter", "Java", "PostgreSQL"],
  },
  {
    id: "healthcare-indicators",
    techs: ["React", "Java", "Dashboards"],
  },
];
