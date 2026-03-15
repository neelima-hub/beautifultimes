"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Star, ChevronLeft, ChevronRight, X, ArrowRight } from "lucide-react";
import { PromoModal } from "@/components/PromoModal";
import { BookingModal } from "@/components/BookingModal";

const lookbookImages = [
  { src: "/images/bridal makeup.webp", label: "Bridal Makeup" },
  { src: "/images/hairstyling.jpg", label: "Hair Styling" },
  { src: "/images/masage.jpg", label: "Head Massage" },
  { src: "/images/img_thread.jpg", label: "Threading & Care" },
  { src: "/images/hair color.webp", label: "Hair Coloring" },
  { src: "/images/body waxing.avif", label: "Body Waxing" },
  { src: "/images/face waxing.webp", label: "Facial Waxing" },
  { src: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", label: "Spa" },
  { src: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", label: "Facial" },
];

const testimonials = [
  { name: "Fatima A.", text: "An absolute haven of peace. The keratin treatment was flawless and the staff made me feel like royalty." },
  { name: "Sarah K.", text: "Beautiful times lives up to its name. The rose gold ambiance and attention to detail during my spa day were unmatched." },
  { name: "Amira H.", text: "Finally found my go-to salon in Gujarat. The gelish manicure lasted weeks and the facial left my skin glowing." },
  { name: "Jessica T.", text: "Luxury from the moment you step in. The glass of champagne during my hair styling was a wonderful touch!" },
  { name: "Noura M.", text: "Incredible balayage transformation. The stylist truly understood exactly what I wanted. Highly recommended." },
  { name: "Elena R.", text: "A premium experience through and through. The deep tissue massage was exactly what I needed after a long week." }
];

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [selectedBookingCategory, setSelectedBookingCategory] = useState<string>("Hair Care & Styling");

  const openBookingModalWithCategory = (category: string) => {
    setSelectedBookingCategory(category);
    setIsBookingModalOpen(true);
  };

  const nextTestimonial = () => setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      <PromoModal />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
            alt="Luxury bright salon interior"
            fill
            className="object-cover object-center opacity-70"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-20">
          <ScrollReveal direction="up" delay={0.2}>
            <span className="text-white uppercase tracking-[0.3em] font-medium text-sm mb-4 block drop-shadow-md">Welcome to Beautiful times</span>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.4}>
            <h1 className="text-5xl md:text-7xl font-serif text-white mb-6 leading-tight drop-shadow-xl">
              Elevate Your Beauty
            </h1>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.6}>
            <p className="text-xl md:text-2xl text-white/90 mb-10 font-sans font-light drop-shadow-md">
              The Peak of Luxury in Gujarat
            </p>
          </ScrollReveal>
          <ScrollReveal direction="up" delay={0.8}>
            <Link
              href="/services"
              className="inline-block bg-accent-gold text-white px-10 py-4 rounded-sm hover:bg-rose-gold transition-all duration-300 font-medium tracking-widest uppercase text-sm shadow-xl shadow-accent-gold/20 hover:-translate-y-1"
            >
              Discover Our Services
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-2xl">
              <ScrollReveal>
                <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-4">Our Services</h2>
                <div className="w-24 h-1 bg-accent-gold opacity-70 mb-6"></div>
                <p className="text-text-dark/70 font-light text-lg">Experience our wide range of premium salon and spa services, crafted to enhance your natural beauty.</p>
              </ScrollReveal>
            </div>
            <ScrollReveal direction="right" delay={0.2}>
              <Link 
                href="/services" 
                className="hidden md:flex items-center gap-2 border-b-2 border-accent-gold pb-1 text-text-dark hover:text-accent-gold transition-colors font-medium tracking-wide text-sm uppercase group"
              >
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Service 1 */}
            <ScrollReveal delay={0.1}>
              <div className="group relative overflow-hidden rounded-sm cursor-pointer border border-gray-100 bg-white">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src="/images/hairstyling.jpg" 
                    alt="Hair Service" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl font-serif mb-1">Hair Styling</h3>
                  <p className="text-sm text-white/80 font-light hidden group-hover:block animate-in fade-in slide-in-from-bottom-2 duration-300">Precision cuts & coloring</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 2 */}
            <ScrollReveal delay={0.2}>
              <div className="group relative overflow-hidden rounded-sm cursor-pointer border border-gray-100 bg-white">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src="/images/masage.jpg" 
                    alt="Spa Service" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl font-serif mb-1">Spa & Massage</h3>
                  <p className="text-sm text-white/80 font-light hidden group-hover:block animate-in fade-in slide-in-from-bottom-2 duration-300">Relaxation therapies</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 3 */}
            <ScrollReveal delay={0.3}>
              <div className="group relative overflow-hidden rounded-sm cursor-pointer border border-gray-100 bg-white">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src="/images/bridal makeup.webp" 
                    alt="Makeup Service" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl font-serif mb-1">Bridal Makeup</h3>
                  <p className="text-sm text-white/80 font-light hidden group-hover:block animate-in fade-in slide-in-from-bottom-2 duration-300">Flawless looks</p>
                </div>
              </div>
            </ScrollReveal>

            {/* Service 4 */}
            <ScrollReveal delay={0.4}>
              <div className="group relative overflow-hidden rounded-sm cursor-pointer border border-gray-100 bg-white">
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image 
                    src="/images/img_thread.jpg" 
                    alt="Threading Service" 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-full p-6 text-white transform group-hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl font-serif mb-1">Threading & Care</h3>
                  <p className="text-sm text-white/80 font-light hidden group-hover:block animate-in fade-in slide-in-from-bottom-2 duration-300">Precision shaping</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal>
            <div className="mt-10 md:hidden flex justify-center">
              <Link 
                href="/services" 
                className="inline-flex items-center gap-2 bg-text-dark text-white px-8 py-3 rounded-sm font-medium tracking-wide text-sm uppercase"
              >
                View All Services
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* VIP Packages */}
      <section className="py-24 bg-cream-dark relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-gold/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-gold/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-4">VIP Packages</h2>
              <div className="w-24 h-1 bg-rose-gold mx-auto opacity-70 mb-6"></div>
              <p className="text-text-dark/70 max-w-2xl mx-auto font-light text-lg">Indulge in our carefully curated bundles designed to provide the ultimate relaxation and beauty transformation.</p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Package 1 */}
            <ScrollReveal delay={0.1} className="h-full">
              <div className="bg-white p-10 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col border border-transparent hover:border-accent-gold/20">
                <h3 className="text-2xl font-serif text-text-dark mb-2">Custom Beauty Bundle</h3>
                <div className="flex items-baseline gap-2 mb-6 text-accent-gold">
                  <span className="text-xl">From</span>
                  <span className="text-4xl font-semibold">₹ 1,499</span>
                </div>
                <div className="w-full h-px bg-gray-100 mb-6"></div>
                <ul className="flex-1 flex flex-col gap-4 mb-8 text-text-dark/80 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span> Classic Blowdry
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span> Express Manicure
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span> Refreshing Mini Facial
                  </li>
                </ul>
                <button 
                  onClick={() => openBookingModalWithCategory('Hair Care & Styling')}
                  className="w-full py-3 border border-text-dark text-text-dark uppercase tracking-widest text-sm font-medium hover:bg-text-dark hover:text-white transition-colors"
                >
                  Select Package
                </button>
              </div>
            </ScrollReveal>

             {/* Package 2 (Featured) */}
             <ScrollReveal delay={0.2} className="h-full">
              <div className="bg-text-dark text-white p-10 rounded-sm shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-gold/20 rounded-bl-full -z-0"></div>
                <span className="absolute top-4 right-4 text-xs uppercase tracking-widest text-accent-gold font-medium">Most Popular</span>
                
                <h3 className="text-2xl font-serif mb-2 relative z-10">Gelish Spa Combos</h3>
                <div className="flex items-baseline gap-2 mb-6 text-accent-gold relative z-10">
                  <span className="text-xl">From</span>
                  <span className="text-4xl font-semibold">₹ 2,999</span>
                </div>
                <div className="w-full h-px bg-white/20 mb-6"></div>
                <ul className="flex-1 flex flex-col gap-4 mb-8 text-white/80 font-light relative z-10">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span> Gel Manicure & Pedicure
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span> Hydrating Hand Mask
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span> 15-Min Stress Relief Massage
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span> Complimentary Champagne
                  </li>
                </ul>
                <button 
                  onClick={() => openBookingModalWithCategory('Premium Nail Bar')}
                  className="w-full py-3 bg-accent-gold text-white uppercase tracking-widest text-sm font-medium hover:bg-rose-gold transition-colors relative z-10"
                >
                  Select Package
                </button>
              </div>
            </ScrollReveal>

            {/* Package 3 */}
            <ScrollReveal delay={0.3} className="h-full">
              <div className="bg-white p-10 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 h-full flex flex-col border border-transparent hover:border-accent-gold/20">
                <h3 className="text-2xl font-serif text-text-dark mb-2">The Royal Retreat</h3>
                <div className="flex items-baseline gap-2 mb-6 text-accent-gold">
                  <span className="text-xl">From</span>
                  <span className="text-4xl font-semibold">₹ 7,999</span>
                </div>
                <div className="w-full h-px bg-gray-100 mb-6"></div>
                <ul className="flex-1 flex flex-col gap-4 mb-8 text-text-dark/80 font-light">
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span> 60-Min Deep Tissue Massage
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span> 24K Gold Facial Treatment
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-accent-gold mt-1">✦</span> Deep Conditioning Hair Spa
                  </li>
                </ul>
                <button 
                  onClick={() => openBookingModalWithCategory('Spa & Massage')}
                  className="w-full py-3 border border-text-dark text-text-dark uppercase tracking-widest text-sm font-medium hover:bg-text-dark hover:text-white transition-colors"
                >
                  Select Package
                </button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Specialties */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-20">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-4">Our Specialties</h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto opacity-70"></div>
            </ScrollReveal>
          </div>

          <div className="flex flex-col gap-24">
            {/* Specialty 1 */}
            <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 relative h-[500px] rounded-t-full md:rounded-t-none md:rounded-l-full overflow-hidden shadow-2xl">
                <ScrollReveal direction="right" className="w-full h-full">
                  <Image
                    src="/image_Brazilian%20Keratin%20Treatment.jpg"
                    alt="Brazilian Keratin Treatment"
                    fill
                    className="object-contain bg-text-dark/5"
                  />
                </ScrollReveal>
              </div>
              <div className="w-full md:w-1/2 md:pr-12">
                <ScrollReveal direction="left">
                  <span className="inline-block px-4 py-1 border border-accent-gold text-accent-gold text-xs uppercase tracking-widest mb-6 rounded-full font-medium">Most Requested</span>
                  <h3 className="text-3xl md:text-4xl font-serif text-text-dark mb-6">Brazilian Keratin Treatment</h3>
                  <p className="text-text-dark/70 text-lg mb-8 leading-relaxed font-light">
                    Transform your hair with our signature smoothing treatment. Say goodbye to frizz and hello to mirror-like shine that lasts for months. Formulated with premium ingredients straight from Brazil to nourish every strand.
                  </p>
                  <Link href="/services" className="font-medium text-accent-gold hover:text-rose-gold uppercase tracking-widest text-sm flex items-center gap-2 group">
                    Learn More 
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </ScrollReveal>
              </div>
            </div>

            {/* Specialty 2 */}
            <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
              <div className="w-full md:w-1/2 relative h-[500px] rounded-t-full md:rounded-t-none md:rounded-r-full overflow-hidden shadow-2xl">
                 <ScrollReveal direction="left" className="w-full h-full">
                  <Image
                    src="/images_Brazilian%20Phloreten%20Hair%20Spa.jpg"
                    alt="Brazilian Protein Hair Spa"
                    fill
                    className="object-cover object-top"
                  />
                </ScrollReveal>
              </div>
              <div className="w-full md:w-1/2 md:pl-12">
                <ScrollReveal direction="right">
                  <span className="inline-block px-4 py-1 border border-emerald text-emerald text-xs uppercase tracking-widest mb-6 rounded-full font-medium">Deep Repair</span>
                  <h3 className="text-3xl md:text-4xl font-serif text-text-dark mb-6">Brazilian Protein Hair Spa</h3>
                  <p className="text-text-dark/70 text-lg mb-8 leading-relaxed font-light">
                    A revolutionary intensive repair system that reconstructs damaged hair fibers from the inside out. Perfect for over-processed or heat-damaged styling, bringing life, elasticity, and brilliant luster back to your tresses.
                  </p>
                  <Link href="/services" className="font-medium text-accent-gold hover:text-rose-gold uppercase tracking-widest text-sm flex items-center gap-2 group">
                    Learn More 
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Lookbook */}
      <section id="lookbook" className="py-24 bg-cream">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-4">The Lookbook</h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto opacity-70 mb-6"></div>
              <p className="text-text-dark/70 max-w-2xl mx-auto font-light text-lg">A glimpse into the stunning transformations crafted by our master stylists and therapists.</p>
            </ScrollReveal>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 max-w-7xl mx-auto">
            {lookbookImages.map((item, i) => (
              <ScrollReveal delay={i * 0.1} key={i}>
                <div 
                  className="relative group overflow-hidden rounded-sm cursor-pointer break-inside-avoid"
                  onClick={() => setLightboxIndex(i)}
                >
                  <Image 
                    src={item.src}
                    alt={`Lookbook image ${i + 1}`}
                    style={{ width: '100%', height: 'auto' }}
                    width={400}
                    height={i % 2 === 0 ? 500 : 300}
                    className="object-cover group-hover:scale-105 transition-transform duration-700 block"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[1px]">
                    <span className="text-white bg-accent-gold/90 px-6 py-2 uppercase tracking-wider text-sm font-medium rounded-sm border border-accent-gold">{item.label}</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center overflow-hidden">
          <button 
            className="absolute top-6 right-6 text-white/70 hover:text-white z-[110]"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-[110] p-4 hidden md:block"
            onClick={() => setLightboxIndex((prev) => (prev! - 1 + lookbookImages.length) % lookbookImages.length)}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <div className="relative w-full max-w-5xl h-[80vh] px-4 md:px-20 flex flex-col items-center justify-center">
            <Image 
              src={lookbookImages[lightboxIndex].src}
              alt={lookbookImages[lightboxIndex].label}
              fill
              className="object-contain"
            />
            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white bg-black/50 px-6 py-2 text-lg font-serif">
              {lookbookImages[lightboxIndex].label}
            </p>
          </div>
          
          <button 
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white z-[110] p-4 hidden md:block"
            onClick={() => setLightboxIndex((prev) => (prev! + 1) % lookbookImages.length)}
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}

      {/* Testimonials */}
      <section className="py-24 bg-cream-dark border-t border-gray-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <ScrollReveal>
              <h2 className="text-4xl md:text-5xl font-serif text-text-dark mb-4">Client Love</h2>
              <div className="w-24 h-1 bg-accent-gold mx-auto opacity-70"></div>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute top-0 -left-4 text-8xl text-accent-gold/10 font-serif leading-none">"</div>
            <div className="absolute bottom-0 -right-4 text-8xl text-accent-gold/10 font-serif leading-none rotate-180">"</div>
            
            <div className="relative h-64 md:h-48">
              {testimonials.map((testimonial, i) => (
                <div
                  key={i}
                  className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 ease-in-out px-8 ${
                    i === activeTestimonial ? "opacity-100 translate-x-0" : 
                    i < activeTestimonial ? "opacity-0 -translate-x-full" : "opacity-0 translate-x-full"
                  }`}
                >
                  <p className="text-xl md:text-3xl font-serif text-text-dark/90 mb-8 leading-snug">"{testimonial.text}"</p>
                  <div className="flex flex-col items-center">
                    <div className="flex gap-1 mb-3">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-4 h-4 text-accent-gold fill-accent-gold" />
                      ))}
                    </div>
                    <span className="uppercase tracking-widest text-sm font-medium text-text-dark/80">{testimonial.name}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={prevTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-dark/50 hover:bg-accent-gold hover:text-white hover:border-accent-gold transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button 
                onClick={nextTestimonial}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-text-dark/50 hover:bg-accent-gold hover:text-white hover:border-accent-gold transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="mt-20 text-center border-t border-gray-200/50 pt-16">
              <ScrollReveal>
                <h3 className="text-2xl font-serif text-text-dark mb-4">Love Your New Look?</h3>
                <p className="text-text-dark/70 mb-8 max-w-xl mx-auto font-light">
                  Your feedback means the world to us. Help others discover the Beautiful Times experience by leaving a review on Google.
                </p>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border-2 border-accent-gold text-accent-gold hover:bg-accent-gold hover:text-white transition-all px-8 py-3 rounded-sm font-medium tracking-wide uppercase text-sm"
                >
                  <Star className="w-4 h-4 fill-current" />
                  Leave a Google Review
                </a>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>
      <BookingModal 
        isOpen={isBookingModalOpen} 
        onClose={() => setIsBookingModalOpen(false)} 
        preselectedService={selectedBookingCategory}
      />
    </>
  );
}
