"use client";
import { Code2, Server, Wrench, Users } from "lucide-react";
import { cn } from "@/lib/utils";

type StackCardProps = {
  title: string;
  technologies: string[];
  accentGradient: string;
  number: string;
};

const iconMap: Record<string, React.ReactNode> = {
  "01": <Code2 className="h-5 w-5" />,
  "02": <Server className="h-5 w-5" />,
  "03": <Wrench className="h-5 w-5" />,
  "04": <Users className="h-5 w-5" />,
};

const StackCard = ({ title, technologies, accentGradient, number }: StackCardProps) => {
  return (
    <div className="bg-card text-card-foreground group relative flex flex-col gap-5 overflow-hidden rounded-xl border p-6 shadow-sm transition-shadow duration-300 hover:shadow-md">
      <div
        className={cn(
          "pointer-events-none absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl",
          accentGradient,
        )}
      />

      <div className="flex items-center justify-between">
        <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-lg">
          {iconMap[number]}
        </div>
        <span className="text-muted-foreground/20 text-3xl leading-none font-black">{number}</span>
      </div>

      <div>
        <h3 className="text-xl leading-tight font-bold tracking-tight">{title}</h3>
      </div>

      <ul className="flex flex-wrap gap-2">
        {technologies.map((item) => (
          <li
            key={item}
            className="bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary/80 rounded-md px-2.5 py-1 text-sm font-medium transition-colors duration-200"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StackCard;
