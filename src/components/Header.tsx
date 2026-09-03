import { useState } from "react";
import "../styles/header.css";
import { useLanguage } from "../context/useLanguage";
import type { Language } from "../i18n";

export default function Header() {
  const { lang, setLang, translate } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { href: "#inicio", label: translate.navigation.home },
    { href: "#sobre", label: translate.navigation.about },
    { href: "#tecnologias", label: translate.navigation.technologies },
    { href: "#projetos", label: translate.navigation.projects },
    { href: "#experiencia", label: translate.navigation.experience },
    { href: "#formacao", label: translate.navigation.education },
    { href: "#certificacoes", label: translate.navigation.certifications },
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="header">
      <div className="header-container">
        <a className="header-logo" href="#inicio" onClick={closeMenu}>
          Patrick Brito
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={translate.navigation.toggleMenu}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav
          id="primary-navigation"
          className={`navigation ${isMenuOpen ? "open" : ""}`}
          aria-label={translate.navigation.label}
        >
          <ul>
            {navigationItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="language-select">
          <label className="sr-only" htmlFor="language">
            {translate.navigation.language}
          </label>
          <select
            id="language"
            value={lang}
            onChange={(event) => {
              setLang(event.target.value as Language);
              closeMenu();
            }}
          >
            <option value="pt">Português</option>
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="de">Deutsch</option>
          </select>
        </div>
      </div>
    </header>
  );
}
