'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Smartphone, Eye, Star, Zap } from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product, COMPANY_DETAILS } from '@/lib/catalog-data';
import ProductDetailModal from './ProductDetailModal';

export default function ProductCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeProductModal, setActiveProductModal] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppDirect = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello Metalectrics! I would like to purchase / order: ${product.name} (SKU: ${product.sku}).\n` +
      `Price: Rs ${product.price.toLocaleString()}`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="catalog" className="py-20 bg-[#080c14] relative">
      
      <div className="shell">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <Zap className="w-4 h-4" />
              <span>Alpha Ampere Catalog</span>
            </div>
            <h2 className="section-title">
              LiFePO4 <span>Products & Accessories</span>
            </h2>
            <p className="section-subtitle mt-2">
              Grade-A Lithium Iron Phosphate solar storage batteries, motorcycle batteries, and smart BMS accessories.
            </p>
          </div>

          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search products or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-11 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-amber-500 transition"
            />
          </div>
        </div>

        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                selectedCategory === cat 
                  ? 'bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/20' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-slate-900/50 rounded-3xl border border-slate-800">
            <p className="text-slate-400 text-base">No products match your search filter "{searchQuery}".</p>
            <button 
              onClick={() => { setSearchQuery(''); setSelectedCategory('All Products'); }}
              className="mt-4 button-secondary text-xs"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => setActiveProductModal(product)}
                className="group relative bg-slate-900/80 border border-slate-800 hover:border-amber-500/40 rounded-3xl overflow-hidden backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-amber-500/10 flex flex-col cursor-pointer"
              >
                <div className="relative h-64 w-full bg-gradient-to-b from-slate-950 to-slate-900 flex items-center justify-center p-6 overflow-hidden">
                  <Image 
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                  />

                  {product.badge && (
                    <span className="absolute top-4 left-4 bg-slate-950/80 border border-amber-500/30 text-amber-400 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider backdrop-blur-md">
                      {product.badge}
                    </span>
                  )}

                  <span className="absolute top-4 right-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold px-2.5 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    In Stock
                  </span>
                </div>

                <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                  
                  <div>
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                      <span className="font-mono">{product.sku}</span>
                      {product.rating && (
                        <span className="flex items-center gap-1 text-amber-400 font-bold">
                          <Star className="w-3.5 h-3.5 fill-amber-400" />
                          {product.rating} ({product.reviewsCount})
                        </span>
                      )}
                    </div>

                    <h3 className="text-lg font-extrabold text-white group-hover:text-amber-400 transition-colors line-clamp-2 leading-snug">
                      {product.name}
                    </h3>

                    <p className="text-xs text-slate-400 mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {Object.entries(product.specifications).slice(0, 3).map(([k, v]) => (
                      <span key={k} className="text-[10px] font-mono bg-slate-950 text-slate-300 px-2 py-0.5 rounded-md border border-slate-800">
                        {k}: <strong className="text-amber-400">{v}</strong>
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">PKR Price</div>
                      <div className="flex items-baseline gap-2">
                        <span className="text-xl font-black text-white">Rs {product.price.toLocaleString()}</span>
                        {product.oldPrice && (
                          <span className="text-xs text-slate-500 line-through">Rs {product.oldPrice.toLocaleString()}</span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button 
                        onClick={(e) => { e.stopPropagation(); setActiveProductModal(product); }}
                        className="p-2.5 rounded-xl bg-slate-800 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                        title="Quick View Specifications"
                      >
                        <Eye className="w-4 h-4" />
                      </button>

                      <button 
                        onClick={(e) => handleWhatsAppDirect(product, e)}
                        className="button-whatsapp py-2.5 px-3.5 text-xs"
                        title="Order via WhatsApp"
                      >
                        <Smartphone className="w-4 h-4" />
                        <span>Order</span>
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      <ProductDetailModal 
        product={activeProductModal}
        onClose={() => setActiveProductModal(null)}
      />

    </section>
  );
}
