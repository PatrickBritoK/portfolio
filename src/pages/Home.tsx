import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Languages from "../components/Languages";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Languages />
      <Footer />
    </>
  );
}