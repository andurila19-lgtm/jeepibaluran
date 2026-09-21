import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MessageCircle, Clock, Shield } from "lucide-react";
import GoogleMapsRoute from "@/components/GoogleMapsRoute";

export const metadata: Metadata = {
  title: "Rute Wisata Jeep Baluran & Spot Savana Bekol | Tour Banyuwangi",
  description:
    "Panduan rute safari Jeep Baluran untuk tour Banyuwangi & open trip Jawa Timur. Jalur makadam dari Pos Batangan, Evergreen Forest, Savana Bekol, hingga Pantai Bama.",
  keywords: [
    "Rute Jeep Baluran",
    "Spot Wisata Baluran",
    "Tour Banyuwangi",
    "Savana Bekol Baluran",
    "Pantai Bama Baluran",
    "Baluran Jeep",
  ],
  alternates: {
    canonical: "https://jeepbaluran.reaksy.com/rute",
  },
  openGraph: {
    title: "Rute Wisata Jeep Baluran & Spot Savana Bekol | Tour Banyuwangi",
    description:
      "Panduan rute safari Jeep Baluran untuk tour Banyuwangi & open trip Jawa Timur. Jalur makadam dari Pos Batangan ke Savana Bekol dan Pantai Bama.",
    url: "https://jeepbaluran.reaksy.com/rute",
    images: ["/images/jeep-baluran-oranye-tamu.webp"],
  },
};

export default function RutePage() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20rute%20safari%20dan%20ketersediaan%20armada.";

  return (
    <div className="py-10 sm:py-14 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-muted mb-5">
          <Link href="/" className="hover:text-charcoal transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold">Rute & Spot Baluran</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-2.5">
            <span className="w-2 h-2 rounded-full bg-earth shrink-0" />
            <span>Petualangan Safari Alam Liar</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Rute & Spot Ikonik Taman Nasional Baluran
          </h1>
          <p className="mt-3 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Menjelajahi jalur makadam bebatuan alami sepanjang ±15 km dari gerbang Pos Batangan hingga pesisir Pantai Bama. Klik titik pos A–E di bawah untuk navigasi interaktif.
          </p>
        </div>

        {/* Interactive Google Maps Route Stepper */}
        <div className="mb-14">
          <GoogleMapsRoute embedded />
        </div>

        {/* Safari Tips & Etiquette */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <div className="rounded-2xl border border-base-border bg-base-subtle p-6 sm:p-8 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-earth/10 text-earth flex items-center justify-center">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-charcoal">
              Waktu Terbaik Berkunjung
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-muted">
              <li className="flex items-start gap-2">
                <span className="text-earth font-bold">•</span>
                <span><strong>Pagi Hari (05:30 - 08:30 WIB):</strong> Udara masih sangat sejuk dan merupakan waktu paling aktif bagi satwa liar seperti kawanan rusa dan banteng keluar merumput.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-earth font-bold">•</span>
                <span><strong>Sore Hari (15:00 - 17:30 WIB):</strong> Cahaya matahari melandai keemasan (*golden hour*), sangat indah untuk sesi foto di atas mobil Jeep di Savana Bekol.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-base-border bg-base-subtle p-6 sm:p-8 space-y-4">
            <div className="w-10 h-10 rounded-lg bg-olive/10 text-olive flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-charcoal">
              Aturan & Etika Menjaga Alam
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-muted">
              <li className="flex items-start gap-2">
                <span className="text-olive font-bold">•</span>
                <span><strong>Dilarang Memberi Makan Satwa:</strong> Biarkan satwa liar (rusa, kera, banteng) mencari makan secara alami tanpa ketergantungan pada makanan manusia.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-olive font-bold">•</span>
                <span><strong>Jaga Jarak Aman:</strong> Nikmati keindahan satwa liar dari jarak aman sesuai arahan driver lokal demi keselamatan bersama.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-olive font-bold">•</span>
                <span><strong>Bawa Pulang Sampah:</strong> Wajib membawa kembali seluruh sampah plastik Anda demi kelestarian habitat satwa Baluran.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA to Packages & WA */}
        <div className="mt-16 rounded-2xl border border-base-border bg-base-light p-8 text-center space-y-5">
          <h3 className="text-2xl font-bold text-charcoal">
            Siap Menjelajahi Rute Baluran Bersama Kami?
          </h3>
          <p className="text-sm text-charcoal-muted max-w-lg mx-auto">
            Paket Shuttle Baluran lengkap pulang-pergi melintasi rute ini hanya <strong>Rp 600.000 / Jeep</strong> (muat 5–6 orang).
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/paket"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-olive hover:bg-olive-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <span>Lihat Detail Paket & Tarif</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-earth hover:bg-earth-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Tanya Ketersediaan via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
