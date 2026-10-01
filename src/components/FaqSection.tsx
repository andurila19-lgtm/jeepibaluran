"use client";

import { MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import TrackedWhatsAppButton from "@/components/TrackedWhatsAppButton";
import { trackFaqView } from "@/lib/analytics";

export default function FaqSection() {
  const faqs = [
    {
      q: "Berapa harga sewa Jeep shuttle Baluran?",
      a: "Tarif resmi paket shuttle adalah Rp 597.000 per unit Jeep untuk rute pulang-pergi (PP) dari titik keberangkatan Visitor Baluran ⇄ Hutan Evergreen ⇄ Savana Bekol ⇄ Pantai Bama. Tersedia untuk Program Pagi (07.30 WIB) dan Program Siang (14.00 WIB). Biaya ini sudah termasuk unit Jeep 4x4, bahan bakar (BBM), dan jasa driver lokal berpengalaman.",
    },
    {
      q: "Satu unit Jeep muat untuk berapa orang?",
      a: "Satu unit armada Jeep 4x4 Trooper ideal memuat 5 orang penumpang (bisa hingga 5–6 orang). Kapasitas ini memastikan posisi duduk tetap lega dan nyaman saat melewati jalan berbatu makadam.",
    },
    {
      q: "Apakah biaya sewa sudah termasuk tiket masuk TN Baluran?",
      a: "Belum termasuk. Sesuai regulasi resmi Balai Taman Nasional Baluran, tiket masuk kawasan dibayarkan langsung oleh pengunjung di loket resmi gerbang Visitor Baluran (Pos Batangan) saat tiba.",
    },
    {
      q: "Jam berapa jadwal keberangkatan safari Jeep Baluran?",
      a: "Tersedia 2 jadwal keberangkatan resmi setiap hari: Program Pagi pukul 07.30 WIB dan Program Siang pukul 14.00 WIB. Seluruh keberangkatan dimulai dari titik kumpul Visitor Baluran (Pos Batangan). Durasi masing-masing trip berkisar 3–4 jam santai pulang-pergi.",
    },
    {
      q: "Bagaimana cara reservasi Jeep Baluran?",
      a: "Pemesanan langsung dan tanpa calo. Anda cukup menghubungi koordinator via WhatsApp di nomor 0852-0457-2677, sebutkan tanggal berkunjung, pilihan Program Pagi (07.30) atau Siang (14.00), dan jumlah peserta rombongan. Kami akan langsung menyiapkan unit untuk Anda.",
    },
  ];

  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20informasi%20seputar%20sewa%20Jeep.";

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-savana-canvas border-b border-[#DFD9CC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E22]/5 border border-[#1A2E22]/15 text-[#1A2E22] text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C45525]" />
              <span>TANYA JAWAB</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1D1A] tracking-tight">
              Pertanyaan yang Sering Diajukan
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#6E736D] leading-relaxed">
              Hal-hal mendasar yang sering ditanyakan sebelum menyewa Jeep di Taman Nasional Baluran.
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion Cards */}
        <ScrollReveal delay={100}>
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-3">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="rounded-2xl border border-[#DFD9CC] bg-[#FAF7F0] px-5 sm:px-6 py-1 data-[state=open]:border-[#1A2E22]/40 data-[state=open]:bg-[#FAF7F0] data-[state=open]:shadow-soft transition-all duration-300 shadow-card"
              >
                <AccordionTrigger
                  onClick={() => trackFaqView({ question: faq.q })}
                  className="text-left font-bold text-sm sm:text-base text-[#1A1D1A] hover:text-[#C45525] py-4 hover:no-underline transition-colors"
                >
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-xs sm:text-sm text-[#6E736D] leading-relaxed pb-4 pt-1">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollReveal>

        {/* WhatsApp Help Banner */}
        <ScrollReveal delay={150}>
          <div className="mt-10 sm:mt-12 text-center p-6 sm:p-7 rounded-2xl bg-[#ECE7DB]/80 border border-[#DFD9CC] shadow-card">
            <p className="text-sm sm:text-base font-bold text-[#1A1D1A]">
              Punya pertanyaan khusus seputar jadwal & rute rombongan?
            </p>
            <p className="text-xs sm:text-sm text-[#6E736D] mt-1 max-w-md mx-auto leading-relaxed">
              Konsultasikan gratis langsung bersama koordinator driver kami via WhatsApp.
            </p>
            <div className="pt-4">
              <TrackedWhatsAppButton
                href={waUrl}
                packageName="Konsultasi FAQ"
                ctaPosition="faq_section_help_box"
                ariaLabel="Chat WhatsApp Koordinator Driver Jeep Baluran"
                className="bg-[#C45525] hover:bg-[#b04a1e] text-white font-semibold rounded-xl text-xs sm:text-sm h-10 px-5 shadow-xs transition-all active:scale-95 inline-flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Chat WhatsApp (0852-0457-2677)</span>
              </TrackedWhatsAppButton>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
