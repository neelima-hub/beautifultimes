"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { X, Gift } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

export function PromoModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has already seen or closed the modal in this session
    const hasSeenPromo = sessionStorage.getItem("hasSeenPromo");
    
    if (!hasSeenPromo) {
      // Show modal after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleOpenPromo = () => setIsOpen(true);
    window.addEventListener("openPromo", handleOpenPromo);
    return () => window.removeEventListener("openPromo", handleOpenPromo);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem("hasSeenPromo", "true");
    window.dispatchEvent(new Event("promoClosed"));
  };

  const handleClaim = () => {
    // Close modal, but set item so it doesn't pop up again
    sessionStorage.setItem("hasSeenPromo", "true");
    window.dispatchEvent(new Event("promoClosed"));
    // Link navigation will handle the redirect
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-md bg-white rounded-lg shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        <button 
          onClick={closeModal}
          className="absolute top-4 right-4 text-text-dark/50 hover:text-text-dark transition-colors z-20"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="bg-cream-dark p-8 md:p-10 text-center relative overflow-hidden">
          {/* Decorative background circles */}
          <div className="absolute -top-10 -right-10 w-32 h-32 bg-rose-gold/10 rounded-full blur-xl"></div>
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-accent-gold/10 rounded-full blur-xl"></div>

          <ScrollReveal>
            <div className="w-16 h-16 bg-cream rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm border border-accent-gold/20">
              <Gift className="w-8 h-8 text-accent-gold" />
            </div>
            
            <h2 className="text-3xl font-serif text-text-dark mb-2">Special Offer!</h2>
            <div className="w-12 h-0.5 bg-accent-gold mx-auto mb-4"></div>
            
            <p className="text-text-dark/80 mb-6 font-light">
              Get <span className="text-accent-gold font-semibold text-xl border-b border-accent-gold/30 pb-0.5">10% OFF</span> on your first visit with us. Book an appointment today to claim!
            </p>

            <div className="flex flex-col gap-3 mt-8">
              <Link 
                href="/services" 
                onClick={handleClaim}
                className="w-full bg-accent-gold text-white px-6 py-3.5 rounded-sm hover:bg-rose-gold transition-colors block font-medium tracking-widest uppercase text-sm shadow-lg shadow-accent-gold/20"
              >
                Book Appointment
              </Link>
              <button 
                onClick={closeModal}
                className="w-full text-text-dark/50 hover:text-text-dark px-6 py-3 text-sm transition-colors uppercase tracking-wider font-medium"
              >
                I don't want 10% off
              </button>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
}
