import React, { useState, useEffect, useRef } from "react";
import { Tab } from "@headlessui/react";
import HomeIcon from "@mui/icons-material/Home";
import { useInView } from "framer-motion";
import Masonry from "react-responsive-masonry";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WebGallery({ photos }) {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");
  const [pictures, setPictures] = useState(photos);

  function filterPictures(selectedCategory) {
    const updatedPictures = photos.filter((ele) => {
      return ele.category == selectedCategory;
    });
    selectedCategory === ""
      ? setPictures(photos)
      : setPictures(updatedPictures);
  }

  const showFeatured = () => {
    const featuredContent = photos.filter((ele) => {
      return ele.featured == true;
    });
    setPictures(featuredContent);
  };

  const getImgSrcForModal = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  const tabTitles = [
    { text: <HomeIcon />, filter: "" },
    { text: "Artist", filter: "art" },
    { text: "Nail Artist", filter: "nails" },
    { text: "Features", filter: showFeatured },
  ];
  return (
    <div className="mt-6 pt-6 wrapper">
      <Tab.Group>
  
    {/* TAB TITLES */}
        <Tab.List
          className=" relative w-[85vw] mx-auto h-[3.75rem] grid grid-cols-4 items-center px-[6px] rounded-md  dark:bg-[#1c1c23] bg-[#080245] overflow-hidden pt-2  rounded-b-none pb-2 justify-between 
        pl-8"
        >
          {tabTitles.map(({ text, filter }, idx) => {
            return (
              <Tab
                key={idx}
                className={({ selected }) =>
                  classNames(
                    "w-[85%] rounded-xl py-2.5 px-2 text-sm font-medium leading-5 text-white",
                    "ring-white ring-opacity-90 focus:outline-none focus:ring-2",
                    selected
                      ? "bg-[#6352ff] bg-opacity-90 shadow"
                      : "text-[#6352ff] hover:bg-white/[0.12] hover:text-white"
                  )
                }
                onClick={() =>
                  text == "Features" ? showFeatured() : filterPictures(filter)
                }
              >
                {text}
              </Tab>
            );
          })}
        </Tab.List>

    {/* TAB CONTENT */}

        <Tab.Panels
          className={`relative h-[82vh] md:h-[85vh] w-[85vw] mx-auto px-[6px] rounded-md rounded-t-none bg-[#5a5765] dark:bg-gray-700  shadow-lg border-[#6352ff] border-4 border-t-0 
       ${isInView ? "overflow-scroll" : "overflow-hidden"}`}
        >
          {tabTitles.map((title, idx) => {
            return (
              <Tab.Panel className="flex" key={idx}>
                <Masonry>
                  {pictures.map(({ imageSrc,link }, idx) => {
                    return (
                      <div key={idx}>
                        <Fade>
                          {link ? <Link href={link}   target="_blank"
          rel="noopener noreferrer"> <Image
                            src={imageSrc}
                            alt="test"
                            className="block cursor-pointer p-1 rounded-lg"
                          /></Link> : <Image
                          src={imageSrc}
                          alt="test"
                          className="block cursor-pointer p-1 rounded-lg"
                        />}
                         
                        </Fade>
                      </div>
                    );
                  })}
                </Masonry>
              </Tab.Panel>
            );
          })}
        </Tab.Panels>
      </Tab.Group>
      <div ref={ref} className="h-1 pb-5 overflow-hidden"></div>
    </div>
  );
}
