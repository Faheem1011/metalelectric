'use client';

import React, { useState, useMemo } from 'react';
import { PRODUCTS, COMPANY_DETAILS } from '@/lib/catalog-data';
import { Phone } from 'lucide-react';

export default function Calculator() {
  const [fans, setFans] = useState<number>(4);
  const [lights, setLights] = useState<number>(8);
  const [tv, setTv] = useState<number>(1);
  const [hours, setHours] = useState<number>(4);

  const totalWatts = useMemo(() => {
    return fans * 80 + lights * 15 + tv * 100;
  }, [fans, lights, tv]);

  const requiredWh = useMemo(() => {
    return totalWatts * hours;
  }, [totalWatts, hours]);

  const recommendedProduct = useMemo(() => {
    if (requiredWh <= 1300) {
      return PRODUCTS.find(p => p.id === 'aa-12-100') || PRODUCTS[2];
    } else if (requiredWh <= 2800) {
      return PRODUCTS.find(p => p.id === 'aa-24-100') || PRODUCTS[1];
    } else {
      return PRODUCTS.find(p => p.id === 'aa-51-100') || PRODUCTS[0];
    }
  }, [requiredWh]);

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Metalectrics! My calculated load is ${totalWatts} Watts for ${hours} hours backup (${(requiredWh / 1000).toFixed(2)} kWh). ` +
      `Recommended: ${recommendedProduct.name}. Please confirm quote and stock.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="section-spacing bg-slate-50 border-y border-slate-200">
      <div className="shell">
        
        <div className="max-w-xl mx-auto text-center mb-10">
          <h2 className="section-title">Load Sizing Calculator</h2>
          <p className="text-slate-600 text-base m-0">Estimate your household running load to select the correct battery capacity.</p>
        </div>

        <div className="max-w-2xl mx-auto card-clean p-8">
          
          <div className="space-y-6">
            
            {/* Appliance Counters */}
            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <div className="text-sm font-bold text-slate-900">Ceiling Fans</div>
                <div className="text-xs text-slate-500">80W each</div>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setFans(Math.max(0, fans - 1))}
                  className="w-8 h-8 rounded bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-6 text-center font-bold text-slate-900">{fans}</span>
                <button 
                  onClick={() => setFans(fans + 1)}
                  className="w-8 h-8 rounded bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <div className="text-sm font-bold text-slate-900">LED Lights / Bulbs</div>
                <div className="text-xs text-slate-500">15W each</div>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setLights(Math.max(0, lights - 1))}
                  className="w-8 h-8 rounded bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-6 text-center font-bold text-slate-900">{lights}</span>
                <button 
                  onClick={() => setLights(lights + 1)}
                  className="w-8 h-8 rounded bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between py-3 border-b border-slate-100">
              <div>
                <div className="text-sm font-bold text-slate-900">LED Television</div>
                <div className="text-xs text-slate-500">100W each</div>
              </div>
              <div className="flex items-center gap-3">
                <button 
                  onClick={() => setTv(Math.max(0, tv - 1))}
                  className="w-8 h-8 rounded bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 flex items-center justify-center"
                >
                  -
                </button>
                <span className="w-6 text-center font-bold text-slate-900">{tv}</span>
                <button 
                  onClick={() => setTv(tv + 1)}
                  className="w-8 h-8 rounded bg-slate-100 text-slate-700 font-bold hover:bg-slate-200 flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Backup Hours */}
            <div className="py-3">
              <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
                <span>Backup Duration</span>
                <span>{hours} Hours</span>
              </div>
              <input 
                type="range"
                min={1}
                max={12}
                value={hours}
                onChange={(e) => setHours(parseInt(e.target.value))}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* Calculation Result */}
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-slate-500 font-medium">Total Running Load</div>
                <div className="text-xl font-extrabold text-slate-900">{totalWatts} Watts ({ (requiredWh / 1000).toFixed(2) } kWh)</div>
                <div className="text-xs text-blue-600 font-semibold mt-1">Recommended: {recommendedProduct.name}</div>
              </div>

              <button onClick={handleWhatsApp} className="btn-whatsapp text-xs py-2.5 px-4 shrink-0">
                <Phone className="w-4 h-4" />
                <span>Get WhatsApp Quote</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
