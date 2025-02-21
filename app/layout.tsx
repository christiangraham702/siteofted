import type React from "react"
import "@/styles/globals.css"
import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Christian Graham - Innovator & Builder",
  description:
    "Mathematics major, startup COO, and blockchain enthusiast exploring decentralization, AI, and impactful projects.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>{children}</body>
    </html>
  )
}



import './globals.css'