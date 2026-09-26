import { MessageCircle } from "lucide-react";
import TrackedWhatsAppButton from "@/components/TrackedWhatsAppButton";

export default function FinalCta() {
  const waUrl =
    "https://wa.me/6285204572677?text=" +
    encodeURIComponent("Halo Kak, saya ingin konsultasi jadwal dan booking Jeep Baluran di Pos Batangan.");

  return (
    <section className="py-10 xs:py-12 sm:py-16 lg:py-20 bg-[#0E1B16] text-white relative overflow-hidden border-t border-white/10">
      {/* Background warm radial glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#F59E0B]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#F59E0B]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 sm:space-y-6 relative z-10">

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[11px] sm:text-xs font-semibold text-white/90 uppercase tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
          <span>RESERVASI RESMI SAFARI</span>
        </div>

        <h2 className="text-xl xs:text-2xl sm:text-3xl lg:text-5xl font-serif font-bold tracking-tight text-white leading-[1.2]">
          Konsultasikan Jadwal & Booking <br className="hidden xs:inline" />
          <span className="italic text-[#F59E0B]">Jeep Baluran Hari Ini</span>
        </h2>

        <p className="text-xs sm:text-sm lg:text-base text-white/80 max-w-xl mx-auto leading-relaxed">
          Pastikan unit Jeep Anda siap di Pos Batangan sebelum kuota harian penuh, terutama saat akhir pekan, musim liburan, atau jadwal Sunrise Safari fajar.
        </p>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <TrackedWhatsAppButton
            href={waUrl}
            packageName="Reservasi Jeep Baluran"
            ctaPosition="final_cta_section"
            ariaLabel="Chat WhatsApp Reservasi Resmi Safari Jeep Baluran"
            id="final-cta-btn"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-[#F59E0B] hover:bg-[#EAB308] text-black text-xs sm:text-sm font-bold shadow-lg shadow-[#F59E0B]/20 transition-all active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Chat WhatsApp (+62 852-0457-2677)</span>
          </TrackedWhatsAppButton>
        </div>

        {/* 4 Trust Badges in 1 compact flex line on mobile */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-[11px] sm:text-xs text-white/70">
          <span className="flex items-center gap-1">
            <span className="text-[#F59E0B] font-bold">✓</span> Respon Cepat
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[#F59E0B] font-bold">✓</span> Rute Lengkap PP
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[#F59E0B] font-bold">✓</span> Tanpa Calo
          </span>
          <span className="flex items-center gap-1">
            <span className="text-[#F59E0B] font-bold">✓</span> Driver Lokal
          </span>
        </div>

      </div>
    </section>
  );
}
