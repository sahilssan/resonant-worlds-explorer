"use client"

import Link from "next/link"
import { Plane } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navItems = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Product", href: "#product" },
  { name: "Report", href: "#report" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <div className="flex items-center justify-center w-8 h-8 rounded bg-primary/10 text-primary">
              <Plane className="h-5 w-5" />
            </div>
            <span className="text-foreground">UnitAerospace</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                className={cn(
                  "px-4 py-2 rounded-md text-sm font-medium transition-colors",
                  "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {item.name}
              </button>
            ))}
            <div className="ml-4">
              <Button size="sm" className="glow-primary">
                Request Demo
              </Button>
            </div>
          </div>

          <div className="md:hidden">
            <Button size="sm" className="glow-primary">
              Demo
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
