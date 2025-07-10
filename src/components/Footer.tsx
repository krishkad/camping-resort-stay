"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    resort: [
      { label: "About Us", href: "#" },
      { label: "Accommodations", href: "#accommodations" },
      { label: "Experiences", href: "#experience" },
      { label: "Gallery", href: "#gallery" },
    ],
    services: [
      { label: "Spa & Wellness", href: "#" },
      { label: "Adventure Tours", href: "#" },
      { label: "Private Events", href: "#" },
      { label: "Corporate Retreats", href: "#" },
    ],
    support: [
      { label: "Contact Us", href: "#contact" },
      { label: "FAQ", href: "#" },
      { label: "Cancellation Policy", href: "#" },
      { label: "Travel Insurance", href: "#" },
    ],
  };

  const socialLinks = [
    { name: "Instagram", icon: "📸", href: "#" },
    { name: "Facebook", icon: "👥", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
    { name: "YouTube", icon: "📹", href: "#" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-[var(--forest-800)] to-[var(--forest-900)] text-white overflow-hidden">
      {/* Decorative Mountain Silhouette */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-transparent to-[var(--forest-800)]">
        <svg
          className="absolute bottom-0 w-full h-20"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,60 L120,20 L240,40 L360,10 L480,30 L600,5 L720,25 L840,15 L960,35 L1080,10 L1200,30 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-[var(--forest-700)]"
          />
          <path
            d="M0,80 L150,60 L300,70 L450,50 L600,65 L750,45 L900,60 L1050,40 L1200,55 L1200,120 L0,120 Z"
            fill="currentColor"
            className="text-[var(--forest-800)]"
          />
        </svg>
      </div>

      <div className="relative z-10 pt-24 pb-8">
        <div className="container mx-auto px-6">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[var(--earth-400)] to-[var(--earth-600)] rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <h3 className="font-playfair text-xl font-bold">Serenity</h3>
                  <p className="text-sm text-white/80">Wilderness Resort</p>
                </div>
              </div>

              <p className="text-white/90 leading-relaxed mb-6">
                Where luxury meets wilderness. Experience the perfect blend of
                comfort and adventure in nature&apos;s most breathtaking settings.
              </p>

              {/* Newsletter */}
              <div className="space-y-3">
                <h4 className="font-semibold text-earth-300">Stay Connected</h4>
                <div className="flex gap-2">
                  <Input
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                  />
                  <Button className="bg-earth-500 hover:bg-earth-600 text-white px-4">
                    ✉️
                  </Button>
                </div>
              </div>
            </div>

            {/* Resort Links */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-6 text-[var(--earth-300)]">
                Resort
              </h4>
              <ul className="space-y-3">
                {footerLinks.resort.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-[var(--earth-300)] duration-200 hover:translate-x-1 transform inline-block transition-all"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-6 text-[var(--earth-300)]">
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-[var(--earth-300)] transition-all duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-6 text-[var(--earth-300)]">
                Support
              </h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.support.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-[var(--earth-300)] transition-all duration-200 hover:translate-x-1 transform inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>

              {/* Contact Info */}
              <div className="space-y-2 text-sm">
                <p className="text-white/80">📞 +1 (555) 123-4567</p>
                <p className="text-white/80">✉️ hello@serenitywilderness.com</p>
                <p className="text-white/80">📍 Mountain Valley Road, CA</p>
              </div>
            </div>
          </div>

          {/* Social Media & Bottom Section */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              {/* Social Links */}
              <div className="flex items-center space-x-6">
                <span className="text-white/80 text-sm">
                  Follow our journey:
                </span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    className="text-2xl hover:scale-110 transition-transform duration-200"
                    title={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>

              {/* Awards/Certifications */}
              <div className="flex items-center space-x-4 text-sm text-white/80">
                <span>🏆 TripAdvisor Excellence</span>
                <span>⭐ 5-Star Rated</span>
                <span>🌿 Eco Certified</span>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-8 pt-6 border-t border-white/10 text-center text-white/70 text-sm">
              <p>
                © {currentYear} Serenity Wilderness Resort. All rights reserved.
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-earth-300 transition-colors">
                  Privacy Policy
                </a>
                <span className="mx-2">|</span>
                <a href="#" className="hover:text-earth-300 transition-colors">
                  Terms of Service
                </a>
              </p>
              <p className="mt-2 text-xs">
                Designed by <span className="text-[var(--earth-400)]">Krrish</span> for nature lovers seeking luxury in the
                wilderness
              </p>
            </div>
          </div>

          {/* Floating CTA */}
          <div className="fixed bottom-6 right-6 z-50">
            <Button
              className="bg-[var(--earth-500)] hover:bg-[var(--earth-600)] text-white px-6 py-3 rounded-full shadow-2xl hover:scale-105 transition-all duration-300 animate-pulse-slow"
              onClick={() =>
                document
                  .getElementById("booking")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Now 🏕️
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
