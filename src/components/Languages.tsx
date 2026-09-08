import "../styles/languages.css";
import { useLanguage } from "../context/useLanguage";

// Ordem igual à das entradas em translate.languages.items (PT, ES, EN, DE)
const LANGUAGE_STYLES: Array<{ primary: string; gradient: string }> = [
  {
    primary: "#009c3b",
    gradient: "linear-gradient(90deg, #009c3b, #FFDF00, #002776)",
  },
  {
    primary: "#AA151B",
    gradient: "linear-gradient(90deg, #AA151B, #F1BF00, #AA151B)",
  },
  {
    primary: "#3C3B6E",
    gradient: "linear-gradient(90deg, #3C3B6E, #FFFFFF, #B22234)",
  },
  {
    primary: "#DD0000",
    gradient: "linear-gradient(90deg, #000000, #DD0000, #FFCE00)",
  },
];

export default function Languages() {
  const { translate } = useLanguage();

  const languages = translate.languages.items;

  return (
    <section id="idiomas">
      <div className="section-container">
        <h2>{translate.languages.title}</h2>

        <div className="languages-grid">
          {languages.map((language, index) => {
            const style = LANGUAGE_STYLES[index];

            return (
              <div
                key={index}
                id={`language-${index}`}
                className="language-card"
                style={
                  {
                    "--lang-color": style?.primary ?? "var(--accent)",
                    "--lang-gradient": style?.gradient ?? "var(--accent)",
                  } as React.CSSProperties
                }
              >
                <h3>{language.name}</h3>
                <p>{language.level}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
