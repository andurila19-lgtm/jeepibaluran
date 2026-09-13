import Link from "next/link";
import { MessageCircle, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Ijen%2C%20saya%20ingin%20tanya%20informasi%20paket%20dan%20ketersediaan.";

  const navLinks = [
    { name: "Paket Perjalanan", href: "#paket" },
    { name: "Pengalaman & Rute", href: "#pengalaman" },
    { name: "Galeri Foto", href: "#galeri" },
    { name: "Tentang Usaha Kami", href: "#tentang" },
    { name: "Tanya Jawab (FAQ)", href: "#faq" },
  ];

  return (
    <footer className="bg-[#161B18] text-white/80 pt-16 pb-12 border-t border-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-olive text-white flex items-center justify-center font-bold text-sm tracking-tight shrink-0">
                4×4
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight block leading-tight">
                  Jeep Ijen
                </span>
                <span className="text-xs text-white/60 font-medium">
                  Banyuwangi, Jawa Timur
                </span>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              Layanan transportasi Jeep 4x4 lokal yang melayani perjalanan wisata para wisatawan menuju kawasan Kawah Ijen dan sekitarnya dengan aman, ramah, dan berpengalaman.
            </p>

            <div className="space-y-2 text-xs text-white/75 pt-1">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-earth shrink-0 mt-0.5" />
                <span>
                  Dusun Watu Ulo, Rejosari, Kecamatan Glagah, Kabupaten Banyuwangi, Jawa Timur
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-earth shrink-0" />
                <a href="tel:085204572677" className="hover:text-white transition-colors">
                  0852-0457-2677
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navigasi Halaman
            </p>
            <ul className="space-y-2.5 text-sm text-white/70">
              {navLinks.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* WhatsApp Direct (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Hubungi Kami
            </p>
            <p className="text-xs text-white/70 leading-relaxed">
              Konsultasi jadwal keberangkatan, titik jemput, dan ketersediaan armada langsung via WhatsApp:
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-earth hover:bg-earth-hover text-white text-xs font-semibold transition-all shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>0852-0457-2677</span>
            </a>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Jeep Ijen Banyuwangi. Dusun Watu Ulo, Glagah.</p>
          <p>Layanan Wisata Jeep Lokal Ramah & Terpercaya</p>
        </div>

      </div>
    </footer>
  );
}
