import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Shield, FileCheck, AlertTriangle, TrendingDown, Search,
  CheckCircle, XCircle, Clock, DollarSign, Car, BarChart3,
  FileText, Users, Scale, History, Percent
} from "lucide-react";
import { StatsCard } from "@/components/parts/StatsCard";
import { AnalyticsChart } from "@/components/dashboards/AnalyticsChart";
import { SiteSEO } from "@/components/shared/SiteSEO";

const claimsData = [
  { name: 'Jul', submitted: 245, approved: 198, denied: 32, fraudulent: 15 },
  { name: 'Aug', submitted: 312, approved: 256, denied: 38, fraudulent: 18 },
  { name: 'Sep', submitted: 287, approved: 241, denied: 29, fraudulent: 17 },
  { name: 'Oct', submitted: 356, approved: 298, denied: 41, fraudulent: 17 },
  { name: 'Nov', submitted: 298, approved: 252, denied: 32, fraudulent: 14 },
  { name: 'Dec', submitted: 412, approved: 358, denied: 38, fraudulent: 16 },
];

const recentClaims = [
  { id: "CLM-2024-8921", vehicle: "2022 BMW X5", type: "Collision", amount: "$12,450", status: "pending", risk: "low", date: "2024-01-14" },
  { id: "CLM-2024-8920", vehicle: "2023 Tesla Model Y", type: "Parts Replacement", amount: "$4,800", status: "approved", risk: "verified", date: "2024-01-13" },
  { id: "CLM-2024-8919", vehicle: "2021 Mercedes C300", type: "Theft", amount: "$8,200", status: "review", risk: "high", date: "2024-01-12" },
  { id: "CLM-2024-8918", vehicle: "2020 Toyota Camry", type: "Parts Replacement", amount: "$2,100", status: "approved", risk: "verified", date: "2024-01-11" },
];

const fraudIndicators = [
  { label: "Unverified Parts", count: 23, severity: "high" },
  { label: "VIN Mismatch", count: 8, severity: "critical" },
  { label: "Duplicate Claims", count: 5, severity: "medium" },
  { label: "Price Anomalies", count: 12, severity: "medium" },
];

export default function InsurancePortal() {
  const [activeTab, setActiveTab] = useState("overview");
  const [searchQuery, setSearchQuery] = useState("");
  
  return (
    <div className="min-h-screen bg-background">
      <SiteSEO 
        title="Insurance Portal | PartLedger"
        description="Verify claims with blockchain-backed part provenance and reduce fraud with verified data."
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 text-primary-foreground py-14 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-primary-foreground/15 backdrop-blur-xl">
                <Shield className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Insurance Verification Portal</h1>
                <p className="text-primary-foreground/70 mt-1">
                  AutoAssure Insurance • Claims & Verification
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary-foreground/50" />
                <Input 
                  placeholder="Search claims, VIN, or policy..." 
                  className="pl-10 w-64 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <Button variant="secondary" className="gap-2">
                <FileText className="h-4 w-4" />
                New Claim
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatsCard
            title="Claims This Month"
            value="412"
            subtitle="87% approval rate"
            icon={FileCheck}
            trend={{ value: 12, isPositive: true }}
            color="primary"
          />
          <StatsCard
            title="Verified Parts"
            value="98.2%"
            subtitle="Blockchain verified"
            icon={CheckCircle}
            color="success"
          />
          <StatsCard
            title="Fraud Prevented"
            value="$2.4M"
            subtitle="This quarter"
            icon={TrendingDown}
            trend={{ value: 34, isPositive: true }}
            color="accent"
          />
          <StatsCard
            title="Avg Processing"
            value="1.8 days"
            subtitle="Claim turnaround"
            icon={Clock}
            trend={{ value: 15, isPositive: true }}
            color="warning"
          />
          <StatsCard
            title="Active Policies"
            value="48.2K"
            subtitle="Linked to PartLedger"
            icon={Users}
            color="info"
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="claims">Claims Queue</TabsTrigger>
            <TabsTrigger value="verification">Part Verification</TabsTrigger>
            <TabsTrigger value="fraud">Fraud Detection</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Claims Chart */}
              <div className="lg:col-span-2">
                <AnalyticsChart
                  title="Claims Overview"
                  description="Monthly claims processing statistics"
                  type="bar"
                  data={claimsData}
                  dataKey="approved"
                  secondaryDataKey="denied"
                  height={350}
                />
              </div>
              
              {/* Fraud Alerts */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertTriangle className="h-5 w-5 text-destructive" />
                    Fraud Indicators
                  </CardTitle>
                  <CardDescription>Items requiring review</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {fraudIndicators.map((indicator, i) => (
                    <div 
                      key={i}
                      className={`p-3 rounded-lg flex items-center justify-between ${
                        indicator.severity === 'critical' ? 'bg-destructive/10' :
                        indicator.severity === 'high' ? 'bg-warning/10' : 'bg-muted'
                      }`}
                    >
                      <div>
                        <div className="font-medium text-sm">{indicator.label}</div>
                        <div className="text-xs text-muted-foreground capitalize">{indicator.severity} priority</div>
                      </div>
                      <Badge variant={
                        indicator.severity === 'critical' ? 'destructive' :
                        indicator.severity === 'high' ? 'default' : 'secondary'
                      }>
                        {indicator.count}
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              {/* Recent Claims */}
              <Card className="border-0 shadow-lg lg:col-span-3">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Recent Claims</CardTitle>
                    <CardDescription>Latest claims requiring attention</CardDescription>
                  </div>
                  <Button variant="outline">View All Claims</Button>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentClaims.map((claim) => (
                      <div 
                        key={claim.id}
                        className="flex items-center justify-between p-4 rounded-xl border hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`p-2 rounded-lg ${
                            claim.risk === 'verified' ? 'bg-success/10' :
                            claim.risk === 'high' ? 'bg-destructive/10' : 'bg-muted'
                          }`}>
                            {claim.risk === 'verified' ? (
                              <CheckCircle className="h-5 w-5 text-success" />
                            ) : claim.risk === 'high' ? (
                              <AlertTriangle className="h-5 w-5 text-destructive" />
                            ) : (
                              <Clock className="h-5 w-5 text-muted-foreground" />
                            )}
                          </div>
                          <div>
                            <div className="font-medium">{claim.id}</div>
                            <div className="text-sm text-muted-foreground">
                              {claim.vehicle} • {claim.type}
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <div className="font-semibold">{claim.amount}</div>
                            <div className="text-xs text-muted-foreground">{claim.date}</div>
                          </div>
                          
                          <Badge variant={
                            claim.status === 'approved' ? 'default' :
                            claim.status === 'pending' ? 'secondary' : 'outline'
                          }>
                            {claim.status}
                          </Badge>
                          
                          <Button variant="ghost" size="sm">Review</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="claims">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Claims Processing Queue</CardTitle>
                <CardDescription>All pending claims awaiting review</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Full claims queue interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="verification">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Part Verification</CardTitle>
                  <CardDescription>Verify part authenticity and ownership chain</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Enter Part ID, Serial Number, or QR Code..." className="pl-10" />
                  </div>
                  <Button className="w-full">Verify Part</Button>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Verification Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <div className="font-medium">Instant Authenticity Check</div>
                      <div className="text-sm text-muted-foreground">Verify genuine OEM parts in seconds</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <History className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Complete Ownership History</div>
                      <div className="text-sm text-muted-foreground">Track part provenance from manufacture</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Scale className="h-5 w-5 text-warning mt-0.5" />
                    <div>
                      <div className="font-medium">Fair Value Assessment</div>
                      <div className="text-sm text-muted-foreground">Market-based pricing for accurate claims</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="fraud">
            <div className="grid lg:grid-cols-3 gap-6">
              <Card className="border-0 shadow-lg lg:col-span-2">
                <CardHeader>
                  <CardTitle>Fraud Detection Dashboard</CardTitle>
                  <CardDescription>AI-powered anomaly detection</CardDescription>
                </CardHeader>
                <CardContent>
                  <AnalyticsChart
                    title=""
                    type="area"
                    data={claimsData}
                    dataKey="fraudulent"
                    height={300}
                    colors={['hsl(0, 80%, 55%)']}
                  />
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Prevention Stats</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center p-4 rounded-xl bg-success/10">
                    <div className="text-4xl font-bold text-success">$2.4M</div>
                    <div className="text-sm text-muted-foreground mt-1">Fraud Prevented (QTD)</div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm">Detection Rate</span>
                      <span className="font-medium">94.2%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">False Positives</span>
                      <span className="font-medium">2.1%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Avg Detection Time</span>
                      <span className="font-medium">4.2 hours</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <AnalyticsChart
                title="Claims by Status"
                type="line"
                data={claimsData}
                dataKey="approved"
                secondaryDataKey="denied"
                height={300}
              />
              <AnalyticsChart
                title="Fraud Detection Trend"
                type="area"
                data={claimsData}
                dataKey="fraudulent"
                height={300}
                colors={['hsl(0, 80%, 55%)']}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
