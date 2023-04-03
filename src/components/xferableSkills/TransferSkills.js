import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Gallery from "./Gallery";
import Summary from "./Summary";

export default function TransferSkills() {
  return (
    <div className="h-full">
      {/* TITLE */}
      <div>
        <Slide duration={1000} triggerOnce={true}>
          <h1
            className="text-[#6352ff] font-zidan  text-3xl
            sm:text-left sm:m-3 sm:ml-4 sm:text-4xl
            md:text-4xl md:text-center
            lg:ml-5"
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
