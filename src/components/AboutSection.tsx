import Link from "next/link";
import { MapPin, MessageCircle, Clock, Shield, Compass, ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20informasi%20paket%20safari%20dan%20ketersediaan%20unit.";

  return (
    <section id="tentang" className="py-16 sm:py-20 lg:py-24 bg-base-subtle border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left: About Text & Direct Action (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal>
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-earth" />
              <span>Tentang Layanan Kami</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Komunitas Sewa Jeep Lokal Taman Nasional Baluran
            </h2>

            <div className="space-y-4 text-base text-charcoal-muted leading-relaxed">
              <p>
                Jeep Baluran adalah penyedia layanan sewa armada Jeep 4x4 lokal yang berbasis langsung di area Taman Nasional Baluran. Kami berfokus mendampingi wisatawan, rombongan keluarga, maupun komunitas fotografer untuk menjelajahi keindahan savana dan pesisir Baluran secara aman, tertib, dan nyaman.
              </p>
              <p>
                Dengan didampingi sopir lokal yang hapal jalur makadam, waktu keluarnya satwa liar (rusa, banteng jawa, burung merak), serta spot foto terbaik di Savana Bekol dan Pantai Bama, perjalanan safari Anda dijamin berkesan tanpa perlu khawatir lelah berjalan kaki.
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
              <Link
                href="/paket"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-base-white hover:bg-base-light border border-base-border text-charcoal text-sm font-medium transition-colors"
              >
                <span>Lihat Pilihan Paket</span>
                <ArrowRight className="w-4 h-4 text-charcoal-light" />
              </Link>
            </div>
            </ScrollReveal>
          </div>

          {/* Right: Verified Business Info Box (5 cols) */}
          <div className="lg:col-span-5">
            <ScrollReveal delay={150}>
            <div className="rounded-xl border border-base-border bg-base-white p-7 sm:p-8 space-y-6 shadow-sm">
              
              <div className="border-b border-base-border pb-4">
                <p className="text-xs font-semibold text-charcoal-light uppercase tracking-wider">
                  Informasi Layanan & Meeting Point
                </p>
                <h3 className="text-lg font-bold text-charcoal mt-1">
                  Jeep Baluran Official
                </h3>
              </div>

              {/* Meeting Point / Gate */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-base-sand text-charcoal flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4 text-earth" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-light">Meeting Point Utama</p>
                  <p className="text-sm font-semibold text-charcoal mt-1 leading-snug">
                    Pos Batangan (Pintu Gerbang Utama TN Baluran), Jl. Raya Banyuwangi - Situbondo KM 35
                  </p>
                </div>
              </div>

              {/* Service Area */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-base-sand text-charcoal flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4 text-olive" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-light">Jangkauan Layanan</p>
                  <p className="text-sm font-semibold text-charcoal mt-1 leading-snug">
                    Seluruh kawasan TN Baluran (Savana Bekol, Pantai Bama, Mangrove) + opsi penjemputan dari Banyuwangi & Situbondo.
                  </p>
                </div>
              </div>

              {/* Operational Hours */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-base-sand text-charcoal flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-4 h-4 text-olive" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-light">Jam Operasional</p>
                  <p className="text-sm font-bold text-charcoal mt-1">
                    Setiap Hari: 05:00 - 18:00 WIB
                  </p>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Melayani Sunrise Safari (Fajar) hingga Sunset Safari (Senja)
                  </p>
                </div>
              </div>

              {/* WhatsApp Contact */}
              <div className="flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-base-sand text-charcoal flex items-center justify-center shrink-0 mt-0.5">
                  <MessageCircle className="w-4 h-4 text-earth" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-charcoal-light">Kontak Langsung Pemilik</p>
                  <p className="text-sm font-bold text-charcoal mt-1">
                    0852-0457-2677
                  </p>
                  <p className="text-xs text-charcoal-muted mt-0.5">
                    Telepon & WhatsApp pemilik armada
                  </p>
                </div>
              </div>

            </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
