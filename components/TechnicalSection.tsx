import React from 'react';
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function TechnicalSection() {
  return (
    <section id="technical" className="section-spacing bg-white border-b border-slate-200">
      <div className="shell">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hardware Image */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[420px] aspect-square bg-slate-50 border border-slate-200 rounded-2xl p-6 flex items-center justify-center">
              <Image 
                src="/images/products/24v1-hero.png" 
                alt="Alpha Ampere Hardware Architecture"
                width={360}
                height={360}
                className="object-contain"
              />
            </div>
          </div>

          {/* Technical Facts */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider mb-2">Engineering Standards</div>
              <h2 className="section-title">Why This Battery?</h2>
              <p className="text-slate-600 text-base">Direct technical facts about our Lithium Iron Phosphate (LiFePO4) battery construction.</p>
            </div>

            <div className="space-y-4">
              
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Grade-A Prismatic Cells</div>
                  <div className="text-xs text-slate-600 mt-0.5">Certified new Grade-A LiFePO4 cells delivering 8,000+ deep cycles at 80% Depth of Discharge with zero explosive risk.</div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">Smart Solid-State BMS</div>
                  <div className="text-xs text-slate-600 mt-0.5">Integrated Battery Management System with active cell balancing, Bluetooth app telemetry, and automatic overcharge/temperature cutoff.</div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-bold text-slate-900">15-Year Service Lifespan</div>
                  <div className="text-xs text-slate-600 mt-0.5">Maintenance-free operation requiring zero water refills. Outlasts tubular lead-acid batteries by over 5x in Pakistani climate conditions.</div>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
