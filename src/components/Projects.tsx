import { projects } from "../data/projects";
import "../styles/projects.css";

export default function Projects() {
  return (
    <section>
      <div className="section-container">
        <h2>Projetos em Destaque</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <div key={p.name} className="project-card">
              <h3>{p.name}</h3>

              <p className="description">{p.description}</p>

              <div className="tech-list">
                {p.techs.map((tech) => (
                  <span key={tech} className="tech">
                    {tech}
                  </span>
                ))}
              </div>

              {p.link && (
                <a href={p.link} target="_blank" rel="noreferrer" className="project-btn">
                  Ver Projeto
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}