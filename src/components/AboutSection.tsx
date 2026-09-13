import { MapPin, Phone, MessageCircle, Clock, Shield } from "lucide-react";

export default function AboutSection() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Ijen%2C%20saya%20ingin%20tanya%20informasi%20paket%20dan%20ketersediaan.";

  return (
    <section id="tentang" className="py-16 sm:py-20 lg:py-24 bg-base-subtle border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: About Text & Direct Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-earth" />
              <span>Tentang Usaha Kami</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Usaha Jeep Lokal Berbasis di Banyuwangi
            </h2>

            <div className="space-y-4 text-base text-charcoal-muted leading-relaxed">
              <p>
                Jeep Ijen adalah penyedia layanan sewa Jeep 4x4 lokal yang berbasis di Dusun Watu Ulo, Rejosari, Kecamatan Glagah, Banyuwangi. Kami fokus melayani perjalanan wisata para wisatawan yang ingin berkunjung ke kawasan Kawah Ijen.
              </p>
              <p>
                Dengan didampingi sopir lokal yang terbiasa melintasi jalur pegunungan Ijen, kami memastikan perjalanan Anda berlangsung aman, tertib, dan menyenangkan. Hubungi kami langsung untuk berdiskusi mengenai jadwal dan kebutuhan perjalanan Anda.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-olive hover:bg-olive-hover text-white text-sm font-semibold transition-all shadow-sm"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Hubungi Pemilik via WhatsApp</span>
              </a>
              <a
                href="tel:085204572677"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-base-white hover:bg-base-light border border-base-border text-charcoal text-sm font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-charcoal-light" />
                <span>0852-0457-2677</span>
              </a>
            </div>
          </div>

          {/* Right: Verified Business Info Box (5 cols) */}
          <div className="lg:col-span-5">
            <div className="rounded-xl border border-base-border bg-base-white p-7 sm:p-8 space-y-6 shadow-sm">
              
              <div className="border-b border-base-border pb-4">
                <p className="text-xs font-semibold text-charcoal-light uppercase tracking-wider">
                  Informasi Usaha
                </p>
                <h3 className="text-lg font-bold text-charcoal mt-1">
                  Jeep Ijen Banyuwangi
                </h3>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-base-sand text-charcoal flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-earth" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-light">Alamat Kantor / Garasi</p>
                  <p className="text-sm font-semibold text-charcoal mt-1 leading-snug">
                    Dusun Watu Ulo, Rejosari, Kecamatan Glagah, Kabupaten Banyuwangi, Jawa Timur
                  </p>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-base-sand text-charcoal flex items-center justify-center shrink-0 mt-0.5">
                  <Shield className="w-4 h-4 text-olive" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-light">Wilayah Layanan</p>
                  <p className="text-sm font-semibold text-charcoal mt-1 leading-snug">
                    Kawasan Kawah Ijen, Pos Paltuding, dan titik temu Banyuwangi sekitarnya.
                  </p>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-base-sand text-charcoal flex items-center justify-center shrink-0 mt-0.5">
                  <Phone className="w-4 h-4 text-earth" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-light">Kontak Langsung</p>
                  <p className="text-sm font-bold text-charcoal mt-1">
                    0852-0457-2677
                  </p>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Telepon & WhatsApp pemilik usaha
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
