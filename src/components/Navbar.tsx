"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X, Compass, Shield } from "lucide-react";
import { trackWhatsAppClick } from "@/lib/analytics";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "PAKET SAFARI", href: "/paket" },
    { name: "TENTANG", href: "/tentang" },
    { name: "ULASAN", href: "/#faq" },
    { name: "GALERI", href: "/galeri" },
    { name: "LOKASI", href: "/kontak" },
  ];

  const waUrl =
    "https://wa.me/6285204572677?text=" +
    encodeURIComponent("Halo Kak, saya ingin booking / tanya jadwal ketersediaan armada Jeep Baluran.");

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 text-white transition-colors duration-200 ${
        mobileMenuOpen
          ? "bg-[#0B1319]"
          : "bg-[#0B1319]/95 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          
          {/* Brand Identity: Official Logo Emblem + Two-line Typography */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3 shrink-0">
            <div className="relative w-9 h-9 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-[#F59E0B]/60 shadow-md flex items-center justify-center shrink-0 bg-[#26382B]">
              <Image
                src="/images/logo-baluran-emblem.webp"
                alt="Logo Resmi Jeep Baluran"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-bold tracking-wider text-white uppercase leading-tight font-serif group-hover:text-[#F59E0B] transition-colors whitespace-nowrap">
                JEEP BALURAN
              </span>
              <span className="text-[9px] sm:text-[10px] text-[#F59E0B] font-semibold tracking-wider sm:tracking-widest uppercase leading-none mt-0.5 whitespace-nowrap">
                POS BATANGAN · BALURAN
              </span>
            </div>
          </Link>

          {/* Center Navigation Links (Uppercase & Letterspaced) */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-xs font-semibold tracking-widest uppercase transition-colors py-1 ${
                    isActive
                      ? "text-[#F59E0B]"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Actions: BOOK NOW Button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">

            {/* Book Now Button (Golden Yellow Pill) */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  packageName: "Navbar Booking",
                  pageLocation: pathname,
                  ctaPosition: "Desktop Navbar",
                })
              }
              id="navbar-book-btn"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-[#F59E0B] hover:bg-[#EAB308] text-black text-xs font-extrabold uppercase tracking-wider rounded-full transition-all shadow-md active:scale-95"
            >
              BOOK NOW
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-2 sm:hidden shrink-0">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() =>
                trackWhatsAppClick({
                  packageName: "Navbar Booking",
                  pageLocation: pathname,
                  ctaPosition: "Mobile Navbar Button",
                })
              }
              className="inline-flex items-center justify-center px-3 py-1.5 bg-[#F59E0B] text-black text-[11px] font-extrabold rounded-full uppercase tracking-wider shadow-xs"
              aria-label="Book Now WhatsApp"
            >
              BOOK NOW
            </a>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 border border-white/20 rounded-lg text-white hover:bg-white/10 transition-colors"
              aria-label={mobileMenuOpen ? "Tutup Navigasi" : "Buka Navigasi"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Floating Overlay Menu (Does NOT push Hero down) */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop outside click dismiss */}
          <div
            className="fixed inset-0 top-16 sm:top-20 bg-black/60 backdrop-blur-xs z-40 lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Floating Dropdown Drawer (100% Solid Opaque, No Transparency) */}
          <div className="absolute top-full left-0 w-full bg-[#0B1319] border-b border-white/15 px-5 py-5 space-y-4 shadow-2xl z-50 lg:hidden animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2.5 px-3 text-xs font-bold uppercase tracking-wider rounded-lg text-white/90 hover:text-[#F59E0B] hover:bg-white/5 transition-colors flex items-center justify-between"
                >
                  <span>{item.name}</span>
                  {item.href === "/paket" && (
                    <span className="text-[10px] bg-[#F59E0B]/20 text-[#F59E0B] px-2 py-0.5 rounded font-mono font-bold">
                      600rb PP
                    </span>
                  )}
                </Link>
              ))}
            </nav>

            <div className="pt-3 border-t border-white/10 space-y-3">
              <div className="text-xs text-white/70 flex items-center justify-between px-1">
                <span>📍 Pos Batangan (KM 35)</span>
                <span className="text-[#F59E0B] font-bold">05:00 - 18:00 WIB</span>
              </div>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  trackWhatsAppClick({
                    packageName: "Navbar Mobile Drawer",
                    pageLocation: pathname,
                    ctaPosition: "Mobile Drawer",
                  });
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#F59E0B] text-black text-xs font-extrabold uppercase tracking-wider rounded-full shadow-md active:scale-95 transition-transform"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat WhatsApp (+62 852-0457-2677)</span>
              </a>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
