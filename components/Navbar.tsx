'use client';

import React, { useState } from 'react';
import { Zap, Smartphone, Menu, X } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/catalog-data';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleWhatsApp = () => {
    const message = encodeURIComponent(`Hello Metalectrics! I am reaching out from your website for an inquiry.`);
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <header className="site-header">
      <div className="shell">
        <div className="nav">
          
          <a href="#" className="brand">
            <div className="brand-mark">
              <Zap className="w-6 h-6 text-slate-950 fill-slate-950" />
            </div>
            <div>
              <span className="font-extrabold text-white text-xl tracking-tight">METALECTRICS</span>
              <span className="brand-sub">Alpha Ampere LiFePO4</span>
            </div>
          </a>

          <nav className="nav-links">
            <a href="#catalog" className="hover:text-amber-400 transition">Catalog</a>
            <a href="#calculator" className="hover:text-amber-400 transition">Solar Calculator</a>
            <a href="#engineering" className="hover:text-amber-400 transition">Engineering Specs</a>
            <a href="#contact" className="hover:text-amber-400 transition">Contact Us</a>
          </nav>

          <div className="nav-actions">
            <button 
              onClick={handleWhatsApp}
              className="button-whatsapp hidden sm:inline-flex py-2.5 px-5 text-xs font-extrabold"
            >
              <Smartphone className="w-4 h-4" />
              <span>+92 309 8000565</span>
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="sm:hidden p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950 border-b border-slate-800 px-6 py-6 space-y-4">
          <a 
            href="#catalog" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-bold hover:text-amber-400 text-base"
          >
            Catalog
          </a>
          <a 
            href="#calculator" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-bold hover:text-amber-400 text-base"
          >
            Solar Calculator
          </a>
          <a 
            href="#engineering" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-bold hover:text-amber-400 text-base"
          >
            Engineering Specs
          </a>
          <a 
            href="#contact" 
            onClick={() => setMobileMenuOpen(false)}
            className="block text-slate-200 font-bold hover:text-amber-400 text-base"
          >
            Contact Us
          </a>

          <div className="pt-4 border-t border-slate-800">
            <button 
              onClick={handleWhatsApp}
              className="w-full button-whatsapp py-3 text-sm font-extrabold"
            >
              <Smartphone className="w-5 h-5" />
              <span>WhatsApp +92 309 8000565</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
