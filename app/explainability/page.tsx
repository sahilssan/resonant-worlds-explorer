import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Brain, Eye, CheckCircle, AlertTriangle, TrendingUp } from "lucide-react"

export default function ExplainabilityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Explainability Dashboard</h1>
        <p className="text-muted-foreground">
          Understand how our AI makes decisions and validates exoplanet candidates
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="validation">Validation Tests</TabsTrigger>
          <TabsTrigger value="methodology">Methodology</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Brain className="h-8 w-8 text-primary mb-2" />
                <CardTitle>AI Transparency</CardTitle>
                <CardDescription>
                  Every detection decision is fully explainable
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our physics-first AI provides clear reasoning for every detection, 
                  showing which features triggered the classification.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Eye className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Visual Analysis</CardTitle>
                <CardDescription>
                  See what the model sees in your data
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Phase-folded light curves, saliency maps, and feature importance 
                  plots help you understand the detection process.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CheckCircle className="h-8 w-8 text-primary mb-2" />
                <CardTitle>Validation Reports</CardTitle>
                <CardDescription>
                  Comprehensive checks for every candidate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Each candidate undergoes multiple independent physics tests 
                  to rule out false positives.
                </p>
              </CardContent>
            </Card>
          </div>

          <Alert className="border-primary bg-primary/10">
            <TrendingUp className="h-4 w-4" />
            <AlertTitle>Why Explainability Matters</AlertTitle>
            <AlertDescription>
              In scientific discovery, trust in the method is as important as the results. 
              Our explainable AI ensures every detection can be scrutinized and validated.
            </AlertDescription>
          </Alert>
        </TabsContent>

        <TabsContent value="validation" className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Odd/Even Depth Test
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Compares transit depths between odd and even numbered events. 
                  Genuine planets show consistent depths; eclipsing binaries often differ.
                </p>
                <Badge variant="outline">Pass threshold: {"<"} 3 sigma difference</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Secondary Eclipse Check
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Searches for secondary eclipses at phase 0.5. Presence indicates 
                  an eclipsing binary rather than a planetary transit.
                </p>
                <Badge variant="outline">Pass: No significant secondary detected</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Transit Shape Analysis
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Evaluates transit shape for characteristic flat-bottom profile. 
                  V-shaped transits suggest grazing eclipsing binaries.
                </p>
                <Badge variant="outline">Pass: U-shape dominates V-shape</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  Centroid Shift Proxy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Checks for evidence that the transit signal comes from 
                  a background source rather than the target star.
                </p>
                <Badge variant="outline">Pass: No significant shift detected</Badge>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="methodology" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Our Physics-First Approach</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-invert max-w-none">
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Traditional exoplanet detection pipelines rely heavily on statistical 
                  thresholds like Signal-to-Noise Ratio (SNR) and Box-fitting Least Squares 
                  (BLS) power. While effective, these methods can miss genuine planets with 
                  weak signals or flag false positives with strong but misleading signals.
                </p>
                <p>
                  Our physics-first approach combines deep learning with astrophysical 
                  validation tests. The neural network learns to recognize transit patterns, 
                  while independent physics checks verify that the signal is consistent with 
                  a genuine planetary transit.
                </p>
                <p>
                  This dual approach catches eclipsing binaries, background contaminants, 
                  and instrumental artifacts that might fool traditional pipelines, while 
                  also recovering genuine planets that fall below classical detection thresholds.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
