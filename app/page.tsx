'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustRow from '@/components/TrustRow';
import FeaturedProducts from '@/components/FeaturedProducts';
import Calculator from '@/components/Calculator';
import TechnicalSection from '@/components/TechnicalSection';
import ProductCatalog from '@/components/ProductCatalog';
import Footer from '@/components/Footer';
import { Product } from '@/lib/catalog-data';

export default function Home() {
  const [selectedProductModal, setSelectedProductModal] = useState<Product | null>(null);

  const handleSelectProduct = (product: Product) => {
    setSelectedProductModal(product);
  };

  return (
    <main className="min-h-screen bg-white text-slate-900 flex flex-col font-sans">
      
      {/* Navbar */}
      <Navbar />

      {/* Hero (Left: H1 & Description & Buttons, Right: Static Battery Image) */}
      <Hero />

      {/* Trust Row */}
      <TrustRow />

      {/* Featured Products (4 Cards Max) */}
      <FeaturedProducts onSelectProduct={handleSelectProduct} />

      {/* Simple Appliance Sizing Calculator */}
      <Calculator />

      {/* Fact-based Technical Section */}
      <TechnicalSection />

      {/* Complete Product Catalog */}
      <ProductCatalog 
        selectedProductModal={selectedProductModal}
        setSelectedProductModal={setSelectedProductModal}
      />

      {/* CTA & Un-cluttered Footer */}
      <Footer />

    </main>
  );
}
