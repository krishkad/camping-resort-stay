"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/#accommodations", label: "Accommodations" },
    { href: "/#experience", label: "Experience" },
    { href: "/#gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg  border-gray-200/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div
              className={`w-12 h-12 bg-gradient-to-br from-[var(--forest-400)] to-[var(--forest-600)] rounded-xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                isScrolled ? "shadow-forest-500/20" : "shadow-black/20"
              }`}
            >
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <span
              className={`font-playfair text-xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-forest-700" : "text-white drop-shadow-lg"
              }`}
            >
              Serenity Wilderness
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => router.push(link.href)}
                className={`relative font-medium transition-all duration-300 hover:scale-105 group ${
                  isScrolled
                    ? "text-[var(--forest-700)] hover:text-[var(--earth-600)]"
                    : "text-white drop-shadow-lg hover:text-[var(--earth-300)]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[var(--earth-500)] to-[var(--earth-600)] transition-all duration-300 group-hover:w-full ${
                    isScrolled
                      ? "bg-gradient-to-r from-[var(--earth-500)] to-[var(--earth-600)]"
                      : "from-earth-300 to-earth-400"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <Button
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-500 hover:scale-105 shadow-lg ${
                isScrolled
                  ? "bg-gradient-to-r from-[var(--earth-500)] to-[var(--earth-600)] hover:from-earth-600 hover:to-earth-700 text-white shadow-earth-500/20 hover:shadow-earth-500/30"
                  : "bg-gradient-to-r from-[var(--earth-500)] to-[var(--earth-600)] hover:from-earth-600 hover:to-earth-700 text-white shadow-black/20 hover:shadow-black/30"
              }`}
              onClick={() => router.push("#booking")}
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isScrolled
                ? "text-forest-700 hover:bg-gray-100"
                : "text-white hover:bg-white/10 drop-shadow-lg"
            }`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen
                    ? "rotate-45 translate-y-1"
                    : "-translate-y-0.5"
                }`}
              />
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMobileMenuOpen
                    ? "-rotate-45 -translate-y-1"
                    : "translate-y-0.5"
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMobileMenuOpen ? "max-h-max opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div
            className={`py-6 px-4 mt-4 rounded-2xl backdrop-blur-xl border transition-all duration-300 ${
              isScrolled
                ? "bg-white/95 border-gray-200/30"
                : "bg-black/20 border-white/20"
            }`}
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link, index) => (
                <button
                  key={link.href}
                  className={`text-left py-3 px-4 rounded-xl font-medium transition-all duration-300 hover:scale-105 ${
                    isScrolled
                      ? "text-[var(--forest-700)] hover:bg-gray-100 hover:text-[var(--earth-600)]"
                      : "text-white hover:bg-white/10 hover:text-[var(--earth-300)]"
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                  onClick={() => {
                    router.push(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.label}
                </button>
              ))}
              <Button
                className={`mt-4 w-full py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
                  isScrolled
                    ? "bg-gradient-to-r from-[var(--earth-500)] to-[var(--earth-600)] hover:from-earth-600 hover:to-earth-700 text-white"
                    : "bg-gradient-to-r from-[var(--earth-500)] to-[var(--earth-600)] hover:from-earth-600 hover:to-earth-700 text-white"
                }`}
                onClick={() => {
                  router.push("#booking");
                  setIsMobileMenuOpen(false);
                }}
              >
                Book Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
