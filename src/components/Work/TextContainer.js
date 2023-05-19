import React, { useRef } from "react";
import { useInView } from "framer-motion";
import styled, { keyframes } from 'styled-components';
3

export default function TextContainer({ title, description, type, role , demoLink}) {
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
    <div className='p-2 lg:mt-16' >
      {/*Project Title  */}
      <div className="font-bold">
      <div className="text-3xl sm:text-5xl  lg:text-7xl pt-4 ">{title}</div>

      {/* Project Description */}
      <div className="font-normal px-12 py-4 lg:text-xl">
        {description}
      </div>

      {/* Project Type */}
      {/* <div className="bg-purple-300"><span className="font-semibold">Role: </span> {role}</div> */}
      {/* Demo Link */}
      {/* <div className="bg-orange-300 underline"><a href={demoLink}> Live Demo <LaunchOutlinedIcon className="text-sm"/></a></div> */}
      </div>
     </div> 
    // </TextContent>
  );
}
