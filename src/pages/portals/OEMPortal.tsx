import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { 
  Building2, Package, TrendingUp, Users, Star, Globe, 
  Megaphone, BarChart3, Code, Shield, ExternalLink, Plus,
  Image, FileText, Target, DollarSign, Sparkles, Award
} from "lucide-react";
import { StatsCard } from "@/components/parts/StatsCard";
import { AnalyticsChart } from "@/components/dashboards/AnalyticsChart";
import { SiteSEO } from "@/components/shared/SiteSEO";

const monthlyData = [
  { name: 'Jul', registrations: 12000, searches: 45000, conversions: 2800 },
  { name: 'Aug', registrations: 14500, searches: 52000, conversions: 3200 },
  { name: 'Sep', registrations: 13200, searches: 48000, conversions: 2900 },
  { name: 'Oct', registrations: 16800, searches: 61000, conversions: 3800 },
  { name: 'Nov', registrations: 18200, searches: 72000, conversions: 4500 },
  { name: 'Dec', registrations: 21000, searches: 85000, conversions: 5200 },
];

const promotions = [
  { id: 1, name: "Winter Tire Campaign", status: "active", impressions: 125000, clicks: 8500, budget: "$5,000", spent: "$3,420" },
  { id: 2, name: "EV Battery Launch", status: "scheduled", impressions: 0, clicks: 0, budget: "$12,000", spent: "$0" },
  { id: 3, name: "Brake System Promo", status: "completed", impressions: 245000, clicks: 18200, budget: "$8,000", spent: "$8,000" },
];

export default function OEMPortal() {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="min-h-screen bg-background">
      <SiteSEO 
        title="OEM Partner Portal | PartLedger"
        description="Showcase your brand, manage promotions, and access deep analytics on the PartLedger platform."
      />
      
      {/* Branded Header */}
      <div className="bg-gradient-to-r from-primary via-primary/90 to-info text-primary-foreground py-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-2xl bg-primary-foreground/20 backdrop-blur-xl flex items-center justify-center border border-primary-foreground/20">
                <Building2 className="h-10 w-10" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-4xl font-bold">Continental AG</h1>
                  <Badge className="bg-amber-400 text-amber-900">
                    <Star className="h-3 w-3 mr-1" />
                    Platinum Partner
                  </Badge>
                </div>
                <p className="text-primary-foreground/70 text-lg">
                  OEM Partner Portal • Enterprise Tier
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button variant="secondary" className="gap-2">
                <Globe className="h-4 w-4" />
                Public Profile
              </Button>
              <Button className="bg-primary-foreground/20 hover:bg-primary-foreground/30 border-primary-foreground/20 gap-2">
                <Megaphone className="h-4 w-4" />
                New Campaign
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats Row */}
      <div className="max-w-7xl mx-auto px-6 -mt-8 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatsCard
            title="Parts in Network"
            value="2.4M"
            subtitle="Registered parts"
            icon={Package}
            trend={{ value: 18, isPositive: true }}
            color="primary"
          />
          <StatsCard
            title="Monthly Impressions"
            value="1.2M"
            subtitle="Brand visibility"
            icon={Target}
            trend={{ value: 24, isPositive: true }}
            color="accent"
          />
          <StatsCard
            title="Consumer Searches"
            value="85K"
            subtitle="This month"
            icon={Users}
            trend={{ value: 12, isPositive: true }}
            color="success"
          />
          <StatsCard
            title="Conversion Rate"
            value="6.1%"
            subtitle="Search to purchase"
            icon={TrendingUp}
            trend={{ value: 8, isPositive: true }}
            color="warning"
          />
          <StatsCard
            title="Revenue Share"
            value="$48.2K"
            subtitle="This month"
            icon={DollarSign}
            trend={{ value: 15, isPositive: true }}
            color="info"
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8 bg-muted/50">
            <TabsTrigger value="overview" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="brand" className="gap-2">
              <Sparkles className="h-4 w-4" />
              Brand Profile
            </TabsTrigger>
            <TabsTrigger value="promotions" className="gap-2">
              <Megaphone className="h-4 w-4" />
              Promotions
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              Deep Analytics
            </TabsTrigger>
            <TabsTrigger value="api" className="gap-2">
              <Code className="h-4 w-4" />
              API & Integrations
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Charts */}
              <div className="lg:col-span-2 space-y-6">
                <AnalyticsChart
                  title="Performance Overview"
                  description="Part registrations, searches, and conversions"
                  type="area"
                  data={monthlyData}
                  dataKey="registrations"
                  secondaryDataKey="conversions"
                  height={320}
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <AnalyticsChart
                    title="Search Volume"
                    description="Monthly consumer searches"
                    type="bar"
                    data={monthlyData}
                    dataKey="searches"
                    height={240}
                  />
                  <AnalyticsChart
                    title="Conversion Trend"
                    description="Search to purchase rate"
                    type="line"
                    data={monthlyData}
                    dataKey="conversions"
                    height={240}
                    colors={['hsl(155, 85%, 45%)']}
                  />
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <Plus className="h-4 w-4" />
                      Add Product Line
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <Image className="h-4 w-4" />
                      Update Brand Assets
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <Megaphone className="h-4 w-4" />
                      Create Campaign
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <FileText className="h-4 w-4" />
                      Export Report
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Partnership Benefits */}
                <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100/50 dark:from-amber-950/20 dark:to-amber-900/10">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-amber-700 dark:text-amber-400">
                      <Award className="h-5 w-5" />
                      Platinum Benefits
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-amber-600" />
                      <span>Priority brand placement</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-amber-600" />
                      <span>Featured in consumer searches</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-amber-600" />
                      <span>Dedicated account manager</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-amber-600" />
                      <span>Custom API integrations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Shield className="h-4 w-4 text-amber-600" />
                      <span>Advanced analytics access</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="brand">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Brand Information</CardTitle>
                  <CardDescription>Manage how your brand appears across the platform</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-6">
                    <div className="w-24 h-24 rounded-xl bg-muted flex items-center justify-center border-2 border-dashed">
                      <Image className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <div>
                      <Button variant="outline" size="sm">Upload Logo</Button>
                      <p className="text-xs text-muted-foreground mt-2">PNG, SVG up to 2MB</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium">Company Name</label>
                      <Input defaultValue="Continental AG" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Tagline</label>
                      <Input defaultValue="Technology company specializing in automotive parts" className="mt-1" />
                    </div>
                    <div>
                      <label className="text-sm font-medium">Website</label>
                      <Input defaultValue="https://www.continental.com" className="mt-1" />
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Product Categories</CardTitle>
                  <CardDescription>Categories you're active in</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    <Badge>Tires</Badge>
                    <Badge>Brake Systems</Badge>
                    <Badge>Sensors</Badge>
                    <Badge>EV Components</Badge>
                    <Badge>Powertrain</Badge>
                    <Badge variant="outline" className="cursor-pointer">
                      <Plus className="h-3 w-3 mr-1" />
                      Add Category
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="promotions">
            <Card className="border-0 shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Promotional Campaigns</CardTitle>
                  <CardDescription>Manage your advertising and promotional content</CardDescription>
                </div>
                <Button className="gap-2">
                  <Plus className="h-4 w-4" />
                  New Campaign
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {promotions.map((promo) => (
                    <div 
                      key={promo.id}
                      className="flex items-center justify-between p-4 rounded-xl border hover:bg-muted/50 transition-colors"
                    >
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-lg bg-primary/10">
                          <Megaphone className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <div className="font-medium">{promo.name}</div>
                          <div className="text-sm text-muted-foreground">
                            {promo.impressions.toLocaleString()} impressions • {promo.clicks.toLocaleString()} clicks
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="text-right">
                          <div className="text-sm font-medium">{promo.spent} / {promo.budget}</div>
                          <div className="text-xs text-muted-foreground">Budget spent</div>
                        </div>
                        <Badge variant={
                          promo.status === 'active' ? 'default' : 
                          promo.status === 'scheduled' ? 'secondary' : 'outline'
                        }>
                          {promo.status}
                        </Badge>
                        <Button variant="ghost" size="sm">Edit</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <div className="grid gap-6">
              <AnalyticsChart
                title="Comprehensive Performance Analytics"
                description="Track all key metrics over time"
                type="area"
                data={monthlyData}
                dataKey="registrations"
                secondaryDataKey="searches"
                height={400}
              />
            </div>
          </TabsContent>
          
          <TabsContent value="api">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>API & Integrations</CardTitle>
                <CardDescription>Connect your systems directly to PartLedger</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 rounded-lg bg-muted/50 flex items-center justify-between">
                  <div>
                    <div className="font-medium">REST API Access</div>
                    <div className="text-sm text-muted-foreground">Full access to parts registration and analytics APIs</div>
                  </div>
                  <Switch defaultChecked />
                </div>
                <div className="p-4 rounded-lg bg-muted/50 flex items-center justify-between">
                  <div>
                    <div className="font-medium">Webhook Notifications</div>
                    <div className="text-sm text-muted-foreground">Real-time events for registrations and recalls</div>
                  </div>
                  <Switch />
                </div>
                <div className="p-4 rounded-lg bg-muted/50 flex items-center justify-between">
                  <div>
                    <div className="font-medium">ERP Integration</div>
                    <div className="text-sm text-muted-foreground">SAP, Oracle, Microsoft Dynamics connectors</div>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
