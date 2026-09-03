import { techstack } from "../data/techstack";
import { useLanguage } from "../context/useLanguage";
import "../styles/techstack.css";

export default function TechStack() {
  const { translate } = useLanguage();

  return (
    <section id="tecnologias">
      <div className="section-container">
        <h2>{translate.techStack.title}</h2>

        <div className="stack-grid">
          {techstack.map((t) => {
            const Icon = t.icon;

            return (
              <div
                key={t.name}
                className="stack-item"
                style={{ "--tech-color": t.color } as React.CSSProperties}
              >
                <Icon className="stack-icon" style={{ color: t.color }} />
                <p>{t.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
