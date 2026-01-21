import { Github } from "@/components/ui/github";
import { LinkedIn } from "@/components/ui/linkedin";
import IconLink from "../nav/menu/IconLink";
import { Button } from "../ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";

const socialItems = [
  {
    icon: Github,
    label: "Github",
    link: "https://github.com/WojciechWnek",
  },
  {
    icon: LinkedIn,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/wojciech-wnek/",
  },
];
const Footer = () => {
  return (
    <section id="footer" className="2xs:px-8 px-5 py-5 md:px-10">
      <div className="mx-auto flex max-w-7xl items-center justify-center">
        <div>Copyright &copy; {new Date().getFullYear()} Wojciech Wnek</div>
      </div>
    </section>
  );
};

export default Footer;
