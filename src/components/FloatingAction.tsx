"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
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
      "_blank",
    );
  };

  return (
    <div className="fixed bottom-5 inset-x-0 z-50 flex justify-center px-4 pointer-events-none">
      <div className="pointer-events-auto flex items-center gap-3 rounded-full border border-white/30 bg-white/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] px-2 pl-4 py-2">
        {/* Tagline */}
        <span className="hidden sm:block text-xs font-medium text-gray-700 pr-2">
          Need help booking?
        </span>

        {/* WhatsApp */}
        <Button
          onClick={handleWhatsApp}
          className="h-10 px-4 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-sm text-sm font-medium flex items-center gap-1.5 transition-all duration-200 hover:scale-[1.03]"
        >
          <WhatsAppIcon />
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

export function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className={cn("bi bi-whatsapp", className)}
      viewBox="0 0 16 16"
    >
      <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
    </svg>
  );
}
