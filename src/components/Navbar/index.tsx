"use strict";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import {
  GithubIcon,
  LinkedInIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon
} from "../Icons";
import { Logo } from "../Logo";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";

const personalLinks = [
  {
    link: "https://www.linkedin.com/in/hugo-petla/",
    icon: "linkedin"
  },
  { link: "https://github.com/HugoPetla", icon: "github" },
  { link: "https://twitter.com/7HuGo_", icon: "twitter" }
];

const navLinks = [
  { link: "/", title: "Home" },
  { link: "/about", title: "About" },
  { link: "/projects", title: "Projects" },
  { link: "/articles", title: "Articles" }
];

function getIconComponent(iconName: string) {
  switch (iconName) {
    case "github":
      return GithubIcon;
    case "twitter":
      return TwitterIcon;
    case "linkedin":
      return LinkedInIcon;
    default:
      return null;
  }
}

const CustomLink = ({
  href,
  title,
  className = ""
}: {
  href: string;
  title: string;
  className?: string;
}) => {
  const pathname = usePathname();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`h-[1px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${
          pathname === href ? "w-full" : "w-0"
        } dark:bg-light`}
      >
        &nbsp;
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light dark:bg-dark dark:text-light">
      <nav>
        {navLinks.map((link, index) => {
          return (
            <CustomLink
              key={index}
              href={link.link}
              title={link.title}
              className=":first-child:mr-4 :last-child:ml-4 mx-4"
            />
          );
        })}
      </nav>
      <nav className="flex items-center justify-center flex-wrap">
        {personalLinks.map((personalLink, index) => {
          const IconComponent = getIconComponent(personalLink.icon);

          if (!IconComponent) {
            return null;
          }

          return (
            <motion.a
              className="w-6 mx-3"
              href={personalLink.link}
              target={"_blank"}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.9 }}
              key={index}
            >
              <IconComponent />
            </motion.a>
          );
        })}
        <button
          className={`ml-2 flex items-center justify-center rounded-full p-1 w-7 ${
            mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
          }`}
          onClick={() => setMode(mode === "light" ? "dark" : "light")}
        >
          {mode === "dark" ? (
            <SunIcon className="fill-dark" />
          ) : (
            <MoonIcon className="fill-dark" />
          )}
        </button>
      </nav>
      <div className="absolute left-[50%] top-2 translate-x-[-50%]">
        <Logo />
      </div>
    </header>
  );
};

export default Navbar;
