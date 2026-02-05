import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Telescope, Brain, Code, Database, CheckCircle } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">About Resonant Exoplanets</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          Physics-first AI for transparent, reliable exoplanet transit detection
        </p>
      </div>

      {/* Mission */}
      <Card className="mb-12 bg-gradient-data">
        <CardContent className="py-8">
          <div className="max-w-3xl mx-auto text-center">
            <Telescope className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-muted-foreground text-lg">
              To advance exoplanet science by combining the power of deep learning with 
              the rigor of astrophysical validation, creating tools that are both more 
              sensitive and more reliable than traditional detection pipelines.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* How It Works */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <Card>
            <CardHeader className="text-center">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Database className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">1. Data Ingestion</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-muted-foreground">
              Light curves from Kepler, K2, and TESS are preprocessed and normalized
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">2. AI Detection</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-muted-foreground">
              Neural network analyzes the signal and identifies potential transits
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <CheckCircle className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">3. Physics Validation</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-muted-foreground">
              Multiple independent tests verify the signal is a genuine planetary transit
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <div className="bg-primary/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Telescope className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-lg">4. Discovery</CardTitle>
            </CardHeader>
            <CardContent className="text-center text-sm text-muted-foreground">
              Validated candidates are reported with full explainability and confidence scores
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Technology Stack */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Technology Stack</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Backend</CardTitle>
              <CardDescription>
                Python-based analysis pipeline
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Python</Badge>
                <Badge variant="outline">FastAPI</Badge>
                <Badge variant="outline">NumPy</Badge>
                <Badge variant="outline">SciPy</Badge>
                <Badge variant="outline">PyTorch</Badge>
                <Badge variant="outline">Astropy</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <Code className="h-8 w-8 text-primary mb-2" />
              <CardTitle>Frontend</CardTitle>
              <CardDescription>
                Modern React-based interface
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Next.js</Badge>
                <Badge variant="outline">React</Badge>
                <Badge variant="outline">TypeScript</Badge>
                <Badge variant="outline">Tailwind CSS</Badge>
                <Badge variant="outline">shadcn/ui</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Key Features */}
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dual-Mode Interface</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Explorer mode for casual users and Researcher mode for professionals, 
              adapting the interface to your expertise level.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Real-Time Processing</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Analyze light curves in seconds with our optimized pipeline, 
              getting results faster than traditional batch processing.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Full Explainability</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Every detection comes with complete documentation of the decision 
              process, validation tests, and confidence reasoning.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Multi-Mission Support</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Works with data from Kepler, K2, and TESS missions, with 
              standardized preprocessing for consistent results.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Comparison Tools</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Side-by-side comparison with classic BLS pipeline results, 
              highlighting where physics validation makes a difference.
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Export & API</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              Download results in standard formats and integrate with your 
              workflow via our REST API.
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
