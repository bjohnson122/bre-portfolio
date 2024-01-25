import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

export default function AboutInfo() {
  const [mobile, setMobile] = useState(undefined);

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 520 ? true : false);
    };

    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return (
    <div className="mt-16">
      <div>
        {/* FADE IN ⬇️ */}
        <p className="px-4 text-sm sm:text-base py-3 text-center  md:text-lg lg:text-xl lg:px-20 lg:pt-10 xl:text-2xl xl:px-36">
          I am a full-stack software engineer that specializes in developing
          enjoyable user experiences. Javascript is my primary superpower as I
          tackle the world of the web. I leverage my{" "}
          <Link
            href="/transferable-skills"
            className="underline decoration-[#6352ff] underline-offset-2 decoration-[2px] "
          >
            artistic and graphic design
          </Link>{" "}
          skills to create simple, beautiful, and intuitive layouts for
          applications and websites. When {"I'm"} not centering divs, {"you'll "}
          find me painting, drawing, or working out.
        </p>
      </div>
    </div>
  );
}
