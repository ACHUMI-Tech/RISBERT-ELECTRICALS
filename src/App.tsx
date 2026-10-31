/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Hero } from './components/Hero.tsx';
import { ProductCatalog } from './components/ProductCatalog.tsx';
import { TrustPillars } from './components/TrustPillars.tsx';
import { LocationSection } from './components/LocationSection.tsx';
import { ProcurementBanner } from './components/ProcurementBanner.tsx';
import { Footer } from './components/Footer.tsx';
import { ProductDetailDrawer } from './components/ProductDetailDrawer.tsx';
import { BOQModal } from './components/BOQModal.tsx';
import { FastPickupModal } from './components/FastPickupModal.tsx';
import { FloatingWhatsApp } from './components/FloatingWhatsApp.tsx';
import { ProductItem } from './data/products.ts';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);
  const [isBOQOpen, setIsBOQOpen] = useState<boolean>(false);
  const [isPickupOpen, setIsPickupOpen] = useState<boolean>(false);

  const handleSelectProduct = (product: ProductItem) => {
    setSelectedProduct(product);
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };

  const handleViewProducts = () => {
    const el = document.getElementById('products');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleOpenGeneralWhatsApp = () => {
    window.open(
      'https://wa.me/2349061556118?text=Hello%20Risbert%20Electricals,%20I%20am%20chatting%20from%20your%20website.',
      '_blank'
    );
  };

  return (
    <div className="min-h-screen bg-[#f8f9ff] text-[#0b1c30] flex flex-col font-display selection:bg-[#dc2626] selection:text-white">
      {/* Top Navigation Bar */}
      <Header onOpenWhatsApp={handleOpenGeneralWhatsApp} />

      {/* Main Page Body */}
      <main className="flex-1 w-full pt-20 bg-[#f8f9ff]">
        {/* Hero Section with Live Metrics */}
        <Hero
          onViewProducts={handleViewProducts}
          onOpenWhatsApp={handleOpenGeneralWhatsApp}
        />

        {/* Product Catalog Section with Interactive Dropdowns & Grid */}
        <ProductCatalog onSelectProduct={handleSelectProduct} />

        {/* Why Contractors & Builders Choose Risbert (Trust Pillars) */}
        <TrustPillars />

        {/* Location & Interactive Lagos Island Map */}
        <LocationSection onNotifyDesk={() => setIsPickupOpen(true)} />

        {/* Procurement Callout Banner */}
        <ProcurementBanner onSubmitBOQ={() => setIsBOQOpen(true)} />
      </main>

      {/* Footer */}
      <Footer onOpenWhatsApp={handleOpenGeneralWhatsApp} />

      {/* Floating WhatsApp Action Button with Ping */}
      <FloatingWhatsApp />

      {/* Side Panel: Product Item Details Drawer */}
      <ProductDetailDrawer
        product={selectedProduct}
        isOpen={isDrawerOpen}
        onClose={handleCloseDrawer}
      />

      {/* Bill of Quantities Modal */}
      <BOQModal isOpen={isBOQOpen} onClose={() => setIsBOQOpen(false)} />

      {/* Express 30-Min Counter Pickup Notification Modal */}
      <FastPickupModal
        isOpen={isPickupOpen}
        onClose={() => setIsPickupOpen(false)}
      />
    </div>
  );
}
