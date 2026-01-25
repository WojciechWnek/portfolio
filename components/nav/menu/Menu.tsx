import { cubicBezier, motion } from "motion/react";

import Curve from "./Curve";
import NavLink from "./NavLink";
import DarkModeToggle from "./DarkModeToggle";
import IconLink from "@/components/ui/icon-link";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

import { MENU } from "@/data/menu";
import { SOCIAL } from "@/data/social";

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
      className="bg-card text-foreground fixed top-0 right-0 h-screen w-screen shadow-2xl md:w-md"
    >
      <div className="border-box flex h-full flex-col justify-between p-20 md:p-25">
        <div className="flex flex-col gap-3 text-4xl md:text-5xl">
          <ul className="flex flex-col gap-8">
            {MENU.map((item, index) => (
              <motion.li
                key={item.label}
                custom={index}
                variants={slide}
                initial="initial"
                animate="enter"
                exit="exit"
              >
                <NavLink label={item.label} link={item.link} onNavClick={onNavClick} />
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.ul
          className="flex items-center justify-between"
          custom={MENU.length}
          variants={slide}
          initial="initial"
          animate="enter"
          exit="exit"
        >
          {SOCIAL.map(({ icon: Icon, label, link }) => (
            <li key={label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="toggle"
                    className="transition-opacity hover:opacity-70"
                  >
                    <IconLink label={label} link={link}>
                      <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                    </IconLink>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{label}</p>
                </TooltipContent>
              </Tooltip>
            </li>
          ))}
          <li>
            <DarkModeToggle />
          </li>
        </motion.ul>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Menu;
