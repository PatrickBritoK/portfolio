import "../styles/hero.css";
import { useLanguage } from "../context/LanguageContext";

export default function Hero() {
  const { translate } = useLanguage();

  return (
    <section className="hero">
      <div className="hero-content section-container">
        <h1>Patrick Brito</h1>

        <p className="subtitle">{translate.hero.subtitle}</p>

        <p className="hero-text">{translate.hero.text}</p>

        <div className="hero-actions">
          <a
            href="https://github.com/PatrickBritoK"
            target="_blank"
            rel="noreferrer"
            className="btn"
          >
            {translate.hero.github}
          </a>

          <a
            href="https://www.linkedin.com/in/patrick-brito-6a9787237/"
            target="_blank"
            rel="noreferrer"
            className="btn secondary"
          >
            {translate.hero.linkedin}
          </a>
        </div>
      </div>
    </section>
  );
}