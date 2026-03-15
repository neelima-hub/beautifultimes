"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";
import { BookingModal } from "./BookingModal";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "The Lookbook", href: "/#lookbook" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled
            ? "bg-white/80 backdrop-blur-md shadow-sm py-4"
            : "bg-white/20 backdrop-blur-sm py-6 border-b border-white/10"
        )}
      >
        <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 relative z-50">
            <Image
              src="/logo.svg"
              alt="Beautiful times Logo"
              width={260}
              height={65}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-text-dark font-medium hover:text-accent-gold transition-colors text-sm uppercase tracking-wider"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => setIsBookingModalOpen(true)}
              className="bg-accent-gold text-white px-6 py-2.5 rounded-sm hover:bg-rose-gold transition-colors duration-300 font-medium tracking-wide flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden relative z-50 text-text-dark"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Nav Overlay Background */}
        <div 
          className={cn(
            "fixed inset-0 bg-black/50 backdrop-blur-sm z-30 transition-opacity duration-300 md:hidden",
            mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
          )}
          onClick={() => setMobileMenuOpen(false)}
        />

        {/* Mobile Nav Drawer */}
        <div
          className={cn(
            "fixed top-0 right-0 h-full w-[80%] max-w-sm bg-cream z-40 flex flex-col px-8 pt-32 pb-8 shadow-2xl transition-transform duration-300 ease-in-out md:hidden overflow-y-auto border-l border-accent-gold/10",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-2xl font-serif text-text-dark hover:text-accent-gold transition-colors border-b border-gray-200/50 pb-4"
              >
                {link.name}
              </Link>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setIsBookingModalOpen(true);
              }}
              className="mt-6 bg-accent-gold text-white px-8 py-4 rounded-sm hover:bg-rose-gold transition-colors font-medium text-lg flex items-center justify-center gap-2 w-full shadow-lg"
            >
              <Calendar className="w-5 h-5" />
              Book Now
            </button>
          </nav>

          <div className="mt-auto pt-10 text-center">
             <Image
                src="/logo.svg"
                alt="Beautiful times Logo"
                width={150}
                height={40}
                className="h-10 w-auto mx-auto opacity-50 mb-4"
              />
              <p className="text-xs text-text-dark/50 uppercase tracking-widest">Luxury Salon</p>
          </div>
        </div>
      </header>

      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
      />
    </>
  );
}
