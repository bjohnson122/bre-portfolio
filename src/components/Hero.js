import React, { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { useRouter } from "next/navigation";
import meHeroImage from "/public/MeHero.png";
import Link from "next/link";
import Image from "next/image";
import Spline from "@splinetool/react-spline";

export default function Hero() {
  const router = useRouter();
  const [isNavShowing, setIsNavShowing] = useState();
  const [mobile, setMobile] = useState(undefined);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 870 ? true : false);
    };
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return (
    <div
      className="h-screen pt-14 md:pt-2 text-center md:text-left"
      style={{
        background:
          "linear-gradient(0deg, rgba(99,82,255, 0.03) 0%, rgba(99,82,255,0.7) 73%, rgba(99,82,255,1) 100%)",
      }}
    >
      {/* Text Container */}
      <p className=" text-xl text-white md:pl-20 md:mt-[20vh] sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium  mt-8 z-50">
        Hi, my name is Breana and I am{" "}
      </p>{" "}
      {/* typewriter */}
      <div className="text-xl md:pl-20">
        <div className="font-raleway text-xl text-white  justify-center items-center sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-medium align-middle w-screen">
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
        {!mobile && (
          <div
            className="w-[40vw] mt-[7%] font-medium text- tracking-wide md:text-sm lg:text-xl 
        "
          >
            Need a reliable software engineer to enhance your digital presence?{" "}
            <Link href="/#contact">Get in touch</Link> to explore how my
            experience in building scalable applications can bring your ideas to
            life.
            <br></br>
            <button className="rounded-full bg-[#6352ff] p-1 px-8 text-white text-base lg:text-lg ml-[14vw] md:mt-16">
              {"Let's"} Chat!
            </button>
          </div>
        )}
      </div>
      <br />
      {/* HERO IMAGE */}
      <div className="w-auto ml-0 items-center md:ml-[45vw] sm:ml-[10%] sm:mt-2 absolute px-5 md:-mt-[32%]">
        <Image
          src={meHeroImage}
          width={610}
          alt="Custom Spline Design of Myself"
          className=""
        />
      </div>
      <br />
      {/* SCROLL BUTTON */}
      <div className="animate-pulse text-[0.7rem] md:text-[0.75rem] text-center absolute top-[90vh] translate-y-full w-screen ">
        <span
          className="scroll-smooth cursor-pointer"
          onClick={() => router.push("/#about")}
        >
          {" "}
          Learn More
          <br />
          <KeyboardDoubleArrowDownIcon />
        </span>
      </div>
    </div>
  );
}
