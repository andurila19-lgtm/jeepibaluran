"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: "Kapan waktu terbaik menyewa Jeep untuk melihat satwa di Savana Bekol?",
      a: "Waktu terbaik adalah saat Sunrise Safari (pagi hari pukul 05:30 - 08:00) saat kawanan rusa timor, banteng jawa, dan burung merak liar keluar merumput di padang savana. Alternatif waktu kedua adalah sore hari pukul 15:30 - 17:30 menjelang matahari terbenam.",
    },
    {
      q: "Apakah wisata Jeep Baluran aman untuk anak-anak dan orang tua (lansia)?",
      a: "Sangat aman dan ramah keluarga. Berbeda dengan gunung atau kawah, wisata di Taman Nasional Baluran tidak memerlukan pendakian jalan kaki yang melelahkan. Seluruh rute dari gerbang, hutan musim, padang savana, hingga pantai ditempuh menggunakan mobil Jeep 4x4 yang nyaman.",
    },
    {
      q: "Satu unit Jeep bisa memuat berapa orang?",
      a: "Satu unit armada Jeep 4x4 idealnya diisi oleh 4 hingga 5 orang penumpang dewasa. Kapasitas ini memastikan setiap tamu memiliki ruang duduk yang leluasa dan pandangan terbuka untuk berfoto ria.",
    },
    {
      q: "Di mana titik temu (meeting point) keberangkatan Jeep?",
      a: "Meeting point utama berada di Pos Batangan (Pintu Gerbang Masuk TN Baluran). Jika Anda menginap di Banyuwangi atau tiba di Stasiun Ketapang / Banyuwangi Kota, kami juga menyediakan opsi paket dengan penjemputan langsung.",
    },
    {
      q: "Bagaimana cara melakukan pemesanan sewa Jeep Baluran?",
      a: "Pemesanan sangat praktis. Anda cukup menghubungi pemilik via WhatsApp di nomor 0852-0457-2677, sebutkan tanggal rencana berkunjung dan jumlah peserta. Kami akan langsung mengonfirmasi ketersediaan armada Jeep untuk tanggal tersebut.",
    },
  ];

  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20informasi%20seputar%20sewa%20Jeep.";

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-base-white border-b border-base-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-earth" />
            <span>Tanya Jawab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-base text-charcoal-muted">
            Jawaban praktis seputar sewa Jeep safari Taman Nasional Baluran.
          </p>
        </div>
        </ScrollReveal>

        {/* Clean Accordion */}
        <ScrollReveal delay={150}>
        <div className="divide-y divide-base-border border-y border-base-border">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-5 flex items-center justify-between text-left focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-base sm:text-lg text-charcoal pr-6 group-hover:text-earth transition-colors">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-charcoal-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-earth" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-6 pt-1 text-sm sm:text-base text-charcoal-muted leading-relaxed">
                    <p>{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        </ScrollReveal>

        {/* WhatsApp Help Banner */}
        <div className="mt-12 text-center p-6 rounded-xl bg-base-light border border-base-border">
          <p className="text-sm font-semibold text-charcoal">
            Ada pertanyaan lain seputar trip Baluran?
          </p>
          <p className="text-xs text-charcoal-muted mt-1">
            Pemilik Jeep Baluran siap membantu merencanakan liburan Anda dengan ramah via WhatsApp.
          </p>
          <div className="pt-4">
            <a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-olive hover:bg-olive-hover text-white text-xs font-semibold tracking-wide transition-all shadow-sm"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>Tanya Langsung ke 0852-0457-2677</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
