import { projects } from "../data/projects";
import { useLanguage } from "../context/useLanguage";
import "../styles/projects.css";

export default function Projects() {
  const { translate } = useLanguage();

  return (
    <section id="projetos">
      <div className="section-container">
        <h2>{translate.projects.title}</h2>

        <div className="projects-grid">
          {projects.map((project, index) => {
            const content = translate.projects.items[index];

            return (
              <article
                key={project.id}
                id={`project-${project.id}`}
                className="project-card"
              >
                <h3>{content.name}</h3>

                <p className="description">{content.description}</p>

                <div className="tech-list">
                  {project.techs.map((tech) => (
                    <span key={tech} className="tech">
                      {translate.techLabels[tech] ?? tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="project-btn"
                  >
                    {translate.projects.viewProject}
                  </a>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
