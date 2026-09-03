import { useState } from "react";
import {
  experiences,
  type CompanyLogo,
  type ExperienceCategory,
} from "../data/experience";
import "../styles/experience.css";
import { useLanguage } from "../context/useLanguage";

function LogoBadge({ logo }: { logo: CompanyLogo }) {
  if (logo.src) {
    return (
      <img
        src={logo.src}
        alt={logo.alt}
        title={logo.alt}
        className="company-logo"
      />
    );
  }

  return (
    <span
      className="company-logo company-logo-fallback"
      style={{ background: logo.color }}
      title={logo.alt}
      aria-label={logo.alt}
    >
      {logo.initials}
    </span>
  );
}

export default function Experience() {
  const { translate } = useLanguage();
  const [activeTab, setActiveTab] = useState<ExperienceCategory>("it");

  const filtered = experiences.filter((exp) => exp.category === activeTab);

  return (
    <section id="experiencia">
      <div className="section-container">
        <h2>{translate.experience.title}</h2>

        <div
          className="experience-tabs"
          role="tablist"
          aria-label={translate.experience.title}
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "it"}
            className={`experience-tab ${activeTab === "it" ? "active" : ""}`}
            onClick={() => setActiveTab("it")}
          >
            {translate.experience.tabs.it}
          </button>
          {/* <button
            type="button"
            role="tab"
            aria-selected={activeTab === "other"}
            className={`experience-tab ${activeTab === "other" ? "active" : ""}`}
            onClick={() => setActiveTab("other")}
          >
            {translate.experience.tabs.other}
          </button> */}
        </div>

        {filtered.length === 0 ? (
          <p className="experience-empty">{translate.experience.emptyOther}</p>
        ) : (
          <div className="timeline">
            {filtered.map((exp, index) => {
              const content = translate.experience[exp.translationKey];

              return (
                <div key={index} className="timeline-item">
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <div className="timeline-heading">
                        <h3>{content.company}</h3>
                        <p className="role">{content.role}</p>
                        <p className="period">{content.period}</p>
                        {content.contract && (
                          <p className="contract-note">{content.contract}</p>
                        )}
                      </div>

                      {exp.logos && exp.logos.length > 0 && (
                        <div
                          className="company-logos"
                          data-count={exp.logos.length}
                        >
                          {exp.logos.map((logo) => (
                            <LogoBadge key={logo.alt} logo={logo} />
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="desc">{content.description}</div>

                    {exp.techs.length > 0 && (
                      <div className="tech-list">
                        {exp.techs.map((tech) => (
                          <span key={tech} className="tech">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
