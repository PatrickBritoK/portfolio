import { createContext } from "react";

export type FontSize = "small" | "normal" | "large" | "xlarge";
export type ColorFilter =
  | "none"
  | "protanopia"
  | "deuteranopia"
  | "tritanopia"
  | "achromatopsia";

export interface AccessibilitySettings {
  fontSize: FontSize;
  highContrast: boolean;
  reduceMotion: boolean;
  textSpacing: boolean;
  underlineLinks: boolean;
  colorFilter: ColorFilter;
}

export interface AccessibilityContextData {
  settings: AccessibilitySettings;
  setFontSize: (size: FontSize) => void;
  setHighContrast: (value: boolean) => void;
  setReduceMotion: (value: boolean) => void;
  setTextSpacing: (value: boolean) => void;
  setUnderlineLinks: (value: boolean) => void;
  setColorFilter: (filter: ColorFilter) => void;
  reset: () => void;
}

export const defaultSettings: AccessibilitySettings = {
  fontSize: "normal",
  highContrast: false,
  reduceMotion: false,
  textSpacing: false,
  underlineLinks: false,
  colorFilter: "none",
};

export const AccessibilityContext = createContext<
  AccessibilityContextData | undefined
>(undefined);
