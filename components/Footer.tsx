'use client';

import React from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/catalog-data';

export default function Footer() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}`, '_blank');
  };

  return (
    <>
      {/* CTA Section */}
      <section className="bg-slate-50 border-t border-slate-200 py-16 text-center">
        <div className="shell max-w-xl mx-auto space-y-4">
          <h2 className="text-2xl font-extrabold text-slate-900">Need Help Choosing?</h2>
          <p className="text-slate-600 text-sm">Speak directly with our technical engineering team in Okara, Pakistan to analyze your solar inverter or custom battery requirements.</p>
          <div className="pt-2">
            <button onClick={handleWhatsApp} className="btn-whatsapp py-3 px-6 text-sm font-semibold">
              <Phone className="w-4 h-4" />
              <span>Get Quote on WhatsApp (+92 309 8000565)</span>
            </button>
          </div>
        </div>
      </section>

      {/* Clean Footer */}
      <footer id="contact" className="bg-white border-t border-slate-200 py-10">
        <div className="shell">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-600">
            
            <div className="flex items-baseline gap-2">
              <span className="font-bold text-slate-900 text-sm">METALECTRICS</span>
              <span className="text-slate-500 font-medium">Alpha Ampere LiFePO4 Energy</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6">
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{COMPANY_DETAILS.phonePrimary}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{COMPANY_DETAILS.emailPrimary}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{COMPANY_DETAILS.address}</span>
              </div>
            </div>

            <div>
              © {new Date().getFullYear()} Metalectrics. All rights reserved.
            </div>

          </div>
        </div>
      </footer>
    </>
  );
}
