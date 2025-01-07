import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <section className="my-24">
      <div id="heading" className="px-6 py-12 sm:py-16 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <div className="relative mx-auto mb-6 h-32 w-32 rounded-full shadow-md ring-1 ring-gray-300 dark:ring-zinc-700">
            {/* <Image src="" alt="avatar" fill className="object-cover" /> */}
          </div>
          <h6 className="mb-2 font-semibold">Welcome to my portfolio</h6>
          <h1 className="mb-2 text-6xl font-black">Hello, I&apos;m Mahdi.</h1>
          <h4 className="mt-8">
            I’m a Frontend developer who loves building user-friendly and pixel
            perfect websites and web applications.
          </h4>
        </div>
      </div>
    </section>
  );
}
