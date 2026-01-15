"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import DarkModeToggle from "./DarkModeToggle";
import {
  motion,
  useScroll,
  useVelocity,
  useMotionValueEvent,
  AnimatePresence,
} from "motion/react";
import { Menu as MenuIcon, X } from "lucide-react";
import { Button } from "../ui/button";
import Menu from "./menu/Menu";

const menuItems = [
  { label: "Home", link: "#home" },
  { label: "Experience", link: "#experience" },
  { label: "Projects", link: "#projects" },
  { label: "Stack", link: "#stack" },
  { label: "About", link: "#about" },
  { label: "Contact", link: "#contact" },
];

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
      y: 16,
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

  const menuIconStateVariants = {
    close: {
      rotate: 180,
    },
    open: {
      rotate: -180,
    },
  };

  const iconWrapperVariants = {
    initial: {
      rotate: 0,
    },
    animate: {
      rotate: isOpen ? 180 : -180,
      transition: {
        duration: 0.4,
        ease: "easeInOut",
      },
    },
  };

  const iconVariants = {
    initial: {
      opacity: 0,
      scale: 0.6,
    },
    animate: {
      opacity: 1,
      scale: 1,
    },
    exit: {
      opacity: 0,
      scale: 0.6,
    },
  };

  return (
    <>
      <motion.nav
        variants={navVariants}
        initial="expanded"
        animate={isScrolled ? "collapsed" : "expanded"}
        transition={{
          duration: navDuration,
          ease: "easeInOut",
        }}
        className="fixed left-0 z-50 bg-black overflow-hidden flex items-center shadow-2xl origin-right"
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
          className="relative z-10 w-full flex items-center justify-between gap-8 px-8 text-white text-sm font-medium whitespace-nowrap before:content-[''] before:w-9"
        >
          <ul className="flex gap-8">
            {menuItems.map((item) => (
              <motion.li key={item.label}>
                <a
                  href={item.link}
                  className="hover:opacity-70 transition-opacity"
                >
                  {item.label}
                </a>
              </motion.li>
            ))}
          </ul>

          <DarkModeToggle />
        </motion.div>

        <motion.div
          variants={menuIconVariants}
          animate={isScrolled ? "collapsed" : "expanded"}
          transition={{
            duration: 0.1,
            ease: "easeOut",
            delay: isScrolled ? navDuration : 0,
          }}
          className="absolute flex h-9 w-9 items-center justify-center text-white"
        >
          <Button size="icon" onClick={() => setIsOpen((v) => !v)}>
            <motion.div
              initial="initial"
              animate="animate"
              variants={iconWrapperVariants}
              key={isOpen ? "open" : "closed"} // 🔥 wymusza restart animacji
              className="flex items-center justify-center"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.span
                    key="x"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <X size={16} />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    variants={iconVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                  >
                    <MenuIcon size={16} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.div>
          </Button>
        </motion.div>
      </motion.nav>
      <AnimatePresence>{isOpen && <Menu />}</AnimatePresence>
    </>
  );
};

export default Nav;
