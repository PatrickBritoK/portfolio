import { experiences } from "../data/experience";
import "../styles/experience.css";

export default function Experience() {
  return (
    <section>
      <div className="section-container">
        <h2>Experiência</h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot" />

              <div className="timeline-content">
                <h3>{exp.company}</h3>
                <p className="role">{exp.role}</p>
                <p className="desc">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
