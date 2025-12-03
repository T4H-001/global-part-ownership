import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { 
  Wrench, Package, Search, QrCode, CheckCircle, Clock,
  ArrowRightLeft, FileText, Shield, Star, TrendingUp,
  Hammer, Sparkles, Camera, Plus, Car
} from "lucide-react";
import { StatsCard } from "@/components/parts/StatsCard";
import { AnalyticsChart } from "@/components/dashboards/AnalyticsChart";
import { SiteSEO } from "@/components/shared/SiteSEO";

const workOrders = [
  { id: "WO-2024-0892", vehicle: "2023 Tesla Model 3", service: "Brake System Replacement", status: "in-progress", parts: 4, customer: "John D.", eta: "2 hours" },
  { id: "WO-2024-0891", vehicle: "2022 BMW X5", service: "Full Service", status: "waiting-parts", parts: 8, customer: "Sarah M.", eta: "Tomorrow" },
  { id: "WO-2024-0890", vehicle: "2021 Toyota RAV4", service: "Tire Rotation + Alignment", status: "completed", parts: 0, customer: "Mike R.", eta: "Done" },
  { id: "WO-2024-0889", vehicle: "2020 Mercedes GLC", service: "Battery Replacement (EV)", status: "queued", parts: 1, customer: "Emily K.", eta: "3 hours" },
];

const revenueData = [
  { name: 'Mon', labor: 2400, parts: 1800 },
  { name: 'Tue', labor: 3200, parts: 2400 },
  { name: 'Wed', labor: 2800, parts: 2100 },
  { name: 'Thu', labor: 3800, parts: 2900 },
  { name: 'Fri', labor: 4200, parts: 3200 },
  { name: 'Sat', labor: 5100, parts: 3800 },
];

const serviceCategories = [
  { name: 'Brakes', value: 28 },
  { name: 'Engine', value: 22 },
  { name: 'Suspension', value: 18 },
  { name: 'Electrical', value: 15 },
  { name: 'Tires', value: 12 },
  { name: 'Other', value: 5 },
];

export default function RepairPortal() {
  const [activeTab, setActiveTab] = useState("workorders");
  const [scanMode, setScanMode] = useState(false);
  
  return (
    <div className="min-h-screen bg-background">
      <SiteSEO 
        title="Repair Shop Portal | PartLedger"
        description="Verify parts, record services, and build customer trust with blockchain-verified repair records."
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-primary-foreground py-14 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-primary-foreground/15 backdrop-blur-xl">
                <Wrench className="h-10 w-10" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <h1 className="text-3xl font-bold">AutoCare Pro Workshop</h1>
                  <Badge className="bg-amber-400 text-amber-900">
                    <Star className="h-3 w-3 mr-1" />
                    Certified Partner
                  </Badge>
                </div>
                <p className="text-primary-foreground/70 mt-1">
                  Repair Shop Portal • 4.9★ Rating
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button 
                className="gap-2 bg-primary-foreground/20 hover:bg-primary-foreground/30"
                onClick={() => setScanMode(!scanMode)}
              >
                <QrCode className="h-4 w-4" />
                {scanMode ? 'Exit Scan' : 'Scan Part'}
              </Button>
              <Button variant="secondary" className="gap-2">
                <Plus className="h-4 w-4" />
                New Work Order
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatsCard
            title="Active Work Orders"
            value="12"
            subtitle="4 in progress"
            icon={Wrench}
            color="primary"
          />
          <StatsCard
            title="Parts Installed"
            value="847"
            subtitle="This month"
            icon={Package}
            trend={{ value: 15, isPositive: true }}
            color="accent"
          />
          <StatsCard
            title="Verified Rate"
            value="100%"
            subtitle="All parts verified"
            icon={CheckCircle}
            color="success"
          />
          <StatsCard
            title="Today's Revenue"
            value="$4,280"
            subtitle="$2,100 parts / $2,180 labor"
            icon={TrendingUp}
            trend={{ value: 22, isPositive: true }}
            color="warning"
          />
          <StatsCard
            title="Customer Rating"
            value="4.9"
            subtitle="128 reviews"
            icon={Star}
            color="info"
          />
        </div>
      </div>
      
      {/* Quick Scan Mode */}
      {scanMode && (
        <div className="max-w-7xl mx-auto px-6 mt-6">
          <Card className="border-0 shadow-xl bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-6">
                <div className="p-4 rounded-xl bg-primary/10">
                  <Camera className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">Quick Part Verification</h3>
                  <p className="text-muted-foreground">Scan QR code or enter part serial number</p>
                </div>
                <div className="flex items-center gap-3">
                  <Input placeholder="Enter serial number..." className="w-64" />
                  <Button>Verify</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="workorders" className="gap-2">
              <Hammer className="h-4 w-4" />
              Work Orders
            </TabsTrigger>
            <TabsTrigger value="parts" className="gap-2">
              <Package className="h-4 w-4" />
              Parts
            </TabsTrigger>
            <TabsTrigger value="customers" className="gap-2">
              <Car className="h-4 w-4" />
              Customers
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              Analytics
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="workorders">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Work Orders List */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Today's Work Orders</h2>
                  <div className="flex items-center gap-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input placeholder="Search orders..." className="pl-10 w-48" />
                    </div>
                  </div>
                </div>
                
                {workOrders.map((order) => (
                  <Card key={order.id} className="border-0 shadow-md hover-lift">
                    <CardContent className="p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${
                            order.status === 'completed' ? 'bg-success/10' :
                            order.status === 'in-progress' ? 'bg-primary/10' :
                            order.status === 'waiting-parts' ? 'bg-warning/10' : 'bg-muted'
                          }`}>
                            {order.status === 'completed' ? (
                              <CheckCircle className="h-6 w-6 text-success" />
                            ) : order.status === 'in-progress' ? (
                              <Wrench className="h-6 w-6 text-primary" />
                            ) : order.status === 'waiting-parts' ? (
                              <Clock className="h-6 w-6 text-warning" />
                            ) : (
                              <Clock className="h-6 w-6 text-muted-foreground" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold">{order.service}</div>
                            <div className="text-sm text-muted-foreground">
                              {order.vehicle} • {order.customer}
                            </div>
                            <div className="text-xs text-muted-foreground mt-1">
                              {order.id}
                            </div>
                          </div>
                        </div>
                        
                        <div className="text-right">
                          <Badge variant={
                            order.status === 'completed' ? 'default' :
                            order.status === 'in-progress' ? 'secondary' :
                            order.status === 'waiting-parts' ? 'outline' : 'outline'
                          }>
                            {order.status.replace('-', ' ')}
                          </Badge>
                          <div className="text-sm text-muted-foreground mt-2">
                            ETA: {order.eta}
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center gap-4 text-sm">
                          <span className="flex items-center gap-1">
                            <Package className="h-4 w-4 text-muted-foreground" />
                            {order.parts} parts
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button variant="outline" size="sm">View Details</Button>
                          {order.status !== 'completed' && (
                            <Button size="sm">Update Status</Button>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Actions */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full justify-start gap-2" variant="outline" size="sm">
                      <QrCode className="h-4 w-4" />
                      Scan Part QR
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline" size="sm">
                      <Package className="h-4 w-4" />
                      Order Parts
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline" size="sm">
                      <ArrowRightLeft className="h-4 w-4" />
                      Transfer Part
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline" size="sm">
                      <FileText className="h-4 w-4" />
                      Generate Invoice
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Revenue Chart */}
                <AnalyticsChart
                  title="This Week's Revenue"
                  type="bar"
                  data={revenueData}
                  dataKey="labor"
                  secondaryDataKey="parts"
                  height={220}
                />
                
                {/* Service Categories */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Top Services</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {serviceCategories.slice(0, 4).map((cat, i) => (
                      <div key={i} className="flex items-center justify-between">
                        <span className="text-sm">{cat.name}</span>
                        <Badge variant="secondary">{cat.value}%</Badge>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="parts">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Part Verification</CardTitle>
                  <CardDescription>Verify authenticity before installation</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex gap-2">
                    <Input placeholder="Scan or enter part serial..." className="flex-1" />
                    <Button className="gap-2">
                      <Search className="h-4 w-4" />
                      Verify
                    </Button>
                  </div>
                  
                  <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-success" />
                      <div>
                        <div className="font-medium text-success">Part Verified</div>
                        <div className="text-sm text-muted-foreground">
                          Genuine OEM part from authorized distributor
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Certification Benefits</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Sparkles className="h-5 w-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-medium">Verified Partner Badge</div>
                      <div className="text-sm text-muted-foreground">Display on your profile and marketing</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-success mt-0.5" />
                    <div>
                      <div className="font-medium">Warranty Protection</div>
                      <div className="text-sm text-muted-foreground">Extended coverage for verified repairs</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-warning mt-0.5" />
                    <div>
                      <div className="font-medium">Customer Trust</div>
                      <div className="text-sm text-muted-foreground">Blockchain-verified service records</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          
          <TabsContent value="customers">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Customer Vehicles</CardTitle>
                <CardDescription>Track all customer vehicles and their service history</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Customer management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <AnalyticsChart
                title="Weekly Revenue Breakdown"
                description="Labor vs Parts revenue"
                type="bar"
                data={revenueData}
                dataKey="labor"
                secondaryDataKey="parts"
                height={320}
              />
              <AnalyticsChart
                title="Service Distribution"
                type="pie"
                data={serviceCategories}
                dataKey="value"
                height={320}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
