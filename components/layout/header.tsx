import React from "react";
import { Menu } from "./menu";
import { HomeIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="bg-neutral-800/50 backdrop-blur-3xl border-b border-neutral-700">
      <div className="max-w-screen-sm mx-auto flex justify-between items-center px-16 h-14">
        <HomeIcon className="w-5 h-5" />
        <Menu />
      </div>
    </header>
  );
}
