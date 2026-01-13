"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function HorizontalBlackHole() {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // === HOLE SIZE ===
  const width = useTransform(scrollYProgress, [0, 0.7], ["1000px", "32px"]);
  const height = useTransform(scrollYProgress, [0, 0.7], ["96px", "32px"]);
  const radius = useTransform(scrollYProgress, [0, 0.7], ["16px", "9999px"]);

  // === CONTENT SUCTION (LEFT → RIGHT) ===
  const scaleX = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const blur = useTransform(scrollYProgress, [0, 0.4], ["blur(0px)", "blur(14px)"]);
  const translateX = useTransform(scrollYProgress, [0, 0.6], ["0%", "50%"]);

  return (
    <div ref={ref} className="h-[200vh] flex items-center">
      <motion.div
        style={{
          width,
          height,
          borderRadius: radius,
        }}
        className="
          relative
          ml-12
          bg-black
          overflow-hidden
          flex items-center
          shadow-2xl
        "
      >
        {/* HORIZONTAL BLACK HOLE GRADIENT */}
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_90%_50%,_#000_35%,_#111_55%,_#000_75%)]
          "
        />

        {/* CONTENT BEING SUCKED */}
        <motion.div
          style={{
            scaleX,
            opacity,
            filter: blur,
            x: translateX,
            transformOrigin: "right center",
          }}
          className="
            relative z-10
            flex gap-10 pl-10
            text-white text-lg font-semibold
            whitespace-nowrap
          "
        >
          <span className="text-white">Dashboard</span>
          <span className="text-white">Analytics</span>
          <span className="text-white">Integrations</span>
          <span className="text-white">Billing</span>
          <span className="text-white">Settings</span>
        </motion.div>

        {/* FINAL DOT (RIGHT SIDE) */}
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
      </motion.div>
    </div>
  );
}
