"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { cn } from "@/lib/utils";
import { LanguagesIcon, Link, Menu, X } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "@radix-ui/react-context-menu";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("#home");

  // update active when hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setActive(window.location.hash || "#home");
    };

    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // run once on mount

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMobileMenuOpen && !target.closest(".mobile-menu-container")) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleKeyDown);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu when navigating
  const handleNavClick = (href: string) => {
    setActive(href);
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="relative z-50">
      <nav className="fixed top-2.5 left-1/2 flex w-full max-w-7xl -translate-x-1/2 items-center justify-between px-4 py-1.5 md:top-4 md:px-6">
        {/* Logo */}
        <a
          className="size-10 p-1 drop-shadow-xl delay-200 md:size-12 flex-shrink-0 lg:block"
          aria-label="Homepage"
          href="#home"
          onClick={() => handleNavClick("#home")}
        >
          <img
            src="/logo/brand-logo.png"
            alt="Logo"
            className="h-full w-full object-contain"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="relative hidden md:flex justify-center mx-auto">
          <ul
            className={cn(
              "relative flex min-h-10 items-center justify-center rounded-[22px] border border-black/10 bg-black/30 px-1 py-1 shadow-xl backdrop-blur-2xl dark:border-white/10 dark:bg-white/10 transition-all duration-400",
              isScrolled ? "scale-95" : "scale-100"
            )}
          >
            <div className="flex items-center opacity-100 blur-0 gap-1">
              {navItems.map((item) => (
                <li key={item.name} className="relative list-none">
                  <a
                    href={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block text-sm font-light text-gray-300 hover:text-white transition-all duration-200 relative group px-4 py-1.5 rounded-full hover:bg-gray-100/10"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-white to-gray-100 transition-all duration-300 group-hover:w-6 rounded-full"></span>
                  </a>
                  {/* only render glow if active */}
                  {active === item.href && (
                    <span className="absolute inset-0 -z-10 w-full rounded-full bg-black/15 dark:bg-white/10">
                      <div className="bg-white absolute -top-[9px] left-1/2 h-1 w-8 -translate-x-1/2 rounded-t-full">
                        <div className="bg-white/20 absolute -top-2 -left-2 h-6 w-12 rounded-full blur-md"></div>
                        <div className="bg-white/20 absolute -top-1 h-6 w-8 rounded-full blur-md"></div>
                        <div className="bg-white/20 absolute top-0 left-2 h-4 w-4 rounded-full blur-sm"></div>
                      </div>
                    </span>
                  )}
                </li>
              ))}

              <li className="ml-1 list-none">
                <Button className="items-center justify-center gap-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([className*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shadow-xs has-[>svg]:px-3 relative inline-block h-full cursor-pointer rounded-full bg-white/10 px-4 py-1.5 text-sm font-light whitespace-nowrap text-white transition-all duration-300 hover:bg-white/15 hover:text-white/90 dark:text-white/70">
                  Book a Call
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 h-1/3 w-full -translate-x-4 rounded-full bg-white opacity-30 blur-sm"
                  ></div>
                </Button>
              </li>
            </div>
          </ul>
        </div>

        {/* Desktop Avatar */}
        <div className="hidden items-center gap-2 delay-200 lg:flex">
          <div className="relative">
            <Avatar className="size-8 outline-2 outline-gray-400 outline-offset-2 shadow-md cursor-pointer hover:scale-105 transition-all duration-200">
              <AvatarImage src="/github-avatar.jpeg" alt="Armaan Shaikh" />
              <AvatarFallback>AS</AvatarFallback>
            </Avatar>
            <span className="border-background absolute -end-0.5 -bottom-0.5 size-3 rounded-full border-2 bg-emerald-500">
              <span className="sr-only">Online</span>
            </span>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-white/10"
              >
                <Menu className="size-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent
              side="top"
              className="w-full bg-black/10 backdrop-blur-2xl border-b border-white/20 text-white shadow-2xl"
            >
              <SheetHeader className="border-b border-white/10 px-6 py-5">
                <SheetTitle className="sr-only">Resin Work</SheetTitle>
                <div className="flex items-center justify-start">
                  <a
                    className="size-8 p-1 drop-shadow-xl delay-200 md:size-9 flex-shrink-0 lg:block"
                    aria-label="Homepage"
                    href="#home"
                    onClick={() => handleNavClick("#home")}
                  >
                    <img
                      src="/logo/brand-logo.png"
                      alt="Logo"
                      className="h-full w-full object-contain"
                    />
                  </a>
                </div>
              </SheetHeader>
              <div className="px-2 py-8 overflow-y-scroll">
                <div className="space-y-2 mb-8">
                  <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider px-4 mb-4">
                    Navigation
                  </h3>
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center px-4 py-4 text-lg font-medium text-white hover:text-brand hover:bg-white/10 rounded-xl transition-all duration-200 group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {item.name}
                      </span>
                    </a>
                  ))}
                </div>

                <Separator className="my-8 bg-white/20" />
                <div className="px-4">
                  <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">
                    Get Started
                  </h3>
                  <Button className="w-full bg-white hover:bg-brand/90 text-black font-semibold py-6 px-4 rounded-md transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98]">
                    Book a Call
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
