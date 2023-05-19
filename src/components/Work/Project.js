import React from "react";
import ParallaxProjectImages from "./ParallaxProjectImages";
import Image from "next/image";
import TextContainer from "./TextContainer";
import LaunchOutlinedIcon from "@mui/icons-material/LaunchOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
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
    <div className="h-screen w-screen ">
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
      <Image src={img} alt="alt" className="px-[20%]" />
      {/* <ParallaxProjectImages img={img} title={title} className='relative' /> */}
      {/* Parallax Images on the Right Side of the Screen*/}
    </div>
  );
}
