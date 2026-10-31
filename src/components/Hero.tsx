import React from 'react';
import { ArrowDown, MessageSquare, ShieldCheck, Tag, Truck, Headphones, Zap } from 'lucide-react';

interface HeroProps {
  onViewProducts: () => void;
  onOpenWhatsApp: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onViewProducts, onOpenWhatsApp }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#0b1c30] text-white pt-28 pb-16 lg:pt-36 lg:pb-24">
      {/* Background Showroom Media & Contrast Scrims */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDAiZ9Yo4KAVIzAI50-yns2-I0f3oBTn6Adp8tqLz5U8tbVvoCdLjVBZEgN8SsZ8yMgNLaprPdfC8SPtVaeMBnalXJwf7yBC2PR2mBInXnV20q92Yu94BgiC3aGHmXAiS0q-wtuzdCcUSkOO057iQ-cBTWR0-hmlVBaPXHdh71-fhTGiSPVnXqG8R558grpWMTMDwcOgYUmU12tTXE2ANR3zmgA8v90FDo2UAAsHHIg_4EXcpiPkojscw"
          alt="Risbert Electricals Showroom Lagos Island"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center transform scale-105 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b1c30]/95 via-[#0b1c30]/85 to-[#0b1c30]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b1c30] via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl flex flex-col items-start gap-6">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 shadow-sm">
            <Zap className="w-4 h-4 text-[#dc2626] fill-[#dc2626]" />
            <span className="font-tech text-xs uppercase tracking-wider text-white font-semibold">
              Authorized Distributor &amp; Retailer in Lagos
            </span>
          </div>

          {/* Headline & Subheadline */}
          <div className="flex flex-col gap-3">
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white tracking-tight leading-[1.12]">
              Premium Electrical <br className="hidden sm:inline" />
              Supplies &amp; Switchgear.
            </h1>
            <p className="font-display text-base sm:text-lg text-[#d3e4fe]/90 max-w-2xl leading-relaxed">
              Your trusted source for quality electrical materials in Lagos. Engineering-grade industrial switchgear, genuine pure copper cabling, architectural LED fixtures, and certified wiring devices.
            </p>
          </div>

          {/* CTA Action Cluster */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <button
              onClick={onViewProducts}
              className="inline-flex items-center justify-center gap-2 bg-[#dc2626] text-white px-7 py-3.5 rounded-md font-tech text-sm font-semibold shadow-md hover:bg-[#b70011] transition-all active:scale-[0.98] cursor-pointer"
            >
              <span>View Our Products</span>
              <ArrowDown className="w-4 h-4" />
            </button>

            <a
              href="https://wa.me/2349061556118?text=Hello%20Risbert%20Electricals,%20I%20would%20like%20to%20order%20electrical%20materials."
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 text-white backdrop-blur-md px-6 py-3.5 rounded-md font-tech text-sm font-semibold transition-all active:scale-[0.98] border border-white/20"
            >
              <MessageSquare className="w-4 h-4 text-white" />
              <span>Order on WhatsApp</span>
            </a>
          </div>

          {/* Live Status Metric Strip */}
          <div className="w-full pt-8 mt-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-md border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-9 h-9 rounded bg-[#dc2626]/20 flex items-center justify-center shrink-0 text-[#dc2626]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-tech text-[10px] uppercase text-[#d3e4fe]/70 font-semibold tracking-wider">Authenticity</span>
                  <span className="font-tech text-xs sm:text-sm font-bold text-white truncate">100% Genuine Brands</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-md border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-9 h-9 rounded bg-[#dc2626]/20 flex items-center justify-center shrink-0 text-[#dc2626]">
                  <Tag className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-tech text-[10px] uppercase text-[#d3e4fe]/70 font-semibold tracking-wider">Contractor Pricing</span>
                  <span className="font-tech text-xs sm:text-sm font-bold text-white truncate">Wholesale &amp; Retail</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-md border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-9 h-9 rounded bg-[#dc2626]/20 flex items-center justify-center shrink-0 text-[#dc2626]">
                  <Truck className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-tech text-[10px] uppercase text-[#d3e4fe]/70 font-semibold tracking-wider">Logistics</span>
                  <span className="font-tech text-xs sm:text-sm font-bold text-white truncate">Fast Island Delivery</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-sm p-3 rounded-md border border-white/10 hover:bg-white/10 transition-colors">
                <div className="w-9 h-9 rounded bg-[#dc2626]/20 flex items-center justify-center shrink-0 text-[#dc2626]">
                  <Headphones className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="font-tech text-[10px] uppercase text-[#d3e4fe]/70 font-semibold tracking-wider">Desk Response</span>
                  <span className="font-tech text-xs sm:text-sm font-bold text-white truncate">Instant WhatsApp Quotes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
