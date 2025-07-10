"use client";


import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
// import { useToast } from '@/hooks/use-toast';

const BookingSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState('2');
  const [selectedAccommodation, setSelectedAccommodation] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });
//   const { toast } = useToast();

  const accommodationOptions = [
    { value: 'safari-dome', label: 'Luxury Safari Dome - $350/night', price: 350 },
    { value: 'forest-cabin', label: 'Forest Cabin Retreat - $450/night', price: 450 },
    { value: 'riverside-tent', label: 'Riverside Safari Tent - $280/night', price: 280 },
    { value: 'mountain-lodge', label: 'Mountain View Lodge - $520/night', price: 520 }
  ];

  const calculateTotal = () => {
    if (!checkIn || !checkOut || !selectedAccommodation) return 0;
    
    const nights = Math.ceil((checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24));
    const accommodation = accommodationOptions.find(acc => acc.value === selectedAccommodation);
    const basePrice = accommodation ? accommodation.price * nights : 0;
    const taxes = basePrice * 0.12;
    
    return basePrice + taxes;
  };

  const handleSubmit = () => {
    // toast({
    //   title: "Booking Submitted! 🎉",
    //   description: "We'll contact you within 24 hours to confirm your reservation.",
    // });
    
    // Reset form
    setCurrentStep(1);
    setFormData({ firstName: '', lastName: '', email: '', phone: '' });
    setCheckIn(undefined);
    setCheckOut(undefined);
    setSelectedAccommodation('');
    setGuests('2');
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-br from-[var(--forest-50)] to-[var(--earth-50)]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--forest-700)] mb-4">
            Reserve Your Escape
          </h2>
          <p className="text-xl text-[var(--forest-600)] max-w-2xl mx-auto">
            Book your luxury wilderness experience in just a few simple steps
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center space-x-4">
            {[1, 2, 3].map((step) => (
              <React.Fragment key={step}>
                <div className={`flex items-center justify-center w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                  currentStep >= step 
                    ? 'bg-[var(--earth-500)] text-white scale-110' 
                    : 'bg-[var(--forest-200)] text-[var(--forest-600)]'
                }`}>
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-16 h-1 rounded transition-all duration-300 ${
                    currentStep > step ? 'bg-[var(--earth-500)]' : 'bg-[var(--forest-200)]'
                  }`} />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="p-8 md:p-12">
              {/* Step 1: Dates & Accommodation */}
              {currentStep === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="font-playfair text-2xl font-semibold text-[var(--forest-700)] text-center mb-8">
                    Choose Your Dates & Accommodation
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Check-in Date */}
                    <div className="space-y-2">
                      <Label className="text-[var(--forest-700)] font-medium">Check-in Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal h-12",
                              !checkIn && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkIn ? format(checkIn, "PPP") : "Select check-in date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkIn}
                            onSelect={setCheckIn}
                            disabled={(date) => date < new Date()}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Check-out Date */}
                    <div className="space-y-2">
                      <Label className="text-[var(--forest-700)] font-medium">Check-out Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal h-12",
                              !checkOut && "text-muted-foreground"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {checkOut ? format(checkOut, "PPP") : "Select check-out date"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={checkOut}
                            onSelect={setCheckOut}
                            // disabled={(date) => date < new Date() || (checkIn && date <= checkIn)}
                            initialFocus
                            className="pointer-events-auto"
                          />
                        </PopoverContent>
                      </Popover>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Guests */}
                    <div className="space-y-2">
                      <Label className="text-[var(--forest-700)] font-medium">Number of Guests</Label>
                      <Select value={guests} onValueChange={setGuests}>
                        <SelectTrigger className="h-12">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} Guest{num > 1 ? 's' : ''}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Accommodation */}
                    <div className="space-y-2">
                      <Label className="text-[var(--forest-700)] font-medium">Accommodation Type</Label>
                      <Select value={selectedAccommodation} onValueChange={setSelectedAccommodation}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Choose accommodation" />
                        </SelectTrigger>
                        <SelectContent>
                          {accommodationOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <Button 
                    onClick={nextStep}
                    disabled={!checkIn || !checkOut || !selectedAccommodation}
                    className="w-full bg-[var(--earth-500)] hover:bg-earth-600 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    Continue to Guest Information
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Button>
                </div>
              )}

              {/* Step 2: Guest Information */}
              {currentStep === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="font-playfair text-2xl font-semibold text-[var(--forest-700)] text-center mb-8">
                    Guest Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label className="text-[var(--forest-700)] font-medium">First Name</Label>
                      <Input
                        value={formData.firstName}
                        onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                        className="h-12"
                        placeholder="Enter your first name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[var(--forest-700)] font-medium">Last Name</Label>
                      <Input
                        value={formData.lastName}
                        onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                        className="h-12"
                        placeholder="Enter your last name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[var(--forest-700)] font-medium">Email Address</Label>
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-12"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label className="text-[var(--forest-700)] font-medium">Phone Number</Label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="h-12"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      onClick={prevStep}
                      variant="outline"
                      className="flex-1 py-4 text-lg font-semibold rounded-xl"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={nextStep}
                      disabled={!formData.firstName || !formData.lastName || !formData.email || !formData.phone}
                      className="flex-1 bg-[var(--earth-500)] hover:bg-earth-600 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      Review Booking
                    </Button>
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {currentStep === 3 && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="font-playfair text-2xl font-semibold text-[var(--forest-700)] text-center mb-8">
                    Confirm Your Reservation
                  </h3>
                  
                  {/* Booking Summary */}
                  <div className="bg-forest-50 rounded-2xl p-6 space-y-4">
                    <h4 className="font-playfair text-xl font-semibold text-[var(--forest-700)]">Booking Summary</h4>
                    
                    <div className="space-y-2 text-[var(--forest-600)]">
                      <div className="flex justify-between">
                        <span>Guest:</span>
                        <span className="font-medium">{formData.firstName} {formData.lastName}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Check-in:</span>
                        <span className="font-medium">{checkIn && format(checkIn, "PPP")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Check-out:</span>
                        <span className="font-medium">{checkOut && format(checkOut, "PPP")}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Guests:</span>
                        <span className="font-medium">{guests}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Accommodation:</span>
                        <span className="font-medium">
                          {accommodationOptions.find(acc => acc.value === selectedAccommodation)?.label.split(' - ')[0]}
                        </span>
                      </div>
                      <hr className="border-[var(--forest-200)]" />
                      <div className="flex justify-between text-lg font-semibold text-[var(--forest-700)]">
                        <span>Total (including taxes):</span>
                        <span>${calculateTotal().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Button 
                      onClick={prevStep}
                      variant="outline"
                      className="flex-1 py-4 text-lg font-semibold rounded-xl"
                    >
                      Back
                    </Button>
                    <Button 
                      onClick={handleSubmit}
                      className="flex-1 bg-[var(--earth-500)] hover:bg-earth-600 text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
                    >
                      Confirm Booking
                      <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;