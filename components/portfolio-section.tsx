import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "ResinWork",
    description:
      "Animation-heavy showcase website built with modern web technologies, featuring smooth GSAP animations and responsive design.",
    image: "/modern-animation-website.png",
    technologies: ["Next.js", "Tailwind CSS", "ShadCN", "GSAP", "Framer Motion"],
    liveUrl: "https://resinwork.com",
    featured: true,
  },
  {
    title: "Philomathean Coaching Institute",
    description:
      "Professional educational website with course information, landing pages, and student resources built with React.",
    image: "/educational-coaching-website.png",
    technologies: ["React.js", "CSS3", "JavaScript", "Responsive Design"],
    liveUrl: "https://philomathean.vercel.app",
    featured: true,
  },
  {
    title: "Green Energy Optimizer",
    description:
      "Interactive feasibility checker for solar and wind energy solutions with complex calculations and form handling.",
    image: "/green-energy-calculator-app.png",
    technologies: ["React.js", "Tailwind CSS", "ShadCN", "Chart.js"],
    liveUrl: "https://green-enery-optimizer-v3.vercel.app",
    featured: true,
  },
  {
    title: "Portfolio (armaan.dev)",
    description:
      "Personal portfolio website showcasing projects, skills, and professional experience with modern design.",
    image: "/developer-portfolio-dark.png",
    technologies: ["Next.js", "Tailwind CSS", "ShadCN", "TypeScript"],
    liveUrl: "https://armaandev.vercel.app",
    featured: false,
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={`overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 ${
                project.featured ? "lg:grid lg:grid-cols-2" : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative group">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 lg:h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-2xl font-semibold text-primary">{project.title}</h3>
                  {project.featured && (
                    <Badge variant="secondary" className="bg-primary/10 text-primary">
                      Featured
                    </Badge>
                  )}
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full transition-all duration-300 hover:scale-105"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View Live
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
