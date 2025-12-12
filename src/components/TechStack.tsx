import { techstack } from "../data/techstack";
import "../styles/techstack.css";

export default function TechStack() {
  return (
    <section>
      <div className="section-container">
        <h2>Tech Stack</h2>

        <div className="stack-grid">
          {techstack.map((t) => {
            const Icon = t.icon;

            return (
              <div key={t.name} className="stack-item">
                <Icon className="stack-icon" style={{ color: t.color }}/>
                <p>{t.name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
