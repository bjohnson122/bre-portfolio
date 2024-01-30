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
  projectInfoLink,
  githubLink,
}) {
  return (
    <div className="h-fit w-screen pb-12">
      <TextContainer
        title={title}
        description={description}
        type={type}
        role={role}
        projectInfoLink={projectInfoLink}
        githubLink={githubLink}
      />
      <Tilt
        tiltReverse={true}
        perspective={4000}
        transitionSpeed={3500}
        scale={1.025}
      >
        <Image
          src={img}
          alt="alt"
          className={`px-12 md:px-[10%] w-screen ${
            title === "Book Worm" && "md:px-[22%]"
          } ${title === "Netflix Clone" && "md:px-[22%]"}`}
        />
      </Tilt>
    
        <hr className={`mt-16 mx-16 ${title === "Book Worm" ? "hidden" : "visible"}`} />
    
    </div>
  );
}
