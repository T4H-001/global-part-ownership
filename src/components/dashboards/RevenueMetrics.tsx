import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  DollarSign, TrendingUp, Users, Package, CreditCard, 
  ArrowUpRight, ArrowDownRight, Target, Zap
} from "lucide-react";

interface MetricData {
  label: string;
  value: string | number;
  change?: number;
  target?: number;
  current?: number;
}

interface RevenueMetricsProps {
  period: string;
  metrics: {
    totalRevenue: MetricData;
    subscriptions: MetricData;
    transactions: MetricData;
    apiCalls: MetricData;
    premiumListings: MetricData;
    partnerFees: MetricData;
  };
}

export function RevenueMetrics({ period, metrics }: RevenueMetricsProps) {
  const formatChange = (change?: number) => {
    if (!change) return null;
    const isPositive = change > 0;
    return (
      <div className={`flex items-center gap-1 text-sm ${isPositive ? 'text-success' : 'text-destructive'}`}>
        {isPositive ? <ArrowUpRight className="h-4 w-4" /> : <ArrowDownRight className="h-4 w-4" />}
        {Math.abs(change)}%
      </div>
    );
  };

  const calculateProgress = (current?: number, target?: number) => {
    if (!current || !target) return 0;
    return Math.min((current / target) * 100, 100);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">Revenue Dashboard</h2>
          <p className="text-muted-foreground">Performance for {period}</p>
        </div>
        <Badge variant="outline" className="px-3 py-1">
          <Zap className="h-3 w-3 mr-1" />
          Live Data
        </Badge>
      </div>

      {/* Primary Revenue Card */}
      <Card className="border-0 shadow-xl bg-gradient-hero text-primary-foreground">
        <CardContent className="p-8">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-primary-foreground/70 text-sm font-medium">
                {metrics.totalRevenue.label}
              </p>
              <div className="flex items-baseline gap-4 mt-2">
                <span className="text-5xl font-bold tracking-tight">
                  {metrics.totalRevenue.value}
                </span>
                {formatChange(metrics.totalRevenue.change)}
              </div>
              {metrics.totalRevenue.target && metrics.totalRevenue.current && (
                <div className="mt-4 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Target Progress</span>
                    <span>{calculateProgress(metrics.totalRevenue.current, metrics.totalRevenue.target).toFixed(0)}%</span>
                  </div>
                  <Progress 
                    value={calculateProgress(metrics.totalRevenue.current, metrics.totalRevenue.target)} 
                    className="h-2 bg-primary-foreground/20"
                  />
                </div>
              )}
            </div>
            <div className="p-4 rounded-2xl bg-primary-foreground/10">
              <DollarSign className="h-10 w-10" />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Streams Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Subscriptions */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-primary/10">
                <CreditCard className="h-5 w-5 text-primary" />
              </div>
              {formatChange(metrics.subscriptions.change)}
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">{metrics.subscriptions.label}</p>
              <p className="text-2xl font-bold mt-1">{metrics.subscriptions.value}</p>
            </div>
          </CardContent>
        </Card>

        {/* Transactions */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-accent/10">
                <Package className="h-5 w-5 text-accent" />
              </div>
              {formatChange(metrics.transactions.change)}
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">{metrics.transactions.label}</p>
              <p className="text-2xl font-bold mt-1">{metrics.transactions.value}</p>
            </div>
          </CardContent>
        </Card>

        {/* API Calls */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-info/10">
                <Zap className="h-5 w-5 text-info" />
              </div>
              {formatChange(metrics.apiCalls.change)}
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">{metrics.apiCalls.label}</p>
              <p className="text-2xl font-bold mt-1">{metrics.apiCalls.value}</p>
            </div>
          </CardContent>
        </Card>

        {/* Premium Listings */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-warning/10">
                <Target className="h-5 w-5 text-warning" />
              </div>
              {formatChange(metrics.premiumListings.change)}
            </div>
            <div className="mt-4">
              <p className="text-sm text-muted-foreground">{metrics.premiumListings.label}</p>
              <p className="text-2xl font-bold mt-1">{metrics.premiumListings.value}</p>
            </div>
          </CardContent>
        </Card>

        {/* Partner Fees */}
        <Card className="border-0 shadow-lg lg:col-span-2">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-lg bg-success/10">
                <Users className="h-5 w-5 text-success" />
              </div>
              {formatChange(metrics.partnerFees.change)}
            </div>
            <div className="mt-4 flex items-end justify-between">
              <div>
                <p className="text-sm text-muted-foreground">{metrics.partnerFees.label}</p>
                <p className="text-2xl font-bold mt-1">{metrics.partnerFees.value}</p>
              </div>
              <div className="text-right text-sm text-muted-foreground">
                <div>Platinum: 12 partners</div>
                <div>Gold: 28 partners</div>
                <div>Silver: 156 partners</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
