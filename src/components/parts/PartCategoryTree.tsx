import { useState } from "react";
import { ChevronRight, ChevronDown, Package, Layers } from "lucide-react";
import { PartCategory } from "@/types/parts";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";

interface PartCategoryTreeProps {
  categories: PartCategory[];
  onSelect?: (category: PartCategory) => void;
  selectedId?: string;
  defaultExpanded?: boolean;
  showCounts?: boolean;
}

function countChildren(category: PartCategory): number {
  let count = 1;
  if (category.children) {
    for (const child of category.children) {
      count += countChildren(child);
    }
  }
  return count;
}

function CategoryNode({ 
  category, 
  onSelect, 
  selectedId, 
  level = 0,
  defaultExpanded = false,
  showCounts = true
}: { 
  category: PartCategory; 
  onSelect?: (category: PartCategory) => void;
  selectedId?: string;
  level?: number;
  defaultExpanded?: boolean;
  showCounts?: boolean;
}) {
  const [expanded, setExpanded] = useState(defaultExpanded || level < 1);
  const hasChildren = category.children && category.children.length > 0;
  const isSelected = selectedId === category.id;
  const childCount = hasChildren ? countChildren(category) - 1 : 0;
  
  const levelColors = [
    "text-primary",
    "text-muted-foreground",
    "text-muted-foreground/70"
  ];
  
  return (
    <div>
      <div
        className={cn(
          "flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer transition-all duration-200",
          "hover:bg-muted/50",
          isSelected && "bg-primary/10 text-primary",
          level > 0 && "ml-4"
        )}
        onClick={() => {
          if (hasChildren) {
            setExpanded(!expanded);
          }
          onSelect?.(category);
        }}
      >
        {/* Expand/Collapse icon */}
        {hasChildren ? (
          <button 
            className="p-0.5 hover:bg-muted rounded transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setExpanded(!expanded);
            }}
          >
            {expanded ? (
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            ) : (
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            )}
          </button>
        ) : (
          <div className="w-5" />
        )}
        
        {/* Icon based on level */}
        {level === 0 ? (
          <Layers className={cn("h-4 w-4", levelColors[level])} />
        ) : (
          <Package className={cn("h-4 w-4", levelColors[Math.min(level, 2)])} />
        )}
        
        {/* Category name */}
        <span className={cn(
          "flex-1 text-sm font-medium truncate",
          level === 0 && "font-semibold",
          isSelected && "text-primary"
        )}>
          {category.name}
        </span>
        
        {/* Child count badge */}
        {showCounts && hasChildren && (
          <Badge variant="secondary" className="text-xs px-1.5 py-0 h-5">
            {childCount}
          </Badge>
        )}
        
        {/* Level indicator */}
        <Badge 
          variant="outline" 
          className={cn(
            "text-xs px-1.5 py-0 h-5",
            level === 0 && "border-primary/30 text-primary",
            level === 1 && "border-muted-foreground/30",
            level === 2 && "border-muted-foreground/20"
          )}
        >
          L{category.level}
        </Badge>
      </div>
      
      {/* Children */}
      {hasChildren && expanded && (
        <div className="border-l border-border/50 ml-5">
          {category.children!.map((child) => (
            <CategoryNode
              key={child.id}
              category={child}
              onSelect={onSelect}
              selectedId={selectedId}
              level={level + 1}
              defaultExpanded={defaultExpanded}
              showCounts={showCounts}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function PartCategoryTree({ 
  categories, 
  onSelect, 
  selectedId,
  defaultExpanded = false,
  showCounts = true
}: PartCategoryTreeProps) {
  return (
    <div className="space-y-1">
      {categories.map((category) => (
        <CategoryNode
          key={category.id}
          category={category}
          onSelect={onSelect}
          selectedId={selectedId}
          defaultExpanded={defaultExpanded}
          showCounts={showCounts}
        />
      ))}
    </div>
  );
}
