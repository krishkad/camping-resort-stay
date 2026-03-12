"use client";

import Image from "next/image";
import {
  Coffee,
  Drum,
  Flame,
  Sun,
  Sunrise,
  UtensilsCrossed,
} from "lucide-react";

const experiences = [
  {
    time: "4:00 PM",
    title: "Arrival & Check-in",
    description:
      "Step into a peaceful lakeside retreat. Settle into your private tent and let the calm of nature welcome you.",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    time: "5:00 PM",
    title: "Tea & Lakeside Snacks",
    description:
      "Enjoy warm tea with freshly prepared snacks while overlooking the calm waters of the lake.",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=80",
  },
  {
    time: "5:30 PM",
    title: "Games & Activities",
    description:
      "Play outdoor games, explore the surroundings, and enjoy a lively campsite atmosphere.",
    icon: Drum,
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
  },
  {
    time: "7:30 PM",
    title: "Barbeque & Music",
    description:
      "Freshly grilled barbecue served with music and vibrant evening energy.",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=1200&q=80",
  },
  {
    time: "9:30 PM",
    title: "Dinner Under the Sky",
    description:
      "Enjoy a wholesome dinner prepared with local flavors and comforting dishes.",
    icon: UtensilsCrossed,
    image:
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1200&q=80",
  },
  {
    time: "10:00 PM",
    title: "Campfire Moments",
    description:
      "Relax around the campfire, share stories, and watch the stars appear above the lake.",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
  },
  {
    time: "8:30 AM",
    title: "Morning Breakfast",
    description:
      "Wake up to peaceful nature views and enjoy a fresh breakfast by the campsite.",
    icon: Sunrise,
    image:
      "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function DayTimelineSection() {
  return (
    <section className="py-28 px-6 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-semibold text-gray-900 mb-6">
            A Day at the Campsite
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From sunset views to warm campfires and peaceful mornings, every
            moment at the campsite becomes part of a beautiful journey.
          </p>
        </div>

        {/* Journey Cards */}
        <div className="relative">
          {/* subtle path line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />

          <div className="space-y-20">
            {experiences.map((item, index) => (
              <div
                key={index}
                className="relative flex gap-8 items-start group"
              >
                {/* Icon node */}
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-white border border-gray-200 shadow-md flex items-center justify-center">
                    <item.icon className="w-5 h-5 text-gray-700" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1">
                  <div className="overflow-hidden rounded-3xl shadow-lg bg-white transition duration-500 group-hover:shadow-2xl">
                    {/* Image */}
                    <div className="relative h-64">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="100vw"
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

                      <div className="absolute bottom-4 left-4 text-white text-sm font-medium">
                        {item.time}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {item.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
