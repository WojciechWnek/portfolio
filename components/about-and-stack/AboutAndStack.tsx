import Stack from "./Stack";

import { ABOUT } from "@/data/about";

const AboutAndStack = () => {
  return (
    <section id="about" className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28 xl:px-20 xl:py-36">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3">
            <div className="mb-4 flex items-center gap-3">
              <span className="bg-primary h-px w-8" />
              <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
                About
              </span>
            </div>
            <h2 className="text-4xl leading-tight font-black tracking-tight md:text-5xl xl:text-6xl">
              {ABOUT.title}
            </h2>
            <div className="text-muted-foreground mt-6 space-y-5 text-lg leading-relaxed md:text-xl">
              {ABOUT.description.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>

          <div className="hidden lg:col-span-2 lg:block">
            <div className="bg-card/50 relative flex h-full min-h-[200px] items-center justify-center overflow-hidden rounded-2xl border">
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,#5b58ff15,transparent_70%)]" />
              <div className="relative text-center">
                <span className="from-primary to-primary/50 bg-gradient-to-b bg-clip-text text-7xl leading-none font-black text-transparent">
                  {ABOUT.exp.years}
                </span>
                <p className="text-muted-foreground mt-3 text-sm font-medium tracking-widest uppercase">
                  {ABOUT.exp.title}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 md:mt-28">
          <div className="mb-10 flex items-center gap-3">
            <span className="bg-primary h-px w-8" />
            <span className="text-primary text-sm font-medium tracking-[0.2em] uppercase">
              Skills & Expertise
            </span>
          </div>
          <Stack />
        </div>
      </div>
    </section>
  );
};

export default AboutAndStack;
