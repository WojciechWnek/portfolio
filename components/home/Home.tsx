import { Spotlight } from "../ui/spotlight";
import Hero from "./Hero";

const Home = () => {
  return (
    <section id="home" className="flex h-dvh">
      <div className="relative flex w-full items-center justify-center overflow-hidden">
        <div>
          <Spotlight
            className="-top-5 -left-40 h-screen rotate-15 md:-top-20 md:-left-32 md:rotate-0"
            fill="white"
          />
          <Spotlight
            className="top-0 left-[calc(100%-8rem)] h-[80vh] w-[50vw] rotate-15 md:top-10 md:left-full md:rotate-0"
            fill="purple"
          />
          <Spotlight
            className="left-40 h-[80vh] w-[50vw] scale-200 rotate-15 md:top-28 md:left-80 md:scale-100 md:rotate-0"
            fill="blue"
          />
        </div>
        <Hero />
      </div>
    </section>
  );
};

export default Home;
