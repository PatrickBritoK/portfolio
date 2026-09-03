import { createContext } from "react";

export type Theme = "dark" | "light";

export interface ThemeContextData {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextData | undefined>(
  undefined,
);
