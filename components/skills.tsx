import Image from "next/image";
import React from "react";
import { Heading } from "./shared/heading";

export default function Skills() {
  const skills = [
    { id: 1, name: "html", icon: "/skills/html.svg" },
    { id: 2, name: "css", icon: "/skills/css.svg" },
    { id: 3, name: "bootstrap", icon: "/skills/bootstrap.svg" },
    { id: 8, name: "tailwind", icon: "/skills/tailwind.svg" },
    { id: 4, name: "javascript", icon: "/skills/javascript.svg" },
    { id: 5, name: "typescript", icon: "/skills/typescript.svg" },
    { id: 6, name: "react", icon: "/skills/react.svg" },
    { id: 7, name: "next", icon: "/skills/next.svg" },
    { id: 9, name: "git", icon: "/skills/git.svg" },
  ];

  return (
    <section className="mt-24" id="skills">
      <Heading name="My Skills" />
      <div className="grid grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            title={skill.name}
            key={skill.id}
            className="dark:bg-darkPrimary group flex origin-center transform items-center justify-center gap-4 rounded-sm border border-gray-300 p-4 dark:border-neutral-700 hover:dark:bg-darkSecondary sm:justify-start md:origin-top"
          >
            <div className="pointer-events-none relative select-none transition group-hover:scale-110 sm:group-hover:scale-100">
              <div className="relative w-8 h-8">
                <Image fill src={skill.icon} alt="icon" className="block" />
              </div>
            </div>
            <p className="pointer-events-none hidden select-none text-sm font-semibold sm:inline-flex md:text-base">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
