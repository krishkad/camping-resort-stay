import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudSun, Droplets, Tent, Wind } from 'lucide-react';

export default function WeatherWidget() {
  return (
    <Card className="border-border/40 hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-foreground flex items-center gap-2">
          <CloudSun className="h-5 w-5 text-yellow-500" />
          Weather
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Main Weather Display */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <p className="text-3xl font-bold text-foreground">24°C</p>
            <p className="text-sm text-muted-foreground font-medium">Partly Cloudy</p>
            <p className="text-xs text-muted-foreground">Feels like 26°C</p>
          </div>
          <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-yellow-200 to-orange-300 flex items-center justify-center">
            <CloudSun className="h-10 w-10 text-orange-600" />
          </div>
        </div>
        
        {/* Weather Details */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
            <Droplets className="h-4 w-4 text-blue-500" />
            <div>
              <p className="text-xs text-muted-foreground">Humidity</p>
              <p className="text-sm font-semibold text-foreground">65%</p>
            </div>
          </div>
          <div className="flex items-center gap-2 p-3 rounded-lg bg-muted/30">
            <Wind className="h-4 w-4 text-slate-500" />
            <div>
              <p className="text-xs text-muted-foreground">Wind</p>
              <p className="text-sm font-semibold text-foreground">8 km/h</p>
            </div>
          </div>
        </div>

        {/* Weather Insight */}
        <div className="pt-2 border-t border-border/40">
          <div className="flex items-center gap-2 p-3 rounded-lg bg-green-50 dark:bg-green-900/20">
            <Tent className="h-4 w-4 text-green-600" />
            <p className="text-sm text-green-700 dark:text-green-300 font-medium">
              Perfect weather for camping! ⛺
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}