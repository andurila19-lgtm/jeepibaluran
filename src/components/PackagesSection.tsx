import { MessageCircle, Check, Info, ArrowRight, Clock, Users, Shield } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import TrackedWhatsAppButton from "@/components/TrackedWhatsAppButton";

export default function PackagesSection() {
  const waBase = "https://wa.me/6285204572677";
  const waShuttle = `${waBase}?text=${encodeURIComponent(
    "Halo Kak, saya tertarik dengan Paket Shuttle Jeep Baluran (Rp 600.000 / Jeep PP). Saya ingin cek jadwal dan ketersediaan armada untuk tanggal [Tentukan Tanggal]."
  )}`;
  const waSunrise = `${waBase}?text=${encodeURIComponent(
    "Halo Kak, saya tertarik dengan Paket Sunrise Safari Baluran (Fajar). Saya ingin cek jadwal dan ketersediaan Jeep untuk tanggal [Tentukan Tanggal]."
  )}`;
  const waPrivate = `${waBase}?text=${encodeURIComponent(
    "Halo Kak, saya tertarik dengan Paket Private All-In Jemput Kota Banyuwangi. Saya ingin konsultasi rute dan cek ketersediaan armada."
  )}`;

  return (
    <section id="paket" className="py-20 sm:py-28 bg-savana-canvas border-b border-[#DFD9CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14 sm:mb-16">
            <div className="max-w-2xl space-y-2.5">
              <span className="font-mono text-xs text-[#C45525] font-bold uppercase tracking-widest block">
                PILIHAN PAKET TRIP
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-[#1A1D1A] tracking-tight">
                Paket Safari Jeep Baluran
              </h2>
              <p className="text-sm sm:text-base text-[#6E736D] leading-relaxed">
                Tarif dihitung per unit mobil (bukan per orang). Sudah termasuk Jeep 4x4, pengemudi lokal, BBM, dan parkir.
              </p>
            </div>

            <div className="hidden lg:flex items-center gap-2 bg-[#E9F2E7] text-[#24522A] px-4 py-2 rounded-full text-xs font-semibold border border-[#D5E4CF] shrink-0">
              <Shield className="w-3.5 h-3.5 text-[#24522A]" />
              <span>Tarif Transparan & Bebas Biaya Tersembunyi</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 Column Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch mb-10 sm:mb-12">
          
          {/* Card 1: Paket Shuttle Baluran (FEATURED / POPULER) */}
          <ScrollReveal delay={50}>
            <div className="relative rounded-2xl bg-[#FAF7F0] border-2 border-[#C45525] p-6 sm:p-8 flex flex-col justify-between shadow-soft hover:shadow-elevated hover-lift transition-all duration-300 h-full">
              
              {/* Orange Top Badge */}
              <div className="absolute -top-3.5 left-6 bg-[#C45525] text-white text-[10.5px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                POPULER SAAT LIBURAN
              </div>

              <div className="space-y-4 pt-2">
                <div className="flex items-center justify-between text-xs text-[#6E736D] font-mono">
                  <span className="flex items-center gap-1.5 font-semibold text-[#1A1D1A]">
                    <Clock className="w-3.5 h-3.5 text-[#C45525]" />
                    05:00 - 18:00 WIB
                  </span>
                  <span>3 – 4 Jam Santai</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#1A1D1A]">
                    Paket Shuttle Baluran
                  </h3>
                  <p className="text-xs text-[#6E736D] mt-2 leading-relaxed">
                    Format standar safari terpopuler pulang-pergi. Penjemputan di Visitor Center Pos Batangan, melintasi Evergreen Forest, Savana Bekol, hingga pesisir Pantai Bama.
                  </p>
                </div>

                {/* Highlight Box */}
                <div className="bg-[#ECE7DB]/80 rounded-xl p-4 space-y-2 border border-[#DFD9CC] text-xs text-[#1E2521]">
                  <p className="font-bold text-[11px] text-[#C45525] uppercase tracking-wider">
                    Rute & Destinasi Utama:
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Pos Batangan ⇄ Evergreen ⇄ Bekol ⇄ Bama (PP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Spot foto menara pandang Bekol & atap mobil</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Mengamati kawanan rusa timor, merak & banteng</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Jembatan kayu hutan mangrove Pantai Bama</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 text-xs text-[#6E736D] pt-1">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#1A2E22]" />
                    Kapasitas 1-6 Orang
                  </span>
                  <span>•</span>
                  <span>Sopir, BBM & Parkir</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-6 border-t border-[#DFD9CC] flex items-center justify-between gap-2 mt-6">
                <div>
                  <span className="text-[11px] text-[#6E736D] block font-mono">Tarif per Mobil:</span>
                  <p className="text-2xl sm:text-3xl font-black text-[#1A1D1A]">
                    Rp 600.000
                  </p>
                </div>

                <TrackedWhatsAppButton
                  href={waShuttle}
                  packageName="Paket Shuttle Jeep Baluran"
                  ctaPosition="packages_card_shuttle"
                  ariaLabel="Booking Paket Shuttle Jeep Baluran via WhatsApp"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-[#1A1D1A] hover:bg-[#C45525] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs active:scale-95"
                >
                  <span>Booking</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </TrackedWhatsAppButton>
              </div>

            </div>
          </ScrollReveal>

          {/* Card 2: Paket Sunrise Savana */}
          <ScrollReveal delay={100}>
            <div className="rounded-2xl bg-[#FAF7F0] border border-[#DFD9CC] p-6 sm:p-8 flex flex-col justify-between shadow-soft hover:shadow-elevated hover-lift transition-all duration-300 h-full">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#6E736D] font-mono">
                  <span className="flex items-center gap-1.5 font-semibold text-[#1A1D1A]">
                    <Clock className="w-3.5 h-3.5 text-[#C45525]" />
                    05:00 - 09:30 WIB
                  </span>
                  <span>Fajar Emas</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#1A1D1A]">
                    Paket Sunrise Savana
                  </h3>
                  <p className="text-xs text-[#6E736D] mt-2 leading-relaxed">
                    Safari subuh mengejar momen golden hour terbitnya matahari di Savana Bekol. Waktu paling aktif bagi kawanan satwa liar keluar merumput bebas.
                  </p>
                </div>

                {/* Highlight Box */}
                <div className="bg-[#ECE7DB]/80 rounded-xl p-4 space-y-2 border border-[#DFD9CC] text-xs text-[#1E2521]">
                  <p className="font-bold text-[11px] text-[#C45525] uppercase tracking-wider">
                    Fasilitas & Sorotan Fajar:
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Berangkat fajar 05:00 WIB dari Pos Batangan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Spot sunrise eksotis menara pandang Bekol</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Peluang maksimal mengamati satwa liar pagi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Lanjut santai pagi ke Pantai Bama & Mangrove</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 text-xs text-[#6E736D] pt-1">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#1A2E22]" />
                    Kapasitas 1-6 Orang
                  </span>
                  <span>•</span>
                  <span>Sopir, BBM & Parkir</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-6 border-t border-[#DFD9CC] flex items-center justify-between gap-2 mt-6">
                <div>
                  <span className="text-[11px] text-[#6E736D] block font-mono">Tarif per Mobil:</span>
                  <p className="text-2xl sm:text-3xl font-black text-[#1A1D1A]">
                    Mulai Rp 600.000
                  </p>
                </div>

                <TrackedWhatsAppButton
                  href={waSunrise}
                  packageName="Paket Sunrise Savana"
                  ctaPosition="packages_card_sunrise"
                  ariaLabel="Booking Paket Sunrise Savana Baluran via WhatsApp"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-[#1A1D1A] hover:bg-[#C45525] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs active:scale-95"
                >
                  <span>Booking</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </TrackedWhatsAppButton>
              </div>

            </div>
          </ScrollReveal>

          {/* Card 3: Paket Private All-In Antar-Jemput */}
          <ScrollReveal delay={150}>
            <div className="rounded-2xl bg-[#FAF7F0] border border-[#DFD9CC] p-6 sm:p-8 flex flex-col justify-between shadow-soft hover:shadow-elevated hover-lift transition-all duration-300 h-full">
              
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#6E736D] font-mono">
                  <span className="flex items-center gap-1.5 font-semibold text-[#1A1D1A]">
                    <Clock className="w-3.5 h-3.5 text-[#C45525]" />
                    Fleksibel
                  </span>
                  <span>All-In Jemput</span>
                </div>

                <div>
                  <h3 className="text-2xl font-black text-[#1A1D1A]">
                    Private All-In Jemput Kota
                  </h3>
                  <p className="text-xs text-[#6E736D] mt-2 leading-relaxed">
                    Solusi praktis tanpa repot sewa kendaraan terpisah. Dijemput langsung dari hotel Anda di Kota Banyuwangi, Stasiun Ketapang, atau pelabuhan.
                  </p>
                </div>

                {/* Highlight Box */}
                <div className="bg-[#ECE7DB]/80 rounded-xl p-4 space-y-2 border border-[#DFD9CC] text-xs text-[#1E2521]">
                  <p className="font-bold text-[11px] text-[#C45525] uppercase tracking-wider">
                    Layanan Penjemputan Privat:
                  </p>
                  <ul className="space-y-1.5">
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Penjemputan hotel/stasiun di Banyuwangi</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Transportasi langsung menuju TN Baluran</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Full tour safari dalam kawasan Baluran (PP)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[#C45525] font-bold">•</span>
                      <span>Diantar kembali ke hotel/stasiun selesai trip</span>
                    </li>
                  </ul>
                </div>

                <div className="flex items-center gap-4 text-xs text-[#6E736D] pt-1">
                  <span className="flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-[#1A2E22]" />
                    Kapasitas 1-6 Orang
                  </span>
                  <span>•</span>
                  <span>Privat Rombongan</span>
                </div>
              </div>

              {/* Price & Action */}
              <div className="pt-6 border-t border-[#DFD9CC] flex items-center justify-between gap-2 mt-6">
                <div>
                  <span className="text-[11px] text-[#6E736D] block font-mono">Tarif per Mobil:</span>
                  <p className="text-xl sm:text-2xl font-black text-[#1A1D1A]">
                    Hubungi WA
                  </p>
                </div>

                <TrackedWhatsAppButton
                  href={waPrivate}
                  packageName="Paket Private All-In Jemput Kota"
                  ctaPosition="packages_card_private"
                  ariaLabel="Konsultasi Paket Private All-In Jemput Kota via WhatsApp"
                  className="inline-flex items-center gap-1.5 px-5 py-3 rounded-xl bg-[#1A1D1A] hover:bg-[#C45525] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs active:scale-95"
                >
                  <span>Konsultasi</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </TrackedWhatsAppButton>
              </div>

            </div>
          </ScrollReveal>

        </div>

        {/* Green Ticket Notice Box */}
        <ScrollReveal delay={200}>
          <div className="rounded-2xl bg-[#EAF0E6] border border-[#CADDC5] p-5 sm:p-6 flex items-start sm:items-center gap-4 text-xs sm:text-sm text-[#2D4532] shadow-card">
            <div className="w-9 h-9 rounded-xl bg-[#DCECD7] text-[#24522A] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
              <Info className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <p className="font-bold text-[#1F3D26]">
                Catatan Tiket Masuk Resmi Taman Nasional Baluran:
              </p>
              <p className="text-xs text-[#425F46] leading-relaxed">
                Tarif sewa armada Jeep di atas belum termasuk tiket masuk resmi kawasan TN Baluran (Wisatawan Domestik: Rp 16.000 / orang di hari kerja, Rp 18.500 di akhir pekan; Wisatawan Mancanegara sesuai tarif balai TN). Tiket dibeli langsung di loket resmi pintu gerbang Pos Batangan saat kedatangan.
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
