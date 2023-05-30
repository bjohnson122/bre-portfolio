import React from "react";
import Image from "next/image";
import TextContainer from "./TextContainer";

import Tilt from "react-parallax-tilt";



export default function Project({
  title,
  img,
  description,
  type,
  role,
  demoLink,
  githubLink,
}) {
  return (
    <div className="h-fit pb-12">
      <TextContainer
        title={title}
        description={description}
        type={type}
        role={role}
        demoLink={demoLink}
        githubLink={githubLink}
      />
      
      <Tilt tiltReverse={true} perspective={4000} transitionSpeed={3500} scale={1.025}>
      <Image src={img} alt="alt" className="sm:px-[10%] md:px-[20%]" /></Tilt>
    
    </div>
  );
}
