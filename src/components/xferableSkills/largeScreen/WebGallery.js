import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import Masonry from "react-responsive-masonry";
import Image from "next/image";
import WebPhotos from "./photosWebLargeScreen";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
const tabTitles = [
  <HomeIcon key="null" />,
  "Artist",
  "Nail Artist",
  "Features",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WebGallery() {
  const [pictures, setPictures] = useState(WebPhotos);
  function filterPictures(selectedCategory) {
    const updatedPictures = WebPhotos.filter((ele) => {
      return ele.category == selectedCategory;
    });
    setPictures(updatedPictures);
  }

  const showFeatured = () => {
    const featuredContent = WebPhotos.filter((ele) => {
      return ele.featured == true;
    });
    setPictures(featuredContent);
  };

  return (
    <div className=" mt-2 pt-6 ">
      <Tab.Group>
        {/* TAB TITLE */}
        <Tab.List
          className=" relative w-[85vw] mx-auto h-[3.75rem] grid grid-cols-4 items-center px-[6px] rounded-md  dark:bg-[#1c1c23] bg-[#080245] overflow-hidden pt-2 rounded-b-none pb-2 justify-between 
        
        
        "
        >
          <Tab
            className={({ selected }) =>
              classNames(
                " w-[85%] rounded-xl py-2.5 px-2 text-sm font-medium leading-5 text-white",
                "ring-white ring-opacity-90 focus:outline-none focus:ring-2",
                selected
                  ? "bg-[#6352ff] bg-opacity-90 shadow"
                  : "text-[#6352ff] hover:bg-white/[0.12] hover:text-white"
              )
            }
            onClick={() => setPictures(WebPhotos)}
          >
            {<HomeIcon />}
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-[85%] rounded-xl py-2.5 px-2 text-sm font-medium leading-5 text-white",
                "ring-white ring-opacity-90 focus:outline-none focus:ring-2",
                selected
                  ? "bg-[#6352ff] bg-opacity-90 shadow"
                  : "text-[#6352ff] hover:bg-white/[0.12] hover:text-white"
              )
            }
            onClick={() => filterPictures("art")}
          >
            Artist
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-[85%] rounded-xl py-2.5 px-2 text-sm font-medium leading-5 text-white",
                "ring-white ring-opacity-90 focus:outline-none focus:ring-2",
                selected
                  ? "bg-[#6352ff] bg-opacity-90 shadow"
                  : "text-[#6352ff] hover:bg-white/[0.12] hover:text-white"
              )
            }
            onClick={() => filterPictures("nails")}
          >
            Nail Artist
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-[85%] rounded-xl py-2.5 px-2 text-sm font-medium leading-5 text-white",
                "ring-white ring-opacity-90 focus:outline-none focus:ring-2",
                selected
                  ? "bg-[#6352ff] bg-opacity-90 shadow"
                  : "text-[#6352ff] hover:bg-white/[0.12] hover:text-white"
              )
            }
            onClick={() => showFeatured()}
          >
            Features
          </Tab>
        </Tab.List>

        {/* TAB CONTENT */}

        <Tab.Panels className="relative h-[82vh] md:h-[85vh] w-[85vw] mx-auto px-[6px] rounded-md rounded-t-none bg-[#5a5765] dark:bg-gray-700 overflow-scroll shadow-lg border-[#6352ff] border-4 border-t-0 pt-2 mb-5">
          <Tab.Panel className="flex">
            {" "}
            <Masonry>
              {pictures.map(({ imageSrc }, idx) => {
                return (
                  <div key={idx}>
                 <Fade>   <Image
                      src={imageSrc}
                      alt="test"
                      className="block cursor-pointer p-1 rounded-lg"
                    /></Fade>
                  </div>
                );
              })}
            </Masonry>
          </Tab.Panel>
          <Tab.Panel className="flex">
            {" "}
            <Masonry>
              {pictures.map(({ imageSrc }, idx) => {
                return (
                  <div key={idx}>
                    <Fade>   <Image
                      src={imageSrc}
                      alt="test"
                      className="block cursor-pointer p-1 rounded-lg"
                    /></Fade>
                  </div>
                );
              })}
            </Masonry>
          </Tab.Panel>
          <Tab.Panel className="flex">
            {" "}
            <Masonry>
              {pictures.map(({ imageSrc }, idx) => {
                return (
                  <div key={idx}>
                 <Fade>   <Image
                      src={imageSrc}
                      alt="test"
                      className="block cursor-pointer p-1 rounded-lg"
                    /></Fade>
                  </div>
                );
              })}
            </Masonry>
          </Tab.Panel>
          <Tab.Panel className="flex">
            {" "}
            <Masonry>
              {pictures.map(({ imageSrc, link }, idx) => {
                return (
                  <div key={idx}>
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                    <Fade>   <Image
                      src={imageSrc}
                      alt="test"
                      className="block cursor-pointer p-1 rounded-lg"
                    /></Fade>
                    </Link>
                  </div>
                );
              })}
            </Masonry>
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
