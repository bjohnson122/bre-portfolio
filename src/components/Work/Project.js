import React from "react";
import ParallaxProjectImages from "./ParallaxProjectImages";
import TextContainer from "./TextContainer";

export default function Project({ title, img, description, type, role }) {


  return (
    <div className="flex w-screen">
      {/* Text on the Left Side of the Screen */}
      <TextContainer
        title={title}
        description={description}
        type={type}
        role={role}
      />

      {/* Parallax Images on the Right Side of the Screen */}
      <ParallaxProjectImages img={img} title={title} />
    </div>
  );
}
