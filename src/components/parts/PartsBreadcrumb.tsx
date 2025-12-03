import { ChevronRight, Home } from "lucide-react";
import { PartCategory } from "@/types/parts";
import { cn } from "@/lib/utils";

interface PartsBreadcrumbProps {
  path: PartCategory[];
  onNavigate?: (category: PartCategory | null) => void;
  systemName?: string;
}

export function PartsBreadcrumb({ path, onNavigate, systemName }: PartsBreadcrumbProps) {
  return (
    <nav className="flex items-center gap-1 text-sm flex-wrap">
      {/* Home */}
      <button
        onClick={() => onNavigate?.(null)}
        className={cn(
          "flex items-center gap-1 px-2 py-1 rounded-md transition-colors",
          "text-muted-foreground hover:text-foreground hover:bg-muted"
        )}
      >
        <Home className="h-4 w-4" />
        <span className="hidden sm:inline">All Systems</span>
      </button>
      
      {/* System name if no path */}
      {systemName && path.length === 0 && (
        <>
          <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
          <span className="px-2 py-1 font-medium text-foreground">
            {systemName}
          </span>
        </>
      )}
      
      {/* Path items */}
      {path.map((category, index) => {
        const isLast = index === path.length - 1;
        
        return (
          <div key={category.id} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4 text-muted-foreground/50" />
            {isLast ? (
              <span className="px-2 py-1 font-medium text-foreground">
                {category.name}
              </span>
            ) : (
              <button
                onClick={() => onNavigate?.(category)}
                className={cn(
                  "px-2 py-1 rounded-md transition-colors",
                  "text-muted-foreground hover:text-foreground hover:bg-muted"
                )}
              >
                {category.name}
              </button>
            )}
          </div>
        );
      })}
    </nav>
  );
}
