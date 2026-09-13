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
      q: "Bagaimana cara melakukan pemesanan Jeep Ijen?",
      a: "Pemesanan sangat mudah. Silakan hubungi kami langsung via WhatsApp di nomor 0852-0457-2677 dengan menyebutkan tanggal rencana perjalanan, jumlah orang, dan titik penjemputan. Kami akan mengonfirmasi ketersediaan unit dan panduan selanjutnya.",
    },
    {
      q: "Berapa tarif sewa Jeep ke Kawah Ijen?",
      a: "Tarif kami sesuaikan dengan titik penjemputan (misal hotel/stasiun Banyuwangi atau meeting point tertentu) serta tanggal perjalanan Anda. Silakan tanyakan langsung via WhatsApp untuk mendapatkan informasi tarif terbaru dan transparan.",
    },
    {
      q: "Apakah tersedia Private Trip untuk rombongan keluarga atau teman?",
      a: "Ya, kami melayani Private Trip di mana satu unit Jeep hanya diisi oleh rombongan Anda sendiri. Perjalanan menjadi lebih santai, privat, dan leluasa.",
    },
    {
      q: "Di mana saja titik penjemputan yang dilayani?",
      a: "Kami dapat berkoordinasi untuk penjemputan di wilayah Banyuwangi, seperti stasiun, hotel, penginapan, maupun titik temu yang disepakati bersama sebelum menuju Pos Paltuding.",
    },
    {
      q: "Kapan waktu terbaik untuk melakukan reservasi?",
      a: "Sebaiknya lakukan konfirmasi beberapa hari sebelum jadwal keberangkatan, terutama saat akhir pekan atau musim liburan, untuk memastikan ketersediaan armada Jeep pada tanggal yang Anda inginkan.",
    },
  ];

  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Ijen%2C%20saya%20ingin%20tanya%20informasi%20seputar%20layanan.";

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 bg-base-white border-b border-base-border">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-14">
          <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-earth" />
            <span>Tanya Jawab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-3 text-base text-charcoal-muted">
            Jawaban praktis seputar pemesanan dan layanan Jeep Ijen Banyuwangi.
          </p>
        </div>

        {/* Clean Accordion (border-b dividers rather than heavy boxed cards) */}
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

        {/* WhatsApp Help Banner */}
        <div className="mt-12 text-center p-6 rounded-xl bg-base-light border border-base-border">
          <p className="text-sm font-semibold text-charcoal">
            Ada hal lain yang ingin Anda tanyakan?
          </p>
          <p className="text-xs text-charcoal-muted mt-1">
            Pemilik Jeep Ijen siap menjawab pertanyaan Anda secara ramah melalui WhatsApp.
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
