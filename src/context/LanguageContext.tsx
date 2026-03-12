import { createContext, useContext, useState, type ReactNode } from "react";
import { translations, type Language } from "../i18n";

interface LanguageContextData {
  lang: Language;
  setLang: (lang: Language) => void;
  translate: (typeof translations)["pt"];
}

const LanguageContext = createContext<LanguageContextData | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("pt");

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

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }

  return context;
}