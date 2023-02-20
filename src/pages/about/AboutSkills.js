import AboutInfo from '@/components/aboutSkills/AboutInfo'
import Skills from '@/components/aboutSkills/Skills'
import React from 'react'

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion";

const aboutTitleAnimation = {
  key: "about title",
  initial: { opacity: 0 },
  animate: { opacity: [0, 0.5, 1] },
  transition: { delay: 1.5, duration: 2.7 },
};

export default function About() {
  return (
    <div className='pt-14'>
    <div 
    {...aboutTitleAnimation}
    className="font-zidan m-3 ml-12 text-6xl">
{'<About />'}
</div>
    <motion.div id='about' className=''>
      <AboutInfo />
      <Skills/>
      <br />
      </motion.div></div>
  )
}
