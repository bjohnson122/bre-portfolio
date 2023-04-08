import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Gallery from "./Gallery";
import Summary from "./Summary";

export default function TransferSkills() {
  return (
    <div className="h-full mb-1">
      {/* TITLE */}
      <div>
        <Slide duration={1000} triggerOnce={true}>
          <h1
            className="text-[#6352ff] font-zidan  
            text-center m-3 text-4xl
            md:text-4xl md:text-left md:ml-10
           "
          >
            Transferable Skills
          </h1>
        </Slide>
      </div>
      {/* SUMMARY TEXT */}
      <Summary />
      {/* Content */}
      <Gallery />
      <div></div>
    </div>
  );
}
