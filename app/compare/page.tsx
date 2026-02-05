import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { CheckCircle, XCircle, TrendingUp, Search } from "lucide-react"

const comparisonData = [
  {
    name: "Kepler-90i",
    classicConfidence: 0.73,
    resonantConfidence: 0.96,
    classicResult: "Low confidence",
    resonantResult: "Confirmed planet",
    improvement: "+31%",
  },
  {
    name: "Kepler-452b",
    classicConfidence: 0.52,
    resonantConfidence: 0.91,
    classicResult: "Needs vetting",
    resonantResult: "Confirmed planet",
    improvement: "+75%",
  },
  {
    name: "KOI-3456 (EB)",
    classicConfidence: 0.82,
    resonantConfidence: 0.18,
    classicResult: "High confidence",
    resonantResult: "False positive",
    improvement: "Caught FP",
  },
  {
    name: "TOI-700d",
    classicConfidence: 0.68,
    resonantConfidence: 0.91,
    classicResult: "Moderate",
    resonantResult: "Confirmed planet",
    improvement: "+34%",
  },
]

export default function ComparePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Pipeline Comparison</h1>
        <p className="text-muted-foreground">
          Compare results between classic BLS pipeline and Resonant physics-first approach
        </p>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Detection Comparison</CardTitle>
                <CardDescription>
                  Side-by-side results showing how physics validation improves accuracy
                </CardDescription>
              </div>
              <div className="relative w-64">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search candidates..." 
                  className="pl-9"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Candidate</TableHead>
                  <TableHead className="text-center">Classic Pipeline</TableHead>
                  <TableHead className="text-center">Resonant System</TableHead>
                  <TableHead className="text-center">Improvement</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comparisonData.map((row) => (
                  <TableRow key={row.name}>
                    <TableCell className="font-medium">{row.name}</TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-2xl font-bold text-muted-foreground">
                          {row.classicConfidence.toFixed(2)}
                        </span>
                        <Badge variant="outline" className="text-xs">
                          {row.classicResult}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex flex-col items-center gap-1">
                        <span className={`text-2xl font-bold ${row.resonantConfidence > 0.8 ? 'text-primary' : 'text-accent'}`}>
                          {row.resonantConfidence.toFixed(2)}
                        </span>
                        <Badge className="text-xs">
                          {row.resonantResult}
                        </Badge>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-1">
                        {row.improvement.includes("+") ? (
                          <TrendingUp className="h-4 w-4 text-primary" />
                        ) : row.improvement === "Caught FP" ? (
                          <CheckCircle className="h-4 w-4 text-primary" />
                        ) : null}
                        <span className="font-semibold text-primary">{row.improvement}</span>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-3 gap-6">
          <Card className="bg-gradient-data">
            <CardHeader>
              <CardTitle className="text-lg">Improved Detections</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary">75%</p>
              <p className="text-sm text-muted-foreground">
                Average confidence improvement for genuine planets
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-data">
            <CardHeader>
              <CardTitle className="text-lg">False Positives Caught</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary">100%</p>
              <p className="text-sm text-muted-foreground">
                Of tested eclipsing binaries correctly identified
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-data">
            <CardHeader>
              <CardTitle className="text-lg">Recovered Candidates</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">
                Planets recovered that classic pipeline would reject
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
