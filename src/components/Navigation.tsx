import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, Settings, Search, Menu, X, ChevronDown,
  Layers, Factory, Users, Truck, Wrench, Recycle, Shield, Car, Sparkles
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useDemoMode } from "@/hooks/useDemoMode";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

export const Navigation = () => {
  const location = useLocation();
  const demo = useDemoMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const isActive = (path: string) => location.pathname === path || location.pathname.startsWith(path + '/');
  
  const portals = [
    { icon: Factory, label: "OEM Partners", href: "/portal/oem", highlight: true },
    { icon: Car, label: "Fleet Managers", href: "/portal/fleet", highlight: true },
    { icon: Factory, label: "Manufacturers", href: "/portal/manufacturer" },
    { icon: Truck, label: "Distributors", href: "/portal/distributor" },
    { icon: Wrench, label: "Repair Shops", href: "/portal/repair" },
    { icon: Users, label: "Consumers", href: "/portal/consumer" },
    { icon: Recycle, label: "Recyclers", href: "/portal/recycler" },
    { icon: Shield, label: "Government", href: "/portal/government" },
    { icon: Shield, label: "Insurance", href: "/portal/insurance" },
  ];
  
  return (
    <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-xl group-hover:bg-primary/30 transition-colors" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Car className="h-5 w-5 text-primary-foreground" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-foreground">
                Part<span className="text-primary">Ledger</span>
              </span>
              <span className="text-xs text-muted-foreground hidden sm:block">
                Global Parts Registry
              </span>
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/parts/explorer">
              <Button 
                variant={isActive("/parts") ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Layers className="h-4 w-4" />
                Parts Explorer
              </Button>
            </Link>
            
            {/* Portals Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant={isActive("/portal") ? "secondary" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <Users className="h-4 w-4" />
                  Portals
                  <ChevronDown className="h-3 w-3" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-popover border border-border">
                {portals.slice(0, 2).map((portal) => (
                  <DropdownMenuItem key={portal.href} asChild className="bg-primary/5">
                    <Link to={portal.href} className="flex items-center gap-2 cursor-pointer font-medium">
                      <portal.icon className="h-4 w-4 text-primary" />
                      {portal.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                {portals.slice(2).map((portal) => (
                  <DropdownMenuItem key={portal.href} asChild>
                    <Link to={portal.href} className="flex items-center gap-2 cursor-pointer">
                      <portal.icon className="h-4 w-4" />
                      {portal.label}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            
            <Link to="/pricing">
              <Button 
                variant={isActive("/pricing") ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Sparkles className="h-4 w-4" />
                Pricing
              </Button>
            </Link>
            
            <Link to="/dashboard">
              <Button 
                variant={isActive("/dashboard") ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <BarChart3 className="h-4 w-4" />
                Dashboard
              </Button>
            </Link>
            
            <Link to="/search">
              <Button 
                variant={isActive("/search") ? "secondary" : "ghost"}
                size="sm"
                className="gap-2"
              >
                <Search className="h-4 w-4" />
                Search
              </Button>
            </Link>
            
            {demo.active && (
              <Link to="/admin/demo">
                <Button 
                  variant={isActive("/admin") ? "secondary" : "ghost"}
                  size="sm"
                  className="gap-2"
                >
                  <Shield className="h-4 w-4" />
                  Admin
                </Button>
              </Link>
            )}
          </div>
          
          {/* Right side actions */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Settings className="h-4 w-4" />
            </Button>
            
            <Button 
              variant="default" 
              size="sm"
              className="hidden md:flex"
            >
              Sign In
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-card">
          <div className="px-4 py-4 space-y-2">
            <Link 
              to="/parts/explorer" 
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg",
                isActive("/parts") ? "bg-primary/10 text-primary" : "hover:bg-muted"
              )}
            >
              <Layers className="h-5 w-5" />
              Parts Explorer
            </Link>
            
            <div className="px-4 py-2 text-sm font-medium text-muted-foreground">
              Portals
            </div>
            {portals.map((portal) => (
              <Link 
                key={portal.href}
                to={portal.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg ml-4",
                  isActive(portal.href) ? "bg-primary/10 text-primary" : "hover:bg-muted"
                )}
              >
                <portal.icon className="h-4 w-4" />
                {portal.label}
              </Link>
            ))}
            
            <Link 
              to="/dashboard" 
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg",
                isActive("/dashboard") ? "bg-primary/10 text-primary" : "hover:bg-muted"
              )}
            >
              <BarChart3 className="h-5 w-5" />
              Dashboard
            </Link>
            
            <Link 
              to="/search" 
              onClick={() => setMobileMenuOpen(false)}
              className={cn(
                "flex items-center gap-3 px-4 py-3 rounded-lg",
                isActive("/search") ? "bg-primary/10 text-primary" : "hover:bg-muted"
              )}
            >
              <Search className="h-5 w-5" />
              Search
            </Link>
            
            <div className="pt-4 border-t">
              <Button className="w-full">Sign In</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
