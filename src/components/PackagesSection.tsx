import { MessageCircle, Check, X, ArrowRight, Sun, Sunset, Car } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function PackagesSection() {
  const waBase = "https://wa.me/6285204572677";
  const waPaket1 = `${waBase}?text=${encodeURIComponent(
    "Halo Jeep Baluran, saya ingin menanyakan Paket Sunrise Safari Baluran (Savana Bekol & Pantai Bama) dan ketersediaan unit."
  )}`;
  const waPaket2 = `${waBase}?text=${encodeURIComponent(
    "Halo Jeep Baluran, saya ingin menanyakan Paket Eksplor Day Safari Baluran untuk keluarga/rombongan."
  )}`;
  const waPaket3 = `${waBase}?text=${encodeURIComponent(
    "Halo Jeep Baluran, saya ingin menanyakan Paket Private Trip Jeep Baluran dengan antar-jemput dari Banyuwangi/Ketapang."
  )}`;

  return (
    <section id="paket" className="py-16 sm:py-20 lg:py-24 bg-base-white border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-earth" />
            <span>Pilihan Paket Safari 4x4</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Paket Sewa Jeep Taman Nasional Baluran
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Pilihan paket petualangan safari melintasi jalan makadam savana, spot satwa liar di Savana Bekol, hingga pesisir tenang Pantai Bama.
          </p>
        </div>
        </ScrollReveal>

        {/* 3 Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Paket 1: Sunrise Safari */}
          <ScrollReveal delay={100}>
          <div className="rounded-xl border border-base-border bg-base-light p-6 sm:p-7 flex flex-col justify-between hover:border-charcoal/40 hover:shadow-md transition-all duration-300 h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-base-border/80 pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-earth uppercase tracking-wider">
                  <Sun className="w-3.5 h-3.5" />
                  Favorit Satwa
                </span>
                <span className="text-[11px] text-charcoal-light">05:00 - 10:00 WIB</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-charcoal">
                  Sunrise Safari Baluran
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Waktu terbaik berburu momen fajar di Savana Bekol saat kawanan rusa, banteng jawa, dan merak keluar merumput di padang savana.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-charcoal">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Spot Sunrise Savana Bekol & Menara Pandang</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Jelajah Pantai Bama & Hutan Mangrove</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Sopir lokal pemandu spot satwa liar</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Start dari Gerbang Batangan Baluran</span>
                </div>
              </div>

              <div className="pt-4 border-t border-base-border/80">
                <p className="text-xs text-charcoal-light font-medium">Informasi Tarif:</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl font-black text-charcoal">Mulai Rp 600.000</span>
                  <span className="text-xs text-charcoal-muted">/ Jeep</span>
                </div>
                <p className="text-[11px] text-charcoal-muted mt-0.5">
                  Kapasitas 1 unit Jeep (hingga 5–6 orang)
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={waPaket1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-earth hover:bg-earth-hover text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow hover:ring-2 hover:ring-earth/20 active:opacity-95"
                id="paket-sunrise-btn"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Tanya Paket Sunrise</span>
              </a>
            </div>
          </div>
          </ScrollReveal>

          {/* Paket 2: Eksplor Savana & Pantai Bama (Day Safari) */}
          <ScrollReveal delay={200}>
          <div className="rounded-xl border-2 border-olive/40 bg-base-light p-6 sm:p-7 flex flex-col justify-between relative hover:border-olive hover:shadow-lg transition-all duration-300 h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-base-border/80 pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-olive uppercase tracking-wider">
                  <Sunset className="w-3.5 h-3.5" />
                  Keluarga Santai
                </span>
                <span className="text-[11px] text-charcoal-light">Fleksibel Siang/Sore</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-charcoal">
                  Eksplor Savana & Bama
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Trip santai tanpa buru-buru. Sangat cocok untuk liburan keluarga, anak-anak, dan foto santai di pohon eksotis Savana Bekol.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-charcoal">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Lintas Hutan Musim (Evergreen Forest)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Spot Foto Savana Bekol (Bisa foto di atas Jeep)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Eksplor Pantai Bama & Mangrove Trail (PP)</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Start & Finish dari Visitor Center Baluran</span>
                </div>
              </div>

              <div className="pt-4 border-t border-base-border/80">
                <p className="text-xs text-charcoal-light font-medium">Tarif Resmi:</p>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-2xl font-black text-charcoal">Rp 600.000</span>
                  <span className="text-xs text-charcoal-muted">/ Jeep (PP)</span>
                </div>
                <p className="text-[11px] text-charcoal-muted mt-0.5">
                  Kapasitas 1 unit Jeep (hingga 5–6 orang)
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={waPaket2}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-olive hover:bg-olive-hover text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow hover:ring-2 hover:ring-olive/20 active:opacity-95"
                id="paket-day-safari-btn"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Tanya Paket Eksplor</span>
              </a>
            </div>
          </div>
          </ScrollReveal>

          {/* Paket 3: Antar-Jemput Banyuwangi / Ketapang */}
          <ScrollReveal delay={300}>
          <div className="rounded-xl border border-base-border bg-base-light p-6 sm:p-7 flex flex-col justify-between hover:border-charcoal/40 hover:shadow-md transition-all duration-300 h-full">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-base-border/80 pb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-earth uppercase tracking-wider">
                  <Car className="w-3.5 h-3.5" />
                  All-in Jemput
                </span>
                <span className="text-[11px] text-charcoal-light">Kota / Ketapang</span>
              </div>

              <div>
                <h3 className="text-xl font-bold text-charcoal">
                  Private Trip + Antar Jemput
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                  Layanan jemput langsung dari hotel, stasiun Banyuwangi Kota, atau Ketapang menuju Baluran pulang-pergi tanpa repot cari kendaraan.
                </p>
              </div>

              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-charcoal">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Penjemputan hotel / stasiun Banyuwangi</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Full trip safari di dalam TN Baluran</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Diantar kembali ke hotel / stasiun</span>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Privat untuk Anda dan rombongan</span>
                </div>
              </div>

              <div className="pt-4 border-t border-base-border/80">
                <p className="text-xs text-charcoal-light font-medium">Informasi Tarif:</p>
                <p className="text-sm sm:text-base font-bold text-charcoal mt-0.5">
                  Hubungi via WhatsApp
                </p>
                <p className="text-[11px] text-charcoal-muted mt-0.5">
                  Konsultasikan lokasi hotel Anda
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={waPaket3}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-earth hover:bg-earth-hover text-white text-xs sm:text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow hover:ring-2 hover:ring-earth/20 active:opacity-95"
                id="paket-antar-jemput-btn"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Tanya Paket Jemput</span>
              </a>
            </div>
          </div>
          </ScrollReveal>

        </div>

        {/* Transparansi Fasilitas: Include & Exclude Box */}
        <div className="mt-12 rounded-xl border border-base-border bg-base-subtle p-6 sm:p-8">
          <h4 className="text-base sm:text-lg font-bold text-charcoal mb-4">
            Rincian Fasilitas Sewa Jeep Baluran
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Include */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold text-olive uppercase tracking-wider flex items-center gap-1.5">
                <Check className="w-4 h-4 text-olive" />
                Sudah Termasuk (Include):
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-muted">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive mt-1.5 shrink-0" />
                  <span>Sewa 1 unit armada Jeep 4x4 prima</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive mt-1.5 shrink-0" />
                  <span>Sopir lokal berpengalaman sekaligus pemandu spot satwa</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive mt-1.5 shrink-0" />
                  <span>Bahan Bakar Minyak (BBM) selama rute safari</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-olive mt-1.5 shrink-0" />
                  <span>Biaya parkir kendaraan di spot wisata dalam TN Baluran</span>
                </li>
              </ul>
            </div>

            {/* Exclude */}
            <div className="space-y-2.5">
              <p className="text-xs font-bold text-earth uppercase tracking-wider flex items-center gap-1.5">
                <X className="w-4 h-4 text-earth" />
                Belum Termasuk (Exclude):
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-charcoal-muted">
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-earth mt-1.5 shrink-0" />
                  <span>Tiket masuk resmi Taman Nasional Baluran (dibeli di loket pintu gerbang)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-earth mt-1.5 shrink-0" />
                  <span>Makan & minum pribadi (tersedia warung di Pantai Bama)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-earth mt-1.5 shrink-0" />
                  <span>Pengeluaran pribadi lainnya</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Practical reassurance notice */}
        <div className="mt-8 p-4 sm:p-5 rounded-xl bg-base-white border border-base-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-charcoal-muted">
          <p className="leading-relaxed">
            <strong className="text-charcoal font-semibold">Pemesanan Sangat Mudah:</strong> Cukup chat WhatsApp sebutkan tanggal rencana dan jumlah rombongan. Pemilik akan mengonfirmasi ketersediaan unit Jeep.
          </p>
          <a
            href="https://wa.me/6285204572677"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-semibold text-earth hover:text-earth-hover inline-flex items-center gap-1"
          >
            <span>Chat 0852-0457-2677</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
