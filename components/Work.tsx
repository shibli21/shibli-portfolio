import React from "react";
import Heading from "./Heading";
import { pick } from "contentlayer/client";
import { allProjects, Projects as ProjectsType } from "../.contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { BrandGithub, ExternalLink } from "tabler-icons-react";
import Tag from "./Tag";

const Work = () => {
  const projects = getProject();

  return (
    <div id="work">
      <Heading>My Works</Heading>

      <div className="grid grid-cols-1 md:grid-cols-3  grid-flow-dense gap-6 my-10 md:my-20 ">
        {projects.projects
          .sort((a, b) => a.order - b.order)
          .map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
      </div>
    </div>
  );
};

export default Work;

const getProject = () => {
  const projects = allProjects.map((project: ProjectsType) =>
    pick(project, [
      "title",
      "image",
      "slug",
      "github",
      "external",
      "description",
      "publishedAt",
      "tech",
      "featured",
      "order",
    ])
  );

  return { projects: JSON.parse(JSON.stringify(projects)) as ProjectsType[] };
};

const ProjectCard = ({ project }: { project: ProjectsType }) => {
  return (
    <div className="dark:bg-zinc-800  border border-zinc-500 shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ">
      <div className="overflow-hidden">
        <Image
          src={project.image}
          width={2000}
          height={2000}
          className="aspect-video object-cover object-top hover:transform hover:scale-105 transition duration-500 ease-in-out "
          alt={project.title}
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          {project.external ? (
            <Link href={project.external} target="_blank">
              <h3 className="text-xl font-secondary font-bold  hover:text-rose-500 cursor-pointer transition">
                {project.title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-xl font-secondary font-bold  hover:text-rose-500 cursor-pointer transition">
              {project.title}
            </h3>
          )}

          <div className="flex gap-2">
            {project.github && (
              <Link href={project.github} target="_blank">
                <BrandGithub size="20px" className="hover:text-rose-500 transition" />
              </Link>
            )}
            {project.external && (
              <Link href={project.external} target="_blank">
                <ExternalLink size="20px" className="hover:text-rose-500 transition" />
              </Link>
            )}
          </div>
        </div>
        <h3 className="text-sm flex-1">{project.description}</h3>
        <div className="space-x-2 mt-2">
          {project.tech?.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </div>
    </div>
  );
};
