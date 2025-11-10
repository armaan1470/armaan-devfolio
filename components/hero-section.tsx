"use client";

import { Reveal } from "@/components/animations/reveal";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      <div className="container mx-auto px-6 text-center relative max-w-5xl">
        {/* Tag */}
        <Reveal delay={0.1}>
          <a
            href="#contact"
            className="inline-flex items-center px-2 py-1.5 bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-sm rounded-full text-sm font-medium text-white shadow-lg border border-blue-500/20 mb-6"
          >
            <span className="text-xs font-bold mr-2 bg-white text-blue-600 px-2 py-0.5 rounded-full">
              New
            </span>
            Available for new projects
            <ArrowRight className="w-3 h-3 ml-2" />
          </a>
        </Reveal>

        {/* Headline + Intro */}
        <Reveal delay={0.25}>
          <div className="mb-8">
            <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
              <span className="text-white">Building innovative</span>
              <br />
              <span className="text-blue-300 italic font-light">
                digital solutions
              </span>
            </h1>

            <div className="flex items-center justify-center gap-3 flex-wrap">
              <span className="text-lg md:text-xl text-gray-300">
                Hello, I'm
              </span>
              <span className="text-xl md:text-2xl font-bold text-white">
                Armaan Shaikh
              </span>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-blue-400/30 shadow-lg">
                <Image
                  src="/armaan-shaikh-2.png"
                  alt="Armaan Shaikh"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-lg md:text-xl text-white">
                a Fullstack Software Engineer
              </span>
            </div>
          </div>
        </Reveal>

        {/* Buttons + Subtext */}
        <Reveal delay={0.45}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a href="#contact">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full px-6 py-3 font-medium shadow-lg shadow-blue-500/25 transition-transform duration-300 hover:scale-105 border border-blue-500/20"
              >
                Let's Connect
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </a>

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-full">
              <Mail className="w-4 h-4 text-gray-300" />
              <span className="text-white text-sm font-medium">
                armaandev1470@gmail.com
              </span>
            </div>
          </div>

          <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Specializing in React, Next.js, and modern web technologies to
            create exceptional user experiences.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
