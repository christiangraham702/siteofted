"use client"

import React, { createContext, useContext, useEffect, useState } from "react"

// Define theme types
export type ThemeName = "classic" | "indigoDream" | "amberGlow" | "emeraldForest" | "roseGarden" | "nightSlate"

// Define the color scheme for each theme
type ThemeColors = {
  primary: string
  secondary: string
  accent: string
  border: string
  textGradient: string
  iconColor: string
  buttonGradient: string
  hoverButtonGradient: string
  hoverEffect: string
  background: string
  foreground: string
  muted: string
  cardBackground: string
}

// Theme color definitions for light mode
const lightThemeOptions: Record<ThemeName, ThemeColors> = {
  classic: {
    primary: "bg-gray-500",
    secondary: "bg-gray-600",
    accent: "text-gray-700",
    border: "border-gray-300",
    textGradient: "bg-gradient-to-r from-gray-700 to-gray-800",
    iconColor: "text-gray-600",
    buttonGradient: "from-gray-700 to-gray-800",
    hoverButtonGradient: "hover:from-gray-600 hover:to-gray-700",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(156,163,175,0.15)]",
    background: "bg-white",
    foreground: "text-gray-900",
    muted: "text-gray-500",
    cardBackground: "bg-white"
  },
  indigoDream: {
    primary: "bg-indigo-500",
    secondary: "bg-purple-500",
    accent: "text-indigo-600",
    border: "border-indigo-200",
    textGradient: "bg-gradient-to-r from-indigo-500 to-purple-500",
    iconColor: "text-indigo-500",
    buttonGradient: "from-indigo-500 to-purple-500",
    hoverButtonGradient: "hover:from-indigo-600 hover:to-purple-600",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(99,102,241,0.15)]",
    background: "bg-white",
    foreground: "text-gray-900",
    muted: "text-gray-500",
    cardBackground: "bg-white"
  },
  amberGlow: {
    primary: "bg-amber-500",
    secondary: "bg-orange-500",
    accent: "text-amber-600",
    border: "border-amber-200",
    textGradient: "bg-gradient-to-r from-amber-500 to-orange-500",
    iconColor: "text-amber-500",
    buttonGradient: "from-amber-500 to-orange-500",
    hoverButtonGradient: "hover:from-amber-600 hover:to-orange-600",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(245,158,11,0.15)]",
    background: "bg-white",
    foreground: "text-gray-900",
    muted: "text-gray-500",
    cardBackground: "bg-white"
  },
  emeraldForest: {
    primary: "bg-emerald-500",
    secondary: "bg-green-500",
    accent: "text-emerald-600",
    border: "border-emerald-200",
    textGradient: "bg-gradient-to-r from-emerald-500 to-green-500",
    iconColor: "text-emerald-500",
    buttonGradient: "from-emerald-500 to-green-500",
    hoverButtonGradient: "hover:from-emerald-600 hover:to-green-600",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(16,185,129,0.15)]",
    background: "bg-white",
    foreground: "text-gray-900",
    muted: "text-gray-500",
    cardBackground: "bg-white"
  },
  roseGarden: {
    primary: "bg-rose-500",
    secondary: "bg-pink-500",
    accent: "text-rose-600",
    border: "border-rose-200",
    textGradient: "bg-gradient-to-r from-rose-500 to-pink-500",
    iconColor: "text-rose-500",
    buttonGradient: "from-rose-500 to-pink-500",
    hoverButtonGradient: "hover:from-rose-600 hover:to-pink-600",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(244,63,94,0.15)]",
    background: "bg-white",
    foreground: "text-gray-900",
    muted: "text-gray-500",
    cardBackground: "bg-white"
  },
  nightSlate: {
    primary: "bg-slate-700",
    secondary: "bg-slate-600",
    accent: "text-sky-500",
    border: "border-slate-300",
    textGradient: "bg-gradient-to-r from-slate-600 to-sky-500",
    iconColor: "text-sky-500",
    buttonGradient: "from-slate-600 to-slate-700",
    hoverButtonGradient: "hover:from-slate-700 hover:to-sky-800",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(100,116,139,0.15)]",
    background: "bg-white",
    foreground: "text-gray-900",
    muted: "text-gray-500",
    cardBackground: "bg-white"
  }
}

// Theme color definitions for dark mode
const darkThemeOptions: Record<ThemeName, ThemeColors> = {
  classic: {
    primary: "bg-gray-700",
    secondary: "bg-gray-800",
    accent: "text-gray-400",
    border: "border-gray-700",
    textGradient: "bg-gradient-to-r from-gray-400 to-gray-300",
    iconColor: "text-gray-300",
    buttonGradient: "from-gray-700 to-gray-800",
    hoverButtonGradient: "hover:from-gray-600 hover:to-gray-700",
    // hoverEffect: "hover:shadow-[0_0_15px_rgba(156,163,175,0.1)]",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(156,156,156,0.1)]",
    background: "bg-black",
    foreground: "text-gray-100",
    muted: "text-gray-400",
    cardBackground: "bg-black"
  },
  indigoDream: {
    primary: "bg-indigo-800",
    secondary: "bg-purple-800",
    accent: "text-indigo-400",
    border: "border-indigo-800",
    textGradient: "bg-gradient-to-r from-indigo-400 to-purple-400",
    iconColor: "text-indigo-400",
    buttonGradient: "from-indigo-700 to-purple-700",
    hoverButtonGradient: "hover:from-indigo-800 hover:to-purple-800",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(99,102,241,0.1)]",
    background: "bg-black",
    foreground: "text-gray-100",
    muted: "text-gray-400",
    cardBackground: "bg-black"
  },
  amberGlow: {
    primary: "bg-amber-800",
    secondary: "bg-orange-800",
    accent: "text-amber-400",
    border: "border-amber-800",
    textGradient: "bg-gradient-to-r from-amber-400 to-orange-400",
    iconColor: "text-amber-400",
    buttonGradient: "from-amber-700 to-orange-700",
    hoverButtonGradient: "hover:from-amber-800 hover:to-orange-800",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(245,158,11,0.1)]",
    background: "bg-black",
    foreground: "text-gray-100",
    muted: "text-gray-400",
    cardBackground: "bg-black"
  },
  emeraldForest: {
    primary: "bg-emerald-800",
    secondary: "bg-green-800",
    accent: "text-emerald-400",
    border: "border-emerald-800",
    textGradient: "bg-gradient-to-r from-emerald-400 to-green-400",
    iconColor: "text-emerald-400",
    buttonGradient: "from-emerald-700 to-green-700",
    hoverButtonGradient: "hover:from-emerald-800 hover:to-green-800",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(16,185,129,0.1)]",
    background: "bg-black",
    foreground: "text-gray-100",
    muted: "text-gray-400",
    cardBackground: "bg-black"
  },
  roseGarden: {
    primary: "bg-rose-800",
    secondary: "bg-pink-800",
    accent: "text-rose-400",
    border: "border-rose-800",
    textGradient: "bg-gradient-to-r from-rose-400 to-pink-400",
    iconColor: "text-rose-400",
    buttonGradient: "from-rose-700 to-pink-700",
    hoverButtonGradient: "hover:from-rose-800 hover:to-pink-800",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(244,63,94,0.1)]",
    background: "bg-black",
    foreground: "text-gray-100",
    muted: "text-gray-400",
    cardBackground: "bg-black"
  },
  nightSlate: {
    primary: "bg-slate-800",
    secondary: "bg-slate-700",
    accent: "text-sky-400",
    border: "border-slate-700",
    textGradient: "bg-gradient-to-r from-slate-400 to-sky-400",
    iconColor: "text-sky-400",
    buttonGradient: "from-slate-700 to-slate-800",
    hoverButtonGradient: "hover:from-slate-800 hover:to-sky-900",
    hoverEffect: "hover:shadow-[0_0_15px_rgba(100,116,139,0.1)]",
    background: "bg-black",
    foreground: "text-gray-100",
    muted: "text-gray-400",
    cardBackground: "bg-black"
  }
}

interface ThemeContextType {
  theme: ThemeName
  setTheme: (theme: ThemeName) => void
  isDarkMode: boolean
  toggleDarkMode: () => void
  themeColors: ThemeColors
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  // Initialize with the default theme, but check localStorage on client
  const [theme, setTheme] = useState<ThemeName>("indigoDream")
  const [isDarkMode, setIsDarkMode] = useState(false)
  
  // Load theme preference from localStorage on client-side
  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme")
    if (storedTheme && Object.keys(lightThemeOptions).includes(storedTheme)) {
      setTheme(storedTheme as ThemeName)
    }
    
    // Check for dark mode preference
    const storedDarkMode = window.localStorage.getItem("darkMode")
    if (storedDarkMode) {
      setIsDarkMode(storedDarkMode === "true")
    } else {
      // Check user's system preference for dark mode
      const prefersDarkMode = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
      setIsDarkMode(prefersDarkMode)
    }
  }, [])
  
  // Update localStorage when theme changes
  useEffect(() => {
    window.localStorage.setItem("theme", theme)
  }, [theme])
  
  // Update localStorage when dark mode changes
  useEffect(() => {
    window.localStorage.setItem("darkMode", isDarkMode.toString())
    
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDarkMode])
  
  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev)
  }
  
  const value = {
    theme,
    setTheme,
    isDarkMode,
    toggleDarkMode,
    themeColors: isDarkMode ? darkThemeOptions[theme] : lightThemeOptions[theme]
  }
  
  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider")
  }
  return context
} 