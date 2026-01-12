import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import Experience from "@/components/sections/Experience";
import Home from "@/components/sections/Home";
import Projects from "@/components/sections/Projects";
import Stack from "@/components/sections/Stack";

export default function Page() {
	return (
		<>
			<Home />
			<Experience />
			<Projects />
			<Stack />
			<About />
			<Contact />
		</>
	);
}
