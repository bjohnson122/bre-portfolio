import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useRouter } from "next/navigation";
import meHeroImage from "/public/MeHero.png";

import Image from "next/image";
import Spline from "@splinetool/react-spline";


export default function Hero() {
  const router = useRouter();
  const [isNavShowing, setIsNavShowing] = useState();

  return (
    <div className="h-screen pt-14 md:pt-2 text-center md:text-left" style={{
      background: "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(99,82,255,0.7) 73%, rgba(99,82,255,1) 100%)"
    }}>
      {/* Text Container */}
      <p className=" text-xl md:pl-24 md:mt-[15vh] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium  mt-8 z-50">
        Hi, my name is Breana and I am{" "}
      </p>{" "}
      {/* typewriter */}
      <div className="text-xl md:pl-24">
        <div className="font-raleway text-xl justify-center items-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium align-middle w-screen">
          <Typewriter
            options={{ loop: true }}
            onInit={(typewriter) => {
              typewriter
                .typeString("a developer.")
                .pauseFor(1200)
                .deleteChars(8)
                .typeString("signer.")
                .pauseFor(1200)
                .deleteAll()
                .typeString("an artist.")
                .pauseFor(1200)
                .deleteAll()
                .typeString("a wearer of many hats!")
                .pauseFor(1200)
                .deleteAll()
                .start();
            }}
          />
        </div>{" "}
      </div>
      <br />
      {/* HERO IMAGE */}
      <div className="w-auto  items-center md:ml-[45vw] px-5 md:-mt-[10vh]">
        <Image
          src={meHeroImage}
          width={600}
          alt="Custom Spline Design of Myself"
          className=""
        />
      </div>
      <br />
      {/* SCROLL BUTTON */}
      <div className="animate-pulse text-[0.7rem] md:text-[0.75rem] text-center absolute top-[90vh] translate-y-full w-screen ">
       
        <span className="scroll-smooth cursor-pointer" onClick={() => router.push("/#about")}> Learn More
        <br />
          <KeyboardDoubleArrowDownIcon />
        </span>
      </div>
    </div>
  );
}
