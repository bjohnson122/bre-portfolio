import React, { useRef } from "react";
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
    // img: [PNYCmobile, ComputerPNYC],
    description: "An awesome app that hosts free events and resources in NYC.",
    type: "Progressive Web App",
    role: "Fullstack Developer and Graphic Designer",
    demoLink: 'https://pocketnyc.onrender.com/'
  },
  {
    title: "Book Worm",
    img: BookWormImage,
    // img: [BookWormImage],
    description: "A lovely book-selling site.",
    type: "eCommerce Webpage",
    role: "Fullstack Developer",
    demoLink: 'https://book-worm.onrender.com/'
  },
];

export default function PortfolioProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="pt-12 text-center p-2">
      {/* <Project/> */}
      {shownProjects.map(({ title, img, description, type, role, demoLink }, idx) => {
        return (
          <div key={idx} className={`${isInView ? "fixed" : "relative"}`}>
            <Project
              title={title}
              description={description}
              type={type}
              role={role}
              img={img}
              demoLink={demoLink}
            />
          </div>
        );
      })}
    </div>
  );
}
