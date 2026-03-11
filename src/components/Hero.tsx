import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-content section-container">
        <h1>Patrick Brito</h1>

        <p className="subtitle">
          Desenvolvedor Full Stack com foco em Java, Go, React, Vue e arquitetura de aplicações escaláveis.
        </p>

        <p className="hero-text">
          Experiência no desenvolvimento de APIs, interfaces modernas, integrações REST,
          banco de dados relacionais e deploy em ambientes cloud com Docker e AWS.
        </p>

        <div className="hero-actions">
          <a href="https://github.com/PatrickBritoK" target="_blank" rel="noreferrer" className="btn">
            GitHub
          </a>

          <a href="https://www.linkedin.com/in/patrick-brito-6a9787237/" target="_blank" rel="noreferrer" className="btn secondary">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}