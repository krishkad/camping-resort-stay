"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const heroImages = [
    "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920&h=1080&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1920&h=1080&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1920&h=1080&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop&crop=center",
  ];

  useEffect(() => {
    // Trigger text animation after component mounts
    const textTimer = setTimeout(() => setIsTextVisible(true), 500);

    // Auto-slide images
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => {
      clearTimeout(textTimer);
      clearInterval(interval);
    };
  }, [heroImages.length]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Images with Smooth Crossfade */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-3000 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      {/* Floating Particles Animation */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 3}s`
            }}
          />
        ))}
      </div> */}

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-6">
        {/* Animated Headlines */}
        <div className="mb-8">
          <h1
            className={`font-playfair text-5xl  lg:text-7xl font-bold mb-4 transition-all duration-1000 ${
              isTextVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            {/* <span className="block animate-fade-in" style={{ animationDelay: '0.2s' }}>Escape.</span> */}
            <span
              className="block animate-fade-in"
              style={{ animationDelay: "0.6s" }}
            >
              Explore.
            </span>
            <span
              className="block text-[var(--earth-300)] animate-fade-in glow-text"
              style={{ animationDelay: "1s" }}
            >
              Experience Serenity.
            </span>
          </h1>
        </div>

        <p
          className={`text-xl mb-12 text-white/90 font-light max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${
            isTextVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          Discover luxury in the heart of wilderness. Where comfort meets
          adventure, and memories are crafted under starlit skies.
        </p>

        {/* Enhanced CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-6 justify-center items-center transition-all duration-1000 delay-1000 ${
            isTextVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="group relative bg-gradient-to-r from-[var(--earth-500)] to-[var(--earth-600)] hover:from-[var(--earth-600)] hover:to-[var(--earth-700)] text-white px-10 py-6 rounded-full text-lg font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[var(--earth-500)]/25 overflow-hidden"
            onClick={() =>
              document
                .getElementById("accommodations")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></span>
            <span className="relative flex items-center">
              Explore Accommodations
              <svg
                className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300"
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
            </span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="group relative border-2 border-white/80 text-white hover:bg-white hover:text-[var(--forest-700)] px-10 py-6 rounded-full text-lg font-semibold transition-all duration-500 hover:scale-105 bg-white/10 backdrop-blur-sm hover:shadow-xl hover:shadow-white/20"
            onClick={() =>
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="relative flex items-center">
              Watch Experience
              <svg
                className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1.5a.5.5 0 01.5.5v1a.5.5 0 01-.5.5H9m0 0V9a2 2 0 012-2h2a2 2 0 012 2v3.5a2 2 0 01-2 2H9V10z"
                />
              </svg>
            </span>
          </Button>
        </div>

        {/* Enhanced Scroll Indicator */}
        {/* <div className={`absolute bottom-12 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
          isTextVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="flex flex-col items-center cursor-pointer group" onClick={() => document.getElementById('accommodations')?.scrollIntoView({ behavior: 'smooth' })}>
            <span className="text-white/70 text-sm font-medium mb-2 group-hover:text-white transition-colors">Scroll to explore</span>
            <div className="w-6 h-12 border-2 border-white/50 rounded-full flex justify-center group-hover:border-white transition-colors animate-bounce">
              <div className="w-1 h-4 bg-white/70 rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div> */}
      </div>

      {/* Image Indicators */}
      {/* <div className="absolute bottom-8 right-8 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-white scale-125' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentImageIndex(index)}
          />
        ))}
      </div> */}
    </section>
  );
};

export default HeroSection;
