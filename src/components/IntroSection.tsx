import Image from "next/image";
import { Car, Mountain, MessageCircle } from "lucide-react";

export default function IntroSection() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Text & 3 Info Points (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Kemudahan Perjalanan
            </p>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal leading-tight tracking-tight">
              Perjalanan ke Ijen, <br />
              lebih praktis.
            </h2>

            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Siapkan perjalanan Anda menuju Ijen dengan Jeep lokal Banyuwangi. Lihat pilihan paket,
              dokumentasi perjalanan, lalu hubungi kami langsung untuk informasi dan ketersediaan.
            </p>

            {/* 3 Friendly Info Points */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-base-light border border-base-border">
                <div className="w-8 h-8 rounded-lg bg-olive-soft text-olive flex items-center justify-center mb-2">
                  <Car className="w-4 h-4" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                  JEEP
                </p>
                <p className="text-xs text-charcoal-muted leading-snug">
                  Layanan perjalanan menggunakan Jeep
                </p>
              </div>

              <div className="p-4 rounded-xl bg-base-light border border-base-border">
                <div className="w-8 h-8 rounded-lg bg-olive-soft text-olive flex items-center justify-center mb-2">
                  <Mountain className="w-4 h-4" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                  IJEN
                </p>
                <p className="text-xs text-charcoal-muted leading-snug">
                  Perjalanan wisata kawasan Ijen
                </p>
              </div>

              <div className="p-4 rounded-xl bg-base-light border border-base-border">
                <div className="w-8 h-8 rounded-lg bg-olive-soft text-olive flex items-center justify-center mb-2">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <p className="text-xs font-bold uppercase tracking-wider text-charcoal mb-1">
                  WHATSAPP
                </p>
                <p className="text-xs text-charcoal-muted leading-snug">
                  Booking dan konsultasi langsung
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Big Jeep Photo (6 cols) */}
          <div className="lg:col-span-6">
            <div className="rounded-2xl overflow-hidden border border-base-border shadow-sm bg-base-light">
              <div className="relative h-[320px] sm:h-[400px] w-full">
                <Image
                  src="/images/jeep-convoy.png"
                  alt="Iringan Jeep Wisata Ijen di Banyuwangi"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
