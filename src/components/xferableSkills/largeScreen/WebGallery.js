import React, { useState, useRef } from "react";
import { Tab, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import HomeIcon from "@mui/icons-material/Home";
import { useInView } from "framer-motion";
// import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Captions from "yet-another-react-lightbox/plugins/captions";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function WebGallery({ photos }) {
  const [pictures, setPictures] = useState(photos);
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
    // { text: "Features", filter: showFeatured },
  ];
  return (
    <div className="mt-6 pt-6 wrapper">
      <TabGroup>
        {/* TAB TITLES */}
        <TabList
          className=" relative w-[85vw] mx-auto h-[3.75rem] grid grid-cols-3 items-center px-[6px] rounded-md  dark:bg-[#1c1c23] bg-[#080245] overflow-hidden pt-2  rounded-b-none pb-2 justify-between 
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
                onClick={() => filterPictures(filter)}
              >
                {text}
              </Tab>
            );
          })}
        </TabList>

        {/* TAB CONTENT */}
        <TabPanels
          className={`relative h-[76vh] md:h-[80vh] w-[85vw] mx-auto px-[6px] rounded-md rounded-t-none bg-[#5a5765] dark:bg-gray-700  shadow-lg border-[#6352ff] border-4 border-t-0 
       ${isInView ? "overflow-scroll" : "overflow-hidden"}`}
        >
          {tabTitles.map((title, idx) => {
            return (
              <TabPanel className="flex" key={idx}>
                <>
                  <Lightbox
                    open={index >= 0}
                    index={index}
                    close={closeLightBox}
                    slides={pictures.map(({ imageSrc }) => imageSrc)}
                    plugins={[Captions]}
                  />
                </>

                {/* <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
            >
                <Masonry> */}
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
                  {/* </Masonry>
                </ResponsiveMasonry> */}
              </TabPanel>
            );
          })}
        </TabPanels>
      </TabGroup>
      <div ref={ref} className="h-1 overflow-hidden"></div>
    </div>
  );
}
