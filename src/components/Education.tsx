import { useState } from "react";
import { education } from "../data/education";
import "../styles/education.css";

export default function Education() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggle = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section>
      <div className="section-container">
        <h2>Formação</h2>

        <div className="education-grid">
          {education.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div key={index} className="education-card">
                <h3>{item.course}</h3>

                {item.institution && (
                  <p className="institution">{item.institution}</p>
                )}

                <p className="period">{item.period}</p>

                {item.subjects && (
                  <button
                    className="details-btn"
                    onClick={() => toggle(index)}
                    type="button"
                  >
                    {isOpen ? "Ocultar detalhes" : "Ver detalhes"}
                  </button>
                )}

                {isOpen && item.subjects && (
                  <div className="subjects">
                    {item.subjects.map((subject) => (
                      <div key={subject.name} className="subject-item">
                        <span className="subject-name">{subject.name}</span>
                        <span className="subject-hours">{subject.hours}h</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}