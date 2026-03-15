import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-cream-dark border-t border-gray-100 pt-16 pb-8 font-sans text-text-dark/80">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          <div className="md:col-span-1">
            <Link href="/" className="inline-block mb-6">
              <Image src="/logo.svg" alt="Beautiful times Logo" width={260} height={65} className="h-14 w-auto opacity-90" />
            </Link>
            <p className="mb-6 leading-relaxed">
              Elevating beauty through luxury treatments. Experience the peak of pampering in the heart of Gujarat.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-accent-gold hover:text-white transition-all text-text-dark">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-sm hover:bg-accent-gold hover:text-white transition-all text-text-dark">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-serif text-xl font-medium text-text-dark mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-px after:bg-accent-gold after:bottom-0 after:left-0 pb-2">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/" className="hover:text-accent-gold transition-colors">Home</Link></li>
              <li><Link href="/services" className="hover:text-accent-gold transition-colors">Our Services</Link></li>
              <li><Link href="/#lookbook" className="hover:text-accent-gold transition-colors">The Lookbook</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-xl font-medium text-text-dark mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-px after:bg-accent-gold after:bottom-0 after:left-0 pb-2">Contact Us</h4>
            <ul className="flex flex-col gap-4">
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
            <h4 className="font-serif text-xl font-medium text-text-dark mb-6 relative inline-block after:content-[''] after:absolute after:w-1/2 after:h-px after:bg-accent-gold after:bottom-0 after:left-0 pb-2">Opening Hours</h4>
            <ul className="flex flex-col gap-3">
              <li className="flex justify-between border-b border-gray-200/60 pb-1">
                <span>Mon - Thu</span>
                <span className="font-medium text-text-dark">10:00 AM - 9:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-gray-200/60 pb-1">
                <span>Fri - Sun</span>
                <span className="font-medium text-text-dark">10:00 AM - 10:00 PM</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-gray-200/60 pt-8 flex flex-col md:flex-row items-center justify-between text-sm">
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
