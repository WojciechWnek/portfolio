'use client'

import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';
import DarkModeToggle from './DarkModeToggle'
import {
  AnimatePresence,
  motion,
  useScroll,
  useVelocity,
  useMotionValueEvent
} from 'motion/react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
  { label: 'Experience', ariaLabel: 'View our services', link: '#experience' },
  { label: 'Projects', ariaLabel: 'Get in touch', link: '#projects' },
  { label: 'Stack', ariaLabel: 'Get in touch', link: '#stack' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const [navDuration, setNavDuration] = useState(0.35);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
      if (window.scrollY === 0) {
        setDrawerOpen(false);
      }
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useMotionValueEvent(scrollVelocity, "change", (v) => {
    const speed = Math.abs(v);

    if (speed > 2000) setNavDuration(0.12);     // bardzo agresywny
    else if (speed > 1000) setNavDuration(0.2); // szybki
    else setNavDuration(0.35);                  // normalny
  });

  return (
    // <header
    //   className={cn("drop-shadow-[0_0_15px_rgba(0,0,0,0.05)] flex fixed h-20 top-0 z-50 px-4 md:px-8 py-3 bg-pink-500 w-full")}
    // >
    <header className="flex h-20 w-full">

      <motion.nav
        animate={{ width: isScrolled ? 64 : "100%" }}
        transition={{
          type: "tween",
          duration: navDuration,
          ease: "easeOut"
        }} className="fixed top-0 left-0 h-16 bg-gray-900 z-50 overflow-hidden"
      >
        <div className="relative w-full h-full px-4">

          {/* LOGO */}
          <motion.div
            animate={{
              opacity: isScrolled ? 0 : 1,
              x: isScrolled ? -20 : 0,
            }}

            transition={{ duration: 0.25 }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-bold"
          >
            LOGO
          </motion.div>

          {/* BURGER */}
          <motion.button
            animate={{ opacity: isScrolled ? 1 : 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setDrawerOpen(v => !v)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
          >
            {drawerOpen ? <X size={28} /> : <Menu size={28} />}
          </motion.button>

        </div>
      </motion.nav>

      {/* DRAWER */}
      <AnimatePresence>
        {drawerOpen && isScrolled && (
          <motion.aside
            initial={{ x: -240 }}
            animate={{ x: 0 }}
            exit={{ x: -240 }}
            transition={{ type: "spring", stiffness: 260, damping: 25 }}
            className="fixed top-16 left-0 w-60 h-full bg-gray-800 z-40 p-6"
          >
            <ul className="flex flex-col gap-4 text-white">
              {menuItems.map((link) => (
                <li key={link.label}>
                  <a href={link.link}>{link.label}</a>
                </li>
              ))}
            </ul>
          </motion.aside>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Nav