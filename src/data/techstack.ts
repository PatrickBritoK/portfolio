import type { IconType } from "react-icons";

import {
  SiGo,
  SiOpenjdk,
  SiReact,
  SiVuedotjs,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiAmazon,
  SiGit,
} from "react-icons/si";

export interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

export const techstack: TechItem[] = [
  { name: "Java", icon: SiOpenjdk, color: "#ea2d2e" },
  { name: "Go", icon: SiGo, color: "#00ADD8" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Vue.js", icon: SiVuedotjs, color: "#41B883" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "Oracle", icon: SiOpenjdk, color: "#F80000" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900" },
  { name: "Git", icon: SiGit, color: "#F05032" },
];

