import React from "react";
import Project from "./Project";
import PNYCmobile from "/public/MobilePNYC.png";
import BookWormImage from "/public/ComputerBW.png";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import ComputerPNYC from "/public/ComputerPNYC.png";
import Image from "next/image";

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
  return (
    <div className="pt-12 h-fit text-center p-4">
      <Project/>
     {/* {shownProjects.map(({title, img, description, type, role}, idx) => {
      return (
        <div key={idx}>
        <Project title={title} description={description} type={type} role={role} />
</div>
      )
     })} */}
    </div>
  );
}
