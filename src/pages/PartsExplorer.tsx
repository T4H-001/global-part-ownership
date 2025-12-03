import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import { 
  Search, Filter, Grid3X3, List, Battery, Zap, Car, 
  Package, Layers, ChevronRight, ArrowLeft
} from "lucide-react";
import { VehicleSystemCard } from "@/components/parts/VehicleSystemCard";
import { PartCategoryTree } from "@/components/parts/PartCategoryTree";
import { PartsBreadcrumb } from "@/components/parts/PartsBreadcrumb";
import { StatsCard } from "@/components/parts/StatsCard";
import { VEHICLE_SYSTEMS, PartCategory, VehicleSystem } from "@/types/parts";
import { PARTS_TAXONOMY, getAllCategories, getCategoryPath, countPartsInSystem } from "@/data/partsTaxonomy";
import { SiteSEO } from "@/components/shared/SiteSEO";
import { cn } from "@/lib/utils";

export default function PartsExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSystem, setSelectedSystem] = useState<VehicleSystem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<PartCategory | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [showEVOnly, setShowEVOnly] = useState(false);
  
  // Get all categories for search
  const allCategories = useMemo(() => getAllCategories(), []);
  
  // Filter systems based on EV toggle
  const displaySystems = useMemo(() => {
    if (showEVOnly) {
      return VEHICLE_SYSTEMS.filter(s => s.isEV);
    }
    return VEHICLE_SYSTEMS;
  }, [showEVOnly]);
  
  // Search results
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    return allCategories.filter(cat => 
      cat.name.toLowerCase().includes(query) ||
      cat.description?.toLowerCase().includes(query) ||
      cat.slug.includes(query)
    ).slice(0, 20);
  }, [searchQuery, allCategories]);
  
  // Current categories to display
  const currentCategories = useMemo(() => {
    if (selectedSystem) {
      return PARTS_TAXONOMY[selectedSystem] || [];
    }
    return [];
  }, [selectedSystem]);
  
  // Category path for breadcrumb
  const categoryPath = useMemo(() => {
    if (selectedCategory) {
      return getCategoryPath(selectedCategory.id);
    }
    return [];
  }, [selectedCategory]);
  
  // Stats
  const totalParts = allCategories.length;
  const evParts = allCategories.filter(c => 
    c.vehicle_system.startsWith('ev_')
  ).length;
  const totalSystems = Object.keys(PARTS_TAXONOMY).length;
  
  const handleSystemSelect = (system: VehicleSystem) => {
    setSelectedSystem(system);
    setSelectedCategory(null);
    setSearchQuery("");
  };
  
  const handleCategorySelect = (category: PartCategory) => {
    setSelectedCategory(category);
  };
  
  const handleBreadcrumbNavigate = (category: PartCategory | null) => {
    if (category === null) {
      setSelectedSystem(null);
      setSelectedCategory(null);
    } else {
      setSelectedCategory(category);
    }
  };
  
  const handleSearchResultClick = (category: PartCategory) => {
    setSelectedSystem(category.vehicle_system);
    setSelectedCategory(category);
    setSearchQuery("");
  };

  return (
    <div className="min-h-screen bg-background">
      <SiteSEO 
        title="Parts Explorer | PartLedger"
        description="Explore the comprehensive vehicle parts taxonomy covering 17 systems and 300+ part categories including EV-specific components."
      />
      
      {/* Hero Header */}
      <div className="hero-section text-primary-foreground py-16 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary-foreground/10 backdrop-blur-sm">
              <Layers className="h-8 w-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">Parts Explorer</h1>
              <p className="text-primary-foreground/70">
                Global Vehicle Parts Taxonomy
              </p>
            </div>
          </div>
          
          {/* Search */}
          <div className="mt-8 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search parts, components, or systems..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 text-lg bg-background/95 backdrop-blur-sm border-0 shadow-xl text-foreground"
              />
            </div>
            
            {/* Search Results Dropdown */}
            {searchResults.length > 0 && (
              <Card className="absolute z-50 w-full max-w-2xl mt-2 shadow-xl border-0">
                <ScrollArea className="max-h-80">
                  <div className="p-2">
                    {searchResults.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => handleSearchResultClick(cat)}
                        className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-muted text-left transition-colors"
                      >
                        <Package className="h-4 w-4 text-muted-foreground" />
                        <div className="flex-1 min-w-0">
                          <div className="font-medium truncate">{cat.name}</div>
                          <div className="text-xs text-muted-foreground truncate">
                            {cat.vehicle_system.replace(/_/g, ' ')} • Level {cat.level}
                          </div>
                        </div>
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </Card>
            )}
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 -mt-16 relative z-20">
          <StatsCard
            title="Total Parts"
            value={totalParts.toLocaleString()}
            subtitle="In taxonomy"
            icon={Package}
            color="primary"
          />
          <StatsCard
            title="Vehicle Systems"
            value={totalSystems}
            subtitle="ICE + EV"
            icon={Car}
            color="accent"
          />
          <StatsCard
            title="EV Components"
            value={evParts}
            subtitle="Battery, Motor, Charging"
            icon={Battery}
            color="success"
          />
          <StatsCard
            title="Sub-components"
            value={allCategories.filter(c => c.level === 3).length}
            subtitle="Level 3 parts"
            icon={Layers}
            color="warning"
          />
        </div>
        
        {/* Controls */}
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <div className="flex items-center gap-2">
            <Button
              variant={showEVOnly ? "default" : "outline"}
              size="sm"
              onClick={() => setShowEVOnly(!showEVOnly)}
              className="gap-2"
            >
              <Zap className="h-4 w-4" />
              EV Only
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-4 w-4" />
              Filters
            </Button>
          </div>
          
          <div className="flex items-center gap-1 bg-muted p-1 rounded-lg">
            <Button
              variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === 'list' ? 'secondary' : 'ghost'}
              size="sm"
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
        
        {/* Breadcrumb when system selected */}
        {selectedSystem && (
          <div className="mb-6 flex items-center gap-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => {
                setSelectedSystem(null);
                setSelectedCategory(null);
              }}
              className="gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </Button>
            <PartsBreadcrumb
              path={categoryPath}
              systemName={VEHICLE_SYSTEMS.find(s => s.id === selectedSystem)?.name}
              onNavigate={handleBreadcrumbNavigate}
            />
          </div>
        )}
        
        {/* Content */}
        {!selectedSystem ? (
          // Systems Grid
          <div className={cn(
            viewMode === 'grid' 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
              : "space-y-3"
          )}>
            {displaySystems.map((system) => (
              <VehicleSystemCard
                key={system.id}
                system={system}
                partCount={countPartsInSystem(system.id)}
                onClick={() => handleSystemSelect(system.id)}
                compact={viewMode === 'list'}
              />
            ))}
          </div>
        ) : (
          // Categories View
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Category Tree */}
            <Card className="lg:col-span-1 border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg flex items-center gap-2">
                  <Layers className="h-5 w-5 text-primary" />
                  Categories
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ScrollArea className="h-[500px] pr-4">
                  <PartCategoryTree
                    categories={currentCategories}
                    onSelect={handleCategorySelect}
                    selectedId={selectedCategory?.id}
                  />
                </ScrollArea>
              </CardContent>
            </Card>
            
            {/* Category Details */}
            <Card className="lg:col-span-2 border-0 shadow-lg">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg">
                  {selectedCategory ? selectedCategory.name : 'Select a Category'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                {selectedCategory ? (
                  <div className="space-y-6">
                    {/* Category Info */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2 flex-wrap">
                        <Badge variant="outline">
                          Level {selectedCategory.level}
                        </Badge>
                        <Badge variant="secondary">
                          {selectedCategory.vehicle_system.replace(/_/g, ' ')}
                        </Badge>
                        {selectedCategory.children && (
                          <Badge>
                            {selectedCategory.children.length} sub-categories
                          </Badge>
                        )}
                      </div>
                      
                      {selectedCategory.description && (
                        <p className="text-muted-foreground">
                          {selectedCategory.description}
                        </p>
                      )}
                      
                      <div className="grid grid-cols-2 gap-4 pt-4">
                        <div className="p-4 rounded-lg bg-muted/50">
                          <div className="text-sm text-muted-foreground">Category ID</div>
                          <div className="font-mono text-sm mt-1">{selectedCategory.id}</div>
                        </div>
                        <div className="p-4 rounded-lg bg-muted/50">
                          <div className="text-sm text-muted-foreground">Slug</div>
                          <div className="font-mono text-sm mt-1">{selectedCategory.slug}</div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Children */}
                    {selectedCategory.children && selectedCategory.children.length > 0 && (
                      <div>
                        <h4 className="font-semibold mb-3">Sub-categories</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {selectedCategory.children.map((child) => (
                            <button
                              key={child.id}
                              onClick={() => handleCategorySelect(child)}
                              className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-muted/50 transition-all text-left"
                            >
                              <Package className="h-4 w-4 text-muted-foreground" />
                              <span className="font-medium">{child.name}</span>
                              <ChevronRight className="h-4 w-4 text-muted-foreground ml-auto" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {/* Actions */}
                    <div className="flex gap-3 pt-4 border-t">
                      <Button className="flex-1">
                        Register Part
                      </Button>
                      <Button variant="outline" className="flex-1">
                        View Registered Parts
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="h-[400px] flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <Package className="h-12 w-12 mx-auto mb-4 opacity-50" />
                      <p>Select a category from the tree to view details</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
