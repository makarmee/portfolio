import React from "react";

export function Heading({ name }: { name: string }) {
  return (
    <div className="p-2 w-full text-center my-10">
      <h1 className="text-4xl font-black">{name}</h1>
    </div>
  );
}
