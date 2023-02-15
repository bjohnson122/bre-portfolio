import Hero from "./hero/Hero";
import Layout from "@/components/layout/Layout";
import Projects from "./projects/projects";
import About from "./about/AboutSkills";
import Contact from "../components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
