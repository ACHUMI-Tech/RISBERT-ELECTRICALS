import React from 'react';
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenWhatsApp }) => {
  return (
    <footer className="w-full bg-[#0b1c30] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10 mb-12">
          
          {/* Column 1: Brand & Contact */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Risbert Electricals Logo"
                className="h-10 w-auto object-contain rounded-md"
              />
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Risbert Electricals
              </span>
            </div>
            <p className="font-display text-sm text-[#d3e4fe]/80 leading-relaxed">
              Leading commercial electrical hardware and equipment merchant serving electrical contractors, developers, and homeowners in Lagos Island with genuine certified gear.
            </p>
            <div className="flex flex-col gap-2 font-tech text-sm text-[#d3e4fe]/90 pt-1">
              <a
                href="tel:+2349061556118"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#dc2626]" />
                <span className="tabular-nums">+234 906 155 6118</span>
              </a>
              <a
                href="mailto:info@risbertelectricals.com"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4 text-[#dc2626]" />
                <span>info@risbertelectricals.com</span>
              </a>
            </div>
          </div>

          {/* Column 2: Physical Store */}
          <div className="flex flex-col gap-4">
            <h3 className="font-tech text-xs uppercase tracking-wider font-bold text-white">
              Physical Store
            </h3>
            <div className="flex items-start gap-2.5 font-display text-sm text-[#d3e4fe]/80 leading-relaxed">
              <MapPin className="w-4 h-4 text-[#dc2626] shrink-0 mt-1" />
              <span>Oroyinyin St, Adeniji Adele Rd, Lagos Island, Lagos 100001, Lagos</span>
            </div>
            <div className="mt-2 text-xs font-tech">
              <span className="uppercase tracking-wider text-[#d3e4fe]/60 block mb-1.5 font-bold">
                Trade Counter Hours
              </span>
              <p className="text-[#d3e4fe]/90 py-0.5">Mon – Fri: 8:00 AM – 6:00 PM</p>
              <p className="text-[#d3e4fe]/90 py-0.5">Saturday: 8:30 AM – 5:00 PM</p>
              <p className="text-[#d3e4fe]/60 py-0.5">Sunday: Closed (WhatsApp Active)</p>
            </div>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-tech text-xs uppercase tracking-wider font-bold text-white">
              Navigation
            </h3>
            <ul className="flex flex-col gap-2 font-display text-sm">
              <li>
                <a href="#" className="text-[#d3e4fe]/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-[#d3e4fe]/80 hover:text-white transition-colors">
                  Product Catalog
                </a>
              </li>
              <li>
                <a href="#location" className="text-[#d3e4fe]/80 hover:text-white transition-colors">
                  Store Location &amp; Directions
                </a>
              </li>
              <li>
                <a href="#about" className="text-[#d3e4fe]/80 hover:text-white transition-colors">
                  About Risbert
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Instant Procurement */}
          <div className="flex flex-col gap-4">
            <h3 className="font-tech text-xs uppercase tracking-wider font-bold text-white">
              Instant Procurement
            </h3>
            <p className="font-display text-sm text-[#d3e4fe]/80 leading-relaxed">
              Need a bulk quote or specialized cable specifications? Connect immediately with our Lagos sales desk.
            </p>
            <a
              href="https://wa.me/2349061556118?text=Hello%20Risbert%20Electricals,%20I%20am%20requesting%20a%20sales%20desk%20procurement%20quote."
              target="_blank"
              rel="noopener noreferrer"
              onClick={onOpenWhatsApp}
              className="inline-flex items-center justify-center gap-2 bg-[#dc2626] text-white px-4 py-2.5 rounded-md font-tech text-sm font-bold hover:bg-[#b70011] transition-all shadow-sm active:scale-95"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp Sales Desk</span>
            </a>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-tech text-[#d3e4fe]/70">
          <p>© 2026 Risbert Electricals. All rights reserved.</p>
          <div className="flex items-center gap-2 font-tech uppercase tracking-wider font-semibold text-slate-400">
            <ShieldCheck className="w-4 h-4 text-[#dc2626]" />
            <span>Lagos Island Genuine Retailer</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
