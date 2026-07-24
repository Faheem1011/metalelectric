'use client';

import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/catalog-data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Metalectrics! I am visiting your website and would like a price quote.');
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <header className="site-header">
      <div className="shell">
        <div className="nav">
          
          {/* Brand */}
          <a href="#" className="flex items-baseline">
            <span className="brand-title">METALECTRICS</span>
            <span className="brand-sub">Alpha Ampere</span>
          </a>

          {/* Links */}
          <nav className="nav-links">
            <a href="#catalog">Catalog</a>
            <a href="#calculator">Calculator</a>
            <a href="#technical">Technical Specs</a>
            <a href="#contact">Contact</a>
          </nav>

          {/* Action */}
          <div className="flex items-center gap-3">
            <button 
              onClick={handleWhatsApp}
              className="btn-whatsapp text-xs py-2.5 px-4 hidden sm:inline-flex"
            >
              <Phone className="w-4 h-4" />
              <span>+92 309 8000565</span>
            </button>

            {/* Mobile menu toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 text-slate-700 hover:text-slate-900"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-white border-b border-slate-200 px-6 py-4 space-y-3">
          <a 
            href="#catalog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 font-medium py-1"
          >
            Catalog
          </a>
          <a 
            href="#calculator" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 font-medium py-1"
          >
            Calculator
          </a>
          <a 
            href="#technical" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 font-medium py-1"
          >
            Technical Specs
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-700 font-medium py-1"
          >
            Contact
          </a>
          <div className="pt-2 border-t border-slate-100">
            <button 
              onClick={handleWhatsApp}
              className="btn-whatsapp w-full py-2.5 text-xs font-semibold"
            >
              <Phone className="w-4 h-4" />
              <span>WhatsApp +92 309 8000565</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
