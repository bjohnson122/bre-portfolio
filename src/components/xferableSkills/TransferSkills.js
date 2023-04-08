import React, { useState, useEffect, useRef } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import WebGallery from "./largeScreen/WebGallery";
import MobileGallery from "./mobile/MobileGallery";
import Summary from "./Summary";

export default function TransferSkills() {
  const [mobile, setMobile] = useState(undefined);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 575 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

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
      <Summary mobile={mobile}/>
      {/* GALLERY CONTENT */}
      {mobile ? <MobileGallery /> : <WebGallery />}
      <div></div>
    </div>
  );
}
