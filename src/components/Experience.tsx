import { experiences } from "../data/experience";
import "../styles/experience.css";
import { useLanguage } from "../context/LanguageContext";

export default function Experience() {
  const { translate } = useLanguage();

  return (
    <section>
      <div className="section-container">
        <h2>{translate.experience.title ?? "Experiência"}</h2>

        <div className="timeline">
          {experiences.map((exp, index) => {
            const role =
              exp.roleKey
                .split(".")
                .reduce((obj: any, key) => obj?.[key], translate);

            const description =
              exp.descriptionKey
                .split(".")
                .reduce((obj: any, key) => obj?.[key], translate);

            return (
              <div key={index} className="timeline-item">
                <div className="timeline-content">
                  <h3>{exp.company}</h3>

                  <p className="role">{role}</p>

                  <p className="period">{exp.period}</p>

                  <div className="desc">{description}</div>

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