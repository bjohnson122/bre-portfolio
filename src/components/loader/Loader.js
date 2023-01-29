import React from "react";
import Typewriter from "typewriter-effect";
import Meta from "@/components/layout/Meta";

import { motion, AnimatePresence } from "framer-motion";

//pt-[calc(100vh/3.5)]

const loaderSmallTextAnimation = {
  key: "loader text",
  initial: { opacity: 0 },
  animate: { opacity: [0, 0.9, 0.9, 1, 0] },
  transition: { delay: 1.5, duration: 2.7 },
};

export default function Loader() {
  return (
    <div className='h-full'>
      <Meta />
      {/* containter */}
      <div className="text-center w-full p-5 pt-[calc(100vh/2.6)]">
        {/* typing text */}
        <div
          className="font-zidan tracking-[.05em] text-[2.3rem]
          2xl:text-8xl
         sm:text-6xl
          md:text-7xl flex-nowrap block"
        >
          <Typewriter
            className="w-full"
            options={{
              strings: ["Breana  Johnson"],
              autoStart: true,
              loop: false,
              delay: 100,
              changeDeleteSpeed: 12,
              pauseFor: 1400,
              delay: 75,
            }}
          />
        </div>

        {/* fade in sub-text */}

        <motion.div
          {...loaderSmallTextAnimation}
          className="font-raleway font-semibold pt-3 sm:pt-7 md:pt-6 relative text-[14px] sm:text-[1.35rem]"
        >
          Software Engineer & Designer
        </motion.div>
      </div>
    </div>
  );
}
