import React from "react";
import { Slide, Fade } from "react-awesome-reveal";
import Gallery from "./Gallery";

export default function TransferSkills() {
  return (
    <div className="h-full">
      {/* TITLE */}
      <div>
        <Slide duration={1000} triggerOnce={true}>
          <h1
            className="text-[#6352ff] font-zidan  text-3xl
      sm:text-left sm:m-3 sm:ml-4 sm:text-4xl
      md:text-4xl md:text-center
      lg:ml-5"
          >
            Transferable Skills
          </h1>
        </Slide>
      </div>
      {/* TEXT */}
      <p className="px-8 text-sm">{`As a "Bre of a few trades", I have several talents, hobbies, and skills that I bring to the table. I am a mixed-media artist and had my work shown at art exhibitions around NYC. In 2018, I decided to pivot, and try my hand at painting on nails... or as I call them: tiny canvases! It started with creating trendy nail content for social media and marketing. From there, I've had the opportunity to combine both of my passions by designing nail products that are currently sold in Anthropologie and on Amazon. I've also done manicures for New York Fashion Week (NYFW), corporate events, and celebrity talent.`}
      <br/>
      <br/>
      Whether {`it's`} color coordination, picking the right tool for the job, or simply viewing something from a different prospective, {`I'm`} always finding new ways to apply my creativity and talents to daily tasks.</p>
      {/* Content */}
      <Gallery />
      <div></div>
    </div>
  );
}
