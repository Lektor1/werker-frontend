import React, { useState } from 'react'
import { Modal } from './Modal'
import {
  ArrowRight,
  Maximize2,
  ShoppingCart,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { productsData, Product } from '../data/shopData'
const PER_PAGE = 4
export function Shop() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [page, setPage] = useState(0)
  const [direction, setDirection] = useState(0)
  const totalPages = Math.ceil(productsData.length / PER_PAGE)
  const paginate = (newDirection: number) => {
    setDirection(newDirection)
    setPage((prev) => (prev + newDirection + totalPages) % totalPages)
  }
  const visibleProducts = productsData.slice(
    page * PER_PAGE,
    page * PER_PAGE + PER_PAGE,
  )
  const handleActionClick = () => {
    setSelectedProduct(null)
    setTimeout(() => {
      document.querySelector('#contact')?.scrollIntoView({
        behavior: 'smooth',
      })
    }, 100)
  }
  return (
    <section id="shop" className="py-24 bg-brandWhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
        <div>
          <h2 className="text-primary font-bold tracking-widest uppercase text-sm mb-3">
            Equipment & Parts
          </h2>
          <h3 className="text-4xl font-display font-bold text-brandBlack">
            Premium Hardware
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous products"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brandBlack hover:bg-primary hover:text-brandWhite hover:border-primary transition-colors"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-sm font-medium text-brandBlack/50 tabular-nums">
            {page + 1} / {totalPages}
          </span>
          <button
            onClick={() => paginate(1)}
            aria-label="Next products"
            className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center text-brandBlack hover:bg-primary hover:text-brandWhite hover:border-primary transition-colors"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="relative overflow-hidden mb-16">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={page}
              custom={direction}
              initial={{
                opacity: 0,
                x: direction > 0 ? 60 : -60,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: direction > 0 ? -60 : 60,
              }}
              transition={{
                duration: 0.35,
                ease: 'easeInOut',
              }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {visibleProducts.map((product) => (
                <div
                  key={product.id}
                  className="group relative overflow-hidden rounded-sm cursor-pointer bg-brandBlack border border-gray-200 shadow-sm"
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

                  <div className="absolute inset-0 p-6 flex flex-col justify-end text-brandWhite">
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider">
                        {product.type}
                      </span>
                      <span className="text-lg font-display font-bold">
                        {product.price}
                      </span>
                    </div>
                    <h4 className="text-xl font-display font-bold mb-3">
                      {product.name}
                    </h4>
                    <div className="flex items-center text-sm font-medium text-brandWhite/70 group-hover:text-primary transition-colors">
                      View Details{' '}
                      <ArrowRight
                        size={16}
                        className="ml-2 group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>

                  <div className="absolute top-4 right-4 w-10 h-10 bg-brandBlack/50 backdrop-blur rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0">
                    <Maximize2 size={18} className="text-brandWhite" />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center">
          <Link
            to="/shop"
            className="bg-brandBlack text-brandWhite px-10 py-5 rounded-sm font-bold text-lg hover:bg-primary transition-colors flex items-center gap-3 group"
          >
            <ShoppingCart size={22} />
            View Full Shop
            <ArrowRight
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>

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
                  onClick={handleActionClick}
                  className="flex-1 bg-primary text-brandWhite py-4 rounded-sm font-bold hover:bg-orange-600 transition-colors text-center"
                >
                  Order Product
                </button>
                <button
                  onClick={handleActionClick}
                  className="flex-1 bg-brandBlack text-brandWhite py-4 rounded-sm font-bold hover:bg-gray-800 transition-colors text-center"
                >
                  Request Installation
                </button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  )
}
