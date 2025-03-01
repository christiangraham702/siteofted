"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code2, Database, Github, Linkedin, Rocket, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

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
    }> = []

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 0.5,
        dy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
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
        ctx.fillStyle = "rgba(200, 200, 200, 0.2)"
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
    <div className="min-h-screen bg-background">
      <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ opacity: 0.7 }} />

      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <nav className="flex flex-1 items-center justify-end space-x-4 text-sm font-medium">
            <Link href="/about" className="hover:text-primary">
              About
            </Link>
            <Link href="/projects" className="hover:text-primary">
              Projects
            </Link>
            <Link href="/contact" className="hover:text-primary">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="flex flex-col items-start justify-center py-20">
          <h1 className="mb-4 text-4xl font-bold">Christian Graham</h1>
          <p className="mb-6 text-xl text-muted-foreground h-8">{displayText}</p>
          <p className="mb-8 max-w-2xl text-muted-foreground">
            UF student, founded a startup, blockchain enthusiast. I like to build cool things with AI. 
          </p>
          <div className="flex space-x-4">
            <Link href="/contact">
              <Button>Let&apos;s Connect</Button>
            </Link>
            <Link href="/projects">
              <Button variant="outline">Explore My Work</Button>
            </Link>
          </div>
        </section>

        {/* Featured Projects Section */}
        <section className="py-16">
          <h2 className="mb-8 text-3xl font-bold">Featured Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card key={project.title} className="transition-all hover:shadow-md">
                <CardHeader>
                  <div className="mb-4">{project.icon}</div>
                  <CardTitle>{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <div key={tech} className="rounded-full border bg-background px-3 py-1 text-xs text-muted-foreground">
                        {tech}
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter>
                  <Link href="/projects" className="w-full">
                    <Button variant="outline" className="w-full">
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
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </section>

        {/* About/Resume Section */}
        <section className="py-16">
          <h2 className="mb-8 text-3xl font-bold">About Me</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">University of Florida</h3>
                  <p className="text-sm text-muted-foreground">Geography, Minor in Innovation</p>
                  <p className="text-sm text-muted-foreground">2020 - 2025</p>
                </div>
                <div>
                  <h3 className="font-medium">Relevant Coursework</h3>
                  <p className="text-sm text-muted-foreground">GIS Programming, Programming with Data, Probability and Statistics, Geographic AI, Geographic Information Systems</p>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle>Experience</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium">CourseLynx</h3>
                  <p className="text-sm text-muted-foreground">Co-Founder & COO</p>
                  <p className="text-sm text-muted-foreground">2022 - Present</p>
                  <p className="text-sm text-muted-foreground">Leading operations and growth strategy, driving user acquisition and platform development.</p>
                </div>
                <div>
                  <h3 className="font-medium">Computer Science Intern</h3>
                  <p className="text-sm text-muted-foreground">Loss Prevention Research Council</p>
                  <p className="text-sm text-muted-foreground">2021 - 2022</p>
                  <p className="text-sm text-muted-foreground">Webscraping, Data Analysis, Data Visualization, Cloud Computing, Natural Language Processing</p>
                </div>
              </CardContent>
            </Card>

            {/* Skills */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Skills</CardTitle>
              </CardHeader>
              <CardContent>
  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
    <div>
      <h3 className="font-medium">Programming Languages</h3>
      <p className="text-sm text-muted-foreground">
        Python, JavaScript, TypeScript, C++, R, Solidity
      </p>
    </div>
    <div>
      <h3 className="font-medium">Frameworks & Libraries</h3>
      <p className="text-sm text-muted-foreground">
        LangGraph, LangChain, TensorFlow, OpenCV, YOLO, Recharts, React, Next.js, Node.js
      </p>
    </div>
    <div>
      <h3 className="font-medium">Tools & Technologies</h3>
      <p className="text-sm text-muted-foreground">
        Git, Docker, AWS, Google Earth Engine, Solana, Linux (Ubuntu, Debian)
      </p>
    </div>
    <div>
      <h3 className="font-medium">Data</h3>
      <p className="text-sm text-muted-foreground">
        SQL, NoSQL, Pandas, NumPy, Matplotlib, AI/ML, Computer Vision, GIS, Remote Sensing
      </p>
    </div>
    <div>
      <h3 className="font-medium">Soft Skills</h3>
      <p className="text-sm text-muted-foreground">
        Leadership, Strategic Thinking, Problem Solving, Communication, Project Management, Product Development
      </p>
    </div>
    <div>
      <h3 className="font-medium">Other</h3>
      <p className="text-sm text-muted-foreground">
        Blockchain, Smart Contracts, AI Agents, Automation, UX/UI, Branding
      </p>
    </div>
  </div>
</CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-start space-y-4 text-sm text-muted-foreground mx-auto">
          <div className="flex space-x-4">
            <a href="https://github.com/christiangraham702/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/christian-graham-77283522b/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="https://x.com/tediscoool" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
            </a>
          </div>
          <p>© {new Date().getFullYear()} Christian Graham. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

