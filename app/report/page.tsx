import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Download, ExternalLink, CheckCircle } from "lucide-react"

export default function ReportPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Research Reports</h1>
        <p className="text-muted-foreground">
          Access detailed reports and documentation on our methodology and findings
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Technical Methodology
                </CardTitle>
                <CardDescription>
                  Complete documentation of our physics-first detection approach
                </CardDescription>
              </div>
              <Badge>PDF</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Neural network architecture details
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Physics validation test specifications
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Training data and preprocessing
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Performance benchmarks
                </p>
              </div>
              <Button className="w-full" variant="outline">
                <Download className="h-4 w-4" />
                Download Report
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Candidate Catalog
                </CardTitle>
                <CardDescription>
                  Full list of detected and validated exoplanet candidates
                </CardDescription>
              </div>
              <Badge>CSV</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Candidate identifiers and coordinates
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Transit parameters (period, depth, duration)
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Validation test results
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Confidence scores
                </p>
              </div>
              <Button className="w-full" variant="outline">
                <Download className="h-4 w-4" />
                Download Catalog
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  Validation Report
                </CardTitle>
                <CardDescription>
                  Detailed validation results for each candidate
                </CardDescription>
              </div>
              <Badge>PDF</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Individual candidate assessments
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Phase-folded light curves
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Test-by-test results
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Comparison with published values
                </p>
              </div>
              <Button className="w-full" variant="outline">
                <Download className="h-4 w-4" />
                Download Report
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-primary" />
                  API Documentation
                </CardTitle>
                <CardDescription>
                  Integrate our detection pipeline into your workflow
                </CardDescription>
              </div>
              <Badge variant="secondary">Docs</Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-sm text-muted-foreground space-y-2">
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  REST API endpoints
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Input data formats
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Response schemas
                </p>
                <p className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-primary" />
                  Code examples
                </p>
              </div>
              <Button className="w-full" variant="outline">
                <ExternalLink className="h-4 w-4" />
                View Documentation
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
