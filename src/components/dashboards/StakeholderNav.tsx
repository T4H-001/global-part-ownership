import { Link, useLocation } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Factory, Users, Store, Wrench, Building2, Shield, Truck, 
  Recycle, FileCheck, Car, Settings, Bell, LogOut, ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface StakeholderNavProps {
  stakeholderType: 'manufacturer' | 'consumer' | 'retailer' | 'repair' | 'oem' | 'insurer' | 'fleet' | 'recycler' | 'government';
  notifications?: number;
}

const stakeholderConfig = {
  manufacturer: {
    label: "Manufacturer",
    icon: Factory,
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary to-primary/80",
  },
  consumer: {
    label: "Consumer",
    icon: Users,
    color: "text-accent",
    bgColor: "bg-accent/10",
    gradient: "from-accent to-accent/80",
  },
  retailer: {
    label: "Retailer",
    icon: Store,
    color: "text-warning",
    bgColor: "bg-warning/10",
    gradient: "from-warning to-warning/80",
  },
  repair: {
    label: "Repair Shop",
    icon: Wrench,
    color: "text-info",
    bgColor: "bg-info/10",
    gradient: "from-info to-info/80",
  },
  oem: {
    label: "OEM Partner",
    icon: Building2,
    color: "text-primary",
    bgColor: "bg-primary/10",
    gradient: "from-primary to-info",
  },
  insurer: {
    label: "Insurance",
    icon: Shield,
    color: "text-success",
    bgColor: "bg-success/10",
    gradient: "from-success to-success/80",
  },
  fleet: {
    label: "Fleet Manager",
    icon: Truck,
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    gradient: "from-purple-500 to-purple-500/80",
  },
  recycler: {
    label: "Recycler",
    icon: Recycle,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    gradient: "from-emerald-500 to-emerald-500/80",
  },
  government: {
    label: "Government",
    icon: FileCheck,
    color: "text-slate-500",
    bgColor: "bg-slate-500/10",
    gradient: "from-slate-600 to-slate-500",
  },
};

const stakeholderLinks: Record<string, { label: string; href: string; icon: any }[]> = {
  manufacturer: [
    { label: "Dashboard", href: "/portal/manufacturer", icon: Factory },
    { label: "Register Parts", href: "/portal/manufacturer/register", icon: Factory },
    { label: "Batch Management", href: "/portal/manufacturer/batches", icon: Factory },
    { label: "Analytics", href: "/portal/manufacturer/analytics", icon: Factory },
    { label: "API Access", href: "/portal/manufacturer/api", icon: Factory },
  ],
  consumer: [
    { label: "Dashboard", href: "/portal/consumer", icon: Car },
    { label: "My Vehicles", href: "/portal/consumer/vehicles", icon: Car },
    { label: "Part History", href: "/portal/consumer/history", icon: Car },
    { label: "Warranties", href: "/portal/consumer/warranties", icon: Shield },
    { label: "Transfers", href: "/portal/consumer/transfers", icon: Car },
  ],
  oem: [
    { label: "Dashboard", href: "/portal/oem", icon: Building2 },
    { label: "Brand Profile", href: "/portal/oem/profile", icon: Building2 },
    { label: "Promotions", href: "/portal/oem/promotions", icon: Building2 },
    { label: "Analytics", href: "/portal/oem/analytics", icon: Building2 },
    { label: "API Integration", href: "/portal/oem/api", icon: Building2 },
  ],
};

export function StakeholderNav({ stakeholderType, notifications = 0 }: StakeholderNavProps) {
  const location = useLocation();
  const config = stakeholderConfig[stakeholderType];
  const Icon = config.icon;
  const links = stakeholderLinks[stakeholderType] || [];

  return (
    <aside className="w-64 min-h-screen bg-card border-r border-border flex flex-col">
      {/* Brand Header */}
      <div className="p-4 border-b border-border">
        <Link to="/" className="flex items-center gap-2">
          <div className={cn("p-2 rounded-lg", config.bgColor)}>
            <Icon className={cn("h-6 w-6", config.color)} />
          </div>
          <div>
            <div className="font-bold text-lg">PartLedger</div>
            <div className="text-xs text-muted-foreground">{config.label} Portal</div>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-1">
        {links.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-colors",
                isActive 
                  ? "bg-primary text-primary-foreground" 
                  : "hover:bg-muted text-muted-foreground hover:text-foreground"
              )}
            >
              <span className="flex-1 text-sm font-medium">{link.label}</span>
              {isActive && <ChevronRight className="h-4 w-4" />}
            </Link>
          );
        })}
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t border-border space-y-2">
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Bell className="h-4 w-4" />
          Notifications
          {notifications > 0 && (
            <Badge variant="destructive" className="ml-auto text-xs h-5 w-5 p-0 flex items-center justify-center">
              {notifications}
            </Badge>
          )}
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2">
          <Settings className="h-4 w-4" />
          Settings
        </Button>
        <Button variant="ghost" className="w-full justify-start gap-2 text-destructive hover:text-destructive">
          <LogOut className="h-4 w-4" />
          Sign Out
        </Button>
      </div>
    </aside>
  );
}
