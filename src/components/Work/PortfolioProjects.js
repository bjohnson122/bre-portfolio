import React, {useRef} from "react";
import Project from "./Project";
import PNYCmobile from "/public/MobilePNYC.png";
import BookWormImage from "/public/ComputerBW.png";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import ComputerPNYC from "/public/ComputerPNYC.png";
import Image from "next/image";
import { useInView } from "framer-motion";


const shownProjects = [
  {
    title: "PocketNYC",
    img: PNYCmobile, 
    description: "An awesome app that hosts free events and resources in NYC.",
    type: "Progressive Web App",
    role: "Fullstack Developer and Graphic Designer",
  },
  {
    title: "Book Worm",
    img: BookWormImage,
    description: "A lovely book-selling site.",
    type: "eCommerce Webpage",
    role: "Fullstack Developer",
  },
];

export default function PortfolioProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="pt-12 h-fit text-center p-4">
      {/* <Project/> */}
     {shownProjects.map(({title, img, description, type, role}, idx) => {
      return (
        <div key={idx} className={`${isInView ? 'fixed': 'relative'}`}>
        <Project title={title} description={description} type={type} role={role} img={img}/>
</div>
      )
     })}
    </div>
  );
}
