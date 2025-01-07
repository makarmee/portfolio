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
  <div
    className="card bg-neutral-800 flex gap-10 items-center p-12 rounded-lg w-4/5 justify-self-end"
    key={project.id}
  >
    <div className="relative -ml-[40%] h-44 w-72 shrink-0 overflow-hidden rounded-xl shadow-2xl before:absolute before:inset-0 before:z-10 before:bg-black/20 ">
      {/* <Image
        title={project.name}
        alt={project.name}
        src={project}
        width={1200}
        height={630}
        placeholder="blur"
        objectFit="cover"
        blurDataURL={imgSrc}
        quality={50}
        className="backdrop-blur-xl transition-all duration-300 lg:group-hover:scale-110"
      /> */}
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
            className="bg-gray-900 px-2 py-1 text-xs text-gray-500"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-auto flex w-fit items-center gap-4 p-2">
        <Link
          target="_blank"
          href={project.gitHubUrl}
          className="text-gray-500 hover:text-white"
        >
          <GithubIcon className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
        </Link>

        <Link
          href={project.url}
          className="text-gray-500 hover:text-white"
          target="_blank"
        >
          <GlobeIcon className="h-6 w-6 transition-all hover:scale-110 active:scale-90" />
        </Link>
      </div>
    </div>
  </div>
);

export default ProjectCard;
