import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import MobilePNYC from "/public/MobilePNYC.png";
import ComputerPNYC from "/public/ComputerPNYC.png";
import TextContainer from "./TextContainer";
import Tilt from "react-parallax-tilt";

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
    <div className="flex ">
      {console.log(isInView, "image in view")}
      {/* Text on the Left Side of the Screen */}
      <TextContainer
        title={title}
        description={description}
        type={type}
        role={role}
      />
      {/* Parallax Images on the Right Side of the Screen */}

      <div className="top-[10vh] w-1/2 h-[120vh] flex-col bg-green-500">
        <ParallaxProvider>
          <Parallax speed={60} className="pt-40">
            <Tilt tiltReverse={true} perspective={900} transitionSpeed={1500}>
              <Image src={img} alt={title} ref={ref} />
            </Tilt>
          </Parallax>
        </ParallaxProvider>
      </div>
    </div>
  );
}
