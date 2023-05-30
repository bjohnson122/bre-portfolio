import React from "react";
import Project from "./Project";
import BookWormImage from "/public/ComputerBW.png";
import pnycImages from "/public/res.png";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

const shownProjects = [
  {
    title: "PocketNYC",
    img: pnycImages,
    description:
      'PocketNYC is a progressive web application that is a hub for free events and resources in NYC. This user-friendly project features a map, calendar, and a "favorites" section. The resources are even populated with real data courtesy of the NYC Open Data API.',
    type: "Progressive Web App",
    role: "Full-Stack Developer and Graphic Designer",
    demoLink: "https://pocketnyc.onrender.com/",
    githubLink: "https://github.com/pocketNYC/pocketNYC",
  },
  {
    title: "Book Worm",
    img: BookWormImage,
    description:
      "Book Worm is an e-commerce site that sells books. This website has user authentication, a persistent cart, and guest features. All of the books products displayed are from the New York Times and Google Books API.",
    type: "eCommerce Webpage",
    role: "Full-Stack Developer",
    demoLink: "https://book-worm.onrender.com/",
    githubLink: "https://github.com/GraceShopper-Team-1/Grace-Shopper",
  },
];

export default function PortfolioProjects() {

  return (
    <div className="text-center p-2 mt-0">
      <div
        className="font-zidan text-left xs:ml-3  text-4xl
      sm:text-right sm:m-3 sm:ml-12 sm:text-5xl
      md:text-6xl
      lg:ml-16 
      
      "
      >
        <Slide duration={1000} triggerOnce={true} direction={"right"}>
          <p className="text-[#6352ff] sm:mt-14 tracking-wide pr-6">
            {"<Projects />"}
          </p>
        </Slide>
      </div>
      {/* <Project/> */}
      {shownProjects.map(
        (
          { title, img, description, type, role, demoLink, githubLink },
          idx
        ) => {
          return (
            <div key={idx} className={`relative`}>
              <Fade duration={1000} delay={800} triggerOnce={true}>
                <Project
                  title={title}
                  description={description}
                  type={type}
                  role={role}
                  img={img}
                  demoLink={demoLink}
                  githubLink={githubLink}
                />
              </Fade>
            </div>
          );
        }
      )}
    </div>
  );
}
