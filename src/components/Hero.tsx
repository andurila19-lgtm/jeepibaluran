import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowDown, MapPin, CheckCircle2 } from "lucide-react";

export default function Hero() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Ijen%2C%20saya%20ingin%20tanya%20informasi%20paket%20dan%20ketersediaan.";

  return (
    <section className="relative bg-base-light pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic narrative & clear action (lg: 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Subtle Origin Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide">
              <span className="w-2 h-2 rounded-full bg-earth shrink-0" />
              <span>Layanan Jeep Wisata Lokal Banyuwangi</span>
            </div>

            {/* Headline: Natural casing, human-scale, confident */}
            <h1 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-charcoal leading-[1.2] tracking-tight">
              Sewa Jeep 4x4 untuk Perjalanan Wisata Kawah Ijen
            </h1>

            {/* Paragraph: Direct, grounded, hospitable */}
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-xl">
              Antar jemput dan perjalanan wisata kawasan Kawah Ijen bersama sopir lokal Banyuwangi. Siap melayani perjalanan wisata, berburu blue fire, hingga sunrise dengan armada yang terawat dan siap tanjakan.
            </p>

            {/* CTAs: Direct and unmistakable */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-earth hover:bg-earth-hover text-white text-sm font-semibold transition-all shadow-sm active:scale-[0.99]"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Tanya via WhatsApp</span>
              </a>

              <Link
                href="#paket"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-base-white hover:bg-base-subtle border border-base-border text-charcoal text-sm font-medium transition-colors"
                id="hero-tanya-paket-btn"
              >
                <span>Lihat Pilihan Paket</span>
                <ArrowDown className="w-4 h-4 text-charcoal-light" />
              </Link>
            </div>

            {/* Grounded Key Facts - natural row, no cards */}
            <div className="pt-4 border-t border-base-border/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-charcoal-light">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-earth shrink-0" />
                <span>Dusun Watu Ulo, Glagah, Banyuwangi</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-olive shrink-0" />
                <span>Sopir lokal berpengalaman</span>
              </div>
            </div>

          </div>

          {/* Right Column: Strong Real Photography (lg: 6 cols) */}
          <div className="lg:col-span-6">
            <div className="relative">
              {/* Asymmetric warm backing */}
              <div className="absolute -inset-3 rounded-2xl bg-base-sand/70 -rotate-1 hidden sm:block pointer-events-none" />
              
              {/* Main Image Frame */}
              <div className="relative rounded-xl overflow-hidden border border-base-border shadow-sm bg-base-white">
                <div className="relative h-[300px] sm:h-[400px] lg:h-[440px] w-full">
                  <Image
                    src="/images/jeep-hero.png"
                    alt="Armada Jeep 4x4 Toyota Land Cruiser di Banyuwangi menuju Kawah Ijen"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-3.5 bg-base-white border-t border-base-border/70 flex items-center justify-between text-xs text-charcoal-muted">
                  <span className="font-medium">Armada 4x4 tangguh medan pegunungan Ijen</span>
                  <span className="text-charcoal-light text-[11px]">Banyuwangi, Jatim</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
