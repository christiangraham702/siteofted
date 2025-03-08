"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code2, Database, Github, Linkedin, Rocket, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"
import { useTheme } from "./context/theme-context"
import { ThemeSelector } from "./components/theme-selector"

// Featured projects for the landing page
const featuredProjects = [
  {
    title: "CourseLynx",
    description: "Leading operations and growth strategy as COO, driving user acquisition and platform development.",
    icon: <Rocket className="h-6 w-6" />,
    tech: ["Leadership", "10k+ Users", "Operations"],
  },
  {
    title: "Jarvis (Smart Home AI)",
    description: "AI-powered home assistant integrating automation and computer vision.",
    icon: <Brain className="h-6 w-6" />,
    tech: ["Python", "Classification", "OpenCV", "Detection"],
  },
  {
    title: "UFO Sightings Interactive Map",
    description: "Created using esri.js and a dataset from kaggle. Analyzed UFO sightings in the United States.",
    icon: <Database className="h-6 w-6" />,
    tech: ["Esri.js", "JavaScript", "Spatial Analysis"],
  },
]

export default function Home() {
  const { themeColors } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(75)

  const toRotate = ["enjoys making cool maps", "big math guy", "excited about the future", "thinks AI is cool", "a Blockchain Enthusiast"]
  const period = 1500

  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, typingSpeed)

    return () => clearInterval(ticker)
  }, [typingSpeed, displayText, isDeleting, loopNum])

  const tick = () => {
    const i = loopNum % toRotate.length
    const fullText = toRotate[i]
    const updatedText = isDeleting
      ? fullText.substring(0, displayText.length - 1)
      : fullText.substring(0, displayText.length + 1)

    setDisplayText(updatedText)

    if (isDeleting) {
      setTypingSpeed(50)
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true)
      setTypingSpeed(period)
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(75)
    }
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      dx: number
      dy: number
      radius: number
      color: string
    }> = []

    // Create particles with theme-appropriate colors
    const colors = ['rgba(99, 102, 241, 0.4)', 'rgba(168, 85, 247, 0.4)', 'rgba(236, 72, 153, 0.4)', 'rgba(34, 211, 238, 0.4)']
    
    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      })
    }

    function animate() {
      requestAnimationFrame(animate)
      
      if (!ctx || !canvas) return
      
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.x += particle.dx
        particle.y += particle.dy

        if (particle.x < 0 || particle.x > canvas.width) particle.dx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.dy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()
      })
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className={`min-h-screen ${themeColors.background} relative`}>
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
      
      {/* Decorative elements */}
      <div className={`fixed top-[20%] left-[10%] w-96 h-96 ${themeColors.primary} rounded-full blur-3xl -z-5 opacity-5`}></div>
      <div className={`fixed bottom-[20%] right-[10%] w-96 h-96 ${themeColors.secondary} rounded-full blur-3xl -z-5 opacity-5`}></div>

      <header className={`sticky top-0 z-50 w-full  ${themeColors.border} ${themeColors.background}/80 backdrop-blur supports-[backdrop-filter]:${themeColors.background}/60`}>
        <div className="container flex h-14 items-center">
          <nav className="flex flex-1 items-center justify-end space-x-4 text-sm font-medium">
            <Link href="/about" className={`hover:${themeColors.accent} transition-colors`}>
              About
            </Link>
            <Link href="/projects" className={`hover:${themeColors.accent} transition-colors`}>
              Projects
            </Link>
            <Link href="/contact" className={`hover:${themeColors.accent} transition-colors`}>
              Contact
            </Link>
            <ThemeSelector />
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="flex flex-col items-start justify-center py-20">
          <h1 className={`mb-4 text-4xl font-bold bg-clip-text text-transparent ${themeColors.textGradient}`}>Christian Graham</h1>
          <p className={`mb-6 text-xl ${themeColors.accent} h-8 font-medium`}>{displayText}</p>
          <p className={`mb-8 max-w-2xl ${themeColors.muted}`}>
            UF student, founded a startup, blockchain enthusiast. I like to build cool things with AI. 
          </p>
          <div className="flex space-x-4">
            <Link href="/contact">
              <Button className={`bg-gradient-to-r ${themeColors.buttonGradient} ${themeColors.hoverButtonGradient} text-white transition-all duration-300 shadow-md hover:shadow-lg border-none`}>
                Let&apos;s Connect
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline" className={`${themeColors.border} hover:bg-indigo-500/10 transition-all`}>
                Explore My Work
              </Button>
            </Link>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16">
          <h2 className={`mb-8 text-3xl font-bold bg-clip-text text-transparent ${themeColors.textGradient}`}>Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card 
                key={project.title} 
                className={`${themeColors.border} ${themeColors.hoverEffect} ${themeColors.cardBackground} transition-all duration-300 relative overflow-hidden`}
              >
                <span className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent opacity-20 rounded-bl-full"></span>
                <CardHeader>
                  <div className="mb-4 relative">
                    <div className="absolute -left-1 -top-1 w-8 h-8 rounded-full bg-background/50 blur-md"></div>
                    <div className={themeColors.iconColor}>{project.icon}</div>
                  </div>
                  <CardTitle className={themeColors.foreground}>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className={`text-sm ${themeColors.muted}`}>{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <div key={tech} className={`rounded-full border ${themeColors.border} ${themeColors.background}/60 backdrop-blur-sm px-3 py-1 text-xs ${themeColors.muted} hover:${themeColors.background}/80 transition-colors`}>
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/projects" className="w-full">
                    <Button variant="outline" className={`w-full bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all ${themeColors.border}`}>
                      <Code2 className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/projects">
              <Button variant="outline" className={`${themeColors.border} hover:bg-indigo-500/10 transition-all`}>View All Projects</Button>
            </Link>
          </div>
        </section>

        {/* About/Resume Section */}
        <section className="py-16">
          <h2 className={`mb-8 text-3xl font-bold bg-clip-text text-transparent ${themeColors.textGradient}`}>About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Education */}
            <Card className={`${themeColors.border} ${themeColors.hoverEffect} ${themeColors.cardBackground} transition-all duration-300 relative overflow-hidden`}>
              <span className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent opacity-20 rounded-bl-full"></span>
              <CardHeader>
                <CardTitle className={themeColors.accent}>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className={`font-medium ${themeColors.foreground}`}>University of Florida</h3>
                  <p className={`text-sm ${themeColors.muted}`}>Geography, Minor in Innovation</p>
                  <p className={`text-sm ${themeColors.muted}`}>2020 - 2025</p>
                </div>
                <div>
                  <h3 className={`font-medium ${themeColors.foreground}`}>Relevant Coursework</h3>
                  <p className={`text-sm ${themeColors.muted}`}>GIS Programming, Programming with Data, Probability and Statistics, Geographic AI, Geographic Information Systems</p>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card className={`${themeColors.border} ${themeColors.hoverEffect} ${themeColors.cardBackground} transition-all duration-300 relative overflow-hidden`}>
              <span className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent opacity-20 rounded-bl-full"></span>
              <CardHeader>
                <CardTitle className={themeColors.accent}>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className={`font-medium ${themeColors.foreground}`}>CourseLynx</h3>
                  <p className={`text-sm ${themeColors.muted}`}>Co-Founder & COO</p>
                  <p className={`text-sm ${themeColors.muted}`}>2022 - Present</p>
                  <p className={`text-sm ${themeColors.muted}`}>Leading operations and growth strategy, driving user acquisition and platform development.</p>
                </div>
                <div>
                  <h3 className={`font-medium ${themeColors.foreground}`}>Computer Science Intern</h3>
                  <p className={`text-sm ${themeColors.muted}`}>Loss Prevention Research Council</p>
                  <p className={`text-sm ${themeColors.muted}`}>2021 - 2022</p>
                  <p className={`text-sm ${themeColors.muted}`}>Webscraping, Data Analysis, Data Visualization, Cloud Computing, Natural Language Processing</p>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className={`md:col-span-2 ${themeColors.border} ${themeColors.hoverEffect} ${themeColors.cardBackground} transition-all duration-300 relative overflow-hidden`}>
              <span className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-white/5 to-transparent opacity-20 rounded-bl-full"></span>
              <CardHeader>
                <CardTitle className={themeColors.accent}>Skills</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                  <div>
                    <h3 className={`font-medium ${themeColors.accent}`}>Programming Languages</h3>
                    <p className={`text-sm ${themeColors.muted}`}>
                      Python, JavaScript, TypeScript, C++, R, Solidity
                    </p>
                  </div>
                  <div>
                    <h3 className={`font-medium ${themeColors.accent}`}>Frameworks & Libraries</h3>
                    <p className={`text-sm ${themeColors.muted}`}>
                      LangGraph, LangChain, TensorFlow, OpenCV, YOLO, Recharts, React, Next.js, Node.js
                    </p>
                  </div>
                  <div>
                    <h3 className={`font-medium ${themeColors.accent}`}>Tools & Technologies</h3>
                    <p className={`text-sm ${themeColors.muted}`}>
                      Git, Docker, AWS, Google Earth Engine, Solana, Linux (Ubuntu, Debian)
                    </p>
                  </div>
                  <div>
                    <h3 className={`font-medium ${themeColors.accent}`}>Data</h3>
                    <p className={`text-sm ${themeColors.muted}`}>
                      SQL, NoSQL, Pandas, NumPy, Matplotlib, AI/ML, Computer Vision, GIS, Remote Sensing
                    </p>
                  </div>
                  <div>
                    <h3 className={`font-medium ${themeColors.accent}`}>Soft Skills</h3>
                    <p className={`text-sm ${themeColors.muted}`}>
                      Leadership, Strategic Thinking, Problem Solving, Communication, Project Management, Product Development
                    </p>
                  </div>
                  <div>
                    <h3 className={`font-medium ${themeColors.accent}`}>Other</h3>
                    <p className={`text-sm ${themeColors.muted}`}>
                      Blockchain, Smart Contracts, AI Agents, Automation, UX/UI, Branding
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className={`border-t ${themeColors.border} py-6`}>
        <div className="container flex flex-col items-start space-y-4 text-sm text-muted-foreground mx-auto">
          <div className="flex space-x-4">
            <a href="https://github.com/christiangraham702/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className={`hover:${themeColors.accent} transition-colors`}>
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/christian-graham-77283522b/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className={`hover:${themeColors.accent} transition-colors`}>
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="https://x.com/tediscoool" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className={`hover:${themeColors.accent} transition-colors`}>
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </a>
          </div>
          <p className={themeColors.muted}>© {new Date().getFullYear()} Christian Graham. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

