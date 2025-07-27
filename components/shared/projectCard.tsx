import { GithubIcon, GlobeIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectProps {
  id: number;
  name: string;
  description: string;
  url: string;
  thumbnail: string;
  gitHubUrl: string;
  tags: string[];
}

const ProjectCard = ({ project }: { project: ProjectProps }) => (
  <div className="card bg-neutral-800 flex flex-col sm:flex-row gap-10 items-center px-6 pb-6 sm:p-10 rounded-lg w-4/5 justify-self-center sm:justify-self-end">
    <div className="relative sm:-ml-[40%] ml-0 h-44 w-72 shrink-0 sm:mt-0 -mt-16 overflow-hidden rounded-xl shadow-2xl before:absolute before:inset-0 before:z-10 before:bg-black/20">
      <Image
        fill
        className="block object-cover"
        alt="thumbnail"
        src={project.thumbnail}
      />
    </div>

    <div className="flex flex-col w-3/4 justify-start gap-3">
      <h1 className="font-bold capitalize text-neutral-200">{project.name}</h1>
      <p className="truncate-2 text-sm text-neutral-400">
        {project.description}
      </p>

      <div className="flex flex-wrap items-center gap-1">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-neutral-900 rounded-lg border-neutral-700 border px-2 py-1 text-xs text-neutral-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex w-fit items-center gap-4 p-2">
        <Link
          target="_blank"
          href={project.gitHubUrl}
          className="text-neutral-500 hover:text-white"
        >
          <GithubIcon className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
        </Link>

        <Link
          href={project.url}
          className="text-neutral-500 hover:text-white"
          target="_blank"
        >
          <GlobeIcon className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
        </Link>
      </div>
    </div>
  </div>
);

export default ProjectCard;
