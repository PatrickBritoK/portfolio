import { useLanguage } from "../context/useLanguage";
import "../styles/about.css";

export default function About() {
  const { translate } = useLanguage();

  return (
    <section id="sobre" className="about">
      <div className="section-container about-container">
        <h2>{translate.about.title}</h2>
        <p>{translate.about.text}</p>
      </div>
    </section>
  );
}
