import React, { useRef, useEffect } from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Article from "@mui/icons-material/Article";
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

  useEffect(() => {
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <div className="h-[80vh] w-screen overflow-hidden" id="contact" ref={ref}>
      {/* TRANSLATE TEXT ON X AXIS */}

      {isInView && (
        <motion.div
          style={{ x }}
          className="w-screen font-zidan tracking-[.075em] md:text-[12rem] md:absolute md:mt-[22vh] opacity-[30%] text-[#525252] md:pl-7 text-center overflow-hidden
        "
        >
          Contact
        </motion.div>
      )}

      {/* SOCIAL ICONS */}
      <div
        className="text-center scale-[3.2] space-x-10 z-50 text-black md:mt-72 overflow-visible
   "
      >
        <LinkedIn />
        <MailOutline />
        <GitHub />
      </div>
    </div>
  );
}
