import React, { useState } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArticleIcon from "@mui/icons-material/Article";
import { Fade } from "react-awesome-reveal";

const links = [
  {
    href: "/#about",
    title: "About",
  },
  {
    href: "/#projects",
    title: "Technical Projects",
  },
  {
    href: "/transferable",
    title: "Non-Technical Portfolio",
  },
];

const socials = [
  {
    title: "GitHub",
    webLink: "https://github.com/bjohnson122",
    component: <GitHubIcon className="scale-110 mb-1" />,
  },
  {
    title: "LinkedIn",
    webLink: "https://linkedin.com/in/breanaj",
    component: <LinkedInIcon className="scale-110 mb-1" />,
  },
  {
    title: "Email",
    webLink: "mailto:brecjohnson@gmail.com",
    component: <MailOutlineIcon className="scale-110 mb-1" />,
  },
  {
    title: "Resume",
    webLink: "/resume.pdf",
    component: <ArticleIcon className="scale-110 mb-1" />,
  },
];

export default function MobileNav() {
  return (
    <div className="w-screen h-[95vh] z-30 top-0 left-0 absolute mt-10 scroll-smooth">
      <Fade duration={300}>
        <nav className="h-screen bg-white">
          <ul className="text-center text-2xl space-y-24 p-5 pt-16">
            {links.map((link, idx) => {
              return (
                <li key={idx}>
                  <a href={link.href} className="mb-5">
                    {link.title}
                  </a>
                </li>
              );
            })}
          </ul>
          <hr className="mx-40 mt-[6%]" />

          {/* SOCIAL ICONS */}
          <ul className="text-center flex  py-[10%] justify-between mx-8 xs:mx-[10%] sm:mx-48">
            {socials.map((socialSite, idx) => {
              return (
                <li key={idx} className="p-3 xs:p-0 sm:scale-125">
                  <a
                    className="md:text-[0.6rem] text-xs md:block "
                    href={socialSite.webLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {socialSite.component}
                    <br className="text-sm" /> {socialSite.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </Fade>
    </div>
  );
}
