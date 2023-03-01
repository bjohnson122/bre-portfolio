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
    <div className="pt-12 bg-yellow-50 h-[100vh] flex">
     <p className="text-5xl"> projects here</p>
 
    </div>
  );
}
