import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import "../styles/header.css";
import { useLanguage } from "../context/useLanguage";
import { useTheme } from "../context/useTheme";
import LanguageSelect from "./LanguageSelect";
import SearchButton from "./SearchButton";

export default function Header() {
  const { translate } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

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
    <header className={`header ${isHome ? "" : "header-minimal"}`.trim()}>
      <div className="header-container">
        <Link className="header-logo" to="/" onClick={closeMenu}>
          Patrick Brito
        </Link>

        {isHome && (
          <>
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
                    <Link to={`/${item.href}`} onClick={closeMenu}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </>
        )}

        <button
          type="button"
          className="theme-toggle"
          aria-label={themeLabel}
          title={themeLabel}
          onClick={toggleTheme}
        >
          {theme === "dark" ? <FiSun /> : <FiMoon />}
        </button>

        {isHome && <SearchButton />}

        <LanguageSelect />
      </div>
    </header>
  );
}
