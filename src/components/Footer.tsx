import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-text-dark pt-16 pb-8 font-sans text-white/80">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.svg" alt="Beautiful times Logo" width={260} height={65} className="h-14 w-auto opacity-90 brightness-0 invert" />
            </Link>
            <p className="mb-6 leading-relaxed font-light">
              Elevating beauty through luxury treatments. Experience the peak of pampering in the heart of Gujarat.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent-gold text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-medium text-white mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-px after:bg-accent-gold after:bottom-0 after:left-0 pb-2">Quick Links</h4>
            <ul className="flex flex-col gap-3 font-light">
              <li><Link href="/" className="hover:text-accent-gold transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-accent-gold transition-colors">Our Services</Link></li>
              <li><Link href="/#lookbook" className="hover:text-accent-gold transition-colors">The Lookbook</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-medium text-white mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-px after:bg-accent-gold after:bottom-0 after:left-0 pb-2">Contact Us</h4>
            <ul className="flex flex-col gap-4 font-light">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent-gold shrink-0" />
                <span>S.G. Highway, Ahmedabad, Gujarat, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent-gold shrink-0" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent-gold shrink-0" />
                <span>hello@beautifultimes.ae</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-medium text-white mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-px after:bg-accent-gold after:bottom-0 after:left-0 pb-2">Opening Hours</h4>
            <ul className="flex flex-col gap-3 font-light">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Mon - Thu</span>
                <span className="font-medium text-white">10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Fri - Sun</span>
                <span className="font-medium text-white">10:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-sm font-light">
          <p>&copy; {new Date().getFullYear()} Beautiful times Salon. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:text-accent-gold transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-accent-gold transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
