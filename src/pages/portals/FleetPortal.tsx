import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Truck, Package, Shield, AlertTriangle, MapPin, Fuel,
  Clock, TrendingUp, Wrench, Calendar, DollarSign, BarChart3,
  CheckCircle, RefreshCcw, Battery, Zap
} from "lucide-react";
import { StatsCard } from "@/components/parts/StatsCard";
import { AnalyticsChart } from "@/components/dashboards/AnalyticsChart";
import { SiteSEO } from "@/components/shared/SiteSEO";

const fleetVehicles = [
  { id: "FL001", name: "Volvo FH 500", type: "Heavy Truck", status: "active", mileage: 245000, nextService: "2024-02-15", location: "Sydney", health: 94 },
  { id: "FL002", name: "Tesla Semi", type: "EV Truck", status: "active", mileage: 82000, nextService: "2024-03-01", location: "Melbourne", health: 98, isEV: true },
  { id: "FL003", name: "Isuzu N-Series", type: "Light Truck", status: "service", mileage: 156000, nextService: "In Progress", location: "Brisbane", health: 72 },
  { id: "FL004", name: "Ford Transit", type: "Van", status: "active", mileage: 98000, nextService: "2024-02-28", location: "Perth", health: 88 },
  { id: "FL005", name: "Rivian EDV 700", type: "EV Van", status: "active", mileage: 45000, nextService: "2024-04-10", location: "Adelaide", health: 99, isEV: true },
];

const maintenanceData = [
  { name: 'Aug', planned: 12, unplanned: 3, cost: 15000 },
  { name: 'Sep', planned: 8, unplanned: 5, cost: 22000 },
  { name: 'Oct', planned: 15, unplanned: 2, cost: 18000 },
  { name: 'Nov', planned: 10, unplanned: 4, cost: 24000 },
  { name: 'Dec', planned: 18, unplanned: 1, cost: 21000 },
  { name: 'Jan', planned: 14, unplanned: 2, cost: 19000 },
];

const partCategories = [
  { name: 'Brakes', value: 35 },
  { name: 'Tires', value: 28 },
  { name: 'Filters', value: 18 },
  { name: 'Batteries', value: 12 },
  { name: 'Other', value: 7 },
];

export default function FleetPortal() {
  const [activeTab, setActiveTab] = useState("overview");
  
  const activeVehicles = fleetVehicles.filter(v => v.status === 'active').length;
  const evVehicles = fleetVehicles.filter(v => v.isEV).length;
  
  return (
    <div className="min-h-screen bg-background">
      <SiteSEO 
        title="Fleet Management Portal | PartLedger"
        description="Complete fleet lifecycle management with predictive maintenance and verified part tracking."
      />
      
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-indigo-500 text-primary-foreground py-14 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="p-4 rounded-2xl bg-primary-foreground/15 backdrop-blur-xl">
                <Truck className="h-10 w-10" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">Fleet Management Portal</h1>
                <p className="text-primary-foreground/70 mt-1">
                  TransCorp Logistics • Enterprise Fleet
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Button className="bg-primary-foreground/20 hover:bg-primary-foreground/30 gap-2">
                <Calendar className="h-4 w-4" />
                Schedule Service
              </Button>
              <Button variant="secondary" className="gap-2">
                <BarChart3 className="h-4 w-4" />
                Export Report
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 relative z-20">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4">
          <StatsCard
            title="Total Vehicles"
            value={fleetVehicles.length}
            subtitle={`${activeVehicles} active`}
            icon={Truck}
            color="primary"
          />
          <StatsCard
            title="EV Vehicles"
            value={evVehicles}
            subtitle="Electric fleet"
            icon={Zap}
            color="accent"
          />
          <StatsCard
            title="Parts Tracked"
            value="12,847"
            subtitle="Across fleet"
            icon={Package}
            trend={{ value: 8, isPositive: true }}
            color="success"
          />
          <StatsCard
            title="Uptime"
            value="97.2%"
            subtitle="Fleet availability"
            icon={TrendingUp}
            trend={{ value: 2, isPositive: true }}
            color="warning"
          />
          <StatsCard
            title="Monthly Spend"
            value="$84K"
            subtitle="Maintenance costs"
            icon={DollarSign}
            trend={{ value: 5, isPositive: false }}
            color="destructive"
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Fleet Overview</TabsTrigger>
            <TabsTrigger value="vehicles">Vehicles</TabsTrigger>
            <TabsTrigger value="maintenance">Maintenance</TabsTrigger>
            <TabsTrigger value="parts">Parts Inventory</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Vehicle Health Cards */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Vehicle Health Status</h2>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                {fleetVehicles.slice(0, 4).map((vehicle) => (
                  <Card key={vehicle.id} className="border-0 shadow-md hover-lift">
                    <CardContent className="p-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className={`p-3 rounded-xl ${vehicle.isEV ? 'bg-accent/10' : 'bg-primary/10'}`}>
                            {vehicle.isEV ? (
                              <Battery className="h-6 w-6 text-accent" />
                            ) : (
                              <Truck className="h-6 w-6 text-primary" />
                            )}
                          </div>
                          <div>
                            <div className="font-semibold">{vehicle.name}</div>
                            <div className="text-sm text-muted-foreground flex items-center gap-2">
                              <span>{vehicle.type}</span>
                              <span>•</span>
                              <MapPin className="h-3 w-3" />
                              <span>{vehicle.location}</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-6">
                          <div className="text-right">
                            <div className="text-sm text-muted-foreground">Health Score</div>
                            <div className="flex items-center gap-2">
                              <Progress value={vehicle.health} className="w-24 h-2" />
                              <span className={`text-sm font-medium ${
                                vehicle.health >= 90 ? 'text-success' : 
                                vehicle.health >= 70 ? 'text-warning' : 'text-destructive'
                              }`}>
                                {vehicle.health}%
                              </span>
                            </div>
                          </div>
                          
                          <Badge variant={
                            vehicle.status === 'active' ? 'default' : 
                            vehicle.status === 'service' ? 'secondary' : 'outline'
                          }>
                            {vehicle.status === 'active' ? (
                              <CheckCircle className="h-3 w-3 mr-1" />
                            ) : (
                              <Wrench className="h-3 w-3 mr-1" />
                            )}
                            {vehicle.status}
                          </Badge>
                        </div>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-3 gap-4">
                        <div className="p-2 rounded-lg bg-muted/50 text-center">
                          <div className="text-lg font-semibold">{vehicle.mileage.toLocaleString()}</div>
                          <div className="text-xs text-muted-foreground">Kilometers</div>
                        </div>
                        <div className="p-2 rounded-lg bg-muted/50 text-center">
                          <div className="text-lg font-semibold">{vehicle.nextService}</div>
                          <div className="text-xs text-muted-foreground">Next Service</div>
                        </div>
                        <div className="p-2 rounded-lg bg-muted/50 text-center">
                          <div className="text-lg font-semibold">247</div>
                          <div className="text-xs text-muted-foreground">Parts Tracked</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                {/* Alerts */}
                <Card className="border-0 shadow-lg border-l-4 border-l-warning">
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <AlertTriangle className="h-5 w-5 text-warning" />
                      Active Alerts
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="p-3 rounded-lg bg-warning/5">
                      <div className="font-medium text-sm">Service Overdue</div>
                      <div className="text-xs text-muted-foreground">FL003 • Isuzu N-Series</div>
                    </div>
                    <div className="p-3 rounded-lg bg-warning/5">
                      <div className="font-medium text-sm">Tire Replacement Due</div>
                      <div className="text-xs text-muted-foreground">FL004 • Ford Transit</div>
                    </div>
                    <div className="p-3 rounded-lg bg-destructive/5">
                      <div className="font-medium text-sm text-destructive">Recall Notice</div>
                      <div className="text-xs text-muted-foreground">Brake system update required</div>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Parts by Category */}
                <AnalyticsChart
                  title="Parts by Category"
                  type="pie"
                  data={partCategories}
                  dataKey="value"
                  height={250}
                />
                
                {/* Quick Actions */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-lg">Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <Button className="w-full justify-start gap-2" variant="outline" size="sm">
                      <Calendar className="h-4 w-4" />
                      Schedule Service
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline" size="sm">
                      <Package className="h-4 w-4" />
                      Order Parts
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline" size="sm">
                      <RefreshCcw className="h-4 w-4" />
                      Sync Telematics
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="vehicles">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>All Fleet Vehicles</CardTitle>
                <CardDescription>Complete vehicle inventory with tracking status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {fleetVehicles.map((vehicle) => (
                    <div key={vehicle.id} className="flex items-center justify-between p-4 rounded-lg border">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${vehicle.isEV ? 'bg-accent/10' : 'bg-primary/10'}`}>
                          {vehicle.isEV ? <Battery className="h-5 w-5 text-accent" /> : <Truck className="h-5 w-5 text-primary" />}
                        </div>
                        <div>
                          <div className="font-medium">{vehicle.name}</div>
                          <div className="text-sm text-muted-foreground">{vehicle.id} • {vehicle.type}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <Badge variant={vehicle.status === 'active' ? 'default' : 'secondary'}>
                          {vehicle.status}
                        </Badge>
                        <Button variant="ghost" size="sm">View Details</Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="maintenance">
            <AnalyticsChart
              title="Maintenance Overview"
              description="Planned vs unplanned maintenance events"
              type="bar"
              data={maintenanceData}
              dataKey="planned"
              secondaryDataKey="unplanned"
              height={350}
            />
          </TabsContent>
          
          <TabsContent value="parts">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Parts Inventory</CardTitle>
                <CardDescription>Track all parts across your fleet</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Parts inventory interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <div className="grid md:grid-cols-2 gap-6">
              <AnalyticsChart
                title="Maintenance Costs"
                type="area"
                data={maintenanceData}
                dataKey="cost"
                height={300}
              />
              <AnalyticsChart
                title="Parts Distribution"
                type="pie"
                data={partCategories}
                dataKey="value"
                height={300}
              />
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
