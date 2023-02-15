import React from "react";
import GitHub from "@mui/icons-material/GitHub";
import LinkedIn from "@mui/icons-material/LinkedIn";
import Article from "@mui/icons-material/Article";
import MailOutline from "@mui/icons-material/MailOutline";

// pt-[40vh] xl:scale-[5.0] xl:pt-[15vh] lg:scale-[3.5] lg:pt-[15vh] sm:scale-[2.5] space-x-5 sm:pt-32 xs:space-x-6 sm:space-x-8

export default function Contact() {
  return (
    <div className="h-screen w-screen  bg-pink-700">
      {/* make this text translate */}
      <div id="contact" className="text-8xl font-zidan top-0 left-0 p-4">
        Contact
        <div
          className="flex bottom-0 right-0 justify-center scale-[2.0] space-x-10 z-50 text-indigo-700
   "
        >
          <LinkedIn />
          <MailOutline />
          <GitHub />
        </div>
      </div>
    </div>
  );
}
