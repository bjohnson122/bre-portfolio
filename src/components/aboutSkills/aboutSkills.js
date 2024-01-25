import AboutInfo from "@/components/aboutSkills/AboutInfo";
import Skills from "@/components/aboutSkills/Skills";
import React from "react";
import { Slide, Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="pt-12 bg-[#6352ff08]" id="about">
      <div
        className="font-zidan text-center text-4xl
      sm:text-left sm:m-3 sm:ml-12 sm:text-5xl
      md:text-6xl
      lg:mx-16
      md:mt-[5%]
      "
      >
        <Slide duration={1000} triggerOnce={true}>
          <p className="text-[#6352ff]">{"<About />"}</p>
        </Slide>
      </div>
      <Fade duration={1200} delay={800} triggerOnce={true}>
        <div className="h-full sm:h-[75vh] pb-14">
          <AboutInfo />
          <Skills />
          <br />
        </div>
      </Fade>
    </div>
  );
}
