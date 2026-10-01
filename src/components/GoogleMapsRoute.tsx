"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Navigation,
  Clock,
  Car,
  ChevronLeft,
  ChevronRight,
  List,
  Layers,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { Button } from "@/components/ui/button";
import { trackMapClick, trackWhatsAppClick } from "@/lib/analytics";

interface GoogleMapsRouteProps {
  embedded?: boolean;
}

export default function GoogleMapsRoute({ embedded = false }: GoogleMapsRouteProps) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [viewMode, setViewMode] = useState<"stepper" | "compact">("stepper");

  const waypoints = [
    {
      code: "A",
      type: "start",
      time: "Menit ke-0",
      duration: "15 - 20 Menit",
      distance: "KM 0.0",
      shortName: "Visitor Baluran",
      mobileName: "Visitor",
      name: "Visitor Baluran (Pos Batangan)",
      role: "Titik Keberangkatan (Pagi 07.30 & Siang 14.00)",
      desc: "Titik kumpul & keberangkatan safari resmi di Visitor Baluran (Pos Batangan). Bertemu driver Jeep 4x4 lokal kami, pengecekan tiket resmi, dan persiapan briefing santai sebelum start.",
      badge: "Titik Keberangkatan Resmi",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      pinBg: "bg-emerald-700 text-white",
      image: "/images/jeep-baluran-kuning-front.webp",
      imageAlt: "Armada Jeep 4x4 Kuning siap di Pos Batangan gerbang utama Baluran",
      highlights: [
        "Tempat parkir mobil pribadi luas & aman",
        "Loket tiket resmi Baluran & toilet",
        "Bertemu sopir Jeep lokal yang ramah",
      ],
      transitInfo: "Menyusuri jalan makadam hutan bebatuan ±5.5 km (15 - 20 menit)",
    },
    {
      code: "B",
      type: "waypoint",
      time: "Menit ke-20",
      duration: "15 Menit Lintas",
      distance: "KM 5.5",
      shortName: "Evergreen Forest",
      mobileName: "Evergreen",
      name: "Evergreen Forest (Hutan Musim Kanopi)",
      role: "Terowongan Kanopi Hijau Sejuk",
      desc: "Menyusuri jalur rimbun hutan musim dengan kanopi dedaunan lebat yang teduh menaungi jalanan. Udara sejuk dan alami menjadi transisi sebelum keluar menuju padang savana terbuka.",
      badge: "Kanopi Rimbun Sejuk",
      badgeColor: "bg-emerald-50 text-[#2B3E34] border-[#2B3E34]/30",
      pinBg: "bg-[#2B3E34] text-white",
      image: "/images/jeep-baluran-oranye-safari.webp",
      imageAlt: "Jeep Safari Oranye melintasi jalur kanopi hutan musim Baluran",
      highlights: [
        "Sensasi offroad makadam suspensi Jeep 4x4",
        "Kanopi pohon tropis alami yang teduh",
        "Spot transisi alami hutan ke savana",
      ],
      transitInfo: "Lanjut melintasi savana terbuka ±6.5 km (20 menit santai)",
    },
    {
      code: "C",
      type: "highlight",
      time: "Menit ke-45",
      duration: "60 - 90 Menit Bebas",
      distance: "KM 12.0",
      shortName: "Savana Bekol",
      mobileName: "Bekol",
      name: "Savana Bekol & Menara Pandang",
      role: "Ikon 'Africa van Java' & Spot Foto Utama",
      desc: "Pusat eksotisme Taman Nasional Baluran! Hamparan padang rumput 300 hektare berlatar megahnya Gunung Baluran. Kawanan rusa timor, merak liar, dan banteng sering merumput bebas.",
      badge: "Spot Foto Favorit ★",
      badgeColor: "bg-amber-100 text-amber-900 border-amber-300",
      pinBg: "bg-[#C25624] text-white",
      highlight: true,
      image: "/images/jeep-baluran-kuning-tamu.webp",
      imageAlt: "Wisatawan berfoto seru di atas kap/atap Jeep Kuning di Savana Bekol",
      highlights: [
        "Bebas foto naik ke atap / kap mobil Jeep",
        "Foto di pohon Rais eksotis ala savana Afrika",
        "Menara pandang 360° untuk amati satwa liar",
      ],
      transitInfo: "Menuju pesisir pantai timur ±3.0 km (10 menit jalan datar)",
    },
    {
      code: "D",
      type: "waypoint",
      time: "Menit ke-135",
      duration: "45 - 60 Menit Santai",
      distance: "KM 15.0",
      shortName: "Pantai Bama",
      mobileName: "Bama",
      name: "Pantai Bama & Hutan Mangrove",
      role: "Pesisir Pasir Putih & Jembatan Bakau",
      desc: "Ujung rute timur Baluran: menikmati pantai pasir putih berair jernih dengan ombak tenang, jalan santai di jembatan kayu mangrove purba, serta santai minum es kelapa muda.",
      badge: "Pesisir Pasir Putih",
      badgeColor: "bg-sky-100 text-sky-800 border-sky-300",
      pinBg: "bg-sky-700 text-white",
      image: "/images/jeep-baluran-oranye-tamu.webp",
      imageAlt: "Rombongan tamu berfoto di atas Jeep Oranye Baluran di pesisir Bama",
      highlights: [
        "Pantai pasir putih dengan ombak tenang",
        "Jalur jembatan kayu mangrove alami",
        "Warung makan, toilet & kelapa muda segar",
      ],
      transitInfo: "Perjalanan pulang santai menuju pintu gerbang ±15.0 km (35 - 40 menit)",
    },
    {
      code: "E",
      type: "finish",
      time: "Selesai",
      duration: "Trip Selesai",
      distance: "KM 30.0 (PP)",
      shortName: "Kembali / Finish",
      mobileName: "Finish",
      name: "Kembali ke Visitor Baluran (Finish)",
      role: "Selesai Trip Safari Pulang Pergi (PP)",
      desc: "Tiba kembali di titik kumpul Visitor Baluran (Pos Batangan) dengan aman dan membawa banyak koleksi foto estetik. Driver kami siap mengantar Anda kembali ke kendaraan pribadi.",
      badge: "Selesai PP Lengkap",
      badgeColor: "bg-[#1B211E] text-white border-[#1B211E]",
      pinBg: "bg-[#1B211E] text-white",
      image: "/images/jeep-baluran-kuning-front.webp",
      imageAlt: "Armada Jeep Baluran 4x4 selesai safari dengan nyaman",
      highlights: [
        "Kembali ke kendaraan pribadi wisatawan",
        "Kondisi mobil dicek & briefing selesai",
        "Jadwal fleksibel tanpa terburu-buru",
      ],
      transitInfo: "Perjalanan selesai. Terima kasih telah menjelajah bersama kami!",
    },
  ];

  const current = waypoints[activeIdx];
  const isFirst = activeIdx === 0;
  const isLast = activeIdx === waypoints.length - 1;
  const progressPercent = (activeIdx / (waypoints.length - 1)) * 100;

  const waUrl = `https://wa.me/6285204572677?text=${encodeURIComponent(
    `Halo Jeep Baluran, saya tertarik dengan rute spot ${current.shortName} (${current.code}) dan ingin menanyakan sewa unit Jeep.`
  )}`;

  const routeCard = (
    <div className="rounded-2xl border border-[#DFD9CC] bg-[#FAF7F0] shadow-soft overflow-hidden">
      {/* Header Bar: Navigation Info & Mode Switcher */}
      <div className="bg-[#1C2621] text-white p-4 sm:p-6 border-b border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">

          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wide uppercase">
              <Navigation className="w-3.5 h-3.5" />
              <span>Rundown Rute Google Maps 4x4</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>Visitor Baluran</span>
              <span className="text-white/40">⇄</span>
              <span>Savana Bekol & Bama</span>
              <span className="text-xs font-normal text-white/60 hidden sm:inline">(PP ±30 KM)</span>
            </h3>
          </div>

          {/* Right: Quick Stats + View Mode Switcher */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-3 bg-white/10 px-3 py-1.5 rounded-lg text-xs text-white/80 border border-white/10">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-300" />
                3 - 4 Jam
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Car className="w-3 h-3 text-emerald-400" />
                Medan Makadam
              </span>
            </div>

            {/* View Mode Switcher */}
            <div className="w-full sm:w-auto grid grid-cols-2 sm:inline-flex rounded-lg bg-black/30 p-1 border border-white/10 text-xs">
              <button
                type="button"
                onClick={() => setViewMode("stepper")}
                className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md font-semibold transition-all ${viewMode === "stepper"
                    ? "bg-[#C25624] text-white shadow-xs"
                    : "text-white/70 hover:text-white"
                  }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="truncate">Langkah Rute</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("compact")}
                className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md font-semibold transition-all ${viewMode === "compact"
                    ? "bg-[#C25624] text-white shadow-xs"
                    : "text-white/70 hover:text-white"
                  }`}
              >
                <List className="w-3.5 h-3.5" />
                <span className="truncate">Semua Titik</span>
              </button>
            </div>

          </div>

        </div>
      </div>

      {/* VIEW MODE 1: STEPPER INTERAKTIF */}
      {viewMode === "stepper" && (
        <div className="p-3.5 sm:p-6 lg:p-7 bg-[#FAF7F0]">

          {/* Horizontal Step Tracker with Progress Line */}
          <div className="relative mb-5 sm:mb-6 pb-1 sm:pb-2">

            {/* Background connecting track */}
            <div className="absolute top-5 left-4 right-4 h-1 bg-[#DFD9CC] rounded-full z-0 hidden sm:block" />

            {/* Active progress fill */}
            <div
              className="absolute top-5 left-4 h-1 bg-[#C25624] rounded-full z-0 transition-all duration-500 hidden sm:block"
              style={{ width: `calc(${progressPercent}% - 32px)` }}
            />

            {/* 5 Step Buttons */}
            <div className="relative z-10 grid grid-cols-5 gap-1 sm:gap-2">
              {waypoints.map((step, idx) => {
                const isActive = activeIdx === idx;
                const isPassed = activeIdx > idx;

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => {
                      setActiveIdx(idx);
                      trackMapClick({
                        spotName: step.name,
                        pageLocation: typeof window !== "undefined" ? window.location.pathname : "/",
                      });
                    }}
                    className={`group flex flex-col items-center text-center p-1 sm:p-2 rounded-xl transition-all cursor-pointer min-w-0 ${isActive
                        ? "bg-[#ECE7DB] shadow-sm border border-[#C25624]/30 ring-2 ring-[#C25624]/20"
                        : "hover:bg-[#ECE7DB]/50 border border-transparent"
                      }`}
                  >
                    {/* Circle Pin Icon */}
                    <div
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm border-2 transition-transform duration-300 ${isActive
                          ? `${step.pinBg} border-white shadow-xs scale-110 ring-2 ring-[#C25624]/30`
                          : isPassed
                            ? "bg-[#2B3E34] text-white border-white"
                            : "bg-[#E5DFD2] text-[#1E2521] border-[#DFD9CC] group-hover:border-[#1E2521]/40"
                        }`}
                    >
                      {step.code}
                    </div>

                    {/* Step Label */}
                    <span
                      className={`mt-1 sm:mt-1.5 text-[10px] sm:text-xs font-semibold leading-tight text-center w-full truncate transition-colors ${isActive ? "text-[#C25624] font-bold" : "text-[#414C45]"
                        }`}
                    >
                      <span className="sm:hidden">{step.mobileName}</span>
                      <span className="hidden sm:inline">{step.shortName}</span>
                    </span>

                    {/* KM Label */}
                    <span className="text-[9px] sm:text-[10px] text-[#69766E] mt-0.5 truncate w-full text-center">
                      {step.distance}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Showcase Card */}
          <div className="bg-[#FAF7F0] rounded-2xl border border-[#DFD9CC] shadow-card overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">

              {/* Left Column: Details & Controls (7 cols) */}
              <div className="lg:col-span-7 p-4 sm:p-6 lg:p-7 flex flex-col justify-between space-y-4">

                <div className="space-y-3">
                  {/* Top Meta Chips */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#DFD9CC] pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-[#C25624] text-white font-black text-xs flex items-center justify-center">
                        {current.code}
                      </span>
                      <span className="text-xs font-bold text-[#1B211E]">
                        {current.time}
                      </span>
                      <span className="text-[#69766E] text-xs">•</span>
                      <span className="text-xs font-medium text-[#69766E]">
                        {current.distance}
                      </span>
                    </div>

                    <span className={`text-[10.5px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${current.badgeColor}`}>
                      {current.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <div>
                    <h4 className="text-lg sm:text-2xl font-bold text-[#1B211E] tracking-tight">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-[#2B3E34] mt-0.5">
                      {current.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-[#414C45] leading-relaxed">
                    {current.desc}
                  </p>

                  {/* Highlights Pills */}
                  <div className="pt-1">
                    <p className="text-[11px] font-bold text-[#1B211E] uppercase tracking-wider mb-2">
                      Aktivitas & Keunggulan Spot Ini:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {current.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-md bg-[#ECE7DB] border border-[#DFD9CC] text-[#1B211E] font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#2B3E34]" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Transit Information Pill */}
                  <div className="p-3 rounded-xl bg-[#ECE7DB]/80 border border-[#DFD9CC] text-xs text-[#414C45] flex items-start gap-2.5">
                    <Car className="w-4 h-4 text-[#C25624] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-[#1B211E]">Info Jalur Makadam: </span>
                      <span>{current.transitInfo}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation Buttons: Fully Responsive */}
                <div className="pt-3 border-t border-[#DFD9CC] flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                  <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
                    <Button
                      type="button"
                      variant="outline"
                      size="sm"
                      disabled={isFirst}
                      onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                      className="gap-1 text-xs border-[#DFD9CC] hover:bg-[#ECE7DB]"
                    >
                      <ChevronLeft className="w-4 h-4 shrink-0" />
                      <span>Sebelumnya</span>
                    </Button>

                    <Button
                      type="button"
                      variant="earth"
                      size="sm"
                      disabled={isLast}
                      onClick={() => setActiveIdx((prev) => Math.min(waypoints.length - 1, prev + 1))}
                      className="sm:hidden gap-1 text-xs font-semibold shadow-2xs"
                    >
                      <span>Lanjut ({waypoints[activeIdx + 1]?.code || "Finish"})</span>
                      <ChevronRight className="w-4 h-4 shrink-0" />
                    </Button>
                  </div>

                  {/* Desktop Actions + WhatsApp Button */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                    <Button
                      asChild
                      variant="olive"
                      size="sm"
                      className="gap-1.5 text-xs font-semibold shadow-2xs"
                    >
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => {
                          trackWhatsAppClick({
                            packageName: `Spot ${current.name}`,
                            pageLocation: typeof window !== "undefined" ? window.location.pathname : "/",
                            ctaPosition: "maps_spot_inquiry",
                          });
                        }}
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-400" />
                        <span>Tanya Spot Ini via WA</span>
                      </a>
                    </Button>

                    <Button
                      type="button"
                      variant="earth"
                      size="sm"
                      disabled={isLast}
                      onClick={() => setActiveIdx((prev) => Math.min(waypoints.length - 1, prev + 1))}
                      className="hidden sm:inline-flex gap-1 text-xs font-semibold shadow-2xs"
                    >
                      <span>Lanjut Titik ({waypoints[activeIdx + 1]?.code || "Finish"})</span>
                      <ChevronRight className="w-4 h-4 shrink-0" />
                    </Button>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Photo (5 cols) */}
              <div className="lg:col-span-5 bg-[#ECE7DB]/70 p-4 sm:p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-[#DFD9CC]">
                <div className="space-y-3">
                  <div className="relative h-48 sm:h-56 lg:h-64 w-full rounded-xl overflow-hidden border border-[#DFD9CC] shadow-2xs bg-[#1B211E]">
                    <Image
                      src={current.image}
                      alt={current.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center transition-all duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-black/75 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/20 uppercase tracking-wider">
                      Titik {current.code}
                    </div>
                  </div>

                  <div className="p-3 bg-[#FAF7F0] rounded-xl border border-[#DFD9CC] text-xs space-y-1 shadow-card">
                    <div className="flex items-center justify-between text-[11px] text-[#69766E]">
                      <span>Estimasi Berhenti:</span>
                      <span className="font-bold text-[#1B211E]">{current.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-[#69766E]">
                      <span>Jarak Kumulatif:</span>
                      <span className="font-bold text-[#1B211E]">{current.distance}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-[#69766E] text-center mt-3">
                  Driver Jeep kami siap mendampingi sesi foto keluarga & sahabat.
                </p>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* VIEW MODE 2: RINGKASAN SEMUA TITIK */}
      {viewMode === "compact" && (
        <div className="p-4 sm:p-6 bg-[#FAF7F0]">
          <div className="space-y-3">
            {waypoints.map((step, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveIdx(idx);
                  setViewMode("stepper");
                  trackMapClick({
                    spotName: step.name,
                    pageLocation: typeof window !== "undefined" ? window.location.pathname : "/",
                  });
                }}
                className="group p-3.5 sm:p-4 rounded-xl border border-[#DFD9CC] bg-[#FAF7F0] hover:border-[#C25624]/50 hover:shadow-soft cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${step.pinBg} flex items-center justify-center font-bold text-xs shrink-0`}>
                    {step.code}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-bold text-[#1B211E] group-hover:text-[#C25624] transition-colors">
                        {step.name}
                      </h5>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${step.badgeColor} hidden md:inline-block`}>
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs text-[#414C45] mt-0.5 line-clamp-1">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-[#DFD9CC] text-xs">
                  <span className="text-[#69766E] font-medium">{step.distance} • {step.time}</span>
                  <span className="font-bold text-[#C25624] group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
                    <span>Lihat Detail</span>
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Footer Reassurance */}
      <div className="bg-[#ECE7DB]/80 border-t border-[#DFD9CC] p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#4E5852]">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-[#2B3E34] shrink-0" />
          <span>Waktu & durasi di setiap spot sangat fleksibel sesuai ritme keluarga Anda.</span>
        </div>
        <span className="font-semibold text-[#C25624]">
          Paket Shuttle Rp 597.000 / Jeep PP Lengkap
        </span>
      </div>

    </div>
  );

  if (embedded) {
    return (
      <ScrollReveal delay={100}>
        {routeCard}
      </ScrollReveal>
    );
  }

  return (
    <section id="rundown" className="py-14 sm:py-18 lg:py-20 bg-savana-canvas border-b border-[#DFD9CC]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#69766E] tracking-wide mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C25624]" />
              <span>Rundown Rute Google Maps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1B211E] tracking-tight">
              Alur & Rute Perjalanan Safari 4x4
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#414C45] leading-relaxed">
              Pilih titik A–E di bawah untuk navigasi interaktif jalur makadam dari pintu gerbang hingga pantai.
            </p>
          </div>
        </ScrollReveal>

        {/* Google Maps Container */}
        <ScrollReveal delay={100}>
          {routeCard}
        </ScrollReveal>

      </div>
    </section>
  );
}
