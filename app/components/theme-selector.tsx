"use client"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator
} from "@/components/ui/dropdown-menu"
import { useTheme } from "@/app/context/theme-context"
import { Check, Moon, Palette, Sun } from "lucide-react"

export function ThemeSelector() {
  const { theme, setTheme, isDarkMode, toggleDarkMode, themeColors } = useTheme()

  const themes = [
    { key: "classic", name: "Classic" },
    { key: "indigoDream", name: "Indigo Dream" },
    { key: "amberGlow", name: "Amber Glow" },
    { key: "emeraldForest", name: "Emerald Forest" },
    { key: "roseGarden", name: "Rose Garden" },
    { key: "nightSlate", name: "Night Slate" },
  ]

  return (
    <div className="flex items-center gap-2">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleDarkMode}
        className={`transition-colors ${themeColors.iconColor}`}
      >
        {isDarkMode ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
        <span className="sr-only">Toggle dark mode</span>
      </Button>
      
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className={`transition-colors ${themeColors.iconColor}`}>
            <Palette className="h-5 w-5" />
            <span className="sr-only">Select theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className={`${themeColors.border} border`}>
          {themes.map((t) => (
            <DropdownMenuItem
              key={t.key}
              onClick={() => setTheme(t.key as any)}
              className="flex items-center justify-between cursor-pointer"
            >
              <span>{t.name}</span>
              {theme === t.key && <Check className="h-4 w-4 ml-2" />}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
} 