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

const accentMap: Record<string, string> = {
  frontend: "from-primary/40 to-transparent",
  backend: "from-cyan-500/40 to-transparent",
  tooling: "from-emerald-500/40 to-transparent",
  collaboration: "from-amber-500/40 to-transparent",
};

const iconMap: Record<string, string> = {
  frontend: "01",
  backend: "02",
  tooling: "03",
  collaboration: "04",
};

const Stack = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.12 },
    },
  };

  const cardVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] as [number, number, number, number] } },
  };

  return (
    <motion.div
      ref={ref}
      className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {(SKILLS as SkillsData[]).map((card) => (
        <motion.div
          key={card.id}
          variants={cardVariants}
        >
          <StackCard
            title={card.title}
            technologies={card.technologies}
            accentGradient={accentMap[card.id] || "from-primary/40 to-transparent"}
            number={iconMap[card.id] || "00"}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Stack;
