import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, Car, Package, Shield, Bell, QrCode, Search,
  CheckCircle, AlertTriangle, Clock, History, ArrowRightLeft,
  Plus, FileText
} from "lucide-react";
import { StatsCard } from "@/components/parts/StatsCard";
import { SiteSEO } from "@/components/shared/SiteSEO";

export default function ConsumerPortal() {
  const [activeTab, setActiveTab] = useState("vehicles");
  
  const vehicles = [
    { 
      id: "VEH001",
      make: "Tesla", 
      model: "Model 3", 
      year: 2023, 
      vin: "5YJ3E1EA3PF******",
      type: "BEV",
      parts: 24
    },
    { 
      id: "VEH002",
      make: "Toyota", 
      model: "Camry", 
      year: 2021, 
      vin: "4T1BF1FK1MU******",
      type: "ICE",
      parts: 18
    },
  ];
  
  const recentActivity = [
    { type: "service", desc: "Brake pads replaced", vehicle: "Tesla Model 3", date: "2024-01-10" },
    { type: "transfer", desc: "Ownership transferred from dealer", vehicle: "Tesla Model 3", date: "2023-12-15" },
    { type: "warranty", desc: "Battery warranty registered", vehicle: "Tesla Model 3", date: "2023-12-15" },
  ];
  
  const notifications = [
    { type: "recall", title: "Recall Notice", desc: "Check brake caliper recall for compatible vehicles", urgent: true },
    { type: "warranty", title: "Warranty Expiring", desc: "Drivetrain warranty expires in 30 days", urgent: false },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteSEO 
        title="Consumer Portal | PartLedger"
        description="Track your vehicle parts, manage warranties, and transfer ownership with verified records."
      />
      
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-primary-foreground/10">
              <Users className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Consumer Portal</h1>
              <p className="text-primary-foreground/70">
                Track your vehicles and parts with verified ownership
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard
            title="Registered Vehicles"
            value="2"
            subtitle="In your account"
            icon={Car}
            color="primary"
          />
          <StatsCard
            title="Tracked Parts"
            value="42"
            subtitle="Across all vehicles"
            icon={Package}
            color="accent"
          />
          <StatsCard
            title="Active Warranties"
            value="8"
            subtitle="Valid coverage"
            icon={Shield}
            color="success"
          />
          <StatsCard
            title="Notifications"
            value="2"
            subtitle="Require attention"
            icon={Bell}
            color="warning"
          />
        </div>
      </div>
      
      {/* Notifications Banner */}
      {notifications.some(n => n.urgent) && (
        <div className="max-w-7xl mx-auto px-6 mt-6">
          <Card className="border-0 shadow-lg bg-warning/5 border-l-4 border-l-warning">
            <CardContent className="py-4">
              <div className="flex items-center gap-4">
                <AlertTriangle className="h-5 w-5 text-warning" />
                <div className="flex-1">
                  <span className="font-medium">You have important notifications</span>
                  <span className="text-muted-foreground ml-2">
                    including potential recalls affecting your vehicles
                  </span>
                </div>
                <Button size="sm" variant="outline">
                  View All
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="vehicles">My Vehicles</TabsTrigger>
            <TabsTrigger value="parts">All Parts</TabsTrigger>
            <TabsTrigger value="warranties">Warranties</TabsTrigger>
            <TabsTrigger value="transfers">Transfers</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          
          <TabsContent value="vehicles">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Vehicles List */}
              <div className="lg:col-span-2 space-y-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Your Vehicles</h2>
                  <Button className="gap-2">
                    <Plus className="h-4 w-4" />
                    Add Vehicle
                  </Button>
                </div>
                
                {vehicles.map((vehicle) => (
                  <Card key={vehicle.id} className="border-0 shadow-lg hover-lift cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-4">
                          <div className="p-3 rounded-xl bg-primary/10">
                            <Car className="h-8 w-8 text-primary" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold">
                              {vehicle.year} {vehicle.make} {vehicle.model}
                            </h3>
                            <p className="text-sm text-muted-foreground font-mono">
                              {vehicle.vin}
                            </p>
                          </div>
                        </div>
                        <Badge variant={vehicle.type === 'BEV' ? 'default' : 'secondary'}>
                          {vehicle.type}
                        </Badge>
                      </div>
                      
                      <div className="mt-4 grid grid-cols-3 gap-4">
                        <div className="p-3 rounded-lg bg-muted/50">
                          <div className="text-2xl font-bold text-primary">{vehicle.parts}</div>
                          <div className="text-xs text-muted-foreground">Registered Parts</div>
                        </div>
                        <div className="p-3 rounded-lg bg-muted/50">
                          <div className="text-2xl font-bold text-success">3</div>
                          <div className="text-xs text-muted-foreground">Active Warranties</div>
                        </div>
                        <div className="p-3 rounded-lg bg-muted/50">
                          <div className="text-2xl font-bold text-accent">0</div>
                          <div className="text-xs text-muted-foreground">Open Recalls</div>
                        </div>
                      </div>
                      
                      <div className="mt-4 flex gap-2">
                        <Button variant="outline" size="sm" className="flex-1">
                          View Parts
                        </Button>
                        <Button variant="outline" size="sm" className="flex-1">
                          Service History
                        </Button>
                        <Button variant="outline" size="sm">
                          <QrCode className="h-4 w-4" />
                        </Button>
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
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <QrCode className="h-4 w-4" />
                      Scan Part QR Code
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <Search className="h-4 w-4" />
                      Verify Part Authenticity
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <ArrowRightLeft className="h-4 w-4" />
                      Transfer Ownership
                    </Button>
                    <Button className="w-full justify-start gap-2" variant="outline">
                      <FileText className="h-4 w-4" />
                      Export Records
                    </Button>
                  </CardContent>
                </Card>
                
                {/* Recent Activity */}
                <Card className="border-0 shadow-lg">
                  <CardHeader>
                    <CardTitle>Recent Activity</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {recentActivity.map((activity, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <div className="p-1.5 rounded-full bg-muted">
                            <History className="h-3 w-3 text-muted-foreground" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">{activity.desc}</p>
                            <p className="text-xs text-muted-foreground">
                              {activity.vehicle} • {activity.date}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="parts">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>All Registered Parts</CardTitle>
                <CardDescription>Parts across all your vehicles</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Parts list interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="warranties">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Warranty Management</CardTitle>
                <CardDescription>Track and manage your warranties</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Warranty management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="transfers">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Ownership Transfers</CardTitle>
                <CardDescription>Transfer vehicle or part ownership</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Transfer interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="history">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Complete History</CardTitle>
                <CardDescription>Full activity log for all your assets</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">History interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
