import React, { useRef } from "react";
import { useInView } from "framer-motion";


export default function TextContainer({ title, img, description, type, role , position, demoLink}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

 
  return (
    // entire container
    <div className={`bg-pink-50 w-1/2`} >
      {/*Project Title  */}
      <div className="bg-blue-200 text-3xl sm:text-5xl mt-[50vh] lg:text-7xl">{title}</div>

      {/* Project Description */}
      <div className="bg-yellow-200">
        {description}
      </div>

      {/* Project Type */}
      <div className="bg-purple-300">{type}</div>
      {/* Demo Link */}
      <div className="bg-orange-300 underline"><a href={demoLink}> Live Demo</a></div>
    </div>
  );
}
