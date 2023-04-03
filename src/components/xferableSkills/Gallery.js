import React, { useState } from "react";
import { Tab } from "@headlessui/react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
// import Images from "./Images";
import Masonry from "react-responsive-masonry";
import Image from "next/image";
import Photos from "./photos";
import Link from "next/link";

const tabTitles = [<HomeIcon />, "Artist", "Nail Artist", "Featured"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Gallery() {
  const [pictures, setPictures] = useState(Photos);
  function filterPictures(selectedCategory) {
    const updatedPictures = Photos.filter((ele) => {
      return ele.category == selectedCategory;
    });
    setPictures(updatedPictures);
  }

  const showFeatured = () => {
    const featuredContent = Photos.filter((ele) => {
      return ele.featured == true;
    });
    setPictures(featuredContent);
  };

  return (
    <div className=" h-[120vh] w-screen pt-12">
      <Tab.Group>
        {/* TAB TITLE */}
        <Tab.List className="relative w-[85vw] mx-auto h-[3.75rem] grid grid-cols-4 items-center px-[6px] rounded-md  bg-gray-900 overflow-hidden rounded-b-none">
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-xl py-2.5 px-2 text-sm font-medium leading-5 text-white",
                "ring-white ring-opacity-90 focus:outline-none focus:ring-2",
                selected
                  ? "bg-[#6352ff] bg-opacity-90 shadow"
                  : "text-[#6352ff] hover:bg-white/[0.12] hover:text-white"
              )
            }
            onClick={() => setPictures(Photos)}
          >
            {<HomeIcon />}
          </Tab>
          <Tab
            className={({ selected }) =>
              classNames(
                "w-full rounded-xl py-2.5 px-2 text-sm font-medium leading-5 text-white",
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
                "w-full rounded-xl py-2.5 px-2 text-sm font-medium leading-5 text-white",
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
                "w-full rounded-xl py-2.5 px-2 text-sm font-medium leading-5 text-white",
                "ring-white ring-opacity-90 focus:outline-none focus:ring-2",
                selected
                  ? "bg-[#6352ff] bg-opacity-90 shadow"
                  : "text-[#6352ff] hover:bg-white/[0.12] hover:text-white"
              )
            }
            onClick={() => showFeatured()}
          >
            Featured
          </Tab>
        </Tab.List>

        {/* TAB CONTENT */}

        <Tab.Panels className="relative w-[85vw] mx-auto h-screen px-[6px] rounded-md rounded-t-none bg-gray-600 overflow-scroll shadow-900/20 border-[#6352ff] border-2 border-t-0 pt-2">
          <Tab.Panel className="flex">
            {" "}
            <Masonry>
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
            </Masonry>
          </Tab.Panel>
          <Tab.Panel className="flex">
            {" "}
            <Masonry>
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
            </Masonry>
          </Tab.Panel>
          <Tab.Panel className="flex">
            {" "}
            <Masonry>
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
            </Masonry>
          </Tab.Panel>
          <Tab.Panel className="flex">
            {" "}
            <Masonry>
              {pictures.map(({ imageSrc, link }, idx) => {
                return (
                  <div key={idx}>
                    <Link href={link} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={imageSrc}
                        alt="test"
                        className="block cursor-pointer p-1 rounded-lg"
                      />
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
