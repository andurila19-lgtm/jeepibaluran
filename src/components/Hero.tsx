"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { MessageCircle, Star, MapPin } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mediaQuery.matches);

    const handleMediaChange = (e: MediaQueryListEvent) => {
      setReducedMotion(e.matches);
    };
    mediaQuery.addEventListener("change", handleMediaChange);

    if (mediaQuery.matches) {
      return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, []);

  const waUrl =
    "https://wa.me/6285204572677?text=" +
    encodeURIComponent("Halo Kak, saya tertarik dengan sewa Jeep Baluran. Saya ingin cek jadwal dan ketersediaan armada.");

  // Parallax subtle calculation
  const isScrolled = scrollY > 0 && !reducedMotion;
  const imageParallaxY = isScrolled ? Math.min(50, scrollY * 0.08) : 0;

  return (
    <div className="relative w-full">
      {/* 1. Main Hero Container (Full-screen clean cinematic viewport, zero white gap) */}
      <section className="relative min-h-[calc(100dvh-4rem)] sm:min-h-[calc(100dvh-5rem)] flex flex-col justify-center items-center overflow-hidden bg-[#0A141D] text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-14 lg:py-20">
        
        {/* Full-Bleed Cinematic Drone Video Background */}
        <div
          className="absolute inset-0 -top-[5%] w-full h-[110%] pointer-events-none overflow-hidden"
          style={{
            transform: imageParallaxY ? `translate3d(0, ${imageParallaxY}px, 0)` : "none",
            willChange: isScrolled ? "transform" : "auto",
          }}
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            poster="/images/jeep-trooper-baluran-hero.webp"
            className="w-full h-full object-cover object-center hero-cinematic-zoom brightness-95"
          >
            <source src="/Cinematic_drone_tracking_shot.webm" type="video/webm" />
            <source src="/Cinematic_drone_tracking_shot.mp4" type="video/mp4" />
          </video>
          {/* Deep Cinematic Multi-Stop Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A141D]/75 via-[#0A141D]/35 to-[#0A141D]/85" />
          <div className="absolute inset-0 bg-black/10" />
        </div>

        {/* Hero Content (Centered with comfortable spacing) */}
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">

          {/* Headline: Mix of Serif White + Golden-Amber Italic Serif */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white tracking-tight leading-tight sm:leading-[1.1] hero-motion-headline">
            Jelajahi Savana Bekol <br className="hidden sm:inline" />
            <span className="italic font-serif text-[#F59E0B] block sm:inline">
              bersama sahabat lokal Baluran.
            </span>
          </h1>

          {/* Supporting Narrative */}
          <p className="text-xs sm:text-base lg:text-lg text-white/85 max-w-2xl mx-auto leading-relaxed hero-motion-text px-2">
            Petualangan safari 4x4 santai & ramah keluarga melintasi Evergreen Forest, padang Savana Bekol, hingga Pantai Bama. Semua sudah lengkap — armada Jeep 4x4, BBM, sopir lokal, dan spot foto bebas di atas atap Jeep.
          </p>

          {/* Dual CTAs: Standard comfortable layout */}
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 hero-motion-cta w-full max-w-xs sm:max-w-none mx-auto">
            {/* Primary Button: Golden Yellow Pill */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  packageName: "Sewa Jeep Baluran (Hero)",
                  pageLocation: "/",
                  ctaPosition: "Hero Section",
                })
              }
              id="hero-book-wa-btn"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 sm:py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#EAB308] text-black text-sm sm:text-base font-bold transition-all duration-200 shadow-lg shadow-[#F59E0B]/25 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />
              <span>Book via WhatsApp</span>
            </a>

            {/* Secondary Button: Premium Dark Translucent Pill without blur */}
            <a
              href="#paket"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm sm:text-base font-medium border border-white/20 transition-all duration-200"
            >
              <span>Lihat Paket & Tarif ↓</span>
            </a>
          </div>

          {/* Trust Subline beneath buttons */}
          <div className="pt-1 flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs sm:text-sm text-white/75 hero-motion-facts">
            <span className="inline-flex items-center gap-1.5 text-white whitespace-nowrap">
              <Star className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B]" />
              <strong className="text-[#F59E0B]">4.9</strong> on Google (180+ ulasan)
            </span>
            <span className="text-white/40">•</span>
            <span className="whitespace-nowrap">Tanpa perantara calo</span>
          </div>

        </div>

      </section>
    </div>
  );
}
