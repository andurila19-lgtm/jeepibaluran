import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Shield, Users, Camera, Wrench, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Galeri Foto & Armada Asli Jeep Baluran 4x4 | Unit Kuning & Oranye",
  description:
    "Dokumentasi asli armada sewa Jeep 4x4 Taman Nasional Baluran dan keseruan momen wisatawan berfoto di atas mobil di Savana Bekol dan Pantai Bama.",
  keywords: [
    "Galeri Jeep Baluran",
    "Foto Jeep Baluran",
    "Armada Jeep 4x4 Baluran",
    "Jeep Kuning Baluran",
    "Jeep Oranye Baluran",
    "Spot Foto Atap Mobil Baluran",
  ],
};

export default function GaleriPage() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20tertarik%20dengan%20armada%20Jeep%20Anda%20dan%20ingin%20tanya%20jadwal%20safari.";

  const galleryItems = [
    {
      src: "/images/jeep-baluran-kuning-tamu.webp",
      alt: "Rombongan wisatawan duduk santai di atas atap mobil Jeep Kuning di Savana Bekol Baluran",
      title: "Spot Foto Favorit di Atas Atap Jeep",
      desc: "Momen seru berfoto di atas roof rack kokoh berlatar langit biru dan pohon eksotis Savana Bekol.",
      badge: "Unit Kuning",
      aspect: "h-[320px] sm:h-[400px]",
    },
    {
      src: "/images/jeep-baluran-oranye-tamu.webp",
      alt: "Wisatawan berpose di atas Jeep Oranye berstiker resmi JEEP BALURAN",
      title: "Keseruan Bersama Keluarga & Sahabat",
      desc: "Foto bersama rombongan dengan unit Jeep Oranye yang dilengkapi stiker pintu 'JEEP BALURAN'.",
      badge: "Unit Oranye",
      aspect: "h-[320px] sm:h-[400px]",
    },
    {
      src: "/images/jeep-baluran-kuning-front.webp",
      alt: "Tampak depan gagah Jeep 4x4 Kuning SHAILENDRA siap safari",
      title: "Armada 4x4 Tangguh & Terawat",
      desc: "Unit 4-Wheel Drive yang siap melibas jalur bebatuan makadam dari pos gerbang hingga pantai.",
      badge: "Unit Kuning 'SHAILENDRA'",
      aspect: "h-[320px] sm:h-[400px]",
    },
    {
      src: "/images/jeep-baluran-oranye-safari.webp",
      alt: "Jeep Oranye safari melintasi jalan makadam Taman Nasional Baluran",
      title: "Jelajah Jalur Alam Baluran",
      desc: "Iringan safari santai menikmati angin savana dan mengamati satwa liar dari dalam mobil.",
      badge: "Unit Oranye Safari",
      aspect: "h-[320px] sm:h-[400px]",
    },
  ];

  return (
    <div className="py-12 sm:py-16 lg:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-charcoal-muted mb-6">
          <Link href="/" className="hover:text-charcoal transition-colors">
            Beranda
          </Link>
          <span>/</span>
          <span className="text-charcoal font-semibold">Galeri Armada</span>
        </nav>

        {/* Page Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-3">
            <span className="w-2 h-2 rounded-full bg-earth shrink-0" />
            <span>Dokumentasi Nyata & Armada Resmi</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal tracking-tight">
            Galeri Foto & Armada Jeep Baluran
          </h1>
          <p className="mt-4 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Semua foto adalah dokumentasi asli unit dan para tamu yang telah menikmati petualangan safari di Savana Bekol dan Pantai Bama bersama kami.
          </p>
        </div>

        {/* 4 Real WebP Photos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {galleryItems.map((item, idx) => (
            <div
              key={idx}
              className="group rounded-2xl overflow-hidden border border-base-border bg-base-light flex flex-col hover:border-charcoal/40 hover:shadow-md transition-all duration-300"
            >
              <div className={`relative ${item.aspect} w-full overflow-hidden bg-charcoal`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 opacity-95 group-hover:opacity-100 group-hover:brightness-105"
                />
                <div className="absolute top-4 left-4 bg-charcoal/80 backdrop-blur-sm text-white text-[11px] font-semibold px-3 py-1 rounded-full">
                  {item.badge}
                </div>
              </div>

              <div className="p-5 sm:p-6 bg-base-white border-t border-base-border/70 flex flex-col justify-between flex-1">
                <div>
                  <h2 className="text-lg sm:text-xl font-bold text-charcoal">
                    {item.title}
                  </h2>
                  <p className="mt-1.5 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fleet Specifications Card */}
        <div className="mt-16 rounded-2xl border border-base-border bg-base-subtle p-6 sm:p-10">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold uppercase tracking-wider text-earth block mb-1">
              Spesifikasi Kendaraan
            </span>
            <h3 className="text-2xl font-bold text-charcoal">
              Standar Keamanan & Kenyamanan Armada 4x4
            </h3>
            <p className="mt-2 text-sm text-charcoal-muted">
              Jalur jalan di dalam Baluran didominasi bebatuan makadam alami. Armada kami dirawat berkala untuk memastikan perjalanan Anda lancar dan nyaman.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-5 rounded-xl bg-base-white border border-base-border space-y-2">
              <div className="w-9 h-9 rounded-lg bg-olive/10 text-olive flex items-center justify-center">
                <Wrench className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-charcoal">Sistem 4x4 Aktif</h4>
              <p className="text-xs text-charcoal-muted">
                Daya cengkeram optimal di medan bebatuan, tanah savana, dan jalur pesisir pantai.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-base-white border border-base-border space-y-2">
              <div className="w-9 h-9 rounded-lg bg-earth/10 text-earth flex items-center justify-center">
                <Camera className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-charcoal">Roof Rack Kokoh</h4>
              <p className="text-xs text-charcoal-muted">
                Dirancang khusus dengan pijakan aman untuk berpose foto di atas mobil berlatar savana.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-base-white border border-base-border space-y-2">
              <div className="w-9 h-9 rounded-lg bg-olive/10 text-olive flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-charcoal">Kapasitas 5–6 Orang</h4>
              <p className="text-xs text-charcoal-muted">
                Cukup luas dan lega untuk rombongan keluarga kecil maupun lingkaran sahabat.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-base-white border border-base-border space-y-2">
              <div className="w-9 h-9 rounded-lg bg-earth/10 text-earth flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h4 className="font-bold text-sm text-charcoal">Driver Lokal Asli</h4>
              <p className="text-xs text-charcoal-muted">
                Sopir berpengalaman yang paham betul titik-titik keluarnya satwa liar di savana.
              </p>
            </div>
          </div>
        </div>

        {/* CTA to Booking */}
        <div className="mt-14 rounded-2xl border border-base-border bg-base-light p-8 text-center space-y-5">
          <h3 className="text-2xl font-bold text-charcoal">
            Ingin Mengabadikan Momen Bersama Jeep Baluran?
          </h3>
          <p className="text-sm text-charcoal-muted max-w-lg mx-auto">
            Booking sekarang mulai <strong>Rp 600.000 / Jeep PP</strong>. Driver kami siap membantu mengambil foto-foto terbaik Anda selama safari!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2">
            <Link
              href="/paket"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-olive hover:bg-olive-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <span>Lihat Paket Shuttle Rp 600.000</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-earth hover:bg-earth-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Chat WhatsApp Langsung</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
