// "use client"
// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { month: 'Jan', revenue: 4200 },
//   { month: 'Feb', revenue: 3800 },
//   { month: 'Mar', revenue: 5200 },
//   { month: 'Apr', revenue: 7800 },
//   { month: 'May', revenue: 12400 },
//   { month: 'Jun', revenue: 15200 },
//   { month: 'Jul', revenue: 18900 },
//   { month: 'Aug', revenue: 17600 },
//   { month: 'Sep', revenue: 14200 },
//   { month: 'Oct', revenue: 9800 },
//   { month: 'Nov', revenue: 6400 },
//   { month: 'Dec', revenue: 8200 },
// ];

// export default function RevenueChart() {
//   return (
//     <Card className="border-border/40">
//       <CardHeader>
//         <CardTitle className="text-lg font-semibold text-foreground">Revenue Trends</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="h-[300px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <LineChart data={data}>
//               <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
//               <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
//               <YAxis stroke="hsl(var(--muted-foreground))" />
//               <Tooltip
//                 contentStyle={{
//                   backgroundColor: 'hsl(var(--background))',
//                   border: '1px solid hsl(var(--border))',
//                   borderRadius: '6px',
//                 }}
//               />
//               <Line
//                 type="monotone"
//                 dataKey="revenue"
//                 stroke="#16a34a"
//                 strokeWidth={2}
//                 dot={{ fill: '#16a34a' }}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

// components/RevenueChart.jsx
"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import React from "react";
import { } from "recharts";

const ResponsiveContainer = dynamic(() => import('recharts').then((mod) => mod.ResponsiveContainer), { ssr: false });
const LineChart = dynamic(() => import('recharts').then((mod) => mod.LineChart), { ssr: false });
const XAxis = dynamic(() => import('recharts').then((mod) => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then((mod) => mod.YAxis), { ssr: false });
const Line = dynamic(() => import('recharts').then((mod) => mod.Line), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then((mod) => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then((mod) => mod.Tooltip), { ssr: false });

const data = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 3800 },
  { month: "Mar", revenue: 5200 },
  { month: "Apr", revenue: 7800 },
  { month: "May", revenue: 12400 },
  { month: "Jun", revenue: 15200 },
  { month: "Jul", revenue: 18900 },
  { month: "Aug", revenue: 17600 },
  { month: "Sep", revenue: 14200 },
  { month: "Oct", revenue: 9800 },
  { month: "Nov", revenue: 6400 },
  { month: "Dec", revenue: 8200 },
];

const RevenueChart = React.memo(() => {


  return (
    <Card className="border-border/40">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Revenue Trends
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]" >
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid
                strokeDasharray="3 3"
                stroke="hsl(var(--border))"
              />
              <XAxis dataKey="month" stroke="hsl(var(--muted-foreground))" />
              <YAxis stroke="hsl(var(--muted-foreground))" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--background))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "6px",
                }}
              />
              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#16a34a"
                strokeWidth={2}
                dot={{ fill: "#16a34a" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
});

export default RevenueChart;

RevenueChart.displayName = 'RevenueChart';