import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Navigation } from "@/components/navigation"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "Resonant Exoplanets | Physics-First AI for Transit Detection",
  description: "Detect exoplanet transits with physics-first AI, understand model decisions with transparent explainability, and validate candidates with proven astrophysics checks.",
  authors: [{ name: "Resonant Exoplanets Team" }],
  keywords: ["exoplanets", "transit detection", "AI", "machine learning", "astronomy", "NASA", "Kepler", "TESS", "K2"],
  openGraph: {
    title: "Resonant Exoplanets | Physics-First AI for Transit Detection",
    description: "Find new worlds with AI-powered transit detection and transparent scientific validation",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export const viewport: Viewport = {
  themeColor: "#0ea5e9",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans`}>
        <Providers>
          <Navigation />
          {children}
        </Providers>
      </body>
    </html>
  )
}
