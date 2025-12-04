import { Link } from "react-router-dom";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Car, Linkedin, Twitter, Youtube, Globe } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-card border-t border-border mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center mr-3">
                <Car className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">
                  Part<span className="text-primary">Ledger</span>
                </h3>
                <span className="text-xs text-muted-foreground">
                  Global Parts Registry
                </span>
              </div>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              The global platform for vehicle parts ownership and lifecycle tracking. 
              Blockchain-verified authenticity from manufacture to recycling.
            </p>
            <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@partledger.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="h-4 w-4" />
                <span>Global Operations</span>
              </div>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-3 mt-6">
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full hover:bg-primary/10 hover:text-primary">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Portals */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Portals</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/portal/manufacturer" className="text-muted-foreground hover:text-primary transition-colors">
                  Manufacturers
                </Link>
              </li>
              <li>
                <Link to="/portal/oem" className="text-muted-foreground hover:text-primary transition-colors">
                  OEM Partners
                </Link>
              </li>
              <li>
                <Link to="/portal/fleet" className="text-muted-foreground hover:text-primary transition-colors">
                  Fleet Managers
                </Link>
              </li>
              <li>
                <Link to="/portal/repair" className="text-muted-foreground hover:text-primary transition-colors">
                  Repair Shops
                </Link>
              </li>
              <li>
                <Link to="/portal/consumer" className="text-muted-foreground hover:text-primary transition-colors">
                  Consumers
                </Link>
              </li>
              <li>
                <Link to="/portal/recycler" className="text-muted-foreground hover:text-primary transition-colors">
                  Recyclers
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/parts/explorer" className="text-muted-foreground hover:text-primary transition-colors">
                  Parts Explorer
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-muted-foreground hover:text-primary transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-muted-foreground hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2025 PartLedger. A Tech 4 Humanity Initiative.
          </div>
          <div className="flex items-center gap-4">
            <Link to="/pricing">
              <Button variant="default" size="sm">
                Get Started
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
