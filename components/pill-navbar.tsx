"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Blog", href: "#blog" },
  { name: "More", href: "#more" },
]

export function PillNavbar() {
  const [activeSection, setActiveSection] = useState("home")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  if (!mounted) return null

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-gray-900/80 backdrop-blur-md border border-gray-700/50 rounded-full px-4 py-2 shadow-2xl">
        <div className="flex items-center space-x-1">
          {/* AB Logo */}
          <div className="flex items-center mr-4">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-black font-bold text-sm">AB</span>
            </div>
          </div>

          {/* Navigation Items */}
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="px-3 py-1.5 rounded-full text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
            >
              {item.name}
            </button>
          ))}

          {/* Book a Call Button */}
          <Button
            size="sm"
            className="bg-white text-black hover:bg-gray-100 rounded-full px-4 py-1.5 text-sm font-medium ml-2"
          >
            Book a Call
          </Button>

          {/* Close Icon */}
          <button className="ml-2 p-1.5 text-gray-400 hover:text-white transition-colors">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>
    </nav>
  )
}
