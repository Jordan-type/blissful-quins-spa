"use client";

import { MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const WHATSAPP_NUMBER = "254114123208";

export default function WhatsAppFloatingButton() {

  const [showBubble, setShowBubble] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowBubble(false);
    }, 2000); // hide after 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const message = encodeURIComponent(
    "Hello Blissful Quins Spa! I would like to inquire about your treatments."
  );

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">

      {/* Tooltip bubble */}
      {showBubble && (
        <div className="flex items-start gap-2 bg-white text-gray-800 shadow-xl rounded-xl px-4 py-3 text-sm max-w-[220px] animate-fade-in">

          <span>💬 Need help choosing a treatment?</span>

          <button
            onClick={() => setShowBubble(false)}
            className="opacity-60 hover:opacity-100"
          >
            <X size={14} />
          </button>

        </div>
      )}

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full shadow-xl transition-all"
      >
        <MessageCircle size={20} />
        <span className="hidden md:inline">WhatsApp</span>
      </a>

    </div>
  );
}