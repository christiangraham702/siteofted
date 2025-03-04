"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Github, Linkedin, Mail, MessageCircle, Send, Twitter } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { useTheme } from "../context/theme-context"
import { ThemeSelector } from "../components/theme-selector"

export default function Contact() {
  const { themeColors } = useTheme()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [isSending, setIsSending] = useState(false)
  const [isSent, setIsSent] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsSending(true)

    try {
      // Call our API route instead of simulating
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      // Success! Clear the form
      setIsSent(true)
      setName("")
      setEmail("")
      setMessage("")
    } catch (err) {
      setError(err instanceof Error ? err.message : "There was an error sending your message. Please try again.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className="min-h-screen bg-background relative">
      {/* Decorative elements */}
      <div className={`fixed top-[20%] left-[10%] w-96 h-96 ${themeColors.primary} rounded-full blur-3xl -z-5 opacity-5`}></div>
      <div className={`fixed bottom-[20%] right-[10%] w-96 h-96 ${themeColors.secondary} rounded-full blur-3xl -z-5 opacity-5`}></div>

      <header className={`sticky top-0 z-50 w-full ${themeColors.border} bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60`}>
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
              <Link href="/projects" className={`hover:${themeColors.accent} transition-colors`}>
                Projects
              </Link>
              <ThemeSelector />
            </div>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-16">
        <section className="flex flex-col items-start justify-center py-8">
          <h1 className={`mb-4 text-4xl font-bold bg-clip-text text-transparent ${themeColors.textGradient}`}>Get in Touch</h1>
          <p className="mb-8 max-w-3xl text-muted-foreground">
            Have a question, project idea, or just want to connect? Feel free to reach out through the form below or via social media.
          </p>
        </section>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className={`${themeColors.border} ${themeColors.hoverEffect} transition-all duration-300 h-fit`}>
            <CardHeader>
              <CardTitle className={themeColors.accent}>Send a Message</CardTitle>
              <CardDescription>
                Fill out the form below to send me a direct message.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSent ? (
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <h3 className="text-xl font-medium mb-2">Thanks for reaching out!</h3>
                  <p className="text-muted-foreground mb-6">
                    I've received your message and will respond as soon as possible.
                  </p>
                  <Button 
                    onClick={() => setIsSent(false)} 
                    className={`bg-gradient-to-r ${themeColors.buttonGradient} ${themeColors.hoverButtonGradient} text-white transition-all duration-300 shadow-md hover:shadow-lg border-none`}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input 
                      id="name" 
                      placeholder="John Doe" 
                      value={name} 
                      onChange={e => setName(e.target.value)} 
                      required 
                      className={`border ${themeColors.border} focus:border-transparent focus:ring-2 focus:ring-offset-2 ${themeColors.accent}/20`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      value={email} 
                      onChange={e => setEmail(e.target.value)} 
                      required 
                      className={`border ${themeColors.border} focus:border-transparent focus:ring-2 focus:ring-offset-2 ${themeColors.accent}/20`}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Hello! I'd like to discuss..." 
                      value={message} 
                      onChange={e => setMessage(e.target.value)} 
                      required 
                      className={`min-h-[150px] resize-none border ${themeColors.border} focus:border-transparent focus:ring-2 focus:ring-offset-2 ${themeColors.accent}/20`}
                    />
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <Button 
                    type="submit" 
                    disabled={isSending} 
                    className={`w-full bg-gradient-to-r ${themeColors.buttonGradient} ${themeColors.hoverButtonGradient} text-white transition-all duration-300 shadow-md hover:shadow-lg border-none`}
                  >
                    {isSending ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          <Card className={`${themeColors.border} ${themeColors.hoverEffect} transition-all duration-300 h-fit`}>
            <CardHeader>
              <CardTitle className={themeColors.accent}>Connect With Me</CardTitle>
              <CardDescription>
                Feel free to reach out through other channels as well.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className={`text-lg font-medium ${themeColors.accent} mb-4`}>Social Media</h3>
                <div className="flex flex-col space-y-4">
                  <a 
                    href="https://github.com/christiangraham702" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 rounded-lg border ${themeColors.border} ${themeColors.hoverEffect} transition-all duration-300`}
                  >
                    <Github className="h-5 w-5 mr-3" />
                    <div>
                      <h4 className="font-medium">GitHub</h4>
                      <p className="text-sm text-muted-foreground">@christiangraham702</p>
                    </div>
                  </a>
                  <a 
                    href="https://www.linkedin.com/in/christian-graham-77283522b/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 rounded-lg border ${themeColors.border} ${themeColors.hoverEffect} transition-all duration-300`}
                  >
                    <Linkedin className="h-5 w-5 mr-3" />
                    <div>
                      <h4 className="font-medium">LinkedIn</h4>
                      <p className="text-sm text-muted-foreground">christian-graham</p>
                    </div>
                  </a>
                  <a 
                    href="https://x.com/tediscoool" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={`flex items-center p-3 rounded-lg border ${themeColors.border} ${themeColors.hoverEffect} transition-all duration-300`}
                  >
                    <Twitter className="h-5 w-5 mr-3" />
                    <div>
                      <h4 className="font-medium">Twitter</h4>
                      <p className="text-sm text-muted-foreground">@tediscoool</p>
                    </div>
                  </a>
                </div>
              </div>

              <div>
                <h3 className={`text-lg font-medium ${themeColors.accent} mb-4`}>Email</h3>
                <a 
                  href="mailto:christian.graham@ufl.edu" 
                  className={`flex items-center p-3 rounded-lg border ${themeColors.border} ${themeColors.hoverEffect} transition-all duration-300`}
                >
                  <Mail className="h-5 w-5 mr-3" />
                  <div>
                    <h4 className="font-medium">Email Address</h4>
                    <p className="text-sm text-muted-foreground">christian.graham@ufl.edu</p>
                  </div>
                </a>
              </div>

              <div>
                <h3 className={`text-lg font-medium ${themeColors.accent} mb-4`}>Location</h3>
                <div className={`p-3 rounded-lg border ${themeColors.border}`}>
                  <h4 className="font-medium">Gainesville, Florida</h4>
                  <p className="text-sm text-muted-foreground">United States</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className={`border-t ${themeColors.border} py-6 mt-16`}>
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