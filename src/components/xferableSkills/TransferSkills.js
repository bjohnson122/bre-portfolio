import React, { useState, useEffect, useRef, useCallback } from "react";
import { Slide, Fade } from "react-awesome-reveal";
import WebGallery from "./largeScreen/WebGallery";
import MobileGallery from "./mobile/MobileGallery";
import Summary from "./Summary";
import photos from "./photos";
import Image from "next/image";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';


export default function TransferSkills() {
  const [mobile, setMobile] = useState(undefined);
  const [scrollY, setScrollY] = useState(0);
  const [modal, setModal] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImgSrcForModal = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModal(true);
  };

  const ontheScroll = useCallback((event) => {
    const { pageYOffset, scrollY } = window;
    console.log("yOffset", pageYOffset, "scrollY", scrollY);
  }, []);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 575 ? true : false);
    };
    updateMobile();
    window.addEventListener("resize", updateMobile);

    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return (
    <div className="h-full mb-1 snap-mandatory snap-x">
      {/* TITLE */}
      <Slide duration={1000} triggerOnce={true}>
        <h1
          className="text-[#6352ff] font-zidan text-center m-3 text-4xl
            md:text-4xl md:text-left md:ml-10 tracking-wide"
        >
          Transferable Skills
        </h1>
      </Slide>

      {/* SUMMARY TEXT */}
      <Summary mobile={mobile} />

      {/* GALLERY CONTENT */}
      <div className="">
        {mobile ? (
          <MobileGallery photos={photos} />
        ) : (
          <WebGallery photos={photos} />
        )}
      </div>
     
    </div>
  );
}
