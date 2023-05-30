import React, { useState, useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ArticleIcon from "@mui/icons-material/Article";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import MobileNav from "./MobileNav";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";

const links = [
  {
    href: "/#about",
    title: "About",
  },
  {
    href: "/#projects",
    title: "Projects",
  },
  {
    href: "/#contact",
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

let counter = 0;

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
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [mobile, setMobile] = useState(undefined);
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    const updateMobile = () => {
      setMobile(window.innerWidth < 870 ? true : false);
    };
    counter++;
    updateMobile();
    window.addEventListener("resize", updateMobile);
    return () => {
      window.removeEventListener("resize", updateMobile);
    };
  }, []);

  return (
    <div
      className={`${counter < 2 ? "md:hidden" : "md:show"} 
      ${scrollDirection === "down" ? "md:-top-24" : "md:top-0"} 
      flex w-screen list-none p-3 h-10 
      md:h-14  md:align-center
     
      bg-[#1c1c23]  shadow-lg shadow-[#262626]/50
      md:transition-all md:duration-500  items-center md:text-md md:sticky fixed z-50 `}
    >
      <motion.div
        className="fixed top-0 left-0 right-0 h-[.25rem] lg:h-1 bg-[#8578ff]  origin-left drop-shadow-md"
        style={{ scaleX }}
      />
      {/* Left side of navbar w/ page links */}

      <ul
        className={` hidden
      md:w-1/4 md:flex md:justify-around scroll-smooth md:text-md md:align-middle text-[#f7f7f7]`}
      >
        {/* DARK MODE */}
        {/* <button
          onClick={() => setDarkMode(!darkMode)}
          className="scale-75 pt-1"
        >
          {darkMode ? <LightModeOutlinedIcon /> : <DarkModeIcon />}
        </button> */}

        {links.map((link, idx) => {
          return (
            <li className="md:pt-1" key={idx}>
              <a href={link.href}>{link.title}</a>
            </li>
          );
        })}
      </ul>

      {/* Logo */}
      <span
        className="text-[1.23rem] font-zidan text-left text-[#6352ff] w-1/2
top-0 left-0

        md:text-2xl md:text-center md:cursor-pointer tracking-wider "
      >
        <Link href="/">Breana Johnson</Link>
      </span>

      {/* Right side of navbar w/ SOCIAL links */}
      <ul
        className={`
       hidden
      md:w-1/4 md:flex md:justify-around md:items-center md:text-center sm:max-w-[869px] text-[#f7f7f7]
      `}
      >
        {socials.map((socialSite, idx) => {
          return (
            <li key={idx}>
              <a
                className="md:text-[0.6rem]  md:block font-semibold tracking-wider"
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
      </ul>

      {/* MOBILE (hamburger btn) */}
      <span className="md:hidden w-1/2 text-right z-50">
        <button
          onClick={() => {
            setNavbarOpen(!navbarOpen);
          }}
        >
          {navbarOpen ? (
            <CloseIcon className="text-white" />
          ) : (
            <MenuIcon className="text-white" />
          )}
          {navbarOpen && mobile && <MobileNav className=" text-black" />}
        </button>
      </span>
    </div>
  );
}

export default Navbar;
