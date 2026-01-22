"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useVelocity, useMotionValueEvent, AnimatePresence } from "motion/react";

import DarkModeToggle from "./menu/DarkModeToggle";
import Menu from "./menu/Menu";
import MenuToggle from "./menu/MenuToggle";
import NavLink from "./menu/NavLink";
import MenuPortal from "./menu/MenuPortal";

const menuItems = [
  { label: "Home", link: "s#home" },
  { label: "About", link: "#about" },
  { label: "Experience", link: "#experience" },
  { label: "Contact", link: "#contact" },
];

const navVariants = {
  expanded: {
    width: "calc(100vw - 79px)",
    height: 64,
    borderRadius: 16,
    x: 32,
    y: 8,
  },
  collapsed: {
    width: 36,
    height: 36,
    borderRadius: 8,
    x: "calc(100vw - 79px)",
    y: 20,
  },
};

const contentVariants = {
  expanded: {
    scaleX: 1,
    x: 0,
  },
  collapsed: {
    scaleX: 0,
  },
};

const menuIconVariants = {
  expanded: {
    scale: 0,
    pointerEvents: "none",
  },
  collapsed: {
    scale: 1,
    pointerEvents: "auto",
  },
};

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const [navDuration, setNavDuration] = useState(0.35);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useMotionValueEvent(scrollVelocity, "change", (v) => {
    const speed = Math.abs(v);
    if (speed > 4000) setNavDuration(0.12);
    else if (speed > 1500) setNavDuration(0.2);
    else setNavDuration(0.35);
  });

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsOpen((prev) => (prev && latest <= 10 ? false : prev));
  });

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <nav>
      <motion.div
        variants={navVariants}
        initial="expanded"
        animate={isScrolled ? "collapsed" : "expanded"}
        transition={{
          duration: navDuration,
          ease: "easeInOut",
        }}
        className="bg-card fixed left-0 z-50 hidden origin-right items-center overflow-hidden shadow-2xl md:flex"
      >
        <motion.div
          variants={contentVariants}
          animate={isScrolled ? "collapsed" : "expanded"}
          transition={{
            duration: navDuration,
            ease: "easeInOut",
          }}
          style={{
            transformOrigin: "right center",
          }}
          className="relative z-10 flex w-full items-center justify-between gap-8 px-8 text-sm font-medium whitespace-nowrap before:w-9 before:content-['']"
        >
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <NavLink
                key={item.label}
                label={item.label}
                link={item.link}
                onNavClick={() => setIsOpen(false)}
              />
            ))}
          </ul>

          <DarkModeToggle />
        </motion.div>
      </motion.div>
      <motion.div
        initial={false}
        variants={menuIconVariants}
        animate={isScrolled ? "collapsed" : "expanded"}
        transition={{
          duration: 0.1,
          ease: "easeOut",
          delay: isScrolled ? navDuration : 0,
        }}
        className="fixed top-5 left-[calc(100vw-79px)] z-50 hidden h-9 w-9 items-center justify-center md:flex"
      >
        <MenuToggle isOpen={isOpen} onMenuToggle={() => setIsOpen((v) => !v)} />
      </motion.div>
      <div className="fixed top-5 left-[calc(100vw-79px)] z-50 flex h-9 w-9 items-center justify-center md:hidden">
        <MenuToggle isOpen={isOpen} onMenuToggle={() => setIsOpen((v) => !v)} />
      </div>
      <AnimatePresence>
        {isOpen && (
          <MenuPortal>
            <div className="fixed inset-0 z-40">
              <div onClick={() => setIsOpen(false)} className="absolute inset-0" />
              <Menu onNavClick={() => setIsOpen(false)} />
            </div>
          </MenuPortal>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
