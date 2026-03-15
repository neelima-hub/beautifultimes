"use client";

import Image from "next/image";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { BookingModal } from "@/components/BookingModal";
import { Calendar } from "lucide-react";

export default function Services() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const categories = [
    {
      title: "Hair Care & Styling",
      image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "Classic French Blowdry", price: "150" },
        { name: "Signature Silk Press", price: "280" },
        { name: "Brazilian Keratin Treatment", price: "800", popular: true },
        { name: "Balayage Transformation", price: "950" },
        { name: "Protein Deep Repair Spa", price: "400" },
        { name: "Bridal Hair Styling", price: "1200" },
      ]
    },
    {
      title: "Premium Nail Bar",
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "Russian Manicure", price: "180" },
        { name: "Gelish Spa Pedicure", price: "220" },
        { name: "Acrylic Extensions & Art", price: "350", popular: true },
        { name: "BIAB Strengthening", price: "210" },
        { name: "Luxury Paraffin Treatment", price: "90" },
        { name: "Express Polish Change", price: "50" },
      ]
    },
    {
      title: "Facial & Skin Rejuvenation",
      image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "24K Gold Glowing Facial", price: "650", popular: true },
        { name: "HydraFacial MD Platinum", price: "800" },
        { name: "Diamond Microdermabrasion", price: "450" },
        { name: "Vitamin C Brightening Peal", price: "380" },
        { name: "Oxygen Infusion Therapy", price: "550" },
        { name: "LED Light Therapy Add-on", price: "150" },
      ]
    },
    {
      title: "Spa & Massage",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      services: [
        { name: "Swedish Relaxation Massage (60m)", price: "350" },
        { name: "Deep Tissue Therapy (90m)", price: "480", popular: true },
        { name: "Hot Stone Ritual", price: "400" },
        { name: "Aromatherapy Stress Relief", price: "380" },
        { name: "Reflexology Foot Focus", price: "250" },
        { name: "Couples Luxury Retreat", price: "850" },
      ]
    }
  ];

  return (
    <>
      <div className="pt-24 bg-cream">
        <section className="relative h-[25vh] min-h-[250px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
              alt="Soft bright spa environment"
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-cream/70 backdrop-blur-sm"></div>
          </div>

          <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <ScrollReveal direction="up" delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-serif text-text-dark mb-4">Our Complete Services</h1>
              <div className="w-24 h-1 bg-accent-gold mx-auto opacity-70 mb-6"></div>
              <p className="text-xl text-text-dark/80 font-sans font-light">
                Discover our meticulously crafted treatments
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Menu Grid */}
        <section className="py-24">
          <div className="container mx-auto px-4 md:px-8 max-w-6xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
              {categories.map((category, idx) => (
                <ScrollReveal key={category.title} delay={idx * 0.1}>
                  <div className="bg-white rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.03)] border border-gray-100 h-full overflow-hidden flex flex-col">
                    <div className="relative h-64 w-full">
                      <Image 
                        src={category.image}
                        alt={category.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-8 md:p-10 flex-1 flex flex-col">
                      <h2 className="text-3xl font-serif text-text-dark mb-8 text-center md:text-left relative inline-block after:content-[''] after:absolute after:w-12 after:h-px after:bg-accent-gold after:-bottom-3 after:left-1/2 md:after:left-0 after:-translate-x-1/2 md:after:translate-x-0">
                        {category.title}
                      </h2>
                      <ul className="flex flex-col gap-6 mt-8 flex-1">
                      {category.services.map((service, s_idx) => (
                        <li key={s_idx} className="group cursor-pointer">
                          <div className="flex items-end justify-between font-sans relative">
                            <div className="flex items-center gap-3 relative bg-white pr-2 z-10">
                              <span className="text-lg font-medium text-text-dark group-hover:text-accent-gold transition-colors">{service.name}</span>
                              {service.popular && (
                                <span className="text-[10px] uppercase tracking-wider bg-accent-gold/10 text-accent-gold px-2 py-0.5 rounded-full font-medium">Popular</span>
                              )}
                            </div>
                            <div className="absolute left-0 bottom-1.5 w-full h-[1px] border-b border-dashed border-gray-300 -z-0"></div>
                            <div className="relative bg-white pl-2 z-10 font-medium text-lg text-text-dark group-hover:text-accent-gold transition-colors">
                              ₹ {service.price}
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA Banner */}
        <section className="relative py-32 bg-text-dark text-white overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl -z-0"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-rose-gold/10 rounded-full blur-3xl -z-0"></div>
          
          <div className="container mx-auto px-4 relative z-10 text-center">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif mb-6">Book Your Beautiful Time Today</h2>
              <p className="text-xl text-white/70 font-light max-w-2xl mx-auto mb-10">
                Our specialists are ready to provide you with the ultimate pampering experience. Secure your preferred slot now.
              </p>
              <button 
                onClick={() => setIsBookingModalOpen(true)}
                className="inline-flex items-center gap-3 bg-accent-gold text-white px-10 py-5 rounded-sm hover:bg-rose-gold transition-all duration-300 font-medium tracking-widest uppercase text-sm shadow-xl hover:-translate-y-1"
              >
                <Calendar className="w-5 h-5" />
                Reserve Appointment
              </button>
            </ScrollReveal>
          </div>
        </section>
      </div>
      
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </>
  );
}
