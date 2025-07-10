// "use client"
// import React from 'react';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// const data = [
//   { month: 'Jan', occupancy: 45 },
//   { month: 'Feb', occupancy: 52 },
//   { month: 'Mar', occupancy: 68 },
//   { month: 'Apr', occupancy: 84 },
//   { month: 'May', occupancy: 92 },
//   { month: 'Jun', occupancy: 95 },
//   { month: 'Jul', occupancy: 98 },
//   { month: 'Aug', occupancy: 96 },
//   { month: 'Sep', occupancy: 88 },
//   { month: 'Oct', occupancy: 72 },
//   { month: 'Nov', occupancy: 58 },
//   { month: 'Dec', occupancy: 61 },
// ];

// export default function OccupancyChart() {
//   return (
//     <Card className="border-border/40">
//       <CardHeader>
//         <CardTitle className="text-lg font-semibold text-foreground">Occupancy Rate</CardTitle>
//       </CardHeader>
//       <CardContent>
//         <div className="h-[300px]">
//           <ResponsiveContainer width="100%" height="100%">
//             <BarChart data={data}>
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
//               <Bar dataKey="occupancy" fill="#16a34a" radius={[4, 4, 0, 0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </div>
//       </CardContent>
//     </Card>
//   );
// }

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import dynamic from 'next/dynamic';
import React from "react";
import { } from "recharts";

const ResponsiveContainer = dynamic(() => import('recharts').then((mod) => mod.ResponsiveContainer), { ssr: false });
const BarChart = dynamic(() => import('recharts').then((mod) => mod.BarChart), { ssr: false });
const XAxis = dynamic(() => import('recharts').then((mod) => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then((mod) => mod.YAxis), { ssr: false });
const Bar = dynamic(() => import('recharts').then((mod) => mod.Bar), { ssr: false });
const CartesianGrid = dynamic(() => import('recharts').then((mod) => mod.CartesianGrid), { ssr: false });
const Tooltip = dynamic(() => import('recharts').then((mod) => mod.Tooltip), { ssr: false });

const data = [
  { month: "Jan", occupancy: 45 },
  { month: "Feb", occupancy: 52 },
  { month: "Mar", occupancy: 68 },
  { month: "Apr", occupancy: 84 },
  { month: "May", occupancy: 92 },
  { month: "Jun", occupancy: 95 },
  { month: "Jul", occupancy: 98 },
  { month: "Aug", occupancy: 96 },
  { month: "Sep", occupancy: 88 },
  { month: "Oct", occupancy: 72 },
  { month: "Nov", occupancy: 58 },
  { month: "Dec", occupancy: 61 },
];

const OccupancyChart = React.memo(() => {


  return (
    <Card className="border-border/40">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-foreground">
          Occupancy Rate
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]" >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
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
              <Bar dataKey="occupancy" fill="#16a34a" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
});

export default OccupancyChart;

OccupancyChart.displayName = 'OccupancyChart';