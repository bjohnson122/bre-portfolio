import React from "react";
import Project from "./Project";
import PNYCmobile from "/public/MobilePNYC.png";
import BookWormImage from "/public/ComputerBW.png";

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
    <div className="pt-12 bg-yellow-100 h-[300vh] flex">
      {/* SAMPLE TEXT */}
      {/* <div className=" bg-green-400 text-7xl font-extrabold text-center w-1/2 h-[100vh] justify-center flex">
        <h2 className="align-middle mt-52">About</h2>
      </div>
      
      
      
      
      <div className=" bg-blue-400 w-1/2">
        <div className="h-screen"><h2 className="font-bold">PROJECTS 1</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose.
        </p>
      </div>
        
        <h2 className="font-bold">PROJECTS 2</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose.
        </p>
     
        <h2 className="font-bold">PROJECTS 3</h2>
        <p>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that it has a more-or-less normal distribution of
          letters, as opposed to using Content here, content here, making it
          look like readable English. Many desktop publishing packages and web
          page editors now use Lorem Ipsum as their default model text, and a
          search for lorem ipsum will uncover many web sites still in their
          infancy. Various versions have evolved over the years, sometimes by
          accident, sometimes on purpose.
        </p>
      </div> */}
    </div>
  );
}
