'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import InteractiveHero from '@/components/InteractiveHero';
import ProductCatalog from '@/components/ProductCatalog';
import SolarCalculator from '@/components/SolarCalculator';
import EngineeringHighlights from '@/components/EngineeringHighlights';
import Footer from '@/components/Footer';
import { HelpCircle, ChevronDown, ChevronUp, Smartphone } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/catalog-data';

const FAQS = [
  {
    q: 'Why should I choose LiFePO4 batteries over traditional Lead-Acid or Gel batteries?',
    a: 'LiFePO4 (Lithium Iron Phosphate) offers over 8,000 deep cycles (15+ year lifespan) compared to only 500-1,000 cycles for lead-acid. They charge up to 4x faster, lose zero capacity under heavy loads, are 3x lighter, require zero water maintenance, and have zero risk of acid leaks or explosions.'
  },
  {
    q: 'Are Alpha Ampere batteries compatible with my solar inverter in Pakistan?',
    a: 'Yes! Alpha Ampere batteries are fully compatible with all major hybrid and off-grid inverters sold in Pakistan, including Inverex, Crown, SolarMax, Nitrox, InfiniSolar, Huawei, and Growatt (12V, 24V, and 48V/51.2V models).'
  },
  {
    q: 'How does the Smart Bluetooth monitoring feature work?',
    a: 'Our batteries feature an integrated Smart BMS with Bluetooth 5.0. Simply install our smartphone app (Android & iOS) to view real-time state of charge (SOC %), individual cell voltages, temperature sensors, charging/discharging current, and cycle logs directly on your phone.'
  },
  {
    q: 'What warranty is provided with Metalectrics Alpha Ampere batteries?',
    a: 'Metalectrics provides a comprehensive company warranty and after-sales support based in Okara & nationwide in Pakistan. All Grade-A cells are individually tested with QR code validation before pack assembly.'
  },
  {
    q: 'Can I order a custom battery pack size or voltage?',
    a: 'Absolutely! Metalectrics manufactures custom lithium battery packs for specialized electric vehicles, commercial UPS systems, telecom towers, and off-grid solar farms. Contact our engineering team on WhatsApp at +92 309 8000565 for custom quotations.'
  }
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const handleWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}`, '_blank');
  };

  return (
    <main className="min-h-screen bg-[#080c14] text-slate-100 flex flex-col font-sans">
      
      <Navbar />

      <InteractiveHero />

      <div className="marquee-strip">
        <div className="marquee-track flex gap-8">
          <span>⚡ GRADE-A LiFePO4 CELLS</span>
          <span>•</span>
          <span>8,000+ DEEP CYCLES</span>
          <span>•</span>
          <span>15-YEAR LIFESPAN</span>
          <span>•</span>
          <span>SMART BLUETOOTH TELEMETRY</span>
          <span>•</span>
          <span>MADE IN PAKISTAN</span>
          <span>•</span>
          <span>FAST WHATSAPP QUOTATIONS</span>
          <span>•</span>
          <span>1C CONTINUOUS DISCHARGE</span>
          <span>•</span>
          <span>COMPATIBLE WITH ALL HYBRID INVERTERS</span>
          <span>•</span>
          <span>⚡ GRADE-A LiFePO4 CELLS</span>
          <span>•</span>
          <span>8,000+ DEEP CYCLES</span>
          <span>•</span>
          <span>15-YEAR LIFESPAN</span>
          <span>•</span>
          <span>SMART BLUETOOTH TELEMETRY</span>
          <span>•</span>
        </div>
      </div>

      <ProductCatalog />

      <SolarCalculator />

      <EngineeringHighlights />

      {/* FAQ Section */}
      <section className="py-20 bg-[#080c14] border-t border-slate-800">
        <div className="shell">
          <div className="max-w-3xl mx-auto">
            
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
                <HelpCircle className="w-4 h-4" />
                <span>Frequently Asked Questions</span>
              </div>
              <h2 className="section-title">
                Everything You Need to <span>Know</span>
              </h2>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div 
                    key={idx}
                    className="border border-slate-800 rounded-2xl bg-slate-900/60 overflow-hidden transition"
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base text-white hover:text-amber-400 transition"
                    >
                      <span>{faq.q}</span>
                      {isOpen ? <ChevronUp className="w-5 h-5 text-amber-400 shrink-0" /> : <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />}
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/60 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div className="mt-14 p-8 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
              <h3 className="text-xl font-bold text-white">Have a specific technical question or custom battery requirement?</h3>
              <p className="text-sm text-slate-400 max-w-lg mx-auto">
                Speak directly with our engineering team in Okara, Pakistan for custom pack designs, solar load analysis, or reseller pricing.
              </p>
              <button 
                onClick={handleWhatsApp}
                className="button-whatsapp py-3 px-8 text-sm font-extrabold"
              >
                <Smartphone className="w-4 h-4" />
                <span>Chat on WhatsApp (+92 309 8000565)</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      <Footer />

    </main>
  );
}
