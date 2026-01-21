import { ContactForm } from "../contact/ContactForm";
import CopyEmail from "../contact/CopyEmail";
import { Card, CardContent } from "../ui/card";
import { Github } from "@/components/ui/github";
import { LinkedIn } from "@/components/ui/linkedin";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { Button } from "../ui/button";
import IconLink from "../nav/menu/IconLink";

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

const Contact = () => {
  return (
    <section id="contact" className="2xs:px-8 px-5 py-20 md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col justify-center gap-5">
        <h2 className="text-3xl leading-tight font-black tracking-tight md:text-4xl xl:text-5xl">
          Let’s work together
        </h2>
        <div className="mx-auto flex flex-col justify-between gap-15 md:mx-0 md:flex-row">
          <div className="mt-15 flex flex-col gap-8 md:w-lg">
            <p className="text-lg">
              I’m open to full-time roles, freelance projects, and long-term collaboration. Feel
              free to reach out using the form or directly by email.
            </p>
            <div className="flex flex-col gap-4 md:items-start">
              <p className="font-light">Prefer email?</p>
              <CopyEmail />
            </div>
            <div className="flex flex-col items-start gap-4">
              <p className="font-light">Social</p>
              <div className="xs:justify-start flex w-full justify-center gap-4">
                {socialItems.map(({ icon: Icon, label, link }) => (
                  <Tooltip key={label}>
                    <TooltipTrigger asChild>
                      <Button
                        size="icon"
                        variant="toggle"
                        className="transition-opacity hover:opacity-70"
                      >
                        <IconLink label={label} link={link}>
                          <Icon className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                        </IconLink>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>
          </div>
          <Card className="shadow-xl md:w-xl">
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
