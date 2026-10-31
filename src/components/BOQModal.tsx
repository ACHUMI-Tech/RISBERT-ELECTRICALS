import React, { useState } from 'react';
import { X, FileSpreadsheet, Send, CheckCircle2 } from 'lucide-react';

interface BOQModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BOQModal: React.FC<BOQModalProps> = ({ isOpen, onClose }) => {
  const [contractorName, setContractorName] = useState('');
  const [projectName, setProjectName] = useState('');
  const [siteLocation, setSiteLocation] = useState('Lagos Island / Victoria Island');
  const [materialList, setMaterialList] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `*COMMERCIAL BOQ QUOTATION REQUEST*
Contractor / Company: ${contractorName || 'Contractor'}
Project: ${projectName || 'Ongoing Project'}
Site Location: ${siteLocation}

*Materials / Specifications List:*
${materialList || 'Please quote standard electrical cable and switchgear packages.'}

Kindly provide line-by-line wholesale pricing and delivery lead-time.`;

    window.open(`https://wa.me/2349061556118?text=${encodeURIComponent(text)}`, '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
      <div 
        className="fixed inset-0 bg-[#0b1c30]/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg max-w-lg w-full p-6 sm:p-7 shadow-2xl border border-[#e2e8f0] z-10 animate-in fade-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-5">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-red-50 text-[#dc2626] flex items-center justify-center">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-bold text-[#0b1c30]">Submit Bill of Quantities</h3>
              <p className="font-tech text-xs text-[#565e74]">Guaranteed quotation within 15 minutes</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-slate-100 text-slate-500 hover:text-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-tech text-xs uppercase font-bold text-[#0b1c30] mb-1">
              Your Name / Contracting Firm
            </label>
            <input
              type="text"
              required
              value={contractorName}
              onChange={(e) => setContractorName(e.target.value)}
              placeholder="e.g. Engr. Babatunde / Apex Engineering"
              className="w-full px-3.5 py-2.5 bg-[#f8f9ff] border border-[#cbd5e1] rounded-md font-tech text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#dc2626] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-tech text-xs uppercase font-bold text-[#0b1c30] mb-1">
                Project Name
              </label>
              <input
                type="text"
                value={projectName}
                onChange={(e) => setProjectName(e.target.value)}
                placeholder="e.g. 10-Unit Terrace Lekki"
                className="w-full px-3.5 py-2.5 bg-[#f8f9ff] border border-[#cbd5e1] rounded-md font-tech text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#dc2626] focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-tech text-xs uppercase font-bold text-[#0b1c30] mb-1">
                Delivery Corridor
              </label>
              <select
                value={siteLocation}
                onChange={(e) => setSiteLocation(e.target.value)}
                className="w-full px-3 py-2.5 bg-[#f8f9ff] border border-[#cbd5e1] rounded-md font-tech text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#dc2626] focus:outline-none"
              >
                <option value="Lagos Island / Victoria Island / Ikoyi">Lagos Island / VI / Ikoyi</option>
                <option value="Lekki Phase 1 - Epe Corridor">Lekki - Epe Corridor</option>
                <option value="Ikeja & Mainland Lagos">Ikeja &amp; Mainland</option>
                <option value="Self-Pickup at Adeniji Adele Counter">Self-Pickup at Counter</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block font-tech text-xs uppercase font-bold text-[#0b1c30] mb-1">
              Paste BOQ / Material Schedule
            </label>
            <textarea
              rows={4}
              required
              value={materialList}
              onChange={(e) => setMaterialList(e.target.value)}
              placeholder="Example:
- 25 rolls Coleman 2.5mm single core (Red & Black)
- 12 rolls Coleman 1.5mm single core (Blue)
- 4x Schneider 12-way distribution boards
- 50x 12W Warm White POP downlights"
              className="w-full px-3.5 py-2.5 bg-[#f8f9ff] border border-[#cbd5e1] rounded-md font-tech text-sm text-[#0b1c30] focus:ring-2 focus:ring-[#dc2626] focus:outline-none font-mono"
            />
          </div>

          <div className="pt-2">
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#dc2626] hover:bg-[#b70011] text-white py-3 px-6 rounded-md font-tech text-sm font-bold shadow-md transition-all cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Send BOQ to Sales Desk on WhatsApp</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
