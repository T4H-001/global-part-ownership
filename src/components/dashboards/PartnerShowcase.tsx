import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Star, Verified, TrendingUp, Users } from "lucide-react";

interface Partner {
  id: string;
  name: string;
  logo?: string;
  category: 'oem' | 'supplier' | 'retailer' | 'recycler' | 'insurer';
  tier: 'platinum' | 'gold' | 'silver' | 'bronze';
  stats?: {
    partsRegistered?: number;
    monthlyVolume?: number;
    verificationRate?: number;
  };
  featured?: boolean;
  website?: string;
}

interface PartnerShowcaseProps {
  partners: Partner[];
  title?: string;
  showStats?: boolean;
  layout?: 'grid' | 'list';
}

const tierColors = {
  platinum: 'bg-gradient-to-r from-slate-400 to-slate-600 text-white',
  gold: 'bg-gradient-to-r from-amber-400 to-amber-600 text-white',
  silver: 'bg-gradient-to-r from-gray-300 to-gray-500 text-white',
  bronze: 'bg-gradient-to-r from-orange-400 to-orange-600 text-white',
};

const categoryLabels = {
  oem: 'OEM',
  supplier: 'Supplier',
  retailer: 'Retailer',
  recycler: 'Recycler',
  insurer: 'Insurance',
};

export function PartnerShowcase({ 
  partners, 
  title = "Featured Partners",
  showStats = true,
  layout = 'grid'
}: PartnerShowcaseProps) {
  const featuredPartners = partners.filter(p => p.featured);
  const regularPartners = partners.filter(p => !p.featured);

  return (
    <div className="space-y-6">
      {title && (
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold">{title}</h2>
          <Button variant="outline" size="sm">
            View All Partners
          </Button>
        </div>
      )}

      {/* Featured Partners - Large Cards */}
      {featuredPartners.length > 0 && (
        <div className="grid md:grid-cols-2 gap-6">
          {featuredPartners.map((partner) => (
            <Card 
              key={partner.id} 
              className="border-0 shadow-xl bg-gradient-to-br from-card to-muted/50 hover-lift relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 rounded-xl bg-background flex items-center justify-center border shadow-sm">
                      {partner.logo ? (
                        <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain" />
                      ) : (
                        <span className="text-2xl font-bold text-primary">{partner.name[0]}</span>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <CardTitle className="text-xl">{partner.name}</CardTitle>
                        <Verified className="h-5 w-5 text-primary" />
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge variant="secondary">{categoryLabels[partner.category]}</Badge>
                        <Badge className={tierColors[partner.tier]}>
                          <Star className="h-3 w-3 mr-1" />
                          {partner.tier.charAt(0).toUpperCase() + partner.tier.slice(1)}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                {showStats && partner.stats && (
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {partner.stats.partsRegistered && (
                      <div className="text-center p-3 rounded-lg bg-background/50">
                        <div className="text-2xl font-bold text-primary">
                          {(partner.stats.partsRegistered / 1000).toFixed(0)}K
                        </div>
                        <div className="text-xs text-muted-foreground">Parts Registered</div>
                      </div>
                    )}
                    {partner.stats.monthlyVolume && (
                      <div className="text-center p-3 rounded-lg bg-background/50">
                        <div className="text-2xl font-bold text-accent flex items-center justify-center gap-1">
                          <TrendingUp className="h-4 w-4" />
                          {(partner.stats.monthlyVolume / 1000).toFixed(0)}K
                        </div>
                        <div className="text-xs text-muted-foreground">Monthly Volume</div>
                      </div>
                    )}
                    {partner.stats.verificationRate && (
                      <div className="text-center p-3 rounded-lg bg-background/50">
                        <div className="text-2xl font-bold text-success">
                          {partner.stats.verificationRate}%
                        </div>
                        <div className="text-xs text-muted-foreground">Verification Rate</div>
                      </div>
                    )}
                  </div>
                )}
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" className="flex-1">View Profile</Button>
                  {partner.website && (
                    <Button variant="ghost" size="icon">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Regular Partners - Compact Grid */}
      {regularPartners.length > 0 && (
        <div className={layout === 'grid' ? 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4' : 'space-y-3'}>
          {regularPartners.map((partner) => (
            <Card 
              key={partner.id} 
              className="border-0 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            >
              <CardContent className="p-4 flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-3">
                  {partner.logo ? (
                    <img src={partner.logo} alt={partner.name} className="w-8 h-8 object-contain" />
                  ) : (
                    <span className="text-lg font-bold text-primary">{partner.name[0]}</span>
                  )}
                </div>
                <div className="font-medium text-sm truncate w-full">{partner.name}</div>
                <Badge variant="outline" className="mt-2 text-xs">
                  {categoryLabels[partner.category]}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
