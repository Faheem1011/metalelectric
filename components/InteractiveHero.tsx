'use client';

import React, { useState, useRef, MouseEvent } from 'react';
import Image from 'next/image';
import { Zap, ShieldCheck, Cpu, Smartphone, Sparkles, ChevronRight, Activity } from 'lucide-react';
import { COMPANY_DETAILS } from '@/lib/catalog-data';

interface Hotspot {
  id: string;
  title: string;
  subtitle: string;
  xPercent: number;
  yPercent: number;
  description: string;
}

const HOTSPOTS: Hotspot[] = [
  {
    id: 'bms',
    title: 'Smart BMS Controller',
    subtitle: 'Integrated Bluetooth & Overcurrent Shield',
    xPercent: 32,
    yPercent: 28,
    description: 'Advanced solid-state BMS providing cell balancing, temperature monitoring, and protection against overcharge, short circuits, and thermal runaway.'
  },
  {
    id: 'cells',
    title: 'Grade-A LiFePO4 Cells',
    subtitle: '8000+ Cycles @ 80% DOD',
    xPercent: 68,
    yPercent: 42,
    description: 'Prismatic Lithium Iron Phosphate cells offering maximum thermal stability, zero explosive risk, and 15+ years of daily solar cycling.'
  },
  {
    id: 'terminals',
    title: 'Laser-Welded Copper Busbars',
    subtitle: 'Ultra-Low Resistance 1C Discharge',
    xPercent: 48,
    yPercent: 18,
    description: 'Heavy-duty M8 laser-welded copper terminals engineered for continuous 100A output and peak 200A inverter surge handling.'
  },
  {
    id: 'casing',
    title: 'Industrial Metal Alloy Chassis',
    subtitle: 'IP65 Weather & Impact Guard',
    xPercent: 55,
    yPercent: 72,
    description: 'Precision engineered metal enclosure protecting internal cell stacks from vibration, moisture, and harsh environments.'
  }
];

export default function InteractiveHero() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 });
  const [activeHotspot, setActiveHotspot] = useState<Hotspot | null>(HOTSPOTS[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rY = ((x - centerX) / centerX) * 18;
    const rX = -((y - centerY) / centerY) * 18;

    setRotateX(rX);
    setRotateY(rY);

    setGlarePos({
      x: Math.round((x / rect.width) * 100),
      y: Math.round((y / rect.height) * 100)
    });
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePos({ x: 50, y: 50 });
  };

  const handleWhatsAppQuote = () => {
    const text = encodeURIComponent(
      `Hello Metalectrics! I am interested in the Alpha Ampere 24V 100Ah LiFePO4 Battery featured on your website. Please share price details and delivery to my location.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-16 lg:pb-28 bg-[#080c14]">
      {/* Ambient background lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="shell relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-extrabold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Next-Gen LiFePO4 Technology</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.05]">
              Powering Tomorrow with <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-emerald-400 bg-clip-text text-transparent">
                Premium Lithium Energy
              </span>
            </h1>

            <p className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-xl">
              Metalectrics manufactures high-performance <strong className="text-slate-200">Alpha Ampere</strong> Lithium Iron Phosphate (LiFePO4) battery packs for residential solar, UPS backup, and electric mobility in Pakistan.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-amber-400">8,000+</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Deep Cycles @ 80% DOD</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-emerald-400">15 Yrs</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Designed Lifespan</div>
              </div>
              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                <div className="text-2xl sm:text-3xl font-black text-sky-400">100%</div>
                <div className="text-xs text-slate-400 font-medium mt-1">Safe LiFePO4 Grade-A</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button 
                onClick={handleWhatsAppQuote}
                className="button-primary text-base py-4 px-8"
              >
                <Smartphone className="w-5 h-5" />
                <span>Instant WhatsApp Quote</span>
              </button>

              <a 
                href="#catalog" 
                className="button-secondary text-base py-4 px-8"
              >
                <span>Browse Products</span>
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4 text-xs text-slate-400 font-semibold border-t border-slate-800/80">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>5-Year Warranty</span>
              </div>
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-amber-400" />
                <span>Smart Bluetooth Telemetry</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-sky-400" />
                <span>Made in Pakistan</span>
              </div>
            </div>

          </div>

          {/* Right Interactive Pseudo-3D Battery Viewer */}
          <div className="lg:col-span-6 flex flex-col items-center">
            
            <div 
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              className="relative w-full max-w-[500px] h-[460px] sm:h-[500px] perspective-1000 cursor-grab active:cursor-grabbing select-none"
            >
              
              <div 
                className="w-full h-full relative preserve-3d transition-transform duration-150 ease-out"
                style={{
                  transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
                }}
              >
                
                {/* Reactive Ground Shadow */}
                <div 
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-[40px] bg-black/60 rounded-full blur-[25px] pointer-events-none transition-all duration-150"
                  style={{
                    transform: `translate3d(${rotateY * -2}px, ${rotateX * 2}px, -40px) scale(${1 - Math.abs(rotateX) / 40})`
                  }}
                />

                {/* Back Ambient Panel */}
                <div className="absolute inset-4 rounded-3xl bg-gradient-to-br from-amber-500/20 via-slate-800/40 to-emerald-500/20 border border-amber-500/30 backdrop-blur-xl shadow-2xl" />

                {/* Battery Image Layer */}
                <div className="absolute inset-0 flex items-center justify-center p-6 preserve-3d">
                  <div className="relative w-[340px] sm:w-[380px] h-[340px] sm:h-[380px]">
                    
                    <Image 
                      src="/images/products/24v1-hero.png"
                      alt="Alpha Ampere 24V 100Ah LiFePO4 Lithium Battery 3D Render"
                      fill
                      priority
                      className="object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.8)]"
                    />

                    {/* Glare Reflection overlay */}
                    <div 
                      className="absolute inset-0 rounded-2xl pointer-events-none mix-blend-overlay opacity-60"
                      style={{
                        background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0) 60%)`
                      }}
                    />

                    {/* Hotspot Pins */}
                    {HOTSPOTS.map((hs) => {
                      const isActive = activeHotspot?.id === hs.id;
                      return (
                        <button
                          key={hs.id}
                          onClick={() => setActiveHotspot(hs)}
                          className={`absolute -translate-x-1/2 -translate-y-1/2 z-30 transition-transform duration-200 hover:scale-125 ${
                            isActive ? 'scale-125' : 'scale-100'
                          }`}
                          style={{
                            left: `${hs.xPercent}%`,
                            top: `${hs.yPercent}%`,
                            transform: `translate3d(-50%, -50%, 40px)`
                          }}
                          title={hs.title}
                        >
                          <span className="relative flex h-6 w-6 items-center justify-center">
                            <span className={`absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping ${
                              isActive ? 'bg-amber-400' : 'bg-emerald-400'
                            }`} />
                            <span className={`relative inline-flex h-4 w-4 rounded-full border-2 border-white ${
                              isActive ? 'bg-amber-500' : 'bg-emerald-500'
                            }`} />
                          </span>
                        </button>
                      );
                    })}

                  </div>
                </div>

                {/* Floating 3D Badge 1 */}
                <div 
                  className="absolute top-6 right-2 sm:-right-4 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-amber-500/40 text-white shadow-2xl backdrop-blur-md pointer-events-none preserve-3d"
                  style={{ transform: 'translate3d(0, 0, 50px)' }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse" />
                    <span className="text-xs font-black tracking-wider uppercase text-amber-400">Alpha 24V 100Ah</span>
                  </div>
                  <div className="text-sm font-extrabold text-white mt-0.5">2.56kWh Energy Pack</div>
                </div>

                {/* Floating 3D Badge 2 */}
                <div 
                  className="absolute bottom-8 -left-2 sm:-left-6 px-4 py-2.5 rounded-xl bg-slate-900/90 border border-emerald-500/40 text-white shadow-2xl backdrop-blur-md pointer-events-none preserve-3d"
                  style={{ transform: 'translate3d(0, 0, 45px)' }}
                >
                  <div className="flex items-center gap-2">
                    <Activity className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold text-slate-300">Bluetooth Telemetry</span>
                  </div>
                  <div className="text-xs text-emerald-400 font-extrabold mt-0.5">Smart Phone Sync</div>
                </div>

              </div>

              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[11px] font-bold text-slate-500 uppercase tracking-widest pointer-events-none flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Move cursor to tilt 3D depth</span>
              </div>
            </div>

            {/* Active Hotspot Drawer */}
            {activeHotspot && (
              <div className="w-full max-w-[480px] mt-10 p-5 rounded-2xl bg-slate-900/90 border border-amber-500/30 backdrop-blur-xl shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-amber-400" />
                      <h4 className="text-base font-bold text-white">{activeHotspot.title}</h4>
                    </div>
                    <p className="text-xs font-semibold text-amber-400/90 mt-0.5">{activeHotspot.subtitle}</p>
                    <p className="text-xs text-slate-300 mt-2 leading-relaxed">{activeHotspot.description}</p>
                  </div>
                </div>
              </div>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}
