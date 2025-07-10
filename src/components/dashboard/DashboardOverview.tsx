"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Calendar,
  CalendarDays,
  ChartBar,
  Package,
  Plus,
  Tent,
  Users,
} from "lucide-react";
import RevenueChart from "./charts/RevenueChart";
import OccupancyChart from "./charts/OccupancyChart";
import { useRouter } from "next/navigation";
import RecentBookings from "./RecentBookings";
import WeatherWidget from "./WeatherWidget";

// export const dynamic = 'force-dynamic'; // Disable SSR/PPR for the page

export default function DashboardOverview() {
  const router = useRouter();

  const stats = [
    {
      title: "Total Bookings",
      value: "127",
      change: "+12%",
      changeType: "positive" as const,
      icon: Calendar,
      description: "This month",
    },
    {
      title: "Active Guests",
      value: "34",
      change: "+5%",
      changeType: "positive" as const,
      icon: Users,
      description: "Currently on site",
    },
    {
      title: "Occupancy Rate",
      value: "78%",
      change: "-3%",
      changeType: "negative" as const,
      icon: Tent,
      description: "This week",
    },
    {
      title: "Monthly Revenue",
      value: "$12,847",
      change: "+18%",
      changeType: "positive" as const,
      icon: ChartBar,
      description: "July 2024",
    },
  ];

  const quickActions = [
    {
      title: "Add Booking",
      description: "Create new reservation",
      icon: Plus,
      action: () => router.push("/dashboard/bookings"),
      variant: "default" as const,
    },
    {
      title: "View Calendar",
      description: "Check availability",
      icon: CalendarDays,
      action: () => router.push("/bookings"),
      variant: "outline" as const,
    },
    {
      title: "Manage Inventory",
      description: "Update equipment",
      icon: Package,
      action: () => router.push("/inventory"),
      variant: "outline" as const,
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome back! Here&apos;s your camping resort overview.
          </p>
        </div>
        <div className="text-right">
          <p className="text-sm text-muted-foreground">Today</p>
          <p className="text-lg font-semibold text-foreground">
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Stats Grid - Enhanced */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card
            key={index}
            className="border-border/40 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 gap-0"
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3">
              <div className="space-y-1">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <div className="text-2xl font-bold text-foreground">
                  {stat.value}
                </div>
              </div>
              <div className="h-12 w-12 rounded-xl bg-green-600/10 flex items-center justify-center">
                <stat.icon className="h-6 w-6 text-green-600" />
              </div>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex items-center justify-between">
                <Badge
                  variant={
                    stat.changeType === "positive" ? "default" : "destructive"
                  }
                  className="text-xs"
                >
                  {stat.change}
                </Badge>
                <p className="text-xs text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Actions */}
      <Card className="border-border/40">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-foreground">
            Quick Actions
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-3">
            {quickActions.map((action, index) => (
              <Button
                key={index}
                variant={action.variant}
                onClick={action.action}
                className="h-auto p-4 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-200"
              >
                <action.icon className="h-6 w-6" />
                <div className="text-center">
                  <div className="font-medium">{action.title}</div>
                  <div className="text-xs opacity-80">{action.description}</div>
                </div>
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Charts and Weather - Enhanced Grid */}
      <div className="w-full grid md:grid-cols-2">
        <RevenueChart />
        <OccupancyChart />
        {/* <ChartAreaInteractive /> */}
      </div>

      {/* Weather and Recent Bookings - Enhanced Layout */}
      <div className="grid gap-6 lg:grid-cols-3">
        <WeatherWidget />
        <div className="lg:col-span-2">
          <RecentBookings />
        </div>
      </div>
    </div>
  );
}
