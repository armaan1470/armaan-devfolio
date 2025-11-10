import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-16 bg-black text-gray-400">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col lg:flex-row justify-between items-center lg:items-start gap-12 mb-12">
          {/* Brand and Description */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center gap-3 mb-4">
              <a
                className="size-10 md:size-12 p-1 drop-shadow-xl delay-200  flex-shrink-0 lg:block"
                aria-label="Homepage"
                href="#home"
              >
                <img
                  src="/logo/brand-logo.png"
                  alt="Logo"
                  className="h-full w-full object-contain"
                />
              </a>
            </div>
            <p className="max-w-xs text-sm leading-relaxed">
              I'm Armaan - a full-stack developer, freelancer & problem solver.
              Thanks for checking out my site!
            </p>
          </div>

          {/* Navigation and Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-12 md:gap-24 text-center lg:text-left">
            <div>
              <h4 className="text-white font-semibold mb-4 text-base">
                General
              </h4>
              <div className="space-y-3">
                <a
                  href="#home"
                  className="block text-sm hover:text-white transition-colors"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block text-sm hover:text-white transition-colors"
                >
                  About
                </a>
                <a
                  href="#work"
                  className="block text-sm hover:text-white transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="block text-sm hover:text-white transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-base">
                Socials
              </h4>
              <div className="space-y-3">
                <a
                  href="https://www.linkedin.com/in/armaan1470/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center lg:justify-start items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
                <a
                  href="https://github.com/armaan1470"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex justify-center lg:justify-start items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
                <a
                  href="mailto:armaandev1470@gmail.com"
                  className="flex justify-center lg:justify-start items-center gap-2 text-sm hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
            <div className="text-sm text-gray-500">
              © {currentYear} Armaan Shaikh. All Rights Reserved.
            </div>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-gray-500 hover:text-white transition-colors"
              >
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
