"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function Home() {
  // const words = [
  //   {
  //     text: "Full",
  //     className:
  //       "text-left text-6xl lg:text-7xl xl:text-8xl font-bold text-orange-500 dark:text-orange-500",
  //   },
  //   {
  //     text: "Stack",
  //     className:
  //       "text-left text-6xl lg:text-7xl xl:text-8xl font-bold text-orange-500 dark:text-orange-500",
  //   },
  //   {
  //     text: "Developer.",
  //     className:
  //       "text-left text-6xl lg:text-7xl xl:text-8xl font-bold text-blue-500 dark:text-blue-500",
  //   },
  // ];
  return (
    <div className="p-6 max-w-[1200px] mx-auto">
      <ContainerScroll
        titleComponent={
          <div className="flex justify-center items-center shadow-2xl bg-yellow-400 rounded-full size-[300px] md:size-[550px] mx-auto overflow-hidden">
            <img
              className="h-full w-full object-fill"
              src="/profile.png"
              alt="hero_img"
            />
          </div>
        }
      >
        <div className="mt-[12vh]">
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
      </ContainerScroll>
    </div>
  );
}
