"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function LandingPage() {
  return (
    <div className="max-w-[1200px] mx-auto">
      <section
        id="home"
        className="flex flex-col-reverse md:flex-row gap-8 justify-between items-center min-h-screen px-4 pt-24 pb-4"
      >
        <div className="flex-1 text-center md:text-left">
          <p className="text-2xl font-bold">Hey there! 👋, I am</p>
          <h1 className="text-6xl lg:text-7xl xl:text-8xl font-bold">
            Armaan Shaikh.
          </h1>
          <h1 className="mt-2 text-6xl lg:text-7xl xl:text-8xl font-bold">
            <span className="text-orange-500">Full Stack </span>
            <span className="text-blue-500">Developer</span>
            {/* <TypewriterEffect className="text-left" words={words} /> */}
          </h1>
        </div>

        <div className="md:flex-1 flex justify-center items-center shadow-2xl bg-yellow-400 rounded-full  mx-auto overflow-hidden">
          <img
            className="size-[300px] md:size-full object-fill"
            src="/profile-transformed.png"
            alt="hero_img"
          />
        </div>
      </section>
      <section
        id="aboutme"
        className="flex justify-center items-center min-h-screen bg-yellow-500"
      >
        <h1>This is About Me Section</h1>
      </section>
      <section
        id="projects"
        className="flex justify-center items-center min-h-screen bg-blue-500"
      >
        <h1>This is Projects Section</h1>
      </section>
      <section
        id="resume"
        className="flex justify-center items-center min-h-screen bg-green-500"
      >
        <h1>This is Resume Section</h1>
      </section>
      <section
        id="contact"
        className="flex justify-center items-center min-h-screen bg-orange-500"
      >
        <h1>This is Contact Section</h1>
      </section>
    </div>
  );
}
