import React from 'react';
import { ShieldCheck, Banknote, HardHat, Zap } from 'lucide-react';

export const TrustPillars: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: 'Genuine Copper Guarantee',
      description:
        'Every roll of wire is verified for 99.9% electrolytic oxygen-free copper, preventing resistance overheating and sudden electrical fire hazards.',
    },
    {
      icon: Banknote,
      title: 'Island Wholesale Rates',
      description:
        'Direct relationships with tier-1 manufacturers allow us to provide commercial developers with bulk procurement pricing right from Lagos Island.',
    },
    {
      icon: HardHat,
      title: 'Expert Technical Advice',
      description:
        'Our trade counter staff are certified electrical specialists ready to size your breakers, calculate cable load capacities, and verify lumens.',
    },
    {
      icon: Zap,
      title: 'Rapid WhatsApp Quotes',
      description:
        'Snap your Bill of Quantities (BOQ) or material list and send to our sales desk. Receive line-by-line confirmed quotes in under 15 minutes.',
    },
  ];

  return (
    <section className="w-full py-16 lg:py-20 bg-[#eff4ff]" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="font-tech text-xs uppercase tracking-wider text-[#dc2626] font-bold">
            Engineering Trust
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0b1c30] mt-1.5 tracking-tight">
            Why Contractors &amp; Builders Choose Risbert
          </h2>
          <div className="w-12 h-1 bg-[#dc2626] mx-auto mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <div
                key={i}
                className="bg-white p-6 rounded-lg shadow-sm flex flex-col gap-3 hover:-translate-y-1 transition-all duration-200 border border-[#e2e8f0] hover:border-slate-300"
              >
                <div className="w-12 h-12 rounded bg-[#e5eeff] flex items-center justify-center text-[#dc2626] mb-1">
                  <Icon className="w-6 h-6 text-[#dc2626]" />
                </div>
                <h3 className="font-display text-lg font-bold text-[#0b1c30]">
                  {pillar.title}
                </h3>
                <p className="font-display text-sm text-[#565e74] leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
