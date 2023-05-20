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
    <div className="h-screen pt-14 md:pt-2 text-center sm:text-left">
      {/* Text Container */}
      <p className="mt-12 text-xl md:text-4xl font-semibold sm:pl-8 ">
        Hi, my name is Breana and I am{" "}
      </p>{" "}
      <div className="text-xl sm:pl-8">
        {/* typewriter */}
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
        </div> </div>
        <br />

        <div className="w-full h-auto px-6 mt-6 sm:mt-0 md:scale-75">
          <Image
            src={meHeroImage}
            alt="Custom Spline Design of Myself"
            className=""
          />
       
      </div>
      <br />
      <div className="animate-pulse text-[0.6rem] mt-14 md:text-[0.75rem] sticky w-full md:bottom-15 text-center align-bottom lg:bottom-[5rem]">
        Scroll Down
        <br />
        <span className="scroll-smooth" onClick={() => router.push("/#about")}>
          <KeyboardDoubleArrowDownIcon />
        </span>
      </div>
    </div>
  );
}
