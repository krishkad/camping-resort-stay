"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, Star, Tent } from "lucide-react";
import { useEffect, useState } from "react";

const HeroSection2 = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTextVisible, setIsTextVisible] = useState(false);

  const heroImages = [
    "/images/hero/glamping-hero-1.jpeg",
    "/images/hero/glamping-hero-2.jpeg",
   
  ];

  useEffect(() => {
    const textTimer = setTimeout(() => setIsTextVisible(true), 400);

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => {
      clearTimeout(textTimer);
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background images */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-[3000ms] ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}

        {/* Premium overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-6">
        {/* Trust Signals */}
        {/* <div
          className={`flex flex-wrap justify-center gap-8 text-sm text-white/80 mb-6 transition-all duration-1000 delay-500 ${
            isTextVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2">⭐ 4.9/5 Guest Rating</div>
          <div className="flex items-center gap-2">
            🛡️ Safe & Verified Camps
          </div>
          <div className="flex items-center gap-2">🏕️ 500+ Happy Campers</div>
        </div> */}

        <div
          className={`flex flex-wrap justify-center gap-4 mb-6 transition-all duration-1000 ${
            isTextVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm hover:bg-white/15 transition max-sm:text-xs">
            <Star className="w-4 h-4 text-yellow-400" />
            <span>4.9/5 Review</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm hover:bg-white/15 transition max-sm:text-xs">
            <Tent className="w-4 h-4 text-emerald-300" />
            <span>500+ Happy Campers</span>
          </div>

          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-sm hover:bg-white/15 transition max-sm:text-xs">
            <ShieldCheck className="w-4 h-4 text-green-400" />
            <span>Safe & Secure Camps</span>
          </div>
        </div>

        {/* Headline */}
        <h1
          className={`font-playfair text-5xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-1000 delay-300 ${
            isTextVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Luxury Glamping
          <span className="block text-[var(--earth-300)]">In Nature</span>
        </h1>

        {/* Subheadline */}
        <p
          className={`text-xl text-white/90 max-w-3xl mx-auto leading-relaxed mb-6 transition-all duration-1000 delay-500 ${
            isTextVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          Private luxury tents, curated nature experiences, and warm hospitality
          — perfect for couples and adventurers escaping the city.
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row  gap-4 sm:gap-6 justify-center items-center transition-all duration-1000 delay-700 ${
            isTextVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-6"
          }`}
        >
          <Button
            size="lg"
            className="bg-[var(--earth-500)] max-sm:w-full hover:bg-[var(--earth-600)] text-white px-12 py-6 rounded-full text-lg font-semibold shadow-2xl hover:scale-105 transition-all duration-300"
            onClick={() =>
              document
                .getElementById("accommodations")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Check Availability
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 max-sm:w-full border-white/80 text-gray-700 hover:bg-white hover:text-black px-10 py-6 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105"
            onClick={() =>
              document
                .getElementById("experience")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Watch Experience
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
