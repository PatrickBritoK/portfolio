import type { IconType } from "react-icons";

import {
  SiGo,
  SiOpenjdk,
  SiReact,
  SiVuedotjs,
  SiAngular,
  SiTypescript,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiAmazon,
  SiGit,
  SiOracle,
  SiLinux,
  SiFlutter,
  SiDart,
  SiNodedotjs,
  SiNextdotjs,
  SiMongodb,
  SiKotlin,
} from "react-icons/si";

export type TechCategory = "professional" | "learning";

export interface TechItem {
  name: string;
  icon: IconType;
  color: string;
  category: TechCategory;
  aliases?: string[];
}

export const techstack: TechItem[] = [
  { name: "Java", icon: SiOpenjdk, color: "#ea2d2e", category: "professional" },
  { name: "Go", icon: SiGo, color: "#00ADD8", category: "professional" },
  { name: "React", icon: SiReact, color: "#61DAFB", category: "professional" },
  {
    name: "Vue",
    icon: SiVuedotjs,
    color: "#41B883",
    category: "professional",
    aliases: ["Vue"],
  },
  { name: "Angular", icon: SiAngular, color: "#DD0031", category: "professional" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6", category: "professional" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791", category: "professional" },
  { name: "Oracle", icon: SiOracle, color: "#F80000", category: "professional" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1", category: "professional" },
  { name: "Docker", icon: SiDocker, color: "#2496ED", category: "professional" },
  { name: "AWS", icon: SiAmazon, color: "#FF9900", category: "professional" },
  { name: "Linux", icon: SiLinux, color: "#FCC624", category: "professional" },
  { name: "Git", icon: SiGit, color: "#F05032", category: "professional" },

  { name: "Flutter", icon: SiFlutter, color: "#02569B", category: "learning" },
  { name: "Dart", icon: SiDart, color: "#0175C2", category: "learning" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", category: "learning" },
  { name: "Next.js", icon: SiNextdotjs, color: "#e5e7eb", category: "learning" },
  { name: "Kotlin", icon: SiKotlin, color: "#7F52FF", category: "learning" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248", category: "learning" },
];

