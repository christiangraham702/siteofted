"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Book,
  BookOpen,
  Briefcase,
  Download,
  Eye,
  Github,
  Rocket,
  Trophy,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "../context/theme-context";
import { ThemeSelector } from "../components/theme-selector";
import { motion } from "framer-motion";
import { useState } from "react";

export default function About() {
  const { themeColors } = useTheme();
  const [activeTab, setActiveTab] = useState<"overview" | "resume">("overview");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <div className="min-h-screen bg-background relative">
      {/* Decorative elements - fixing z-index and positioning */}
      <div
        className={`fixed top-[30%] left-[5%] w-96 h-96 ${themeColors.primary} rounded-full blur-3xl -z-10 opacity-5 pointer-events-none`}
      >
      </div>
      <div
        className={`fixed bottom-[20%] right-[10%] w-96 h-96 ${themeColors.secondary} rounded-full blur-3xl -z-10 opacity-5 pointer-events-none`}
      >
      </div>

      <header
        className={`sticky top-0 z-50 w-full bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60`}
      >
        <div className="container flex h-14 items-center">
          <nav className="flex flex-1 items-center justify-between space-x-4 text-sm font-medium">
            <Link href="/">
              <Button
                variant="ghost"
                size="icon"
                className={`hover:${themeColors.accent} transition-colors`}
              >
                <ArrowLeft className="h-5 w-5" />
                <span className="sr-only">Back</span>
              </Button>
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/projects"
                className={`hover:${themeColors.accent} transition-colors`}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className={`hover:${themeColors.accent} transition-colors`}
              >
                Contact
              </Link>
              <ThemeSelector />
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-10">
        <motion.section
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-start justify-center py-4"
        >
          <h1
            className={`mb-4 text-4xl font-bold bg-clip-text text-transparent ${themeColors.textGradient}`}
          >
            About Me
          </h1>
          <p className="mb-6 max-w-3xl text-muted-foreground">
            I'm a student at UF who loves coding and thinks AI is cool. Numbers
            and math have been my thing for as long as I can remember, and I
            spend an unreasonable amount of time spiraling into thoughts about
            the future—sometimes about technology, sometimes about whether we're
            all living in a simulation. At some point, I accidentally became
            obsessed with blockchain and decentralization, and now I can't stop
            thinking about how to build a future where middlemen go extinct,
            systems are trustless, and people actually own their data.
          </p>
        </motion.section>

        {/* Tab Navigation - increase z-index */}
        <div className="flex mb-6 border-b relative z-20">
          <button
            onClick={() => setActiveTab("overview")}
            className={`px-4 py-2 font-medium ${
              activeTab === "overview"
                ? `${themeColors.accent} border-b-2 ${themeColors.border}`
                : "text-muted-foreground"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("resume")}
            className={`px-4 py-2 font-medium ${
              activeTab === "resume"
                ? `${themeColors.accent} border-b-2 ${themeColors.border}`
                : "text-muted-foreground"
            }`}
          >
            Resume
          </button>
        </div>

        {activeTab === "overview"
          ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid gap-8 md:grid-cols-2"
            >
              <motion.section
                variants={itemVariants}
                className={`p-6 rounded-lg ${themeColors.border} border ${themeColors.hoverEffect} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-full ${themeColors.primary} opacity-20 flex items-center justify-center`}
                  >
                    <BookOpen className={`h-6 w-6 ${themeColors.accent}`} />
                  </div>
                  <h2 className={`text-2xl font-bold ${themeColors.accent}`}>
                    Education
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">
                      University of Florida
                    </h3>
                    <p className="text-muted-foreground">
                      Mathematics, Minor in Innovation
                    </p>
                    <p className="text-muted-foreground">2020 - 2025</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">
                      Involvement and Awards
                    </h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Big Idea Competition Semi-Finalist x2</li>
                      <li>Luby Pitch Competition Winner x2</li>
                      <li>Catalyst Prototype Award</li>
                      <li>Top Innovator Award</li>
                      <li>Society of Software Developers</li>
                      <li>UF Startup Incubator</li>
                      <li>3D Printing Club</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              <motion.section
                variants={itemVariants}
                className={`p-6 rounded-lg ${themeColors.border} border ${themeColors.hoverEffect} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-full ${themeColors.primary} opacity-20 flex items-center justify-center`}
                  >
                    <Briefcase className={`h-6 w-6 ${themeColors.accent}`} />
                  </div>
                  <h2 className={`text-2xl font-bold ${themeColors.accent}`}>
                    Work Experience
                  </h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium">CourseLynx</h3>
                    <p className="text-sm text-muted-foreground">
                      Co-Founder & COO
                    </p>
                    <p className="text-sm text-muted-foreground">
                      January 2022 - Present
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                      <li>
                        Founded and created class based group chat for students
                      </li>
                      <li>
                        Grew to 10,000 users in second semester, 4,000 - 5,000
                        DAU
                      </li>
                      <li>
                        Built automation pipelines to retrieve and process large
                        datasets, email marketing, and user feedback
                      </li>
                      <li>
                        Coordinated and created marketing, development, and
                        operations team
                      </li>
                      <li>
                        Continuously learned new skills and technologies and
                        implemented them into live-production environments
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">
                      Loss Prevention Research Council
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Computer Science Intern
                    </p>
                    <p className="text-sm text-muted-foreground">
                      May 2021 - December 2022
                    </p>
                    <ul className="list-disc list-inside text-muted-foreground mt-2">
                      <li>
                        Developed web scraping tools for data collection and
                        analysis
                      </li>
                      <li>
                        Created data visualization dashboards for research
                        insights
                      </li>
                      <li>
                        Implemented natural language processing models for text
                        analysis
                      </li>
                      <li>
                        Collaborated with research team on cloud computing
                        solutions
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              <motion.section
                variants={itemVariants}
                className={`md:col-span-2 mt-4 p-6 rounded-lg ${themeColors.border} border ${themeColors.hoverEffect} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-full ${themeColors.primary} opacity-20 flex items-center justify-center`}
                  >
                    <Rocket className={`h-6 w-6 ${themeColors.accent}`} />
                  </div>
                  <h2 className={`text-2xl font-bold ${themeColors.accent}`}>
                    Skills & Expertise
                  </h2>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
                  <div>
                    <h3 className={`font-medium ${themeColors.accent}`}>
                      Programming Languages
                    </h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Python</li>
                      <li>JavaScript/TypeScript</li>
                      <li>R</li>
                      <li>Solidity</li>
                      <li>C++</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className={`font-medium ${themeColors.accent}`}>
                      Frameworks & Libraries
                    </h3>
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
                    <h3 className={`font-medium ${themeColors.accent}`}>
                      Data Science
                    </h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Machine Learning</li>
                      <li>Natural Language Processing</li>
                      <li>Computer Vision</li>
                      <li>Spatial Analysis</li>
                      <li>Data Visualization</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className={`font-medium ${themeColors.accent}`}>
                      Cloud & DevOps
                    </h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>AWS</li>
                      <li>Google Cloud Platform</li>
                      <li>Docker</li>
                      <li>CI/CD Pipelines</li>
                      <li>Version Control (Git)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className={`font-medium ${themeColors.accent}`}>
                      Business & Leadership
                    </h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Project Management</li>
                      <li>Team Leadership</li>
                      <li>Product Development</li>
                      <li>Strategic Planning</li>
                      <li>Growth Marketing</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className={`font-medium ${themeColors.accent}`}>
                      Other Technologies
                    </h3>
                    <ul className="list-disc list-inside text-muted-foreground">
                      <li>Geographic Information Systems</li>
                      <li>Blockchain Development</li>
                      <li>Smart Contracts</li>
                      <li>UI/UX Design</li>
                      <li>Agile Methodologies</li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              <motion.section
                variants={itemVariants}
                className={`md:col-span-2 mt-4 p-6 rounded-lg ${themeColors.border} border ${themeColors.hoverEffect} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-2 rounded-full ${themeColors.primary} opacity-20 flex items-center justify-center`}
                  >
                    <Trophy className={`h-6 w-6 ${themeColors.accent}`} />
                  </div>
                  <h2 className={`text-2xl font-bold ${themeColors.accent}`}>
                    Certifications & Achievements
                  </h2>
                </div>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-medium">
                      2x Big Idea Competition Semi-Finalist
                    </h3>
                    <p className="text-muted-foreground">
                      Developed 50+ page business plan for a startup and pitched
                      to judges
                    </p>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">
                      2x Luby Micrgrant Pitch Competition Winner
                    </h3>
                    <p className="text-muted-foreground">
                      Won over $10,000 in funding for my startup, presented to
                      judges
                    </p>
                  </div>
                </div>
              </motion.section>
            </motion.div>
          )
          : (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="resume-container"
            >
              {/* Resume Header */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8"
              >
                <div>
                  <h2
                    className={`text-3xl font-bold bg-clip-text text-transparent ${themeColors.textGradient}`}
                  >
                    Christian Graham
                  </h2>
                  <p className="text-muted-foreground mt-1">
                    Mathematics Student & Technology Enthusiast
                  </p>
                </div>
                <div className="flex gap-3 mt-3 sm:mt-0">
                  <a href="/ChristianGraham_Resume.pdf" download>
                    <Button
                      className={`bg-gradient-to-r ${themeColors.buttonGradient} hover:${themeColors.buttonGradient} text-white transition-all duration-300 shadow-sm`}
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download PDF
                    </Button>
                  </a>
                  <a href="/ChristianGraham_Resume.pdf" target="_blank">
                    <Button
                      variant="outline"
                      className={`${themeColors.border} border`}
                    >
                      <Eye className="h-4 w-4 mr-2" />
                      View
                    </Button>
                  </a>
                </div>
              </motion.div>

              {/* Profile Summary */}
              <motion.section
                variants={itemVariants}
                className={`p-6 rounded-lg ${themeColors.border} border ${themeColors.hoverEffect} mb-6`}
              >
                <h3 className={`text-xl font-bold ${themeColors.accent} mb-3`}>
                  Profile
                </h3>
                <p className="text-muted-foreground">
                  Mathematics student with a passion for technology and
                  entrepreneurship. Experienced in full-stack development, data
                  science, and some blockchain technology. Proven leadership
                  skills through co-founding a successful EdTech startup and
                  leading multiple development projects. Seeking opportunities
                  to make cool stuff.
                </p>
              </motion.section>

              {/* Timeline */}
              <motion.section variants={itemVariants} className="mb-8">
                <h3 className={`text-xl font-bold ${themeColors.accent} mb-4`}>
                  Experience Timeline
                </h3>
                <div className="relative border-l-2 pl-6 pb-6 space-y-8">
                  {/* Timeline dot and pulse effect */}
                  <div
                    className={`absolute top-0 -left-1.5 h-3 w-3 rounded-full ${themeColors.primary}`}
                  >
                    <div
                      className={`absolute -left-1 -top-1 h-5 w-5 rounded-full ${themeColors.primary} animate-ping opacity-50`}
                    >
                    </div>
                  </div>

                  {/* Timeline items */}
                  <div className="relative">
                    <span className="text-xs text-muted-foreground">
                      Jan 2022 - November 2024
                    </span>
                    <h4 className={`text-lg font-medium ${themeColors.accent}`}>
                      Co-Founder & COO — CourseLynx
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Zap className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Led cross-functional team to scale platform to 10,000+
                          active users
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Defined product roadmap and managed development
                          sprints
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Designed user acquisition strategy resulting in 300%
                          growth in 6 months
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Secured $10,000+ in funding through pitch competitions
                          and grants
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative">
                    <span className="text-xs text-muted-foreground">
                      May 2021 - Dec 2022
                    </span>
                    <h4 className={`text-lg font-medium ${themeColors.accent}`}>
                      Computer Science Intern — Loss Prevention Research Council
                    </h4>
                    <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Zap className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Built web scraping tools to automate data collection
                          from retail crime reports
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Developed interactive dashboards for data
                          visualization using D3.js
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Implemented NLP models to categorize and analyze text
                          data
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Zap className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Collaborated with research team to design cloud-based
                          data processing pipeline
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="relative">
                    <span className="text-xs text-muted-foreground">
                      2020 - Present
                    </span>
                    <h4 className={`text-lg font-medium ${themeColors.accent}`}>
                      University of Florida
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Mathematics, Minor in Innovation
                    </p>
                    <p className="text-sm text-muted-foreground italic">
                      Expected graduation: May 2025
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Relevant coursework: GIS Programming, Programming with
                      Data, Probability and Statistics, Geographic AI, Data
                      Visualization
                    </p>
                  </div>
                </div>
              </motion.section>

              {/* Technical Skills */}
              <motion.section
                variants={itemVariants}
                className={`p-6 rounded-lg ${themeColors.border} border ${themeColors.hoverEffect} mb-6`}
              >
                <h3 className={`text-xl font-bold ${themeColors.accent} mb-3`}>
                  Technical Skills
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  <div>
                    <h4 className="font-medium">Programming</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        Python
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        JavaScript
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        TypeScript
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        R
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        C++
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium">Web Development</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        React.js
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        Next.js
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        Node.js
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        HTML/CSS
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        TailwindCSS
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium">Data Science</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        TensorFlow
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        YOLO
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        Machine Learning
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        Agents
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        LLMs
                      </span>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium">Other Technologies</h4>
                    <div className="flex flex-wrap gap-2 mt-2">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        GIS
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        Blockchain
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        AWS
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        Docker
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${themeColors.primary} bg-opacity-10 ${themeColors.accent}`}
                      >
                        Git
                      </span>
                    </div>
                  </div>
                </div>
              </motion.section>

              {/* Projects & Achievements */}
              <motion.section
                variants={itemVariants}
                className={`p-6 rounded-lg ${themeColors.border} border ${themeColors.hoverEffect} mb-6`}
              >
                <h3 className={`text-xl font-bold ${themeColors.accent} mb-3`}>
                  Projects & Achievements
                </h3>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">Pitch Competitions</h4>
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Trophy className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          2x Big Idea Competition Semi-Finalist (2022, 2023)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Trophy className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          2x Luby Microgrant Pitch Competition Winner ($10,000
                          funding)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-medium">Notable Projects</h4>
                    <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                      <li className="flex items-start">
                        <Github className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          Jarvis (Smart Home AI) - AI-powered home assistant
                          with computer vision capabilities
                        </span>
                      </li>
                      <li className="flex items-start">
                        <Github className="h-4 w-4 mt-0.5 mr-2 flex-shrink-0" />
                        <span>
                          UFO Sightings Interactive Map - Geographic
                          visualization of UFO sightings using esri.js
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.section>

              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-4 mt-8"
              >
                <Link href="/ChristianGraham_Resume.pdf" download>
                  <Button
                    className={`bg-gradient-to-r ${themeColors.buttonGradient} hover:${themeColors.buttonGradient} text-white transition-all duration-300 shadow-md hover:shadow-lg`}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download Resume
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button
                    variant="outline"
                    className={`${themeColors.border} border`}
                  >
                    Get In Touch
                  </Button>
                </Link>
              </motion.div>
            </motion.div>
          )}

        <div className="flex justify-center mt-12">
          <Link href="/contact">
            <Button
              className={`bg-gradient-to-r ${themeColors.buttonGradient} ${themeColors.hoverButtonGradient} text-white transition-all duration-300 shadow-md hover:shadow-lg border-none`}
            >
              Let&apos;s Connect
            </Button>
          </Link>
        </div>
      </main>

      <footer className={`border-t ${themeColors.border} py-6`}>
        <div className="container flex justify-between items-center text-sm text-muted-foreground mx-auto">
          <p>
            © {new Date().getFullYear()} Christian Graham. All rights reserved.
          </p>
          <Link
            href="/"
            className={`hover:${themeColors.accent} transition-colors`}
          >
            Back to Home
          </Link>
        </div>
      </footer>
    </div>
  );
}
