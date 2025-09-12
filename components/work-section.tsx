"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  Github,
  ArrowUpRight,
  Calendar,
  Users,
  Star,
} from "lucide-react";

export function WorkSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

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

  const projects = [
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
      liveUrl: "https://resinwork.com",
      githubUrl: "#",
      year: "2024",
      status: "Live",
      metrics: {
        users: "2.5K",
        performance: "98/100",
        accessibility: "95/100",
      },
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
      status: "Live",
      metrics: {
        users: "1.2K",
        performance: "96/100",
        accessibility: "92/100",
      },
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
      status: "Live",
      metrics: { users: "800", performance: "94/100", accessibility: "90/100" },
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
      status: "Live",
      metrics: { users: "500", performance: "99/100", accessibility: "97/100" },
    },
  ];

  return (
    <section
      id="work"
      className="py-32 relative overflow-hidden bg-gradient-to-b from-slate-950/50 to-slate-950"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      <div className="absolute top-1/3 left-1/5 w-96 h-96 bg-orange-500/3 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/5 w-72 h-72 bg-orange-400/4 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-24 transition-all duration-1000 ${
              isVisible ? "animate-slide-up" : ""
            }`}
          >
            <div className="inline-flex items-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full text-sm font-medium text-orange-400 mb-8">
              <Star className="w-4 h-4 mr-2" />
              Selected Works
            </div>

            <h2 className="font-bold text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight">
              <span className="text-white">Crafted</span>
              <br />
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-500 font-light italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Experiences
              </span>
            </h2>

            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              A collection of digital experiences that blend innovative design
              with cutting-edge technology to create meaningful user
              interactions.
            </p>
          </div>

          {/* Projects Showcase */}
          <div className="space-y-32">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`transition-all duration-1000 ${
                  isVisible ? "animate-slide-up" : ""
                }`}
                style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="grid lg:grid-cols-12 gap-12 items-center">
                  {/* Project Info */}
                  <div
                    className={`lg:col-span-5 ${
                      index % 2 === 1 ? "lg:col-start-8" : ""
                    }`}
                  >
                    <div className="space-y-6">
                      {/* Project Number & Category */}
                      <div className="flex items-center gap-4 text-sm">
                        <span className="text-6xl font-bold text-orange-500/20 leading-none">
                          {project.id}
                        </span>
                        <div>
                          <div className="text-orange-400 font-medium mb-1">
                            {project.category}
                          </div>
                          <div className="flex items-center gap-3 text-gray-500">
                            <Calendar className="w-4 h-4" />
                            {project.year}
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                            {project.status}
                          </div>
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

                      {/* Metrics */}
                      <div className="grid grid-cols-3 gap-4 py-6 border-y border-gray-800">
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">
                            {project.metrics.users}
                          </div>
                          <div className="text-sm text-gray-400">
                            Monthly Users
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">
                            {project.metrics.performance}
                          </div>
                          <div className="text-sm text-gray-400">
                            Performance
                          </div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold text-white mb-1">
                            {project.metrics.accessibility}
                          </div>
                          <div className="text-sm text-gray-400">
                            Accessibility
                          </div>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs font-medium bg-gray-800/50 border border-gray-700 rounded-full text-gray-300 hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-400 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-4">
                        <Button
                          className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white border-0 rounded-full px-6 py-3 font-medium shadow-lg shadow-orange-500/25 transition-all duration-300 hover:scale-105"
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
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Source Code
                        </Button>
                      </div>
                    </div>
                  </div>

                  {/* Project Image */}
                  <div
                    className={`lg:col-span-7 ${
                      index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="group relative">
                      {/* Main Image Container */}
                      <div className="relative backdrop-blur-xl bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-3xl p-8 group-hover:scale-[1.02] transition-all duration-700 hover:border-orange-500/20">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-orange-500 rounded-full blur-sm opacity-60 group-hover:opacity-100 transition-opacity"></div>
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-orange-400/30 rounded-full blur-md group-hover:blur-lg transition-all"></div>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-orange-500/20 via-transparent to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-12">
                        <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
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
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className={`text-center mt-32 transition-all duration-1000 ${
              isVisible ? "animate-slide-up" : ""
            }`}
            style={{ animationDelay: "1s" }}
          >
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border border-orange-500/20 rounded-full">
              <span className="text-white font-medium">
                Interested in working together?
              </span>
              <Button
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 py-2 text-sm"
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
