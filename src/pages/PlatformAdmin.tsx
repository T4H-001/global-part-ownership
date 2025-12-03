import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LayoutDashboard, Users, Building2, DollarSign, Shield,
  TrendingUp, Package, Globe, Settings, AlertTriangle,
  CheckCircle, Clock, Zap, Database
} from "lucide-react";
import { StatsCard } from "@/components/parts/StatsCard";
import { AnalyticsChart } from "@/components/dashboards/AnalyticsChart";
import { RevenueMetrics } from "@/components/dashboards/RevenueMetrics";
import { PartnerShowcase } from "@/components/dashboards/PartnerShowcase";
import { SiteSEO } from "@/components/shared/SiteSEO";

const platformData = [
  { name: 'Jul', users: 12000, parts: 450000, transactions: 28000, revenue: 125000 },
  { name: 'Aug', users: 14500, parts: 520000, transactions: 32000, revenue: 148000 },
  { name: 'Sep', users: 16200, parts: 580000, transactions: 35000, revenue: 162000 },
  { name: 'Oct', users: 19800, parts: 680000, transactions: 42000, revenue: 198000 },
  { name: 'Nov', users: 24200, parts: 820000, transactions: 51000, revenue: 242000 },
  { name: 'Dec', users: 28500, parts: 980000, transactions: 62000, revenue: 295000 },
];

const partnerData = [
  { id: '1', name: 'Continental AG', category: 'oem' as const, tier: 'platinum' as const, featured: true, stats: { partsRegistered: 2400000, monthlyVolume: 85000, verificationRate: 99.8 } },
  { id: '2', name: 'Bosch', category: 'oem' as const, tier: 'platinum' as const, featured: true, stats: { partsRegistered: 1800000, monthlyVolume: 72000, verificationRate: 99.9 } },
  { id: '3', name: 'AutoZone', category: 'retailer' as const, tier: 'gold' as const, featured: false },
  { id: '4', name: 'LKQ Corporation', category: 'supplier' as const, tier: 'gold' as const, featured: false },
  { id: '5', name: 'Tyrepower', category: 'retailer' as const, tier: 'silver' as const, featured: false },
  { id: '6', name: 'GreenCycle', category: 'recycler' as const, tier: 'silver' as const, featured: false },
];

const revenueMetrics = {
  totalRevenue: { label: 'Total Revenue', value: '$2.95M', change: 22, target: 3500000, current: 2950000 },
  subscriptions: { label: 'Subscription Revenue', value: '$1.2M', change: 18 },
  transactions: { label: 'Transaction Fees', value: '$820K', change: 28 },
  apiCalls: { label: 'API Revenue', value: '$340K', change: 45 },
  premiumListings: { label: 'Premium Listings', value: '$290K', change: 32 },
  partnerFees: { label: 'Partner Fees', value: '$300K', change: 15 },
};

export default function PlatformAdmin() {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="min-h-screen bg-background">
      <SiteSEO 
        title="Platform Admin | PartLedger"
        description="PartLedger platform administration and analytics dashboard."
      />
      
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-10 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-primary-foreground/10">
                <LayoutDashboard className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Platform Administration</h1>
                <p className="text-primary-foreground/70">
                  PartLedger Global Dashboard
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Badge className="bg-success/20 text-success border-success/30">
                <Zap className="h-3 w-3 mr-1" />
                All Systems Operational
              </Badge>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatsCard
            title="Total Users"
            value="28.5K"
            subtitle="Active accounts"
            icon={Users}
            trend={{ value: 18, isPositive: true }}
            color="primary"
          />
          <StatsCard
            title="Parts Registered"
            value="980K"
            subtitle="Blockchain verified"
            icon={Package}
            trend={{ value: 20, isPositive: true }}
            color="accent"
          />
          <StatsCard
            title="Partner Organizations"
            value="196"
            subtitle="OEMs, retailers, shops"
            icon={Building2}
            trend={{ value: 12, isPositive: true }}
            color="success"
          />
          <StatsCard
            title="Monthly Revenue"
            value="$295K"
            subtitle="December 2024"
            icon={DollarSign}
            trend={{ value: 22, isPositive: true }}
            color="warning"
          />
          <StatsCard
            title="API Requests"
            value="12.4M"
            subtitle="This month"
            icon={Database}
            trend={{ value: 35, isPositive: true }}
            color="info"
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="revenue">Revenue</TabsTrigger>
            <TabsTrigger value="partners">Partners</TabsTrigger>
            <TabsTrigger value="users">Users</TabsTrigger>
            <TabsTrigger value="system">System Health</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="space-y-6">
              {/* Charts Row */}
              <div className="grid lg:grid-cols-2 gap-6">
                <AnalyticsChart
                  title="Platform Growth"
                  description="Users and parts registered over time"
                  type="area"
                  data={platformData}
                  dataKey="users"
                  secondaryDataKey="parts"
                  height={320}
                />
                <AnalyticsChart
                  title="Revenue Growth"
                  description="Monthly recurring revenue"
                  type="bar"
                  data={platformData}
                  dataKey="revenue"
                  height={320}
                  colors={['hsl(155, 85%, 45%)']}
                />
              </div>
              
              {/* Quick Stats */}
              <div className="grid md:grid-cols-4 gap-4">
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-success/10">
                      <CheckCircle className="h-5 w-5 text-success" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">99.97%</div>
                      <div className="text-xs text-muted-foreground">Uptime (30d)</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">42ms</div>
                      <div className="text-xs text-muted-foreground">Avg Response</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-warning/10">
                      <AlertTriangle className="h-5 w-5 text-warning" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">3</div>
                      <div className="text-xs text-muted-foreground">Active Incidents</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-0 shadow-md">
                  <CardContent className="p-4 flex items-center gap-4">
                    <div className="p-2 rounded-lg bg-info/10">
                      <Globe className="h-5 w-5 text-info" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold">24</div>
                      <div className="text-xs text-muted-foreground">Countries</div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="revenue">
            <RevenueMetrics period="December 2024" metrics={revenueMetrics} />
          </TabsContent>
          
          <TabsContent value="partners">
            <PartnerShowcase partners={partnerData} title="Platform Partners" />
          </TabsContent>
          
          <TabsContent value="users">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>User Management</CardTitle>
                <CardDescription>Manage platform users and permissions</CardDescription>
              </CardHeader>
              <CardContent>
                <AnalyticsChart
                  title="User Growth"
                  type="line"
                  data={platformData}
                  dataKey="users"
                  height={300}
                />
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="system">
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-success" />
                    System Status
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {['API Gateway', 'Database Cluster', 'Blockchain Node', 'CDN', 'Auth Service'].map((service, i) => (
                    <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                      <span className="font-medium">{service}</span>
                      <Badge variant="default" className="bg-success">
                        <CheckCircle className="h-3 w-3 mr-1" />
                        Operational
                      </Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>API Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <AnalyticsChart
                    title=""
                    type="area"
                    data={platformData}
                    dataKey="transactions"
                    height={280}
                  />
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
