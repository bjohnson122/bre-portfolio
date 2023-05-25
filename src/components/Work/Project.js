import React from "react";
import ParallaxProjectImages from "./ParallaxProjectImages";
import Image from "next/image";
import TextContainer from "./TextContainer";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
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
      {/* Text on the Left Side of the Screen */}
      <TextContainer
        title={title}
        description={description}
        type={type}
        role={role}
        demoLink={demoLink}
        githubLink={githubLink}
      />
      
    
      {/* Image */}
      <Tilt tiltReverse={true} perspective={4000} transitionSpeed={3500} scale={1.025}>
      <Image src={img} alt="alt" className="sm:px-[10%] md:px-[20%]" /></Tilt>
      {/* <hr className="relative ml-[15%] border-[#6352ff] border-1 mt-20 w-[70%]"></hr> */}
      {/* <ParallaxProjectImages img={img} title={title} className='relative' /> */}
      {/* Parallax Images on the Right Side of the Screen*/}
    </div>
  );
}
