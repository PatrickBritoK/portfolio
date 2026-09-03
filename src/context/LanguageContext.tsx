import {
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { translations, type Language } from "../i18n";
import { LanguageContext } from "./language-context";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");

  useEffect(() => {
    document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        setLang,
        translate: translations[lang],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
