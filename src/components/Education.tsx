import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "../styles/education.css";

export default function Education() {
  const { translate } = useLanguage();
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
        <h2>{translate.education.title}</h2>

        <div className="education-grid">
          {translate.education.items.map((item, index) => {
            const isOpen = openItems.includes(index);

            return (
              <div key={index} className="education-card">
                <h3>{item.course}</h3>

                {/* {item.institution && (
                  <p className="institution">{item.institution}</p>
                )} */}

                <p className="period">{item.period}</p>

                {item.subjects && (
                  <button
                    className="details-btn"
                    onClick={() => toggle(index)}
                    type="button"
                  >
                    {isOpen
                      ? translate.education.hideDetails
                      : translate.education.showDetails}
                  </button>
                )}

                {isOpen && item.subjects && (
                  <div className="subjects">
                    {item.subjects.map((subject) => (
                      <div key={subject.name} className="subject-item">
                        <span className="subject-name">{subject.name}</span>
                        <span className="subject-hours">
                          {subject.hours}h
                        </span>
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