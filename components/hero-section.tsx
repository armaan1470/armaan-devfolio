"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Enhanced grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]"></div>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-500/8 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-blue-400/6 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 text-center relative z-10 max-w-5xl">
        <div
          className={`mb-6 transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : ""
          }`}
        >
          <div className="inline-flex items-center px-2 py-1.5 bg-gradient-to-r from-blue-600/90 to-blue-700/90 backdrop-blur-sm rounded-full text-sm font-medium text-white shadow-lg border border-blue-500/20">
            <span className="text-xs font-bold mr-2 bg-white text-blue-600 px-2 py-0.5 rounded-full">
              New
            </span>
            Available for new projects
            <ArrowRight className="w-3 h-3 ml-2" />
          </div>
        </div>

        <div
          className={`mb-8 transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : ""
          }`}
          style={{ animationDelay: "0.2s" }}
        >
          <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            <span className="text-white">Building innovative</span>
            <br />
            <span className="text-blue-300 italic font-light">
              digital solutions
            </span>
          </h1>
        </div>

        <div
          className={`mb-8 transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : ""
          }`}
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <span className="text-lg md:text-xl text-gray-300">Hello, I'm</span>
            <span className="text-xl md:text-2xl font-bold text-white">
              Armaan Shaikh
            </span>
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-blue-400/30 shadow-lg">
              <img
                src="/armaan-shaikh-1.png"
                alt="Armaan Shaikh"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg md:text-xl text-white">
              a Fullstack Software Engineer
            </span>
          </div>
        </div>

        <div
          className={`mb-8 transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : ""
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-full px-6 py-3 font-medium shadow-lg shadow-blue-500/25 transition-all duration-300 hover:scale-105 border border-blue-500/20"
            >
              Let's Connect
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>

            <div className="flex items-center gap-2 px-4 py-2 bg-gray-800 border border-gray-600 rounded-full">
              <Mail className="w-4 h-4 text-gray-300" />
              <span className="text-white text-sm font-medium">
                armaandev1470@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div
          className={`transition-all duration-1000 ${
            isVisible ? "animate-slide-up" : ""
          }`}
          style={{ animationDelay: "0.8s" }}
        >
          <p className="text-base text-gray-400 max-w-xl mx-auto leading-relaxed">
            Specializing in React, Next.js, and modern web technologies to
            create exceptional user experiences.
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-500/10 via-blue-400/5 to-transparent rounded-t-[100%] blur-xl"></div>
      </div>
    </section>
  );
}
