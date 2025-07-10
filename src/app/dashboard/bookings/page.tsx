"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Calendar,
  Users,
  Tent,
  Plus,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
} from "lucide-react";
import { BookingModal } from "@/components/bookings/BookingModal";

const bookings = [
  {
    id: "BK001",
    guest: "John Smith",
    email: "john@example.com",
    campType: "Deluxe Tent",
    checkIn: "2024-07-15",
    checkOut: "2024-07-18",
    guests: 2,
    status: "confirmed",
    amount: "$380",
    notes: "Celebrating anniversary, requested romantic setup",
  },
  {
    id: "BK002",
    guest: "Sarah Johnson",
    email: "sarah@example.com",
    campType: "Glamping Pod",
    checkIn: "2024-07-16",
    checkOut: "2024-07-20",
    guests: 4,
    status: "pending",
    amount: "$720",
    notes: "Family with 2 kids, needs extra safety measures",
  },
  {
    id: "BK003",
    guest: "Mike Wilson",
    email: "mike@example.com",
    campType: "Basic Tent",
    checkIn: "2024-07-17",
    checkOut: "2024-07-19",
    guests: 3,
    status: "confirmed",
    amount: "$240",
    notes: "Group of friends, first time camping",
  },
  {
    id: "BK004",
    guest: "Emily Davis",
    email: "emily@example.com",
    campType: "Cottage",
    checkIn: "2024-07-18",
    checkOut: "2024-07-22",
    guests: 6,
    status: "cancelled",
    amount: "$960",
    notes: "Cancelled due to weather concerns",
  },
];

export default function BookingsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [modalState, setModalState] = useState<{
    isOpen: boolean;
    mode: "add" | "edit" | "view";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    booking?: any;
  }>({
    isOpen: false,
    mode: "add",
  });

  const getStatusBadge = (status: string) => {
    const variants = {
      confirmed: "default",
      pending: "secondary",
      cancelled: "destructive",
    } as const;

    return (
      <Badge variant={variants[status as keyof typeof variants] || "default"}>
        {status}
      </Badge>
    );
  };

  const filteredBookings = bookings.filter((booking) => {
    const matchesSearch =
      booking.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      booking.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      statusFilter === "all" || booking.status === statusFilter;
    return matchesSearch && matchesStatus;
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const openModal = (mode: "add" | "edit" | "view", booking?: any) => {
    setModalState({ isOpen: true, mode, booking });
  };

  const closeModal = () => {
    setModalState({ isOpen: false, mode: "add" });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">
            Bookings Management
          </h1>
          <p className="text-muted-foreground">
            Manage all your camping reservations
          </p>
        </div>
        <Button onClick={() => openModal("add")} className="gap-2">
          <Plus className="h-4 w-4" />
          Add Booking
        </Button>
      </div>

      {/* Stats Cards - Enhanced */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="border-border/40 hover:shadow-lg transition-all duration-300 gap-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Bookings
              </CardTitle>
              <div className="text-2xl font-bold text-foreground">127</div>
            </div>
            <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Calendar className="h-5 w-5 text-primary" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/40 hover:shadow-lg transition-all duration-300 gap-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Reservations
              </CardTitle>
              <div className="text-2xl font-bold text-foreground">34</div>
            </div>
            <div className="h-10 w-10 rounded-lg bg-green-100 dark:bg-green-900/20 flex items-center justify-center">
              <Tent className="h-5 w-5 text-green-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">
              Currently checked in
            </p>
          </CardContent>
        </Card>

        <Card className="border-border/40 hover:shadow-lg transition-all duration-300 gap-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <div>
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Total Guests
              </CardTitle>
              <div className="text-2xl font-bold text-foreground">89</div>
            </div>
            <div className="h-10 w-10 rounded-lg bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
              <Users className="h-5 w-5 text-blue-600" />
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-xs text-muted-foreground">People on site</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search - Enhanced */}
      <Card className="border-border/40">
        <CardContent className="pt-0">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search by guest name, email, or booking ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex gap-2">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-[180px]">
                  <Filter className="h-4 w-4 mr-2" />
                  <SelectValue placeholder="Filter by status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="confirmed">Confirmed</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Bookings Table - Enhanced */}
      <Card className="border-border/40">
        <CardContent className="p-0">
          <div className="rounded-md border border-border/40">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent">
                  <TableHead className="font-semibold">Booking ID</TableHead>
                  <TableHead className="font-semibold">Guest</TableHead>
                  <TableHead className="font-semibold">Camp Type</TableHead>
                  <TableHead className="font-semibold">Check-in</TableHead>
                  <TableHead className="font-semibold">Check-out</TableHead>
                  <TableHead className="font-semibold">Guests</TableHead>
                  <TableHead className="font-semibold">Status</TableHead>
                  <TableHead className="text-right font-semibold">
                    Amount
                  </TableHead>
                  <TableHead className="text-right font-semibold">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredBookings.map((booking) => (
                  <TableRow
                    key={booking.id}
                    className="hover:bg-muted/50 transition-colors"
                  >
                    <TableCell className="font-medium text-primary">
                      {booking.id}
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{booking.guest}</div>
                        <div className="text-sm text-muted-foreground">
                          {booking.email}
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Tent className="h-4 w-4 text-muted-foreground" />
                        {booking.campType}
                      </div>
                    </TableCell>
                    <TableCell>{booking.checkIn}</TableCell>
                    <TableCell>{booking.checkOut}</TableCell>
                    <TableCell>{booking.guests}</TableCell>
                    <TableCell>{getStatusBadge(booking.status)}</TableCell>
                    <TableCell className="text-right font-medium">
                      {booking.amount}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex gap-1 justify-end">
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openModal("view", booking)}
                          className="h-8 w-8 p-0 hover:bg-blue-100 dark:hover:bg-blue-900/20"
                        >
                          <Eye className="h-4 w-4 text-blue-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => openModal("edit", booking)}
                          className="h-8 w-8 p-0 hover:bg-yellow-100 dark:hover:bg-yellow-900/20"
                        >
                          <Edit className="h-4 w-4 text-yellow-600" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 hover:bg-red-100 dark:hover:bg-red-900/20"
                        >
                          <Trash2 className="h-4 w-4 text-red-600" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <BookingModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        mode={modalState.mode}
        booking={modalState.booking}
      />
    </div>
  );
}
