import Hero from "./hero/Hero";
import Projects from "./projects";
import About from "../components/aboutSkills/aboutSkills";
import Contact from "../components/Contact";

export default function Home() {
  return (
    < div>
      <Hero/>
      <About />
      <Projects />
      <Contact />
    </div>
  );
}
