import { Github, LinkedinIcon } from "lucide-react";
import IconLink from "../nav/menu/IconLink";
import { Button } from "../ui/button";

const socialItems = [
  {
    icon: Github,
    label: "Github",
    link: "https://github.com/WojciechWnek",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/wojciech-wnek/",
  },
];

const Footer = () => {
  return (
    <section
      id="footer"
      className="2xs:px-8 mx-auto flex flex-col-reverse items-center justify-between gap-4 px-5 py-7 sm:flex-row lg:px-7"
    >
      <div>Copyright &copy; {new Date().getFullYear()} Wojciech Wnek</div>
      <div className="flex gap-4">
        {socialItems.map(({ icon: Icon, label, link }) => (
          <Button
            key={label}
            size="icon"
            variant="toggle"
            className="transition-opacity hover:opacity-70"
          >
            <IconLink label={label} link={link}>
              <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
            </IconLink>
          </Button>
        ))}
      </div>
    </section>
  );
};

export default Footer;
