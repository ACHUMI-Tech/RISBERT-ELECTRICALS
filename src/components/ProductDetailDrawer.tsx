import React, { useState, useEffect } from 'react';
import { 
  X, 
  MessageSquare, 
  Check, 
  Copy, 
  Phone, 
  ShieldCheck, 
  Zap, 
  Plus, 
  Minus, 
  ExternalLink,
  Truck,
  Award,
  Clock,
  Sparkles
} from 'lucide-react';
import { ProductItem, ProductOption } from '../data/products.ts';

interface ProductDetailDrawerProps {
  product: ProductItem | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ProductDetailDrawer: React.FC<ProductDetailDrawerProps> = ({
  product,
  isOpen,
  onClose,
}) => {
  const [selectedOptionIndex, setSelectedOptionIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [copied, setCopied] = useState<boolean>(false);

  // Reset state when product changes
  useEffect(() => {
    setSelectedOptionIndex(0);
    setQuantity(1);
    setCopied(false);
  }, [product]);

  // Handle ESC key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent background scroll when side panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const currentOption: ProductOption = product.options[selectedOptionIndex] || product.options[0];

  // Helper to calculate total price
  const parseNaira = (priceStr: string) => {
    const num = parseInt(priceStr.replace(/[^0-9]/g, ''), 10);
    return isNaN(num) ? 0 : num;
  };

  const unitPrice = parseNaira(currentOption.price);
  const totalPrice = unitPrice * quantity;
  const formattedTotal = `₦${totalPrice.toLocaleString()}`;

  // Copy product specifications
  const handleCopySpecs = () => {
    const specText = `Risbert Electricals Specification Sheet
Product: ${product.title}
Selected Variant: ${currentOption.name}
Unit Price: ${currentOption.price}
Standard / Certification: ${product.certification}
Manufacturer: ${product.manufacturer}
Technical Specs:
${Object.entries(product.specifications).map(([k, v]) => `• ${k}: ${v}`).join('\n')}
Store: Oroyinyin St, Adeniji Adele Rd, Lagos Island (+234 906 155 6118)`;

    navigator.clipboard.writeText(specText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // WhatsApp order URL with pre-filled message
  const whatsappUrl = `https://wa.me/2349061556118?text=${encodeURIComponent(
    `Hello Risbert Electricals, I would like to order:
- Item: ${product.title}
- Option: ${currentOption.name}
- Quantity: ${quantity}
- Estimated Total: ${formattedTotal}
Please confirm immediate stock availability at your Adeniji Adele trade counter.`
  )}`;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-[#0b1c30]/60 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer Container */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-white shadow-2xl flex flex-col justify-between border-l border-[#e2e8f0] animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-[#e2e8f0] flex items-center justify-between bg-[#f8f9ff]">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-tech text-xs uppercase font-bold text-[#dc2626] tracking-wider">
                  {product.categoryLabel}
                </span>
                <span className="text-slate-300">·</span>
                <span className="inline-flex items-center gap-1 text-[11px] font-tech text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Verified Stock
                </span>
              </div>
              <h2 className="font-display text-2xl font-bold text-[#0b1c30]">
                {product.title}
              </h2>
            </div>
            <button
              onClick={onClose}
              aria-label="Close details side panel"
              className="p-2 rounded-full hover:bg-slate-200 text-[#565e74] hover:text-[#0b1c30] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            
            {/* Product Image Frame */}
            <div className="relative rounded-lg overflow-hidden border border-[#e2e8f0] bg-slate-100 h-64 sm:h-72">
              <img
                src={product.image}
                alt={product.title}
                referrerPolicy="no-referrer"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  if (target.src !== product.imageFallback) {
                    target.src = product.imageFallback;
                  }
                }}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[#dc2626] font-tech text-xs font-bold uppercase tracking-wider shadow-sm">
                {product.badge}
              </div>
              <div className="absolute bottom-3 right-3 bg-[#0b1c30]/85 text-white font-tech text-xs font-bold px-2.5 py-1 rounded backdrop-blur-sm">
                {product.standardBadge}
              </div>
            </div>

            {/* Overview & Manufacturer info */}
            <div>
              <p className="font-display text-sm text-[#565e74] leading-relaxed mb-4">
                {product.detailedOverview}
              </p>
              <div className="grid grid-cols-2 gap-3 p-3.5 bg-[#f8f9ff] rounded-md border border-[#e5eeff] text-xs font-tech">
                <div>
                  <span className="text-[#565e74] block">Authorized Brand:</span>
                  <span className="font-bold text-[#0b1c30] text-sm">{product.manufacturer}</span>
                </div>
                <div>
                  <span className="text-[#565e74] block">Warranty / Guarantee:</span>
                  <span className="font-bold text-[#0b1c30] text-sm">{product.warranty}</span>
                </div>
              </div>
            </div>

            {/* Available Options / Sizes Selector */}
            <div>
              <div className="flex items-center justify-between mb-2.5">
                <label className="font-tech text-xs uppercase font-bold text-[#0b1c30] tracking-wider">
                  Select Specification / Size Variant:
                </label>
                <span className="font-tech text-xs text-[#565e74]">
                  {product.options.length} options available
                </span>
              </div>
              <div className="space-y-2">
                {product.options.map((option, idx) => {
                  const isSelected = selectedOptionIndex === idx;
                  return (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedOptionIndex(idx)}
                      className={`w-full text-left p-3 rounded-md border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected
                          ? 'border-[#dc2626] bg-red-50/60 shadow-xs ring-1 ring-[#dc2626]'
                          : 'border-[#cbd5e1] hover:border-slate-400 bg-white'
                      }`}
                    >
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center gap-2">
                          <span className={`w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0 ${
                            isSelected ? 'border-[#dc2626] bg-[#dc2626]' : 'border-slate-400'
                          }`}>
                            {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
                          </span>
                          <span className="font-tech text-sm font-semibold text-[#0b1c30] truncate">
                            {option.name}
                          </span>
                        </div>
                        {option.specs && (
                          <span className="font-tech text-xs text-[#565e74] block pl-5.5 mt-0.5">
                            {option.specs}
                          </span>
                        )}
                      </div>
                      <div className="text-right shrink-0">
                        <span className="font-tech text-sm font-bold text-[#dc2626] tabular-nums">
                          {option.price}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Stepper & Price Calculation */}
            <div className="p-4 bg-[#eff4ff] rounded-lg border border-[#dce9ff] flex items-center justify-between">
              <div>
                <span className="font-tech text-xs uppercase font-bold text-[#565e74] block">
                  Quantity / Rolls:
                </span>
                <div className="flex items-center gap-3 mt-1.5">
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
                    disabled={quantity <= 1}
                    className="w-8 h-8 rounded bg-white border border-slate-300 flex items-center justify-center text-[#0b1c30] hover:bg-slate-50 disabled:opacity-40 cursor-pointer"
                  >
                    <Minus className="w-3.5 h-3.5" />
                  </button>
                  <span className="font-tech text-base font-bold text-[#0b1c30] w-8 text-center tabular-nums">
                    {quantity}
                  </span>
                  <button
                    type="button"
                    onClick={() => setQuantity((prev) => prev + 1)}
                    className="w-8 h-8 rounded bg-white border border-slate-300 flex items-center justify-center text-[#0b1c30] hover:bg-slate-50 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <span className="font-tech text-xs uppercase text-[#565e74] block">Estimated Total:</span>
                <span className="font-display text-2xl font-extrabold text-[#dc2626] tabular-nums">
                  {formattedTotal}
                </span>
                <span className="font-tech text-[10px] text-slate-500 block">Lagos Trade Wholesale</span>
              </div>
            </div>

            {/* Detailed Technical Specifications Table */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-tech text-xs uppercase font-bold text-[#0b1c30] tracking-wider">
                  Technical Specifications Table
                </h4>
                <button
                  type="button"
                  onClick={handleCopySpecs}
                  className="inline-flex items-center gap-1 text-xs font-tech font-semibold text-[#dc2626] hover:underline cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Specs</span>
                    </>
                  )}
                </button>
              </div>

              <div className="border border-[#e2e8f0] rounded-md overflow-hidden font-tech text-xs">
                {Object.entries(product.specifications).map(([key, val], i) => (
                  <div
                    key={key}
                    className={`flex items-center justify-between p-2.5 ${
                      i % 2 === 0 ? 'bg-white' : 'bg-[#f8f9ff]'
                    } border-b border-[#e2e8f0] last:border-b-0`}
                  >
                    <span className="text-[#565e74] font-medium">{key}</span>
                    <span className="font-bold text-[#0b1c30] text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Logistics & Counter Pickup Notice */}
            <div className="flex items-start gap-3 p-3.5 bg-amber-50 rounded-md border border-amber-200/70 text-xs font-tech text-amber-900">
              <Truck className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold block">Trade Counter Ready in 30 Mins</span>
                <span>
                  Orders placed on WhatsApp can be packed and readied for driver pickup at Oroyinyin Street, Adeniji Adele before arrival.
                </span>
              </div>
            </div>
          </div>

          {/* Fixed Drawer Footer Actions */}
          <div className="p-6 border-t border-[#e2e8f0] bg-[#f8f9ff] space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b70011] text-white py-3.5 px-6 rounded-md font-tech text-sm font-bold shadow-md transition-all active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Inquire / Order on WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-xs font-tech text-[#565e74] pt-1">
              <a
                href="tel:+2349061556118"
                className="inline-flex items-center gap-1.5 hover:text-[#0b1c30] font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#dc2626]" />
                <span>Call Desk: +234 906 155 6118</span>
              </a>
              <span className="text-emerald-700 font-semibold">NIS / ISO Certified</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
