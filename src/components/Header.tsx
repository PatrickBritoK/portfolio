import "../styles/header.css";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../i18n";

export default function Header() {
  const { lang, setLang } = useLanguage();

  return (
    <header className="header">
      <div className="header-container">
        <div className="language-select">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value as Language)}
          >
            <option value="pt">🇧🇷 Português</option>
            <option value="en">🇺🇸 English</option>
            <option value="es">🇪🇸 Español</option>
            <option value="de">🇩🇪 Deutsch</option>
          </select>
        </div>
      </div>
    </header>
  );
}