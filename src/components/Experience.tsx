import { experiences } from "../data/experience";
import "../styles/experience.css";
import { useLanguage } from "../context/useLanguage";

export default function Experience() {
  const { translate } = useLanguage();

  return (
    <section id="experiencia">
      <div className="section-container">
        <h2>{translate.experience.title}</h2>

        <div className="timeline">
          {experiences.map((exp, index) => {
            const content = translate.experience[exp.translationKey];

            return (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h3>{content.company}</h3>

                  <p className="role">{content.role}</p>

                  <p className="period">{content.period}</p>

                  <div className="desc">{content.description}</div>

                  <div className="tech-list">
                    {exp.techs.map((tech) => (
                      <span key={tech} className="tech">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
