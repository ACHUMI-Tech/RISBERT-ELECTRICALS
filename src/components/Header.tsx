import React, { useState } from 'react';
import { MessageSquare, User, Menu, X, Phone } from 'lucide-react';

interface HeaderProps {
  onOpenWhatsApp: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenWhatsApp }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', href: '#' },
    { id: 'products', label: 'Products', href: '#products' },
    { id: 'location', label: 'Location', href: '#location' },
    { id: 'about', label: 'About', href: '#about' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-40 bg-[#ffffff]/95 backdrop-blur-md border-b border-[#e2e8f0] shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
        {/* Brand Logo - Clickable to top/hero */}
        <a 
          href="#" 
          className="flex items-center shrink-0 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#dc2626] rounded-md p-1"
          onClick={() => {
            setActiveNav('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label="Risbert Electricals - Back to top"
        >
          <img
            src="/RISBERT-ELECTRICALS/logo.png"
            alt="Risbert Electricals Logo"
            className="h-10 sm:h-12 w-auto object-contain rounded-md"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 font-tech text-sm">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setActiveNav(item.id)}
                className={`transition-colors py-1 ${
                  isActive
                    ? 'text-[#dc2626] font-bold border-b-2 border-[#dc2626]'
                    : 'text-[#565e74] hover:text-[#0b1c30] font-medium'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Actions Zone */}
        <div className="flex items-center gap-3">
          <a
            href="https://wa.me/2349061556118?text=Hello%20Risbert%20Electricals,%20I%20am%20chatting%20from%20your%20website%20trade%20counter."
            target="_blank"
            rel="noopener noreferrer"
            onClick={onOpenWhatsApp}
            className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-4 py-2 rounded-md font-tech text-sm font-semibold hover:bg-[#b70011] transition-all shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] active:scale-95"
          >
            <MessageSquare className="w-4 h-4" />
            <span className="hidden sm:inline">Chat on WhatsApp</span>
            <span className="sm:hidden">WhatsApp</span>
          </a>

          {/* User profile avatar icon */}
          <div 
            title="Trade Account / Staff Portal"
            className="w-9 h-9 rounded-full bg-[#b70011] text-white flex items-center justify-center shadow-sm cursor-pointer hover:opacity-90 transition-opacity"
          >
            <User className="w-4 h-4" />
          </div>

          {/* Mobile menu hamburger toggle */}
          <button
            type="button"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-[#565e74] hover:text-[#0b1c30] hover:bg-slate-100 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#e2e8f0] px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-200 shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              onClick={() => {
                setActiveNav(item.id);
                setMobileMenuOpen(false);
              }}
              className={`block px-3 py-2 rounded-md font-tech text-base ${
                activeNav === item.id
                  ? 'bg-red-50 text-[#dc2626] font-bold'
                  : 'text-[#0b1c30] hover:bg-slate-50 font-medium'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-[#565e74] px-3">
            <span className="flex items-center gap-1 font-tech">
              <Phone className="w-3.5 h-3.5 text-[#dc2626]" /> +234 906 155 6118
            </span>
            <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Trade Desk Open</span>
          </div>
        </div>
      )}
    </header>
  );
};
