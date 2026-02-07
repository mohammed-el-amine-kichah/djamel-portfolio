"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  Moon,
  Sun,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code2,
  Database,
  Smartphone,
  Brain,
  Award,
  Briefcase,
  Target,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [currentSlides, setCurrentSlides] = useState<{ [key: string]: number }>({})

  useEffect(() => {
    setMounted(true)
    // Check for saved preference or system preference
    const savedTheme = localStorage.getItem('theme')
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const shouldBeDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark)
    setDarkMode(shouldBeDark)
  }, [])

  useEffect(() => {
    if (!mounted) return
    
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem('theme', 'light')
    }
  }, [darkMode, mounted])

  const skillCategories = [
    {
      category: "Programming",
      icon: Code2,
      skills: ["C++", "Python", "JavaScript", "SQL"],
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      category: "Data & ML",
      icon: Brain,
      skills: ["Pandas", "Scikit-learn", "Data Mining", "Time Series"],
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      category: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "Oracle", "SQLite"],
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
    {
      category: "Mobile & Frontend",
      icon: Smartphone,
      skills: ["Flutter", "HTML", "CSS", "Tailwind"],
      color: "bg-orange-500/10 text-orange-600 dark:text-orange-400",
    },
  ]

  const projects = [
    {
      title: "Bac Companion",
      description:
        "Mobile application providing comprehensive exam preparation tools including interactive quizzes, flashcards, and curated educational resources for Algerian Baccalaureate students.",
      tech: ["Flutter", "Dart", "SQLite", "State Management"],
      focus: "Cross-platform mobile architecture with local data persistence",
      images: [
        "/bac-1.jpg",
        "/bac-2.jpg",
        "/bac-3.jpg",
      ],
      vertical: true,
    },
    
    {
      title: "Sonex Delivery App",
      description:
        "Full-stack delivery app with  real-time tracking, and administrative dashboard.",
      tech: ["Flutter", "Supabase", "Node", "PostgreSQL","WebSockets"],
      focus: "Real-time synchronization and authentication flow",
      images: [
        "/sonex1.png",
        "/sonex2.png",
        "/sonex3.png",
      ],
      vertical: true,
    },
    {
      title: "School manager desktop app",
      description:
        "School management desktop application with features for student records, attendance tracking, and grade management. Built with a focus on clean architecture and maintainable codebase.",
      tech: ["Flutter","SQLite","Python","Scikit-learn"],
      focus: "Desktop application architecture with local data management and ML integration",
      images: [
        "school-1.png",
        "school-2.png",
        "school-3.png",
      ],
      vertical: false,
    },
    {
      title: "Expense Tracker",
      description:
        "Desktop application for personal finance management with category-based expense organization, advanced filtering capabilities, and persistent local storage.",
      tech: ["Electron.js", "JavaScript", "IndexedDB", "Chart.js"],
      focus: "Desktop app architecture with reactive data visualization",
      images: [
        "/ExpenseTracker.png",
        "/workspace.png",
        "/placeholder.jpg",
      ],
      vertical: false,
    },
  ]

  const experiences = [
    {
      title: "Software Engineering Group Project",
      period: "Academic Project",
      description:
        "Led team coordination as Scrum Master for academic software development project. Designed database schema, implemented authentication system, and managed sprint planning and retrospectives.",
      highlights: ["Scrum Master", "Database Design", "Authentication", "Agile Process"],
    },
    {
      title: "Hackathons & Datathons",
      period: "Multiple Events",
      description:
        "Participated in competitive data analysis and software development events focusing on real-world problem solving under time constraints.",
      highlights: ["Data Analysis", "Time Management", "Team Collaboration", "Problem Solving"],
    },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50 shadow-sm">
        <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between max-w-7xl">
          <a href="#" className="font-mono text-lg font-bold">
            MEK
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:inline"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors hidden sm:inline"
            >
              Skills
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
            <Button variant="ghost" size="icon" onClick={() => setDarkMode(!darkMode)} className="ml-2">
              {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge className="mb-4" variant="secondary">
              Software Engineering & Data
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              Djamel Bougheddou
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6">
              Software Engineering & Data-Oriented Developer
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Building practical solutions through systematic problem-solving, clean architecture, and focus on
              maintainable systems. Fourth year CS/AI student specializing in backend, data, and mobile development.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden">
              <Image
                src="/djamel.jpg"
                alt="Djamel Bougheddou"
                width={800}
                height={800}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">About</h2>
              <h3 className="text-3xl font-bold mb-6">Background & Education</h3>
              <div className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                <p>
                  Fourth year Computer Science and Artificial Intelligence student at the{" "}
                  <span className="text-foreground font-medium">National School of AI in Algiers, Algeria</span>.
                </p>
                <p>
                  Strong foundations in algorithms, database systems, computer networking, and machine learning.
                  Experience with full-stack development, mobile applications, and data analysis projects.
                </p>
                <p>
                  Focused on project-based learning with emphasis on clean, maintainable code and practical engineering
                  solutions.
                </p>
              </div>
              <div className="mt-8 grid grid-cols-2 gap-4">
                <Card className="p-4 bg-background">
                  <div className="text-3xl font-bold text-primary mb-1">4th</div>
                  <div className="text-sm text-muted-foreground">Year Student</div>
                </Card>
                <Card className="p-4 bg-background">
                  <div className="text-3xl font-bold text-primary mb-1">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Built</div>
                </Card>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src="/workspace.png"
                  alt="Development workspace"
                  width={1200}
                  height={900}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">Skills</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Technical Stack</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive skill set spanning multiple domains of software development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.category} className="p-6 hover:shadow-lg transition-shadow bg-card">
                <div className={`w-12 h-12 rounded-lg ${category.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold text-lg mb-4">{category.category}</h4>
                <div className="space-y-2">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-sm text-muted-foreground">{skill}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex gap-2 flex-wrap">
                    {category.skills.slice(0, 3).map((skill) => (
                      <div
                        key={skill}
                        className="w-8 h-8 rounded bg-muted/50 border border-border flex items-center justify-center"
                        title={`${skill} logo`}
                      >
                        <span className="text-[8px] font-mono text-muted-foreground">img</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            )
          })}
        </div>

        {/* Additional Tools */}
        <Card className="p-6 bg-muted/30">
          <h4 className="font-semibold text-lg mb-4">Additional Tools & Technologies</h4>
          <div className="flex flex-wrap gap-2">
            {["Git", "Linux", "macOS", "Tableau", "REST APIs", "JSON", "Agile/Scrum"].map((tool) => (
              <Badge key={tool} variant="secondary" className="px-3 py-1">
                {tool}
              </Badge>
            ))}
          </div>
        </Card>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">Projects</h2>
            <h3 className="text-3xl sm:text-4xl font-bold mb-4">Featured Work</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Practical applications built with focus on architecture, data handling, and user experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const [api, setApi] = useState<CarouselApi>()
              const [current, setCurrent] = useState(0)
              
              useEffect(() => {
                if (!api) return
                
                setCurrent(api.selectedScrollSnap())
                
                api.on("select", () => {
                  setCurrent(api.selectedScrollSnap())
                })
              }, [api])
              
              return (
              <Card key={project.title} className="overflow-hidden hover:shadow-xl transition-shadow bg-card">
                <Carousel className="w-full" setApi={setApi}>
                  <CarouselContent>
                    {project.images.map((image, idx) => (
                      <CarouselItem key={idx}>
                        <div className={`overflow-hidden border-b border-border relative group ${
                          project.vertical ? 'aspect-[9/16]' : 'aspect-video'
                        }`}>
                          <Image
                            src={image}
                            alt={`${project.title} screenshot ${idx + 1}`}
                            width={project.vertical ? 720 : 1280}
                            height={project.vertical ? 1280 : 720}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded">
                            {idx + 1} / {project.images.length}
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-2" />
                  <CarouselNext className="right-2" />
                </Carousel>
                
                {/* Image indicators */}
                <div className="flex justify-center gap-1.5 py-3 bg-muted/30 border-b border-border">
                  {project.images.map((_, idx) => (
                    <button
                      key={idx}
                      className={`h-1.5 rounded-full transition-all ${
                        idx === current
                          ? "w-8 bg-primary"
                          : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                      onClick={() => api?.scrollTo(idx)}
                      aria-label={`Go to image ${idx + 1}`}
                    />
                  ))}
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-xl">{project.title}</h4>
                    <Badge variant="secondary" className="text-xs flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
                      {project.images.length}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{project.description}</p>
                  <div className="mb-4 p-3 bg-muted/50 rounded-lg border border-border">
                    <p className="text-sm font-medium text-foreground mb-1">Engineering Focus:</p>
                    <p className="text-sm text-muted-foreground">{project.focus}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="font-mono text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            )})
            }
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">Experience</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Academic & Practical Experience</h3>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card key={exp.title} className="p-6 sm:p-8 hover:shadow-lg transition-shadow bg-card">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-full sm:w-32 h-32 rounded-lg overflow-hidden">
                    <Image
                      src="/workspace.png"
                      alt="Experience certificate"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-bold text-xl">{exp.title}</h4>
                    <Badge variant="secondary" className="ml-2">
                      {exp.period}
                    </Badge>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Goals Section */}
      <section className="bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">Goals</h2>
              <h3 className="text-3xl sm:text-4xl font-bold mb-4">Career Direction</h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 bg-card">
                <Target className="w-10 h-10 mb-4 text-primary" />
                <h4 className="font-semibold text-lg mb-3">Opportunity Type</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Seeking remote entry-level opportunities or internships in backend development, data engineering, or
                  mobile application development.
                </p>
              </Card>
              <Card className="p-6 bg-card">
                <Briefcase className="w-10 h-10 mb-4 text-primary" />
                <h4 className="font-semibold text-lg mb-3">Focus Areas</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Interested in roles focused on building scalable systems, working with data pipelines, or developing
                  cross-platform mobile solutions.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-mono text-muted-foreground mb-4 uppercase tracking-wider">Contact</h2>
          <h3 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to discussing opportunities, collaborations, or technical projects
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h4 className="font-semibold text-xl mb-6">Connect</h4>
              <div className="space-y-4">
                <Card className="p-4 hover:shadow-md transition-shadow bg-card">
                  <a
                    href="https://github.com/Djamel-BOUGHEDDOU"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center group-hover:bg-muted-foreground/10 transition-colors">
                      <Github className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium group-hover:text-primary transition-colors">GitHub</div>
                      <div className="text-sm text-muted-foreground">Djamel Bougheddou</div>
                    </div>
                    <ExternalLink className="h-4 w-4 text-muted-foreground" />
                  </a>
                </Card>
                
              </div>

              <div className="mt-8">
                <Card className="p-6 bg-muted/30">
                  <div className="aspect-square max-w-[200px] mx-auto rounded-lg overflow-hidden">
                    <Image
                      src="/workspace.png"
                      alt="QR Code"
                      width={200}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              </div>
            </div>

            <div>
              <h4 className="font-semibold text-xl mb-6">Send Message</h4>
              <Card className="p-6 bg-card">
                <form className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Subject</label>
                    <Input type="text" placeholder="What's this about?" className="bg-background" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Message</label>
                    <Textarea placeholder="Your message..." rows={6} className="bg-background resize-none" />
                  </div>
                  <Button type="submit" className="w-full" size="lg">
                    <Mail className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">© 2025 Djamel Bougheddou</p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Djamel-BOUGHEDDOU"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
           
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
