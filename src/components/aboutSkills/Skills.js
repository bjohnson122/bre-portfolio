import React from "react";
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

const test = [
  { src: firebase, text: "Firebase" },
  { src: git, text: "Git" },
  { src: procreate, text: "Procreate" },
  { src: spline, text: "Spline" },
];

export default function Skills() {
  return (
    <div className="h-full w-screen p-2 pt-14 ">
      <p className="px-8">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry&apos;s standard dummy text
        ever since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing
      </p>
      <br />

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
        
          md:mx-5 space-y-2"
        >
          {skills.map((skill, idx) => {
            return <SkillsIcon src={skill.src} alt={skill.text} key={idx} />;
          })}
        </span>
      </div>
    </div>
  );
}
