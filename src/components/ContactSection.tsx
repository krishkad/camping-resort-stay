"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
// import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  //   const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // toast({
    //   title: "Message Sent! 📧",
    //   description: "Thank you for contacting us. We'll get back to you within 24 hours.",
    // });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "📞",
      title: "Call Us",
      detail: "+1 (555) 123-4567",
      action: "tel:+15551234567",
    },
    {
      icon: "💬",
      title: "WhatsApp",
      detail: "Chat with us instantly",
      action: "https://wa.me/15551234567",
    },
    {
      icon: "✉️",
      title: "Email",
      detail: "hello@serenitywilderness.com",
      action: "mailto:hello@serenitywilderness.com",
    },
    {
      icon: "🕐",
      title: "Hours",
      detail: "Daily 7AM - 10PM PST",
      action: "",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-b from-[var(--cream-50)] to-white"
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[var(--forest-700)] mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-[var(--forest-600)] max-w-2xl mx-auto">
            Have questions about your wilderness adventure? We&apos;re here to
            help plan your perfect escape.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl mb-3">{info.icon}</div>
                  <h3 className="font-playfair text-lg font-semibold text-[var(--forest-700)] mb-2">
                    {info.title}
                  </h3>
                  {info.action ? (
                    <a
                      href={info.action}
                      className="text-[var(--forest-600)] hover:text-earth-500 transition-colors duration-200"
                    >
                      {info.detail}
                    </a>
                  ) : (
                    <p className="text-[var(--forest-600)]">{info.detail}</p>
                  )}
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-80 animate-slide-in-left">
              <div
                className="w-full h-full bg-gradient-to-br from-forest-100 to-forest-200 flex items-center justify-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&h=400&fit=crop')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="bg-white/90 backdrop-blur-sm rounded-xl p-6 text-center">
                  <div className="text-3xl mb-2">📍</div>
                  <h4 className="font-playfair text-lg font-semibold text-[var(--forest-700)] mb-1">
                    Find Us Here
                  </h4>
                  <p className="text-[var(--forest-600)] text-sm">
                    Serenity Wilderness Resort
                    <br />
                    Mountain Valley Road
                    <br />
                    Wilderness, CA 95000
                  </p>
                  <Button
                    className="mt-4 bg-[var(--forest-600)] hover:bg-[var(--forest-700)] text-white"
                    onClick={() =>
                      window.open("https://maps.google.com", "_blank")
                    }
                  >
                    Get Directions
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-slide-in-right">
            <h3 className="font-playfair text-2xl font-semibold text-[var(--forest-700)] mb-8 text-center">
              Send us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label className="text-[var(--forest-700)] font-medium">
                    Your Name
                  </Label>
                  <Input
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label className="text-[var(--forest-700)] font-medium">
                    Email Address
                  </Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12"
                    placeholder="Enter your email"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label className="text-[var(--forest-700)] font-medium">
                  Subject
                </Label>
                <Input
                  value={formData.subject}
                  onChange={(e) =>
                    setFormData({ ...formData, subject: e.target.value })
                  }
                  className="h-12"
                  placeholder="What can we help you with?"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label className="text-[var(--forest-700)] font-medium">
                  Message
                </Label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-32 resize-none"
                  placeholder="Tell us about your questions or special requests..."
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[var(--earth-500)] hover:bg-[var(--earth-600)] text-white py-4 text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105"
              >
                Send Message
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
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </Button>
            </form>

            {/* Quick Contact */}
            <div className="mt-8 pt-8 border-t border-forest-100">
              <p className="text-center text-[var(--forest-600)] mb-4">
                Need immediate assistance?
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button
                  variant="outline"
                  className="border-[var(--forest-300)] text-[var(--forest-600)] hover:bg-[var(--forest-50)]"
                  onClick={() => window.open("tel:+15551234567")}
                >
                  📞 Call Now
                </Button>
                <Button
                  variant="outline"
                  className="border-[var(--forest-300)] text-[var(--forest-600)] hover:bg-[var(--forest-50)]"
                  onClick={() =>
                    window.open("https://wa.me/15551234567", "_blank")
                  }
                >
                  💬 WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
