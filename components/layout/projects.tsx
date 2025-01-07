import { ArrowRight } from "lucide-react";
import React from "react";
import ProjectCard from "./projectCard";

export default function Projects() {
  const featuredProjects = [
    {
      id: 1,
      name: "Amazon",
      description: "Amazon application made with Javascript.",
      url: "https://amazon-mahdi.vercel.app",
      thumbnail: "/thumbnails/amazon.png",
      gitHubUrl: "https://www.github.com/makarmee/amazon",
      tags: ["html", "css", "js"],
    },
    {
      id: 2,
      name: "Omnifood",
      description: "Omnifood app made with HTML and CSS.",
      url: "https://makarmee.github.io/Omnifood/",
      thumbnail: "/thumbnails/omnifood.png",
      gitHubUrl: "https://www.github.com/makarmee/omnifood",
      tags: ["html", "css"],
    },
    {
      id: 3,
      name: "Desserts",
      description: "Desserts Selling application made with ReactJs.",
      url: "https://desserts-mahdi.vercel.app",
      thumbnail: "/thumbnails/desserts.png",
      gitHubUrl: "https://www.github.com/makarmee/desserts",
      tags: ["react", "tailwindcss"],
    },
    {
      id: 4,
      name: "Book Store",
      url: "https://book-store-151.vercel.app",
      description: "a Book Selling site using Next.js and TailwindCss",
      thumbnail: "/thumbnails/book-store.png",
      gitHubUrl: "https://www.github.com/makarmee/bookstore",
      tags: ["next.js", "tailwindcss"],
    },
    {
      id: 5,
      name: "easy bank",
      description: "a Banking site made with ReactJS.",
      url: "https://easybank-151.vercel.app",
      thumbnail: "/thumbnails/easybank.png",
      gitHubUrl: "https://www.github.com/makarmee/easybank",
      tags: ["react", "tailwindcss"],
    },
    {
      id: 6,
      name: "room homepage",
      description: "a simple Landing Page made with ReactJS.",
      url: "https://room-homepage-mahdi.vercel.app",
      thumbnail: "/thumbnails/room-homepage.png",
      gitHubUrl: "https://www.github.com/makarmee/room-homepage",
      tags: ["react", "tailwindcss"],
    },
  ];

  return (
    <section
      className={
        "flex flex-col mt-24"
        // 'delay-100 duration-500 animate-in fade-in slide-in-from-bottom-4 fill-mode-backwards'
      }
    >
      <div className="flex w-full items-center justify-between">
        <h2 className="text-xl font-medium">Projects</h2>
      </div>
      <div className="grid grid-cols-1 gap-12 relative overflow-clip">
        {featuredProjects.map((item) => (
          <ProjectCard project={item} />
        ))}
      </div>
    </section>
  );
}
