'use client';

import React, { useState, useMemo } from 'react';
import { Calculator, Zap, Clock, CheckCircle2, Smartphone } from 'lucide-react';
import { PRODUCTS, COMPANY_DETAILS } from '@/lib/catalog-data';

interface Appliance {
  id: string;
  name: string;
  watts: number;
  icon: string;
  defaultQty: number;
}

const APPLIANCES: Appliance[] = [
  { id: 'fans', name: 'Ceiling Fans', watts: 80, icon: '🌀', defaultQty: 4 },
  { id: 'lights', name: 'LED Lights / Bulbs', watts: 15, icon: '💡', defaultQty: 8 },
  { id: 'tv', name: 'LED TV / Screen', watts: 100, icon: '📺', defaultQty: 1 },
  { id: 'fridge', name: 'Inverter Refrigerator', watts: 250, icon: '❄️', defaultQty: 1 },
  { id: 'ac', name: '1.5 Ton Inverter AC', watts: 1400, icon: '❄️', defaultQty: 0 },
  { id: 'pump', name: 'Water Pump / Motor', watts: 750, icon: '🚰', defaultQty: 0 },
  { id: 'laptops', name: 'Laptops / Computers', watts: 120, icon: '💻', defaultQty: 2 }
];

export default function SolarCalculator() {
  const [quantities, setQuantities] = useState<Record<string, number>>(() => {
    const init: Record<string, number> = {};
    APPLIANCES.forEach(a => { init[a.id] = a.defaultQty; });
    return init;
  });

  const [backupHours, setBackupHours] = useState<number>(4);

  const updateQuantity = (id: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[id] || 0;
      const updated = Math.max(0, current + delta);
      return { ...prev, [id]: updated };
    });
  };

  const totalWatts = useMemo(() => {
    return APPLIANCES.reduce((sum, app) => {
      return sum + (quantities[app.id] || 0) * app.watts;
    }, 0);
  }, [quantities]);

  const requiredEnergyWh = useMemo(() => {
    return totalWatts * backupHours;
  }, [totalWatts, backupHours]);

  const requiredEnergyKWh = useMemo(() => {
    return (requiredEnergyWh / 1000).toFixed(2);
  }, [requiredEnergyWh]);

  const recommendedProduct = useMemo(() => {
    if (requiredEnergyWh <= 1300) {
      return PRODUCTS.find(p => p.id === 'aa-12-100') || PRODUCTS[2];
    } else if (requiredEnergyWh <= 2800) {
      return PRODUCTS.find(p => p.id === 'aa-24-100') || PRODUCTS[1];
    } else {
      return PRODUCTS.find(p => p.id === 'aa-51-100') || PRODUCTS[0];
    }
  }, [requiredEnergyWh]);

  const handleWhatsAppQuote = () => {
    const activeSummary = APPLIANCES
      .filter(app => (quantities[app.id] || 0) > 0)
      .map(app => `${quantities[app.id]}x ${app.name}`)
      .join(', ');

    const message = encodeURIComponent(
      `Hello Metalectrics! I calculated my battery load on your website:\n` +
      `- Total Running Load: ${totalWatts} Watts\n` +
      `- Appliances: ${activeSummary || 'Custom'}\n` +
      `- Desired Backup Time: ${backupHours} Hours\n` +
      `- Required Energy Storage: ${requiredEnergyKWh} kWh\n\n` +
      `Recommended Battery: ${recommendedProduct.name} (Rs ${recommendedProduct.price.toLocaleString()}). Please confirm stock and delivery to my location.`
    );

    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <section id="calculator" className="py-20 bg-[#080c14] relative overflow-hidden border-t border-slate-800">
      <div className="shell">
        
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-wider mb-4">
            <Calculator className="w-4 h-4" />
            <span>Interactive Load Estimator</span>
          </div>

          <h2 className="section-title">
            Solar & Backup <span>Sizing Calculator</span>
          </h2>

          <p className="section-subtitle mx-auto mt-4">
            Calculate your exact household energy requirements and match the optimal Alpha Ampere LiFePO4 battery pack for load-shedding or off-grid solar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          <div className="lg:col-span-7 bg-slate-900/80 border border-slate-800 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-4">
              <h3 className="text-xl font-bold text-white">1. Select Appliances</h3>
              <span className="text-xs text-amber-400 font-bold bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/30">
                Continuous Load: {totalWatts} W
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {APPLIANCES.map((app) => {
                const qty = quantities[app.id] || 0;
                return (
                  <div 
                    key={app.id}
                    className={`p-4 rounded-2xl border transition-all ${
                      qty > 0 
                        ? 'bg-slate-800/90 border-amber-500/40 shadow-lg' 
                        : 'bg-slate-950/50 border-slate-800'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl">{app.icon}</span>
                        <div>
                          <div className="text-sm font-bold text-white">{app.name}</div>
                          <div className="text-xs text-slate-400">{app.watts} W each</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-slate-800/60">
                      <span className="text-xs font-semibold text-slate-400">Qty</span>
                      <div className="flex items-center gap-3">
                        <button 
                          onClick={() => updateQuantity(app.id, -1)}
                          className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 font-bold flex items-center justify-center transition"
                        >
                          -
                        </button>
                        <span className="w-6 text-center font-bold text-amber-400 text-sm">{qty}</span>
                        <button 
                          onClick={() => updateQuantity(app.id, 1)}
                          className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 font-bold flex items-center justify-center transition"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <label className="text-sm font-bold text-white flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>2. Backup Hours Required:</span>
                </label>
                <span className="text-lg font-black text-amber-400">{backupHours} Hours</span>
              </div>
              <input 
                type="range"
                min={1}
                max={12}
                step={1}
                value={backupHours}
                onChange={(e) => setBackupHours(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-2 font-medium">
                <span>1 Hr (Short Outage)</span>
                <span>4 Hrs (Standard Load Shedding)</span>
                <span>12 Hrs (Full Overnight)</span>
              </div>
            </div>

          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-slate-900 via-slate-900/95 to-[#0b1322] border border-amber-500/30 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl flex flex-col justify-between">
            
            <div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-amber-400 mb-2 flex items-center gap-1.5">
                <Zap className="w-4 h-4" />
                <span>Calculation Summary</span>
              </div>
              
              <h3 className="text-2xl font-black text-white mb-6">
                Recommended Battery Specification
              </h3>

              <div className="space-y-4 mb-8">
                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-sm text-slate-400 font-medium">Total Power Load</span>
                  <span className="text-lg font-black text-white">{totalWatts} Watts</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-between">
                  <span className="text-sm text-slate-400 font-medium">Total Energy Required</span>
                  <span className="text-xl font-black text-amber-400">{requiredEnergyKWh} kWh</span>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gradient-to-br from-amber-500/10 via-slate-900 to-emerald-500/10 border border-amber-500/40 relative">
                <div className="text-[10px] font-black uppercase tracking-wider text-amber-400 bg-amber-500/20 px-2.5 py-1 rounded-md inline-block mb-2">
                  Optimal Match
                </div>

                <h4 className="text-lg font-bold text-white mb-1">{recommendedProduct.name}</h4>
                <p className="text-xs text-slate-400 mb-3">{recommendedProduct.subcategory}</p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-2xl font-black text-white">Rs {recommendedProduct.price.toLocaleString()}</span>
                  {recommendedProduct.oldPrice && (
                    <span className="text-xs text-slate-500 line-through">Rs {recommendedProduct.oldPrice.toLocaleString()}</span>
                  )}
                </div>

                <ul className="text-xs text-slate-300 space-y-1.5">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>8000+ Cycles • Grade-A LiFePO4</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Smart Bluetooth App Telemetry</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>15-Year Life Expectancy</span>
                  </li>
                </ul>
              </div>

            </div>

            <div className="pt-6 mt-6 border-t border-slate-800">
              <button 
                onClick={handleWhatsAppQuote}
                className="w-full button-whatsapp py-4 text-center justify-center font-extrabold text-sm"
              >
                <Smartphone className="w-5 h-5" />
                <span>Get Exact WhatsApp Quotation</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
