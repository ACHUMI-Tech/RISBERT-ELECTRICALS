import React, { useState } from 'react';
import { 
  MapPin, 
  Navigation, 
  Phone, 
  Clock, 
  MessageSquare, 
  ExternalLink, 
  Plus, 
  Minus,
  CheckCircle2,
  Send
} from 'lucide-react';

interface LocationSectionProps {
  onNotifyDesk: () => void;
}

export const LocationSection: React.FC<LocationSectionProps> = ({ onNotifyDesk }) => {
  const [zoomLevel, setZoomLevel] = useState<number>(1);

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(1.6, prev + 0.15));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(0.85, prev - 0.15));
  };

  return (
    <section className="w-full py-16 lg:py-20 bg-[#f8f9ff] scroll-mt-20" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col mb-10">
          <span className="font-tech text-xs uppercase tracking-wider text-[#dc2626] font-bold">
            Trade Counter &amp; Warehouse
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-1 tracking-tight">
            Where to Find Us
          </h2>
          <div className="w-16 h-1 bg-[#dc2626] mt-2 rounded-full" />
        </div>

        {/* Split Layout: Information & Map Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Details & Trade Hours */}
          <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
            <div className="bg-white p-6 sm:p-7 rounded-lg shadow-sm flex flex-col gap-5 border border-[#e2e8f0]">
              
              {/* Physical Location Item */}
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center shrink-0 mt-0.5 border border-red-100">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="font-tech text-xs uppercase font-bold text-[#565e74] tracking-wider">
                    Physical Address
                  </span>
                  <p className="font-display text-lg font-bold text-[#0b1c30] mt-1 leading-snug">
                    Oroyinyin St, Adeniji Adele Rd, Lagos Island, Lagos 100001
                  </p>
                  <p className="font-display text-sm text-[#565e74] mt-1.5 leading-relaxed">
                    Located in the vibrant electrical and hardware trade corridor of Lagos Island. Walk-ins, contractor pickups, and freight loading welcomed.
                  </p>
                </div>
              </div>

              <div className="w-full h-px bg-[#e5eeff]" />

              {/* Operating Hours Box */}
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-tech text-xs uppercase font-bold text-[#565e74] tracking-wider">
                    Business Hours
                  </span>
                  <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 rounded font-tech text-[11px] font-bold">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Trade Counter Active
                  </span>
                </div>

                <div className="space-y-2 mt-2 font-tech text-sm">
                  <div className="flex items-center justify-between py-1.5 bg-[#eff4ff] px-3 rounded-md">
                    <span className="font-semibold text-[#0b1c30]">Monday – Friday</span>
                    <span className="text-[#565e74] font-medium tabular-nums">8:30 AM – 6:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 bg-[#eff4ff] px-3 rounded-md">
                    <span className="font-semibold text-[#0b1c30]">Saturday</span>
                    <span className="text-[#565e74] font-medium tabular-nums">9:00 AM – 5:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between py-1.5 px-3 rounded-md text-[#565e74]">
                    <span>Sunday</span>
                    <span className="text-[#dc2626] font-semibold text-xs">Closed (WhatsApp Orders Open)</span>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-[#e5eeff]" />

              {/* Phone and Direct Link Row */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-1">
                <div className="flex flex-col">
                  <span className="font-tech text-xs uppercase font-bold text-[#565e74] tracking-wider">
                    Direct Telephone
                  </span>
                  <a
                    href="tel:+2349061556118"
                    className="font-display text-lg font-bold text-[#0b1c30] hover:text-[#dc2626] transition-colors tabular-nums mt-0.5"
                  >
                    +234 906 155 6118
                  </a>
                </div>
                <div>
                  <a
                    href="https://maps.google.com/?q=Oroyinyin+St+Adeniji+Adele+Rd+Lagos+Island"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-[#e5eeff] hover:bg-[#dce9ff] text-[#0b1c30] px-4 py-2.5 rounded-md font-tech text-sm font-semibold transition-colors w-full sm:w-auto"
                  >
                    <Navigation className="w-4 h-4 text-[#dc2626]" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bottom Contractor WhatsApp Fast Track Banner */}
            <div className="bg-[#0b1c30] text-white p-5 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-md border border-slate-800">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-md bg-[#dc2626]/20 flex items-center justify-center shrink-0 text-[#dc2626]">
                  <Clock className="w-5 h-5 text-[#dc2626]" />
                </div>
                <div>
                  <div className="font-tech text-sm font-bold text-white">Need Pickup Ready in 30 Mins?</div>
                  <div className="font-tech text-xs text-[#d3e4fe]/80">Message your list prior to arriving at Adeniji Adele.</div>
                </div>
              </div>
              <button
                type="button"
                onClick={onNotifyDesk}
                className="inline-flex items-center justify-center shrink-0 bg-[#dc2626] hover:bg-[#b70011] text-white px-4 py-2 rounded-md font-tech text-xs font-bold transition-all active:scale-95 shadow-xs cursor-pointer w-full sm:w-auto"
              >
                Notify Desk
              </button>
            </div>
          </div>

          {/* Right Column: Interactive Map Interface */}
          <div className="lg:col-span-7 bg-white rounded-lg shadow-sm border border-[#e2e8f0] overflow-hidden flex flex-col min-h-[460px]">
            {/* Map App Top Control Strip */}
            <div className="h-12 bg-[#eff4ff] px-4 sm:px-6 flex items-center justify-between border-b border-[#e2e8f0]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#dc2626] animate-ping" />
                <span className="font-tech text-xs sm:text-sm font-bold text-[#0b1c30]">
                  Lagos Island Central Grid • Oroyinyin St
                </span>
              </div>
              <a
                href="https://maps.google.com/?q=Oroyinyin+St+Adeniji+Adele+Rd+Lagos+Island"
                target="_blank"
                rel="noopener noreferrer"
                className="font-tech text-xs uppercase font-bold text-[#dc2626] hover:underline flex items-center gap-1.5"
              >
                <span>View Larger Map</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Stylized Visual Map Display Canvas */}
            <div className="relative flex-1 w-full bg-[#e2e8f0] min-h-[400px] overflow-hidden select-none">
              <div 
                className="w-full h-full transition-transform duration-300 origin-center"
                style={{ transform: `scale(${zoomLevel})` }}
              >
                <svg
                  className="w-full h-full object-cover min-h-[400px]"
                  viewBox="0 0 800 500"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Water body: Lagos Lagoon / Harbor */}
                  <rect fill="#CBD5E1" height="500" width="800" />
                  <path
                    d="M0,0 L800,0 L800,120 C600,140 450,110 300,160 C150,210 50,180 0,220 Z"
                    fill="#94A3B8"
                    opacity="0.35"
                  />
                  <path
                    d="M0,380 C180,360 300,420 500,380 C680,340 740,390 800,410 L800,500 L0,500 Z"
                    fill="#94A3B8"
                    opacity="0.35"
                  />

                  {/* Island Landmass */}
                  <path
                    d="M 0,200 C 120,170 280,140 440,130 C 620,120 780,110 800,120 L 800,390 C 700,370 540,360 360,390 C 200,420 80,360 0,360 Z"
                    fill="#FFFFFF"
                  />

                  {/* Lagos Island Main Roads */}
                  {/* Adeniji Adele Road */}
                  <path
                    d="M 120,170 Q 380,240 680,220"
                    stroke="#94A3B8"
                    strokeLinecap="round"
                    strokeWidth="14"
                  />
                  <path
                    d="M 120,170 Q 380,240 680,220"
                    stroke="#FFFFFF"
                    strokeLinecap="round"
                    strokeWidth="9"
                  />

                  {/* Oroyinyin Street Intersect */}
                  <path
                    d="M 360,140 L 410,340"
                    stroke="#94A3B8"
                    strokeLinecap="round"
                    strokeWidth="12"
                  />
                  <path
                    d="M 360,140 L 410,340"
                    stroke="#FFED4A"
                    strokeLinecap="round"
                    strokeWidth="7"
                  />

                  {/* Carter Bridge connection */}
                  <path
                    d="M 220,100 L 260,200"
                    stroke="#64748B"
                    strokeDasharray="6 4"
                    strokeWidth="8"
                  />

                  {/* Marina Boulevard */}
                  <path
                    d="M 80,330 Q 320,330 640,310"
                    stroke="#CBD5E1"
                    strokeWidth="10"
                  />

                  {/* Surrounding Street Network */}
                  <path d="M 280,190 L 460,190" stroke="#E2E8F0" strokeWidth="5" />
                  <path d="M 320,280 L 520,270" stroke="#E2E8F0" strokeWidth="5" />
                  <path d="M 460,180 L 490,320" stroke="#E2E8F0" strokeWidth="5" />

                  {/* Street Labels */}
                  <text fill="#475569" fontFamily="Inter" fontSize="12" fontWeight="800" letterSpacing="1" x="430" y="190">
                    ADENIJI ADELE RD
                  </text>
                  <text
                    fill="#1E293B"
                    fontFamily="Inter"
                    fontSize="12"
                    fontWeight="800"
                    transform="rotate(76 325 270)"
                    x="325"
                    y="270"
                  >
                    OROYINYIN ST ★
                  </text>
                  <text fill="#64748B" fontFamily="Inter" fontSize="13" fontWeight="800" x="60" y="80">
                    LAGOS LAGOON
                  </text>
                  <text fill="#64748B" fontFamily="Inter" fontSize="11" fontWeight="700" x="50" y="440">
                    TO MARINA &amp; CMS
                  </text>
                  <text fill="#64748B" fontFamily="Inter" fontSize="11" fontWeight="700" x="630" y="160">
                    THIRD MAINLAND CONN.
                  </text>
                </svg>

                {/* Store Pin Placement Overlay */}
                <div className="absolute top-[48%] left-[49%] -translate-x-1/2 -translate-y-full flex flex-col items-center group cursor-pointer z-10">
                  {/* Pulsing Ring */}
                  <div className="absolute bottom-0 w-10 h-10 rounded-full bg-[#dc2626]/30 animate-ping" />
                  
                  {/* Location Popover Card */}
                  <div className="bg-[#0b1c30] text-white px-3.5 py-2 rounded-md shadow-2xl flex items-center gap-2.5 mb-1.5 whitespace-nowrap transform group-hover:scale-105 transition-transform border border-slate-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#dc2626] animate-pulse" />
                    <div className="flex flex-col">
                      <span className="font-display text-xs sm:text-sm font-bold text-white">Risbert Electricals</span>
                      <span className="font-tech text-[10px] text-[#d3e4fe]/80">Oroyinyin Junction</span>
                    </div>
                  </div>

                  {/* Red Marker Pin */}
                  <div className="relative text-[#dc2626] filter drop-shadow-lg">
                    <MapPin className="w-8 h-8 fill-[#dc2626] text-white stroke-[1.5]" />
                  </div>
                </div>
              </div>

              {/* Map Controls Float (Zoom In & Zoom Out) */}
              <div className="absolute bottom-4 right-4 flex flex-col gap-1 shadow-md rounded overflow-hidden z-20">
                <button
                  type="button"
                  aria-label="Zoom in on Lagos Island map"
                  onClick={handleZoomIn}
                  className="w-9 h-9 bg-white hover:bg-slate-100 flex items-center justify-center text-[#0b1c30] font-bold transition-colors border-b border-slate-200 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  aria-label="Zoom out on Lagos Island map"
                  onClick={handleZoomOut}
                  className="w-9 h-9 bg-white hover:bg-slate-100 flex items-center justify-center text-[#0b1c30] font-bold transition-colors cursor-pointer"
                >
                  <Minus className="w-4 h-4" />
                </button>
              </div>

              {/* Bottom Tag */}
              <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-md text-[#565e74] font-tech text-xs font-semibold shadow-xs z-20 border border-slate-200">
                Interactive View • Lagos Island (100001)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
