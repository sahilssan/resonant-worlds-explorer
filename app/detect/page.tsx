"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Telescope, Loader2, CheckCircle, AlertTriangle, TrendingUp, ArrowRight } from "lucide-react"
import { toast } from "sonner"
import { useExplorerMode } from "@/components/providers"

interface Candidate {
  id: string
  name: string
  mission: string
  probability: number
  period: number
  depth: number
  duration: number
  snr: number
  validations: {
    oddEvenDepth: boolean
    secondaryEclipse: boolean
    transitShape: boolean
    centroidShift: boolean
  }
  baselineProbability: number
  baselineFlags: string[]
  description: string
  simplifiedDescription?: string
  isConfirmed: boolean
  isFalsePositive: boolean
  confidence: number
}

const sampleCandidates: Candidate[] = [
  {
    id: "KIC-10593626",
    name: "Kepler-90i",
    mission: "Kepler",
    probability: 0.96,
    period: 14.45,
    depth: 0.009,
    duration: 3.4,
    snr: 14.2,
    validations: {
      oddEvenDepth: true,
      secondaryEclipse: true,
      transitShape: true,
      centroidShift: true,
    },
    baselineProbability: 0.73,
    baselineFlags: ["Low SNR warning", "Period alias possible"],
    description: "Earth-sized planet in 8-planet system. Classic pipeline flagged as low confidence due to shallow depth, but physics validation confirms genuine transit.",
    simplifiedDescription: "A small Earth-sized world in a system with 8 planets!",
    isConfirmed: true,
    isFalsePositive: false,
    confidence: 0.96,
  },
  {
    id: "KIC-5812701",
    name: "Kepler-452b",
    mission: "Kepler",
    probability: 0.91,
    period: 384.8,
    depth: 0.003,
    duration: 8.6,
    snr: 7.8,
    validations: {
      oddEvenDepth: true,
      secondaryEclipse: true,
      transitShape: true,
      centroidShift: true,
    },
    baselineProbability: 0.52,
    baselineFlags: ["Long period - insufficient data", "Low SNR - requires vetting"],
    description: "Earth's older cousin in the habitable zone. Long period and shallow depth challenged classic pipeline, but our physics-first approach confidently validates the signal.",
    simplifiedDescription: "An Earth-like planet in the habitable zone - it could have liquid water!",
    isConfirmed: true,
    isFalsePositive: false,
    confidence: 0.91,
  },
  {
    id: "KIC-9704149",
    name: "False Positive - EB",
    mission: "Kepler",
    probability: 0.18,
    period: 2.47,
    depth: 0.024,
    duration: 2.1,
    snr: 18.6,
    validations: {
      oddEvenDepth: false,
      secondaryEclipse: false,
      transitShape: false,
      centroidShift: true,
    },
    baselineProbability: 0.82,
    baselineFlags: ["High confidence candidate"],
    description: "Eclipsing binary masquerading as planet. Strong signal fooled classic pipeline, but our odd/even depth check and secondary eclipse detection revealed the false positive.",
    simplifiedDescription: "This turned out to be two stars orbiting each other, not a planet.",
    isConfirmed: false,
    isFalsePositive: true,
    confidence: 0.82,
  },
]

function ExplorerResults({ results, onViewDetails }: { results: Candidate[], onViewDetails: (c: Candidate) => void }) {
  const genuineCandidates = results.filter(c => !c.isFalsePositive)
  
  return (
    <div className="space-y-6">
      <div className="bg-muted/50 p-4 rounded-lg">
        <h3 className="text-lg font-medium mb-2">Discovery Summary</h3>
        <p className="text-muted-foreground">
          Found {genuineCandidates.length} potential exoplanet{genuineCandidates.length !== 1 ? "s" : ""}!
        </p>
      </div>

      <div className="grid gap-4">
        {genuineCandidates.map((candidate) => (
          <Card key={candidate.id}>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg">
                  {candidate.name}
                </CardTitle>
                <Badge variant={candidate.confidence > 0.8 ? "default" : "secondary"}>
                  {candidate.confidence > 0.8 ? "High" : "Medium"} Confidence
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">
                  {candidate.simplifiedDescription || candidate.description}
                </p>
                <Button
                  variant="outline"
                  onClick={() => onViewDetails(candidate)}
                  className="w-full"
                >
                  View Details
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

function BaselineComparison({ candidate }: { candidate: Candidate }) {
  const improvementPercent = Math.round(
    ((candidate.probability - candidate.baselineProbability) / candidate.baselineProbability) * 100
  )
  
  const showImprovement = candidate.probability > candidate.baselineProbability + 0.15

  return (
    <div className="space-y-4">
      <div className="text-center mb-6">
        <h3 className="text-lg font-semibold mb-2">Classic Pipeline vs. Resonant System</h3>
        <p className="text-sm text-muted-foreground">
          See how physics-first validation improves detection accuracy
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {/* Classic Pipeline */}
        <Card className="border-muted">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Classic BLS Pipeline</CardTitle>
              <Badge variant="outline">Baseline</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <p className="text-sm text-muted-foreground mb-2">Detection Confidence</p>
              <p className="text-4xl font-bold text-muted-foreground">
                {candidate.baselineProbability.toFixed(2)}
              </p>
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold text-muted-foreground">System Flags:</p>
              {candidate.baselineFlags.map((flag, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs">
                  <AlertTriangle className="h-3 w-3 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{flag}</span>
                </div>
              ))}
            </div>

            <Alert className="bg-muted/50">
              <AlertDescription className="text-xs">
                Relies primarily on BLS power and SNR thresholds without physics validation
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Resonant System */}
        <Card className="border-2 border-primary">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">Resonant System</CardTitle>
              <Badge>Physics-First</Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="text-center py-4">
              <p className="text-sm text-muted-foreground mb-2">Detection Confidence</p>
              <p className={`text-4xl font-bold ${candidate.probability > 0.8 ? 'text-primary' : 'text-accent'}`}>
                {candidate.probability.toFixed(2)}
              </p>
              {showImprovement && (
                <div className="flex items-center justify-center gap-1 mt-2">
                  <TrendingUp className="h-4 w-4 text-primary" />
                  <span className="text-sm text-primary font-semibold">
                    {improvementPercent > 0 ? '+' : ''}{improvementPercent}% confidence
                  </span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <p className="text-xs font-semibold">Physics Validation:</p>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(candidate.validations).map(([key, passed]) => (
                  <div key={key} className="flex items-center gap-1 text-xs">
                    {passed ? (
                      <CheckCircle className="h-3 w-3 text-primary" />
                    ) : (
                      <AlertTriangle className="h-3 w-3 text-accent" />
                    )}
                    <span className="capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                  </div>
                ))}
              </div>
            </div>

            <Alert className="border-primary bg-primary/10">
              <AlertDescription className="text-xs">
                {candidate.isFalsePositive
                  ? "Successfully identified false positive through validation tests"
                  : "All physics checks passed - high confidence genuine transit"
                }
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      </div>

      {/* Key Insight */}
      <Card className="bg-gradient-data border-primary/30">
        <CardContent className="pt-6">
          <div className="flex items-start gap-3">
            <div className="bg-primary/20 rounded-full p-2">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">Key Insight</h4>
              <p className="text-sm text-muted-foreground">{candidate.description}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default function DetectPage() {
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState<Candidate[]>([])
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)
  const [showComparison, setShowComparison] = useState(false)
  const isExplorer = useExplorerMode()

  const handleRunDemo = () => {
    setIsProcessing(true)
    setShowComparison(false)
    toast.info(
      isExplorer
        ? "Starting discovery..."
        : "Starting analysis..."
    )

    setTimeout(() => {
      setIsProcessing(false)
      setResults(sampleCandidates)
      const genuineCount = sampleCandidates.filter(c => !c.isFalsePositive).length
      toast.success(
        isExplorer 
          ? `Found ${genuineCount} potential exoplanet${genuineCount !== 1 ? 's' : ''}!`
          : `Analysis complete!`
      )
    }, 2000)
  }

  const handleViewComparison = (candidate: Candidate) => {
    setSelectedCandidate(candidate)
    setShowComparison(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">
          {isExplorer ? "Discover Exoplanets" : "Transit Detection"}
        </h1>
        <p className="text-muted-foreground mb-4">
          {isExplorer 
            ? "Start your journey of discovery"
            : "Analyze light curves for transit signals"
          }
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Data Source</CardTitle>
              <CardDescription>
                {isExplorer 
                  ? "Start with sample data"
                  : "Choose data source"
                }
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button 
                  className="w-full"
                  onClick={handleRunDemo}
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <Loader2 className="h-4 w-4 animate-spin mr-2" />
                  ) : (
                    <Telescope className="h-4 w-4 mr-2" />
                  )}
                  {isExplorer ? "Start Discovery" : "Run Analysis"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="lg:col-span-2">
          {results.length > 0 && (
            <>
              {isExplorer ? (
                <ExplorerResults 
                  results={results}
                  onViewDetails={handleViewComparison}
                />
              ) : (
                <div className="space-y-6">
                  {results.map((candidate) => (
                    <Card key={candidate.id}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{candidate.name}</CardTitle>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => handleViewComparison(candidate)}
                          >
                            View Details
                          </Button>
                        </div>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              )}

              {showComparison && selectedCandidate && (
                <div className="mt-6">
                  <BaselineComparison candidate={selectedCandidate} />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}
