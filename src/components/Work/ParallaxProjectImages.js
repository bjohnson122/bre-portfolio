import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { useInView } from "framer-motion";



function ParallaxProjectImages({img, title}) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="top-[10vh] w-1/2 h-[120vh] flex-col bg-green-500">
      {console.log(isInView, "image in view")}
        <ParallaxProvider>
          <Parallax speed={60} className="pt-40">
            <Tilt tiltReverse={true} perspective={900} transitionSpeed={1500}>
              <Image src={img} alt={title} ref={ref} />
            </Tilt>
          </Parallax>
        </ParallaxProvider>
      </div>
  )
}

export default ParallaxProjectImages