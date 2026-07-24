'use client';

import React, { useState, useMemo } from 'react';
import Image from 'next/image';
import { Search, Phone, Eye } from 'lucide-react';
import { PRODUCTS, CATEGORIES, Product, COMPANY_DETAILS } from '@/lib/catalog-data';
import ProductDetailModal from './ProductDetailModal';

interface ProductCatalogProps {
  selectedProductModal?: Product | null;
  setSelectedProductModal?: (p: Product | null) => void;
}

export default function ProductCatalog({ selectedProductModal, setSelectedProductModal }: ProductCatalogProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Products');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [localActiveModal, setLocalActiveModal] = useState<Product | null>(null);

  const activeModal = selectedProductModal !== undefined ? selectedProductModal : localActiveModal;
  const setActiveModal = setSelectedProductModal || setLocalActiveModal;

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(product => {
      const matchesCategory = selectedCategory === 'All Products' || product.category === selectedCategory;
      const matchesSearch = searchQuery === '' || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.sku.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.shortSpec.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleWhatsAppQuote = (product: Product, e: React.MouseEvent) => {
    e.stopPropagation();
    const text = encodeURIComponent(
      `Hello Metalectrics! I am interested in ordering / quote for: ${product.name} (SKU: ${product.sku}).`
    );
    window.open(`https://wa.me/${COMPANY_DETAILS.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="catalog" className="section-spacing bg-white">
      <div className="shell">
        
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="section-title">Product Catalog</h2>
            <p className="text-slate-600 text-base m-0">Browse our complete lineup of Grade-A LiFePO4 batteries, bike batteries, and cells.</p>
          </div>

          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text"
              placeholder="Search products or SKU..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex gap-2 overflow-x-auto pb-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-md text-xs font-semibold whitespace-nowrap transition ${
                selectedCategory === cat 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-lg border border-slate-200">
            <p className="text-xs text-slate-500">No products match your search filter.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                onClick={() => setActiveModal(product)}
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
                  <h3 className="text-sm font-bold text-slate-900 leading-snug line-clamp-2 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-3">
                    {product.description}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] text-slate-500 font-medium">Price</div>
                    <div className="text-sm font-bold text-slate-900">Rs {product.price.toLocaleString()}</div>
                  </div>

                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => { e.stopPropagation(); setActiveModal(product); }}
                      className="p-2 rounded bg-slate-100 text-slate-700 hover:bg-slate-200"
                      title="View Details"
                    >
                      <Eye className="w-3.5 h-3.5" />
                    </button>
                    <button 
                      onClick={(e) => handleWhatsAppQuote(product, e)}
                      className="btn-whatsapp py-1.5 px-3 text-xs"
                    >
                      <span>Quote</span>
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        )}

      </div>

      {/* Modal */}
      <ProductDetailModal 
        product={activeModal}
        onClose={() => setActiveModal(null)}
      />

    </section>
  );
}
