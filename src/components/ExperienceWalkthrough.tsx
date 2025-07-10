"use client";

import React, { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";

const ExperienceWalkthrough = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const experiences = [
    {
      time: "6:00 AM",
      title: "Sunrise Meditation",
      description:
        "Begin your day in perfect harmony as the golden sun rises over pristine wilderness. Our guided meditation sessions help you connect with nature's rhythm and find inner peace.",
      image:
        "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=800&fit=crop",
      icon: "🧘‍♀️",
      color: "from-orange-400 to-yellow-500",
    },
    {
      time: "8:00 AM",
      title: "Gourmet Breakfast",
      description:
        "Savor artisanal cuisine crafted from local, organic ingredients. Our chefs create memorable dining experiences that celebrate the region's finest flavors.",
      image:
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=1200&h=800&fit=crop",
      icon: "🍳",
      color: "from-amber-400 to-orange-500",
    },
    {
      time: "10:00 AM",
      title: "Nature Trek",
      description:
        "Explore hidden trails with expert naturalist guides who reveal the secrets of the wilderness. Discover rare wildlife, pristine waterfalls, and breathtaking vistas.",
      image:
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=1200&h=800&fit=crop",
      icon: "🥾",
      color: "from-green-400 to-emerald-500",
    },
    {
      time: "2:00 PM",
      title: "Lake Adventures",
      description:
        "Immerse yourself in crystal-clear waters with kayaking, paddleboarding, or peaceful lakeside relaxation. Every moment by the water is pure serenity.",
      image:
        "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=1200&h=800&fit=crop",
      icon: "🚣‍♀️",
      color: "from-blue-400 to-cyan-500",
    },
    {
      time: "6:00 PM",
      title: "Sunset Feast",
      description:
        "Gather around our outdoor kitchen for an unforgettable barbecue experience. Premium cuts, local wines, and the magic of sunset create perfect moments.",
      image:
        "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=800&fit=crop",
      icon: "🔥",
      color: "from-red-400 to-pink-500",
    },
    {
      time: "9:00 PM",
      title: "Stargazing",
      description:
        "Under some of the darkest skies on Earth, explore the cosmos through professional telescopes. Our astronomers guide you through constellations and celestial wonders.",
      image:
        "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=1200&h=800&fit=crop",
      icon: "⭐",
      color: "from-purple-400 to-indigo-500",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % experiences.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isVisible, experiences.length]);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-[var(--forest-50)] via-[var(--cream-50)] to-[var(--earth-50)] overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-forest-700 mb-6">
            Your Perfect Day
            <span className="block text-earth-600 text-3xl md:text-4xl mt-2">
              at Serenity Wilderness
            </span>
          </h2>
          <p className="text-xl text-forest-600 max-w-3xl mx-auto leading-relaxed">
            From sunrise meditation to starlit evenings, every moment is crafted
            for your ultimate wilderness experience
          </p>
        </div>

        {/* Main Experience Display */}
        <div className="relative max-w-7xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-forest-300 via-earth-400 to-forest-300 transform -translate-y-1/2" />

          {/* Timeline Steps */}
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-4">
            {experiences.map((experience, index) => (
              <div
                key={index}
                className={`relative transition-all duration-700 ${
                  index === activeStep
                    ? "scale-105 z-20"
                    : "scale-95 opacity-70"
                }`}
              >
                {/* Desktop Timeline Dot */}
                <div className="hidden lg:flex justify-center mb-8">
                  <div
                    className={`w-6 h-6 rounded-full border-4 border-white shadow-lg transition-all duration-500 ${
                      index === activeStep
                        ? `bg-gradient-to-r ${experience.color} scale-125`
                        : "bg-forest-300"
                    }`}
                  />
                </div>

                {/* Experience Card */}
                <div
                  className={`bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl border border-white/50 transition-all duration-700 hover:shadow-2xl ${
                    index === activeStep ? "bg-white/95 shadow-2xl" : ""
                  }`}
                >
                  {/* Time Badge */}
                  <div
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold mb-4 bg-gradient-to-r ${experience.color} text-white`}
                  >
                    <span className="text-lg mr-2">{experience.icon}</span>
                    {experience.time}
                  </div>

                  {/* Image */}
                  <div className="relative mb-4 overflow-hidden rounded-2xl group">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={experience.image}
                      alt={experience.title}
                      className={`w-full h-48 object-cover transition-all duration-700 ${
                        index === activeStep ? "scale-110" : "scale-100"
                      } group-hover:scale-105`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    <div
                      className={`absolute bottom-4 left-4 text-white font-semibold text-lg transition-all duration-500 ${
                        index === activeStep
                          ? "translate-y-0 opacity-100"
                          : "translate-y-2 opacity-70"
                      }`}
                    >
                      {experience.title}
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="font-playfair text-xl font-bold text-forest-700 mb-3">
                    {experience.title}
                  </h3>
                  <p className="text-forest-600 leading-relaxed text-sm">
                    {experience.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center mt-12 space-x-3 lg:hidden">
            {experiences.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === activeStep
                    ? "bg-earth-500 scale-125"
                    : "bg-forest-300 hover:bg-forest-400"
                }`}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-20 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Button
            size="lg"
            className="group bg-gradient-to-r from-earth-500 to-earth-600 hover:from-earth-600 hover:to-earth-700 text-white px-12 py-6 rounded-full text-xl font-semibold transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-earth-500/25"
            onClick={() =>
              document
                .getElementById("booking")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="flex items-center">
              Start Your Journey
              <svg
                className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300"
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceWalkthrough;
