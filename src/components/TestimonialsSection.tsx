"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Heart,
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Arjun & Priya",
    location: "Mumbai",
    text: "Pawna Camps exceeded every expectation! The sunrise yoga, luxury tent comfort, and stargazing experience created the most romantic weekend of our lives. Can't wait to return!",
    rating: 5,
    // image: "/images/testimonials/pawna-lake-camping-testimonials-1.webp",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Couple",
  },
  {
    name: "The Sharma Family",
    location: "Pune",
    text: "Our kids are still talking about the night forest walk and campfire stories. The perfect blend of adventure and comfort for families. Every detail was thoughtfully planned!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    // image: "/images/testimonials/pawna-lake-camping-testimonials-2.webp",
    category: "Family",
  },
  {
    name: "Maya, Solo Traveler",
    location: "Pune",
    text: "As a solo female traveler, I felt completely safe and welcomed. The guided waterfall trek was incredible, and I made lifelong friends around the campfire!",
    rating: 5,
    // image: "/images/testimonials/pawna-lake-camping-testimonials-3.webp",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    category: "Solo",
  },
];

const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Additional lifestyle images (in a real app, these would be separate from main images)

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Testimonials */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
              Stories from Fellow Adventurers
            </h2>
            <p className="text-lg sm:text-xl text-stone/80 max-w-3xl mx-auto font-poppins">
              Real experiences from couples, families, and solo travelers who
              found their perfect escape at Pawna Camps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden p-0 gap-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Category Badge */}
                <div
                  className={`px-4 sm:px-6 py-3 sm:py-4 text-center font-bold text-white ${
                    testimonial.category === "Couple"
                      ? "bg-gradient-to-r from-[#ff6b6b] to-pink-500"
                      : testimonial.category === "Family"
                        ? "bg-gradient-to-r from-[#4caf50] to-green-600"
                        : "bg-gradient-to-r from-blue-400 to-blue-500"
                  }`}
                >
                  {testimonial.category === "Couple" && (
                    <Heart className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2" />
                  )}
                  {testimonial.category === "Family" && (
                    <Star className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2" />
                  )}
                  {testimonial.category === "Solo" && (
                    <Camera className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2" />
                  )}
                  <span className="text-sm sm:text-base">
                    {testimonial.category} Adventure
                  </span>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-600 text-yellow-600"
                      />
                    ))}
                  </div>
                  <p className="text-stone/80 mb-4 sm:mb-6 italic font-poppins leading-relaxed text-sm sm:text-base">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover shadow-lg"
                    />
                    <div>
                      <div className="font-bold text-stone font-playfair text-base sm:text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-stone/60 font-poppins">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Instagram Feed */}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
