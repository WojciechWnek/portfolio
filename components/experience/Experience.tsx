import ReferenceCard from "./ReferenceCard";
import Timeline from "./Timeline";

import { EXPERIENCE, REFERENCES } from "@/data/experience";

const Experience = () => {
  return (
    <section id="experience">
      <Timeline data={EXPERIENCE} />
      <div className="w-full pb-20 font-sans md:px-10 lg:pb-40">
        <div className="mx-auto max-w-7xl">
          <h2 className="2xs:px-8 mt-10 mb-20 w-full px-5 text-3xl leading-tight font-black tracking-tight md:px-0 md:text-4xl xl:text-5xl">
            Reference
          </h2>
          <div className="2xs:px-8 flex flex-col items-center px-5">
            {REFERENCES.map((item, index) => (
              <ReferenceCard key={index} data={item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
