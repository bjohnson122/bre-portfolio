import React, { useRef } from "react";
import { useInView } from "framer-motion";
import styled, { keyframes } from 'styled-components';

export default function TextContainer({ title, img, description, type, role , position, demoLink}) {
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
    <div className={`bg-pink-50 w-1/2 h-[100vh] relative top-1/2`} >
      {/*Project Title  */}
      <div className="sticky top-1/2 border-solid border-indigo-600 border-8">
      <div className="bg-blue-200 text-3xl sm:text-5xl  lg:text-7xl ">{title}</div>

      {/* Project Description */}
      <div className="bg-yellow-200">
        {description}
      </div>

      {/* Project Type */}
      <div className="bg-purple-300">{type}</div>
      {/* Demo Link */}
      <div className="bg-orange-300 underline"><a href={demoLink}> Live Demo</a></div></div>
     </div> 
    // </TextContent>
  );
}
