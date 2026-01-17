import { cubicBezier, motion } from "motion/react";

import Curve from "./Curve";
import NavLink from "./NavLink";
import DarkModeToggle from "./DarkModeToggle";
import { Github, LinkedinIcon } from "lucide-react";
import IconLink from "./IconLink";
import { Button } from "@/components/ui/button";

const menuItems = [
  { label: "Home", link: "#home" },
  { label: "Experience", link: "#experience" },
  { label: "Projects", link: "#projects" },
  { label: "Stack", link: "#stack" },
  { label: "About", link: "#about" },
  { label: "Contact", link: "#contact" },
];

const socialItems = [
  {
    icon: Github,
    label: "Github",
    link: "https://github.com/WojciechWnek",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/wojciech-wnek/",
  },
];

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0",
    transition: { duration: 0.6, ease: cubicBezier(0.76, 0, 0.24, 1) },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.6, ease: cubicBezier(0.76, 0, 0.24, 1) },
  },
};

export const slide = {
  initial: { x: 80 },
  enter: (i: number) => ({
    x: 0,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.76, 0, 0.24, 1),
      delay: 0.05 * i,
    },
  }),
  exit: (i: number) => ({
    x: 80,
    transition: {
      duration: 0.8,
      ease: cubicBezier(0.76, 0, 0.24, 1),
      delay: 0.05 * i,
    },
  }),
};

type MenuProps = {
  onNavClick: () => void;
};

const Menu = ({ onNavClick }: MenuProps) => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 right-0 h-screen w-screen md:w-md bg-card text-foreground"
    >
      <div className="border-box h-full p-20 md:p-25 flex flex-col justify-between">
        <div className="flex flex-col text-4xl md:text-5xl gap-3">
          <ul className="flex flex-col gap-8">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.label}
                custom={index}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <NavLink
                  label={item.label}
                  link={item.link}
                  onNavClick={onNavClick}
                />
              </motion.li>
            ))}
          </ul>
        </div>
        <ul className="flex justify-between items-center">
          {socialItems.map(({ icon: Icon, label, link }) => (
            <li key={label}>
              <Button
                size="icon"
                variant="toggle"
                className="hover:opacity-70 transition-opacity"
              >
                <IconLink label={label} link={link}>
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                </IconLink>
              </Button>
            </li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Menu;
