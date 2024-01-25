import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import React from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { useInView } from "framer-motion";

function ParallaxProjectImages({ img, title }) {

  return (
    <div className="w-1/2">
      <Tilt
        tiltReverse={true}
        perspective={4000}
        transitionSpeed={3500}
        scale={1.025}
      >
        <ParallaxProvider>
          <Parallax speed={60} className="pt-40 ">
            <Image src={img} alt={title} ref={ref} className="scale-100" />
          </Parallax>
        </ParallaxProvider>
      </Tilt>
    </div>
  );
}

export default ParallaxProjectImages;
