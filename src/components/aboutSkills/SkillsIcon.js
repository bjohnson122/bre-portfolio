import React, {useRef, useEffect} from "react";
import Image from "next/image";
import Tilt from 'react-parallax-tilt';



export default function SkillsIcon({ src, alt }) {
  return (
    <div className='hover:opacity-95'>
   <Tilt tiltReverse={true}><Image src={src} alt={alt} height={90} /></Tilt>
    </div>
  );
}
