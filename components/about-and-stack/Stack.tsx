"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StackCard from "./StackCard";

import { SKILLS } from "@/data/about";

type SkillsData = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
};

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-150px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2 },
    },
  };

  const cardVariants = {
    hidden: { rotateY: 90, opacity: 0 },
    visible: { rotateY: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      ref={ref}
      className="grid gap-10 md:grid-cols-2 xl:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {(SKILLS as SkillsData[]).map((card) => (
        <motion.div
          key={card.id}
          className="relative flex perspective-distant"
          variants={cardVariants}
        >
          <StackCard title={card.title} technologies={card.technologies} />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stack;
