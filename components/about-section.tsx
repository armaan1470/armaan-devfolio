"use client";

import { Reveal } from "@/components/animations/reveal";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export function AboutSection() {
  const skills = [
    { name: "React", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs color="white" /> },
    { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
    { name: "Node.js", icon: <SiNodedotjs color="#5FA04E" /> },
    { name: "Express.js", icon: <SiExpress color="white" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
    { name: "Tailwind", icon: <SiTailwindcss color="#06B6D4" /> },
    { name: "Prisma", icon: <SiPrisma color="white" /> },
    { name: "Docker", icon: <SiDocker color="#2496ED" /> },
    {
      name: "AWS",
      icon: (
        <svg width="24" height="24" viewBox="0 0 16 16" fill="none">
          <path
            fill="white"
            d="M4.51 7.687c0 .197.02.357.058.475.042.117.096.245.17.384a.233.233 0 01.037.123c0 .053-.032.107-.1.16l-.336.224a.255.255 0 01-.138.048c-.054 0-.107-.026-.16-.074a1.652 1.652 0 01-.192-.251 4.137 4.137 0 01-.165-.315c-.415.491-.936.737-1.564.737-.447 0-.804-.129-1.064-.385-.261-.256-.394-.598-.394-1.025 0-.454.16-.822.484-1.1.325-.278.756-.416 1.304-.416.18 0 .367.016.564.042.197.027.4.07.612.118v-.39c0-.406-.085-.689-.25-.854-.17-.166-.458-.246-.868-.246-.186 0-.377.022-.574.07a4.23 4.23 0 00-.575.181 1.525 1.525 0 01-.186.07.326.326 0 01-.085.016c-.075 0-.112-.054-.112-.166v-.262c0-.085.01-.15.037-.186a.399.399 0 01.15-.113c.185-.096.409-.176.67-.24.26-.07.537-.101.83-.101.633 0 1.096.144 1.394.432.293.288.442.726.442 1.314v1.73h.01z"
          />
        </svg>
      ),
    },
    { name: "Git", icon: <SiGit color="#F05032" /> },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <Reveal delay={0.1}>
            <div className="mb-20">
              <p className="text-sm text-gray-400 mb-4 tracking-wider uppercase">
                KNOW ABOUT ME
              </p>
              <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
                Full-Stack Developer and <br />a little bit of{" "}
                <em className="italic text-pink-400">everything</em>
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              {/* Story Section */}
              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p>
                  I'm Armaan Shaikh, a proactive full-stack developer passionate
                  about creating dynamic web experiences. From frontend to
                  backend, I thrive on solving complex problems with clean,
                  efficient code. My expertise spans React, Next.js, and
                  Node.js, and I'm always eager to learn more.
                </p>
                <p>
                  When I'm not immersed in work, I'm exploring new ideas and
                  staying curious. Life's about balance, and I love embracing
                  every part of it.
                </p>
                <p>
                  I believe in waking up each day eager to make a difference!
                </p>

                {/* Social Links & Work Experience */}
                <div className="flex gap-4 pt-4 justify-center lg:justify-start">
                  <a
                    href="https://www.linkedin.com/in/armaan1470/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://github.com/armaan1470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    GitHub
                  </a>
                  <a
                    href="https://twitter.com/armaan1470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Twitter
                  </a>
                </div>
                <div className="pt-8">
                  <a
                    href="#work"
                    className="inline-flex items-center text-white hover:text-gray-300 transition-colors font-medium"
                  >
                    Work Experience
                  </a>
                </div>
              </div>

              {/* 3D Logo */}
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-80 h-80 rounded-3xl bg-gradient-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-xl border border-white/10 flex items-center justify-center overflow-hidden">
                    <img
                      src="/armaan-shaikh-1.png"
                      alt="Profile picture of Armaan Shaikh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-xl"></div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Skills Section */}
          <Reveal delay={0.4}>
            <div>
              <div className="text-center mb-12">
                <p className="text-sm text-gray-400 mb-4 tracking-wider uppercase">
                  MY SKILLS
                </p>
                <h3 className="text-4xl md:text-5xl font-bold text-white">
                  The Secret <em className="italic text-pink-400">Sauce</em>
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-20">
                {skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative px-3 py-2 bg-gradient-to-r from-gray-800/50 to-gray-700/50 border border-gray-600/50 rounded-lg hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20"
                  >
                    <div className="flex items-center gap-2">
                      <div className="text-blue-400 group-hover:text-blue-300 transition-colors">
                        {skill.icon}
                      </div>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.name}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
