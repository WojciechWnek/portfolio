import { Spotlight } from "../ui/spotlight";
import Hero from "../home/Hero";

const Home = () => {
  return (
    <section id="home" className="flex h-dvh">
      <div className="relative w-full overflow-hidden flex justify-center items-center">
        <div>
          <Spotlight
            className="-left-40 md:-left-32 -top-5 md:-top-20 h-screen rotate-15 md:rotate-0"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-0 md:top-10 md:left-full left-[calc(100%-8rem)] rotate-15 md:rotate-0"
            fill="purple"
          />
          <Spotlight
            className="md:left-80 left-40 md:top-28 h-[80vh] w-[50vw] rotate-15 md:rotate-0 scale-200 md:scale-100"
            fill="blue"
          />
        </div>
        <Hero />
      </div>
    </section>
  );
};

export default Home;
