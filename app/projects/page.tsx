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
import { ArrowLeft, Brain, Code2, Database, Download, Github, Rocket, Star } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../context/theme-context"
import { ThemeSelector } from "../components/theme-selector"
import { useState } from "react"
import { useToast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

const projects = [
  {
    title: "UFO Sightings Interactive Map",
    description: "This project uses geospatial techniques and statistical analysis to uncover spatial and temporal patterns in over 5,000 UFO sighting reports from 2016. Through heatmaps, clustering, and shape-time correlations, it reveals behavioral and environmental factors that influence when and where sightings are reported.",
    icon: <Database className="h-6 w-6" />,
    tech: ["Kernel Density Estimation (KDE)", "Spatiotemporal Analysis", "Data Visualization"],
    links: {
      github: "https://github.com/christiangraham702/UFO-Sightings",
      demo: "https://christiangraham702.github.io/UFO-Sightings/"
    },
    featured: true
  },
  {
    title: "Gainesville Traffic Analysis",
    description: "This project analyzes traffic efficiency and delay across Gainesville, Florida using FDOT traffic and signal data. By applying machine learning, network analysis, and geospatial diagnostics, it identifies the city's worst congestion points and offers targeted, cost-effective recommendations for signal retiming, structural bottleneck protection, and directional flow improvements",
    icon: <Database className="h-6 w-6" />,
    tech: ["Network Analysis", "Spatial Analysis", "Data Visualization"],
    links: {
      github: "https://github.com/christiangraham702/gnv_traffic_analysis",
      demo: "https://gnvtrafficanalysis-h3rse2cx4npcyncgpceijh.streamlit.app/"
    },
    featured: true
  },
  {
    title: "Urban Sprawl and Regional Geographic Change: Florida and Texas",
    description: "This literature-based analysis critically evaluates the causes and consequences of urban sprawl in two rapidly growing states, synthesizing research from planning, environmental science, and policy. It highlights the spatial tensions between development and sustainability, particularly in ecologically sensitive areas like the Florida Everglades.",
    icon: <Database className="h-6 w-6" />,
    tech: ["Literature Synthesis", "Spatial Analysis", "Policy Analysis"],
    links: {
      report: "/downloads/reports/urban_sprawl_report.pdf"
    },
    featured: true
  },
  {
    title: "CourseLynx",
    description: "Leading operations and growth strategy as COO, driving user acquisition and platform development. The platform helps 10,000+ students plan their course schedules efficiently.",
    icon: <Rocket className="h-6 w-6" />,
    tech: ["Leadership", "Product Development", "Operations", "10k+ Users"],
    links: {
      demo: "https://courselynx.com"
    },
  },
  {
    title: "Jarvis (Smart Home AI)",
    description: "AI-powered home assistant integrating automation and computer vision. Uses machine learning algorithms to control home devices and recognize people and objects. Still in development.",
    icon: <Brain className="h-6 w-6" />,
    tech: ["Python", "Classification", "OpenCV", "Detection", "TensorFlow"],
    links: {
      demo: "https://blogofted.com/soon",
    },
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
  const { toast } = useToast()
  const [isDownloading, setIsDownloading] = useState(false)
  
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)
  
  const handleDownload = (url: string, fileName: string) => {
    setIsDownloading(true)
    
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('File not found or server error')
        }
        return response.blob()
      })
      .then(blob => {
        // Create a URL for the blob
        const fileUrl = window.URL.createObjectURL(blob)
        
        // Create a temporary anchor element
        const link = document.createElement('a')
        link.href = fileUrl
        link.setAttribute('download', fileName)
        
        // Append to the document
        document.body.appendChild(link)
        
        // Trigger the download
        link.click()
        
        // Clean up
        if (link.parentNode) {
          link.parentNode.removeChild(link)
        } else {
          document.body.removeChild(link)
        }
        window.URL.revokeObjectURL(fileUrl)
        
        toast({
          title: "Download Started",
          description: `${fileName} is being downloaded to your device.`,
          duration: 3000,
        })
      })
      .catch(error => {
        console.error('Download error:', error)
        toast({
          title: "Download Failed",
          description: "There was a problem downloading the file. Please try again later.",
          variant: "destructive",
          duration: 3000,
        })
      })
      .finally(() => {
        setIsDownloading(false)
      })
  }
  
  const handleDownloadPortfolio = () => {
    handleDownload('/downloads/portfolio.pdf', 'christian_graham_portfolio.pdf')
  }
  
  return (
    <div className="min-h-screen bg-background relative">
      {/* Decorative elements */}
      <div className={`fixed top-[20%] left-[10%] w-96 h-96 ${themeColors.primary} rounded-full blur-3xl -z-5 opacity-5`}></div>
      <div className={`fixed bottom-[20%] right-[10%] w-96 h-96 ${themeColors.secondary} rounded-full blur-3xl -z-5 opacity-5`}></div>

      <Toaster />

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
              <Button 
                variant="outline" 
                size="sm"
                className={`hover:${themeColors.accent} transition-colors ml-2`}
                onClick={handleDownloadPortfolio}
                disabled={isDownloading}
              >
                {isDownloading ? (
                  <span className="flex items-center">
                    <div className="h-3 w-3 rounded-full border-2 border-current border-r-transparent animate-spin mr-2" />
                    Downloading...
                  </span>
                ) : (
                  <>
                    <Download className="h-4 w-4 mr-2" />
                    Download Portfolio
                  </>
                )}
              </Button>
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
          <Button 
            className={`mb-12 bg-gradient-to-r ${themeColors.buttonGradient} ${themeColors.hoverButtonGradient} text-white transition-all duration-300 shadow-md hover:shadow-lg border-none`}
            onClick={handleDownloadPortfolio}
            disabled={isDownloading}
          >
            {isDownloading ? (
              <span className="flex items-center">
                <div className="h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin mr-2" />
                Downloading...
              </span>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Download Portfolio PDF
              </>
            )}
          </Button>
        </section>

        {/* Featured Projects Section */}
        <section className="mb-16">
          <div className="flex items-center mb-8">
            <Star className={`h-5 w-5 mr-2 ${themeColors.iconColor}`} />
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <Card 
                key={project.title} 
                className={`${themeColors.border} ${themeColors.hoverEffect} transition-all duration-300 relative overflow-hidden`}
              >
                <span className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-white/5 to-transparent opacity-20 rounded-bl-full"></span>
                <div className="absolute top-4 right-4">
                  <Star className={`h-5 w-5 ${themeColors.iconColor}`} />
                </div>
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
                  {project.links.report && (
                    <Button 
                      className={`flex-1 w-full bg-gradient-to-r ${themeColors.buttonGradient} ${themeColors.hoverButtonGradient} text-white transition-all duration-300 shadow-md hover:shadow-lg border-none`}
                      onClick={() => project.links.report && handleDownload(project.links.report, `${project.title.toLowerCase().replace(/\s+/g, '_')}_report.pdf`)}
                      disabled={isDownloading}
                    >
                      {isDownloading ? (
                        <span className="flex items-center justify-center">
                          <div className="h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin mr-2" />
                          Downloading...
                        </span>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Download Report
                        </>
                      )}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Other Projects Section */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Other Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => (
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
                  {project.links.report && (
                    <Button 
                      className={`flex-1 w-full bg-gradient-to-r ${themeColors.buttonGradient} ${themeColors.hoverButtonGradient} text-white transition-all duration-300 shadow-md hover:shadow-lg border-none`}
                      onClick={() => project.links.report && handleDownload(project.links.report, `${project.title.toLowerCase().replace(/\s+/g, '_')}_report.pdf`)}
                      disabled={isDownloading}
                    >
                      {isDownloading ? (
                        <span className="flex items-center justify-center">
                          <div className="h-4 w-4 rounded-full border-2 border-current border-r-transparent animate-spin mr-2" />
                          Downloading...
                        </span>
                      ) : (
                        <>
                          <Download className="mr-2 h-4 w-4" />
                          Download Report
                        </>
                      )}
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

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

