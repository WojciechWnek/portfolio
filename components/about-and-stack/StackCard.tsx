"use client";
import SpotlightCard from "../ui/spotlight-card";

type StackCardProps = {
  title: string;
  technologies: string[];
};

const StackCard = ({ title, technologies }: StackCardProps) => {
  return (
    <SpotlightCard className="flex-1 shadow-lg">
      <h3 className="text-2xl leading-tight font-bold tracking-tight">{title}</h3>
      <ul className="ml-6 list-disc text-xl leading-normal font-light tracking-normal">
        {technologies.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </SpotlightCard>
  );
};

export default StackCard;
