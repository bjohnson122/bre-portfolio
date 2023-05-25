import React, { useRef } from "react";
import { useInView } from "framer-motion";
import styled, { keyframes } from 'styled-components';
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";


export default function TextContainer({ title, description, type, role , demoLink, githubLink}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const TextContent = styled.section`
position: fixed;
background: pink;
top:0;
left:0;
display: flex;
flex-flow: column nowrap;
height:300vh;
width: 50%;
`;
 
  return (
    // entire container
    // <TextContent>
    <div className='p-2 ' >
      {/*Project Title  */}
      <div className="font-bold">
      <div className="text-3xl sm:text-[2rem]  lg:text-6xl pt-4 ">{title}</div>

      {/* Project Description */}
      <div className="font-normal px-2 text-sm sm:text-base lg:px-12 py-4 pt-5 lg:text-xl">
        {description}
      </div>

      {/* Project Type */}
      {/* <div className="bg-purple-300"><span className="font-semibold">Role: </span> {role}</div> */}
      {/* Demo Link */}
      {/* <div className="bg-orange-300 underline"><a href={demoLink}> Live Demo <LaunchOutlinedIcon className="text-sm"/></a></div> */}
      </div>
      <div className="space-x-8 text-sm sm:text-base text-gray-100 mt-3  font-semibold">
        {/* LIVE DEMO BUTTON */}{" "}
        <button className="bg-[#6352ff] p-1 rounded-2xl px-3 shadow-xl  shadow-[#000000]/40 hover:opacity-90">
          <a href={demoLink}>
            Live Demo <LaunchOutlinedIcon className="text-sm" />
          </a>
        </button>
        {/* GitHub */}
        <button className="bg-[#6352ff] text-sm sm:text-base p-1 rounded-2xl px-3 shadow-xl  shadow-[#000000]/40 mb-4  hover:opacity-90">
          <a href={githubLink}>
            <GitHubIcon /> GitHub
          </a>
        </button>
      </div>
      <br />
      <div className="text-sm sm:text-base mb-8">
        <span className="font-semibold ">Role: </span> {role}
      </div>
     </div> 
    // </TextContent>
  );
}
