"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Paket", href: "#paket" },
    { name: "Pengalaman", href: "#pengalaman" },
    { name: "Galeri", href: "#galeri" },
    { name: "Tentang Kami", href: "#tentang" },
    { name: "FAQ", href: "#faq" },
  ];

  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Ijen%2C%20saya%20ingin%20tanya%20informasi%20paket%20dan%20ketersediaan.";

  return (
    <header className="sticky top-0 z-40 bg-base-light/95 backdrop-blur-sm border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand */}
          <Link href="#" className="group flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-olive text-white flex items-center justify-center font-bold text-lg tracking-tight shrink-0 shadow-sm">
              4×4
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-charcoal leading-none group-hover:text-earth transition-colors">
                Jeep Ijen
              </span>
              <span className="text-xs text-charcoal-light mt-1 font-medium">
                Banyuwangi, Jawa Timur
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-charcoal-muted hover:text-charcoal transition-colors py-1"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Direct Contact Button */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:085204572677"
              className="text-xs font-semibold text-charcoal-muted hover:text-charcoal flex items-center gap-1.5 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-charcoal-light" />
              <span>0852-0457-2677</span>
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-olive hover:bg-olive-hover text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
              id="navbar-whatsapp-btn"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Action & Toggle */}
          <div className="flex items-center gap-2 md:hidden">
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
        <div className="md:hidden border-t border-base-border bg-base-white px-4 py-4 space-y-3 shadow-md">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-2 text-sm font-medium text-charcoal hover:bg-base-subtle rounded-md transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <div className="pt-2 border-t border-base-border space-y-2">
            <a
              href="tel:085204572677"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg border border-base-border text-charcoal text-xs font-semibold"
            >
              <Phone className="w-4 h-4 text-charcoal-light" />
              <span>Hubungi: 0852-0457-2677</span>
            </a>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-olive text-white text-xs font-semibold"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat WhatsApp Pemilik</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
