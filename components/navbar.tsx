"use client";
import { useState, useEffect } from "react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetTitle,
  SheetDescription,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { JSX, SVGProps } from "react";
import { Switch } from "./ui/switch";
import { useTheme } from "next-themes";

export function Navbar() {
  const { theme, setTheme, systemTheme } = useTheme(); // use systemTheme
  const [mounted, setMounted] = useState(false); // Ensure we're on the client

  useEffect(() => {
    setMounted(true); // Component is mounted
  }, []);

  const handleToggleMode = () => {
    if (theme === "dark" || (theme === "system" && systemTheme === "dark")) {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };

  return (
    <header className="bg-main dark:bg-dark-main sticky top-0 z-50 h-20 w-full px-4 md:px-6">
      <Sheet>
        <SheetTrigger className="absolute right-6 top-5" asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="top">
          <div className="sr-only">
            <SheetTitle>Armaan.dev</SheetTitle>
            <SheetDescription>Armaan.dev</SheetDescription>
          </div>
          <Link href="/home" className="mr-6">
            <div className="text-3xl font-bold">Armaan.dev</div>
          </Link>
          <div className="grid gap-6 py-8">
            <SheetClose asChild>
              <Link className="text-xl font-semibold" href="/aboutme">
                About Me
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link className="text-xl font-semibold" href="/projects">
                Projects
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link className="text-xl font-semibold" href="/resume">
                Resume
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link className="text-xl font-semibold" href="/contact">
                Contact
              </Link>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex justify-between shrink-0 items-center max-w-[1200px] mx-auto h-full">
        <Link href="/home" className="mr-6" prefetch={false}>
          <div className="text-3xl font-bold">
            <span>Armaan</span>
            <span>.</span>
            <span>dev</span>
          </div>
        </Link>

        {/* Toggle Button */}
        {mounted && (
          <Switch
            onCheckedChange={handleToggleMode}
            checked={
              theme === "dark" || (theme === "system" && systemTheme === "dark")
            }
            className="mr-20 md:mr-0"
          />
        )}

        <nav className="ml-auto hidden md:flex gap-6">
          <Link className="text-xl font-semibold" href="/aboutme">
            About Me
          </Link>
          <Link className="text-xl font-semibold" href="/projects">
            Projects
          </Link>
          <Link className="text-xl font-semibold" href="/resume">
            Resume
          </Link>
          <Link className="text-xl font-semibold" href="/contact">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
