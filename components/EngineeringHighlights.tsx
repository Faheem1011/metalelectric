'use client';

import React from 'react';
import { ShieldCheck, Cpu, Activity, RefreshCw, Zap, BatteryCharging } from 'lucide-react';

const HIGHLIGHTS = [
  {
    icon: RefreshCw,
    title: '8,000+ Deep Cycles',
    subtitle: '15-Year Service Life',
    description: 'Alpha Ampere LiFePO4 cells maintain over 80% remaining capacity after 8,000 daily charge/discharge cycles—outlasting tubular lead-acid by over 5x.'
  },
  {
    icon: Activity,
    title: 'Smart Bluetooth Telemetry',
    subtitle: 'Real-Time App Monitoring',
    description: 'Connect your smartphone via Bluetooth to view live cell voltage, state-of-charge percentage, temperature, current flow, and BMS diagnostic logs.'
  },
  {
    icon: ShieldCheck,
    title: 'Grade-A Thermal Safety',
    subtitle: 'Zero Explosion Risk',
    description: 'Lithium Iron Phosphate (LiFePO4) chemistry eliminates thermal runaway and oxygen release, making it safe for indoor residential installation.'
  },
  {
    icon: Zap,
    title: '1C Continuous Discharge',
    subtitle: 'Heavy Inverter Surge Power',
    description: 'Laser-welded copper terminals and high-current BMS handle instant inverter motor surges (water pumps, ACs, compressors) without voltage dip.'
  },
  {
    icon: Cpu,
    title: 'Integrated Active Balancing',
    subtitle: 'Automatic Cell Equalization',
    description: 'Built-in active BMS continuously transfers energy between individual cells to prevent cell drift and maximize usable battery bank capacity.'
  },
  {
    icon: BatteryCharging,
    title: '98% Charging Efficiency',
    subtitle: 'Rapid Solar Energy Capture',
    description: 'Recovers up to 98% of solar panel generation with sub-2 hour rapid charge capability—ideal for short solar windows during winter or cloudy days.'
  }
];

export default function EngineeringHighlights() {
  return (
    <section id="engineering" className="py-20 bg-[#080c14] relative border-t border-slate-800">
      <div className="shell">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Cpu className="w-4 h-4" />
            <span>Industrial Engineering Standards</span>
          </div>

          <h2 className="section-title">
            Engineered for <span>Uncompromising Reliability</span>
          </h2>

          <p className="section-subtitle mx-auto mt-3">
            Why leading solar installers and commercial facilities across Pakistan trust Alpha Ampere LiFePO4 battery systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {HIGHLIGHTS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div 
                key={idx}
                className="p-8 rounded-3xl bg-slate-900/60 border border-slate-800 hover:border-amber-500/40 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 space-y-4"
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-emerald-500/10 border border-amber-500/30 text-amber-400 flex items-center justify-center">
                  <Icon className="w-7 h-7" />
                </div>

                <div>
                  <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-widest">{item.subtitle}</span>
                  <h3 className="text-xl font-extrabold text-white mt-1">{item.title}</h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900/90 to-[#0b1322] border border-amber-500/30 backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-2 max-w-xl">
            <div className="inline-block text-xs font-bold text-amber-400 uppercase tracking-widest bg-amber-500/10 px-3 py-1 rounded-md border border-amber-500/30">
              LiFePO4 vs Lead-Acid / Tubular
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Upgrade Your Solar System Today
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Replace bulky, acid-leaking lead-acid batteries with maintenance-free Alpha Ampere LiFePO4 packs. Enjoy 3x lighter weight, 5x longer life, and zero water refills.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
            <a href="#catalog" className="button-primary w-full sm:w-auto py-4 px-8 text-sm">
              Explore Alpha Battery Packs
            </a>
            <a href="#calculator" className="button-secondary w-full sm:w-auto py-4 px-8 text-sm">
              Run Sizing Calculator
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
