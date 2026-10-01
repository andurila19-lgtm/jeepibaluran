import Link from "next/link";
import Image from "next/image";
import { MessageCircle, MapPin, ShieldCheck } from "lucide-react";
import TrackedWhatsAppButton from "@/components/TrackedWhatsAppButton";

export default function Footer() {
  const waUrl =
    "https://wa.me/6285204572677?text=" +
    encodeURIComponent("Halo Kak, saya ingin tanya informasi paket safari Jeep Baluran.");

  const navLinks = [
    { name: "Beranda", href: "/" },
    { name: "Paket Safari", href: "/paket" },
    { name: "Rute & Spot", href: "/rute" },
    { name: "Galeri Foto", href: "/galeri" },
    { name: "Tentang Kami", href: "/tentang" },
    { name: "Kontak & Lokasi", href: "/kontak" },
  ];

  return (
    <footer className="bg-[#0B1319] text-white/80 py-8 sm:py-12 lg:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Grid: Compact 1-col on mobile, 2-col on tablet, 12-col on desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 pb-6 sm:pb-10 border-b border-white/10">

          {/* Col 1: Brand & Direct Contact (lg: 5 cols) */}
          <div className="lg:col-span-5 space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[#F59E0B]/50 shadow-xs shrink-0 bg-[#26382B]">
                <Image
                  src="/images/logo-baluran-emblem.webp"
                  alt="Logo Jeep Baluran"
                  fill
                  sizes="32px"
                  className="object-cover"
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold text-white tracking-wider uppercase font-serif leading-none block">
                  Jeep Baluran
                </span>
                <span className="text-[10px] text-[#F59E0B] font-semibold tracking-widest uppercase">
                  TAMAN NASIONAL BALURAN
                </span>
              </div>
            </div>

            <p className="text-xs text-white/70 leading-relaxed max-w-sm hidden sm:block">
              Layanan transportasi sewa armada Jeep 4x4 lokal resmi untuk petualangan safari keluarga di Savana Bekol dan Pantai Bama.
            </p>

            <div className="space-y-1.5 text-xs text-white/75 pt-0.5">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                <span>Visitor Baluran (Gerbang Pos Batangan KM 35)</span>
              </p>
              <p className="flex items-center gap-2">
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>
                  WhatsApp:{" "}
                  <TrackedWhatsAppButton
                    href={waUrl}
                    packageName="Footer Direct Phone"
                    ctaPosition="footer_phone_link"
                    className="font-bold underline hover:text-[#F59E0B] transition-colors"
                  >
                    0852-0457-2677
                  </TrackedWhatsAppButton>
                </span>
              </p>
            </div>
          </div>

          {/* Col 2: Fast Navigation in 2-Column Grid for Mobile (lg: 3 cols) */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] mb-2 sm:mb-3">
              Navigasi Cepat
            </h3>
            {/* 2-column on mobile & tablet so it takes only 3 compact rows */}
            <ul className="grid grid-cols-2 sm:grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-1.5 text-xs text-white/70">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-[#F59E0B] hover:underline transition-colors py-0.5 block">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Operational Info & Quick Action (lg: 4 cols) */}
          <div className="sm:col-span-2 lg:col-span-4 space-y-2 sm:space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F59E0B] mb-1 sm:mb-2">
              Informasi Operasional
            </h3>
            <div className="text-xs text-white/75 space-y-1 leading-snug">
              <p>
                <strong className="text-white">Jadwal Safari:</strong> Program Pagi 07.30 & Program Siang 14.00 WIB
              </p>
              <p>
                <strong className="text-white">Titik Berangkat:</strong> Visitor Baluran (Pos Batangan)
              </p>
              <p>
                <strong className="text-white">Paket Shuttle:</strong> Rp 597.000 / Jeep PP (Ideal 5 Org)
              </p>
            </div>

            <div className="pt-1 hidden sm:block">
              <TrackedWhatsAppButton
                href={waUrl}
                packageName="Footer Inquiry"
                ctaPosition="footer_quick_action"
                ariaLabel="Chat WhatsApp Operator Jeep Baluran di Footer"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F59E0B] hover:bg-[#EAB308] text-black text-xs font-bold transition-all shadow-xs"
              >
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
                <span>Chat WhatsApp</span>
              </TrackedWhatsAppButton>
            </div>
          </div>

        </div>

        {/* Bottom copyright: Ultra compact single/double line */}
        <div className="pt-4 sm:pt-6 flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-3 text-[11px] sm:text-xs text-white/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Jeep Baluran Official. Seluruh Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1.5 text-white/60">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span>Operator Safari Jeep Resmi Pos Batangan</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
