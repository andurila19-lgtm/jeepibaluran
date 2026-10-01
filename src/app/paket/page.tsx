import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, Check, X, Sun, Sunset, Car, Clock, Users, ShieldCheck, MapPin, ArrowRight } from "lucide-react";
import TrackedWhatsAppButton from "@/components/TrackedWhatsAppButton";
import { safeJsonStringify } from "@/lib/security";

export const metadata: Metadata = {
  title: "Paket Sewa Jeep Baluran & Tour Banyuwangi | Shuttle Rp 597rb",
  description:
    "Pilihan paket sewa Jeep 4x4 Taman Nasional Baluran resmi. Program Pagi (07.30 WIB) dan Program Siang (14.00 WIB) berangkat dari Visitor Baluran Rp 597.000 / Jeep PP.",
  keywords: [
    "Paket Jeep Baluran",
    "Sewa Jeep Baluran",
    "Tour Banyuwangi",
    "Program Pagi Jeep Baluran",
    "Program Siang Jeep Baluran",
    "Visitor Baluran Jeep",
    "Shuttle Baluran 597rb",
  ],
  alternates: {
    canonical: "https://jeepbaluran.reaksy.com/paket",
  },
  openGraph: {
    title: "Paket Sewa Jeep Baluran & Tour Banyuwangi | Shuttle Rp 597rb",
    description:
      "Pilihan paket sewa Jeep 4x4 Taman Nasional Baluran resmi. Program Pagi (07.30) & Siang (14.00) berangkat dari Visitor Baluran Rp 597.000 / Jeep PP.",
    url: "https://jeepbaluran.reaksy.com/paket",
    images: ["/images/jeep-baluran-oranye-tamu.webp"],
  },
};

export default function PaketPage() {
  const waBase = "https://wa.me/6285204572677";
  const waPagi = `${waBase}?text=${encodeURIComponent(
    "Halo Jeep Baluran, saya ingin booking Program Pagi (07.30 WIB) Rp 597.000 / Jeep PP dari Visitor Baluran untuk tanggal [Tentukan Tanggal]."
  )}`;
  const waSiang = `${waBase}?text=${encodeURIComponent(
    "Halo Jeep Baluran, saya ingin booking Program Siang (14.00 WIB) Rp 597.000 / Jeep PP dari Visitor Baluran untuk tanggal [Tentukan Tanggal]."
  )}`;
  const waAntarJemput = `${waBase}?text=${encodeURIComponent(
    "Halo Jeep Baluran, saya ingin konsultasi Paket Private Trip + Antar Jemput Banyuwangi untuk jadwal Program Pagi (07.30) / Siang (14.00)."
  )}`;

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
        "name": "Paket Safari",
        "item": "https://jeepbaluran.reaksy.com/paket",
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
          <span className="text-charcoal font-semibold">Paket Safari</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-3">
            <span className="w-2 h-2 rounded-full bg-earth shrink-0" />
            <span>Tarif Transparan & Bebas Biaya Tersembunyi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Pilihan Paket Sewa Jeep Taman Nasional Baluran
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Semua paket menggunakan unit 4x4 terawat (Jeep Kuning & Oranye berstiker resmi) bersama pengemudi lokal berpengalaman. Tarif dihitung per unit mobil, bukan per orang.
          </p>
        </div>

        {/* 3 Main Packages */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">

          {/* Paket 1: Program Pagi (07.30 WIB) */}
          <div className="rounded-2xl border-2 border-olive/50 bg-base-light p-6 sm:p-8 flex flex-col justify-between relative hover:border-olive hover:shadow-lg transition-all duration-300">
            <div className="absolute -top-3.5 left-6 bg-olive text-white text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
              Paling Populer (Best Seller)
            </div>

            <div className="space-y-5 pt-2">
              <div className="flex items-center justify-between border-b border-base-border/80 pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-olive uppercase tracking-wider">
                  <Sunset className="w-3.5 h-3.5" />
                  Program Pagi
                </span>
                <span className="text-xs text-charcoal-light flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 07.30 WIB
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-charcoal">
                  Program Pagi (07.30 WIB)
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Format safari pagi terpopuler pulang-pergi. Titik keberangkatan pukul 07.30 WIB dari Visitor Baluran, melintasi Evergreen Forest, Savana Bekol, hingga pesisir Pantai Bama.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-charcoal">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Keberangkatan pukul 07.30 WIB dari Visitor Baluran</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Lintas Hutan Musim (Evergreen Forest kanopi sejuk)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Eksplor Savana Bekol (Bebas foto di atas atap Jeep)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Wisata Pantai Bama & Jembatan Hutan Mangrove</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Diantar kembali ke Visitor Baluran (PP 3-4 Jam)</span>
                </div>
              </div>

              <div className="pt-5 border-t border-base-border/80">
                <p className="text-xs text-charcoal-light font-medium">Tarif Resmi:</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-charcoal">Rp 597.000</span>
                  <span className="text-xs text-charcoal-muted">/ Jeep (PP)</span>
                </div>
                <p className="text-xs text-charcoal-muted mt-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-olive" />
                  <span>Kapasitas 1 unit (Ideal 5 orang)</span>
                </p>
              </div>
            </div>

            <div className="pt-6">
              <TrackedWhatsAppButton
                href={waPagi}
                packageName="Program Pagi (07.30 WIB)"
                ctaPosition="paket_page_pagi_card"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-olive hover:bg-olive-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow hover:ring-2 hover:ring-olive/20 active:opacity-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Pesan Program Pagi (597rb)</span>
              </TrackedWhatsAppButton>
            </div>
          </div>

          {/* Paket 2: Program Siang (14.00 WIB) */}
          <div className="rounded-2xl border border-base-border bg-base-light p-6 sm:p-8 flex flex-col justify-between hover:border-charcoal/40 hover:shadow-md transition-all duration-300">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-base-border/80 pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-earth uppercase tracking-wider">
                  <Sun className="w-3.5 h-3.5" />
                  Program Siang
                </span>
                <span className="text-xs text-charcoal-light flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 14.00 WIB
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-charcoal">
                  Program Siang (14.00 WIB)
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Safari siang santai menjelang sore. Titik keberangkatan pukul 14.00 WIB dari Visitor Baluran, menikmati eksotisme savana dan angin pesisir Pantai Bama.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-charcoal">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Keberangkatan pukul 14.00 WIB dari Visitor Baluran</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Lintas Hutan Musim (Evergreen Forest)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Wisata Pantai Bama & Hutan Mangrove</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Sesi foto cahaya sore di padang Savana Bekol</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Diantar kembali ke Visitor Baluran (PP 3-4 Jam)</span>
                </div>
              </div>

              <div className="pt-5 border-t border-base-border/80">
                <p className="text-xs text-charcoal-light font-medium">Tarif Resmi:</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black text-charcoal">Rp 597.000</span>
                  <span className="text-xs text-charcoal-muted">/ Jeep (PP)</span>
                </div>
                <p className="text-xs text-charcoal-muted mt-1 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-olive" />
                  <span>Kapasitas 1 unit (Ideal 5 orang)</span>
                </p>
              </div>
            </div>

            <div className="pt-6">
              <TrackedWhatsAppButton
                href={waSiang}
                packageName="Program Siang (14.00 WIB)"
                ctaPosition="paket_page_siang_card"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-earth hover:bg-earth-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow hover:ring-2 hover:ring-earth/20 active:opacity-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Pesan Program Siang (597rb)</span>
              </TrackedWhatsAppButton>
            </div>
          </div>

          {/* Paket 3: Private Trip + Antar-Jemput */}
          <div className="rounded-2xl border border-base-border bg-base-light p-6 sm:p-8 flex flex-col justify-between hover:border-charcoal/40 hover:shadow-md transition-all duration-300">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-base-border/80 pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-earth uppercase tracking-wider">
                  <Car className="w-3.5 h-3.5" />
                  All-in Jemput
                </span>
                <span className="text-xs text-charcoal-light flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5" /> Banyuwangi Kota
                </span>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-charcoal">
                  Paket Antar-Jemput
                </h2>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Solusi anti-repot bagi wisatawan luar kota. Dijemput langsung dari hotel, stasiun kereta api Banyuwangi, atau pelabuhan Ketapang pulang-pergi.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-xs sm:text-sm text-charcoal">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Penjemputan hotel/stasiun di Banyuwangi</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Transportasi langsung menuju TN Baluran</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Full tour safari Evergreen, Bekol & Bama</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Diantar kembali ke hotel / stasiun selesai trip</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Privat khusus rombongan keluarga Anda</span>
                </div>
              </div>

              <div className="pt-5 border-t border-base-border/80">
                <p className="text-xs text-charcoal-light font-medium">Informasi Tarif:</p>
                <p className="text-lg font-bold text-charcoal mt-1">
                  Hubungi via WhatsApp
                </p>
                <p className="text-xs text-charcoal-muted mt-1">
                  Disesuaikan dengan lokasi penjemputan Anda
                </p>
              </div>
            </div>

            <div className="pt-6">
              <TrackedWhatsAppButton
                href={waAntarJemput}
                packageName="Paket Antar-Jemput Banyuwangi"
                ctaPosition="paket_page_pickup_card"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl bg-earth hover:bg-earth-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow hover:ring-2 hover:ring-earth/20 active:opacity-95"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Konsultasi Penjemputan</span>
              </TrackedWhatsAppButton>
            </div>
          </div>

        </div>

        {/* Transparansi Fasilitas: Include & Exclude Box */}
        <div className="mt-14 rounded-2xl border border-base-border bg-base-subtle p-6 sm:p-10">
          <h3 className="text-xl font-bold text-charcoal mb-6">
            Rincian Fasilitas Sewa Jeep Baluran
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-olive flex items-center gap-2">
                <Check className="w-4 h-4" />
                Termasuk Dalam Paket (Sudah Include):
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-muted">
                <li className="flex items-start gap-2">
                  <span className="text-olive font-bold">✓</span>
                  <span>Unit armada 4x4 tangguh (Jeep Kuning & Oranye resmi)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive font-bold">✓</span>
                  <span>Bahan Bakar Minyak (BBM) selama trip safari</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive font-bold">✓</span>
                  <span>Driver lokal ramah merangkap pemandu spot foto satwa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive font-bold">✓</span>
                  <span>Spot foto ikonik di atas kap / atap Jeep di Savana Bekol</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-olive font-bold">✓</span>
                  <span>Pengantaran pulang-pergi (PP) sesuai rute paket</span>
                </li>
              </ul>
            </div>

            <div className="space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-charcoal-light flex items-center gap-2">
                <X className="w-4 h-4" />
                Belum Termasuk (Exclude):
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-charcoal-muted">
                <li className="flex items-start gap-2">
                  <span className="text-charcoal-light">✕</span>
                  <span>Tiket masuk resmi TN Baluran (dibeli di loket pintu gerbang Pos Batangan)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-charcoal-light">✕</span>
                  <span>Pengeluaran pribadi & konsumsi (makan/minum di kantin Pantai Bama)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-charcoal-light">✕</span>
                  <span>Tip sukarela untuk driver (opsional/tidak mengikat)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Rundown Schedule Card */}
        <div className="mt-10 rounded-2xl border border-base-border bg-base-white p-6 sm:p-10">
          <h3 className="text-xl font-bold text-charcoal mb-4">
            Contoh Rundown Paket Safari Baluran (3-4 Jam)
          </h3>
          <p className="text-sm text-charcoal-muted mb-6">
            Jadwal perjalanan sangat fleksibel dan dapat disesuaikan dengan ritme santai keluarga Anda:
          </p>

          <div className="space-y-4 border-l-2 border-olive/30 pl-4 sm:pl-6 text-sm">
            <div>
              <span className="font-bold text-olive block text-xs">Pemberangkatan / Titik Kumpul (Program Pagi 07.30 & Siang 14.00)</span>
              <p className="text-charcoal font-semibold mt-0.5">Visitor Baluran (Pos Batangan)</p>
              <p className="text-charcoal-muted text-xs">Tersedia 2 jadwal keberangkatan resmi: Program Pagi pukul 07.30 WIB dan Program Siang pukul 14.00 WIB. Bertemu driver Jeep Baluran, cek tiket masuk, dan persiapan briefing singkat.</p>
            </div>
            <div>
              <span className="font-bold text-olive block text-xs">Jalur 1: Evergreen Forest (15 - 20 Menit)</span>
              <p className="text-charcoal font-semibold mt-0.5">Melintasi Hutan Musim Tropis</p>
              <p className="text-charcoal-muted text-xs">Perjalanan sejuk melintasi terowongan pepohonan lebat alami sebelum memasuki area padang rumput.</p>
            </div>
            <div>
              <span className="font-bold text-olive block text-xs">Spot Utama: Savana Bekol (60 - 90 Menit)</span>
              <p className="text-charcoal font-semibold mt-0.5">Eksplor Savana Bekol & Menara Pandang</p>
              <p className="text-charcoal-muted text-xs">Sesi foto di atas atap mobil Jeep, berfoto di pohon Rais ikonik, dan naik ke menara pandang untuk melihat satwa liar.</p>
            </div>
            <div>
              <span className="font-bold text-olive block text-xs">Spot Pesisir: Pantai Bama (45 - 60 Menit)</span>
              <p className="text-charcoal font-semibold mt-0.5">Santai Pesisir & Hutan Mangrove</p>
              <p className="text-charcoal-muted text-xs">Menikmati pantai pasir putih berair tenang, jalan santai di jembatan kayu mangrove, atau santai minum kelapa muda.</p>
            </div>
            <div>
              <span className="font-bold text-olive block text-xs">Selesai Trip</span>
              <p className="text-charcoal font-semibold mt-0.5">Kembali ke Visitor Baluran (PP)</p>
              <p className="text-charcoal-muted text-xs">Perjalanan pulang menuju titik awal Visitor Baluran. Trip selesai dengan aman dan menyenangkan.</p>
            </div>
          </div>
        </div>

        {/* Bottom CTA to WA */}
        <div className="mt-12 text-center">
          <p className="text-sm text-charcoal-muted mb-4">
            Ingin tanggal tertentu atau butuh lebih dari 1 unit Jeep?
          </p>
          <TrackedWhatsAppButton
            href={waPagi}
            packageName="Paket Page Bottom CTA"
            ctaPosition="paket_page_bottom_cta"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-earth hover:bg-earth-hover text-white text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg active:opacity-95"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat WhatsApp Pemilik (0852-0457-2677)</span>
          </TrackedWhatsAppButton>
        </div>

      </div>
    </div>
  );
}
