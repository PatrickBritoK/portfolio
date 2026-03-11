import { languages } from "../data/languages";
import "../styles/languages.css";

export default function Languages() {
  return (
    <section>
      <div className="section-container">
        <h2>Idiomas</h2>

        <div className="languages-grid">
          {languages.map((language) => (
            <div key={language.name} className="language-card">
              <h3>{language.name}</h3>
              <p>{language.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}