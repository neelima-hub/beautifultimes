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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  useEffect(() => {
    if (preselectedService) {
      setSelectedService(preselectedService);
    }
  }, [preselectedService, isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: selectedService
        })
      });

      if (!response.ok) throw new Error("Failed to send");

      setSubmitStatus("success");
      setTimeout(() => {
        onClose();
        setSubmitStatus("idle");
        setFormData({ name: "", email: "", phone: "" });
      }, 2000);
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };
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
            
            <form className="flex flex-col gap-4 font-sans" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1">Full Name</label>
                <input 
                  required 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full border border-gray-200 bg-white px-4 py-2 rounded-sm focus:outline-none focus:border-accent-gold transition-colors text-text-dark" 
                  placeholder="Jane Doe" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1">Email Address</label>
                <input 
                  required 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  className="w-full border border-gray-200 bg-white px-4 py-2 rounded-sm focus:outline-none focus:border-accent-gold transition-colors text-text-dark" 
                  placeholder="jane@example.com" 
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-text-dark mb-1">Phone Number</label>
                <input 
                  required 
                  type="tel" 
                  value={formData.phone}
                  onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                  className="w-full border border-gray-200 bg-white px-4 py-2 rounded-sm focus:outline-none focus:border-accent-gold transition-colors text-text-dark" 
                  placeholder="+91 98765 XXXXX" 
                />
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
                disabled={isSubmitting}
                className="mt-4 bg-accent-gold text-white font-medium py-3 rounded-sm hover:bg-rose-gold transition-colors w-full tracking-widest uppercase text-sm shadow-md disabled:bg-gray-400"
              >
                {isSubmitting ? "Sending..." : submitStatus === "success" ? "Booking Successful!" : "Request Appointment"}
              </button>
              {submitStatus === "error" && (
                <p className="text-red-500 text-sm text-center mt-2">Something went wrong. Please try again.</p>
              )}
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
