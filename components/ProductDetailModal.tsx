'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, CheckCircle2, Smartphone, Activity } from 'lucide-react';
import { Product, COMPANY_DETAILS } from '@/lib/catalog-data';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  if (!product) return null;

  const handleWhatsAppQuote = () => {
    const message = encodeURIComponent(
      `Hello Metalectrics! I want to inquire about: ${product.name} (SKU: ${product.sku}).\n` +
      `Price: Rs ${product.price.toLocaleString()}\n` +
      `Please provide delivery details and availability.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${message}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl my-8 text-white max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
            <span className="text-xs font-mono font-bold text-amber-400 uppercase tracking-widest">{product.sku}</span>
          </div>
          <button 
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-grow">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            <div className="md:col-span-6 space-y-4">
              <div className="relative w-full h-[320px] sm:h-[360px] rounded-2xl bg-gradient-to-b from-slate-950 to-slate-900 border border-slate-800 overflow-hidden flex items-center justify-center">
                <Image 
                  src={product.images[selectedImageIndex] || product.images[0]} 
                  alt={product.name}
                  fill
                  className="object-contain p-4"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-amber-500/20 border border-amber-500/40 text-amber-400 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {product.badge}
                  </span>
                )}
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-3">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden border-2 transition ${
                        selectedImageIndex === idx ? 'border-amber-400 scale-105' : 'border-slate-800 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="md:col-span-6 space-y-5">
              <div>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{product.category} • {product.subcategory}</span>
                <h2 className="text-2xl sm:text-3xl font-black text-white mt-1 leading-tight">{product.name}</h2>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-amber-400">Rs {product.price.toLocaleString()}</span>
                {product.oldPrice && (
                  <span className="text-base text-slate-500 line-through">Rs {product.oldPrice.toLocaleString()}</span>
                )}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">{product.description}</p>

              {product.recommendedFor && (
                <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-xs text-amber-300 font-semibold">
                  ⚡ Recommended For: {product.recommendedFor}
                </div>
              )}

              <div className="space-y-2 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Key Highlights</h4>
                <ul className="space-y-1.5 text-xs text-slate-300">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4">
                <button 
                  onClick={handleWhatsAppQuote}
                  className="w-full button-whatsapp py-4 text-base font-extrabold"
                >
                  <Smartphone className="w-5 h-5" />
                  <span>Request WhatsApp Quotation</span>
                </button>
              </div>

            </div>

          </div>

          <div className="pt-6 border-t border-slate-800">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <Activity className="w-5 h-5 text-amber-400" />
              <span>Technical Specifications Matrix</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 bg-slate-950/60 p-6 rounded-2xl border border-slate-800">
              {Object.entries(product.specifications).map(([key, val]) => (
                <div key={key} className="flex justify-between py-2 border-b border-slate-800/60 text-xs">
                  <span className="text-slate-400 font-semibold">{key}</span>
                  <span className="text-slate-100 font-mono font-bold text-right ml-4">{val}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
