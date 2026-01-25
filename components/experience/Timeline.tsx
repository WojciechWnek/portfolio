"use client";

import { useScroll, useTransform, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

import Description from "./Description";
import Projects, { ProjectEntry } from "./Projects";

import { EXPERIENCE_TITLE } from "@/data/experience";

type TimelineEntry = {
  dates: string;
  company: string;
  role: string;
  description: string[];
  projects: ProjectEntry[];
};

const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative mx-auto max-w-7xl py-20">
        <h2 className="2xs:px-8 px-5 text-3xl leading-tight font-black tracking-tight md:px-0 md:text-4xl xl:text-5xl">
          {EXPERIENCE_TITLE}
        </h2>
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-40">
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full md:left-3">
                <div className="bg-card h-4 w-4 rounded-full border p-2" />
              </div>
              <div className="hidden flex-col gap-2 text-2xl font-bold md:flex md:pl-15">
                <h3>{item.dates}</h3>
                <h3 className="text-muted-foreground">{item.company}</h3>
                <h3 className="text-secondary">{item.role}</h3>
              </div>
            </div>

            <div className="relative w-full pr-5 pl-20 md:pl-4">
              <div className="mb-4 block text-left text-2xl font-bold md:hidden">
                <h3>{item.dates}</h3>
                <div className="text-md flex flex-wrap gap-x-2">
                  <h3 className="text-muted-foreground">{item.company}</h3>
                  <h3 className="text-secondary">{item.role}</h3>
                </div>
              </div>
              <div className="flex flex-col gap-6 xl:flex-row">
                <Description descriptionList={item.description} />
                <Projects projects={item.projects} />
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute top-0 left-8 w-0.5 overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8 dark:via-neutral-700"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-0.5 rounded-full bg-gradient-to-t from-purple-500 from-[0%] via-blue-500 via-[10%] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
