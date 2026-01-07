import { AlertTriangle, CheckCircle, Info, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const alerts = [
  {
    id: 1,
    type: "warning",
    title: "High Water Usage Detected",
    description: "Building A showing 40% above average consumption",
    time: "5 min ago",
    icon: AlertTriangle,
  },
  {
    id: 2,
    type: "success",
    title: "Energy Goal Achieved",
    description: "Monthly electricity target met 3 days early",
    time: "1 hour ago",
    icon: CheckCircle,
  },
  {
    id: 3,
    type: "info",
    title: "Smart Meter Update",
    description: "12 devices successfully synced with cloud",
    time: "2 hours ago",
    icon: Info,
  },
  {
    id: 4,
    type: "warning",
    title: "Peak Demand Alert",
    description: "Approaching grid peak hours - consider load shifting",
    time: "3 hours ago",
    icon: Zap,
  },
];

const alertStyles = {
  warning: {
    badge: "bg-warning/20 text-warning border-warning/30",
    icon: "text-warning",
  },
  success: {
    badge: "bg-success/20 text-success border-success/30",
    icon: "text-success",
  },
  info: {
    badge: "bg-primary/20 text-primary border-primary/30",
    icon: "text-primary",
  },
};

export function AlertsPanel() {
  return (
    <Card className="shadow-card">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="font-display text-xl">Smart Alerts</CardTitle>
        <Badge variant="outline" className="font-normal">
          4 Active
        </Badge>
      </CardHeader>
      <CardContent className="space-y-4">
        {alerts.map((alert) => {
          const Icon = alert.icon;
          const styles = alertStyles[alert.type as keyof typeof alertStyles];
          
          return (
            <div
              key={alert.id}
              className="flex items-start gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className={cn("p-2 rounded-lg", styles.badge)}>
                <Icon className={cn("w-4 h-4", styles.icon)} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="font-medium text-sm truncate">{alert.title}</h4>
                  <span className="text-xs text-muted-foreground whitespace-nowrap">
                    {alert.time}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground mt-1">
                  {alert.description}
                </p>
              </div>
            </div>
          );
        })}
      </CardContent>
    </Card>
  );
}
