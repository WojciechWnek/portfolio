import Stack from "./Stack";

import { ABOUT } from "@/data/about";

const AboutAndStack = () => {
  return (
    <section id="about" className="bg-accent/50 flex items-center justify-center">
      <div className="2xs:px-8 flex flex-col items-center gap-10 px-5 py-12 md:gap-14 lg:gap-20 lg:py-20 xl:px-20 xl:py-30">
        <div className="text-foreground/90 flex max-w-xl flex-col gap-5 text-xl font-semibold md:max-w-[unset] md:text-2xl lg:max-w-4xl xl:max-w-7xl">
          <h2 className="text-3xl leading-tight font-black tracking-tight md:text-4xl xl:text-5xl">
            {ABOUT.title}
          </h2>
          {ABOUT.description.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className="flex gap-10">
          <Stack />
        </div>
      </div>
    </section>
  );
};

export default AboutAndStack;
