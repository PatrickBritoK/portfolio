import { useLanguage } from "../context/useLanguage";
import { certifications } from "../data/certifications";
import "../styles/certifications.css";

export default function Certifications() {
  const { translate } = useLanguage();

  return (
    <section id="certificacoes">
      <div className="section-container">
        <h2>{translate.certifications.title}</h2>

        <div className="certifications-grid">
          {certifications.map((certification, index) => {
            const content = translate.certifications.items[index];

            return (
              <article
                key={certification.id}
                id={`certification-${index}`}
                className="certification-card"
              >
                <h3>{content.title}</h3>
                <p className="institution">{content.institution}</p>
                <p className="period">{content.period}</p>

                <div className="tech-list">
                  {content.techs.map((tech) => (
                    <span key={tech} className="tech">
                      {tech}
                    </span>
                  ))}
                </div>

                {certification.link && (
                  <a
                    href={certification.link}
                    target="_blank"
                    rel="noreferrer"
                    className="certification-link"
                  >
                    {translate.certifications.viewCredential}
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
