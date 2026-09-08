import { useEffect, useRef, useState } from "react";
import { FiEye, FiRotateCcw } from "react-icons/fi";
import { useLanguage } from "../context/useLanguage";
import { useAccessibility } from "../context/useAccessibility";
import type { ColorFilter, FontSize } from "../context/accessibility-context";
import "../styles/accessibility.css";

const FONT_SIZES: FontSize[] = ["small", "normal", "large", "xlarge"];
const COLOR_FILTERS: ColorFilter[] = [
  "none",
  "protanopia",
  "deuteranopia",
  "tritanopia",
  "achromatopsia",
];

export default function AccessibilityButton() {
  const { translate } = useLanguage();
  const t = translate.accessibility;
  const {
    settings,
    setFontSize,
    setHighContrast,
    setReduceMotion,
    setTextSpacing,
    setUnderlineLinks,
    setColorFilter,
    reset,
  } = useAccessibility();
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

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
    <div className="a11y-wrapper" ref={wrapperRef}>
      <button
        type="button"
        className="a11y-toggle"
        aria-label={t.open}
        title={t.open}
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen((current) => !current)}
      >
        <FiEye />
      </button>

      {open && (
        <div className="a11y-panel" role="dialog" aria-label={t.title}>
          <h3 className="a11y-panel-title">{t.title}</h3>

          <div className="a11y-section">
            <p className="a11y-label">{t.fontSizeLabel}</p>
            <div className="a11y-buttons">
              {FONT_SIZES.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`a11y-option ${
                    settings.fontSize === size ? "active" : ""
                  }`}
                  onClick={() => setFontSize(size)}
                  aria-pressed={settings.fontSize === size}
                >
                  {t.fontSizes[size]}
                </button>
              ))}
            </div>
          </div>

          <div className="a11y-section">
            <label className="a11y-switch">
              <span>{t.highContrast}</span>
              <input
                type="checkbox"
                checked={settings.highContrast}
                onChange={(event) => setHighContrast(event.target.checked)}
              />
              <span className="a11y-switch-track" aria-hidden="true" />
            </label>
          </div>

          <div className="a11y-section">
            <label className="a11y-switch">
              <span>{t.reduceMotion}</span>
              <input
                type="checkbox"
                checked={settings.reduceMotion}
                onChange={(event) => setReduceMotion(event.target.checked)}
              />
              <span className="a11y-switch-track" aria-hidden="true" />
            </label>
          </div>

          <div className="a11y-section">
            <label className="a11y-switch">
              <span>{t.textSpacing}</span>
              <input
                type="checkbox"
                checked={settings.textSpacing}
                onChange={(event) => setTextSpacing(event.target.checked)}
              />
              <span className="a11y-switch-track" aria-hidden="true" />
            </label>
          </div>

          <div className="a11y-section">
            <label className="a11y-switch">
              <span>{t.underlineLinks}</span>
              <input
                type="checkbox"
                checked={settings.underlineLinks}
                onChange={(event) => setUnderlineLinks(event.target.checked)}
              />
              <span className="a11y-switch-track" aria-hidden="true" />
            </label>
          </div>

          <div className="a11y-section">
            <p className="a11y-label">{t.colorFilterLabel}</p>
            <p className="a11y-hint">{t.colorFilterHint}</p>
            <div className="a11y-buttons">
              {COLOR_FILTERS.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  className={`a11y-option ${
                    settings.colorFilter === filter ? "active" : ""
                  }`}
                  onClick={() => setColorFilter(filter)}
                  aria-pressed={settings.colorFilter === filter}
                >
                  {t.colorFilters[filter]}
                </button>
              ))}
            </div>
          </div>

          <button type="button" className="a11y-reset" onClick={reset}>
            <FiRotateCcw />
            <span>{t.reset}</span>
          </button>
        </div>
      )}
    </div>
  );
}
