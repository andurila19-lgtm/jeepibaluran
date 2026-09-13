import { MessageCircle, ArrowRight } from "lucide-react";

export default function PackagesSection() {
  const waBase = "https://wa.me/6285204572677";
  const waPaket1 = `${waBase}?text=${encodeURIComponent(
    "Halo Kak Jeep Ijen, saya ingin tanya paket Jeep Ijen dan ketersediaannya."
  )}`;
  const waPaket2 = `${waBase}?text=${encodeURIComponent(
    "Halo Kak Jeep Ijen, saya ingin tanya layanan Private Trip Jeep Ijen untuk rombongan."
  )}`;

  return (
    <section id="paket" className="py-16 sm:py-20 bg-white border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            Layanan Kami
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Paket Jeep Ijen
          </h2>
          <p className="mt-2 text-base text-charcoal-muted">
            Pilihan perjalanan menuju kawasan Ijen bersama sopir lokal berpengalaman.
          </p>
        </div>

        {/* 2 Simple Visual Package Blocks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Paket 1: JEEP IJEN */}
          <div className="rounded-xl border border-base-border bg-base-light p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-olive transition-colors">
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-olive bg-olive-soft px-2.5 py-1 rounded">
                Paket 01
              </span>
              <h3 className="text-2xl font-bold text-charcoal">
                JEEP IJEN
              </h3>
              <p className="text-base text-charcoal-muted leading-relaxed">
                Perjalanan menuju kawasan Ijen.
              </p>
              
              <div className="pt-4 border-t border-base-border/70">
                <p className="text-xs text-charcoal-light uppercase font-medium">Harga:</p>
                <p className="text-lg font-bold text-charcoal mt-0.5">
                  Hubungi kami untuk harga terbaru.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={waPaket1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-bold transition-colors shadow-sm"
                id="paket-jeep-ijen-btn"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Tanya Paket via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Paket 2: PRIVATE TRIP */}
          <div className="rounded-xl border border-base-border bg-base-light p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-olive transition-colors">
            <div className="space-y-4">
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-olive bg-olive-soft px-2.5 py-1 rounded">
                Paket 02
              </span>
              <h3 className="text-2xl font-bold text-charcoal">
                PRIVATE TRIP
              </h3>
              <p className="text-base text-charcoal-muted leading-relaxed">
                Pilihan perjalanan untuk keluarga atau grup.
              </p>

              <div className="pt-4 border-t border-base-border/70">
                <p className="text-xs text-charcoal-light uppercase font-medium">Harga:</p>
                <p className="text-lg font-bold text-charcoal mt-0.5">
                  Hubungi kami untuk harga terbaru.
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href={waPaket2}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg bg-olive hover:bg-olive-hover text-white text-sm font-bold transition-colors shadow-sm"
                id="paket-private-trip-btn"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Tanya Paket via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
