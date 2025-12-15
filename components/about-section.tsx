"use client";

import { Reveal } from "@/components/animations/reveal";
import { ChevronRight } from "lucide-react";
import {
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiLinkedin,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiX,
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="16"
          height="16"
          viewBox="0,0,256,256"
        >
          <g
            fill="none"
            fill-rule="nonzero"
            stroke="none"
            stroke-width="1"
            stroke-linecap="butt"
            stroke-linejoin="miter"
            stroke-miterlimit="10"
            stroke-dasharray=""
            stroke-dashoffset="0"
            font-family="none"
            font-weight="none"
            font-size="none"
            text-anchor="none"
          >
            <g transform="scale(5.33333,5.33333)">
              <path
                d="M13.527,21.529c0,0.597 0.064,1.08 0.176,1.435c0.128,0.355 0.287,0.742 0.511,1.161c0.08,0.129 0.112,0.258 0.112,0.371c0,0.161 -0.096,0.322 -0.303,0.484l-1.006,0.677c-0.144,0.097 -0.287,0.145 -0.415,0.145c-0.16,0 -0.319,-0.081 -0.479,-0.226c-0.224,-0.242 -0.415,-0.5 -0.575,-0.758c-0.16,-0.274 -0.319,-0.58 -0.495,-0.951c-1.245,1.483 -2.81,2.225 -4.694,2.225c-1.341,0 -2.411,-0.387 -3.193,-1.161c-0.782,-0.774 -1.181,-1.806 -1.181,-3.096c0,-1.37 0.479,-2.483 1.453,-3.321c0.974,-0.838 2.267,-1.258 3.911,-1.258c0.543,0 1.102,0.048 1.692,0.129c0.59,0.081 1.197,0.21 1.836,0.355v-1.177c0,-1.225 -0.255,-2.08 -0.75,-2.58c-0.511,-0.5 -1.373,-0.742 -2.602,-0.742c-0.559,0 -1.133,0.064 -1.724,0.21c-0.591,0.145 -1.165,0.322 -1.724,0.548c-0.255,0.113 -0.447,0.177 -0.559,0.21c-0.112,0.032 -0.192,0.048 -0.255,0.048c-0.224,0 -0.335,-0.161 -0.335,-0.5v-0.79c0,-0.258 0.032,-0.451 0.112,-0.564c0.08,-0.113 0.224,-0.226 0.447,-0.339c0.559,-0.29 1.229,-0.532 2.012,-0.726c0.782,-0.21 1.612,-0.306 2.49,-0.306c1.9,0 3.289,0.435 4.183,1.306c0.878,0.871 1.325,2.193 1.325,3.966v5.224h0.03zM7.045,23.979c0.527,0 1.07,-0.097 1.644,-0.29c0.575,-0.193 1.086,-0.548 1.517,-1.032c0.255,-0.306 0.447,-0.645 0.543,-1.032c0.096,-0.387 0.16,-0.855 0.16,-1.403v-0.677c-0.463,-0.113 -0.958,-0.21 -1.469,-0.274c-0.511,-0.064 -1.006,-0.097 -1.501,-0.097c-1.07,0 -1.852,0.21 -2.379,0.645c-0.527,0.435 -0.782,1.048 -0.782,1.854c0,0.758 0.192,1.322 0.591,1.709c0.383,0.404 0.942,0.597 1.676,0.597zM19.865,25.721c-0.287,0 -0.479,-0.048 -0.607,-0.161c-0.128,-0.097 -0.239,-0.322 -0.335,-0.629l-3.752,-12.463c-0.096,-0.322 -0.144,-0.532 -0.144,-0.645c0,-0.258 0.128,-0.403 0.383,-0.403h1.565c0.303,0 0.511,0.048 0.623,0.161c0.128,0.097 0.223,0.322 0.319,0.629l2.682,10.674l2.49,-10.674c0.08,-0.322 0.176,-0.532 0.303,-0.629c0.128,-0.097 0.351,-0.161 0.639,-0.161h1.277c0.303,0 0.511,0.048 0.639,0.161c0.128,0.097 0.239,0.322 0.303,0.629l2.522,10.803l2.762,-10.803c0.096,-0.322 0.208,-0.532 0.319,-0.629c0.128,-0.097 0.335,-0.161 0.623,-0.161h1.485c0.255,0 0.399,0.129 0.399,0.403c0,0.081 -0.016,0.161 -0.032,0.258c-0.016,0.097 -0.048,0.226 -0.112,0.403l-3.847,12.463c-0.096,0.322 -0.208,0.532 -0.335,0.629c-0.127,0.097 -0.335,0.161 -0.607,0.161h-1.373c-0.303,0 -0.511,-0.048 -0.639,-0.161c-0.128,-0.113 -0.239,-0.322 -0.303,-0.645l-2.474,-10.4l-2.458,10.384c-0.08,0.322 -0.176,0.532 -0.303,0.645c-0.128,0.113 -0.351,0.161 -0.639,0.161zM40.379,26.156c-0.83,0 -1.66,-0.097 -2.458,-0.29c-0.798,-0.193 -1.421,-0.403 -1.836,-0.645c-0.255,-0.145 -0.431,-0.306 -0.495,-0.451c-0.064,-0.145 -0.096,-0.306 -0.096,-0.451v-0.822c0,-0.339 0.128,-0.5 0.367,-0.5c0.096,0 0.192,0.016 0.287,0.048c0.096,0.032 0.239,0.097 0.399,0.161c0.543,0.242 1.133,0.435 1.756,0.564c0.639,0.129 1.261,0.193 1.9,0.193c1.006,0 1.788,-0.177 2.331,-0.532c0.543,-0.355 0.83,-0.871 0.83,-1.532c0,-0.451 -0.144,-0.822 -0.431,-1.129c-0.287,-0.306 -0.83,-0.58 -1.612,-0.838l-2.315,-0.726c-1.165,-0.371 -2.027,-0.919 -2.554,-1.645c-0.527,-0.709 -0.798,-1.499 -0.798,-2.338c0,-0.677 0.144,-1.274 0.431,-1.79c0.287,-0.516 0.671,-0.967 1.149,-1.322c0.479,-0.371 1.022,-0.645 1.66,-0.838c0.639,-0.192 1.309,-0.273 2.012,-0.273c0.351,0 0.718,0.016 1.07,0.064c0.367,0.048 0.702,0.113 1.038,0.177c0.319,0.081 0.623,0.161 0.91,0.258c0.287,0.097 0.511,0.193 0.671,0.29c0.224,0.129 0.383,0.258 0.479,0.403c0.096,0.129 0.144,0.306 0.144,0.532v0.758c0,0.339 -0.128,0.516 -0.367,0.516c-0.128,0 -0.335,-0.064 -0.607,-0.193c-0.91,-0.419 -1.932,-0.629 -3.065,-0.629c-0.91,0 -1.628,0.145 -2.123,0.451c-0.495,0.306 -0.75,0.774 -0.75,1.435c0,0.451 0.16,0.838 0.479,1.145c0.319,0.306 0.91,0.613 1.756,0.887l2.267,0.726c1.149,0.371 1.98,0.887 2.474,1.548c0.494,0.661 0.734,1.419 0.734,2.257c0,0.693 -0.144,1.322 -0.415,1.87c-0.287,0.548 -0.671,1.032 -1.165,1.419c-0.495,0.403 -1.086,0.693 -1.772,0.903c-0.721,0.226 -1.471,0.339 -2.285,0.339z"
                fill="#ffffff"
              ></path>
              <path
                d="M43.396,33.992c-5.252,3.918 -12.883,5.998 -19.445,5.998c-9.195,0 -17.481,-3.434 -23.739,-9.142c-0.495,-0.451 -0.048,-1.064 0.543,-0.709c6.769,3.966 15.118,6.369 23.755,6.369c5.827,0 12.229,-1.225 18.119,-3.741c0.879,-0.403 1.629,0.58 0.767,1.225zM45.583,31.477c-0.671,-0.871 -4.438,-0.419 -6.146,-0.21c-0.511,0.064 -0.591,-0.387 -0.128,-0.726c3.001,-2.128 7.934,-1.516 8.509,-0.806c0.575,0.726 -0.16,5.708 -2.969,8.094c-0.431,0.371 -0.846,0.177 -0.655,-0.306c0.639,-1.596 2.06,-5.192 1.389,-6.046z"
                fill="#ff9900"
              ></path>
            </g>
          </g>
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
              {/* 3D Logo */}
              <div className="md:order-2 flex justify-center">
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

              {/* Story Section */}
              <div className="md:order-1 space-y-6 text-gray-300 leading-relaxed">
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
                    <SiLinkedin className="size-5" />
                  </a>
                  <a
                    href="https://github.com/armaan1470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <SiGithub className="size-5" />
                  </a>
                  <a
                    href="https://twitter.com/armaan1470"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <SiX className="size-5" />
                  </a>
                </div>
                <a href="#work" className="pt-4 flex items-center gap-1">
                  <div className="inline-flex items-center text-white hover:text-gray-300 transition-colors font-medium">
                    <span>Work Experience</span>
                    <ChevronRight className="size-5" />
                  </div>
                </a>
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
