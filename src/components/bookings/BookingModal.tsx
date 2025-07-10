"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Tent, CreditCard, FileText } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: "add" | "edit" | "view";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  booking?: any;
}

export function BookingModal({
  isOpen,
  onClose,
  mode,
  booking,
}: BookingModalProps) {
  const [formData, setFormData] = useState({
    guestName: booking?.guest || "",
    guestEmail: booking?.email || "",
    campType: booking?.campType || "",
    checkIn: booking?.checkIn || "",
    checkOut: booking?.checkOut || "",
    guests: booking?.guests || 1,
    status: booking?.status || "pending",
    amount: booking?.amount || "",
    notes: booking?.notes || "",
  });

  const isReadOnly = mode === "view";
  // const isEditing = mode === 'edit';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
    onClose();
  };

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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="!max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            {mode === "add" && (
              <>
                <Calendar className="h-5 w-5 text-green-600" />
                Add New Booking
              </>
            )}
            {mode === "edit" && (
              <>
                <FileText className="h-5 w-5 text-green-600" />
                Edit Booking {booking?.id}
              </>
            )}
            {mode === "view" && (
              <>
                <User className="h-5 w-5 text-green-600" />
                Booking Details - {booking?.id}
              </>
            )}
          </DialogTitle>
          <DialogDescription>
            {mode === "add" && "Create a new booking reservation"}
            {mode === "edit" && "Update booking information"}
            {mode === "view" &&
              "Complete booking information and guest details"}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="w-full space-y-6">
          {/* Guest Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <User className="h-4 w-4" />
              Guest Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="guestName">Guest Name</Label>
                <Input
                  id="guestName"
                  value={formData.guestName}
                  onChange={(e) =>
                    setFormData({ ...formData, guestName: e.target.value })
                  }
                  readOnly={isReadOnly}
                  className={isReadOnly ? "bg-muted/50" : ""}
                />
              </div>
              <div>
                <Label htmlFor="guestEmail">Email</Label>
                <Input
                  id="guestEmail"
                  type="email"
                  value={formData.guestEmail}
                  onChange={(e) =>
                    setFormData({ ...formData, guestEmail: e.target.value })
                  }
                  readOnly={isReadOnly}
                  className={isReadOnly ? "bg-muted/50" : ""}
                />
              </div>
            </div>
          </div>

          {/* Booking Details */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Tent className="h-4 w-4" />
              Booking Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="campType">Camp Type</Label>
                {isReadOnly ? (
                  <Input
                    value={formData.campType}
                    readOnly
                    className="bg-muted/50"
                  />
                ) : (
                  <Select
                    value={formData.campType}
                    onValueChange={(value) =>
                      setFormData({ ...formData, campType: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select camp type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Basic Tent">Basic Tent</SelectItem>
                      <SelectItem value="Deluxe Tent">Deluxe Tent</SelectItem>
                      <SelectItem value="Glamping Pod">Glamping Pod</SelectItem>
                      <SelectItem value="Cottage">Cottage</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
              <div>
                <Label htmlFor="guests">Number of Guests</Label>
                <Input
                  id="guests"
                  type="number"
                  min="1"
                  max="8"
                  value={formData.guests}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      guests: parseInt(e.target.value),
                    })
                  }
                  readOnly={isReadOnly}
                  className={isReadOnly ? "bg-muted/50" : ""}
                />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="checkIn">Check-in Date</Label>
                <Input
                  id="checkIn"
                  type="date"
                  value={formData.checkIn}
                  onChange={(e) =>
                    setFormData({ ...formData, checkIn: e.target.value })
                  }
                  readOnly={isReadOnly}
                  className={isReadOnly ? "bg-muted/50" : ""}
                />
              </div>
              <div>
                <Label htmlFor="checkOut">Check-out Date</Label>
                <Input
                  id="checkOut"
                  type="date"
                  value={formData.checkOut}
                  onChange={(e) =>
                    setFormData({ ...formData, checkOut: e.target.value })
                  }
                  readOnly={isReadOnly}
                  className={isReadOnly ? "bg-muted/50" : ""}
                />
              </div>
            </div>
          </div>

          {/* Payment & Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Payment & Status
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="amount">Amount</Label>
                <Input
                  id="amount"
                  value={formData.amount}
                  onChange={(e) =>
                    setFormData({ ...formData, amount: e.target.value })
                  }
                  readOnly={isReadOnly}
                  className={isReadOnly ? "bg-muted/50" : ""}
                  placeholder="$0.00"
                />
              </div>
              <div>
                <Label htmlFor="status">Status</Label>
                {isReadOnly ? (
                  <div className="flex items-center h-10">
                    {getStatusBadge(formData.status)}
                  </div>
                ) : (
                  <Select
                    value={formData.status}
                    onValueChange={(value) =>
                      setFormData({ ...formData, status: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="pending">Pending</SelectItem>
                      <SelectItem value="confirmed">Confirmed</SelectItem>
                      <SelectItem value="cancelled">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                )}
              </div>
            </div>
          </div>

          {/* Notes */}
          <div>
            <Label htmlFor="notes">Internal Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) =>
                setFormData({ ...formData, notes: e.target.value })
              }
              readOnly={isReadOnly}
              className={isReadOnly ? "bg-muted/50" : ""}
              placeholder="Add any special requirements or notes..."
              rows={3}
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose}>
              {isReadOnly ? "Close" : "Cancel"}
            </Button>
            {!isReadOnly && (
              <Button type="submit">
                {mode === "add" ? "Create Booking" : "Update Booking"}
              </Button>
            )}
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
