import { education } from "../data/education";
import "../styles/education.css";

export default function Education() {
  return (
    <section>
      <div className="section-container">
        <h2>Formação</h2>

        <div className="education-grid">
          {education.map((item, index) => (
            <div key={index} className="education-card">
              <h3>{item.course}</h3>

              {item.institution && (
                <p className="institution">{item.institution}</p>
              )}

              <p className="period">{item.period}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}