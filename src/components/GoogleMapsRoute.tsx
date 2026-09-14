"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Navigation,
  Clock,
  Compass,
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
      shortName: "Pos Batangan",
      mobileName: "Batangan",
      name: "Pos Batangan (Visitor Center Baluran)",
      role: "Titik Kumpul, Tiket & Briefing",
      desc: "Titik temu resmi perjalanan safari Anda di gerbang masuk utama TN Baluran. Bertemu driver Jeep 4x4 lokal kami, pengecekan tiket resmi, dan persiapan briefing santai sebelum start.",
      badge: "Titik Kumpul Resmi",
      badgeColor: "bg-emerald-100 text-emerald-800 border-emerald-300",
      pinBg: "bg-emerald-600 text-white",
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
      badgeColor: "bg-emerald-50 text-olive border-olive/30",
      pinBg: "bg-olive text-white",
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
      pinBg: "bg-sky-600 text-white",
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
      name: "Kembali ke Pos Batangan (Finish)",
      role: "Selesai Trip Safari Pulang Pergi (PP)",
      desc: "Tiba kembali di gerbang utama Pos Batangan dengan aman dan membawa banyak koleksi foto estetik. Driver kami siap mengantar Anda kembali ke kendaraan pribadi.",
      badge: "Selesai PP Lengkap",
      badgeColor: "bg-charcoal text-white border-charcoal",
      pinBg: "bg-charcoal text-white",
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
    <div className="rounded-2xl border border-base-border bg-white shadow-sm overflow-hidden">
      {/* Header Bar: Navigation Info & Mode Switcher */}
      <div className="bg-[#192720] text-white p-4 sm:p-6 border-b border-white/10">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 tracking-wide uppercase">
              <Navigation className="w-3.5 h-3.5 animate-pulse" />
              <span>Rundown Rute Google Maps 4x4</span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>Pos Batangan</span>
              <span className="text-white/40">⇄</span>
              <span>Savana Bekol & Bama</span>
              <span className="text-xs font-normal text-white/60 hidden sm:inline">(PP ±30 KM)</span>
            </h3>
          </div>

          {/* Right: Quick Stats + View Mode Switcher */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <div className="hidden sm:flex items-center gap-3 bg-white/10 px-3 py-1.5 rounded-lg text-xs text-white/80 border border-white/10">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3 text-amber-400" />
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
                className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md font-semibold transition-all ${
                  viewMode === "stepper"
                    ? "bg-earth text-white shadow-sm"
                    : "text-white/70 hover:text-white"
                }`}
              >
                <Layers className="w-3.5 h-3.5" />
                <span className="truncate">Langkah Interaktif</span>
              </button>
              <button
                type="button"
                onClick={() => setViewMode("compact")}
                className={`flex items-center justify-center gap-1.5 px-2.5 py-1.5 rounded-md font-semibold transition-all ${
                  viewMode === "compact"
                    ? "bg-earth text-white shadow-sm"
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

      {/* VIEW MODE 1: STEPPER INTERAKTIF (Compact, 0 scrolling needed) */}
      {viewMode === "stepper" && (
        <div className="p-3.5 sm:p-6 lg:p-7 bg-[#FAF9F6]">
          
          {/* Horizontal Step Tracker with Progress Line */}
          <div className="relative mb-5 sm:mb-6 pb-1 sm:pb-2">
            
            {/* Background connecting track */}
            <div className="absolute top-5 left-4 right-4 h-1 bg-base-border rounded-full z-0 hidden sm:block" />
            
            {/* Active progress fill */}
            <div
              className="absolute top-5 left-4 h-1 bg-earth rounded-full z-0 transition-all duration-500 hidden sm:block"
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
                    onClick={() => setActiveIdx(idx)}
                    className={`group flex flex-col items-center text-center p-1 sm:p-2 rounded-xl transition-all cursor-pointer min-w-0 ${
                      isActive
                        ? "bg-white shadow-md border border-earth/30 ring-2 ring-earth/20"
                        : "hover:bg-white/60 border border-transparent"
                    }`}
                  >
                    {/* Circle Pin Icon */}
                    <div
                      className={`w-7 h-7 sm:w-9 sm:h-9 rounded-full flex items-center justify-center font-bold text-xs sm:text-sm border-2 transition-transform duration-300 ${
                        isActive
                          ? `${step.pinBg} border-white shadow-sm scale-110 ring-2 ring-earth/40`
                          : isPassed
                          ? "bg-olive text-white border-white"
                          : "bg-base-sand text-charcoal border-base-border group-hover:border-charcoal/40"
                      }`}
                    >
                      {step.code}
                    </div>

                    {/* Step Label: mobileName on mobile, shortName on sm+ */}
                    <span
                      className={`mt-1 sm:mt-1.5 text-[10px] sm:text-xs font-semibold leading-tight text-center w-full truncate transition-colors ${
                        isActive ? "text-earth font-bold" : "text-charcoal-muted"
                      }`}
                    >
                      <span className="sm:hidden">{step.mobileName}</span>
                      <span className="hidden sm:inline">{step.shortName}</span>
                    </span>

                    {/* KM Label */}
                    <span className="text-[9px] sm:text-[10px] text-charcoal-light mt-0.5 truncate w-full text-center">
                      {step.distance}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Step Showcase Card (Split View, fits in single view) */}
          <div className="bg-white rounded-2xl border border-base-border shadow-xs overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              
              {/* Left Column: Details & Controls (7 cols) */}
              <div className="lg:col-span-7 p-4 sm:p-6 lg:p-7 flex flex-col justify-between space-y-4">
                
                <div className="space-y-3">
                  {/* Top Meta Chips */}
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-base-border/70 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-earth text-white font-black text-xs flex items-center justify-center">
                        {current.code}
                      </span>
                      <span className="text-xs font-bold text-charcoal">
                        {current.time}
                      </span>
                      <span className="text-charcoal-light text-xs">•</span>
                      <span className="text-xs font-medium text-charcoal-light">
                        {current.distance}
                      </span>
                    </div>

                    <span className={`text-[10.5px] sm:text-[11px] font-bold px-2.5 py-0.5 rounded-full border uppercase tracking-wider ${current.badgeColor}`}>
                      {current.badge}
                    </span>
                  </div>

                  {/* Title & Role */}
                  <div>
                    <h4 className="text-lg sm:text-2xl font-bold text-charcoal tracking-tight">
                      {current.name}
                    </h4>
                    <p className="text-xs sm:text-sm font-semibold text-olive mt-0.5">
                      {current.role}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {current.desc}
                  </p>

                  {/* Highlights Pills */}
                  <div className="pt-1">
                    <p className="text-[11px] font-bold text-charcoal uppercase tracking-wider mb-2">
                      Aktivitas & Keunggulan Spot Ini:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {current.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 text-[10.5px] sm:text-[11px] px-2.5 py-1 rounded-md bg-base-subtle border border-base-border text-charcoal font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-olive" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Transit Information Pill */}
                  <div className="p-3 rounded-xl bg-base-light border border-base-border text-xs text-charcoal-muted flex items-start gap-2.5">
                    <Car className="w-4 h-4 text-earth shrink-0 mt-0.5" />
                    <div>
                      <span className="font-semibold text-charcoal">Info Jalur Makadam: </span>
                      <span>{current.transitInfo}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom Navigation Buttons: Fully Responsive, No Overflow */}
                <div className="pt-3 border-t border-base-border/70 flex flex-col sm:flex-row sm:items-center justify-between gap-2 sm:gap-3">
                  {/* Top row on mobile: Previous and Next 50/50 */}
                  <div className="grid grid-cols-2 sm:flex sm:items-center gap-2 w-full sm:w-auto">
                    <button
                      type="button"
                      disabled={isFirst}
                      onClick={() => setActiveIdx((prev) => Math.max(0, prev - 1))}
                      className={`inline-flex items-center justify-center gap-1.5 px-3 py-2.5 sm:py-2 rounded-lg text-xs font-semibold border transition-all ${
                        isFirst
                          ? "opacity-40 cursor-not-allowed border-base-border text-charcoal-light"
                          : "bg-white border-base-border hover:border-charcoal text-charcoal active:scale-95 cursor-pointer"
                      }`}
                    >
                      <ChevronLeft className="w-4 h-4 shrink-0" />
                      <span>Sebelumnya</span>
                    </button>

                    <button
                      type="button"
                      disabled={isLast}
                      onClick={() => setActiveIdx((prev) => Math.min(waypoints.length - 1, prev + 1))}
                      className={`sm:hidden inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-semibold text-white transition-all shadow-sm ${
                        isLast
                          ? "opacity-40 cursor-not-allowed bg-charcoal"
                          : "bg-earth hover:bg-earth-hover active:scale-95 cursor-pointer"
                      }`}
                    >
                      <span>Berikutnya ({waypoints[activeIdx + 1]?.code || "Selesai"})</span>
                      <ChevronRight className="w-4 h-4 shrink-0" />
                    </button>
                  </div>

                  {/* Desktop Actions + Mobile WhatsApp Button */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 w-full sm:w-auto">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2.5 sm:py-2 rounded-lg bg-olive text-white text-xs font-semibold hover:bg-olive-hover transition-colors shadow-2xs active:scale-98"
                    >
                      <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-400" />
                      <span>Tanya Spot Ini via WA</span>
                    </a>

                    <button
                      type="button"
                      disabled={isLast}
                      onClick={() => setActiveIdx((prev) => Math.min(waypoints.length - 1, prev + 1))}
                      className={`hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-white transition-all shadow-sm ${
                        isLast
                          ? "opacity-40 cursor-not-allowed bg-charcoal"
                          : "bg-earth hover:bg-earth-hover active:scale-95 cursor-pointer"
                      }`}
                    >
                      <span>Lanjut Titik ({waypoints[activeIdx + 1]?.code || "Selesai"})</span>
                      <ChevronRight className="w-4 h-4 shrink-0" />
                    </button>
                  </div>
                </div>

              </div>

              {/* Right Column: Visual Photo & Quick Snapshot (5 cols) */}
              <div className="lg:col-span-5 bg-base-subtle p-4 sm:p-6 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-base-border">
                <div className="space-y-3">
                  <div className="relative h-48 sm:h-56 lg:h-64 w-full rounded-xl overflow-hidden border border-base-border shadow-xs bg-charcoal">
                    <Image
                      src={current.image}
                      alt={current.imageAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover object-center transition-all duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 bg-black/70 backdrop-blur-md text-white text-[10px] font-bold px-2 py-0.5 rounded-md border border-white/20 uppercase tracking-wider">
                      Titik {current.code}
                    </div>
                  </div>

                  <div className="p-3 bg-white rounded-xl border border-base-border text-xs space-y-1">
                    <div className="flex items-center justify-between text-[11px] text-charcoal-light">
                      <span>Estimasi Berhenti:</span>
                      <span className="font-bold text-charcoal">{current.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-charcoal-light">
                      <span>Jarak Kumulatif:</span>
                      <span className="font-bold text-charcoal">{current.distance}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-charcoal-light text-center mt-3">
                  Driver Jeep kami siap mendampingi sesi foto keluarga & sahabat.
                </p>
              </div>

            </div>
          </div>

        </div>
      )}

      {/* VIEW MODE 2: RINGKASAN SEMUA TITIK (Flexible compact table) */}
      {viewMode === "compact" && (
        <div className="p-4 sm:p-6 bg-[#FAF9F6]">
          <div className="space-y-3">
            {waypoints.map((step, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setActiveIdx(idx);
                  setViewMode("stepper");
                }}
                className="group p-3.5 sm:p-4 rounded-xl border border-base-border bg-white hover:border-earth/50 hover:shadow-xs cursor-pointer transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg ${step.pinBg} flex items-center justify-center font-bold text-xs shrink-0`}>
                    {step.code}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h5 className="text-sm font-bold text-charcoal group-hover:text-earth transition-colors">
                        {step.name}
                      </h5>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full border ${step.badgeColor} hidden md:inline-block`}>
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-xs text-charcoal-muted mt-0.5 line-clamp-1">
                      {step.desc}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between sm:justify-end gap-3 shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-base-border/50 text-xs">
                  <span className="text-charcoal-light font-medium">{step.distance} • {step.time}</span>
                  <span className="font-bold text-earth group-hover:translate-x-0.5 transition-transform flex items-center gap-1">
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
      <div className="bg-[#FAF9F6] border-t border-base-border/80 p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-charcoal-muted">
        <div className="flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-olive shrink-0" />
          <span>Waktu & durasi di setiap spot sangat fleksibel sesuai kenyamanan rombongan Anda.</span>
        </div>
        <span className="font-semibold text-earth">
          Paket Shuttle Rp 600.000 / Jeep PP Lengkap
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
    <section id="rundown" className="py-14 sm:py-18 lg:py-20 bg-base-subtle border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-earth" />
              <span>Rundown Rute Google Maps</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Alur & Rute Perjalanan Safari 4x4
            </h2>
            <p className="mt-2 text-sm sm:text-base text-charcoal-muted leading-relaxed">
              Pilih titik A–E untuk melihat detail masing-masing spot tanpa perlu scroll panjang.
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
