import { useCallback, useEffect, useState, type ReactNode } from "react";
import {
  AccessibilityContext,
  defaultSettings,
  type AccessibilitySettings,
  type ColorFilter,
  type FontSize,
} from "./accessibility-context";

const STORAGE_KEY = "portfolio-a11y";

function getInitial(): AccessibilitySettings {
  if (typeof window === "undefined") return defaultSettings;

  let stored: Partial<AccessibilitySettings> = {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (raw) stored = JSON.parse(raw) as Partial<AccessibilitySettings>;
  } catch {
    stored = {};
  }

  // Se o usuário não escolheu explicitamente, respeitar prefers-reduced-motion
  const prefersReducedMotion =
    stored.reduceMotion === undefined
      ? window.matchMedia("(prefers-reduced-motion: reduce)").matches
      : stored.reduceMotion;

  return {
    ...defaultSettings,
    ...stored,
    reduceMotion: prefersReducedMotion,
  };
}

function applyToDOM(settings: AccessibilitySettings) {
  const html = document.documentElement;

  html.classList.remove(
    "a11y-font-small",
    "a11y-font-normal",
    "a11y-font-large",
    "a11y-font-xlarge",
  );
  html.classList.add(`a11y-font-${settings.fontSize}`);

  html.classList.toggle("a11y-high-contrast", settings.highContrast);
  html.classList.toggle("a11y-reduce-motion", settings.reduceMotion);
  html.classList.toggle("a11y-text-spacing", settings.textSpacing);
  html.classList.toggle("a11y-underline-links", settings.underlineLinks);
  html.classList.toggle(
    "a11y-space-heavy",
    settings.fontSize === "xlarge" || settings.textSpacing,
  );

  if (settings.colorFilter === "none") {
    html.removeAttribute("data-color-filter");
  } else {
    html.setAttribute("data-color-filter", settings.colorFilter);
  }
}

export function AccessibilityProvider({ children }: { children: ReactNode }) {
  const [settings, setSettings] = useState<AccessibilitySettings>(getInitial);

  useEffect(() => {
    applyToDOM(settings);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(settings));
    } catch {
      // ignore storage errors (private mode, quota, etc.)
    }
  }, [settings]);

  const setFontSize = useCallback(
    (size: FontSize) => setSettings((s) => ({ ...s, fontSize: size })),
    [],
  );
  const setHighContrast = useCallback(
    (value: boolean) => setSettings((s) => ({ ...s, highContrast: value })),
    [],
  );
  const setReduceMotion = useCallback(
    (value: boolean) => setSettings((s) => ({ ...s, reduceMotion: value })),
    [],
  );
  const setTextSpacing = useCallback(
    (value: boolean) => setSettings((s) => ({ ...s, textSpacing: value })),
    [],
  );
  const setUnderlineLinks = useCallback(
    (value: boolean) => setSettings((s) => ({ ...s, underlineLinks: value })),
    [],
  );
  const setColorFilter = useCallback(
    (filter: ColorFilter) => setSettings((s) => ({ ...s, colorFilter: filter })),
    [],
  );
  const reset = useCallback(() => setSettings(defaultSettings), []);

  return (
    <AccessibilityContext.Provider
      value={{
        settings,
        setFontSize,
        setHighContrast,
        setReduceMotion,
        setTextSpacing,
        setUnderlineLinks,
        setColorFilter,
        reset,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
}
