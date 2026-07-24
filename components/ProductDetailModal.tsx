'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { X, Phone, Check } from 'lucide-react';
import { Product, COMPANY_DETAILS } from '@/lib/catalog-data';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductDetailModal({ product, onClose }: ProductDetailModalProps) {
  const [activeTab, setActiveTab] = useState<'specs' | 'description' | 'useCases'>('specs');
  const [selectedImageIdx, setSelectedImageIdx] = useState<number>(0);

  if (!product) return null;

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Metalectrics! I want to order / inquire about: ${product.name} (SKU: ${product.sku}). ` +
      `Price: Rs ${product.price.toLocaleString()}. Please provide delivery details.`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div 
        className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden my-8 max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50">
          <div className="text-xs font-mono font-bold text-slate-500">{product.sku}</div>
          <button onClick={onClose} className="p-1 rounded text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
            
            {/* Left: Image */}
            <div className="md:col-span-5 space-y-3">
              <div className="relative w-full aspect-square bg-slate-50 border border-slate-200 rounded-xl p-4 flex items-center justify-center">
                <Image 
                  src={product.images[selectedImageIdx] || product.images[0]} 
                  alt={product.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIdx(idx)}
                      className={`relative w-16 h-16 rounded-md overflow-hidden border ${
                        selectedImageIdx === idx ? 'border-blue-600' : 'border-slate-200'
                      }`}
                    >
                      <Image src={img} alt="" fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right: Info */}
            <div className="md:col-span-7 space-y-4">
              <div>
                <div className="text-xs font-semibold text-blue-600 mb-1">{product.category}</div>
                <h2 className="text-xl font-extrabold text-slate-900 leading-tight">{product.name}</h2>
              </div>

              <div className="text-2xl font-extrabold text-slate-900">
                Rs {product.price.toLocaleString()}
                {product.oldPrice && (
                  <span className="text-xs text-slate-400 line-through ml-3">Rs {product.oldPrice.toLocaleString()}</span>
                )}
              </div>

              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-xs text-slate-700 space-y-1">
                <div className="font-bold text-slate-900">Key Specification</div>
                <div>{product.shortSpec}</div>
              </div>

              <button onClick={handleWhatsApp} className="btn-whatsapp w-full py-3 text-sm">
                <Phone className="w-4 h-4" />
                <span>Get WhatsApp Quote</span>
              </button>
            </div>

          </div>

          {/* Tabs Section */}
          <div className="pt-4 border-t border-slate-200">
            <div className="flex gap-4 border-b border-slate-200 pb-2 mb-4">
              <button 
                onClick={() => setActiveTab('specs')}
                className={`text-xs font-bold pb-1 transition ${
                  activeTab === 'specs' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'
                }`}
              >
                Specifications
              </button>
              <button 
                onClick={() => setActiveTab('description')}
                className={`text-xs font-bold pb-1 transition ${
                  activeTab === 'description' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'
                }`}
              >
                Description
              </button>
              <button 
                onClick={() => setActiveTab('useCases')}
                className={`text-xs font-bold pb-1 transition ${
                  activeTab === 'useCases' ? 'text-blue-600 border-b-2 border-blue-600' : 'text-slate-500'
                }`}
              >
                Use Cases
              </button>
            </div>

            {/* Tab 1: Specs */}
            {activeTab === 'specs' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                {Object.entries(product.specifications).map(([key, val]) => (
                  <div key={key} className="flex justify-between py-1.5 border-b border-slate-100">
                    <span className="text-slate-500 font-medium">{key}</span>
                    <span className="text-slate-900 font-semibold text-right">{val}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Tab 2: Description */}
            {activeTab === 'description' && (
              <div className="text-xs text-slate-700 leading-relaxed space-y-3">
                <p>{product.description}</p>
                <div className="font-bold text-slate-900 pt-2">Features List:</div>
                <ul className="space-y-1.5 pl-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tab 3: Use Cases */}
            {activeTab === 'useCases' && (
              <div className="space-y-2 text-xs">
                {product.useCases.map((useCase, idx) => (
                  <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200 rounded text-slate-800 font-medium flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                    <span>{useCase}</span>
                  </div>
                ))}
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
