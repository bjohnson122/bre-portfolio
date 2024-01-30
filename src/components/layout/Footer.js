import React from "react";

function Footer() {
  return (
    <footer className="text-xs text-center bg-[#F0EFFF] p-5 align-middle justify-center bottom-0 w-screen relative">
      © {new Date().getFullYear()} &middot; Built with Black Girl Magic by
      Breana J.
    </footer>
  );
}

export default Footer;
