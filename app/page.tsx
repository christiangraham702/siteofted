"use client"

import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

export default function Home() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(75)

  const toRotate = ["enjoys making cool maps", "Big Math Guy", "Builder of the Future", "Fond of AI", "a Blockchain Enthusiast"]
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
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-start space-y-4 text-sm text-muted-foreground mx-auto">
          <div className="flex space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
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

