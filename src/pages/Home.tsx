import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Languages from "../components/Languages";
import Certifications from "../components/Certifications";
import Footer from "../components/Footer";
import Reveal from "../components/Reveal";

export default function Home() {
  return (
    <>
      <Hero />

      <Reveal delay={100}>
        <About />
      </Reveal>

      <Reveal delay={150}>
        <TechStack />
      </Reveal>

      <Reveal delay={200}>
        <Projects />
      </Reveal>

      <Reveal delay={250}>
        <Experience />
      </Reveal>

      <Reveal delay={300}>
        <Education />
      </Reveal>

      <Reveal delay={350}>
        <Languages />
      </Reveal>

      <Reveal delay={400}>
        <Certifications />
      </Reveal>

      <Footer />
    </>
  );
}
