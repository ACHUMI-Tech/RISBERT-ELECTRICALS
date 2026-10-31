import React from 'react';
import { FileSpreadsheet, Send } from 'lucide-react';

interface ProcurementBannerProps {
  onSubmitBOQ: () => void;
}

export const ProcurementBanner: React.FC<ProcurementBannerProps> = ({ onSubmitBOQ }) => {
  return (
    <section className="w-full bg-[#0b1c30] text-white py-8 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-lg bg-[#dc2626] text-white flex items-center justify-center shrink-0 shadow-sm">
            <FileSpreadsheet className="w-6 h-6" />
          </div>
          <div>
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">
              Electrical Contractors &amp; Facility Managers
            </h3>
            <p className="font-tech text-sm text-[#d3e4fe]/80 mt-0.5">
              Need custom cable drums or commercial distribution quotes for an ongoing project?
            </p>
          </div>
        </div>

        <button
          type="button"
          onClick={onSubmitBOQ}
          className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-6 py-3 rounded-md font-tech text-sm font-bold hover:bg-[#b70011] transition-all whitespace-nowrap shadow-sm active:scale-95 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>Submit BOQ on WhatsApp</span>
        </button>
      </div>
    </section>
  );
};
