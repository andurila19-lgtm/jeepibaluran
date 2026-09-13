import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";

export default function Hero() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Kak%2C%20saya%20ingin%20bertanya%20tentang%20paket%20Jeep%20Ijen.";

  return (
    <section className="bg-base-light py-12 sm:py-16 md:py-20 border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: 45% Text */}
          <div className="lg:col-span-5 space-y-5">
            {/* Small Eyebrow */}
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Jeep Wisata Banyuwangi
            </p>

            {/* Headline: Natural casing, bold, highly legible */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-black text-charcoal leading-[1.15] tracking-tight">
              Jelajahi Ijen <br />
              dengan Jeep
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg text-charcoal-muted leading-relaxed">
              Perjalanan menuju kawasan Ijen bersama Jeep lokal Banyuwangi.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <Link
                href="#paket"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-accent hover:bg-accent-hover text-white text-base font-bold transition-colors shadow-sm"
                id="hero-tanya-paket-btn"
              >
                <span>Tanya Paket</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white hover:bg-base-subtle border border-base-border text-charcoal text-base font-bold transition-colors shadow-sm"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] fill-current" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Friendly Location Note */}
            <div className="pt-4 text-xs text-charcoal-light flex items-center gap-2">
              <span>📍</span>
              <span>Dusun Watu Ulo, Rejosari, Glagah, Banyuwangi</span>
            </div>
          </div>

          {/* Right Column: 55% Big Clear Jeep Photo */}
          <div className="lg:col-span-7">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-base-border bg-white">
              <div className="relative h-[320px] sm:h-[420px] lg:h-[460px] w-full">
                <Image
                  src="/images/jeep-hero.png"
                  alt="Jeep 4x4 Wisata Kawah Ijen Banyuwangi"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 55vw"
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
