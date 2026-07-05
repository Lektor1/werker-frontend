import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, CheckCircle2, Send } from 'lucide-react'
import { CartItem } from '../../data/shopData'
interface ContactFormPopupProps {
  isOpen: boolean
  onClose: () => void
  items: CartItem[]
}
const formatCurrency = (value: number) =>
  value.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  })
export function ContactFormPopup({
  isOpen,
  onClose,
  items,
}: ContactFormPopupProps) {
  const [submitted, setSubmitted] = useState(false)
  const total = items.reduce(
    (sum, item) => sum + item.product.priceValue * item.quantity,
    0,
  )
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setSubmitted(false)
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }
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
            className="fixed inset-0 bg-brandBlack/80 backdrop-blur-sm z-[110]"
          />
          <div className="fixed inset-0 z-[111] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 20,
              }}
              className="bg-brandWhite w-full max-w-5xl h-[92vh] rounded-sm shadow-2xl pointer-events-auto relative flex flex-col overflow-hidden"
              role="dialog"
              aria-label="Inquiry form"
            >
              <div className="flex items-center justify-between px-8 py-6 border-b border-gray-200 bg-brandBlack text-brandWhite">
                <div>
                  <h2 className="text-2xl font-display font-bold">
                    Request Your Quote
                  </h2>
                  <p className="text-brandWhite/60 text-sm mt-1">
                    Send us your selection and we'll get back to you shortly.
                  </p>
                </div>
                <button
                  onClick={onClose}
                  aria-label="Close form"
                  className="p-2 hover:bg-white/10 rounded-full transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {submitted ? (
                <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                  <CheckCircle2 size={72} className="text-primary mb-6" />
                  <h3 className="text-3xl font-display font-bold text-brandBlack mb-3">
                    Request Sent!
                  </h3>
                  <p className="text-brandBlack/60 max-w-md mb-8">
                    Thank you for your inquiry. Our technical team will review
                    your selected products and contact you within one business
                    day.
                  </p>
                  <button
                    onClick={onClose}
                    className="bg-primary text-brandWhite px-8 py-3 rounded-sm font-bold hover:bg-orange-600 transition-colors"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex-1 overflow-y-auto grid lg:grid-cols-2 gap-0"
                >
                  {/* Form fields */}
                  <div className="p-8 md:p-10 space-y-6">
                    <div>
                      <label
                        htmlFor="cf-name"
                        className="block text-sm font-bold text-brandBlack/70 mb-2"
                      >
                        Full Name
                      </label>
                      <input
                        id="cf-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-brandGray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cf-email"
                        className="block text-sm font-bold text-brandBlack/70 mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="cf-email"
                        type="email"
                        required
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 bg-brandGray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cf-phone"
                        className="block text-sm font-bold text-brandBlack/70 mb-2"
                      >
                        Phone Number
                      </label>
                      <input
                        id="cf-phone"
                        type="tel"
                        required
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 bg-brandGray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="cf-comment"
                        className="block text-sm font-bold text-brandBlack/70 mb-2"
                      >
                        Comment / Additional Notes
                      </label>
                      <textarea
                        id="cf-comment"
                        rows={5}
                        placeholder="Tell us about your project, timeline, or any questions..."
                        className="w-full px-4 py-3 bg-brandGray-50 border border-gray-200 rounded-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                      ></textarea>
                    </div>
                  </div>

                  {/* Auto-filled order summary (read-only) */}
                  <div className="p-8 md:p-10 bg-brandGray-50 border-l border-gray-200 flex flex-col">
                    <h3 className="text-sm font-bold text-brandBlack/50 uppercase tracking-wider mb-4">
                      Selected Products
                    </h3>
                    <div
                      className="flex-1 overflow-y-auto space-y-3 mb-6"
                      aria-readonly="true"
                    >
                      {items.length === 0 && (
                        <p className="text-brandBlack/40 text-sm">
                          No products selected.
                        </p>
                      )}
                      {items.map((item) => (
                        <div
                          key={item.product.id}
                          className="flex items-center gap-3 bg-brandWhite border border-gray-100 rounded-sm p-3"
                        >
                          <div className="w-12 h-12 bg-brandGray-50 rounded-sm overflow-hidden shrink-0">
                            <img
                              src={item.product.image}
                              alt={item.product.name}
                              className="w-full h-full object-cover mix-blend-multiply"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-display font-bold text-sm text-brandBlack truncate">
                              {item.product.name}
                            </p>
                            <p className="text-xs text-brandBlack/50">
                              Qty: {item.quantity} × {item.product.price}
                            </p>
                          </div>
                          <span className="font-bold text-sm text-brandBlack tabular-nums">
                            {formatCurrency(
                              item.product.priceValue * item.quantity,
                            )}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between items-center border-t border-gray-300 pt-4 mb-6">
                      <span className="font-bold text-brandBlack/60">
                        Total
                      </span>
                      <span className="text-2xl font-display font-bold text-brandBlack">
                        {formatCurrency(total)}
                      </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                      <button
                        type="button"
                        onClick={onClose}
                        className="flex-1 border border-gray-300 text-brandBlack py-3.5 rounded-sm font-bold hover:bg-gray-100 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="flex-1 bg-primary text-brandWhite py-3.5 rounded-sm font-bold hover:bg-orange-600 transition-colors flex items-center justify-center gap-2"
                      >
                        <Send size={18} /> Submit
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}
