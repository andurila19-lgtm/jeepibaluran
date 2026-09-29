import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ShieldCheck, HeartHandshake, MapPin, Users, CheckCircle2, ArrowRight } from "lucide-react";
import TrackedWhatsAppButton from "@/components/TrackedWhatsAppButton";
import { safeJsonStringify } from "@/lib/security";

export const metadata: Metadata = {
  title: "Tentang Layanan Sewa Jeep Baluran & Operator Tour Banyuwangi",
  description:
    "Mengenal penyedia layanan sewa Jeep Baluran untuk tour Banyuwangi & open trip Jawa Timur. Komunitas sopir lokal terpercaya berbasis di Pos Batangan TN Baluran.",
  keywords: [
    "Tentang Jeep Baluran",
    "Sewa Jeep Baluran",
    "Tour Banyuwangi",
    "Open Trip Jawa Timur",
    "Driver Lokal Baluran",
    "Pos Batangan Baluran",
  ],
  alternates: {
    canonical: "https://jeepbaluran.reaksy.com/tentang",
  },
  openGraph: {
    title: "Tentang Layanan Sewa Jeep Baluran & Operator Tour Banyuwangi",
    description:
      "Mengenal penyedia layanan sewa Jeep Baluran untuk tour Banyuwangi & open trip Jawa Timur. Komunitas sopir lokal terpercaya.",
    url: "https://jeepbaluran.reaksy.com/tentang",
    images: ["/images/jeep-baluran-oranye-tamu.webp"],
  },
};

export default function TentangPage() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20informasi%20layanan%20dan%20ketersediaan%20armada.";

  const values = [
    {
      title: "Warga Lokal Asli",
      desc: "Kami lahir dan tumbuh di sekitar kawasan Taman Nasional Baluran. Kami memahami betul karakter jalan, musim, dan kebiasaan satwa liar di padang savana.",
      icon: Users,
    },
    {
      title: "Ramah Semua Usia",
      desc: "Wisata Baluran adalah wisata santai tanpa pendakian berat. Seluruh perjalanan dirancang nyaman bagi anak-anak, keluarga, hingga orang tua.",
      icon: HeartHandshake,
    },
    {
      title: "Tarif Jujur & Transparan",
      desc: "Tidak ada biaya tersembunyi. Paket Shuttle Baluran kami tetapkan jelas Rp 597.000 / Jeep PP dengan fasilitas unit, sopir, dan BBM yang sudah termasuk.",
      icon: ShieldCheck,
    },
    {
      title: "Langsung Pemilik (No Calo)",
      desc: "Anda berkomunikasi langsung dengan pengemudi/pemilik armada melalui WhatsApp tanpa melalui perantara, memastikan jadwal dan titik temu Anda pasti.",
      icon: CheckCircle2,
    },
  ];

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
        "name": "Tentang Kami",
        "item": "https://jeepbaluran.reaksy.com/tentang",
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
          <span className="text-charcoal font-semibold">Tentang Kami</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-3">
            <span className="w-2 h-2 rounded-full bg-earth shrink-0" />
            <span>Dedikasi & Keramahan Lokal</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Tentang Layanan Sewa Jeep Baluran
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Menghadirkan pengalaman safari Taman Nasional Baluran (*Africa van Java*) yang autentik, aman, dan berkesan bagi setiap wisatawan Nusantara maupun mancanegara.
          </p>
        </div>

        {/* Main Narrative Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-charcoal-muted leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-charcoal tracking-tight">
              Mengapa Menjelajahi Baluran Lebih Baik Bersama Sopir Lokal?
            </h2>
            <p>
              Taman Nasional Baluran memiliki ekosistem padang savana terluas di Pulau Jawa. Namun, jalan masuk dari gerbang Pos Batangan menuju Savana Bekol dan Pantai Bama adalah jalan makadam bebatuan alami sepanjang 15 kilometer yang kurang bersahabat untuk kendaraan sedan atau mobil ber-ground clearance rendah.
            </p>
            <p>
              Dengan armada Jeep 4x4 kami, guncangan medan makadam diredam dengan baik, sehingga Anda dan keluarga dapat menikmati pemandangan alam dengan tenang.
            </p>
            <p>
              Lebih dari sekadar menyetir, kami sebagai warga lokal siap menjadi pemandu Anda: menunjukkan pohon Rais yang ikonik untuk spot foto, mengarahkan Anda ke spot kawanan rusa yang sedang merumput, hingga merekomendasikan waktu terbaik saat fajar tiba.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-base-border bg-base-subtle p-6 sm:p-8 space-y-6">
              <div className="flex items-center gap-3 border-b border-base-border/80 pb-4">
                <div className="w-10 h-10 rounded-xl bg-olive text-white flex items-center justify-center font-bold">
                  4×4
                </div>
                <div>
                  <h3 className="font-bold text-charcoal">Basecamp Jeep Baluran</h3>
                  <p className="text-xs text-charcoal-light">Titik Temu Resmi Wisatawan</p>
                </div>
              </div>

              <div className="space-y-3 text-xs sm:text-sm text-charcoal-muted">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-earth shrink-0 mt-0.5" />
                  <span><strong>Pos Batangan</strong> (Pintu Gerbang Utama TN Baluran), Jl. Raya Banyuwangi - Situbondo KM 35, Jawa Timur.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 text-center font-bold text-olive">WA:</span>
                  <span><strong>0852-0457-2677</strong> (Fast Response Pemilik)</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <span className="w-4 text-center font-bold text-olive">Jam:</span>
                  <span>Setiap hari: 05:00 - 18:00 WIB</span>
                </div>
              </div>

              <div className="pt-2">
                <TrackedWhatsAppButton
                  href={waUrl}
                  packageName="Basecamp Card Inquiry"
                  ctaPosition="tentang_page_basecamp_card"
                  ariaLabel="Hubungi Operator Jeep Baluran via WhatsApp"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-earth hover:bg-earth-hover text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Hubungi via WhatsApp</span>
                </TrackedWhatsAppButton>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Core Values Grid */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-earth block mb-1">
              Komitmen Layanan
            </span>
            <h3 className="text-2xl font-bold text-charcoal">
              4 Nilai yang Kami Jaga untuk Setiap Tamu
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-base-border bg-base-light p-6 space-y-3 hover:border-charcoal/40 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-olive/10 text-olive flex items-center justify-center">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-base text-charcoal">{item.title}</h4>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-2xl border border-base-border bg-base-white p-8 text-center space-y-4">
          <h3 className="text-2xl font-bold text-charcoal">
            Ingin Konsultasi Rencana Safari Anda?
          </h3>
          <p className="text-sm text-charcoal-muted max-w-lg mx-auto">
            Jangan ragu untuk bertanya seputar kondisi cuaca di Baluran, waktu kemunculan satwa, atau rekomendasi jam keberangkatan.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/paket"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-olive hover:bg-olive-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <span>Lihat Pilihan Paket Safari</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <TrackedWhatsAppButton
              href={waUrl}
              packageName="Tentang Page Consultation"
              ctaPosition="tentang_page_bottom_cta"
              ariaLabel="Chat WhatsApp Pemilik Jeep Baluran"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-earth hover:bg-earth-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat WhatsApp Pemilik</span>
            </TrackedWhatsAppButton>
          </div>
        </div>

      </div>
    </div>
  );
}
