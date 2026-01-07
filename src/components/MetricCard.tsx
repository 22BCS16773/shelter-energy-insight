import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string;
  unit: string;
  change: number;
  icon: LucideIcon;
  variant?: "electricity" | "water" | "gas" | "carbon";
}

const variantStyles = {
  electricity: "from-amber-500/20 to-orange-500/20 border-amber-500/30",
  water: "from-blue-500/20 to-cyan-500/20 border-blue-500/30",
  gas: "from-purple-500/20 to-pink-500/20 border-purple-500/30",
  carbon: "from-emerald-500/20 to-teal-500/20 border-emerald-500/30",
};

const iconStyles = {
  electricity: "bg-amber-500/20 text-amber-600",
  water: "bg-blue-500/20 text-blue-600",
  gas: "bg-purple-500/20 text-purple-600",
  carbon: "bg-emerald-500/20 text-emerald-600",
};

export function MetricCard({ title, value, unit, change, icon: Icon, variant = "electricity" }: MetricCardProps) {
  const isPositive = change >= 0;
  
  return (
    <Card className={cn(
      "relative overflow-hidden border bg-gradient-to-br transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
      variantStyles[variant]
    )}>
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-3">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-display font-bold tracking-tight text-foreground">
                {value}
              </span>
              <span className="text-sm text-muted-foreground">{unit}</span>
            </div>
            <div className={cn(
              "inline-flex items-center gap-1 text-sm font-medium",
              isPositive ? "text-destructive" : "text-success"
            )}>
              <span>{isPositive ? "↑" : "↓"}</span>
              <span>{Math.abs(change)}% from last month</span>
            </div>
          </div>
          <div className={cn("p-3 rounded-xl", iconStyles[variant])}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
        
        {/* Live indicator */}
        <div className="absolute top-4 right-4 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-success pulse-live" />
          <span className="text-xs text-muted-foreground">Live</span>
        </div>
      </CardContent>
    </Card>
  );
}
