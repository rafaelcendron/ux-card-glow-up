import { Clock, TrendingUp, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";

interface ActivityCardProps {
  title?: string;
  totalHours: number;
  totalActivities: number;
  period: string;
  trend?: number;
}

export function ActivityCard({ 
  title = "TOTAL DE ATIVIDADES",
  totalHours, 
  totalActivities, 
  period, 
  trend = 0 
}: ActivityCardProps) {
  const formatHours = (hours: number) => {
    return hours.toLocaleString('pt-BR', { 
      minimumFractionDigits: 2, 
      maximumFractionDigits: 2 
    });
  };

  const getTrendColor = (trend: number) => {
    if (trend > 0) return "text-dashboard-success";
    if (trend < 0) return "text-red-500";
    return "text-muted-foreground";
  };

  const getTrendIcon = (trend: number) => {
    if (trend !== 0) {
      return (
        <div className={`flex items-center gap-1 ${getTrendColor(trend)}`}>
          <TrendingUp className={`h-3 w-3 ${trend < 0 ? 'rotate-180' : ''}`} />
          <span className="text-xs font-medium">
            {Math.abs(trend)}%
          </span>
        </div>
      );
    }
    return null;
  };

  return (
    <Card className="relative overflow-hidden border-0 bg-gradient-card backdrop-blur-sm shadow-card hover:shadow-card-hover transition-all duration-300 group hover:scale-[1.02]">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-5 transition-opacity duration-300" />
      
      {/* Glow effect on hover */}
      <div className="absolute -inset-1 bg-gradient-primary opacity-0 group-hover:opacity-20 blur-xl transition-all duration-300 rounded-lg" />
      
      <div className="relative p-6">
        {/* Header with icon and trend */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-dashboard-primary rounded-lg opacity-10 animate-pulse-glow" />
              <div className="relative bg-gradient-primary p-2.5 rounded-lg shadow-lg">
                <Clock className="h-5 w-5 text-white" />
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground tracking-wide uppercase">
                {title}
              </h3>
              {getTrendIcon(trend)}
            </div>
          </div>
        </div>

        {/* Main metrics */}
        <div className="space-y-1 mb-4">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold text-foreground tracking-tight">
              {formatHours(totalHours)}
            </span>
            <span className="text-lg font-medium text-dashboard-primary">
              hs
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground">
            <span className="text-lg font-semibold text-dashboard-primary">
              {totalActivities}
            </span>
            <span className="text-sm">
              {totalActivities === 1 ? 'Atividade' : 'Atividades'}
            </span>
          </div>
        </div>

        {/* Period info */}
        <div className="flex items-center gap-2 pt-3 border-t border-border/50">
          <Calendar className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground font-medium">
            {period}
          </span>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-4 right-4 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
          <div className="w-16 h-16 rounded-full bg-gradient-primary blur-sm" />
        </div>
        
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-dashboard-primary/5 to-transparent rounded-tl-full" />
      </div>
    </Card>
  );
}