"use client";

import { motion } from "motion/react";

import { FlipWords } from "../ui/flip-words";
import Link from "next/link";
import MagicButton from "../ui/magic-button";

const words = ["reliable", "detail-oriented", "experienced"];

const variants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const Hero = () => {
  return (
    <div className="2xs:px-8 flex w-xl flex-col items-center justify-center px-5 pt-12 sm:px-8 lg:w-4xl xl:w-5xl xl:pt-20">
      <h1 className="w-full text-4xl leading-tight tracking-tight md:text-5xl xl:text-6xl">
        <motion.span
          className="font-black"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.2 }}
        >
          Looking for a{" "}
        </motion.span>
        <br className="md:hidden" />
        <motion.span
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        >
          <FlipWords
            words={words}
            duration={4000}
            className="text-5xl font-bold md:text-6xl xl:text-7xl"
          />
        </motion.span>
        <br />
        <motion.span
          className="font-black"
          variants={variants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.8 }}
        >
          web developer?
        </motion.span>
      </h1>

      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 3 }}
        className="mt-10 flex w-full flex-col items-center gap-4 lg:mt-14"
      >
        <p className="text-muted-foreground w-full text-base font-medium md:text-lg xl:text-xl">
          I work on commercial web applications, focusing on quality, clean code, and long-term
          maintainability.
        </p>

        <p className="text-muted-foreground w-full text-sm md:text-base xl:text-lg">
          Helping teams turn business requirements into stable, production-ready solutions.
        </p>

        <div className="mt-10">
          <Link href="#experience">
            <MagicButton>Explore my experience</MagicButton>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
