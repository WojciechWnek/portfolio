import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { LinkPreview } from "../ui/link-preview";

export type ProjectsEntry = {
  projects: ProjectEntry[];
};

export type ProjectEntry = {
  title: string;
  technologies: string[];
  description: string;
  link?: string;
};

const Projects = ({ projects }: ProjectsEntry) => {
  return (
    <ul className="-ml-5 flex flex-col gap-4 xl:ml-0">
      {projects.map((project) => (
        <li key={project.title}>
          <Card className="gap-1">
            <CardHeader>
              <CardTitle>
                <h4 className="lg:text-lg">{project.title}</h4>
              </CardTitle>
            </CardHeader>
            <CardContent className="text-sm lg:text-base">
              <div>{project.description}</div>
              <div className="mt-3 flex items-center justify-between">
                <ul className="flex">
                  {project.technologies.map((item, index) => (
                    <li
                      key={index}
                      className="flex h-8 w-8 items-center justify-center rounded-full border bg-black lg:h-10 lg:w-10"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <Image
                        width={24}
                        height={24}
                        src={"./" + item + ".svg"}
                        alt={item}
                        className="aspect-square rounded-sm p-px lg:w-7"
                      />
                    </li>
                  ))}
                </ul>
                {!!project.link && (
                  <LinkPreview
                    url={project.link}
                    className="flex h-min items-center justify-center gap-1 rounded-lg border px-3 py-1"
                  >
                    Read more <ArrowUpRight />
                  </LinkPreview>
                )}
              </div>
            </CardContent>
          </Card>
        </li>
      ))}
    </ul>
  );
};

export default Projects;
