import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, CalendarCheck, MapPin, Clock, Navigation, CheckCircle2, AlertCircle } from "lucide-react";
import TrackedWhatsAppButton from "@/components/TrackedWhatsAppButton";
import { safeJsonStringify } from "@/lib/security";

export const metadata: Metadata = {
  title: "Kontak & Lokasi Meeting Point Pos Batangan | Jeep Baluran",
  description:
    "Hubungi kontak resmi sewa Jeep Baluran via WhatsApp 0852-0457-2677 untuk booking tour Banyuwangi & open trip Baluran. Panduan rute meeting point di Pos Batangan TN Baluran.",
  alternates: {
    canonical: "https://jeepbaluran.reaksy.com/kontak",
  },
  openGraph: {
    title: "Kontak & Lokasi Meeting Point Pos Batangan | Jeep Baluran",
    description:
      "Hubungi kontak resmi sewa Jeep Baluran via WhatsApp 0852-0457-2677 untuk booking tour Banyuwangi & open trip Baluran. Panduan rute meeting point Pos Batangan.",
    url: "https://jeepbaluran.reaksy.com/kontak",
    siteName: "Jeep Baluran",
    images: [
      {
        url: "/images/jeep-baluran-oranye-tamu.webp",
        width: 1200,
        height: 675,
        alt: "Kontak Resmi Sewa Jeep Baluran & Titik Kumpul Pos Batangan",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  keywords: [
    "kontak Jeep Baluran",
    "no WA Jeep Baluran",
    "meeting point Jeep Baluran",
    "Pos Batangan Baluran",
    "sewa Jeep Baluran",
    "tour Banyuwangi",
    "open trip Baluran",
  ],
};


export default function KontakPage() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20informasi%20sewa%20Jeep%20untuk%20Program%20Pagi%20(07.30)%20%2F%20Siang%20(14.00)%20dari%20Visitor%20Baluran.";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Beranda",
        "item": "https://jeepbaluran.reaksy.com/",
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Kontak & Lokasi",
        "item": "https://jeepbaluran.reaksy.com/kontak",
      },
    ],
  };

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonStringify(breadcrumbSchema) }}
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-muted mb-6">
          <Link href="/" className="hover:text-charcoal transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold">Kontak & Lokasi</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-3">
            <span className="w-2 h-2 rounded-full bg-earth shrink-0" />
            <span>Respon Cepat Langsung ke Pemilik</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Kontak & Panduan Titik Kumpul
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Hubungi kami langsung via WhatsApp untuk bertanya ketersediaan unit, memastikan jam keberangkatan, atau meminta panduan jalan menuju Pos Batangan Baluran.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">

          {/* Card 1: WhatsApp Utama */}
          <div className="rounded-2xl border-2 border-olive/50 bg-base-light p-6 sm:p-8 space-y-4 hover:border-olive hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-olive text-white flex items-center justify-center">
              <MessageCircle className="w-6 h-6 fill-current" />
            </div>
            <div>
              <span className="text-xs font-bold text-olive uppercase tracking-wider block">
                Saluran Utama (Fast Response)
              </span>
              <h2 className="text-xl font-bold text-charcoal mt-1">Chat WhatsApp</h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1.5 leading-relaxed">
                Tanyakan tanggal, jumlah peserta, dan paket safari. Kami akan segera membalas rincian lengkapnya.
              </p>
            </div>
            <div className="pt-2">
              <TrackedWhatsAppButton
                href={waUrl}
                packageName="Kontak WA Utama"
                ctaPosition="kontak_page_main_card"
                ariaLabel="Hubungi WhatsApp Resmi 0852-0457-2677"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-olive hover:bg-olive-hover text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>0852-0457-2677</span>
              </TrackedWhatsAppButton>
            </div>
          </div>

          {/* Card 2: Konsultasi Jadwal & Kuota */}
          <div className="rounded-2xl border border-base-border bg-base-light p-6 sm:p-8 space-y-4 hover:border-charcoal/40 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-earth/10 text-earth flex items-center justify-center">
              <CalendarCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-earth uppercase tracking-wider block">
                Konsultasi Jadwal
              </span>
              <h2 className="text-xl font-bold text-charcoal mt-1">Cek Kuota Armada</h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1.5 leading-relaxed">
                Ingin cek ketersediaan Jeep untuk tanggal kunjungan Anda atau butuh lebih dari 1 unit rombongan?
              </p>
            </div>
            <div className="pt-2">
              <TrackedWhatsAppButton
                href={waUrl}
                packageName="Cek Kuota Armada"
                ctaPosition="kontak_page_quota_card"
                ariaLabel="Tanya Ketersediaan Tanggal Safari Baluran"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-base-white hover:bg-base-subtle border border-base-border text-charcoal text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-olive" />
                <span>Tanya Ketersediaan Tanggal</span>
              </TrackedWhatsAppButton>
            </div>
          </div>

          {/* Card 3: Jadwal Program */}
          <div className="rounded-2xl border border-base-border bg-base-light p-6 sm:p-8 space-y-4 hover:border-charcoal/40 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-charcoal/10 text-charcoal flex items-center justify-center">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-charcoal-light uppercase tracking-wider block">
                Jadwal Program Resmi
              </span>
              <h2 className="text-xl font-bold text-charcoal mt-1">2 Sesi Safari Setiap Hari</h2>
              <p className="text-xs sm:text-sm text-charcoal-muted mt-1.5 leading-relaxed">
                Tersedia 2 program safari setiap hari dengan titik keberangkatan resmi dari Visitor Baluran:
              </p>
            </div>
            <div className="pt-2 text-xs font-semibold text-charcoal bg-base-white p-3 rounded-lg border border-base-border/70 space-y-1">
              <p>• <strong>Program Pagi:</strong> Pukul 07.30 WIB</p>
              <p>• <strong>Program Siang:</strong> Pukul 14.00 WIB</p>
            </div>
          </div>

        </div>

        {/* Meeting Point & Directions Guide */}
        <div className="rounded-2xl border border-base-border bg-base-subtle p-6 sm:p-10 mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-earth block mb-1">
              Titik Temu & Keberangkatan
            </span>
            <h3 className="text-2xl font-bold text-charcoal">
              Visitor Baluran (Pintu Gerbang Pos Batangan)
            </h3>
            <p className="mt-2 text-sm text-charcoal-muted">
              Alamat: Visitor Baluran, Gerbang Masuk Pos Batangan, Jl. Raya Banyuwangi - Situbondo KM 35, Desa Wonorejo, Kec. Banyuputih, Jawa Timur.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="font-bold text-base text-charcoal flex items-center gap-2">
                <Navigation className="w-4 h-4 text-olive" />
                <span>Petunjuk Arah dari Banyuwangi / Ketapang</span>
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Dari pusat Kota Banyuwangi atau Pelabuhan Ketapang, berkendara ke arah utara melintasi Jalur Pantura (arah Situbondo/Surabaya) selama ±40–50 menit. Pintu gerbang Pos Batangan berada tepat di pinggir jalan raya sebelah kanan jalan dengan gapura bertuliskan Taman Nasional Baluran.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-base text-charcoal flex items-center gap-2">
                <Navigation className="w-4 h-4 text-earth" />
                <span>Petunjuk Arah dari Surabaya / Situbondo</span>
              </h4>
              <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                Dari arah Surabaya atau Kota Situbondo, berkendara ke arah selatan menyusuri Jalur Pantura menuju Banyuwangi. Setelah melewati kawasan Hutan Baluran, pintu gerbang Pos Batangan berada tepat di sebelah kiri jalan.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-base-border/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-charcoal-muted">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-olive" />
              <span>Tersedia area parkir aman bagi wisatawan yang membawa kendaraan pribadi.</span>
            </span>
            <a
              href="https://maps.google.com/?q=Taman+Nasional+Baluran+Pos+Batangan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-olive hover:underline"
            >
              <span>Buka Petunjuk di Google Maps</span>
              <span>→</span>
            </a>
          </div>
        </div>

        {/* Booking FAQ Snippet */}
        <div className="rounded-2xl border border-base-border bg-base-light p-6 sm:p-8 space-y-6">
          <h3 className="text-xl font-bold text-charcoal">
            Pertanyaan Umum Seputar Pemesanan
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-charcoal-muted">
            <div className="space-y-1.5">
              <p className="font-bold text-charcoal">Bagaimana cara booking Jeep Baluran?</p>
              <p className="leading-relaxed">
                Cukup hubungi kami via WhatsApp dengan menyebutkan tanggal kedatangan dan jumlah peserta. Kami akan mengonfirmasi ketersediaan unit dan membagikan kontak driver yang bertugas.
              </p>
            </div>

            <div className="space-y-1.5">
              <p className="font-bold text-charcoal">Kapan waktu pembayaran dilakukan?</p>
              <p className="leading-relaxed">
                Pembayaran dapat diselesaikan saat bertemu langsung dengan driver di Pos Batangan sebelum perjalanan safari dimulai.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
