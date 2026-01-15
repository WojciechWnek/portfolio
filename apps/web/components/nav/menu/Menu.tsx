import Curve from "./Curve";
import { motion } from "motion/react";

const navItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Work",
    href: "/work",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const Menu = () => {
  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed right-0 top-0 h-screen bg-black text-white"
    >
      <div className="box-border h-full p-25 flex flex-col justify-between">
        <div className="flex flex-col text-[56px] gap-3 mt-20">
          <div className="border-b border-[rgb(153,153,153)] uppercase text-sm mb-10">
            <p>Navigation</p>
          </div>
          {navItems.map((data, index) => {
            return (
              <a
                key={index}
                // data={{ ...data, index }}
                // isActive={selectedIndicator == data.href}
                // setSelectedIndicator={setSelectedIndicator}
                className="no-underline text-white font-light"
              ></a>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Menu;
