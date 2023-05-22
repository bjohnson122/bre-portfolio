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
    <div className="h-screen pt-14 md:pt-2 text-center sm:text-left bg-pink-600">
      {/* Text Container */}
      <p className=" text-xl md:text-4xl font-semibold sm:pl-8 mt-8">
        Hi, my name is Breana and I am{" "}
      </p>{" "}
      {/* typewriter */}
      <div className="text-xl sm:pl-8">
        <div className="font-raleway text-xl justify-center items-center md:text-4xl font-semibold align-middle w-screen">
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
      <div className="w-auto absolute px-6 top-[30vh]">
        <Image
          src={meHeroImage}
        
          alt="Custom Spline Design of Myself"
          className="bg-yellow-500  bg-opacity-30 sm:max-w-[55vw]"
        />
      </div>
      <br />
      {/* SCROLL BUTTON */}
      <div className="animate-pulse text-[0.6rem] md:text-[0.75rem] text-center absolute top-[90vh] translate-y-full w-screen ">
       
        <span className="scroll-smooth cursor-pointer" onClick={() => router.push("/#about")}> Scroll Down
        <br />
          <KeyboardDoubleArrowDownIcon />
        </span>
      </div>
    </div>
  );
}
