import "../styles/languages.css";
import { useLanguage } from "../context/LanguageContext";

export default function Languages() {
  const { translate } = useLanguage();

  const languages = translate.languages?.items ?? [];

  return (
    <section>
      <div className="section-container">
        <h2>{translate.languages?.title ?? "Idiomas"}</h2>

        <div className="languages-grid">
          {languages.map((language: any, index: number) => (
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