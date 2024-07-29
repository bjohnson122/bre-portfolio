import React, { useState } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import HomeIcon from "@mui/icons-material/Home";
// import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Image from "next/image";

import Link from "next/link";

const tabTitles = [
  <HomeIcon key="null" />,
  "Artist",
  "Nail Artist",
  "Features",
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function MobileGallery({ photos }) {
  const [pictures, setPictures] = useState(photos);
  function filterPictures(selectedCategory) {
    const updatedPictures = photos.filter((ele) => {
      return ele.category == selectedCategory;
    });
    setPictures(updatedPictures);
  }

  const showFeatured = () => {
    const featuredContent = photos.filter((ele) => {
      return ele.featured == true;
    });
    setPictures(featuredContent);
  };

  return (
    <div className=" h-[full] w-screen pt-12 overflow-hidden">
      <TabGroup>
        {/* TAB TITLE */}
        <TabList
          className="relative w-[85vw] mx-auto h-[3.75rem] grid grid-cols-4 items-center px-[6px] rounded-md  dark:bg-[#1c1c23] bg-[#080245] overflow-hidden xs:pt-2 rounded-b-none pb-2 justify-between
        "
        >
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
            onClick={() => setPictures(photos)}
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
        </TabList>

        {/* TAB CONTENT */}

        <TabPanels className="relative w-[85vw] mx-auto h-[80vh] px-[6px] rounded-md rounded-t-none bg-[#5a5765] dark:bg-gray-700 overflow-scroll border-[#6352ff] border-4 border-t-0 pt-2">
          <TabPanel className="flex">
            {" "}
            {/* <ResponsiveMasonry>
              <Masonry columnsCount={2}> */}
                {pictures.map(({ imageSrc }, idx) => {
                  return (
                    <div key={idx}>
                      <Image
                        src={imageSrc}
                        alt="test"
                        className="block cursor-pointer p-1 rounded-lg"
                      />
                    </div>
                  );
                })}
              {/* </Masonry>{" "}
            </ResponsiveMasonry> */}
          </TabPanel>
          <TabPanel className="flex">
            {/* <ResponsiveMasonry>
              <Masonry columnsCount={2}> */}
                {pictures.map(({ imageSrc }, idx) => {
                  return (
                    <div key={idx}>
                      <Image
                        src={imageSrc}
                        alt="test"
                        className="block cursor-pointer p-1 rounded-lg"
                      />
                    </div>
                  );
                })}
              {/* </Masonry>
            </ResponsiveMasonry> */}
          </TabPanel>
          <TabPanel className="flex">
            {/* <ResponsiveMasonry>
              <Masonry columnsCount={2}> */}
                {pictures.map(({ imageSrc }, idx) => {
                  return (
                    <div key={idx}>
                      <Image
                        src={imageSrc}
                        alt="test"
                        className="block cursor-pointer p-1 rounded-lg"
                      />
                    </div>
                  );
                })}
              {/* </Masonry>
            </ResponsiveMasonry> */}
          </TabPanel>
          <TabPanel className="flex">
            {/* <ResponsiveMasonry>
              <Masonry columnsCount={2}> */}
                {pictures.map(({ imageSrc, link }, idx) => {
                  return (
                    <div key={idx}>
                      <Link
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={imageSrc}
                          alt="test"
                          className="block cursor-pointer p-1 rounded-lg"
                        />
                      </Link>
                    </div>
                  );
                })}
              {/* </Masonry>
            </ResponsiveMasonry> */}
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>
  );
}
