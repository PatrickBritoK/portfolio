import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./styles/global.css";
import { LanguageProvider } from "./context/LanguageContext.tsx";
import { ThemeProvider } from "./context/ThemeContext.tsx";
import { AccessibilityProvider } from "./context/AccessibilityContext.tsx";
import ColorBlindnessFilters from "./components/ColorBlindnessFilters.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <AccessibilityProvider>
          <ColorBlindnessFilters />
          <App />
        </AccessibilityProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>
);