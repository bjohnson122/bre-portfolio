import React from "react";
import Image from "next/image";
import html from "/public/icons/html.png";
import css from "/public/icons/css.png";
import procreate from "/public/icons/procreate.png"
import firebase from "/public/icons/firebase.png";
import gatsby from "/public/icons/gatsby.png";
import js from "/public/icons/js.png";
import nextJS from "/public/icons/nextJS.svg.png";
import node from "/public/icons/node.png";
import postgresql from "/public/icons/postgresql.png";
import react from "/public/icons/React-icon.png";
import redux from "/public/icons/redux.png";
import tailwind from "/public/icons/Tailwind.svg.png";
import git from 'public/icons/Git.png'
import SkillsIcon from "./SkillsIcon";
import spline from 'public/icons/spline.png'

const skills = [
  { src: html, text: "HTML" },
  { src: css, text: "CSS" },
  { src: js, text: "Javascript" },
  { src: nextJS, text: "NextJS" },
  { src: tailwind, text: "Tailwind" },
  { src: gatsby, text: "Gatsby" },
  { src: node, text: "Node" },
  { src: postgresql, text: "PostgreSQL" },
  { src: react, text: "React" },
  { src: redux, text: "Redux" },
  { src: firebase, text: "Firebase" },
  { src: git, text: "Git" },
  { src: procreate, text: "Procreate" },
  { src: spline, text: "Spline" },

  
];

export default function Skills() {
  return (
    <div>
      <p>My technical journey started when I was awarded a highly-competitive fellowship offered by NYC and Fullstack Academy in 2022.</p>
      <br />
      <div className="relative flex py-5 items-center">
        <div className="flex-grow border-t border-gray-500 mt-20"></div>
        <span className="flex-shrink mx-4 text-gray-700 mt-20">Skills</span>
        <div className="flex-grow border-t border-gray-500 mt-20"></div>
      </div>

{/* m-auto md:flex-shrink relative flex md:flex-row flex-col items-center gap-4 overflow-hidden */}
      <div className="mt-2 flex p-8 justify-center relative flex-wrap gap-4 overflow-hidden">
        {skills.map((skill, idx) => {
          return <SkillsIcon src={skill.src} alt={skill.text} key={idx} />;
        })}
      </div>
    </div>
  );
}
