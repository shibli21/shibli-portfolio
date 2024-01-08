import { pick } from "contentlayer/client";
import Image from "next/image";
import Link from "next/link";
import { BrandGithub, ExternalLink } from "tabler-icons-react";
import { allProjects, Projects as ProjectsType } from "../.contentlayer/generated";
import { Card } from "./card";
import Heading from "./Heading";
import Tag from "./Tag";

const Work = () => {
  const projects = getProject();

  return (
    <div id="work">
      <Heading>My Works</Heading>

      <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3  my-10 md:my-20">
        <div className="grid grid-cols-1 gap-4">
          {projects.projects
            .sort((a, b) => a.order - b.order)
            .filter((_, i) => i % 3 === 0)
            .map((project) => (
              <ProjectCardV2 key={project.title} project={project} />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projects.projects
            .sort((a, b) => a.order - b.order)
            .filter((_, i) => i % 3 === 1)
            .map((project) => (
              <ProjectCardV2 key={project.title} project={project} />
            ))}
        </div>
        <div className="grid grid-cols-1 gap-4">
          {projects.projects
            .sort((a, b) => a.order - b.order)
            .filter((_, i) => i % 3 === 2)
            .map((project) => (
              <ProjectCardV2 key={project.title} project={project} />
            ))}
        </div>
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

const ProjectCardV2 = ({ project }: { project: ProjectsType }) => {
  return (
    <Card>
      <article className="relative w-full h-full p-4 md:p-6">
        <div className="flex items-center justify-between gap-2">
          <div className="text-xs text-zinc-100">
            <time dateTime={new Date(project.publishedAt).toISOString()}>
              {Intl.DateTimeFormat(undefined, {
                dateStyle: "medium",
              }).format(new Date(project.publishedAt))}
            </time>
          </div>
          <span className="flex items-center gap-1 text-xs text-zinc-500">
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
          </span>
        </div>

        <h2 id="featured-post" className="mt-4 text-2xl font-bold text-zinc-100 group-hover:text-white ">
          {project.title}
        </h2>

        
        <p className="mt-4 text-sm  duration-150 text-zinc-400 group-hover:text-zinc-300">{project.description}</p>
        <div className="space-x-2 mt-2">
          {project.tech?.map((tech) => (
            <Tag key={tech}>{tech}</Tag>
          ))}
        </div>
      </article>
    </Card>
  );
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
              <h3 className="text-xl font-mono font-bold  hover:text-rose-500 cursor-pointer transition">
                {project.title}
              </h3>
            </Link>
          ) : (
            <h3 className="text-xl font-mono font-bold  hover:text-rose-500 cursor-pointer transition">
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
