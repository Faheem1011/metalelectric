'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from 'lucide-react';
import { PRODUCTS, Product, COMPANY_DETAILS } from '@/lib/catalog-data';

interface FeaturedProductsProps {
  onSelectProduct: (product: Product) => void;
}

export default function FeaturedProducts({ onSelectProduct }: FeaturedProductsProps) {
  const featuredList = PRODUCTS.slice(0, 4);

  const handleWhatsAppQuote = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello Metalectrics! I would like a price quotation for: ${product.name} (${product.shortSpec}).`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="section-spacing bg-white">
      <div className="shell">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <h2 className="section-title">Featured Storage Systems</h2>
            <p className="text-slate-600 text-base m-0">Our most popular lithium batteries for home solar and UPS backup.</p>
          </div>
          <a href="#catalog" className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1">
            <span>View All Products</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredList.map((product) => (
            <div 
              key={product.id}
              onClick={() => onSelectProduct(product)}
              className="card-clean flex flex-col justify-between cursor-pointer group"
            >
              <div>
                <div className="relative w-full h-48 bg-slate-50 border border-slate-100 rounded-lg flex items-center justify-center p-4 mb-4">
                  <Image 
                    src={product.images[0]} 
                    alt={product.name}
                    fill
                    className="object-contain p-2 group-hover:scale-[1.03] transition-transform duration-200"
                  />
                </div>

                <div className="text-xs font-semibold text-blue-600 mb-1">{product.shortSpec}</div>
                <h3 className="text-base font-bold text-slate-900 leading-snug line-clamp-2 mb-2">
                  {product.name}
                </h3>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <div className="text-[11px] text-slate-500 font-medium">Price</div>
                  <div className="text-base font-bold text-slate-900">Rs {product.price.toLocaleString()}</div>
                </div>

                <button 
                  onClick={(e) => handleWhatsAppQuote(product, e)}
                  className="btn-secondary py-2 px-3 text-xs"
                >
                  <span>Quote</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
