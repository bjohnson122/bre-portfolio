import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Tilt from "react-parallax-tilt";
import { useInView } from "framer-motion";
import styled from 'styled-components';


const ImageContainer = styled.div`
/* border: 0.1px dashed black; */
margin-left:50%;
width:50%;
height:900vh;
display: flex;
flex-flow: column nowrap;
`;

const ImageBox = styled.div`
/* outline: 0.1px dashed green; */
margin-top:40vh;
height: 100vh;
position: relative;
`;

function ParallaxProjectImages({ img, title }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div className="w-1/2 bg-green-500">
      {/* <ImageContainer> */}
      {console.log(isInView, "image in view")}
      <Tilt tiltReverse={true} perspective={4000} transitionSpeed={3500} scale={1.025}>
        <ParallaxProvider>
          <Parallax speed={60} className="pt-40 ">
            <Image src={img} alt={title} ref={ref} className="scale-100"/>
          </Parallax>
        </ParallaxProvider>
      </Tilt>
    {/* </ImageContainer> */}
    </div>
  );
}

export default ParallaxProjectImages;
