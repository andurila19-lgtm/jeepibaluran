"use client";

import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      q: "Bagaimana cara booking?",
      a: "Silakan hubungi kami langsung melalui WhatsApp dengan menyertakan tanggal rencana keberangkatan Anda. Kami akan mengonfirmasi ketersediaan unit Jeep dan langkah pemesanannya.",
    },
    {
      q: "Berapa harga Jeep Ijen?",
      a: "Silakan hubungi kami melalui WhatsApp untuk informasi terbaru mengenai harga paket perjalanan sesuai tanggal keberangkatan Anda.",
    },
    {
      q: "Apakah tersedia private trip?",
      a: "Ya, kami melayani Private Trip untuk Anda yang menginginkan perjalanan santai dan fleksibel khusus keluarga atau rombongan sendiri.",
    },
    {
      q: "Berapa kapasitas Jeep?",
      a: "Silakan hubungi kami melalui WhatsApp untuk informasi terbaru terkait kapasitas armada agar perjalanan Anda tetap nyaman.",
    },
    {
      q: "Apakah bisa request penjemputan?",
      a: "Silakan hubungi kami melalui WhatsApp untuk koordinasi titik lokasi penjemputan di wilayah Banyuwangi dan sekitarnya.",
    },
  ];

  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Kak%2C%20saya%20ingin%20bertanya%20tentang%20paket%20Jeep%20Ijen.";

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 bg-white border-b border-base-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            Tanya Jawab
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Pertanyaan yang Sering Ditanyakan
          </h2>
          <p className="mt-2 text-base text-charcoal-muted">
            Informasi umum seputar pemesanan dan layanan Jeep Ijen.
          </p>
        </div>

        {/* Standard Clean Accordion */}
        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-base-border bg-base-light overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 px-5 sm:px-6 flex items-center justify-between text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-base text-charcoal pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-charcoal-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-accent" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-sm sm:text-base text-charcoal-muted leading-relaxed border-t border-base-border/50">
                    <p>{faq.a}</p>
                    <div className="mt-3">
                      <a
                        href={waUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-accent hover:text-accent-hover transition-colors"
                      >
                        <MessageCircle className="w-3.5 h-3.5 fill-current" />
                        <span>Tanya lewat WhatsApp</span>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
