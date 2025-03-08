"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ArrowLeft, Brain, Code2, Database, Github, Rocket } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../context/theme-context"
import { ThemeSelector } from "../components/theme-selector"

const projects = [
  {
    title: "CourseLynx",
    description: "Leading operations and growth strategy as COO, driving user acquisition and platform development. The platform helps 10,000+ students plan their course schedules efficiently.",
    icon: <Rocket className="h-6 w-6" />,
    tech: ["Leadership", "Product Development", "Operations", "10k+ Users"],
    links: {
      demo: "https://courselynx.com"
    }
  },
  {
    title: "Jarvis (Smart Home AI)",
    description: "AI-powered home assistant integrating automation and computer vision. Uses machine learning algorithms to control home devices and recognize people and objects. Still in development.",
    icon: <Brain className="h-6 w-6" />,
    tech: ["Python", "Classification", "OpenCV", "Detection", "TensorFlow"],
    links: {
      demo: "https://blogofted.com/soon",
    }
  },
  {
    title: "UFO Sightings Interactive Map",
    description: "Interactive visualization using esri.js and a dataset from Kaggle. Analyzed UFO sightings in the United States to reveal temporal and spatial patterns in reported incidents. Class project.",
    icon: <Database className="h-6 w-6" />,
    tech: ["Esri.js", "Spatial Analysis", "Data Visualization"],
    links: {
      github: "https://github.com/christiangraham702/UFO-Sightings",
      demo: "https://christiangraham702.github.io/UFO-Sightings/"
    }
  },
  {
    title: "AI Spanish Review",
    description: "Utilizes a basic RAG model to generate text, provide feedback, and explain text. Built with Next.js, Langchain, and using openai's gpt-4o. Updating as semester progresses. Check out reading strategies for the ai part",
    icon: <Code2 className="h-6 w-6" />,
    tech: ["Next.js", "LLMs", "Langchain", "Prompting"],
    links: {
      github: "https://github.com/christiangraham702/ai-spanish-tutor",
      demo: "https://ai-spanish-tutor-jny7bglmw-christiangraham702s-projects.vercel.app/"
    }
  },
  {
    title: "Blockchain Voting System",
    description: "Developed a decentralized application for secure, transparent voting on the solana blockchain. Uses smart contracts to ensure vote integrity and prevents double-voting.",
    icon: <Database className="h-6 w-6" />,
    tech: ["Anchor", "Solana", "Web3.js", "Smart Contracts"],
    links: {
      demo: "https://blogofted.com/soon"
    }
  },
  {
    title: "Automated Trading Algorithm",
    description: "Built a cryptocurrency trading bot using statistical models and technical indicators to automate trading strategies. Implemented risk management protocols and backtesting features.",
    icon: <Brain className="h-6 w-6" />,
    tech: ["Python", "Statistics", "APIs", "LLMs", "Agents"],
    links: {
      demo: "https://blogofted.com/soon"
    }
  }
]

export default function Projects() {
  const { themeColors } = useTheme()
  
  return (
    <div className="min-h-screen bg-background relative">
      {/* Decorative elements */}
      <div className={`fixed top-[20%] left-[10%] w-96 h-96 ${themeColors.primary} rounded-full blur-3xl -z-5 opacity-5`}></div>
      <div className={`fixed bottom-[20%] right-[10%] w-96 h-96 ${themeColors.secondary} rounded-full blur-3xl -z-5 opacity-5`}></div>

      <header className={`sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
        <div className="container flex h-14 items-center">
          <nav className="flex flex-1 items-center justify-between space-x-4 text-sm font-medium">
            <Link href="/">
              <Button variant="ghost" size="icon" className={`hover:${themeColors.accent} transition-colors`}>
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/about" className={`hover:${themeColors.accent} transition-colors`}>
                About
              </Link>
              <Link href="/contact" className={`hover:${themeColors.accent} transition-colors`}>
                Contact
              </Link>
              <ThemeSelector />
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="flex flex-col items-start justify-center py-8">
          <h1 className={`mb-4 text-4xl font-bold bg-clip-text text-transparent ${themeColors.textGradient}`}>My Projects</h1>
          <p className="mb-8 max-w-3xl text-muted-foreground">
            A collection of projects I&apos;ve built, from entrepreneurial ventures to technical explorations. These projects showcase my skills in various technologies and my passion for solving interesting problems.
          </p>
        </section>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card 
              key={project.title} 
              className={`${themeColors.border} ${themeColors.hoverEffect} transition-all duration-300 relative overflow-hidden`}
            >
              <span className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent opacity-20 rounded-bl-full"></span>
              <CardHeader>
                <div className="mb-4 relative">
                  <div className="absolute -left-1 -top-1 w-8 h-8 rounded-full bg-background/50 blur-md"></div>
                  <div className={themeColors.iconColor}>{project.icon}</div>
                </div>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <div key={tech} className="rounded-full border bg-background/60 backdrop-blur-sm px-3 py-1 text-xs text-muted-foreground hover:bg-background/80 transition-colors">
                      {tech}
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                {project.links.github && (
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="outline" className={`w-full ${themeColors.border} bg-gradient-to-r hover:from-indigo-500/10 hover:to-purple-500/10 transition-all`}>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  </a>
                )}
                {project.links.demo && (
                  <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button className={`w-full bg-gradient-to-r ${themeColors.buttonGradient} ${themeColors.hoverButtonGradient} text-white transition-all duration-300 shadow-md hover:shadow-lg border-none`}>
                      <Rocket className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  </a>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Link href="/">
            <Button className={`bg-gradient-to-r ${themeColors.buttonGradient} ${themeColors.hoverButtonGradient} text-white transition-all duration-300 shadow-md hover:shadow-lg border-none`}>
              Back to Home
            </Button>
          </Link>
        </div>
      </main>

      <footer className={`border-t ${themeColors.border} py-6`}>
        <div className="container flex justify-between items-center text-sm text-muted-foreground mx-auto">
          <p>© {new Date().getFullYear()} Christian Graham. All rights reserved.</p>
          <Link href="/" className={`hover:${themeColors.accent} transition-colors`}>
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  )
}

