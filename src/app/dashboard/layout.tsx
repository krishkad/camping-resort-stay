"use client";

import ScrollToTop from "@/components/ScrollToTop";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Calendar, ChartBar, Inbox, Tent, Users } from "lucide-react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navigationItems = [
  {
    title: "Dashboard",
    url: "/dashboard",
    icon: ChartBar,
  },
  {
    title: "Bookings",
    url: "/dashboard/bookings",
    icon: Calendar,
  },
  {
    title: "Users",
    url: "/dashboard/users",
    icon: Users,
  },
  {
    title: "Team",
    url: "/dashboard/team",
    icon: Users,
  },
  {
    title: "Camp Types",
    url: "/camp-types",
    icon: Tent,
  },
  {
    title: "Inventory",
    url: "/inventory",
    icon: Tent,
  },
  {
    title: "Inbox",
    url: "/inbox",
    icon: Inbox,
  },
];

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <SidebarProvider className={`${geistSans.variable} ${geistMono.variable}`}>
      <div className="min-h-screen flex w-full bg-background">
        <Sidebar className="border-r border-border/40">
          <SidebarHeader className="border-b border-border/40 p-4">
            <div className="flex items-center justify-between">
              <Link href={"/"}>
                <div className="flex items-center gap-2">
                  <Tent className="h-6 w-6 text-green-600" />
                  <span className="font-bold text-lg text-foreground">
                    Serenity Wilderness
                  </span>
                </div>
              </Link>
              {/* <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="h-8 w-8"
              >
                {theme === "dark" ? (
                  <Sun className="h-4 w-4" />
                ) : (
                  <Moon className="h-4 w-4" />
                )}
              </Button> */}
            </div>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Main Menu</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {navigationItems.map((item) => (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild>
                        <Link
                          href={item.url}
                          className={cn(
                            `flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                              item.url === pathname
                                ? "bg-primary/10 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`
                          )}
                        >
                          <item.icon className="h-4 w-4" />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1">
          <header className="sticky top-0 flex h-16 shrink-0 items-center gap-2 border-b border-border/40 px-4 bg-background">
            <SidebarTrigger className="-ml-1" />
            <div className="flex-1" />
          </header>
          <main className="flex-1 p-6">{children}</main>
        </SidebarInset>
      </div>
      <ScrollToTop />
    </SidebarProvider>
  );
}
