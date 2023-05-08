import React, { useRef } from "react";
import { useInView } from "framer-motion";


export default function TextContainer({ title, img, description, type, role , position}) {
  const ref = useRef(null);
  const isInView = useInView(ref);

 
  return (
    // entire container
    <div className={``} >
      {/*Project Title  */}
      <div className="">{title}</div>

      {/* Project Description */}
      <div className="">
        {description}
      </div>

      {/* Project Type */}
      <div className="">{type}</div>
    </div>
  );
}
