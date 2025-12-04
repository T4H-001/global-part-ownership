import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { 
  Check, Sparkles, Building2, Users, Zap, ArrowRight,
  Shield, Globe, BarChart3, Lock, Car, Factory, Truck
} from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navigation } from "@/components/Navigation";
import { SiteSEO } from "@/components/shared/SiteSEO";
import { cn } from "@/lib/utils";

const plans = [
  {
    id: "consumer",
    name: "Consumer",
    description: "For vehicle owners tracking their parts",
    price: { monthly: 0, yearly: 0 },
    icon: Users,
    color: "from-blue-500 to-cyan-500",
    popular: false,
    features: [
      "Track up to 2 vehicles",
      "Part ownership history",
      "Recall notifications",
      "Basic warranty tracking",
      "Mobile app access",
      "QR code scanning",
    ],
    cta: "Get Started Free",
  },
  {
    id: "professional",
    name: "Professional",
    description: "For repair shops and small fleets",
    price: { monthly: 79, yearly: 790 },
    icon: Truck,
    color: "from-primary to-accent",
    popular: true,
    features: [
      "Unlimited vehicle tracking",
      "Part verification API",
      "Advanced analytics dashboard",
      "Warranty management",
      "Customer portal",
      "Bulk part registration",
      "Priority support",
      "White-label reports",
    ],
    cta: "Start Free Trial",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    description: "For OEMs, manufacturers, and large fleets",
    price: { monthly: null, yearly: null },
    icon: Factory,
    color: "from-purple-500 to-pink-500",
    popular: false,
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom integrations",
      "Blockchain anchoring",
      "Global compliance reporting",
      "OEM branding & promotion",
      "API rate limits removed",
      "SLA guarantees",
      "Multi-region deployment",
    ],
    cta: "Contact Sales",
  },
];

const comparisons = [
  { feature: "Vehicles tracked", consumer: "2", professional: "Unlimited", enterprise: "Unlimited" },
  { feature: "Parts per vehicle", consumer: "50", professional: "500", enterprise: "Unlimited" },
  { feature: "Team members", consumer: "1", professional: "10", enterprise: "Unlimited" },
  { feature: "API calls/month", consumer: "-", professional: "10,000", enterprise: "Unlimited" },
  { feature: "Data retention", consumer: "2 years", professional: "10 years", enterprise: "Forever" },
  { feature: "Support", consumer: "Email", professional: "Priority", enterprise: "Dedicated" },
  { feature: "Analytics", consumer: "Basic", professional: "Advanced", enterprise: "Custom" },
  { feature: "Blockchain verification", consumer: "-", professional: "check", enterprise: "check" },
  { feature: "White-label", consumer: "-", professional: "check", enterprise: "check" },
  { feature: "Custom integrations", consumer: "-", professional: "-", enterprise: "check" },
  { feature: "SLA guarantee", consumer: "-", professional: "-", enterprise: "check" },
];

const stakeholderPricing = [
  {
    type: "OEM Partners",
    icon: Building2,
    description: "Premium placement, co-branded pages, priority API access",
    startingAt: "$2,500/mo",
    color: "primary",
  },
  {
    type: "Fleet Managers",
    icon: Car,
    description: "Per-vehicle pricing with volume discounts",
    startingAt: "$5/vehicle/mo",
    color: "accent",
  },
  {
    type: "Insurance",
    icon: Shield,
    description: "Per-verification pricing, fraud detection APIs",
    startingAt: "$0.10/lookup",
    color: "success",
  },
  {
    type: "Government",
    icon: Globe,
    description: "Custom compliance packages, regulatory reporting",
    startingAt: "Contact us",
    color: "warning",
  },
];

export default function Pricing() {
  const navigate = useNavigate();
  const [annual, setAnnual] = useState(true);

  return (
    <div className="min-h-screen bg-background">
      <SiteSEO 
        title="Pricing | PartLedger - Global Vehicle Parts Platform"
        description="Simple, transparent pricing for vehicle parts tracking. From free consumer plans to enterprise solutions for OEMs and manufacturers."
      />
      <Navigation />
      
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute inset-0 bg-mesh opacity-30" />
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary">
            <Sparkles className="h-3 w-3 mr-1" />
            Simple, Transparent Pricing
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Plans for Every
            <span className="text-gradient-ev block">Stakeholder</span>
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            From individual vehicle owners to global manufacturers. 
            Start free, scale as you grow.
          </p>
          
          {/* Billing toggle */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <span className={cn("text-sm font-medium", !annual && "text-foreground", annual && "text-muted-foreground")}>
              Monthly
            </span>
            <Switch checked={annual} onCheckedChange={setAnnual} />
            <span className={cn("text-sm font-medium", annual && "text-foreground", !annual && "text-muted-foreground")}>
              Annually
            </span>
            {annual && (
              <Badge variant="secondary" className="ml-2 bg-success/10 text-success border-success/20">
                Save 17%
              </Badge>
            )}
          </div>
          
          {/* Plan Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={cn(
                  "relative border-2 transition-all duration-300 hover:-translate-y-2",
                  plan.popular 
                    ? "border-primary shadow-xl shadow-primary/20 scale-105" 
                    : "border-border hover:border-primary/50"
                )}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="pt-8 pb-4">
                  <div className={cn("w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center mx-auto mb-4", plan.color)}>
                    <plan.icon className="h-7 w-7 text-white" />
                  </div>
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="text-sm">{plan.description}</CardDescription>
                </CardHeader>
                
                <CardContent className="pb-8">
                  <div className="mb-6">
                    {plan.price.monthly === null ? (
                      <div className="text-4xl font-bold">Custom</div>
                    ) : plan.price.monthly === 0 ? (
                      <div className="text-4xl font-bold">Free</div>
                    ) : (
                      <>
                        <span className="text-5xl font-bold">
                          ${annual ? Math.round(plan.price.yearly / 12) : plan.price.monthly}
                        </span>
                        <span className="text-muted-foreground">/month</span>
                        {annual && plan.price.yearly > 0 && (
                          <div className="text-sm text-muted-foreground mt-1">
                            ${plan.price.yearly} billed annually
                          </div>
                        )}
                      </>
                    )}
                  </div>
                  
                  <Button 
                    className={cn(
                      "w-full mb-6",
                      plan.popular && "bg-primary hover:bg-primary/90"
                    )}
                    variant={plan.popular ? "default" : "outline"}
                    size="lg"
                    onClick={() => navigate(plan.id === "enterprise" ? "/contact" : "/auth")}
                  >
                    {plan.cta}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                  
                  <ul className="space-y-3 text-left">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <div className="p-0.5 rounded-full bg-success/10 mt-0.5">
                          <Check className="h-4 w-4 text-success" />
                        </div>
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Stakeholder-specific pricing */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="mb-4">Specialized Plans</Badge>
            <h2 className="text-4xl font-bold mb-4">Industry-Specific Pricing</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Custom solutions tailored to your sector's unique requirements
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stakeholderPricing.map((item) => (
              <Card key={item.type} className="border-0 shadow-lg hover-lift bg-card">
                <CardContent className="p-6">
                  <div className={cn(
                    "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
                    item.color === "primary" && "bg-primary/10",
                    item.color === "accent" && "bg-accent/10",
                    item.color === "success" && "bg-success/10",
                    item.color === "warning" && "bg-warning/10",
                  )}>
                    <item.icon className={cn(
                      "h-6 w-6",
                      item.color === "primary" && "text-primary",
                      item.color === "accent" && "text-accent",
                      item.color === "success" && "text-success",
                      item.color === "warning" && "text-warning",
                    )} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.type}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                  <div className="text-2xl font-bold text-primary">{item.startingAt}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Feature Comparison Table */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Compare Plans</h2>
            <p className="text-xl text-muted-foreground">
              Detailed feature comparison across all tiers
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold">Consumer</th>
                  <th className="text-center py-4 px-4 font-semibold text-primary">Professional</th>
                  <th className="text-center py-4 px-4 font-semibold">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, i) => (
                  <tr key={row.feature} className={cn("border-b border-border/50", i % 2 === 0 && "bg-muted/30")}>
                    <td className="py-4 px-4 text-sm font-medium">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-sm text-muted-foreground">
                      {row.consumer === "check" ? (
                        <Check className="h-5 w-5 text-success mx-auto" />
                      ) : row.consumer === "-" ? (
                        <span className="text-muted-foreground/50">—</span>
                      ) : (
                        row.consumer
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-sm bg-primary/5">
                      {row.professional === "check" ? (
                        <Check className="h-5 w-5 text-success mx-auto" />
                      ) : row.professional === "-" ? (
                        <span className="text-muted-foreground/50">—</span>
                      ) : (
                        <span className="font-medium">{row.professional}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center text-sm text-muted-foreground">
                      {row.enterprise === "check" ? (
                        <Check className="h-5 w-5 text-success mx-auto" />
                      ) : row.enterprise === "-" ? (
                        <span className="text-muted-foreground/50">—</span>
                      ) : (
                        row.enterprise
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* Trust Section */}
      <section className="bg-muted/30 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">OEM Partners</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">2M+</div>
              <div className="text-muted-foreground">Parts Tracked</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">45</div>
              <div className="text-muted-foreground">Countries</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">Uptime SLA</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="bg-gradient-hero text-primary-foreground py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-primary-foreground/70 mb-10">
            Join the global standard for vehicle parts tracking and verification.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              className="h-14 px-8 bg-primary-foreground text-foreground hover:bg-primary-foreground/90"
              onClick={() => navigate("/auth")}
            >
              Start Free Trial
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="h-14 px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              onClick={() => navigate("/contact")}
            >
              Talk to Sales
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
}
