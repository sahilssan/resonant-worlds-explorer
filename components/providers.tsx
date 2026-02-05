"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"

type Mode = "explorer" | "researcher"

interface ModeContextType {
  mode: Mode
  setMode: (mode: Mode) => void
}

const ModeContext = createContext<ModeContextType | undefined>(undefined)

export const useMode = () => {
  const context = useContext(ModeContext)
  if (context === undefined) {
    throw new Error("useMode must be used within a ModeProvider")
  }
  return context
}

export const useExplorerMode = () => {
  const { mode } = useMode()
  return mode === "explorer"
}

export const useResearcherMode = () => {
  const { mode } = useMode()
  return mode === "researcher"
}

export function Providers({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<Mode>("explorer")

  useEffect(() => {
    const savedMode = localStorage.getItem("appMode") as Mode
    if (savedMode) {
      setMode(savedMode)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("appMode", mode)
    document.body.dataset.mode = mode
  }, [mode])

  return (
    <ModeContext.Provider value={{ mode, setMode }}>
      <TooltipProvider>
        {children}
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </ModeContext.Provider>
  )
}
