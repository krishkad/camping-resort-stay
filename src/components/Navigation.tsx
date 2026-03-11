"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
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
    <nav className="fixed top-4 left-0 right-0 z-50 px-4">
      <div
        className={`max-w-7xl mx-auto transition-all duration-300 rounded-2xl border ${
          isScrolled
            ? "bg-white/85 backdrop-blur-xl border-gray-200 shadow-lg"
            : "bg-white/10 backdrop-blur-md border-white/20"
        }`}
      >
        <div className="flex items-center justify-between h-[68px] px-6">

          {/* Logo */}
          <div
            onClick={() => router.push("/")}
            className="flex items-center gap-3 cursor-pointer"
          >
            <div className="w-10 h-10 rounded-xl bg-[var(--forest-600)] flex items-center justify-center text-white font-bold">
              S
            </div>

            <span
              className={`font-semibold text-lg transition-colors ${
                isScrolled ? "text-gray-900" : "text-white"
              }`}
            >
              Serenity Wilderness
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => router.push(link.href)}
                className={`relative text-sm font-medium transition-colors group ${
                  isScrolled
                    ? "text-gray-700 hover:text-gray-900"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}

                {/* underline hover */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[var(--earth-500)] transition-all duration-300 group-hover:w-full" />
              </button>
            ))}

            <Button
              onClick={() => router.push("/#booking")}
              className="rounded-full px-6 bg-[var(--earth-500)] hover:bg-[var(--earth-600)] text-white shadow-sm"
            >
              Book Now
            </Button>

          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 transition ${
              isScrolled ? "text-gray-900" : "text-white"
            }`}
          >
            {mobileOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-[400px]" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-6 pt-2 flex flex-col gap-4">

            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  router.push(link.href);
                  setMobileOpen(false);
                }}
                className="text-left text-lg font-medium text-gray-800 hover:text-black transition"
              >
                {link.label}
              </button>
            ))}

            <Button
              onClick={() => {
                router.push("/#booking");
                setMobileOpen(false);
              }}
              className="mt-2 rounded-full bg-[var(--earth-500)] hover:bg-[var(--earth-600)]"
            >
              Book Now
            </Button>

          </div>
        </div>

      </div>
    </nav>
  );
};

export default Navigation;