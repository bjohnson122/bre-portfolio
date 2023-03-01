import React from "react";
//title, img, description, type, role
export default function TextContainer() {
  return (
    // entire container
    <div className="relative top-0 left-0 flex flex-col flex-nowrap h-[100vh] w-1/2 text-center">
      {/*Project Title  */}
      <div className="text-3xl sm:text-5xl lg:text-7xl">TEST TITLE</div>

      {/* Project Description */}
      <div className="pt-[2%] text-2xl sm:text-4xl lg:text-5xl">
        TEST Description
      </div>

      {/* Project Type */}
      <div className="p-5 text-2xl sm:text-3xl lg:text-5xl">TEST Type</div>
    </div>
  );
}
