import Image from "next/image";
import { Compass, ShieldCheck, Binoculars, Palmtree, ArrowRight, Camera, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ExperienceSection() {
  const steps = [
    {
      num: "01",
      title: "Pos Batangan",
      subtitle: "Gerbang Masuk & Tiketing",
      desc: "Titik kumpul & persiapan armada Jeep sebelum memasuki kawasan konservasi Baluran.",
      featured: false,
    },
    {
      num: "02",
      title: "Evergreen Forest",
      subtitle: "Hutan Musim Sejuk",
      desc: "Koridor jalan berkanopi pepohonan lebat yang sejuk sepanjang 5 km di tengah iklim savana.",
      featured: false,
    },
    {
      num: "03",
      title: "Savana Bekol",
      subtitle: "Africa van Java",
      desc: "Hamparan padang rumput terluas 10.000 Ha berlatar Gunung Baluran & satwa liar berkeliaran.",
      featured: true,
      tag: "★ Spot Ikonik Utama",
    },
    {
      num: "04",
      title: "Pantai Bama",
      subtitle: "Pesisir & Mangrove Trail",
      desc: "Pantai pasir putih tenang dengan jembatan mangrove purba dan kawanan kera ekor panjang.",
      featured: false,
    },
    {
      num: "05",
      title: "Kembali PP",
      subtitle: "Titik Jemput Awal",
      desc: "Armada Jeep mengantar rombongan kembali ke Pos Batangan dengan aman dan tepat waktu.",
      featured: false,
    },
  ];

  const features = [
    {
      icon: Binoculars,
      title: "Paham Titik & Waktu Satwa Liar",
      desc: "Driver kami tahu jam-jam tepat saat kawanan banteng Jawa, rusa timor, dan burung merak berkumpul di kubangan atau padang rumput.",
    },
    {
      icon: ShieldCheck,
      title: "Kenyamanan & Keamanan 4WD",
      desc: "Unit tangguh dengan suspensi yang dirawat berkala untuk meredam guncangan bebatuan makadam 15 km menuju Pantai Bama.",
    },
    {
      icon: Camera,
      title: "Pemandu Sudut Foto Terbaik",
      desc: "Membantu Anda mendapatkan sudut pemotretan sinematik di atap Jeep dengan latar belakang lanskap Gunung Baluran yang megah.",
    },
  ];

  return (
    <section id="rute" className="py-16 sm:py-20 lg:py-24 bg-savana-canvas border-b border-[#DFD9CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* 1. Header Alur Perjalanan */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E22]/5 border border-[#1A2E22]/15 text-[#1A2E22] text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C45525]" />
              <span>ALUR PERJALANAN</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1D1A] tracking-tight">
              Titik Jelajah Utama TN Baluran
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#6E736D] leading-relaxed">
              Rute penjemputan dari Visitor Center Pos Batangan melintasi hutan musim hingga pesisir pantai timur.
            </p>
          </div>
        </ScrollReveal>

        {/* 2. Horizontal 5 Waypoint Cards */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 sm:gap-4 mb-16 lg:mb-24">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col justify-between ${
                  idx === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                } ${
                  step.featured
                    ? "bg-[#1A2E22] text-white shadow-lg ring-2 ring-[#C45525]/30 -translate-y-1"
                    : "bg-[#FAF7F0] text-[#1A1D1A] border border-[#DFD9CC] hover:border-[#1A2E22]/30 hover-lift shadow-card hover:shadow-soft"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`inline-flex items-center justify-center w-8 h-8 rounded-lg font-bold text-xs ${
                        step.featured
                          ? "bg-[#C45525] text-white"
                          : "bg-[#ECE7DB] text-[#1A2E22]"
                      }`}
                    >
                      {step.num}
                    </span>
                    {step.tag && (
                      <span className="text-[10px] font-bold text-[#F4A261] bg-white/10 px-2 py-0.5 rounded-full">
                        {step.tag}
                      </span>
                    )}
                  </div>
                  <h3
                    className={`font-bold text-base sm:text-lg leading-snug ${
                      step.featured ? "text-white" : "text-[#1A1D1A]"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p
                    className={`text-xs font-medium mt-0.5 mb-2.5 ${
                      step.featured ? "text-[#D1DDD6]" : "text-[#C45525]"
                    }`}
                  >
                    {step.subtitle}
                  </p>
                  <p
                    className={`text-xs leading-relaxed ${
                      step.featured ? "text-white/80" : "text-[#6E736D]"
                    }`}
                  >
                    {step.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-current/10 flex items-center justify-between text-[11px] font-semibold opacity-70">
                  <span>Tahap {idx + 1} dari 5</span>
                  {idx < 4 && <ArrowRight className="w-3.5 h-3.5" />}
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* 3. Section Divider & Second Header: Armada & Pengemudi */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E22]/5 border border-[#1A2E22]/15 text-[#1A2E22] text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C45525]" />
              <span>ARMADA & PENGEMUDI</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1D1A] tracking-tight">
              Menjelajah Bersama Sahabat Lokal Baluran
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#6E736D] leading-relaxed">
              Armada 4x4 tangguh dan driver lokal yang memahami setiap lekuk jalan serta kebiasaan satwa liar.
            </p>
          </div>
        </ScrollReveal>

        {/* 4. Split 2 Columns: Left Photo Specs + Right 3 Value Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Column: Featured Vehicle Photo */}
          <div className="lg:col-span-6 flex flex-col">
            <ScrollReveal delay={100} className="h-full flex flex-col">
              <div className="relative rounded-2xl overflow-hidden border border-[#DFD9CC] bg-[#1A1D1A] flex-1 min-h-[380px] sm:min-h-[440px] shadow-soft flex flex-col justify-end">
                <Image
                  src="/images/jeep-baluran-kuning-front.webp"
                  alt="Armada Jeep 4x4 Kuning siap melintasi rute Taman Nasional Baluran"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                
                <div className="relative z-10 p-5 sm:p-6 text-white space-y-2">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-2.5 py-1 rounded-md bg-[#C45525] text-white text-[11px] font-bold tracking-wide">
                      JEEP TROOPER 4x4
                    </span>
                    <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-xs text-white text-[11px] font-semibold">
                      Kapasitas Ideal 5 Wisatawan
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">
                    Armada Kokoh Khusus Jalan Makadam Baluran
                  </h3>
                  <p className="text-xs text-white/80 leading-relaxed max-w-md">
                    Suspensi dan ban medan berat terawat rutin demi memastikan perjalanan rombongan keluarga tetap stabil dan nyaman.
                  </p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 3 Value / Driver Competence Cards */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-3.5 sm:space-y-4">
            {features.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={150 + idx * 75} className="flex-1">
                  <div className="h-full rounded-2xl p-5 sm:p-6 bg-[#FAF7F0] border border-[#DFD9CC] hover:border-[#1A2E22]/30 hover-lift shadow-card hover:shadow-soft transition-all duration-300 flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#ECE7DB] text-[#1A2E22] flex items-center justify-center shrink-0 mt-0.5 border border-[#DFD9CC]">
                      <Icon className="w-5 h-5 text-[#C45525]" />
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold text-[#1A1D1A]">
                        {item.title}
                      </h4>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#6E736D] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
