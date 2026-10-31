import React, { useState } from 'react';
import { X, Clock, Send, CheckCircle2 } from 'lucide-react';

interface FastPickupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FastPickupModal: React.FC<FastPickupModalProps> = ({ isOpen, onClose }) => {
  const [driverName, setDriverName] = useState('');
  const [eta, setEta] = useState('20 minutes');
  const [vehicleInfo, setVehicleInfo] = useState('');
  const [itemsToPack, setItemsToPack] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*EXPRESS TRADE COUNTER PICKUP NOTIFICATION (30-MIN DISPATCH)*
Representative / Driver: ${driverName || 'Site Dispatch'}
ETA to Adeniji Adele: ${eta}
Vehicle / Bike Plate: ${vehicleInfo || 'Walk-in / Bike'}

*Items to Have Packed on Counter:*
${itemsToPack || 'Pre-ordered cable coils & switchgear'}

Please stage at front counter for fast loading.`;

    window.open(`https://wa.me/2349061556118?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-[#0b1c30]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg max-w-md w-full p-6 shadow-2xl border border-[#e2e8f0] z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-bold text-[#0b1c30]">Notify Trade Counter Desk</h3>
              <p className="font-tech text-xs text-[#565e74]">Have items packed before your driver arrives</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3.5">
          <div>
            <label className="block font-tech text-xs uppercase font-bold text-[#0b1c30] mb-1">
              Driver / Rep Name
            </label>
            <input
              type="text"
              required
              value={driverName}
              onChange={(e) => setDriverName(e.target.value)}
              placeholder="e.g. Ibrahim / Dispatch Bike"
              className="w-full px-3 py-2 bg-[#f8f9ff] border border-[#cbd5e1] rounded-md font-tech text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#dc2626] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-tech text-xs uppercase font-bold text-[#0b1c30] mb-1">
                Estimated ETA
              </label>
              <select
                value={eta}
                onChange={(e) => setEta(e.target.value)}
                className="w-full px-3 py-2 bg-[#f8f9ff] border border-[#cbd5e1] rounded-md font-tech text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#dc2626] focus:outline-none"
              >
                <option value="15 minutes">15 minutes</option>
                <option value="30 minutes">30 minutes</option>
                <option value="45 minutes">45 minutes</option>
                <option value="1 hour">1 hour</option>
              </select>
            </div>
            <div>
              <label className="block font-tech text-xs uppercase font-bold text-[#0b1c30] mb-1">
                Vehicle Plate / Model
              </label>
              <input
                type="text"
                value={vehicleInfo}
                onChange={(e) => setVehicleInfo(e.target.value)}
                placeholder="e.g. Toyota Hilux / Bike"
                className="w-full px-3 py-2 bg-[#f8f9ff] border border-[#cbd5e1] rounded-md font-tech text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#dc2626] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label className="block font-tech text-xs uppercase font-bold text-[#0b1c30] mb-1">
              Items to Stage / Order Number
            </label>
            <textarea
              rows={3}
              required
              value={itemsToPack}
              onChange={(e) => setItemsToPack(e.target.value)}
              placeholder="Mention your order number or materials (e.g. 5 coils 4mm red copper wire, 2 breakers)"
              className="w-full px-3 py-2 bg-[#f8f9ff] border border-[#cbd5e1] rounded-md font-tech text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#dc2626] focus:outline-none"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b70011] text-white py-2.5 px-4 rounded-md font-tech text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Send Fast-Track Pickup Alert</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
