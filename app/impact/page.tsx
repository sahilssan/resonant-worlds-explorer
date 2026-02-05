import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Telescope, Globe, Users, TrendingUp, Award, BookOpen } from "lucide-react"

export default function ImpactPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          How physics-first AI is advancing exoplanet science and making discovery accessible
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-6 mb-12">
        <Card className="bg-gradient-data">
          <CardContent className="pt-6 text-center">
            <p className="text-4xl font-bold text-primary">4</p>
            <p className="text-sm text-muted-foreground">Planets Confirmed</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-data">
          <CardContent className="pt-6 text-center">
            <p className="text-4xl font-bold text-primary">75%</p>
            <p className="text-sm text-muted-foreground">Avg. Accuracy Improvement</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-data">
          <CardContent className="pt-6 text-center">
            <p className="text-4xl font-bold text-primary">100%</p>
            <p className="text-sm text-muted-foreground">False Positives Caught</p>
          </CardContent>
        </Card>
        <Card className="bg-gradient-data">
          <CardContent className="pt-6 text-center">
            <p className="text-4xl font-bold text-primary">3</p>
            <p className="text-sm text-muted-foreground">Recovered Candidates</p>
          </CardContent>
        </Card>
      </div>

      {/* Impact Areas */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Card>
          <CardHeader>
            <Telescope className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Scientific Discovery</CardTitle>
            <CardDescription>
              Finding planets that traditional methods miss
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our physics-first approach has demonstrated the ability to recover 
              genuine planetary signals that fall below classical detection thresholds. 
              By combining deep learning with astrophysical validation, we achieve 
              higher sensitivity without sacrificing reliability.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Deep Learning</Badge>
              <Badge variant="outline">Physics Validation</Badge>
              <Badge variant="outline">High Sensitivity</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Globe className="h-10 w-10 text-primary mb-2" />
            <CardTitle>False Positive Rejection</CardTitle>
            <CardDescription>
              Catching impostors that fool traditional pipelines
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Eclipsing binaries and other astrophysical false positives can produce 
              signals that mimic planetary transits. Our validation suite of 
              odd/even depth, secondary eclipse, and shape tests reliably identifies 
              these impostors.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Eclipsing Binary Detection</Badge>
              <Badge variant="outline">Multi-Test Validation</Badge>
              <Badge variant="outline">Reliable Results</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <Users className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Accessibility</CardTitle>
            <CardDescription>
              Making advanced detection accessible to all
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Our web-based interface allows students, educators, and citizen 
              scientists to explore exoplanet detection without specialized 
              software or expertise. The dual-mode design serves both casual 
              explorers and professional researchers.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Web-Based</Badge>
              <Badge variant="outline">No Setup Required</Badge>
              <Badge variant="outline">Educational</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <BookOpen className="h-10 w-10 text-primary mb-2" />
            <CardTitle>Transparency</CardTitle>
            <CardDescription>
              Every detection is fully explainable
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Unlike black-box AI systems, our approach provides complete 
              transparency into every detection decision. Researchers can examine 
              the features, validation tests, and reasoning behind each 
              classification.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline">Explainable AI</Badge>
              <Badge variant="outline">Reproducible</Badge>
              <Badge variant="outline">Trustworthy</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Future Goals */}
      <Card className="bg-gradient-cosmic">
        <CardHeader className="text-center">
          <Award className="h-12 w-12 text-primary mx-auto mb-4" />
          <CardTitle className="text-2xl">Looking Forward</CardTitle>
          <CardDescription>
            Our roadmap for continued advancement in exoplanet detection
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Scale to TESS</h4>
              <p className="text-sm text-muted-foreground">
                Apply our methods to the full TESS mission dataset
              </p>
            </div>
            <div>
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Real-Time Detection</h4>
              <p className="text-sm text-muted-foreground">
                Process new observations as they arrive
              </p>
            </div>
            <div>
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <h4 className="font-semibold mb-2">Community Science</h4>
              <p className="text-sm text-muted-foreground">
                Enable citizen scientists to contribute discoveries
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
