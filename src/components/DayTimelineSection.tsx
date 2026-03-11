"use client";

import Image from "next/image";
import { Clock } from "lucide-react";

const DayTimelineSection = () => {
  const journey = [
    {
      time: "2:00 PM",
      title: "Arrival at the Campsite",
      desc: "Arrive at the peaceful lakeside campsite and check into your cozy tents surrounded by nature.",
      image: "/experience/checkin.jpg",
    },
    {
      time: "3:00 PM",
      title: "Welcome Snacks",
      desc: "Relax with freshly prepared snacks and tea while enjoying the view of Pawna Lake.",
      image: "/experience/snacks.jpg",
    },
    {
      time: "4:30 PM",
      title: "Games & Activities",
      desc: "Play indoor and outdoor games and enjoy the lively campsite atmosphere.",
      image: "/experience/games.jpg",
    },
    {
      time: "6:00 PM",
      title: "Sunset Experience",
      desc: "Walk to the sunset viewpoint and witness the breathtaking golden hour over the lake.",
      image: "/experience/sunset.jpg",
    },
    {
      time: "7:30 PM",
      title: "Unlimited Dinner",
      desc: "Enjoy a delicious freshly prepared buffet dinner with local and continental dishes.",
      image: "/experience/dinner.jpg",
    },
    {
      time: "9:00 PM",
      title: "Bonfire & Music",
      desc: "Gather around the bonfire with music, conversations and unforgettable moments.",
      image: "/experience/bonfire.jpg",
    },
    {
      time: "10:30 PM",
      title: "Stargazing",
      desc: "Relax under the open sky and enjoy the beauty of thousands of stars.",
      image: "/experience/stars.jpg",
    },
    {
      time: "7:00 AM",
      title: "Morning Breakfast",
      desc: "Wake up to peaceful lake views and enjoy a warm breakfast.",
      image: "/experience/breakfast.jpg",
    },
  ];

  return (
    <section id="experience" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
            Your Camping Journey
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            From the moment you arrive to the peaceful morning by the lake,
            every step of your stay is designed to create a memorable experience.
          </p>
        </div>

        {/* Journey Path */}
        <div className="relative">

          {/* Path Line */}
          <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 md:-translate-x-1/2" />

          <div className="space-y-24">

            {journey.map((step, index) => (
              <div
                key={index}
                className={`relative grid md:grid-cols-2 gap-10 items-center ${
                  index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
              >

                {/* Timeline Dot */}
                <div className="absolute left-5 md:left-1/2 w-4 h-4 bg-gray-900 rounded-full -translate-x-1/2 top-8 z-10" />

                {/* Image */}
                <div
                  className={`relative h-[320px] rounded-2xl overflow-hidden shadow-lg ${
                    index % 2 === 1 ? "md:col-start-2" : ""
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    className="object-cover hover:scale-105 transition duration-700"
                  />
                </div>

                {/* Text */}
                <div className={`${index % 2 === 1 ? "md:col-start-1" : ""}`}>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Clock className="w-4 h-4" />
                    {step.time}
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed max-w-lg">
                    {step.desc}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default DayTimelineSection;