import React, { useState, useMemo } from 'react';
import { 
  MessageSquare, 
  Search, 
  SlidersHorizontal, 
  X, 
  Check, 
  ChevronDown, 
  Eye, 
  ShieldCheck, 
  Building2,
  Sparkles
} from 'lucide-react';
import { ProductItem, PRODUCTS, CATEGORIES, BRANDS } from '../data/products.ts';

interface ProductCatalogProps {
  onSelectProduct: (product: ProductItem) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({ onSelectProduct }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('All Brands');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter products based on category, brand, and search query
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      // Category filter
      if (selectedCategory !== 'all' && item.category !== selectedCategory) {
        return false;
      }
      // Brand filter
      if (selectedBrand !== 'All Brands' && !item.manufacturer.toLowerCase().includes(selectedBrand.toLowerCase().replace('all brands', ''))) {
        return false;
      }
      // Search query
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(query);
        const matchesDesc = item.description.toLowerCase().includes(query);
        const matchesSpecs = item.keySpecs.some((s) => s.toLowerCase().includes(query));
        const matchesOptions = item.options.some((opt) => opt.name.toLowerCase().includes(query));
        if (!matchesTitle && !matchesDesc && !matchesSpecs && !matchesOptions) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, selectedBrand, searchQuery]);

  const hasActiveFilters = selectedCategory !== 'all' || selectedBrand !== 'All Brands' || searchQuery.trim() !== '';

  const handleClearFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('All Brands');
    setSearchQuery('');
  };

  return (
    <section className="w-full py-16 lg:py-20 bg-[#f8f9ff] scroll-mt-20" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title & Descriptor */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-[#dc2626] mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#dc2626] animate-pulse" />
              <span className="font-tech text-xs uppercase tracking-wider font-bold">Catalog Inventory</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-[#0b1c30] tracking-tight">
              Our Products
            </h2>
            <div className="w-16 h-1 bg-[#dc2626] mt-2 rounded-full" />
          </div>
          <p className="font-display text-base text-[#565e74] max-w-xl leading-relaxed">
            Explore our certified stock of heavy-gauge copper cables, high-lumen architectural lighting, certified distribution gear, and commercial wiring devices directly from Lagos Island.
          </p>
        </div>

        {/* Interactive Filter Bar & Dropdowns */}
        <div className="bg-white rounded-lg p-4 mb-8 shadow-sm border border-[#e2e8f0]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search cables, breakers, LED panels, switches, conduit..."
                className="w-full pl-10 pr-4 py-2 bg-[#f8f9ff] border border-[#cbd5e1] rounded-md font-tech text-sm text-[#0b1c30] placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#dc2626] focus:border-transparent transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 p-1"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Dropdown Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Category Dropdown */}
              <div className="relative">
                <label htmlFor="category-select" className="sr-only">Filter by Category</label>
                <div className="relative">
                  <select
                    id="category-select"
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="appearance-none bg-[#f8f9ff] border border-[#cbd5e1] rounded-md px-3.5 py-2 pr-9 font-tech text-xs sm:text-sm font-semibold text-[#0b1c30] hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#dc2626] transition-colors cursor-pointer"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.label}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              {/* Brand Dropdown */}
              <div className="relative">
                <label htmlFor="brand-select" className="sr-only">Filter by Brand</label>
                <div className="relative">
                  <select
                    id="brand-select"
                    value={selectedBrand}
                    onChange={(e) => setSelectedBrand(e.target.value)}
                    className="appearance-none bg-[#f8f9ff] border border-[#cbd5e1] rounded-md px-3.5 py-2 pr-9 font-tech text-xs sm:text-sm font-semibold text-[#0b1c30] hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-[#dc2626] transition-colors cursor-pointer"
                  >
                    {BRANDS.map((brand) => (
                      <option key={brand} value={brand}>
                        {brand}
                      </option>
                    ))}
                  </select>
                  <Building2 className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500 pointer-events-none" />
                </div>
              </div>

              {/* Reset Filters Action */}
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={handleClearFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md font-tech text-xs font-semibold text-[#dc2626] bg-red-50 hover:bg-red-100 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Quick-filter pill buttons */}
          <div className="flex flex-wrap items-center gap-2 mt-3 pt-3 border-t border-slate-100">
            <span className="font-tech text-xs text-[#565e74] mr-1">Quick Select:</span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-md font-tech text-xs font-semibold transition-all cursor-pointer ${
                    active
                      ? 'bg-[#dc2626] text-white shadow-sm'
                      : 'bg-[#e5eeff] text-[#0b1c30] hover:bg-[#dce9ff]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
            <div className="ml-auto font-tech text-xs text-[#565e74]">
              Showing <span className="font-bold text-[#0b1c30]">{filteredProducts.length}</span> categories
            </div>
          </div>
        </div>

        {/* Empty State when filters yield no items */}
        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-lg p-12 text-center border border-[#e2e8f0] shadow-sm max-w-xl mx-auto my-8">
            <div className="w-12 h-12 rounded-full bg-red-50 text-[#dc2626] flex items-center justify-center mx-auto mb-4">
              <Search className="w-6 h-6" />
            </div>
            <h3 className="font-display text-lg font-bold text-[#0b1c30] mb-2">No Matching Materials Found</h3>
            <p className="font-tech text-sm text-[#565e74] mb-6">
              We couldn't find items matching &quot;{searchQuery || selectedBrand}&quot;. Try adjusting your filter terms or speak directly with our Lagos Island trade desk.
            </p>
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center gap-2 bg-[#dc2626] text-white px-5 py-2.5 rounded-md font-tech text-xs font-semibold hover:bg-[#b70011] transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}

        {/* Category Catalog Grid (Exact Match to Design) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group border border-[#e2e8f0] hover:border-slate-300 relative"
            >
              <div>
                {/* Product Image Frame */}
                <div 
                  className="relative w-full h-56 bg-[#eff4ff] overflow-hidden cursor-pointer"
                  onClick={() => onSelectProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      // Fallback to local image if remote resource is blocked
                      const target = e.target as HTMLImageElement;
                      if (target.src !== product.imageFallback) {
                        target.src = product.imageFallback;
                      }
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[#dc2626] font-tech text-[11px] font-bold shadow-sm uppercase tracking-wider">
                    {product.badge}
                  </div>
                  {/* Bottom Right Standard Badge */}
                  <div className="absolute bottom-2 right-2 bg-[#0b1c30]/80 text-white font-tech text-[11px] font-bold px-2 py-0.5 rounded backdrop-blur-xs">
                    {product.standardBadge}
                  </div>
                </div>

                {/* Content Zone */}
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-baseline justify-between">
                    <span className="font-tech text-[11px] font-bold uppercase tracking-wider text-[#565e74]">
                      {product.categoryTag}
                    </span>
                    <span className="font-tech text-xs font-bold text-[#dc2626]">
                      {product.stockTag}
                    </span>
                  </div>

                  <h3 
                    onClick={() => onSelectProduct(product)}
                    className="font-display text-xl font-bold text-[#0b1c30] group-hover:text-[#b70011] transition-colors cursor-pointer"
                  >
                    {product.title}
                  </h3>

                  <p className="font-display text-sm text-[#565e74] leading-relaxed line-clamp-3">
                    {product.description}
                  </p>

                  {/* Key Specifications */}
                  <div className="pt-2">
                    <span className="font-tech text-[11px] uppercase font-bold text-[#5c403c] block mb-1.5 tracking-wider">
                      Key Specifications:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {product.keySpecs.map((spec, i) => (
                        <span
                          key={i}
                          className="bg-[#e5eeff] px-2 py-1 rounded text-[#0b1c30] font-tech text-xs font-medium"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Primary Action Button (Opens Side Panel) */}
              <div className="p-6 pt-0 space-y-2">
                <button
                  type="button"
                  onClick={() => onSelectProduct(product)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0b1c30] hover:bg-[#dc2626] text-white py-3 px-4 rounded-md font-tech text-sm font-semibold transition-colors duration-200 cursor-pointer shadow-sm group-hover:bg-[#dc2626]"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Inquire on WhatsApp</span>
                </button>
                <button
                  type="button"
                  onClick={() => onSelectProduct(product)}
                  className="w-full inline-flex items-center justify-center gap-1.5 text-xs font-tech font-semibold text-[#565e74] hover:text-[#0b1c30] transition-colors py-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>View Specifications &amp; Pricing</span>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
