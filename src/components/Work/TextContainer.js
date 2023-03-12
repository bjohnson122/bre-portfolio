import React from "react";
//title, img, description, type, role
export default function TextContainer({ title, img, description, type, role }) {
  return (
    // entire container
    <div className="relative top-0 left-0 flex flex-col flex-nowrap w-1/2 text-center">
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
