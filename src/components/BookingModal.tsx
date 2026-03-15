"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
}

import { useState, useEffect } from "react";

export function BookingModal({ isOpen, onClose, preselectedService }: BookingModalProps) {
  const [selectedService, setSelectedService] = useState(preselectedService || "Hair Care & Styling");

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService, isOpen]);
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-cream-dark p-8 rounded-sm shadow-2xl z-[70] border border-accent-gold/20"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 text-text-dark/60 hover:text-rose-gold transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <h2 className="text-3xl font-serif mb-2 text-text-dark">Book Your Beautiful Time</h2>
            <p className="text-text-dark/70 mb-6 font-sans">
              Choose your preferred date and service. Our luxury concierge will confirm your appointment shortly.
            </p>
            
            <form className="flex flex-col gap-4 font-sans" onSubmit={(e) => { e.preventDefault(); onClose(); }}>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1">Full Name</label>
                <input required type="text" className="w-full border border-gray-200 bg-white px-4 py-2 rounded-sm focus:outline-none focus:border-accent-gold transition-colors" placeholder="Jane Doe" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1">Email Address</label>
                <input required type="email" className="w-full border border-gray-200 bg-white px-4 py-2 rounded-sm focus:outline-none focus:border-accent-gold transition-colors" placeholder="jane@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1">Phone Number</label>
                <input required type="tel" className="w-full border border-gray-200 bg-white px-4 py-2 rounded-sm focus:outline-none focus:border-accent-gold transition-colors" placeholder="+91 98765 XXXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1">Service category</label>
                <select 
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full border border-gray-200 bg-white px-4 py-2 rounded-sm focus:outline-none focus:border-accent-gold transition-colors"
                >
                  <option value="Hair Care & Styling">Hair Care & Styling</option>
                  <option value="Premium Nail Bar">Premium Nail Bar</option>
                  <option value="Facial & Skin Rejuvenation">Facial & Skin Rejuvenation</option>
                  <option value="Spa & Massage">Spa & Massage</option>
                </select>
              </div>
              <button 
                type="submit"
                className="mt-4 bg-accent-gold text-white font-medium py-3 rounded-sm hover:bg-rose-gold transition-colors w-full tracking-wider"
              >
                REQUEST APPOINTMENT
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
