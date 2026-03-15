"use client";

import { useState, useEffect } from "react";
import { Gift } from "lucide-react";

export function PromoFloatingButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Check if user has already seen and closed the promo
    if (sessionStorage.getItem("hasSeenPromo") === "true") {
      setShowButton(true);
    }

    const handlePromoClosed = () => {
      setShowButton(true);
    };

    window.addEventListener("promoClosed", handlePromoClosed);
    return () => window.removeEventListener("promoClosed", handlePromoClosed);
  }, []);

  if (!showButton) return null;

  return (
    <>
      <button
        onClick={() => window.dispatchEvent(new Event("openPromo"))}
        className="fixed bottom-6 left-6 z-50 bg-accent-gold text-white p-3 md:px-5 md:py-3 rounded-full shadow-lg hover:bg-rose-gold transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-105 active:scale-95"
        aria-label="Claim 10% Off"
      >
        <Gift className="w-5 h-5 group-hover:animate-pulse" />
        <span className="hidden md:block font-medium tracking-wide uppercase text-sm">
          10% Off First Visit
        </span>
      </button>
    </>
  );
}
