"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowUpRight, Star } from "lucide-react";

// Tech Icons (can be imported as SVG components or from a library like react-icons)
import {
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiFramer,
  SiGreensock,
} from "react-icons/si";

// Define an interface for the project data structure for type safety
interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl: string;
  year: string;
}

export function WorkSection(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("work");
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  // Map of technology names to their icons
  const techIcons: { [key: string]: JSX.Element | null } = {
    "Next.js": <SiNextdotjs className="w-4 h-4" />,
    "Tailwind CSS": <SiTailwindcss className="w-4 h-4" />,
    "React.js": <SiReact className="w-4 h-4" />,
    ShadCN: null, // No specific icon for ShadCN, can be a custom one if available
    GSAP: <SiGreensock className="w-4 h-4" />,
    "Framer Motion": <SiFramer className="w-4 h-4" />,
    CSS: null,
    "Responsive Design": null,
    "Form Validation": null,
  };

  const projects: Project[] = [
    {
      id: "01",
      title: "Resin Work",
      category: "Animation Showcase",
      description:
        "Animation-heavy showcase site built with modern web technologies, featuring smooth GSAP animations and responsive design.",
      longDescription:
        "A cutting-edge portfolio website that pushes the boundaries of web animations. Built with performance in mind, featuring complex GSAP animations, scroll-triggered effects, and seamless user interactions.",
      image: "/projects/resinwork-preview.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "ShadCN",
        "GSAP",
        "Framer Motion",
      ],
      liveUrl: "https://resinwork.vercel.app",
      githubUrl: "#",
      year: "2024",
    },
    {
      id: "02",
      title: "Philomathean Coaching",
      category: "Educational Platform",
      description:
        "Professional showcase website for a coaching institute with landing page and comprehensive course information.",
      longDescription:
        "A comprehensive educational platform designed to enhance the learning experience. Features interactive course catalogs, student management systems, and responsive design across all devices.",
      image: "/projects/philomathean-preview.png",
      technologies: ["React.js", "CSS", "Responsive Design"],
      liveUrl: "https://philomathean.vercel.app",
      githubUrl: "#",
      year: "2024",
    },
    {
      id: "03",
      title: "Green Energy Optimizer",
      category: "Sustainability Tool",
      description:
        "Feasibility checker for solar & wind energy solutions with interactive forms and complex calculations.",
      longDescription:
        "An innovative tool for sustainable energy planning. Features complex calculation engines, interactive forms, and data visualization to help users make informed decisions about renewable energy investments.",
      image: "/projects/green-energy-optimizer-preview.png",
      technologies: ["React.js", "Tailwind CSS", "ShadCN", "Form Validation"],
      liveUrl: "https://green-enery-optimizer-v3.vercel.app",
      githubUrl: "#",
      year: "2024",
    },
    {
      id: "04",
      title: "Developer Portfolio",
      category: "Personal Brand",
      description:
        "Personal portfolio website showcasing projects and skills with modern design and smooth animations.",
      longDescription:
        "A personal branding showcase featuring modern design principles, smooth animations, and an intuitive user experience. Built to demonstrate technical skills and creative vision.",
      image: "/projects/armaan-portfolio-preview.png",
      technologies: ["Next.js", "Tailwind CSS", "ShadCN", "Framer Motion"],
      liveUrl: "https://armaandev.vercel.app",
      githubUrl: "#",
      year: "2024",
    },
  ];

  return (
    <section
      id="work"
      className="py-24 md:py-32 relative overflow-hidden bg-slate-950/70"
    >
      {/* Subtle Background Gradients/Effects */}
      <div className="absolute inset-0 bg-white/[0.01] pointer-events-none [mask-image:radial-gradient(ellipse_at_center,black_10%,transparent_80%)]"></div>
      <div className="absolute -top-1/3 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl opacity-70"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
              isVisible ? "animate-slide-up" : ""
            }`}
          >
            <div className="inline-flex items-center px-4 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-sm font-medium text-gray-400 mb-6">
              <Star className="w-4 h-4 mr-2 text-indigo-400" />
              Selected Works
            </div>

            <h2 className="font-bold text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight">
              <span className="text-white">Crafted</span>
              <br />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 font-light italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Experiences
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of digital experiences that blend innovative design
              with cutting-edge technology to create meaningful user
              interactions.
            </p>
          </div>

          {/* Projects Showcase */}
          <div className="space-y-24 md:space-y-32">
            {projects.map((project: Project, index: number) => (
              <div
                key={project.id}
                className={`transition-all duration-1000 ${
                  isVisible ? "animate-slide-up" : ""
                }`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div
                  className={`grid lg:grid-cols-12 gap-12 items-center ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Project Image */}
                  <div
                    className={`lg:col-span-7 transition-all duration-700 ${
                      index % 2 === 1 ? "lg:col-start-6 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="group relative rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        width={1280}
                        height={960}
                        layout="responsive"
                        className="transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                        <Button
                          size="lg"
                          className="bg-white text-gray-900 hover:bg-gray-100 rounded-full px-8 py-3 font-semibold shadow-xl"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink className="w-5 h-5 mr-2" />
                            Open Project
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div
                    className={`lg:col-span-5 ${
                      index % 2 === 1 ? "lg:col-start-1" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Project Number & Category */}
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-6xl font-bold text-gray-700 leading-none">
                          {project.id}
                        </span>
                        <div>
                          <div className="text-indigo-400 font-medium mb-1">
                            {project.category}
                          </div>
                          <div className="text-gray-500">{project.year}</div>
                        </div>
                      </div>

                      {/* Title */}
                      <h3 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-300 text-lg leading-relaxed mb-6">
                        {project.longDescription}
                      </p>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech: string) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-3 py-1 text-xs font-medium bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 transition-all duration-300 hover:bg-indigo-500/10 hover:border-indigo-500/30 hover:text-indigo-400"
                          >
                            {techIcons[tech]}
                            <span className={techIcons[tech] ? "ml-2" : ""}>
                              {tech}
                            </span>
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button
                          className="group bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white border-0 rounded-full px-6 py-3 font-medium shadow-lg shadow-indigo-500/25 transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            View Live
                            <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        </Button>

                        <Button
                          variant="outline"
                          className="bg-gray-900/50 hover:bg-gray-800/50 border-gray-700 hover:border-gray-600 text-white rounded-full px-6 py-3 backdrop-blur-sm"
                          asChild
                        >
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" />
                            Source Code
                          </a>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center mt-24 md:mt-32 transition-all duration-1000 ${
              isVisible ? "animate-slide-up" : ""
            }`}
            style={{ animationDelay: "1s" }}
          >
            <div className="inline-flex items-center gap-4 px-4 py-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 rounded-full">
              <span className="text-white font-medium">
                Interested in working together?
              </span>
              <Button
                className="bg-indigo-500 hover:bg-indigo-600 text-white rounded-full px-6 py-2 text-sm"
                asChild
              >
                <a href="#contact">
                  Get in touch
                  <ArrowUpRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
