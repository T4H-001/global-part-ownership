import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { VehicleSystemInfo } from "@/types/parts";
import { 
  Car, Cog, Settings2, ArrowUpDown, Disc, Zap, Armchair, Wind, 
  Fuel, Factory, Circle, Navigation, Shield, Lightbulb, Battery, 
  Cpu, PlugZap, LucideIcon 
} from "lucide-react";
import { cn } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = {
  Car, Cog, Settings2, ArrowUpDown, Disc, Zap, Armchair, Wind,
  Fuel, Factory, Circle, Navigation, Shield, Lightbulb, Battery,
  Cpu, PlugZap,
};

interface VehicleSystemCardProps {
  system: VehicleSystemInfo;
  partCount?: number;
  onClick?: () => void;
  selected?: boolean;
  compact?: boolean;
}

export function VehicleSystemCard({ 
  system, 
  partCount, 
  onClick, 
  selected,
  compact = false 
}: VehicleSystemCardProps) {
  const IconComponent = iconMap[system.icon] || Car;
  
  return (
    <Card 
      className={cn(
        "group cursor-pointer transition-all duration-300 hover-lift border-0 overflow-hidden",
        "bg-card/80 backdrop-blur-sm hover:bg-card",
        selected && "ring-2 ring-primary shadow-glow",
        compact ? "p-2" : ""
      )}
      onClick={onClick}
    >
      <CardContent className={cn("relative", compact ? "p-3" : "p-6")}>
        {/* Background gradient effect */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500"
          style={{ background: `linear-gradient(135deg, ${system.color}, transparent)` }}
        />
        
        <div className={cn("relative z-10", compact ? "flex items-center gap-3" : "")}>
          {/* Icon */}
          <div 
            className={cn(
              "rounded-xl flex items-center justify-center transition-all duration-300",
              "group-hover:scale-110",
              compact ? "w-10 h-10" : "w-14 h-14 mb-4"
            )}
            style={{ 
              backgroundColor: `${system.color}15`,
            }}
          >
            <IconComponent 
              className={cn(compact ? "h-5 w-5" : "h-7 w-7")}
              style={{ color: system.color }}
            />
          </div>
          
          <div className="flex-1 min-w-0">
            {/* Title & Badge */}
            <div className={cn("flex items-start justify-between gap-2", compact && "items-center")}>
              <h3 className={cn(
                "font-semibold text-card-foreground group-hover:text-primary transition-colors truncate",
                compact ? "text-sm" : "text-lg"
              )}>
                {system.name}
              </h3>
              {system.isEV && (
                <Badge variant="secondary" className="bg-accent/10 text-accent shrink-0 text-xs">
                  EV
                </Badge>
              )}
            </div>
            
            {/* Description */}
            {!compact && (
              <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                {system.description}
              </p>
            )}
            
            {/* Part count */}
            {partCount !== undefined && (
              <div className={cn(
                "text-muted-foreground",
                compact ? "text-xs" : "text-sm mt-3"
              )}>
                <span className="font-medium" style={{ color: system.color }}>
                  {partCount}
                </span>
                <span className="ml-1">parts</span>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
