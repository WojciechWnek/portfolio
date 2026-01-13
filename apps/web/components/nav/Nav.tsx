// 'use client'

// import { useEffect, useState } from 'react';

// import { cn } from '@/lib/utils';
// import DarkModeToggle from './DarkModeToggle'
// import {
//   AnimatePresence,
//   motion,
//   useScroll,
//   useVelocity,
//   useMotionValueEvent
// } from 'motion/react';
// import { Menu, X } from 'lucide-react';

// const menuItems = [
//   { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
//   { label: 'Experience', ariaLabel: 'View our services', link: '#experience' },
//   { label: 'Projects', ariaLabel: 'Get in touch', link: '#projects' },
//   { label: 'Stack', ariaLabel: 'Get in touch', link: '#stack' },
//   { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
//   { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
// ];

// const Nav = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   const { scrollY } = useScroll();
//   const scrollVelocity = useVelocity(scrollY);
//   const [navDuration, setNavDuration] = useState(0.35);

//   useEffect(() => {
//     const onScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//       if (window.scrollY === 0) {
//         setDrawerOpen(false);
//       }
//     };

//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useMotionValueEvent(scrollVelocity, "change", (v) => {
//     const speed = Math.abs(v);

//     if (speed > 2000) setNavDuration(0.12);     // bardzo agresywny
//     else if (speed > 1000) setNavDuration(0.2); // szybki
//     else setNavDuration(0.35);                  // normalny
//   });


//   const variants = {
//     expanded: {
//       // scaleX: 1,
//       width: "100vw",
//       scaleY: 1,
//       x: 0,
//       y: 0,
//       borderRadius: 0,
//     },
//     collapsed: {
//       width: 32,
//       // scaleX: ,
//       scaleY: 32 / 64,
//       x: "calc(100vw - 64px)",
//       y: 0,
//       borderRadius: 16,
//     },
//   };

//   return (
//     <motion.div
//       variants={variants}
//       initial="expanded"
//       animate={isScrolled ? "collapsed" : "expanded"}
//       transition={{
//         duration: 0.7,
//         ease: "easeInOut",
//       }}
//       className='fixed top-0 left-0 w-full h-16 bg-black origin-left'
//     />
//   );

//   // return (
//   //   <header className="flex h-20 w-full">
//   //     {/* <motion.nav
//   //       animate={isScrolled ? { width: 64, margin: 8 } : { width: "100%", margin: 0 }}
//   //       transition={{
//   //         type: "tween",
//   //         duration: navDuration,
//   //         ease: "easeOut"
//   //       }}
//   //       className="fixed top-0 right-0 h-16 bg-gray-900 z-50 overflow-hidden"
//   //     > */}
//   //     {/* <motion.nav
//   //       animate={{
//   //         scale: isScrolled ? 0 : 1,
//   //         opacity: isScrolled ? 0.9 : 1,
//   //       }}
//   //       transition={{
//   //         type: "tween",
//   //         duration: 0.25,
//   //         ease: "easeOut",
//   //       }}
//   //       style={{
//   //         transformOrigin: "right center", // ⬅️ punkt zbiegu
//   //       }}
//   //       className="fixed top-4 right-4 w-[320px] h-16 bg-gray-900 z-50 rounded-xl"
//   //     > */}
//   //     <motion.nav
//   //       animate={{ scale: isScrolled ? 0 : 1 }}
//   //       transition={{ duration: 0.25, ease: "easeOut" }}
//   //       style={{ transformOrigin: "right center" }}
//   //       className="fixed top-4 right-4 w-[320px] h-16 bg-gray-900 rounded-xl"
//   //     >

//   //       <div className="relative w-full h-full px-4">

//   //         {/* LOGO */}
//   //         <motion.div
//   //           animate={{
//   //             opacity: isScrolled ? 0 : 1,
//   //             x: isScrolled ? -20 : 0,
//   //           }}

//   //           transition={{ duration: 0.25 }}
//   //           className="absolute left-4 top-1/2 -translate-y-1/2 text-white font-bold"
//   //         >
//   //           WNEK
//   //         </motion.div>

//   //         {/* BURGER */}
//   //         <motion.button
//   //           animate={{ opacity: isScrolled ? 1 : 0 }}
//   //           transition={{ duration: 0.25 }}
//   //           onClick={() => setDrawerOpen(v => !v)}
//   //           className="absolute right-4 top-1/2 -translate-y-1/2 text-white"
//   //         >
//   //           {drawerOpen ? <X size={28} /> : <Menu size={28} />}
//   //         </motion.button>

//   //       </div>
//   //     </motion.nav>

//   //     {/* DRAWER */}
//   //     <AnimatePresence>
//   //       {drawerOpen && isScrolled && (
//   //         <motion.aside
//   //           initial={{ x: -240 }}
//   //           animate={{ x: 0 }}
//   //           exit={{ x: -240 }}
//   //           transition={{ type: "spring", stiffness: 260, damping: 25 }}
//   //           className="fixed top-16 left-0 w-60 h-full bg-gray-800 z-40 p-6"
//   //         >
//   //           <ul className="flex flex-col gap-4 text-white">
//   //             {menuItems.map((link) => (
//   //               <li key={link.label}>
//   //                 <a href={link.link}>{link.label}</a>
//   //               </li>
//   //             ))}
//   //           </ul>
//   //         </motion.aside>
//   //       )}
//   //     </AnimatePresence>
//   //   </header >
//   // )


// }

// export default Nav


/////////////////////////////////////////////////////////////////////////////////////////////

'use client';

import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import DarkModeToggle from './DarkModeToggle';
import {
  AnimatePresence,
  motion,
  useScroll,
  useVelocity,
  useMotionValueEvent
} from 'motion/react';
import { Menu, X } from 'lucide-react';

const menuItems = [
  { label: 'Home', link: '#home' },
  { label: 'Experience', link: '#experience' },
  { label: 'Projects', link: '#projects' },
  { label: 'Stack', link: '#stack' },
  { label: 'About', link: '#about' },
  { label: 'Contact', link: '#contact' }
];

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const [navDuration, setNavDuration] = useState(0.35);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useMotionValueEvent(scrollVelocity, 'change', (v) => {
    const speed = Math.abs(v);
    if (speed > 2000) setNavDuration(0.12);
    else if (speed > 1000) setNavDuration(0.2);
    else setNavDuration(0.35);
  });

  /* ===============================
     BLACK HOLE VARIANTS
  =============================== */
  const navVariants = {
    expanded: {
      width: '1000px',
      height: 64,
      borderRadius: 16,
      x: 48,
    },
    collapsed: {
      width: 32,
      height: 32,
      borderRadius: 999,
      x: 'calc(100vw - 64px)',
    },
  };

  const contentVariants = {
    expanded: {
      scaleX: 1,
      opacity: 1,
      filter: 'blur(0px)',
      x: 0,
    },
    collapsed: {
      scaleX: 0,
      opacity: 0,
      filter: 'blur(14px)',
      x: 120,
    },
  };

  return (
    <motion.nav
      variants={navVariants}
      initial="expanded"
      animate={isScrolled ? 'collapsed' : 'expanded'}
      transition={{
        duration: navDuration,
        ease: 'easeInOut',
      }}
      className="
        fixed top-4 left-0 z-50
        bg-black overflow-hidden
        flex items-center
        shadow-2xl
        origin-right
      "
    >
      {/* BLACK HOLE GRAVITY GRADIENT */}
      <div
        className="
          absolute inset-0
          bg-[radial-gradient(circle_at_95%_50%,_#000_30%,_#111_55%,_#000_80%)]
        "
      />

      {/* CONTENT BEING SUCKED (LEFT → RIGHT) */}
      <motion.div
        variants={contentVariants}
        animate={isScrolled ? 'collapsed' : 'expanded'}
        transition={{
          duration: navDuration,
          ease: 'easeInOut',
        }}
        style={{
          transformOrigin: 'right center',
        }}
        className="
          relative z-10
          flex items-center gap-8
          pl-8 pr-16
          text-white text-sm font-medium
          whitespace-nowrap
        "
      >
        {menuItems.map((item) => (
          <a
            key={item.label}
            href={item.link}
            className="hover:opacity-70 transition-opacity"
          >
            {item.label}
          </a>
        ))}

        <DarkModeToggle />
      </motion.div>

      {/* FINAL BLACK DOT */}
      <motion.div
        className="
          absolute right-0
          w-8 h-8
          rounded-full
          bg-black
          shadow-[0_0_40px_rgba(0,0,0,0.9)]
        "
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ repeat: Infinity, duration: 2 }}
      />
    </motion.nav>
  );
};

export default Nav;
