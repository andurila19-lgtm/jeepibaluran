"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Paket Safari", href: "/paket" },
    { name: "Rute Wisata", href: "/rute" },
    { name: "Galeri", href: "/galeri" },
    { name: "Tentang", href: "/tentang" },
    { name: "Kontak", href: "/kontak" },
  ];

  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20informasi%20paket%20safari%20dan%20ketersediaan%20unit.";

  return (
    <header className="sticky top-0 z-40 bg-base-light/95 backdrop-blur-md border-b border-base-border transition-all">
      {/* Top Lively Announcement Bar */}
      <div className="bg-[#192720] text-white/85 text-[11px] font-medium py-1.5 px-4 overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold tracking-wide">Unit Ready Hari Ini</span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-white/70 text-[11px] truncate">
            <span>📍 Meeting Point: Pos Batangan TN Baluran</span>
            <span>•</span>
            <span>🏷️ Paket Shuttle Rp 600.000 / Jeep PP</span>
            <span>•</span>
            <span>⏰ Buka Setiap Hari: 05:00 - 18:00 WIB</span>
          </div>

          <span className="hidden md:flex items-center gap-1.5 text-white/80 shrink-0">
            <span className="text-earth font-bold">WA:</span>
            <span>0852-0457-2677</span>
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 lg:h-20">
          
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-2.5 shrink-0">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-olive text-white flex items-center justify-center font-bold text-base sm:text-lg tracking-tight shrink-0 shadow-sm transition-transform duration-300 group-hover:bg-olive-hover">
              4×4
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-charcoal leading-none group-hover:text-earth transition-colors">
                Jeep Baluran
              </span>
              <span className="text-[11px] sm:text-xs text-charcoal-light mt-1 font-medium">
                Safari Taman Nasional Baluran
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm py-1 transition-all relative ${
                    isActive
                      ? "font-bold text-charcoal after:absolute after:bottom-[-4px] after:left-0 after:right-0 after:h-0.5 after:bg-earth after:rounded-full"
                      : "font-medium text-charcoal-muted hover:text-charcoal"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Separator + WhatsApp Button */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            <div className="h-5 w-px bg-base-border" />
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-olive hover:bg-olive-hover text-white text-xs font-semibold tracking-wide transition-all duration-200 shadow-sm hover:shadow active:opacity-95"
              id="navbar-whatsapp-btn"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-400" />
              <span>Chat WhatsApp</span>
            </a>
          </div>

          {/* Mobile Action & Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-olive text-white text-xs font-medium"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-base-border text-charcoal hover:bg-base-subtle transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-base-border bg-base-white px-4 py-4 space-y-3 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => {
              const isActive =
                pathname === item.href ||
                (item.href !== "/" && pathname.startsWith(item.href));
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`py-2.5 px-3 text-sm rounded-md transition-colors ${
                    isActive
                      ? "bg-base-subtle font-semibold text-earth border-l-2 border-earth"
                      : "font-medium text-charcoal hover:bg-base-subtle"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          <div className="pt-2 border-t border-base-border">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-olive text-white text-sm font-semibold shadow-sm active:opacity-95"
            >
              <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
              <span>Chat WhatsApp Pemilik (0852-0457-2677)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
