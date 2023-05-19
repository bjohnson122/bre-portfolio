import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useRouter } from "next/navigation";
// import pic from "/public/Mini Room - Bre@2-725x473.png";
import Image from "next/image";
// import Spline from "@splinetool/react-spline";

// const Spline = React.lazy(() => import('@splinetool/react-spline'));
// dark:bg-[#63637a]

export default function Hero() {
  const router = useRouter();
  const [isNavShowing, setIsNavShowing] = useState();

  return (
    <div className=" relative h-screen pt-14 md:pt-3">
      {/* <Spline scene="https://prod.spline.design/tag35kXcZemH8sh2/scene.splinecode" className="h-screen -mt-28"/> */}
      <p className="mt-0 text-xl pl-8 text-left">Hi, my name is Breana and I am </p>{" "}
      <div className="text-xl  pl-8  flex">
        {/* typewriter */}
        <div className="font-raleway text-left text-xl justify-center items-center align-middle w-screen">
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
        </div>
      </div>
      <div className="animate-pulse text-[0.6rem] w-full cursor-default scroll-smooth absolute md:bottom-15 right-0 text-center bottom-[5rem]">
        Scroll Down
        <br />
        <span className="scroll-smooth" onClick={() => router.push("/#about")}>
          <KeyboardDoubleArrowDownIcon />
        </span>
      </div>
    </div>
  );
}
