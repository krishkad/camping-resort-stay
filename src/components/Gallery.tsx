"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const categories = [
    { id: "all", label: "All" },
    { id: "accommodations", label: "Accommodations" },
    { id: "nature", label: "Nature" },
    { id: "activities", label: "Activities" },
    { id: "dining", label: "Dining" },
  ];

  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&h=600&fit=crop",
      category: "nature",
      title: "Mountain Sunrise",
      description: "Golden hour over the wilderness",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=600&fit=crop",
      category: "nature",
      title: "River Valley",
      description: "Pristine waters flow through untouched landscape",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=800&h=600&fit=crop",
      category: "accommodations",
      title: "Forest Cabin",
      description: "Luxury meets nature in perfect harmony",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=800&h=600&fit=crop",
      category: "nature",
      title: "Ancient Forest",
      description: "Towering trees create natural cathedrals",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=800&h=600&fit=crop",
      category: "nature",
      title: "Filtered Light",
      description: "Sunbeams dance through the canopy",
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=600&fit=crop",
      category: "activities",
      title: "Lake Reflection",
      description: "Perfect mirror of sky and mountains",
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop",
      category: "nature",
      title: "Aerial Vista",
      description: "Breathtaking views from above the clouds",
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1615729947596-a598e5de0ab3?w=800&h=600&fit=crop",
      category: "accommodations",
      title: "Mountain Lodge",
      description: "Rustic elegance with panoramic views",
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=600&fit=crop",
      category: "nature",
      title: "Wildlife Sanctuary",
      description: "Home to majestic woodland creatures",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory);

  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-white to-[var(--cream-50)]"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--forest-700)] mb-4">
            Moments of Wonder
          </h2>
          <p className="text-xl text-[var(--forest-600)] max-w-2xl mx-auto">
            Discover the beauty that awaits you through the lens of our guests
            and professional photographers
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-[var(--forest-600)] text-white shadow-lg"
                  : "border-forest-300 text-[var(--forest-600)] hover:bg-forest-50"
              }`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="break-inside-avoid group cursor-pointer animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(image.src)}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 bg-white">
                 {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="font-playfair text-lg font-semibold mb-1">
                    {image.title}
                  </h3>
                  <p className="text-sm text-white/90">{image.description}</p>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-[var(--earth-500)]/90 text-white text-xs">
                    {categories.find((cat) => cat.id === image.category)?.label}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-[var(--forest-300)] text-[var(--forest-600)] hover:bg-[var(--forest-50)] px-8 py-3 rounded-full font-semibold"
          >
            View Full Gallery
            <svg
              className="w-4 h-4 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
             {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
