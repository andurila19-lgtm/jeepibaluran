"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Paket", href: "#paket" },
    { name: "Galeri", href: "#galeri" },
    { name: "Tentang", href: "#tentang" },
    { name: "FAQ", href: "#faq" },
  ];

  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Kak%2C%20saya%20ingin%20bertanya%20tentang%20paket%20Jeep%20Ijen.";

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-base-border shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link href="#" className="flex flex-col">
            <span className="text-2xl font-black tracking-tight text-charcoal leading-none">
              JEEP IJEN
            </span>
            <span className="text-xs text-charcoal-light font-medium tracking-wide mt-1">
              Banyuwangi, Jawa Timur
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold text-charcoal-muted hover:text-charcoal transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop WhatsApp CTA */}
          <div className="hidden md:flex items-center">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-sm font-bold transition-colors shadow-sm"
              id="navbar-whatsapp-btn"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 rounded-md bg-[#25D366] text-white text-xs font-bold"
            >
              WA
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-base-border text-charcoal hover:bg-base-subtle"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-base-border bg-white px-4 py-4 space-y-3">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 text-base font-semibold text-charcoal border-b border-base-border/50"
              >
                {item.name}
              </Link>
            ))}
          </nav>
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-[#25D366] text-white text-sm font-bold mt-2"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat WhatsApp (0852-0457-2677)</span>
          </a>
        </div>
      )}
    </header>
  );
}
