import AboutAndStack from "@/components/sections/AboutAndStack";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Home from "@/components/sections/Home";
import SelectedProjects from "@/components/sections/SelectedProjects";

export default function Page() {
  return (
    <>
      <Home />
      <AboutAndStack />
      <Experience />
      <SelectedProjects />
      <Contact />
    </>
  );
}
