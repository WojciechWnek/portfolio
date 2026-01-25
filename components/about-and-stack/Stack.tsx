"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import StackCard from "./StackCard";

type SkillsData = {
  id: string;
  title: string;
  description: string;
  technologies: string[];
};

const SKILLS: SkillsData[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Building scalable and high-performance user interfaces for production web applications.",
    technologies: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Responsive Design",
      "Accessibility (WCAG)",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description:
      "Designing and integrating backend services to support modern frontend applications.",
    technologies: [
      "Django",
      "Django REST Framework",
      "API design & validation",
      "Authentication & permissions",
      "SQL",
      "Third-party integrations",
    ],
  },
  {
    id: "tooling",
    title: "Tooling & Architecture",
    description: "Ensuring code quality, performance, and long-term maintainability.",
    technologies: [
      "Git",
      "Docker",
      "CI/CD Pipelines",
      "Clean Architecture",
      "Testing (Jest, RTL)",
      "Code Reviews",
    ],
  },
  {
    id: "collaboration",
    title: "Product & Collaboration",
    description: "Working effectively with teams to deliver real, user-focused products.",
    technologies: [
      "Agile / Scrum",
      "Cross-functional collaboration",
      "Mentoring junior developers",
      "Technical ownership",
      "UI/UX collaboration (Figma)",
      "Remote teamwork",
    ],
  },
];

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
      {SKILLS.map((card) => (
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
