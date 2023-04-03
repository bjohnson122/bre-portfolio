import React, { Fragment } from "react";
import { Tab } from "@headlessui/react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import HomeIcon from "@mui/icons-material/Home";
import Images from "./Images";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Gallery() {
  return (
    <div className="bg-purple-200 h-[120vh] w-screen pt-12">
      <Tab.Group>
        {/* TAB TITLE */}
        <Tab.List className="relative w-[90vw] mx-auto h-12 grid grid-cols-4 items-center px-[6px] rounded-md  bg-gray-800 overflow-hidden shadow-2xl shadow-900/20 transition">
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
          >
            Featured
          </Tab>
        </Tab.List>
        {/* TAB CONTENT */}
        <Tab.Panels className='relative w-[90vw] mx-auto h-screen grid grid-cols-4 items-center px-[6px] rounded-md  bg-gray-600 overflow-scroll shadow-2xl shadow-900/20 transition'>
          <Tab.Panel className='grid grid-cols-3'><Images /></Tab.Panel>
          <Tab.Panel>2. ART</Tab.Panel>
          <Tab.Panel>3. NAILS</Tab.Panel>
          <Tab.Panel>4. Featured Posts</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
