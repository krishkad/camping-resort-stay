
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

const recentBookings = [
  {
    id: 'BK001',
    guest: 'John Smith',
    campType: 'Deluxe Tent',
    checkIn: '2024-07-15',
    checkOut: '2024-07-18',
    status: 'confirmed',
    amount: '$380',
  },
  {
    id: 'BK002',
    guest: 'Sarah Johnson',
    campType: 'Glamping Pod',
    checkIn: '2024-07-16',
    checkOut: '2024-07-20',
    status: 'pending',
    amount: '$720',
  },
  {
    id: 'BK003',
    guest: 'Mike Wilson',
    campType: 'Basic Tent',
    checkIn: '2024-07-17',
    checkOut: '2024-07-19',
    status: 'confirmed',
    amount: '$240',
  },
  {
    id: 'BK004',
    guest: 'Emily Davis',
    campType: 'Cottage',
    checkIn: '2024-07-18',
    checkOut: '2024-07-22',
    status: 'cancelled',
    amount: '$960',
  },
];

export default function RecentBookings() {
  const getStatusBadge = (status: string) => {
    const variants = {
      confirmed: 'default',
      pending: 'secondary',
      cancelled: 'destructive',
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || 'default'}>
        {status}
      </Badge>
    );
  };

  return (
    <Card className="border-border/40">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg font-semibold text-foreground">Recent Bookings</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="rounded-md border border-border/40">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Booking ID</TableHead>
                <TableHead>Guest</TableHead>
                <TableHead>Camp Type</TableHead>
                <TableHead>Check-in</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Amount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentBookings.map((booking) => (
                <TableRow key={booking.id}>
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>{booking.guest}</TableCell>
                  <TableCell>{booking.campType}</TableCell>
                  <TableCell>{booking.checkIn}</TableCell>
                  <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  <TableCell className="text-right font-medium">{booking.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}