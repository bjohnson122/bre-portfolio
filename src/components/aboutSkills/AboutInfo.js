import React, { useRef } from "react";

const skillsList = [
  "Javascript (including Redux, React, Next.JS, and Gatsby)",
  "CSS (including tailwindCSS, MaterialUI, and Bootstrap)",
  "Version Control (i.e., Git & GitHub)",
  "Procreate and Spline (for graphics and 3D design)",
  "NodeJS (including Express)",
  "Relational Database Mangement (i.e., PostgreSQL)"
];

export default function AboutInfo() {
  return (
    <div>
      {/* mention web dev from scratch & design eye-catching layouts for webpages */}
      {/* <div><p className="px-8">I am a full-stack software engineer</p></div> */}
      

      {/* skills list */}
      <div className=" sm:w-screen text-[.65rem] list-outside items-center justify-center px-2 mx-[5%] pl-[2.5%] mt-4


      sm:grid sm:grid-cols-2 sm:grid-rows-3 
      sm: sm:gap-x-3
      
      lg:text-[.8rem] lg:w-[76%] lg:ml-[12%] lg:gap-x-6 lg:pl-[4%] lg:-pr-[5%]

      xl:text-base
      ">
        {skillsList.map((skill, idx) => { return (
          <li key={idx} className='py-1'>
            {skill}
            </li>
          )
        })}
      </div>
      
    </div>
  );
}
