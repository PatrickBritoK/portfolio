import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../context/useLanguage";
import type { Language } from "../i18n";

const OPTIONS: Array<{ code: Language; label: string; flag: string }> = [
  { code: "pt", label: "Português", flag: "br" },
  { code: "en", label: "English", flag: "us" },
  { code: "es", label: "Español", flag: "es" },
  { code: "de", label: "Deutsch", flag: "de" },
];

export default function LanguageSelect() {
  const { lang, setLang, translate } = useLanguage();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const current = OPTIONS.find((o) => o.code === lang) ?? OPTIONS[0];

  useEffect(() => {
    if (!open) return;

    const handleClick = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };

    const handleKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleKey);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleKey);
    };
  }, [open]);

  return (
    <div className="language-select" ref={wrapperRef}>
      <button
        type="button"
        className="language-trigger"
        aria-label={translate.navigation.language}
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <img
          src={`https://flagcdn.com/${current.flag}.svg`}
          alt=""
          className="language-flag"
        />
        <span>{current.code.toUpperCase()}</span>
      </button>

      {open && (
        <ul className="language-menu" role="listbox">
          {OPTIONS.map((option) => (
            <li key={option.code}>
              <button
                type="button"
                role="option"
                aria-selected={option.code === lang}
                className={`language-option ${
                  option.code === lang ? "active" : ""
                }`}
                onClick={() => {
                  setLang(option.code);
                  setOpen(false);
                }}
              >
                <img
                  src={`https://flagcdn.com/${option.flag}.svg`}
                  alt=""
                  className="language-flag"
                />
                <span>{option.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
