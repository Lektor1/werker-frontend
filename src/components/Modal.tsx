import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}
export function Modal({ isOpen, onClose, children }: ModalProps) {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);
  return (
    <AnimatePresence>
      {isOpen &&
      <>
          <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0
          }}
          onClick={onClose}
          className="fixed inset-0 bg-brandBlack/80 backdrop-blur-sm z-[100]" />
        
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20
            }}
            className="bg-brandWhite w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm shadow-2xl pointer-events-auto relative">
            
              <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-brandBlack/5 hover:bg-brandBlack/10 rounded-full transition-colors z-10">
              
                <X size={24} className="text-brandBlack" />
              </button>
              {children}
            </motion.div>
          </div>
        </>
      }
    </AnimatePresence>);

}