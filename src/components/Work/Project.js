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
      <div className="space-x-8 text-gray-100  font-semibold">
        {/* LIVE DEMO BUTTON */}{" "}
        <button className="bg-[#6352ff] p-1 rounded-2xl px-3 shadow-xl  shadow-[#000000]/40">
          <a href={demoLink}>
            Live Demo <LaunchOutlinedIcon className="text-sm" />
          </a>
        </button>
        {/* GitHub */}
        <button className="bg-[#6352ff] p-1 rounded-2xl px-3 shadow-xl  shadow-[#000000]/40 mb-6">
          <a href={githubLink}>
            <GitHubIcon /> GitHub
          </a>
        </button>
      </div>
      <br />
      <div className="">
        <span className="font-semibold ">Role: </span> {role}
      </div>
    
      {/* Image */}
      <Image src={img} alt="alt" className="px-[20%]" />
      {/* <ParallaxProjectImages img={img} title={title} className='relative' /> */}
      {/* Parallax Images on the Right Side of the Screen*/}
    </div>
  );
}
