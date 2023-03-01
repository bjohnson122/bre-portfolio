import React, { useEffect, useState } from "react";
import Image from "next/image";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import MobilePNYC from "/public/MobilePNYC.png";
import ComputerPNYC from "/public/ComputerPNYC.png";
import TextContainer from "./TextContainer";

const rm = { top: 100, right: 20, bottom: 0, left: 80 }

export default function Project({ title, img, description, type, role }) {
  const [progress, setProgress]= useState(null)
  const [entered, setEntered]= useState(null)



  {/* <Image src={img} alt={title} /> */}

  
  return (
    <div>
      <TextContainer />
     {/* <h2>{title}</h2>
      <p>{description}</p>
      <p>{type}</p>
      <span>{role}</span>  */}
    </div> 
  ) 
}
