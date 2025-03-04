"use client"

import { Button } from "@/components/ui/button"
import { ArrowLeft, Book, BookOpen, Briefcase, Rocket } from "lucide-react"
import Link from "next/link"
import { useTheme } from "../context/theme-context"
import { ThemeSelector } from "../components/theme-selector"

export default function About() {
  const { themeColors } = useTheme()

  return (
    <div className="min-h-screen bg-background relative">
      {/* Decorative elements */}
      <div className={`fixed top-[20%] left-[10%] w-96 h-96 ${themeColors.primary} rounded-full blur-3xl -z-5 opacity-5`}></div>
      <div className={`fixed bottom-[20%] right-[10%] w-96 h-96 ${themeColors.secondary} rounded-full blur-3xl -z-5 opacity-5`}></div>

      <header className={`sticky top-0 z-50 w-full  bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
        <div className="container flex h-14 items-center">
          <nav className="flex flex-1 items-center justify-between space-x-4 text-sm font-medium">
            <Link href="/">
              <Button variant="ghost" size="icon" className={`hover:${themeColors.accent} transition-colors`}>
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/projects" className={`hover:${themeColors.accent} transition-colors`}>
                Projects
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
          <h1 className={`mb-4 text-4xl font-bold bg-clip-text text-transparent ${themeColors.textGradient}`}>About Me</h1>
          <p className="mb-8 max-w-3xl text-muted-foreground">I’m a student at UF who loves coding and thinks AI is borderline magic. Numbers and math have been my thing for as long as I can remember, and I spend an unreasonable amount of time spiraling into thoughts about the future—sometimes about technology, sometimes about whether we’re all living in a simulation. At some point, I accidentally became obsessed with blockchain and decentralization, and now I can’t stop thinking about how to build a future where middlemen go extinct, systems are trustless, and people actually own their data.</p>
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          <section className={`p-6 rounded-lg ${themeColors.border} border ${themeColors.hoverEffect} transition-all duration-300`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-full ${themeColors.primary} opacity-20 flex items-center justify-center`}>
                <BookOpen className={`h-6 w-6 ${themeColors.accent}`} />
              </div>
              <h2 className={`text-2xl font-bold ${themeColors.accent}`}>Education</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium">University of Florida</h3>
                <p className="text-muted-foreground">Mathematics, Minor in Innovation</p>
                <p className="text-muted-foreground">2020 - 2025 (Expected)</p>
              </div>
              <div>
                <h3 className="text-lg font-medium">Relevant Coursework</h3>
                <ul className="list-disc list-inside text-muted-foreground">
                  <li>GIS Programming</li>
                  <li>Programming with Data</li>
                  <li>Probability and Statistics</li>
                  <li>Geographic AI</li>
                  <li>Geographic Information Systems</li>
                  <li>Data Visualization</li>
                  <li>Computer Science Fundamentals</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={`p-6 rounded-lg ${themeColors.border} border ${themeColors.hoverEffect} transition-all duration-300`}>
            <div className="flex items-center gap-3 mb-4">
              <div className={`p-2 rounded-full ${themeColors.primary} opacity-20 flex items-center justify-center`}>
                <Briefcase className={`h-6 w-6 ${themeColors.accent}`} />
              </div>
              <h2 className={`text-2xl font-bold ${themeColors.accent}`}>Work Experience</h2>
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium">CourseLynx</h3>
                <p className="text-sm text-muted-foreground">Co-Founder & COO</p>
                <p className="text-sm text-muted-foreground">January 2022 - Present</p>
                <ul className="list-disc list-inside text-muted-foreground mt-2">
                  <li>Leading operations and growth strategy for a student course planning platform</li>
                  <li>Expanded platform to reach over 10,000 active users across multiple universities</li>
                  <li>Designed and implemented new features to enhance user experience</li>
                  <li>Managed a team of developers and marketing specialists</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-medium">Loss Prevention Research Council</h3>
                <p className="text-sm text-muted-foreground">Computer Science Intern</p>
                <p className="text-sm text-muted-foreground">May 2021 - December 2022</p>
                <ul className="list-disc list-inside text-muted-foreground mt-2">
                  <li>Developed web scraping tools for data collection and analysis</li>
                  <li>Created data visualization dashboards for research insights</li>
                  <li>Implemented natural language processing models for text analysis</li>
                  <li>Collaborated with research team on cloud computing solutions</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <section className={`mt-8 p-6 rounded-lg ${themeColors.border} border ${themeColors.hoverEffect} transition-all duration-300`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-full ${themeColors.primary} opacity-20 flex items-center justify-center`}>
              <Rocket className={`h-6 w-6 ${themeColors.accent}`} />
            </div>
            <h2 className={`text-2xl font-bold ${themeColors.accent}`}>Skills & Expertise</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className={`font-medium ${themeColors.accent}`}>Programming Languages</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Python</li>
                <li>JavaScript/TypeScript</li>
                <li>R</li>
                <li>Solidity</li>
                <li>C++</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-medium ${themeColors.accent}`}>Frameworks & Libraries</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>React.js / Next.js</li>
                <li>Node.js</li>
                <li>TensorFlow</li>
                <li>PyTorch</li>
                <li>LangChain/LangGraph</li>
                <li>OpenCV</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-medium ${themeColors.accent}`}>Data Science</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Machine Learning</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
                <li>Spatial Analysis</li>
                <li>Data Visualization</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-medium ${themeColors.accent}`}>Cloud & DevOps</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>AWS</li>
                <li>Google Cloud Platform</li>
                <li>Docker</li>
                <li>CI/CD Pipelines</li>
                <li>Version Control (Git)</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-medium ${themeColors.accent}`}>Business & Leadership</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Project Management</li>
                <li>Team Leadership</li>
                <li>Product Development</li>
                <li>Strategic Planning</li>
                <li>Growth Marketing</li>
              </ul>
            </div>
            <div>
              <h3 className={`font-medium ${themeColors.accent}`}>Other Technologies</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Geographic Information Systems</li>
                <li>Blockchain Development</li>
                <li>Smart Contracts</li>
                <li>UI/UX Design</li>
                <li>Agile Methodologies</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={`mt-8 p-6 rounded-lg ${themeColors.border} border ${themeColors.hoverEffect} transition-all duration-300`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`p-2 rounded-full ${themeColors.primary} opacity-20 flex items-center justify-center`}>
              <Book className={`h-6 w-6 ${themeColors.accent}`} />
            </div>
            <h2 className={`text-2xl font-bold ${themeColors.accent}`}>Certifications & Achievements</h2>
          </div>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">2x Big Idea Competition Semi-Finalist</h3>
              <p className="text-muted-foreground">Developed 50+ page business plan for a startup and pitched to judges</p>
            </div>
            <div>
              <h3 className="text-lg font-medium">2x Luby Micrgrant Pitch Competition Winner</h3>
              <p className="text-muted-foreground">Won over $10,000 in funding for my startup, presented to judges</p>
            </div>
          </div>
        </section>

        <div className="flex justify-center mt-12">
          <Link href="/contact">
            <Button className={`bg-gradient-to-r ${themeColors.buttonGradient} ${themeColors.hoverButtonGradient} text-white transition-all duration-300 shadow-md hover:shadow-lg border-none`}>
              Let&apos;s Connect
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

