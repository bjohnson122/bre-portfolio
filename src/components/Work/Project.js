import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import MobilePNYC from "/public/MobilePNYC.png";
import ComputerPNYC from "/public/ComputerPNYC.png";

const rm = { top: 50, right: 20, bottom: 10, left: 50 }

export default function Project({ title, img, description, type, role }) {
  return (
    <ParallaxProvider>
    <Parallax speed={10}  translateY={[-80, 40]} rootMargin={rm}>
      <div>
        <Image src={MobilePNYC} alt="PNYC MOBILE" className="scale-50"/>
      </div>
    </Parallax>  
    <Parallax speed={2}  translateY={[-80, 40]} rootMargin={rm}>
      <div>
        <Image src={ComputerPNYC} alt="PNYC MOBILE" className="scale-50"/>
      </div>
    </Parallax>  
    </ParallaxProvider>

  
  
  );
  { 
    /* <h2>{title}</h2>
      <Image src={img} alt={title} />
      <span>{description}</span>
      <span>{type}</span>
      <span>{role}</span> 
     </div> */
  }
}
