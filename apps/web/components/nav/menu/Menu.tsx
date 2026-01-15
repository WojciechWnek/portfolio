import { cubicBezier, motion } from "motion/react";

import Curve from "./Curve";
import NavLink from "./NavLink";

const menuItems = [
  { label: "Home", link: "#home" },
  { label: "Experience", link: "#experience" },
  { label: "Projects", link: "#projects" },
  { label: "Stack", link: "#stack" },
  { label: "About", link: "#about" },
  { label: "Contact", link: "#contact" },
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
      className="fixed top-0 right-0 h-screen w-screen md:w-96 bg-black text-white"
    >
      <div className="box-border h-full p-25 flex flex-col justify-between">
        <div className="flex flex-col text-[56px] gap-3 mt-20">
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
      </div>
      <Curve />
    </motion.div>
  );
};

export default Menu;
