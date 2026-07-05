import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Trash2, Plus, Minus, ShoppingCart } from 'lucide-react'
import { CartItem } from '../../data/shopData'
interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
  onUpdateQty: (productId: number, quantity: number) => void
  onRemove: (productId: number) => void
  onClear: () => void
  onProceed: () => void
}
const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
export function CartDrawer({
  isOpen,
  onClose,
  items,
  onUpdateQty,
  onRemove,
  onClear,
  onProceed,
}: CartDrawerProps) {
  const total = items.reduce(
    (sum, item) => sum + item.product.priceValue * item.quantity,
    0,
  )
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            onClick={onClose}
            className="fixed inset-0 bg-brandBlack/60 backdrop-blur-sm z-[90]"
          />
          <motion.aside
            initial={{
              x: '100%',
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: '100%',
            }}
            transition={{
              type: 'tween',
              duration: 0.3,
              ease: 'easeInOut',
            }}
            className="fixed top-0 right-0 h-full w-full max-w-md bg-brandWhite z-[91] shadow-2xl flex flex-col"
            role="dialog"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h2 className="text-xl font-display font-bold text-brandBlack flex items-center gap-2">
                <ShoppingCart size={22} className="text-primary" />
                Your Cart
                <span className="text-sm font-sans font-medium text-brandBlack/40">
                  ({items.length})
                </span>
              </h2>
              <button
                onClick={onClose}
                aria-label="Close cart"
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X size={22} className="text-brandBlack" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center text-brandBlack/40">
                  <ShoppingCart size={48} className="mb-4" />
                  <p className="font-medium">Your cart is empty</p>
                  <p className="text-sm mt-1">Add products to get started.</p>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={item.product.id}
                      className="flex gap-4 border border-gray-100 rounded-sm p-3"
                    >
                      <div className="w-20 h-20 bg-brandGray-50 rounded-sm overflow-hidden shrink-0">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover mix-blend-multiply"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                          <h3 className="font-display font-bold text-brandBlack text-sm leading-tight">
                            {item.product.name}
                          </h3>
                          <button
                            onClick={() => onRemove(item.product.id)}
                            aria-label={`Remove ${item.product.name}`}
                            className="text-brandBlack/30 hover:text-primary transition-colors shrink-0"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                        <p className="text-primary font-bold text-sm mt-1">
                          {item.product.price}
                        </p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() =>
                              onUpdateQty(
                                item.product.id,
                                Math.max(1, item.quantity - 1),
                              )
                            }
                            aria-label="Decrease quantity"
                            className="w-7 h-7 rounded-sm border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <Minus size={14} />
                          </button>
                          <span className="w-6 text-center font-medium tabular-nums">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() =>
                              onUpdateQty(item.product.id, item.quantity + 1)
                            }
                            aria-label="Increase quantity"
                            className="w-7 h-7 rounded-sm border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <Plus size={14} />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 && (
              <div className="border-t border-gray-200 p-6 space-y-4">
                <button
                  onClick={onClear}
                  className="text-sm font-medium text-brandBlack/50 hover:text-primary transition-colors flex items-center gap-1.5"
                >
                  <Trash2 size={14} /> Clear cart
                </button>
                <div className="flex justify-between items-center">
                  <span className="text-brandBlack/60 font-medium">Total</span>
                  <span className="text-2xl font-display font-bold text-brandBlack">
                    {formatCurrency(total)}
                  </span>
                </div>
                <button
                  onClick={onProceed}
                  className="w-full bg-primary text-brandWhite py-4 rounded-sm font-bold hover:bg-orange-600 transition-colors"
                >
                  Proceed to Contact Form
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}
