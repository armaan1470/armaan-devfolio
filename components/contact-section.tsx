"use client";

import type React from "react";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Mail, Linkedin, Github, Send, MapPin, Clock } from "lucide-react";

// --- Zod Schema for Form Validation ---
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters." }),
});

type FormData = z.infer<typeof formSchema>;

interface ContactInfo {
  icon: React.ElementType;
  title: string;
  value: string;
  href: string;
  description: string;
}

export function ContactSection(): JSX.Element {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  // --- React Hook Form Setup ---
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.disconnect();
      }
    };
  }, []);

  const onSubmit = (values: FormData): void => {
    console.log("Form submitted with validated data:", values);
    // You can handle your API call here
    form.reset();
  };

  const contactInfo: ContactInfo[] = [
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
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 relative overflow-hidden bg-gray-950 text-white"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          {/* Section Header */}
          <div
            className={`text-center mb-16 md:mb-24 transition-all duration-1000 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-20"
            }`}
          >
            <p className="text-xl font-medium text-gray-400 mb-2">
              Get in touch
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Let's create something{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 font-extrabold">
                together
              </span>
              .
            </h2>
          </div>

          <div
            className={`w-full max-w-5xl transition-all duration-1000 delay-300 ${
              isVisible ? "animate-slide-up" : "opacity-0 translate-y-20"
            }`}
          >
            <div className="bg-gray-900 border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl flex flex-col md:flex-row gap-12">
              {/* Contact Info */}
              <div className="md:w-1/2 space-y-8">
                <h3 className="font-bold text-2xl mb-4 text-white">My Info</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div
                      key={info.title}
                      className={`group transition-all duration-300 rounded-xl p-4 -m-4 `}
                    >
                      <a
                        href={info.href}
                        target={
                          info.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          info.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="flex items-center gap-6 group-hover:scale-[1.01] transition-transform duration-300"
                      >
                        <div className="w-12 h-12 rounded-full flex-shrink-0 bg-gray-800 flex items-center justify-center">
                          <info.icon className="w-5 h-5 text-gray-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg mb-1 text-white">
                            {info.title}
                          </h3>
                          <p className="text-gray-300 font-medium">
                            {info.value}
                          </p>
                          <p className="text-gray-500 text-sm">
                            {info.description}
                          </p>
                        </div>
                      </a>
                    </div>
                  ))}
                </div>

                {/* Additional Info */}
                <div className="mt-8 space-y-4 pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-4">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-white">Location</p>
                      <p className="text-gray-400 text-sm">Mumbai, India</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <div>
                      <p className="font-medium text-white">Response Time</p>
                      <p className="text-gray-400 text-sm">
                        Usually within 24 hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="md:w-1/2 md:border-l md:border-gray-800 md:pl-12 pt-12 md:pt-0">
                <h3 className="font-bold text-2xl mb-6 text-white">
                  Send a Message
                </h3>
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    <div className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only">Name</FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Your Name"
                                {...field}
                                className="bg-gray-800 border-gray-700 focus:border-gray-600 rounded-xl h-12 text-white placeholder:text-gray-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="sr-only">Email</FormLabel>
                            <FormControl>
                              <Input
                                type="email"
                                placeholder="Your Email"
                                {...field}
                                className="bg-gray-800 border-gray-700 focus:border-gray-600 rounded-xl h-12 text-white placeholder:text-gray-500"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="sr-only">Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell me about your project or inquiry..."
                              {...field}
                              rows={6}
                              className="bg-gray-800 border-gray-700 focus:border-gray-600 rounded-xl text-white placeholder:text-gray-500 resize-none"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      className="w-full bg-white text-gray-950 hover:bg-gray-200 border-0 rounded-xl h-12 font-semibold group transition-all duration-300 transform hover:scale-[1.01]"
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message
                    </Button>
                  </form>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
