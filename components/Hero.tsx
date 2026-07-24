'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/catalog-data';

export default function Hero() {
  const handleWhatsApp = () => {
    const text = encodeURIComponent('Hello Metalectrics! I am interested in Alpha Ampere LiFePO4 battery quotes.');
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="section-spacing bg-white border-b border-slate-200">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-block px-3 py-1 bg-slate-100 border border-slate-200 rounded-md text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Industrial LiFePO4 Technology
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
              Power You Can Rely On
            </h1>

            <p className="text-slate-600 text-lg sm:text-xl leading-relaxed max-w-xl">
              Metalectrics manufactures high-capacity Alpha Ampere Lithium Iron Phosphate battery packs engineered for solar energy storage, UPS backup, and electric mobility in Pakistan.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a href="#catalog" className="btn-primary py-3.5 px-6 text-sm">
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button onClick={handleWhatsApp} className="btn-secondary py-3.5 px-6 text-sm">
                <Phone className="w-4 h-4 text-emerald-600" />
                <span>WhatsApp Quote</span>
              </button>
            </div>
          </div>

          {/* Right Column: Clean Static Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-center justify-center">
              <Image 
                src="/images/products/24v1-hero.png"
                alt="Alpha Ampere 24V 100Ah LiFePO4 Battery Pack"
                width={360}
                height={360}
                priority
                className="object-contain hover:scale-[1.02] transition-transform duration-200"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
