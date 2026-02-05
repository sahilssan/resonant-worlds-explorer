import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Providers } from "@/components/providers"
import { Navigation } from "@/components/navigation"
import { SpeedInsights } from "@vercel/speed-insights/next"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: "UnitAerospace | Components Detection & Analysis",
  description: "AI-powered quality inspector tool to detect and resolve issues in aerospace components paperwork. FAA Form 8130-3 compliance analysis that finds errors, routes them to sellers, and turns quarantined parts into revenue.",
  authors: [{ name: "UnitAerospace" }],
  keywords: ["aerospace", "8130-3", "FAA", "compliance", "quality inspection", "aircraft parts", "aviation", "documentation"],
  openGraph: {
    title: "UnitAerospace | Components Detection & Analysis",
    description: "AI-powered 8130-3 analysis that finds compliance errors, routes them to the seller, and turns quarantined parts into revenue.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
}

export const viewport: Viewport = {
  themeColor: "#0d9488",
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
        <SpeedInsights />
      </body>
    </html>
  )
}
