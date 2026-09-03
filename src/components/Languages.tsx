import "../styles/languages.css";
import { useLanguage } from "../context/useLanguage";

export default function Languages() {
  const { translate } = useLanguage();

  const languages = translate.languages.items;

  return (
    <section>
      <div className="section-container">
        <h2>{translate.languages.title}</h2>

        <div className="languages-grid">
          {languages.map((language, index) => (
            <div key={index} className="language-card">
              <h3>{language.name}</h3>
              <p>{language.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
