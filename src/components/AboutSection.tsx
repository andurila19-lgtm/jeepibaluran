import { ShieldCheck, Users, MapPin, Clock, MessageCircle, CheckCircle2, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import TrackedWhatsAppButton from "@/components/TrackedWhatsAppButton";

export default function AboutSection() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20informasi%20paket%20safari%20dan%20ketersediaan%20unit.";

  const trustPoints = [
    {
      icon: ShieldCheck,
      title: "100% Legal & Terdaftar",
      desc: "Armada dan pengemudi resmi terkoordinasi dengan pengelola Balai Taman Nasional Baluran demi keamanan dan ketertiban wisata Anda.",
    },
    {
      icon: CheckCircle2,
      title: "Tarif Pasti Rp 597.000 PP Tanpa Calo",
      desc: "Harga jujur dan transparan langsung ke pemilik armada untuk rute shuttle lengkap Batangan ⇄ Evergreen ⇄ Bekol ⇄ Bama PP.",
    },
    {
      icon: Users,
      title: "Pengemudi Warga Asli Baluran",
      desc: "Tumbuh besar di sekitar kawasan Baluran, sangat menguasai lekuk medan makadam dan jam terbaik melihat satwa liar berkeliaran.",
    },
  ];

  return (
    <section id="tentang" className="py-16 sm:py-20 lg:py-24 bg-savana-canvas border-b border-[#DFD9CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E22]/5 border border-[#1A2E22]/15 text-[#1A2E22] text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C45525]" />
              <span>TENTANG OPERATOR</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1D1A] tracking-tight">
              Paguyuban Pengemudi Jeep Safari Baluran
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#6E736D] leading-relaxed">
              Bukan perantara atau agen luar kota. Kami adalah paguyuban pengemudi dan pemilik armada Jeep 4x4 lokal yang melayani Anda langsung dari gerbang Pos Batangan.
            </p>
          </div>
        </ScrollReveal>

        {/* Content Grid: Left 3 Trust Pillars + Right Basecamp Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: 3 Trust Pillars (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {trustPoints.map((item, idx) => {
              const Icon = item.icon;
              return (
                <ScrollReveal key={idx} delay={100 + idx * 75}>
                  <div className="p-5 sm:p-6 rounded-2xl bg-[#FAF7F0] border border-[#DFD9CC] hover:border-[#1A2E22]/30 hover-lift shadow-card hover:shadow-soft transition-all duration-300 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1A2E22]/5 text-[#1A2E22] flex items-center justify-center shrink-0 mt-0.5 border border-[#1A2E22]/10">
                      <Icon className="w-5 h-5 text-[#C45525]" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#1A1D1A]">
                        {item.title}
                      </h3>
                      <p className="mt-1.5 text-xs sm:text-sm text-[#6E736D] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right: Direct Basecamp & WhatsApp Card (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={200}>
              <div className="rounded-2xl border border-[#DFD9CC] bg-[#FAF7F0] p-6 sm:p-7 shadow-card space-y-5">
                <div className="border-b border-[#DFD9CC] pb-4">
                  <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#C45525] block">
                    PENGELOLA RESMI
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1D1A] mt-0.5">
                    Jeep Baluran Pos Batangan
                  </h3>
                  <p className="text-xs text-[#6E736D] mt-1">
                    Koordinator armada & reservasi langsung tanpa biaya perantara.
                  </p>
                </div>

                {/* Basecamp Location */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#ECE7DB] flex items-center justify-center shrink-0 mt-0.5 border border-[#DFD9CC]">
                    <MapPin className="w-4 h-4 text-[#C45525]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1A1D1A]">Titik Keberangkatan & Kumpul</p>
                    <p className="text-xs text-[#6E736D] mt-0.5 leading-snug">
                      Visitor Baluran (Pos Batangan, Pintu Gerbang Masuk TN Baluran KM 35, Banyuwangi - Situbondo).
                    </p>
                  </div>
                </div>

                {/* Jadwal Program */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#ECE7DB] flex items-center justify-center shrink-0 mt-0.5 border border-[#DFD9CC]">
                    <Clock className="w-4 h-4 text-[#1A2E22]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1A1D1A]">Jadwal Program Safari</p>
                    <p className="text-xs text-[#6E736D] mt-0.5 leading-snug">
                      Setiap Hari: Program Pagi (07.30 WIB) & Program Siang (14.00 WIB). Keberangkatan dari Visitor Baluran.
                    </p>
                  </div>
                </div>

                {/* Contact WA */}
                <div className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-[#ECE7DB] flex items-center justify-center shrink-0 mt-0.5 border border-[#DFD9CC]">
                    <MessageCircle className="w-4 h-4 text-[#C45525]" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#1A1D1A]">WhatsApp Pemilik Langsung</p>
                    <p className="text-xs font-bold text-[#1A2E22] mt-0.5">
                      0852-0457-2677
                    </p>
                    <p className="text-[11px] text-[#6E736D] mt-0.5">
                      Fast response untuk cek ketersediaan Jeep dan konsultasi rute.
                    </p>
                  </div>
                </div>

                <div className="pt-2">
                  <TrackedWhatsAppButton
                    href={waUrl}
                    packageName="Informasi Operator Jeep Baluran"
                    ctaPosition="about_operator_card"
                    ariaLabel="Chat WhatsApp Pengelola Resmi Jeep Baluran"
                    className="w-full bg-[#C45525] hover:bg-[#b04a1e] text-white font-semibold rounded-xl h-11 text-xs sm:text-sm shadow-xs transition-all active:scale-95 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                    <span>Chat WhatsApp Sekarang</span>
                  </TrackedWhatsAppButton>
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
