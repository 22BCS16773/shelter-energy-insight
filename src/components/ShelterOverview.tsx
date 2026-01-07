import { Building2, Users, Gauge } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const shelters = [
  { name: "Hope Haven Center", occupancy: 85, efficiency: 92, residents: 124 },
  { name: "Safe Harbor Shelter", occupancy: 72, efficiency: 88, residents: 98 },
  { name: "New Beginnings Home", occupancy: 95, efficiency: 78, residents: 156 },
  { name: "Community Care House", occupancy: 68, efficiency: 95, residents: 82 },
];

export function ShelterOverview() {
  return (
    <Card className="shadow-card">
      <CardHeader>
        <CardTitle className="font-display text-xl">Shelter Network Overview</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {shelters.map((shelter) => (
          <div key={shelter.name} className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-primary/10">
                  <Building2 className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-sm">{shelter.name}</h4>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Users className="w-3 h-3" />
                      {shelter.residents} residents
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-1 text-sm">
                <Gauge className="w-4 h-4 text-success" />
                <span className="font-medium">{shelter.efficiency}%</span>
              </div>
            </div>
            
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-muted-foreground">Occupancy</span>
                <span className="font-medium">{shelter.occupancy}%</span>
              </div>
              <Progress value={shelter.occupancy} className="h-2" />
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
