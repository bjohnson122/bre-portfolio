import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import MobilePNYC from "/public/MobilePNYC.png";
import ComputerPNYC from "/public/ComputerPNYC.png";
import TextContainer from "./TextContainer";


import { useInView } from "framer-motion";


const rm = { top: 100, right: 20, bottom: 0, left: 80 };

export default function Project({ title, img, description, type, role }) {
  const [progress, setProgress] = useState(null);
  const [entered, setEntered] = useState(null);

  const ref = useRef(null);
  const isInView = useInView(ref);

  {
    /* <Image src={img} alt={title} /> */
  }

  return (
    <div>
      {console.log(isInView, "image in view")}
      <div  className={`${isInView ? 'fixed' : 'relative'}`}></div>
      <TextContainer
        title={title} 
        description={description}
        type={type}
        role={role}
       
       
      />
   
      <div className="w-1/2 top-0 ml-[50%] flex">
        <ParallaxProvider>
          <Parallax speed={34}>
            <Image src={img} alt={title} ref={ref} />
          </Parallax>
        </ParallaxProvider>
      </div>
    </div>
  );
}
