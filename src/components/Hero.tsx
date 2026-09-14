import Image from "next/image";
import Link from "next/link";
import { MessageCircle, ArrowRight, MapPin, CheckCircle2, Shield } from "lucide-react";

export default function Hero() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20informasi%20paket%20safari%20dan%20ketersediaan%20unit.";

  return (
    <section className="relative bg-base-light pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-16 lg:pb-24 border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic narrative & clear action (lg: 6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Subtle Origin Eyebrow */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-earth shrink-0" />
              <span>Sewa Jeep Safari 4x4 Taman Nasional Baluran</span>
            </div>

            {/* Headline: Natural casing, human-scale, confident */}
            <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[44px] font-bold text-charcoal leading-[1.25] sm:leading-[1.2] tracking-tight animate-fade-up">
              Jelajahi Savana Bekol & Africa van Java dengan Jeep 4x4
            </h1>

            {/* Paragraph: Direct, grounded, hospitable */}
            <p className="text-sm sm:text-lg text-charcoal-muted leading-relaxed max-w-xl animate-fade-up">
              Sensasi safari alam liar Taman Nasional Baluran bersama sopir lokal berpengalaman. Nikmati indahnya Savana Bekol berlatar Gunung Baluran, berburu foto kawanan satwa liar, hingga hembusan angin pantai di Pantai Bama tanpa lelah berjalan kaki.
            </p>

            {/* CTAs: Direct and unmistakable */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 animate-fade-up">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-earth hover:bg-earth-hover text-white text-sm font-semibold transition-all duration-200 shadow-sm hover:shadow hover:ring-2 hover:ring-earth/20 active:opacity-95"
                id="hero-whatsapp-btn"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Tanya via WhatsApp</span>
              </a>

              <Link
                href="/paket"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg bg-base-white hover:bg-base-subtle hover:border-charcoal/30 border border-base-border text-charcoal text-sm font-medium transition-all duration-200 shadow-sm active:opacity-95"
                id="hero-tanya-paket-btn"
              >
                <span>Lihat Paket Safari</span>
                <ArrowRight className="w-4 h-4 text-charcoal-light" />
              </Link>
            </div>

            {/* Grounded Key Facts - natural row, no cards */}
            <div className="pt-4 border-t border-base-border/80 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-charcoal-light">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-earth shrink-0" />
                <span>Pos Batangan, Gerbang TN Baluran</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-olive shrink-0" />
                <span>Ramah anak & lansia (tanpa mendaki)</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-olive shrink-0" />
                <span>Sopir lokal paham spot satwa liar</span>
              </div>
            </div>

          </div>

          {/* Right Column: Strong Real Photography (lg: 6 cols) */}
          <div className="lg:col-span-6 animate-fade-in">
            <div className="relative">
              {/* Asymmetric warm backing */}
              <div className="absolute -inset-3 rounded-2xl bg-base-sand/70 -rotate-1 hidden sm:block pointer-events-none" />
              
              {/* Main Image Frame */}
              <div className="relative rounded-2xl overflow-hidden border border-base-border shadow-md bg-base-white">
                
                {/* Floating Live Badge */}
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 z-10 bg-[#192720]/90 backdrop-blur-md text-white text-[11px] sm:text-xs px-2.5 sm:px-3.5 py-1.5 sm:py-2 rounded-xl shadow-lg border border-white/20 animate-float flex items-center gap-1.5 sm:gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="font-semibold text-emerald-300">Shuttle Rp 600rb / Jeep</span>
                </div>

                {/* Floating Feature Chip */}
                <div className="absolute bottom-14 sm:bottom-16 left-3 sm:left-4 z-10 bg-white/95 backdrop-blur-md text-charcoal text-[10.5px] sm:text-[11px] font-semibold px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg shadow-md border border-base-border flex items-center gap-1.5">
                  <span className="text-earth">★ 5.0</span>
                  <span>Spot Foto di Atas Jeep</span>
                </div>

                <div className="relative h-[280px] sm:h-[400px] lg:h-[440px] w-full">
                  <Image
                    src="/images/jeep-baluran-oranye-tamu.webp"
                    alt="Wisatawan bersafari di atas Jeep Oranye resmi Baluran"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
                <div className="p-3 sm:p-3.5 bg-base-white border-t border-base-border/70 flex flex-col xs:flex-row xs:items-center justify-between gap-1 text-xs text-charcoal-muted">
                  <span className="font-medium truncate">Unit Asli Jeep Baluran — Sensasi foto di atas Jeep</span>
                  <span className="text-charcoal-light text-[11px] shrink-0">TN Baluran, Jatim</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
