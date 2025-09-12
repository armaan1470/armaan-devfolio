import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: "🎨",
    skills: ["Next.js", "React", "Angular", "Vue.js", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Mobile Development",
    icon: "📱",
    skills: ["Flutter", "React Native", "iOS", "Android"],
  },
  {
    title: "Backend Development",
    icon: "⚙️",
    skills: ["Node.js", "Express.js", "Java", "Spring Boot", "Python", "PostgreSQL"],
  },
  {
    title: "UI/UX & Design",
    icon: "✨",
    skills: ["Figma", "Adobe XD", "Responsive Design", "ShadCN", "Framer Motion"],
  },
  {
    title: "DevOps & Tools",
    icon: "🚀",
    skills: ["Docker", "AWS", "Vercel", "Git", "CI/CD", "MongoDB"],
  },
  {
    title: "Expertise",
    icon: "🎯",
    skills: ["Problem Solving", "MVP Development", "Automation", "API Design"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-6">
            Skills & <span className="text-primary">Expertise</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-semibold text-primary">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
