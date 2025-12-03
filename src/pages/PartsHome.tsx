import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, Globe, BarChart3, CheckCircle, ArrowRight, 
  Battery, Zap, Car, Factory, Users, Truck, Wrench,
  Recycle, Lock, ChevronRight, Play, Sparkles
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { SiteSEO } from "@/components/shared/SiteSEO";
import { StatsCard } from "@/components/parts/StatsCard";
import { VehicleSystemCard } from "@/components/parts/VehicleSystemCard";
import { VEHICLE_SYSTEMS } from "@/types/parts";
import { getAllCategories, countPartsInSystem } from "@/data/partsTaxonomy";

export default function PartsHome() {
  const navigate = useNavigate();
  const allCategories = getAllCategories();
  const totalParts = allCategories.length;
  
  const stakeholders = [
    { 
      icon: Factory, 
      title: "Manufacturers", 
      desc: "Register parts at production with blockchain verification",
      link: "/portal/manufacturer"
    },
    { 
      icon: Truck, 
      title: "Distributors", 
      desc: "Track chain of custody and verify authenticity",
      link: "/portal/distributor"
    },
    { 
      icon: Wrench, 
      title: "Repair Shops", 
      desc: "Verify parts, log installations, access warranties",
      link: "/portal/repair"
    },
    { 
      icon: Users, 
      title: "Consumers", 
      desc: "Track your vehicle parts and transfer ownership",
      link: "/portal/consumer"
    },
    { 
      icon: Recycle, 
      title: "Recyclers", 
      desc: "Certify proper disposal and track materials",
      link: "/portal/recycler"
    },
    { 
      icon: Shield, 
      title: "Government", 
      desc: "Compliance monitoring and regulatory reporting",
      link: "/portal/government"
    },
  ];
  
  const features = [
    "Unique part identification (QR, RFID, blockchain hash)",
    "Complete lifecycle tracking from manufacture to recycling",
    "EV-specific taxonomy with battery & motor systems",
    "Real-time warranty and recall management",
    "Multi-stakeholder portals with role-based access",
    "Blockchain-anchored verification for authenticity",
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteSEO 
        title="PartLedger | Global Vehicle Parts Ownership Platform"
        description="Track vehicle parts from manufacture to recycling. Blockchain-verified ownership, warranty management, and compliance tracking for the automotive industry."
      />
      
      {/* Hero Section */}
      <section className="hero-section relative overflow-hidden">
        <div className="absolute inset-0 bg-mesh opacity-50" />
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <Badge className="mb-6 bg-primary-foreground/10 text-primary-foreground border-primary-foreground/20 backdrop-blur-sm">
              <Sparkles className="h-3 w-3 mr-1" />
              Now with EV Battery & Motor Tracking
            </Badge>
            
            {/* Main headline */}
            <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight mb-6">
              Every Part.
              <br />
              <span className="text-gradient-ev">Every Vehicle.</span>
              <br />
              Verified.
            </h1>
            
            <p className="text-xl md:text-2xl text-primary-foreground/70 max-w-2xl mb-10 leading-relaxed">
              The global platform for vehicle parts ownership, tracking lifecycle from manufacture 
              to recycling with blockchain-verified authenticity.
            </p>
            
            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="h-14 px-8 text-lg bg-primary-foreground text-foreground hover:bg-primary-foreground/90 gap-2"
                onClick={() => navigate('/parts/explorer')}
              >
                Explore Parts Taxonomy
                <ArrowRight className="h-5 w-5" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="h-14 px-8 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 gap-2"
              >
                <Play className="h-5 w-5" />
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>
      
      {/* Stats Section */}
      <section className="relative z-10 -mt-12 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <StatsCard
            title="Part Categories"
            value={totalParts.toLocaleString()}
            subtitle="Comprehensive taxonomy"
            icon={Car}
            color="primary"
          />
          <StatsCard
            title="Vehicle Systems"
            value="17"
            subtitle="Including 3 EV-specific"
            icon={Zap}
            color="accent"
          />
          <StatsCard
            title="Manufacturers"
            value="500+"
            subtitle="OEM & Aftermarket"
            icon={Factory}
            color="success"
          />
          <StatsCard
            title="Countries"
            value="45"
            subtitle="Global compliance"
            icon={Globe}
            color="warning"
          />
        </div>
      </section>
      
      {/* Vehicle Systems Preview */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete Vehicle Coverage
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From traditional ICE components to cutting-edge EV systems
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mb-8">
          {VEHICLE_SYSTEMS.slice(0, 10).map((system) => (
            <VehicleSystemCard
              key={system.id}
              system={system}
              partCount={countPartsInSystem(system.id)}
              onClick={() => navigate('/parts/explorer')}
              compact
            />
          ))}
        </div>
        
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => navigate('/parts/explorer')}
            className="gap-2"
          >
            View All {VEHICLE_SYSTEMS.length} Systems
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </section>
      
      {/* Stakeholder Portals */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <Badge className="mb-4">Multi-Stakeholder Platform</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Built for Everyone
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Dedicated portals for every participant in the automotive supply chain
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stakeholders.map((item) => (
              <Card 
                key={item.title}
                className="group border-0 shadow-lg hover-lift cursor-pointer bg-card/80 backdrop-blur-sm"
                onClick={() => navigate(item.link)}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.desc}
                      </p>
                    </div>
                    <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge className="mb-4">Platform Capabilities</Badge>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Enterprise-Grade
              <br />
              Part Tracking
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Everything you need to manage vehicle parts at scale, from individual 
              consumers to global manufacturers.
            </p>
            
            <div className="space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="p-1 rounded-full bg-success/10">
                    <CheckCircle className="h-5 w-5 text-success" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            {/* Feature cards stack */}
            <Card className="border-0 shadow-xl bg-card transform rotate-2 hover:rotate-0 transition-transform duration-500">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <Lock className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Blockchain Verified</h3>
                    <p className="text-muted-foreground">Immutable ownership records</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-muted">
                    <div className="text-2xl font-bold text-primary">256-bit</div>
                    <div className="text-sm text-muted-foreground">Encryption</div>
                  </div>
                  <div className="p-4 rounded-lg bg-muted">
                    <div className="text-2xl font-bold text-accent">100%</div>
                    <div className="text-sm text-muted-foreground">Traceability</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* EV Badge overlay */}
            <div className="absolute -bottom-4 -right-4 p-4 rounded-xl bg-gradient-ev text-primary-foreground shadow-lg">
              <div className="flex items-center gap-2">
                <Battery className="h-6 w-6" />
                <span className="font-semibold">EV Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-gradient-hero text-primary-foreground py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform
            <br />
            Parts Management?
          </h2>
          <p className="text-xl text-primary-foreground/70 mb-10 max-w-2xl mx-auto">
            Join hundreds of manufacturers, repair shops, and recyclers already 
            using PartLedger to track and verify vehicle parts.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="h-14 px-8 text-lg bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
            >
              Get Started Free
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
