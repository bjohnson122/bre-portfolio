import React, { useRef } from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import MailOutline from "@mui/icons-material/MailOutline";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";

export default function Contact() {
  const { scrollYProgress } = useScroll();

  const x = useSpring(useTransform(scrollYProgress, [0, 1], [-1300, 0]), {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="h-[80vh] lg:h-screen bg-[#6352ff08] xl:mt-[10vh] w-screen overflow-hidden" id="contact" ref={ref}>
      {/* TRANSLATE TEXT ON X AXIS */}

      {isInView && (
        <motion.div
          style={{ x }}
          className="w-screen font-zidan text-center ml-4 mt-[17vh]  tracking-[.085em] text-[4rem] sm:text-[7.75rem] sm:absolute sm:mt-[25vh] sm:opacity-20 sm:text-[#000000] md:text-[12rem] md:mt-[22vh]  md:opacity-[20%] md:text-[#16123a] md:pl-7 "
        >
          Contact
        </motion.div>
      )}
      <div className="text-center text-sm pt-2 sm:hidden">
        I&apos;d love to hear from you!
      </div>

      {/* SOCIAL ICONS */}
      <div
        className="scale-[2.7] mt-12 p-4 z-50 text-[#5845fd] space-x-5 text-center sm:scale-[2.5] sm:mt-[15.75rem] 
        md:scale-[3.2] md:space-x-10  md:mt-72   "
      >
        <a
          href="https://www.linkedin.com/in/breanaj/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedIn className="" />
        </a>
        <a
          href="mailto:brecjohnson@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MailOutline />
        </a>
        <a
          href="https://github.com/bjohnson122/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <GitHub />
        </a>
      </div>
    </div>
  );
}
