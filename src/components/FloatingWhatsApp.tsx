import React from 'react';
import { MessageSquare } from 'lucide-react';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center group">
      {/* Tooltip on hover */}
      <div className="pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-200 mr-3 bg-[#0b1c30] text-white px-3.5 py-1.5 rounded-md font-tech text-xs font-semibold whitespace-nowrap shadow-xl border border-slate-700">
        Chat with Sales Desk on WhatsApp
      </div>

      {/* Floating Action Button */}
      <a
        aria-label="Chat on WhatsApp"
        href="https://wa.me/2349061556118?text=Hello%20Risbert%20Electricals,%20I%20am%20inquiring%20about%20your%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-14 h-14 rounded-full bg-[#dc2626] text-white flex items-center justify-center shadow-2xl hover:scale-105 active:scale-95 transition-transform cursor-pointer ring-4 ring-white/50"
      >
        <span className="absolute -inset-1 rounded-full bg-[#dc2626] opacity-40 animate-ping" />
        <MessageSquare className="w-7 h-7 relative z-10" />
      </a>
    </div>
  );
};
