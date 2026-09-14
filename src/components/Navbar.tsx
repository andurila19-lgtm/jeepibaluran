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
      {/* Top Lively Announcement Bar - Pruned for Mobile, Full on Desktop */}
      <div className="bg-[#192720] text-white text-[10px] sm:text-[11px] font-medium py-1.5 px-2.5 sm:px-4 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-1.5 sm:gap-4">
          
          {/* Status Badge */}
          <div className="flex items-center gap-1.5 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-emerald-400 font-semibold tracking-wide whitespace-nowrap">
              <span className="xs:hidden">Unit Ready</span>
              <span className="hidden xs:inline">Unit Ready Hari Ini</span>
            </span>
          </div>

          {/* Center Info: Pruned on Mobile, Full on Desktop */}
          {/* Mobile Pruned Version */}
          <div className="flex sm:hidden items-center gap-1.5 text-white/80 text-[10px] truncate">
            <span className="font-semibold text-amber-300">🏷️ Shuttle 600rb</span>
            <span className="text-white/30">•</span>
            <span className="truncate">📍 Pos Batangan</span>
          </div>

          {/* Tablet & Desktop Full Version */}
          <div className="hidden sm:flex items-center gap-3 lg:gap-4 text-white/70 text-[11px] truncate">
            <span>📍 Meeting Point: Pos Batangan TN Baluran</span>
            <span>•</span>
            <span>🏷️ Shuttle Rp 600.000 / Jeep PP</span>
            <span>•</span>
            <span>⏰ 05:00 - 18:00 WIB</span>
          </div>

          {/* Right Action: WA Link */}
          <div className="flex items-center gap-1 shrink-0 text-right">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-white/85 hover:text-white transition-colors"
            >
              <span className="text-earth font-bold">WA:</span>
              <span className="hidden xs:inline">0852-0457-2677</span>
              <span className="xs:hidden">Chat</span>
            </a>
          </div>

        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18 lg:h-20 gap-2">
          
          {/* Brand */}
          <Link href="/" className="group flex items-center gap-2 sm:gap-2.5 min-w-0">
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-olive text-white flex items-center justify-center font-bold text-sm sm:text-base tracking-tight shrink-0 shadow-sm transition-transform duration-300 group-hover:bg-olive-hover">
              4×4
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-base sm:text-lg lg:text-xl font-bold tracking-tight text-charcoal leading-none group-hover:text-earth transition-colors truncate">
                Jeep Baluran
              </span>
              <span className="text-[10px] sm:text-xs text-charcoal-light mt-0.5 sm:mt-1 font-medium truncate">
                <span className="sm:hidden">Safari TN Baluran</span>
                <span className="hidden sm:inline">Safari Taman Nasional Baluran</span>
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

          {/* Right Action Desktop: Separator + WhatsApp Button */}
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

          {/* Mobile Action & Hamburger Toggle */}
          <div className="flex items-center gap-1.5 sm:gap-2 lg:hidden shrink-0">
            {/* Sleek WhatsApp Button on Mobile */}
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors shadow-2xs active:scale-95"
              aria-label="Chat WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-400" />
              <span className="hidden xs:inline">WhatsApp</span>
            </a>

            {/* Menu Toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 sm:p-2 rounded-lg border border-base-border text-charcoal hover:bg-base-subtle transition-colors focus:outline-none focus:ring-2 focus:ring-olive/30"
              aria-label={mobileMenuOpen ? "Tutup Menu" : "Buka Menu"}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-base-border bg-base-white px-4 py-4 space-y-3 shadow-lg animate-fade-in">
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
                  className={`py-2.5 px-3.5 text-sm rounded-lg transition-colors flex items-center justify-between ${
                    isActive
                      ? "bg-base-subtle font-bold text-earth border-l-3 border-earth"
                      : "font-medium text-charcoal hover:bg-base-subtle"
                  }`}
                >
                  <span>{item.name}</span>
                  {item.href === "/paket" && (
                    <span className="text-[10px] font-bold bg-olive/10 text-olive px-2 py-0.5 rounded-full">
                      Rp 600rb
                    </span>
                  )}
                  {item.href === "/rute" && (
                    <span className="text-[10px] font-bold bg-earth/10 text-earth px-2 py-0.5 rounded-full">
                      Peta Rute
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
          
          <div className="pt-3 border-t border-base-border space-y-2">
            <div className="text-xs text-charcoal-muted flex items-center justify-between px-1">
              <span>📍 Pos Batangan TN Baluran</span>
              <span className="font-semibold text-emerald-700">05:00 - 18:00 WIB</span>
            </div>

            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-olive hover:bg-olive-hover text-white text-sm font-semibold shadow-sm active:scale-98 transition-transform"
            >
              <MessageCircle className="w-4 h-4 fill-current text-emerald-400" />
              <span>Chat WhatsApp (0852-0457-2677)</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
