import AboutInfo from "@/components/aboutSkills/AboutInfo";
import Skills from "@/components/aboutSkills/Skills";
import React, { useRef } from "react";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";

const aboutTitleAnimation = {
  key: "about title",
  initial: { opacity: 0 },
  animate: { opacity: [0, 0.5, 1] },
  transition: { delay: .5, duration: 1, repeat:0 },
};

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  console.log(isInView, 'viewing')

  return (
    <div className="pt-14" id="about">
      <div  className="font-zidan text-center text-3xl
      sm:text-left sm:m-3 sm:ml-12 sm:text-4xl
      md:text-6xl
      lg:ml-16
      
      ">
        <Slide duration={1200} triggerOnce={true}>  <p>{"<About />"}</p></Slide>
      
      </div  >
    <Fade duration={2200} delay={800} triggerOnce={true}>
        <div>
          <AboutInfo />
          <Skills />
          <br />
        </div></Fade>
      
    </div>
  );
}
