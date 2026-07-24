'use client';

import React from 'react';
import { Zap, Phone, Mail, MapPin, Clock, Smartphone } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/catalog-data';

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
    </svg>
  );
}

function YoutubeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function Footer() {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}`, '_blank');
  };

  return (
    <footer id="contact" className="py-16 bg-[#04070d] border-t border-slate-800/80 text-white">
      <div className="shell">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black">
                <Zap className="w-6 h-6 fill-slate-950" />
              </div>
              <div>
                <div className="font-extrabold text-white text-xl">METALECTRICS</div>
                <div className="text-xs text-amber-400 font-bold uppercase tracking-wider">Alpha Ampere LiFePO4 Systems</div>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Metalectrics is a premier Pakistani energy engineering firm specializing in advanced Lithium Iron Phosphate (LiFePO4) manufacturing, solar energy storage, and custom battery management solutions.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href={COMPANY_DETAILS.socials.facebook} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition">
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a href={COMPANY_DETAILS.socials.instagram} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition">
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a href={COMPANY_DETAILS.socials.youtube} target="_blank" rel="noreferrer" className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-amber-400 hover:border-amber-500/50 transition">
                <YoutubeIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-extrabold text-white text-base mb-4">Products & Solutions</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#catalog" className="hover:text-amber-400 transition">Alpha Ampere 51.2V 100Ah</a></li>
              <li><a href="#catalog" className="hover:text-amber-400 transition">Alpha Ampere 24V 100Ah</a></li>
              <li><a href="#catalog" className="hover:text-amber-400 transition">Alpha Ampere 12V 100Ah</a></li>
              <li><a href="#catalog" className="hover:text-amber-400 transition">Self-Start Bike Lithium Battery</a></li>
              <li><a href="#catalog" className="hover:text-amber-400 transition">REPT 3.2V 100Ah Cells</a></li>
              <li><a href="#catalog" className="hover:text-amber-400 transition">JK Active Balancer BMS</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-white text-base mb-4">Engineering</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#calculator" className="hover:text-amber-400 transition">Solar Sizing Calculator</a></li>
              <li><a href="#engineering" className="hover:text-amber-400 transition">8,000 Cycle Life Specs</a></li>
              <li><a href="#engineering" className="hover:text-amber-400 transition">Bluetooth Telemetry App</a></li>
              <li><a href="#engineering" className="hover:text-amber-400 transition">Custom Battery Packs</a></li>
              <li><a href="#engineering" className="hover:text-amber-400 transition">Warranty & Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-extrabold text-white text-base mb-4">Contact Headquarters</h4>
            <ul className="space-y-3 text-sm text-slate-300">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-1" />
                <span>{COMPANY_DETAILS.address}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{COMPANY_DETAILS.phonePrimary}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-sky-400 shrink-0" />
                <span>{COMPANY_DETAILS.emailPrimary}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>{COMPANY_DETAILS.businessHours}</span>
              </li>
            </ul>

            <div className="mt-4 pt-4 border-t border-slate-800">
              <button 
                onClick={handleWhatsApp}
                className="button-whatsapp w-full py-3 text-xs font-bold"
              >
                <Smartphone className="w-4 h-4" />
                <span>WhatsApp Quotation</span>
              </button>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>© {new Date().getFullYear()} Metalectrics. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-amber-400 transition">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-amber-400 transition">Terms of Service</a>
            <span>•</span>
            <a href="#" className="hover:text-amber-400 transition">Warranty Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
