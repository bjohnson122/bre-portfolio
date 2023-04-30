import React, { useState, useRef } from "react";
import { Tab } from "@headlessui/react";
import HomeIcon from "@mui/icons-material/Home";
import { useInView } from "framer-motion";
import Masonry from "react-responsive-masonry";
import Image from "next/image";
import "yet-another-react-lightbox/plugins/captions.css";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WebGallery({ photos }) {
  const [pictures, setPictures] = useState(photos);
  const captionsRef = useRef(null);  
  const [showToggle, setShowToggle] = React.useState(false);
  const [descriptionMaxLines, setDescriptionMaxLines] = React.useState(3);
  const [descriptionTextAlign, setDescriptionTextAlign] = React.useState(
    "start"
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [index, setIndex] = React.useState(-1);
  const ref = useRef(null);
  const isInView = useInView(ref);

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

  const openLightBox = (index) => {
    setIndex(index);
    setModalOpen(true);
  };
  const closeLightBox = () => {
    setIndex(-1);
    setModalOpen(false);
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
          className={`relative h-[76vh] md:h-[80vh] w-[85vw] mx-auto px-[6px] rounded-md rounded-t-none bg-[#5a5765] dark:bg-gray-700  shadow-lg border-[#6352ff] border-4 border-t-0 
       ${isInView ? "overflow-scroll" : "overflow-hidden"}`}
        >
          {tabTitles.map((title, idx) => {
            return (
              <Tab.Panel className="flex" key={idx}>
                <>
                  <Lightbox
                    open={index >= 0}
                    index={index}
                    close={closeLightBox}
                    slides={pictures.map(({imageSrc}) =>  (imageSrc))}
                    plugins={[Captions]} 
                  />
                </>
                {/* 
                //   open={index >= 0}
                    index={index}
                    close={closeLightBox}
                    slides={pictures.map((pic) => {
                      return pic.imageSrc;
                    })}
                    plugins={[Captions]}
                    captions={{ ref: captionsRef }}
                    on={{
                      click: () => {
                        (captionsRef.current?.show);
                      },
                    }} */}
                <Masonry>
                  {pictures.map(({ imageSrc, link }, idx) => {
                    return (
                      <div key={idx}>
                        <Fade>
                          <Image
                            src={imageSrc}
                            alt="test"
                            className="block cursor-pointer p-1 rounded-lg hover:opacity-95 hover:transition-opacity"
                            onClick={() => openLightBox(idx)}
                          />
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
      <div ref={ref} className="h-1 overflow-hidden"></div>
    </div>
  );
}
