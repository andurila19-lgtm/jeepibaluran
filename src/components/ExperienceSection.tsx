import Image from "next/image";
import { Compass, ShieldCheck, Sun, Trees, Binoculars, Palmtree } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ExperienceSection() {
  const spots = [
    {
      num: "01",
      name: "Pos Batangan (Pintu Gerbang Utama)",
      desc: "Titik kumpul dan pemeriksaan tiket masuk resmi Taman Nasional Baluran sebelum memulai petualangan safari.",
      icon: Compass,
    },
    {
      num: "02",
      name: "Evergreen Forest (Hutan Musim)",
      desc: "Jalur rimbun kanopi hijau sepanjang ±5 km dengan udara sejuk, kontras alami sebelum memasuki area padang savana terbuka.",
      icon: Trees,
    },
    {
      num: "03",
      name: "Savana Bekol & Menara Pandang",
      desc: "Pusat eksotisme 'Africa van Java'. Hamparan savana luas berlatar Gunung Baluran tempat kawanan rusa, banteng, dan merak berkumpul.",
      icon: Binoculars,
    },
    {
      num: "04",
      name: "Pantai Bama & Hutan Mangrove",
      desc: "Ujung rute safari dengan pantai pasir putih tenang, jembatan kayu mangrove alami, dan tempat santai menikmati kelapa muda.",
      icon: Palmtree,
    },
  ];

  return (
    <section id="pengalaman" className="py-16 sm:py-20 lg:py-24 bg-base-light border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-2xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-earth" />
              <span>Sensasi Jalur Makadam</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Sensasi Safari 4x4 Menjelajahi Africa van Java
            </h2>
            <p className="mt-3 text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Jalur Taman Nasional Baluran didominasi jalan makadam bebatuan alami yang khas. Armada Jeep 4x4 kami memberikan kenyamanan dan keamanan maksimal selama menjelajahi spot-spot terbaiknya.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetric Visual Documentary Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Large Photo: Convoy (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <ScrollReveal delay={100}>
            <div className="relative rounded-xl overflow-hidden border border-base-border bg-base-white shadow-sm">
              <div className="relative h-[320px] sm:h-[440px] w-full">
                <Image
                  src="/images/jeep-baluran-oranye-safari.webp"
                  alt="Jeep 4x4 Baluran melintasi rute savana Taman Nasional Baluran"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 bg-base-white border-t border-base-border/70">
                <p className="text-sm font-semibold text-charcoal">
                  Iringan armada Jeep 4x4 siap menjelajahi jalan makadam savana Baluran
                </p>
                <p className="text-xs text-charcoal-light mt-0.5">
                  Pengalaman safari yang santai, nyaman untuk seluruh anggota keluarga.
                </p>
              </div>
            </div>

            {/* Practical Note beneath main photo */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-base-white border border-base-border">
                <div className="text-olive mb-1.5">
                  <Compass className="w-4 h-4" />
                </div>
                <p className="text-xs font-semibold text-charcoal">Rute Terstruktur</p>
                <p className="text-[11px] text-charcoal-muted mt-0.5">Dari pintu gerbang hingga pantai</p>
              </div>

              <div className="p-3.5 rounded-lg bg-base-white border border-base-border">
                <div className="text-olive mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <p className="text-xs font-semibold text-charcoal">Kondisi Prima</p>
                <p className="text-[11px] text-charcoal-muted mt-0.5">Suspensi empuk & ban siap bebatuan</p>
              </div>

              <div className="p-3.5 rounded-lg bg-base-white border border-base-border">
                <div className="text-olive mb-1.5">
                  <Sun className="w-4 h-4" />
                </div>
                <p className="text-xs font-semibold text-charcoal">Pemandu Lokal</p>
                <p className="text-[11px] text-charcoal-muted mt-0.5">Hapal jam & lokasi keluarnya satwa</p>
              </div>
            </div>
            </ScrollReveal>
          </div>

          {/* Side Spot Route Steps (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <ScrollReveal delay={200}>
            <h3 className="text-base font-bold text-charcoal mb-2">
              Urutan Spot yang Anda Kunjungi:
            </h3>

            <div className="space-y-4">
            {spots.map((spot, idx) => {
              const IconComp = spot.icon;
              return (
                <div
                  key={idx}
                  className="rounded-xl border border-base-border bg-base-white p-4 sm:p-5 flex items-start gap-4 shadow-sm hover:border-earth/40 transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-base-sand text-earth flex items-center justify-center font-bold text-sm shrink-0 mt-0.5">
                    <IconComp className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-bold text-earth uppercase tracking-wider">
                        Spot {spot.num}
                      </span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-charcoal mt-0.5">
                      {spot.name}
                    </h4>
                    <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                      {spot.desc}
                    </p>
                  </div>
                </div>
              );
            })}
            </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
