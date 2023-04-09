import React from "react";

export default function Summary({ mobile }) {
  return (
    <div className="mb-10">
      {mobile ? (
        <p className="relative w-[90vw] ml-[5%] text-sm mt-7 xl:text-base">
          {`As a "Bre-of-a-few-trades", I have several talents, hobbies, and skills that I bring to the table. I am a mixed-media artist and had my work shown at several art exhibitions around NYC. In 2018, I transitioned to painting on tiny canvases as a nail artist. From creating trendy nail content for marketing to designing nail products that are currently sold in Anthropologie and on Amazon, I was able to let my talent lead the way.`}
          <br />
          <br />
          Whether {`it's`} color coordination, picking the right tool for the
          job, or simply viewing something from a different prospective, {`I'm`}{" "}
          always finding new ways to apply my creativity to daily tasks.
        </p>
      ) : (
        <p className="relative w-[87vw] mx-auto text-sm mt-7 xl:text-base">
          {`As a "Bre-of-a-few-trades", I have several talents, hobbies, and skills that I bring to the table. I am a mixed-media artist and had my work shown at several art exhibitions in NYC. In 2018, I decided to pivot, and try my hand at painting on nails... or as I call them: tiny canvases. It started with creating trendy nail content for social media and marketing. From there, I've had the opportunity to combine both of my passions by designing nail products that are currently sold in Anthropologie and on Amazon. I've also done manicures for New York Fashion Week (NYFW), corporate events, and celebrity talent.`}
          <br />
          <br />
          Whether {`it's`} color coordination, picking the right tool for the
          job, or simply viewing something from a different prospective, {`I'm`}{" "}
          always finding new ways to apply my creativity and talents to daily
          tasks.
        </p>
      )}
    </div>
  );
}
