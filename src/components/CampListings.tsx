"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const CampListings = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const accommodations = [
    {
      id: 1,
      name: 'Luxury Safari Dome',
      category: 'dome',
      images: [
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop'
      ],
      price: 3500,
      guests: 2,
      amenities: ['Private Bathroom', 'AC/Heating', 'WiFi', 'Fireplace', 'Deck'],
      description: 'Immersive dome experience with panoramic views'
    },
    {
      id: 2,
      name: 'Forest Cabin Retreat',
      category: 'cabin',
      images: [
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1520637836862-4d197d17c0a4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      ],
      price: 4500,
      guests: 4,
      amenities: ['Full Kitchen', 'Fireplace', 'Hot Tub', 'WiFi', 'BBQ Grill'],
      description: 'Secluded cabin nestled among towering pines'
    },
    {
      id: 3,
      name: 'Riverside Safari Tent',
      category: 'tent',
      images: [
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=600&h=400&fit=crop'
      ],
      price: 2800,
      guests: 2,
      amenities: ['Private Bathroom', 'River View', 'Firepit', 'WiFi'],
      description: 'Canvas luxury with the sound of flowing water'
    },
    {
      id: 4,
      name: 'Mountain View Lodge',
      category: 'cabin',
      images: [
        'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1520637836862-4d197d17c0a4?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=600&h=400&fit=crop'
      ],
      price: 5200,
      guests: 6,
      amenities: ['Full Kitchen', 'Mountain View', 'Hot Tub', 'Fireplace', 'Game Room'],
      description: 'Spacious lodge perfect for families and groups'
    },
    {
      id: 5,
      name: 'Stargazer Dome',
      category: 'dome',
      images: [
        'https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop'
      ],
      price: 3800,
      guests: 2,
      amenities: ['Skylight Ceiling', 'Private Bathroom', 'Telescope', 'WiFi'],
      description: 'Sleep under the stars in transparent luxury'
    },
    {
      id: 6,
      name: 'Lakeside Glamping Tent',
      category: 'tent',
      images: [
        'https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=600&h=400&fit=crop',
        'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop'
      ],
      price: 3200,
      guests: 3,
      amenities: ['Lake Access', 'Kayak Included', 'Private Bathroom', 'Firepit'],
      description: 'Wake up to serene lake views and morning mist'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Accommodations' },
    { id: 'dome', label: 'Domes' },
    { id: 'cabin', label: 'Cabins' },
    { id: 'tent', label: 'Safari Tents' }
  ];

  const filteredAccommodations = activeFilter === 'all' 
    ? accommodations 
    : accommodations.filter(acc => acc.category === activeFilter);

  return (
    <section id="accommodations" className="py-20 bg-gradient-to-b from-[var(--cream-100)] to-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--forest-700)] mb-4">
            Luxury Accommodations
          </h2>
          <p className="text-xl text-[var(--forest-600)] max-w-2xl mx-auto">
            Choose your perfect retreat from our collection of premium wilderness accommodations
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter.id}
              variant={activeFilter === filter.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-[var(--forest-600)] text-white shadow-lg hover:bg-[var(--forest-600)]'
                  : 'border-[var(--forest-300)] text-[var(--forest-600)] hover:bg-[var(--forest-50)]'
              }`}
              onClick={() => setActiveFilter(filter.id)}
            >
              {filter.label}
            </Button>
          ))}
        </div>

        {/* Accommodation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccommodations.map((accommodation, index) => (
            <div
              key={accommodation.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Carousel */}
              <div className="relative overflow-hidden h-64">
                <Carousel className="w-full h-full" opts={{ align: "start", loop: true }}>
                  <CarouselContent className="h-full">
                    {accommodation.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex} className="h-full">
                        <div className="relative h-full">
                           {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={image}
                            alt={`${accommodation.name} - Image ${imageIndex + 1}`}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  
                  {/* Carousel Navigation */}
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />
                  
                  {/* Dot Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1  transition-opacity duration-300">
                    {accommodation.images.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm"
                      />
                    ))}
                  </div>
                </Carousel>
                
                {/* Price Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-[var(--earth-500)] text-white px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                    ₹{accommodation.price}/night
                  </Badge>
                </div>

                {/* Guests Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge variant="outline" className="bg-white/90 text-[var(--forest-600)] border-[var(--forest-300)] backdrop-blur-sm">
                    {accommodation.guests} guests
                  </Badge>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-[var(--forest-700)] mb-2">
                  {accommodation.name}
                </h3>
                <p className="text-[var(--forest-600)] mb-4 text-sm">
                  {accommodation.description}
                </p>

                {/* Amenities */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {accommodation.amenities.slice(0, 3).map((amenity) => (
                      <Badge
                        key={amenity}
                        variant="secondary"
                        className="text-xs bg-forest-50 text-[var(--forest-600)] border-forest-200"
                      >
                        {amenity}
                      </Badge>
                    ))}
                    {accommodation.amenities.length > 3 && (
                      <Badge
                        variant="secondary"
                        className="text-xs bg-forest-50 text-[var(--forest-600)] border-forest-200"
                      >
                        +{accommodation.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full bg-[var(--forest-600)] hover:bg-forest-700 text-white py-3 rounded-xl transition-all duration-300 hover:shadow-lg group-hover:bg-earth-500"
                  onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Book This Experience
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CampListings;