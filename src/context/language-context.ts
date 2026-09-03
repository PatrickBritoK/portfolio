import { createContext } from "react";
import { translations, type Language } from "../i18n";

export interface LanguageContextData {
  lang: Language;
  setLang: (lang: Language) => void;
  translate: (typeof translations)["pt"];
}

export const LanguageContext = createContext<LanguageContextData | undefined>(
  undefined,
);
