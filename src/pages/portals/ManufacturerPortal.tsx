import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Factory, Package, Upload, BarChart3, Shield, AlertTriangle,
  FileText, QrCode, Link as LinkIcon, CheckCircle, Clock,
  TrendingUp, Box, Truck
} from "lucide-react";
import { StatsCard } from "@/components/parts/StatsCard";
import { SiteSEO } from "@/components/shared/SiteSEO";

export default function ManufacturerPortal() {
  const [activeTab, setActiveTab] = useState("overview");
  
  const recentBatches = [
    { id: "BAT-2024-001", parts: 1250, status: "verified", date: "2024-01-15" },
    { id: "BAT-2024-002", parts: 890, status: "pending", date: "2024-01-14" },
    { id: "BAT-2024-003", parts: 2100, status: "verified", date: "2024-01-13" },
  ];
  
  const recalls = [
    { id: "RCL-2024-01", part: "Brake Caliper Assembly", affected: 15000, status: "active" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteSEO 
        title="Manufacturer Portal | PartLedger"
        description="Register parts at production, manage batches, and track recalls with blockchain verification."
      />
      
      {/* Header */}
      <div className="bg-gradient-hero text-primary-foreground py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl bg-primary-foreground/10">
              <Factory className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Manufacturer Portal</h1>
              <p className="text-primary-foreground/70">
                Register parts at production with blockchain verification
              </p>
            </div>
          </div>
          
          <Badge className="bg-success/20 text-success border-success/30">
            <CheckCircle className="h-3 w-3 mr-1" />
            Verified Manufacturer
          </Badge>
        </div>
      </div>
      
      {/* Stats */}
      <div className="max-w-7xl mx-auto px-6 -mt-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard
            title="Parts Registered"
            value="45,892"
            subtitle="This month"
            icon={Package}
            trend={{ value: 12, isPositive: true }}
            color="primary"
          />
          <StatsCard
            title="Active Batches"
            value="23"
            subtitle="In production"
            icon={Box}
            color="accent"
          />
          <StatsCard
            title="Verified Rate"
            value="99.8%"
            subtitle="Blockchain anchored"
            icon={Shield}
            color="success"
          />
          <StatsCard
            title="Active Recalls"
            value="1"
            subtitle="Requiring attention"
            icon={AlertTriangle}
            color="warning"
          />
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="register">Register Parts</TabsTrigger>
            <TabsTrigger value="batches">Batch Management</TabsTrigger>
            <TabsTrigger value="recalls">Recalls</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Quick Actions */}
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start gap-2" variant="outline">
                    <QrCode className="h-4 w-4" />
                    Generate QR Codes
                  </Button>
                  <Button className="w-full justify-start gap-2" variant="outline">
                    <Upload className="h-4 w-4" />
                    Bulk Upload Parts
                  </Button>
                  <Button className="w-full justify-start gap-2" variant="outline">
                    <LinkIcon className="h-4 w-4" />
                    API Integration
                  </Button>
                  <Button className="w-full justify-start gap-2" variant="outline">
                    <FileText className="h-4 w-4" />
                    Export Reports
                  </Button>
                </CardContent>
              </Card>
              
              {/* Recent Batches */}
              <Card className="border-0 shadow-lg lg:col-span-2">
                <CardHeader>
                  <CardTitle>Recent Batches</CardTitle>
                  <CardDescription>Latest production batches registered</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentBatches.map((batch) => (
                      <div 
                        key={batch.id}
                        className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Box className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <div className="font-medium">{batch.id}</div>
                            <div className="text-sm text-muted-foreground">
                              {batch.parts.toLocaleString()} parts • {batch.date}
                            </div>
                          </div>
                        </div>
                        <Badge variant={batch.status === 'verified' ? 'default' : 'secondary'}>
                          {batch.status === 'verified' ? (
                            <CheckCircle className="h-3 w-3 mr-1" />
                          ) : (
                            <Clock className="h-3 w-3 mr-1" />
                          )}
                          {batch.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
              
              {/* Recall Alerts */}
              {recalls.length > 0 && (
                <Card className="border-0 shadow-lg lg:col-span-3 border-l-4 border-l-warning">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-warning">
                      <AlertTriangle className="h-5 w-5" />
                      Active Recalls
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {recalls.map((recall) => (
                      <div 
                        key={recall.id}
                        className="flex items-center justify-between p-4 rounded-lg bg-warning/5"
                      >
                        <div>
                          <div className="font-medium">{recall.part}</div>
                          <div className="text-sm text-muted-foreground">
                            {recall.id} • {recall.affected.toLocaleString()} units affected
                          </div>
                        </div>
                        <Button size="sm" variant="outline">
                          Manage Recall
                        </Button>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              )}
            </div>
          </TabsContent>
          
          <TabsContent value="register">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Register New Parts</CardTitle>
                <CardDescription>
                  Register individual parts or upload in bulk
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Single Registration */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Single Part Registration</h3>
                    <div className="space-y-3">
                      <Input placeholder="Part Category" />
                      <Input placeholder="Serial Number" />
                      <Input placeholder="Batch ID" />
                      <Input placeholder="Manufacture Date" type="date" />
                      <Button className="w-full">Register Part</Button>
                    </div>
                  </div>
                  
                  {/* Bulk Upload */}
                  <div className="space-y-4">
                    <h3 className="font-semibold">Bulk Upload</h3>
                    <div className="border-2 border-dashed rounded-xl p-8 text-center">
                      <Upload className="h-12 w-12 mx-auto text-muted-foreground mb-4" />
                      <p className="text-muted-foreground mb-4">
                        Drop CSV or Excel file here, or click to browse
                      </p>
                      <Button variant="outline">Choose File</Button>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Download our <a href="#" className="text-primary">template file</a> for bulk uploads
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="batches">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Batch Management</CardTitle>
                <CardDescription>View and manage production batches</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Batch management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="recalls">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Recall Management</CardTitle>
                <CardDescription>Initiate and track product recalls</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Recall management interface coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="analytics">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle>Analytics Dashboard</CardTitle>
                <CardDescription>Production and registration analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Analytics dashboard coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
