import React, {useEffect} from "react";
import Footer from "./Footer";
import Meta from "./Meta";
import MobileNav from "./MobileNav";
import Navbar from "./Navbar";

const repoPrompt = `
───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───
───█▒▒░░░░░░░░░▒▒█───
────█░░█░░░░░█░░█────
─▄▄──█░░░▀█▀░░░█──▄▄─
█░░█─▀▄░░░░░░░▄▀─█░░█

Taking a peek huh? Check out the source code: https://github.com/bjohnson122/bre-portfolio
`;
 

  console.info(`${repoPrompt}\n\n`);


function Layout({ children }) {
  return (
    <div className='font-raleway font-normal '>
      <Meta title="Developer and Designer" />
      <Navbar />
      {/* <MobileNav /> */}
      <main className=" md:flex flex-col overflow-x-hidden bg-[#6352ff08]">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
