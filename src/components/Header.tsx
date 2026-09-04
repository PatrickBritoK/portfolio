import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "../styles/header.css";
import { useLanguage } from "../context/useLanguage";
import { useTheme } from "../context/useTheme";
import LanguageSelect from "./LanguageSelect";

export default function Header() {
  const { translate } = useLanguage();
  const { theme, toggleTheme } = useTheme();
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
  const themeLabel =
    theme === "dark"
      ? translate.navigation.themeToLight
      : translate.navigation.themeToDark;

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

        <button
          type="button"
          className="theme-toggle"
          aria-label={themeLabel}
          title={themeLabel}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>

        <LanguageSelect />
      </div>
    </header>
  );
}
