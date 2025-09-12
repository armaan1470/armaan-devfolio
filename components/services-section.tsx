"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Palette, Smartphone, Globe, Layers, Zap } from "lucide-react"

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive and visually appealing user interfaces that enhance user experience and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building responsive, fast, and scalable web applications using modern technologies and best practices.",
    features: ["React/Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Developing cross-platform mobile applications that deliver native performance and user experience.",
    features: ["Flutter", "React Native", "iOS/Android", "App Store Deployment"],
  },
  {
    icon: Layers,
    title: "Fullstack Development",
    description: "End-to-end development solutions covering both frontend and backend with seamless integration.",
    features: ["API Development", "Database Design", "Authentication", "Cloud Deployment"],
  },
  {
    icon: Code,
    title: "MVP Development",
    description: "Rapid prototyping and development of minimum viable products to validate ideas quickly.",
    features: ["Rapid Prototyping", "Agile Development", "Market Validation", "Iterative Improvement"],
  },
  {
    icon: Zap,
    title: "Process Automation",
    description: "Streamlining workflows and automating repetitive tasks to improve efficiency and productivity.",
    features: ["Workflow Automation", "API Integration", "Task Scheduling", "Performance Monitoring"],
  },
]

export function ServicesSection() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions to bring your digital vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4">
                <service.icon className="h-12 w-12 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>

              <h3 className="text-xl font-semibold mb-3 text-primary">{service.title}</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-muted-foreground flex items-center">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105"
          >
            Let's Work Together
          </Button>
        </div>
      </div>
    </section>
  )
}
