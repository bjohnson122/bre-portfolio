import React, { useState, useEffect, useRef } from "react";
import ButtonLink from "./buttonLink";
import html from "/public/icons/html.png";
import css from "/public/icons/css.png";
import procreate from "/public/icons/procreate.png";
import firebase from "/public/icons/firebase.png";
import gatsby from "/public/icons/gatsby.png";
import js from "/public/icons/js.png";
import nextJS from "/public/icons/nextJS.svg.png";
import node from "/public/icons/node.png";
import postgresql from "/public/icons/postgresql.png";
import react from "/public/icons/React-icon.png";
import redux from "/public/icons/redux.png";
import tailwind from "/public/icons/Tailwind.svg.png";
import git from "public/icons/Git.png";
import SkillsIcon from "./SkillsIcon";
import spline from "public/icons/spline.png";
import "animate.css";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";

const skills = [
  { src: html, text: "HTML" },
  { src: css, text: "CSS" },
  { src: js, text: "Javascript" },
  { src: react, text: "React" },
  { src: redux, text: "Redux" },
  { src: nextJS, text: "NextJS" },
  { src: tailwind, text: "Tailwind" },
  { src: gatsby, text: "Gatsby" },
  { src: node, text: "Node" },
  { src: postgresql, text: "PostgreSQL" },
  { src: firebase, text: "Firebase" },
  { src: git, text: "Git" },
  { src: procreate, text: "Procreate" },
  { src: spline, text: "Spline" },
];

const skillsList = [
  "Javascript (including Redux, React, Next.JS, and Gatsby)",
  "CSS (including tailwindCSS and MaterialUI)",
  "Version Control (i.e., Git & GitHub)",
  "Procreate and Spline (for graphics and 3D design)",
  "NodeJS (including Express)",
  "Database Management (i.e., PostgreSQL and Sequelize)",
];


const skillsTextAnimation = {
  key: "skills",
  initial: { opacity: 0 },
  animate: { opacity: [0, 0.5, 1] },
  transition: { delay: .5, duration: 1.5, repeat: 0 },
};
export default function Skills() {
  const [smallMobile, setSmallMobile] = useState(undefined);
  const ref = useRef(null);
  const isInView = useInView(ref);
  const skillText = useRef(null)



  useEffect(() => {
    const updateMobile = () => {
      setSmallMobile(
        window.innerWidth > 389 && window.innerWidth <= 475 ? true : false
      );
    };
 
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  
  }, []);

  return (
    <motion.div 
    {...skillsTextAnimation}
    className="h-screen w-screen p-2  ">
      {/* Skills line break */}
      <div className="relative flex pb-4 items-center sm:px-6">
        <div className="flex-grow border-t border-gray-500 mt-4"></div>
        <span className="flex-shrink mx-4 text-gray-900 mt-4 sm:text-xl md:text-[1.37rem]">
          Skills
        </span>
        <div className="flex-grow border-t border-gray-500 mt-4"></div>
      </div>

      {/* ICONS */}

      <div>
        <span
          className=" grid grid-cols-7 gap-1  grid-rows-2 mx-2 items-center justify-center 
          
          sm:grid sm:gap-4 sm:mx-[10%] sm:grid-cols-7 sm:grid-rows-2 sm:px-8 
        
          md:mx-5 md:pl-[85px] space-y-2 md:py-8
"
        >
          {skills.map((skill, idx) => {
            return (
              <SkillsIcon
                src={skill.src}
                alt={skill.text}
                key={idx}
                className="hover:opacity-50"
              />
            );
          })}
        </span>
        <br />

        {/* SKILLS LIST SMALL DEVICES vs. LARGER MOBILE DEVICES */}
        {smallMobile ? (
          <div className="text-[.8rem] list-outside items-center justify-center px-2 mx-[1%] pl-[2.5%] mt-4">
            {skillsList.map((skill, idx) => {
              return (
                <li key={idx} className="py-1">
                  {skill}
                </li>
              );
            })}
          </div>
        ) : (
          <div
            className="w-screen  text-[0.50rem] list-outside items-center justify-center px-2 mx-[1%] pl-[2.5%] mt-3
              xs:mx-[5%] xs:text-[.9rem]
             
              sm:flex-col sm:text-xs sm:ml-[5%] sm:w-[70%]
             
              md:grid md:grid-cols-2 md:gap-x-3 md:grid-rows-3 md:w-screen md:text-[0.9rem] md:ml-[3%] 

              lg:text-[.8rem] lg:w-[76%] lg:ml-[12%] lg:gap-x-6 lg:pl-[4%] lg:-pr-[5%]

              xl:text-base"
          >
            {skillsList.map((skill, idx) => {
              return (
                <li key={idx} className="py-1">
                  {skill}
                </li>
              );
            })}
          </div>
        )}
        <br />
      
        {/* UPDATE WITH WORKING LINK & button !!! */}
            <ButtonLink />
      </div>
    </motion.div>
  );
}
