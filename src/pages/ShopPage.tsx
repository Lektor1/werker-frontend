import React, { useEffect, useMemo, useState } from 'react'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'
import { Modal } from '../components/Modal'
import { CartDrawer } from '../components/shop/CartDrawer'
import { ContactFormPopup } from '../components/shop/ContactFormPopup'
import {
  ArrowLeft,
  Maximize2,
  ShoppingCart,
  Search,
  Plus,
  X,
  SlidersHorizontal,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import {
  productsData,
  Product,
  CartItem,
  SystemType,
  SYSTEM_TYPES,
  PRICE_MIN,
  PRICE_MAX,
} from '../data/shopData'
type SortOption = 'price-asc' | 'price-desc' | 'newest' | 'oldest'
const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
export function ShopPage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [search, setSearch] = useState('')
  const [selectedTypes, setSelectedTypes] = useState<SystemType[]>([])
  const [maxPrice, setMaxPrice] = useState(PRICE_MAX)
  const [sortBy, setSortBy] = useState<SortOption>('newest')
  const [cart, setCart] = useState<CartItem[]>([])
  const [cartOpen, setCartOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)
  const [filtersOpen, setFiltersOpen] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  const toggleType = (type: SystemType) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    )
  }
  const filteredProducts = useMemo(() => {
    const query = search.trim().toLowerCase()
    let result = productsData.filter((p) => {
      const matchesSearch =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.type.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        p.keywords.some((k) => k.toLowerCase().includes(query))
      const matchesType =
        selectedTypes.length === 0 || selectedTypes.includes(p.category)
      const matchesPrice = p.priceValue <= maxPrice
      return matchesSearch && matchesType && matchesPrice
    })
    result = [...result].sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.priceValue - b.priceValue
        case 'price-desc':
          return b.priceValue - a.priceValue
        case 'newest':
          return +new Date(b.dateAdded) - +new Date(a.dateAdded)
        case 'oldest':
          return +new Date(a.dateAdded) - +new Date(b.dateAdded)
        default:
          return 0
      }
    })
    return result
  }, [search, selectedTypes, maxPrice, sortBy])
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0)
  const addToCart = (product: Product) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.product.id === product.id)
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id
            ? {
                ...i,
                quantity: i.quantity + 1,
              }
            : i,
        )
      }
      return [
        ...prev,
        {
          product,
          quantity: 1,
        },
      ]
    })
    setCartOpen(true)
  }
  const updateQty = (productId: number, quantity: number) =>
    setCart((prev) =>
      prev.map((i) =>
        i.product.id === productId
          ? {
              ...i,
              quantity,
            }
          : i,
      ),
    )
  const removeItem = (productId: number) =>
    setCart((prev) => prev.filter((i) => i.product.id !== productId))
  const clearCart = () => setCart([])
  const proceedToContact = () => {
    setCartOpen(false)
    setContactOpen(true)
  }
  const FilterPanel = (
    <div className="space-y-8">
      <div>
        <h3 className="font-display font-bold text-brandBlack mb-4">
          System Type
        </h3>
        <div className="space-y-2.5">
          {SYSTEM_TYPES.map((type) => (
            <label
              key={type}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedTypes.includes(type)}
                onChange={() => toggleType(type)}
                className="w-4 h-4 accent-primary cursor-pointer"
              />
              <span className="text-brandBlack/70 group-hover:text-brandBlack transition-colors">
                {type}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-display font-bold text-brandBlack mb-4">
          Price Range
        </h3>
        <input
          type="range"
          min={PRICE_MIN}
          max={PRICE_MAX}
          step={50}
          value={maxPrice}
          onChange={(e) => setMaxPrice(Number(e.target.value))}
          className="w-full accent-primary cursor-pointer"
          aria-label="Maximum price"
        />
        <div className="flex justify-between text-sm text-brandBlack/60 mt-2">
          <span>{formatCurrency(PRICE_MIN)}</span>
          <span className="font-bold text-primary">
            Up to {formatCurrency(maxPrice)}
          </span>
        </div>
      </div>

      {(selectedTypes.length > 0 || maxPrice < PRICE_MAX || search) && (
        <button
          onClick={() => {
            setSelectedTypes([])
            setMaxPrice(PRICE_MAX)
            setSearch('')
          }}
          className="text-sm font-medium text-primary hover:underline"
        >
          Reset all filters
        </button>
      )}
    </div>
  )
  return (
    <div className="w-full min-h-screen bg-brandWhite font-sans selection:bg-primary selection:text-white flex flex-col">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Page header */}
          <div className="mb-10">
            <Link
              to="/"
              className="inline-flex items-center text-brandBlack/60 hover:text-primary font-medium mb-6 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" /> Back to Home
            </Link>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h1 className="text-5xl font-display font-bold text-brandBlack mb-3">
                  Equipment Shop
                </h1>
                <p className="text-lg text-brandBlack/60 max-w-2xl">
                  Browse our complete catalog of premium heating, cooling, and
                  plumbing hardware.
                </p>
              </div>
              <button
                onClick={() => setCartOpen(true)}
                className="relative inline-flex items-center gap-2 bg-brandBlack text-brandWhite px-6 py-3 rounded-sm font-bold hover:bg-primary transition-colors self-start"
              >
                <ShoppingCart size={20} /> Cart
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-brandWhite text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center border-2 border-brandWhite">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* Search + Sort bar */}
          <div className="flex flex-col md:flex-row gap-4 mb-10">
            <div className="relative flex-1">
              <Search
                size={20}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-brandBlack/40"
              />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search by name, system type, or keyword..."
                className="w-full pl-12 pr-4 py-3.5 bg-brandGray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                aria-label="Search products"
              />
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => setFiltersOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 px-5 py-3.5 border border-gray-200 rounded-sm font-medium hover:bg-gray-50 transition-colors"
              >
                <SlidersHorizontal size={18} /> Filters
              </button>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortOption)}
                className="px-5 py-3.5 bg-brandGray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors font-medium cursor-pointer"
                aria-label="Sort products"
              >
                <option value="newest">Sort: Newest</option>
                <option value="oldest">Sort: Oldest</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          <div className="flex gap-10">
            {/* Desktop filter sidebar */}
            <aside className="hidden lg:block w-64 shrink-0">
              <div className="sticky top-32 border border-gray-200 rounded-sm p-6">
                {FilterPanel}
              </div>
            </aside>

            {/* Product grid */}
            <div className="flex-1">
              <p className="text-sm text-brandBlack/50 mb-6">
                Showing {filteredProducts.length} of {productsData.length}{' '}
                products
              </p>
              {filteredProducts.length === 0 ? (
                <div className="text-center py-24 text-brandBlack/40">
                  <Search size={48} className="mx-auto mb-4" />
                  <p className="font-medium">No products match your filters.</p>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group relative overflow-hidden rounded-sm bg-brandBlack border border-gray-200 shadow-sm"
                    >
                      <div
                        className="cursor-pointer"
                        onClick={() => setSelectedProduct(product)}
                      >
                        <div className="aspect-[4/3] overflow-hidden bg-white">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-brandBlack via-brandBlack/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
                        <div className="absolute top-4 left-4 right-4 flex flex-col justify-end h-[calc(100%-7rem)] p-2 text-brandWhite pointer-events-none">
                          <span className="text-primary text-xs font-bold uppercase tracking-wider">
                            {product.category}
                          </span>
                        </div>
                        <div className="absolute top-4 right-4 w-10 h-10 bg-brandBlack/50 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Maximize2 size={18} className="text-brandWhite" />
                        </div>
                      </div>

                      <div className="absolute bottom-0 inset-x-0 p-5 text-brandWhite">
                        <h4 className="text-lg font-display font-bold mb-1">
                          {product.name}
                        </h4>
                        <div className="flex items-center justify-between gap-3">
                          <span className="text-xl font-display font-bold text-primary">
                            {product.price}
                          </span>
                          <button
                            onClick={() => addToCart(product)}
                            className="inline-flex items-center gap-1.5 bg-primary text-brandWhite px-3 py-2 rounded-sm text-sm font-bold hover:bg-brandWhite hover:text-brandBlack transition-colors"
                          >
                            <Plus size={16} /> Add
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />

      {/* Mobile filter drawer */}
      {filtersOpen && (
        <div className="lg:hidden fixed inset-0 z-[80] flex">
          <div
            className="absolute inset-0 bg-brandBlack/60"
            onClick={() => setFiltersOpen(false)}
          />
          <div className="relative ml-auto w-full max-w-xs bg-brandWhite h-full p-6 overflow-y-auto shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-display font-bold">Filters</h2>
              <button
                onClick={() => setFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={24} />
              </button>
            </div>
            {FilterPanel}
          </div>
        </div>
      )}

      {/* Product detail modal */}
      <Modal
        isOpen={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
      >
        {selectedProduct && (
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 bg-brandGray-50 p-8 flex items-center justify-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-full max-w-md object-cover mix-blend-multiply rounded-sm shadow-lg"
              />
            </div>
            <div className="md:w-1/2 p-8 md:p-12 bg-brandWhite text-brandBlack flex flex-col">
              <div className="flex justify-between items-start mb-2">
                <span className="text-primary text-sm font-bold uppercase tracking-wider">
                  {selectedProduct.type}
                </span>
                <span className="text-2xl font-display font-bold text-brandBlack">
                  {selectedProduct.price}
                </span>
              </div>
              <h3 className="text-3xl font-display font-bold mb-6">
                {selectedProduct.name}
              </h3>
              <p className="text-brandBlack/70 leading-relaxed mb-8">
                {selectedProduct.description}
              </p>
              <div className="mb-10">
                <h4 className="text-sm font-bold text-brandBlack/50 uppercase tracking-wider mb-4">
                  Specifications
                </h4>
                <div className="space-y-3">
                  {selectedProduct.specs.map((spec, idx) => (
                    <div
                      key={idx}
                      className="flex justify-between border-b border-gray-100 pb-2"
                    >
                      <span className="text-brandBlack/60">{spec.label}</span>
                      <span className="font-medium">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-auto flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    addToCart(selectedProduct)
                    setSelectedProduct(null)
                  }}
                  className="flex-1 bg-primary text-brandWhite py-4 rounded-sm font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                >
                  <Plus size={18} /> Add to Cart
                </button>
                <button
                  onClick={() => {
                    addToCart(selectedProduct)
                    setSelectedProduct(null)
                    setContactOpen(true)
                  }}
                  className="flex-1 bg-brandBlack text-brandWhite py-4 rounded-sm font-bold hover:bg-gray-800 transition-colors text-center"
                >
                  Request Installation
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>

      {/* Cart drawer */}
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        items={cart}
        onUpdateQty={updateQty}
        onRemove={removeItem}
        onClear={clearCart}
        onProceed={proceedToContact}
      />

      {/* Contact form popup */}
      <ContactFormPopup
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
        items={cart}
      />
    </div>
  )
}
