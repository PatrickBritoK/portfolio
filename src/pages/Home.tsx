import Hero from "../components/Hero";
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
        <TechStack />
      </Reveal>

      <Reveal delay={150}>
        <Projects />
      </Reveal>

      <Reveal delay={200}>
        <Experience />
      </Reveal>

      <Reveal delay={250}>
        <Education />
      </Reveal>

      <Reveal delay={300}>
        <Languages />
      </Reveal>

      <Reveal delay={350}>
        <Certifications />
      </Reveal>

        <Footer />
    </>
  );
}