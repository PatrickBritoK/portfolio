import { certifications } from "../data/certifications";
import "../styles/certifications.css";

export default function Certifications() {
  return (
    <section>
      <div className="section-container">
        <h2>Certificações</h2>

        <div className="certifications-grid">
          {certifications.map((item) => (
            <div key={item.title} className="certification-card">
              <h3>{item.title}</h3>
              <p className="institution">{item.institution}</p>
              <p className="period">{item.period}</p>

              <div className="tech-list">
                {item.techs.map((tech) => (
                  <span key={tech} className="tech">
                    {tech}
                  </span>
                ))}
              </div>

              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="certification-link"
                >
                  Ver credencial
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}