'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Package, Plus, Search, Edit3, Trash2, CheckCircle2, 
  XCircle, ArrowLeft, RefreshCw, Layers, Tag, ShieldCheck 
} from 'lucide-react';

interface DbProduct {
  id: string;
  name: string;
  slug: string;
  sku: string;
  short_description: string;
  description: string;
  price_pkr: number;
  compare_at_price_pkr?: number;
  stock_quantity: number;
  tags: string[];
  specifications: Record<string, any>;
  cover_image_url: string;
  is_active: boolean;
  is_featured: boolean;
  category_name?: string;
}

export default function AdminPage() {
  const [products, setProducts] = useState<DbProduct[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [editingProduct, setEditingProduct] = useState<DbProduct | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [saving, setSaving] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    id: '',
    name: '',
    slug: '',
    sku: '',
    short_description: '',
    description: '',
    price_pkr: 0,
    compare_at_price_pkr: 0,
    stock_quantity: 10,
    tags: '',
    cover_image_url: '',
    is_active: true,
    is_featured: false
  });

  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/admin/products');
      const data = await res.json();
      if (data.success) {
        setProducts(data.products);
      }
    } catch (err) {
      console.error('Failed to fetch products:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const openCreateModal = () => {
    setEditingProduct(null);
    setFormData({
      id: '',
      name: '',
      slug: '',
      sku: '',
      short_description: '',
      description: '',
      price_pkr: 0,
      compare_at_price_pkr: 0,
      stock_quantity: 10,
      tags: 'lifepo4, solar',
      cover_image_url: '/images/products/24v1-hero.png',
      is_active: true,
      is_featured: false
    });
    setIsModalOpen(true);
  };

  const openEditModal = (product: DbProduct) => {
    setEditingProduct(product);
    setFormData({
      id: product.id,
      name: product.name,
      slug: product.slug,
      sku: product.sku || '',
      short_description: product.short_description || '',
      description: product.description || '',
      price_pkr: product.price_pkr || 0,
      compare_at_price_pkr: product.compare_at_price_pkr || 0,
      stock_quantity: product.stock_quantity || 0,
      tags: Array.isArray(product.tags) ? product.tags.join(', ') : '',
      cover_image_url: product.cover_image_url || '',
      is_active: product.is_active,
      is_featured: product.is_featured
    });
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const method = editingProduct ? 'PUT' : 'POST';
      const res = await fetch('/api/admin/products', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (data.success) {
        setIsModalOpen(false);
        fetchProducts();
      } else {
        alert(`Error: ${data.error}`);
      }
    } catch (err) {
      alert('Failed to save product');
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this product?')) return;

    try {
      const res = await fetch(`/api/admin/products?id=${id}`, { method: 'DELETE' });
      const data = await res.json();
      if (data.success) {
        fetchProducts();
      }
    } catch (err) {
      alert('Failed to delete product');
    }
  };

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    (p.sku && p.sku.toLowerCase().includes(search.toLowerCase())) ||
    (p.tags && p.tags.some(t => t.toLowerCase().includes(search.toLowerCase())))
  );

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* Admin Navigation Bar */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-blue-600">
              <ArrowLeft className="w-4 h-4" /> Back to Store
            </Link>
            <div className="h-4 w-px bg-slate-200" />
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="font-extrabold text-slate-900 tracking-tight">METALECTRICS</span>
              <span className="text-xs bg-slate-100 text-slate-600 font-semibold px-2 py-0.5 rounded">Inventory Admin</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={fetchProducts}
              className="p-2 text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md bg-white hover:bg-slate-50"
              title="Refresh Data"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button 
              onClick={openCreateModal}
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm px-4 py-2 rounded-md shadow-sm transition-colors"
            >
              <Plus className="w-4 h-4" /> Add Product
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">

        {/* Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-5 rounded-lg border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total Products</div>
              <div className="text-2xl font-extrabold text-slate-900">{products.length}</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Featured Items</div>
              <div className="text-2xl font-extrabold text-slate-900">{products.filter(p => p.is_featured).length}</div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-lg border border-slate-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-slate-100 text-slate-600 rounded-lg flex items-center justify-center">
              <Layers className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Database Source</div>
              <div className="text-sm font-bold text-slate-800">Neon PostgreSQL (Live)</div>
            </div>
          </div>
        </div>

        {/* Inventory Controls */}
        <div className="bg-white rounded-lg border border-slate-200 overflow-hidden">
          
          <div className="p-4 border-b border-slate-200 bg-slate-50/50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative flex-1 max-w-md">
              <Search className="w-4 h-4 absolute left-3 top-3 text-slate-400" />
              <input 
                type="text" 
                placeholder="Search products by name, SKU, or tags..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2 text-sm bg-white border border-slate-200 rounded-md outline-none focus:border-blue-500"
              />
            </div>
            <div className="text-xs font-semibold text-slate-500">
              Showing {filteredProducts.length} of {products.length} products
            </div>
          </div>

          {/* Table */}
          {loading ? (
            <div className="p-12 text-center text-slate-500 font-medium">Loading Neon database inventory...</div>
          ) : filteredProducts.length === 0 ? (
            <div className="p-12 text-center text-slate-500 font-medium">No products found matching your search.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50 text-slate-600 text-xs uppercase font-bold border-b border-slate-200">
                    <th className="py-3 px-4">Product</th>
                    <th className="py-3 px-4">SKU / Slug</th>
                    <th className="py-3 px-4">Price (PKR)</th>
                    <th className="py-3 px-4">Stock</th>
                    <th className="py-3 px-4">Tags</th>
                    <th className="py-3 px-4 text-center">Status</th>
                    <th className="py-3 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-sm">
                  {filteredProducts.map(p => (
                    <tr key={p.id} className="hover:bg-slate-50/80 transition-colors">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-3">
                          <img 
                            src={p.cover_image_url || '/images/products/24v1-hero.png'} 
                            alt={p.name}
                            className="w-10 h-10 object-contain bg-slate-50 border border-slate-200 rounded-md p-1"
                          />
                          <div>
                            <div className="font-bold text-slate-900">{p.name}</div>
                            <div className="text-xs text-slate-500 line-clamp-1">{p.short_description}</div>
                          </div>
                        </div>
                      </td>

                      <td className="py-3 px-4">
                        <div className="font-mono text-xs font-semibold text-slate-700">{p.sku || 'N/A'}</div>
                        <div className="text-xs text-slate-400">{p.slug}</div>
                      </td>

                      <td className="py-3 px-4">
                        <div className="font-bold text-slate-900">Rs {p.price_pkr?.toLocaleString()}</div>
                        {p.compare_at_price_pkr && (
                          <div className="text-xs text-slate-400 line-through">Rs {p.compare_at_price_pkr.toLocaleString()}</div>
                        )}
                      </td>

                      <td className="py-3 px-4">
                        <span className="font-semibold text-slate-700">{p.stock_quantity} units</span>
                      </td>

                      <td className="py-3 px-4">
                        <div className="flex flex-wrap gap-1">
                          {p.tags && p.tags.map((t, idx) => (
                            <span key={idx} className="inline-flex items-center gap-1 text-[11px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-medium">
                              <Tag className="w-3 h-3 text-slate-400" /> {t}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="py-3 px-4 text-center">
                        {p.is_active ? (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full">
                            <CheckCircle2 className="w-3 h-3" /> Active
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1 text-xs font-semibold text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded-full">
                            <XCircle className="w-3 h-3" /> Draft
                          </span>
                        )}
                      </td>

                      <td className="py-3 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button 
                            onClick={() => openEditModal(p)}
                            className="p-1.5 text-slate-600 hover:text-blue-600 border border-slate-200 rounded-md hover:bg-slate-50"
                            title="Edit Product"
                          >
                            <Edit3 className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(p.id)}
                            className="p-1.5 text-slate-600 hover:text-red-600 border border-slate-200 rounded-md hover:bg-slate-50"
                            title="Delete Product"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </main>

      {/* Edit / Create Product Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-lg border border-slate-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-xl">
            
            <div className="p-5 border-b border-slate-200 flex items-center justify-between">
              <h2 className="text-lg font-extrabold text-slate-900">
                {editingProduct ? 'Edit Inventory Item' : 'Add New Product'}
              </h2>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 font-bold"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSave} className="p-6 space-y-4 text-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Product Name *</label>
                  <input 
                    type="text" 
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded-md outline-none focus:border-blue-500"
                    placeholder="e.g. Alpha Ampere 24V 100Ah"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">SKU</label>
                  <input 
                    type="text" 
                    value={formData.sku}
                    onChange={(e) => setFormData({ ...formData, sku: e.target.value })}
                    className="w-full p-2 border border-slate-200 rounded-md outline-none focus:border-blue-500"
                    placeholder="e.g. aa-24-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Price (PKR) *</label>
                  <input 
                    type="number" 
                    required
                    value={formData.price_pkr}
                    onChange={(e) => setFormData({ ...formData, price_pkr: Number(e.target.value) })}
                    className="w-full p-2 border border-slate-200 rounded-md outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Compare at Price (PKR)</label>
                  <input 
                    type="number" 
                    value={formData.compare_at_price_pkr}
                    onChange={(e) => setFormData({ ...formData, compare_at_price_pkr: Number(e.target.value) })}
                    className="w-full p-2 border border-slate-200 rounded-md outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Stock Quantity</label>
                  <input 
                    type="number" 
                    value={formData.stock_quantity}
                    onChange={(e) => setFormData({ ...formData, stock_quantity: Number(e.target.value) })}
                    className="w-full p-2 border border-slate-200 rounded-md outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Cover Image URL</label>
                <input 
                  type="text" 
                  value={formData.cover_image_url}
                  onChange={(e) => setFormData({ ...formData, cover_image_url: e.target.value })}
                  className="w-full p-2 border border-slate-200 rounded-md outline-none focus:border-blue-500 font-mono text-xs"
                  placeholder="https://i.postimg.cc/... or /images/products/..."
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Tags (Comma-separated)</label>
                <input 
                  type="text" 
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full p-2 border border-slate-200 rounded-md outline-none focus:border-blue-500"
                  placeholder="lifepo4, solar, ups, featured"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Short Spec Description</label>
                <input 
                  type="text" 
                  value={formData.short_description}
                  onChange={(e) => setFormData({ ...formData, short_description: e.target.value })}
                  className="w-full p-2 border border-slate-200 rounded-md outline-none focus:border-blue-500"
                  placeholder="e.g. 25.6V • 2.56kWh Storage • 8000 Cycles"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Full Description</label>
                <textarea 
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full p-2 border border-slate-200 rounded-md outline-none focus:border-blue-500"
                />
              </div>

              <div className="flex items-center gap-6 pt-2">
                <label className="inline-flex items-center gap-2 font-semibold text-slate-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.is_active}
                    onChange={(e) => setFormData({ ...formData, is_active: e.target.checked })}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  Active (Visible in Store)
                </label>

                <label className="inline-flex items-center gap-2 font-semibold text-slate-700 cursor-pointer">
                  <input 
                    type="checkbox" 
                    checked={formData.is_featured}
                    onChange={(e) => setFormData({ ...formData, is_featured: e.target.checked })}
                    className="w-4 h-4 text-blue-600 rounded"
                  />
                  Featured Item
                </label>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-200 -mx-6 -mb-6 mt-6 flex justify-end gap-3 rounded-b-lg">
                <button 
                  type="button" 
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 border border-slate-200 rounded-md font-semibold text-slate-600 hover:bg-slate-100"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={saving}
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold shadow-sm transition-colors disabled:opacity-50"
                >
                  {saving ? 'Saving...' : editingProduct ? 'Update Product' : 'Create Product'}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
