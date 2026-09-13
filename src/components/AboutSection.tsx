import { MapPin, Phone, MessageCircle } from "lucide-react";

export default function AboutSection() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Kak%2C%20saya%20ingin%20bertanya%20tentang%20paket%20Jeep%20Ijen.";

  return (
    <section id="tentang" className="py-16 sm:py-20 bg-base-light border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: About Text */}
          <div className="lg:col-span-7 space-y-4">
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Tentang Kami
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
              Jeep Ijen Banyuwangi
            </h2>
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-xl">
              Kami melayani perjalanan Jeep untuk wisatawan yang ingin menjelajahi kawasan Ijen dan sekitarnya.
            </p>
            <div className="pt-2">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-olive hover:bg-olive-hover text-white text-sm font-bold transition-colors shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Hubungi Kami via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right: Location & Contact Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-base-border bg-white p-6 sm:p-7 shadow-sm space-y-5">
              
              {/* Location */}
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-olive-soft text-olive flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-charcoal-light">
                    Alamat Usaha
                  </p>
                  <p className="text-sm font-semibold text-charcoal mt-1 leading-snug">
                    Dusun Watu Ulo, Rejosari, Kecamatan Glagah, Kabupaten Banyuwangi, Jawa Timur
                  </p>
                  <p className="text-xs text-charcoal-muted mt-1">Banyuwangi, Jawa Timur</p>
                </div>
              </div>

              {/* Contact */}
              <div className="pt-4 border-t border-base-border/70 flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-charcoal-light">
                    WhatsApp & Telepon
                  </p>
                  <a
                    href="tel:085204572677"
                    className="text-base font-bold text-charcoal hover:text-accent transition-colors block mt-0.5"
                  >
                    0852-0457-2677
                  </a>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Respon cepat untuk tanya paket dan ketersediaan
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
