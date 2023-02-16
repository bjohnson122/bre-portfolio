import React from "react";
import Image from "next/image";

export default function SkillsIcon({ src, alt }) {
  return (
    <div >
      <Image src={src} alt={alt} height={90} />
    </div>
  );
}
