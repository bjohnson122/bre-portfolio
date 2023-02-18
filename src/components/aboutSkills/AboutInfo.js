import React, {useState, useEffect, useRef} from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useSpring,
} from "framer-motion"

export default function AboutInfo() {
    const [mobile, setMobile] = useState(undefined)

    const { scrollYProgress } = useScroll();

  const x = useSpring(useTransform(scrollYProgress, [0, 1], [-1300, 0]), {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  const ref = useRef(null);
  const isInView = useInView(ref);
    
    useEffect(() => {
        const updateMobile = () => {
          setMobile(window.innerWidth < 520 ? true : false)
        }
    
        updateMobile()
        window.addEventListener('resize', updateMobile)
        return () => {
          window.removeEventListener('resize', updateMobile)
        }
      }, [])


  return (
    <div>


      {mobile ? (
      <div>
        <p className="p-4 text-center text-sm pt-14">
            I am a full-stack software engineer that specializes in developing enjoyable user experiences. Javascript is my primary superpower as I tackle the world of the web.
        </p>
      </div>
      ) : (
        // slide in from left
        <div className='pt-14'>
                <div className="font-zidan m-3 ml-12 text-6xl">
          {'<About />'}
      </div>
            <p className="p-10 text-center  md:text-lg lg:text-xl lg:px-20 lg:pt-16 xl:text-2xl xl:px-36">
              {/* FADE IN ⬇️ */}
            I am a full-stack software engineer that specializes in developing enjoyable user experiences. Javascript is my primary superpower as I tackle the world of the web. I leverage my <span className="underline">artistic and graphic design</span> skills to create simple, beautiful, and intuitive layouts for applications and websites. When I&apos;m not centering divs, you&apos;ll find me painting, drawing, or working out.
            </p>
        </div>
      )}

      
      
    </div>
  );
}
