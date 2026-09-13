import Link from "next/link";
import { MessageCircle, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Kak%2C%20saya%20ingin%20bertanya%20tentang%20paket%20Jeep%20Ijen.";

  const navLinks = [
    { name: "Beranda", href: "#" },
    { name: "Paket", href: "#paket" },
    { name: "Galeri", href: "#galeri" },
    { name: "Tentang", href: "#tentang" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <footer className="bg-[#19221D] text-white/80 py-14 border-t border-charcoal">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-white/10">
          
          {/* Brand Info (6 cols) */}
          <div className="md:col-span-6 space-y-4">
            <div>
              <span className="text-2xl font-black text-white uppercase tracking-tight block">
                JEEP IJEN
              </span>
              <span className="text-xs text-white/60 tracking-wider uppercase mt-1 block">
                Banyuwangi, Jawa Timur
              </span>
            </div>

            <p className="text-sm text-white/70 leading-relaxed max-w-md">
              Layanan transportasi Jeep untuk wisatawan yang ingin menjelajahi kawasan Kawah Ijen dan sekitarnya.
            </p>

            <div className="space-y-2 text-xs text-white/80 pt-1">
              <p className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>
                  Dusun Watu Ulo, Rejosari, Kecamatan Glagah, Kabupaten Banyuwangi, Jawa Timur
                </span>
              </p>
              <p className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-accent shrink-0" />
                <a href="tel:085204572677" className="hover:text-white transition-colors">
                  0852-0457-2677
                </a>
              </p>
            </div>
          </div>

          {/* Navigation Links (3 cols) */}
          <div className="md:col-span-3">
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Navigasi
            </p>
            <ul className="space-y-2 text-sm text-white/70">
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
            <p className="text-xs font-bold uppercase tracking-wider text-white mb-3">
              Kontak WhatsApp
            </p>
            <p className="text-xs text-white/70">
              Hubungi kami langsung untuk tanya jadwal dan reservasi:
            </p>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-bold transition-colors shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>WhatsApp: 0852-0457-2677</span>
            </a>
          </div>

        </div>

        {/* Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} JEEP IJEN. Dusun Watu Ulo, Glagah, Banyuwangi.</p>
          <p>Layanan Wisata Jeep Ijen Banyuwangi</p>
        </div>

      </div>
    </footer>
  );
}
