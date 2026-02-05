"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Telescope, Rocket, Microscope } from "lucide-react"
import { cn } from "@/lib/utils"
import { useMode } from "@/components/providers"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Detect", path: "/detect" },
  { name: "Explainability", path: "/explainability" },
  { name: "Compare", path: "/compare" },
  { name: "Report", path: "/report" },
  { name: "Impact", path: "/impact" },
  { name: "About", path: "/about" },
]

function ModeToggle() {
  const { mode, setMode } = useMode()

  return (
    <DropdownMenu>
      <Tooltip>
        <TooltipTrigger asChild>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon" className="w-9 px-0">
              {mode === "explorer" ? (
                <Rocket className="h-4 w-4" />
              ) : (
                <Microscope className="h-4 w-4" />
              )}
              <span className="sr-only">Toggle mode</span>
            </Button>
          </DropdownMenuTrigger>
        </TooltipTrigger>
        <TooltipContent>
          <p>Current mode: {mode === "explorer" ? "Explorer" : "Researcher"}</p>
        </TooltipContent>
      </Tooltip>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setMode("explorer")}>
          <Rocket className="mr-2 h-4 w-4" />
          <span>Explorer Mode</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setMode("researcher")}>
          <Microscope className="mr-2 h-4 w-4" />
          <span>Researcher Mode</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export function Navigation() {
  const pathname = usePathname()
  const { mode } = useMode()

  const filteredNavItems = navItems.filter((item) => {
    if (mode === "explorer") {
      return !["Compare"].includes(item.name)
    }
    return true
  })

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-xl font-bold text-primary">
            <Telescope className="h-6 w-6" />
            <span>Resonant Exoplanets</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {filteredNavItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="ml-2 flex items-center gap-2">
              <ModeToggle />
            </div>
          </div>

          <div className="md:hidden">
            <button className="text-muted-foreground hover:text-foreground">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
