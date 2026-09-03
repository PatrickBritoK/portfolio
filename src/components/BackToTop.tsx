import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";
import { useLanguage } from "../context/useLanguage";
import "../styles/back-to-top.css";

const SCROLL_THRESHOLD = 400;

export default function BackToTop() {
  const { translate } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > SCROLL_THRESHOLD);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? "visible" : ""}`}
      aria-label={translate.navigation.backToTop}
      title={translate.navigation.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FiArrowUp />
    </button>
  );
}
