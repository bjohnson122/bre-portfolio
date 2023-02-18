import React, {useState, useEffect} from "react";

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
        <p className="p-4 text-center text-sm pt-14">
            I am a full-stack software engineer that specializes in developing enjoyable user experiences. Javascript is my primary superpower as I tackle the world of the web.
        </p>
      </div>
      ) : (
        <div>
            <p className="p-10 text-center pt-14 md:text-lg lg:text-xl lg:px-20 lg:pt-24 xl:text-2xl xl:px-36">
            I am a full-stack software engineer that specializes in developing enjoyable user experiences. Javascript is my primary superpower as I tackle the world of the web. I leverage my <span className="underline">artistic and graphic design</span> skills to create simple, beautiful, and intuitive layouts for applications and websites. When I&apos;m not centering divs, you&apos;ll find me painting, drawing, or working out.
            </p>
        </div>
      )}

      
      
    </div>
  );
}
