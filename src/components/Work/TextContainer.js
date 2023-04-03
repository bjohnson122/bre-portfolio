import React, { useRef } from "react";

import { useInView } from "framer-motion";


export default function TextContainer({ title, img, description, type, role , position}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

 
  return (
    // entire container
    <div className={` top-1/3 left-0 flex flex-col flex-nowrap w-1/2 text-center`} >
      {/*Project Title  */}
      <div className="text-3xl sm:text-5xl lg:text-7xl">{title}</div>

      {/* Project Description */}
      <div className="pt-[2%] text-xl sm:text-2xl lg:text-3xl">
        {description}
      </div>

      {/* Project Type */}
      <div className="p-5 sm:text-lg lg:text-5xl">{type}</div>
    </div>
  );
}
