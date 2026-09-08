import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BackToTop from "./components/BackToTop";
import ScrollToHash from "./components/ScrollToHash";
import SkipToContent from "./components/SkipToContent";
import AccessibilityButton from "./components/AccessibilityButton";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <SkipToContent />
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <AccessibilityButton />
      <BackToTop />
    </BrowserRouter>
  );
}