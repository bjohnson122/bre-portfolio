import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
// import { useScrollDirection } from 'hooks';

const links = [
  {
    href: "#about",
    title: "About",
  },
  {
    href: "#projects",
    title: "Projects",
  },
  {
    href: "#contact",
    title: "Contact",
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

function useScrollDirection() {
  const [scrollDirection, setScrollDirection] = useState(null);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollDirection = () => {
      const scrollY = window.pageYOffset;
      const direction = scrollY > lastScrollY ? "down" : "up";
      if (
        direction !== scrollDirection &&
        (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
      ) {
        setScrollDirection(direction);
      }
      lastScrollY = scrollY > 0 ? scrollY : 0;
    };
    window.addEventListener("scroll", updateScrollDirection);
    return () => {
      window.removeEventListener("scroll", updateScrollDirection);
    };
  }, [scrollDirection]);

  return scrollDirection;
}


function Navbar() {
  const scrollDirection = useScrollDirection();
  const [navbar, setNavbar] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`fixed 
      ${scrollDirection === "down" ? "md:-top-24" : "md:top-0"} 
      flex w-screen list-none p-3 h-14 pt-0 bg-blue-200 drop-shadow-lg transition-all duration-500 items-center text-md md:sticky fixed z-50`}
    >
      {/* Left side of navbar w/ page links */}
      <span
        className=" hidden
      md:w-1/4 md:flex md:justify-around items-center text-center sm:max-w-[869px]
      "
      >
        {socials.map((socialSite, idx) => {
          return (
            <li key={idx}>
              <a
                className="text-[0.6rem] pt-4 block"
                href={socialSite.webLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                {socialSite.component}
                <br /> {socialSite.title}
              </a>
            </li>
          );
        })}
      </span>

      {/* Logo */}
      <span
        className="md:text-2xl md:text-center md:cursor-pointer font-zidan text-left text-blue-800 w-1/2"
        onClick={() => {
          window.scrollTo(0, 0);
        }}
      >
        Breana Johnson
      </span>

      {/* Right side of navbar w/ page links */}
      <span className="hidden md:w-1/4 md:flex md:justify-around scroll-smooth text-md">
        {links.map((link, idx) => {
          return (
            <li className="md:border-b-0" key={idx}>
              <a href={link.href}>{link.title}</a>
            </li>
          );
        })}

        <button onClick={() => setDarkMode(!darkMode)} className="">
          {darkMode ? (
            <LightModeOutlinedIcon className=" text-center pb-1" />
          ) : (
            <DarkModeIcon />
          )}
        </button>
      </span>

      {/* MOBILE (hamburger btn) */}
      <span className="md:hidden w-1/2 text-right">
        <button
          // className="p-2 text-right justify-self-end "
          onClick={() => {
            setNavbar(!navbar);
          }}
        >
          {navbar ? <CloseIcon /> : <MenuIcon />}
        </button>
      </span>
      {/* <div
        className={`flex flex-col justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
          navbar ? "p-12 md:p-0 block" : "hidden"
        }`}
      ></div> */}
      {/* <ul className="h-screen md:h-auto items-center justify-center md:flex ">
          <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2  md:hover:text-purple-600 md:hover:">
            <Link href="#about" onClick={() => setNavbar(!navbar)}>
              About
            </Link>
          </li>
          <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-white">
            <Link href="#blog" onClick={() => setNavbar(!navbar)}>
              Blogs
            </Link>
          </li>
          <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-white">
            <Link href="#contact" onClick={() => setNavbar(!navbar)}>
              Contact
            </Link>
          </li>
          <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-white">
            <Link href="#projects" onClick={() => setNavbar(!navbar)}>
              Projects
            </Link>
          </li>
        </ul> 
      </div>*/}
    </div>
  );
}

export default Navbar;
