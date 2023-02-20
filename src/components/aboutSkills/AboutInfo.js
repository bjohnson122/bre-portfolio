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
        <p className="p-4 text-center text-sm pt-3">
            I am a full-stack software engineer that specializes in developing enjoyable user experiences. Javascript is my primary superpower as I tackle the world of the web.
        </p>
      </div>
      ) : (
        // slide in from left
        <div >
            <p className="px-10 py-5 text-center  md:text-lg lg:text-xl lg:px-20 lg:pt-10 xl:text-2xl xl:px-36">
              {/* FADE IN ⬇️ */}
            I am a full-stack software engineer that specializes in developing enjoyable user experiences. Javascript is my primary superpower as I tackle the world of the web. I leverage my <span className="underline">artistic and graphic design</span> skills to create simple, beautiful, and intuitive layouts for applications and websites. When I&apos;m not centering divs, you&apos;ll find me painting, drawing, or working out.
            </p>
        </div>
      )}

      
      
    </div>
  );
}
