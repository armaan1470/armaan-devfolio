"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Send, MapPin, Clock } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "armaandev1470@gmail.com",
      href: "mailto:armaandev1470@gmail.com",
      description: "Drop me a line anytime",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/armaan-shaikh-24357a240",
      description: "Let's connect professionally",
    },
    {
      icon: Github,
      title: "GitHub",
      value: "armaan1470",
      href: "https://github.com/armaan1470",
      description: "Check out my code",
    },
  ]

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-black">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? "animate-slide-up" : ""}`}>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                Connect
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div
                    key={info.title}
                    className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 group hover:bg-white/10 transition-all duration-300 ${isVisible ? "animate-slide-up" : ""}`}
                    style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  >
                    <a
                      href={info.href}
                      target={info.href.startsWith("http") ? "_blank" : undefined}
                      rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center gap-6 group-hover:scale-105 transition-transform duration-300"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-emerald-500/20 flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-emerald-500/30 transition-all duration-300">
                        <info.icon className="w-6 h-6 text-cyan-400" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1 text-white">{info.title}</h3>
                        <p className="text-cyan-400 font-medium">{info.value}</p>
                        <p className="text-gray-400 text-sm">{info.description}</p>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              {/* Additional Info */}
              <div
                className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 space-y-4 transition-all duration-1000 ${isVisible ? "animate-slide-up" : ""}`}
                style={{ animationDelay: "0.5s" }}
              >
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="font-medium text-white">Location</p>
                    <p className="text-gray-400 text-sm">Mumbai, India</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <div>
                    <p className="font-medium text-white">Response Time</p>
                    <p className="text-gray-400 text-sm">Usually within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : ""}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8">
                <h3 className="font-bold text-2xl mb-6 text-cyan-400">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Input
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="backdrop-blur-xl bg-white/5 border-white/20 focus:border-cyan-400/50 rounded-2xl h-12 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="backdrop-blur-xl bg-white/5 border-white/20 focus:border-cyan-400/50 rounded-2xl h-12 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <Textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="backdrop-blur-xl bg-white/5 border-white/20 focus:border-cyan-400/50 rounded-2xl text-white placeholder:text-gray-400 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white border-0 rounded-2xl h-12 font-semibold group"
                  >
                    <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
