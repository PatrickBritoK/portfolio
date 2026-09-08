import type { ReactElement } from "react";
import { render, type RenderOptions } from "@testing-library/react";
import { LanguageProvider } from "../context/LanguageContext";
import { ThemeProvider } from "../context/ThemeContext";
import { AccessibilityProvider } from "../context/AccessibilityContext";

export function renderWithProviders(
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) {
  return render(ui, {
    wrapper: ({ children }) => (
      <ThemeProvider>
        <LanguageProvider>
          <AccessibilityProvider>{children}</AccessibilityProvider>
        </LanguageProvider>
      </ThemeProvider>
    ),
    ...options,
  });
}
