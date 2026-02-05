"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Clock, 
  Unlock, 
  DollarSign, 
  ShieldCheck, 
  FileSearch, 
  AlertTriangle, 
  MessageSquare,
  ArrowRight,
  CheckCircle2,
  XCircle,
  FileText,
  Mail,
  Phone,
  ChevronRight
} from "lucide-react"

export default function Home() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background with aerospace imagery effect */}
        <div className="absolute inset-0 bg-gradient-aerospace" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "2s" }} />
        </div>
        
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(hsl(185 70% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(185 70% 50% / 0.3) 1px, transparent 1px)`,
          backgroundSize: "50px 50px"
        }} />

        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="outline" className="text-primary border-primary/30 bg-primary/5">
                UnitAerospace
              </Badge>
              <span className="text-muted-foreground text-sm">Components Detection & Analysis</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
              QUALITY INSPECTOR TOOL to{" "}
              <span className="text-primary">DETECT</span> &{" "}
              <span className="text-accent">RESOLVE</span>{" "}
              {"\"ISSUES\""} in AEROSPACE COMPONENTS PAPERWORK
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl">
              AI-powered 8130-3 analysis that finds compliance errors, routes them to the seller, and turns quarantined parts into revenue.
            </p>
            <p className="text-lg text-muted-foreground/80 mb-10">
              Quality Safety Assurance — Detecting & solving issues in aerospace paperwork to prevent disasters & fatality.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="glow-primary text-base px-8">
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-base px-8"
                onClick={() => scrollToSection("report")}
              >
                View Sample Audit Report
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-3 bg-muted-foreground/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Value at a Glance Strip */}
      <section className="py-16 bg-gradient-hangar border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all hover:glow-primary">
              <CardHeader className="pb-2">
                <Clock className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Accelerating Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Cut resolution from ~6 days to hours with pre-arrival checks and closed-loop tickets.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all hover:glow-primary">
              <CardHeader className="pb-2">
                <Unlock className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Unlocking Quarantined Parts</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Convert illiquid capital locked in FAA-restricted inventory back into sellable parts.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all hover:glow-primary">
              <CardHeader className="pb-2">
                <DollarSign className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Cost Savings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Reduce manual {"\"backtracking\""} work for inspectors and minimize wasted labor.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 border-border/50 hover:border-primary/30 transition-all hover:glow-primary">
              <CardHeader className="pb-2">
                <ShieldCheck className="h-10 w-10 text-primary mb-2" />
                <CardTitle className="text-lg">Safety & Audit Approval</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Maintain paperwork integrity and be ready for FAA audits at any moment.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">From paperwork to approved components.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Three steps to transform your quarantine queue into cleared inventory.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl border border-primary/30">
                  1
                </div>
                <ChevronRight className="hidden md:block absolute -right-4 top-4 h-6 w-6 text-muted-foreground/30" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Component Analysis & Digitized Paperwork</h3>
              <p className="text-muted-foreground">
                Ingest 8130-3 tags and supporting documents; extract structured data for every shipment.
              </p>
              <div className="mt-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <FileSearch className="h-8 w-8 text-primary/60 mb-2" />
                <p className="text-xs text-muted-foreground">Digitized paperwork with organization, personnel POC, remaining life status</p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl border border-primary/30">
                  2
                </div>
                <ChevronRight className="hidden md:block absolute -right-4 top-4 h-6 w-6 text-muted-foreground/30" />
              </div>
              <h3 className="text-xl font-semibold mb-3">8130-3 TAG Analysis & Issue Detection</h3>
              <p className="text-muted-foreground">
                AI checks each form against FAA ORDER 8130.21H and your custom rules to flag errors, omissions, and forensic anomalies.
              </p>
              <div className="mt-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <AlertTriangle className="h-8 w-8 text-accent/60 mb-2" />
                <p className="text-xs text-muted-foreground">Detections: Errors, Forensics, Omissions, Cross Checking, Custom Compliance</p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-xl border border-primary/30">
                  3
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Buyer Dashboard & Resolution Requests</h3>
              <p className="text-muted-foreground">
                QA triage screen that sends resolution requests to the seller with citations and evidence, tracking status until resolved.
              </p>
              <div className="mt-4 p-4 bg-card/50 rounded-lg border border-border/50">
                <MessageSquare className="h-8 w-8 text-primary/60 mb-2" />
                <p className="text-xs text-muted-foreground">Live status updates, timestamps, POC, automatic resolution requests</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product in Action Section */}
      <section id="product" className="py-24 bg-gradient-hangar">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Inspector cockpit for quarantined parts.</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A complete buyer & seller portal for component shipments with audit trails and communication links.
            </p>
          </div>

          {/* Block 1 - Document Review */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-0">Document Review</Badge>
              <h3 className="text-2xl font-bold mb-4">Buyer & Seller Portal</h3>
              <p className="text-muted-foreground mb-6">
                All component shipments in one place with clean / pending / quarantined status, audit trails, and filters by PO, part, and serial number.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(160,70%,45%)]" />
                  <span className="text-sm">Real-time status tracking</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(160,70%,45%)]" />
                  <span className="text-sm">Complete audit trails</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(160,70%,45%)]" />
                  <span className="text-sm">Advanced filtering and search</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border/50 p-6 shadow-2xl">
              {/* Mock Dashboard Table */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground border-b border-border pb-2">
                  <span className="w-24">Document</span>
                  <span className="w-20">Part #</span>
                  <span className="w-24">Serial</span>
                  <span className="w-20">Status</span>
                </div>
                <div className="flex items-center justify-between text-sm py-2 hover:bg-muted/20 rounded px-1">
                  <span className="w-24 truncate">8130-3 Tag</span>
                  <span className="w-20 text-muted-foreground">PN-2847</span>
                  <span className="w-24 text-muted-foreground">SN-1023</span>
                  <Badge className="w-20 bg-[hsl(160,70%,45%)]/10 text-[hsl(160,70%,45%)] border-0">Clean</Badge>
                </div>
                <div className="flex items-center justify-between text-sm py-2 hover:bg-muted/20 rounded px-1">
                  <span className="w-24 truncate">Material Cert</span>
                  <span className="w-20 text-muted-foreground">PN-9182</span>
                  <span className="w-24 text-muted-foreground">SN-4451</span>
                  <Badge className="w-20 bg-accent/10 text-accent border-0">Quarantine</Badge>
                </div>
                <div className="flex items-center justify-between text-sm py-2 hover:bg-muted/20 rounded px-1">
                  <span className="w-24 truncate">CoC Form</span>
                  <span className="w-20 text-muted-foreground">PN-7743</span>
                  <span className="w-24 text-muted-foreground">SN-8872</span>
                  <Badge className="w-20 bg-yellow-500/10 text-yellow-500 border-0">Pending</Badge>
                </div>
                <div className="flex items-center justify-between text-sm py-2 hover:bg-muted/20 rounded px-1">
                  <span className="w-24 truncate">8130-3 Tag</span>
                  <span className="w-20 text-muted-foreground">PN-5521</span>
                  <span className="w-24 text-muted-foreground">SN-3347</span>
                  <Badge className="w-20 bg-[hsl(160,70%,45%)]/10 text-[hsl(160,70%,45%)] border-0">Clean</Badge>
                </div>
              </div>
            </div>
          </div>

          {/* Block 2 - 8130-3 TAG Analysis */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 bg-card rounded-xl border border-border/50 p-6 shadow-2xl">
              {/* Mock Extraction Panel */}
              <div className="text-xs text-muted-foreground mb-4 pb-2 border-b border-border">
                FAA FORM 8130-3 — Extracted Data
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Part Number</p>
                    <p className="text-sm font-medium">6810-AA-9200</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Serial Number</p>
                    <p className="text-sm font-medium">SN-847291</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Hours</p>
                    <p className="text-sm font-medium">12,450 TSN</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Cycles</p>
                    <p className="text-sm font-medium">8,230 CSN</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Organization</p>
                  <p className="text-sm font-medium">FJ Turbine Components LLC</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Certificate Number</p>
                  <p className="text-sm font-medium text-accent">Missing — Error Detected</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-primary/10 text-primary border-0">8130-3 TAG Analysis</Badge>
              <h3 className="text-2xl font-bold mb-4">AI-Powered Data Extraction</h3>
              <p className="text-muted-foreground mb-6">
                Instant extraction of part number, serial number, hours & cycles, organization, and certificate number from each 8130-3 tag.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(160,70%,45%)]" />
                  <span className="text-sm">Automated field extraction</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(160,70%,45%)]" />
                  <span className="text-sm">Cross-reference validation</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-[hsl(160,70%,45%)]" />
                  <span className="text-sm">Real-time error detection</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Block 3 - Compliance Findings */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-accent/10 text-accent border-0">Compliance Findings</Badge>
              <h3 className="text-2xl font-bold mb-4">Precision Issue Detection</h3>
              <p className="text-muted-foreground mb-6">
                Each finding includes the exact block, description, and FAA ORDER 8130.21H citation, with a one-click {"\"Send Resolution Request\""} flow.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Exact citation references</span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  <span className="text-sm">One-click resolution requests</span>
                </li>
                <li className="flex items-center gap-3">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  <span className="text-sm">Automated seller notification</span>
                </li>
              </ul>
            </div>
            <div className="bg-card rounded-xl border border-border/50 p-6 shadow-2xl">
              {/* Mock Findings Panel */}
              <div className="text-xs text-muted-foreground mb-4 pb-2 border-b border-border flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-accent" />
                3 Compliance Issues Detected
              </div>
              <div className="space-y-4">
                <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-medium">Missing Certificate Number</p>
                    <Badge variant="outline" className="text-xs border-accent/30 text-accent">Block 4</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">The organization{"\'"}s certificate number is missing from Block 4.</p>
                  <p className="text-xs text-primary">FAA ORDER 8130.21H — Section 2-8d(1)</p>
                </div>
                <div className="p-3 bg-accent/5 border border-accent/20 rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <p className="text-sm font-medium">Serial Number Field Blank</p>
                    <Badge variant="outline" className="text-xs border-accent/30 text-accent">Block 10</Badge>
                  </div>
                  <p className="text-xs text-muted-foreground mb-2">Block 10 must contain serial number or {"\"N/A\""}.</p>
                  <p className="text-xs text-primary">FAA ORDER 8130.21H — Section 2-8j</p>
                </div>
                <Button size="sm" className="w-full mt-2">
                  Send Resolution Request
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Audit Report Section */}
      <section id="report" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Sample 8130-3 Compliance Audit Report</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {"Here\"s"} an example of what UnitAerospace generates for a single 8130-3 tag.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Card className="bg-card border-border shadow-2xl overflow-hidden">
              {/* Report Header */}
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center">
                    <FileText className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold">UnitAerospace Compliance Audit Report</h3>
                    <p className="text-xs text-muted-foreground">Regulatory Reference: FAA ORDER 8130.21H Section 2-8</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="text-muted-foreground text-xs">Document</p>
                    <p className="font-medium">FJ Turbine 8130 Tag</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Duration</p>
                    <p className="font-medium">67.80s</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground text-xs">Findings</p>
                    <p className="font-medium text-accent">3 Error(s)</p>
                  </div>
                </div>
              </div>

              {/* Executive Summary */}
              <div className="p-6 border-b border-border">
                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wide text-muted-foreground">Executive Summary</h4>
                <p className="text-sm text-foreground">
                  This FAA Form 8130-3 has been analyzed and <span className="text-accent font-medium">3 compliance error(s)</span> were identified. The following findings require attention to ensure conformity with FAA ORDER 8130.21H Section 2-8 requirements for domestic airworthiness approvals.
                </p>
              </div>

              {/* Detailed Findings */}
              <div className="p-6">
                <h4 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">Detailed Findings</h4>
                <div className="space-y-4">
                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-4 w-4 text-accent" />
                      <span className="font-medium">Finding #1: Missing Certificate Number in Organization Block</span>
                      <Badge variant="outline" className="ml-auto text-xs">Section 2-8d(1)</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The organization{"\'"}s certificate or project number is missing from Block 4. The data shows the certificate_number field is empty.
                    </p>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-4 w-4 text-accent" />
                      <span className="font-medium">Finding #2: Serial Number Field is Blank</span>
                      <Badge variant="outline" className="ml-auto text-xs">Section 2-8j</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Block 10 is blank. It must contain the item{"\'"}s serial number or be marked {"\"N/A\""} if a serial number is not applicable.
                    </p>
                  </div>

                  <div className="p-4 bg-accent/5 rounded-lg border border-accent/20">
                    <div className="flex items-center gap-2 mb-2">
                      <XCircle className="h-4 w-4 text-accent" />
                      <span className="font-medium">Finding #3: Incorrect Certification Block Used</span>
                      <Badge variant="outline" className="ml-auto text-xs">Section 2-8r</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      The product status in Block 11 is {"\"NEW\""}, but the return-to-service certification in Block 14 was completed instead of the new product airworthiness approval in Block 13.
                    </p>
                  </div>
                </div>

                <p className="text-xs text-muted-foreground mt-6 text-center">
                  Generated by UnitAerospace 8130-3 TAG Analysis System — This report is for informational purposes only.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Why It Matters - Metrics Band */}
      <section className="py-16 bg-gradient-metrics border-y border-border/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">3-30 days</div>
              <div className="text-2xl font-bold text-foreground mb-1">to hours</div>
              <p className="text-sm text-muted-foreground">
                Typical discrepancy resolution shrinks from weeks to hours.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">20-30%</div>
              <div className="text-lg font-medium text-foreground mb-1">Issue Error Rate</div>
              <p className="text-sm text-muted-foreground">
                Typical receiving & final inspection paperwork errors we detect.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$75B</div>
              <div className="text-lg font-medium text-foreground mb-1">Excess Stock</div>
              <p className="text-sm text-muted-foreground">
                Industry-wide inventory where illiquid capital hides in quarantine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA + Contact Footer */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Left CTA */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to unstick quarantined parts?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Book a walkthrough of the QA Triage Control Center and see how many of your forms fail 8130.21H checks.
              </p>
              <Button size="lg" className="glow-primary text-base px-8">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Right Contact Card */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-lg">Get in Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    LB
                  </div>
                  <div>
                    <p className="font-semibold">Lukas Buse</p>
                    <p className="text-sm text-muted-foreground">Founder — UnitAerospace</p>
                  </div>
                </div>
                <div className="space-y-2 pt-2">
                  <a href="mailto:Lukasbuse@unit-aerospace.com" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" />
                    Lukasbuse@unit-aerospace.com
                  </a>
                  <a href="tel:602-317-4421" className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors">
                    <Phone className="h-4 w-4" />
                    602-317-4421
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              2024 UnitAerospace. Components Detection & Analysis.
            </p>
            <p className="text-xs text-muted-foreground">
              Quality Safety Assurance — Detecting & solving issues in aerospace paperwork.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
