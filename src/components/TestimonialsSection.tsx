"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Chen",
      location: "San Francisco, CA",
      image:
        "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Our stay at Serenity Wilderness was absolutely magical. The luxury dome was perfectly appointed, and waking up to sunrise over the mountains was unforgettable. The staff went above and beyond to make our anniversary special.",
      experience: "Luxury Safari Dome • 3 nights",
    },
    {
      id: 2,
      name: "James Rodriguez",
      location: "Austin, TX",
      image:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "As someone who travels frequently for work, I was skeptical about 'glamping.' But this exceeded all expectations. The forest cabin was a perfect blend of rustic charm and modern luxury. I'll definitely be back.",
      experience: "Forest Cabin Retreat • 2 nights",
    },
    {
      id: 3,
      name: "The Johnson Family",
      location: "Denver, CO",
      image:
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "Perfect family getaway! The kids loved the outdoor activities while my wife and I enjoyed the spa services. The mountain lodge had plenty of space for all of us, and the views were spectacular every morning.",
      experience: "Mountain View Lodge • 4 nights",
    },
    {
      id: 4,
      name: "Emma Thompson",
      location: "Seattle, WA",
      image:
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      text: "I came here for a solo retreat and found exactly what I was looking for. The riverside tent was so peaceful, and the guided meditation sessions helped me reconnect with nature and myself. Truly transformative.",
      experience: "Riverside Safari Tent • 5 nights",
    },
  ];

  const awards = [
    { name: "TripAdvisor", award: "Travelers' Choice 2024", logo: "🏆" },
    { name: "Conde Nast", award: "Best Glamping Resort", logo: "⭐" },
    { name: "Travel + Leisure", award: "World's Best Awards", logo: "🌟" },
    { name: "National Geographic", award: "Unique Lodges", logo: "🏅" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-yellow-400" : "text-gray-300"
        }`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-20 bg-gradient-to-br from-[var(--forest-600)] to-[var(--forest-800)] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-white/20 rounded-full animate-float" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-white/20 rounded-full animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-4">
            Stories from Our Guests
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover why travelers from around the world choose Serenity
            Wilderness for their luxury outdoor adventures
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`transition-all duration-700 ${
                  index === currentTestimonial
                    ? "opacity-100 transform translate-x-0"
                    : "opacity-0 absolute inset-0 transform translate-x-8"
                }`}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 glass-card">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    {/* Profile */}
                    <div className="flex-shrink-0 text-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto border-4 border-white/20">
                       {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="font-playfair text-xl font-semibold mb-1">
                        {testimonial.name}
                      </h4>
                      <p className="text-white/80 text-sm mb-2">
                        {testimonial.location}
                      </p>
                      <div className="flex justify-center mb-2">
                        {renderStars(testimonial.rating)}
                      </div>
                      <p className="text-earth-300 text-sm font-medium">
                        {testimonial.experience}
                      </p>
                    </div>

                    {/* Testimonial Content */}
                    <div className="flex-1">
                      <svg
                        className="w-12 h-12 text-earth-300 mb-4 opacity-50"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                      </svg>
                      <p className="text-lg leading-relaxed text-white/95 font-light">
                        &quot;{testimonial.text}&quot;
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? "bg-[var(--earth-400)] scale-125"
                    : "bg-white/30 hover:bg-white/50"
                }`}
                onClick={() => setCurrentTestimonial(index)}
              />
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="border-t border-white/20 pt-16">
          <h3 className="font-playfair text-2xl font-semibold text-center mb-8">
            Recognized by Leading Travel Publications
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div
                key={index}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {award.logo}
                </div>
                <h4 className="font-semibold text-white mb-1">{award.name}</h4>
                <p className="text-white/80 text-sm">{award.award}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-white/90 mb-6">
            Join hundreds of satisfied guests who&apos;ve discovered their perfect
            escape
          </p>
          <Button
            size="lg"
            className="bg-[var(--earth-500)] hover:bg-[var(--earth-600)] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl"
            onClick={() =>
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Your Stay Today
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
