import React from "react";
import { Menu } from "./menu";

export default function Header() {
  return (
    <header className="bg-neutral-800/50 backdrop-blur-3xl backdrop-brightness-75 border-b border-neutral-700 sticky w-full top-0 z-20">
      <div className="max-w-screen-sm mx-auto flex justify-between items-center h-14 px-8 md:px-0">
        <h1 className="mb-2 text-2xl font-black pt-2">M</h1>
        <Menu />
      </div>
    </header>
  );
}
