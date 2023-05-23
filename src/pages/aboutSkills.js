import AboutInfo from "@/components/aboutSkills/AboutInfo";
import Skills from "@/components/aboutSkills/Skills";
import React, { useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

export default function About() {
  return (
    <div className="pt-12" id="about">
      <div
        className="font-zidan text-center text-4xl
      sm:text-left sm:m-3 sm:ml-12 sm:text-5xl
      md:text-6xl
      lg:ml-16
      
      "
      >
        <Slide duration={1000} triggerOnce={true}>
          <p className="text-[#6352ff]">{"<About />"}</p>
        </Slide>
      </div>
      <Fade duration={1200} delay={800} triggerOnce={true}>
        <div>
          <AboutInfo />
          <Skills />
          <br />
        </div>
      </Fade>
    </div>
  );
}
