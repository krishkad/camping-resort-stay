"use client";

import { Button } from "@/components/ui/button";
import { MessageCircleIcon, PhoneIcon } from "lucide-react";

const phoneNumber = process.env.NEXT_PUBLIC_CALL_PHONE_NO;

const FloatingActions = () => {
  const handleCall = () => {
    window.open(`tel:+${phoneNumber}`, "_self");
  };

  const handleWhatsApp = () => {
    const message =
      "Hi! I'm interested in Pawna Lake Camping. Could you please help me with booking?";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/30 bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] px-4 py-2">

        {/* Tagline */}
        <span className="hidden sm:block text-xs font-medium text-gray-700 pr-2">
          Need help booking?
        </span>

        {/* WhatsApp */}
        <Button
          onClick={handleWhatsApp}
          className="h-10 px-4 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-sm text-sm font-medium flex items-center gap-1.5 transition-all duration-200 hover:scale-[1.03]"
        >
          <MessageCircleIcon />
          <span className="max-sm:text-xs">WhatsApp</span>
        </Button>

        {/* Call */}
        <Button
          onClick={handleCall}
          className="h-10 px-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-sm text-sm font-medium flex items-center gap-1.5 transition-all duration-200 hover:scale-[1.03]"
        >
          <PhoneIcon />
          <span className="max-sm:text-xs">Call</span>
        </Button>
      </div>
    </div>
  );
};

export default FloatingActions;