import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function GallerySection() {
  const photos = [
    {
      src: "/images/jeep-baluran-kuning-tamu.webp",
      alt: "Wisatawan berfoto seru di atas atap Jeep Kuning Baluran dengan latar Savana Bekol dan Gunung Baluran",
      title: "Savana Bekol & Gunung Baluran",
      tag: "Spot Foto Favorit",
      desc: "Spot foto paling ikonik di atas atap Jeep dengan panorama padang savana terbuka dan Gunung Baluran.",
      span: "lg:col-span-8 lg:row-span-2",
      height: "h-[260px] xs:h-[300px] sm:h-[380px] lg:h-full min-h-[260px] sm:min-h-[340px]",
    },
    {
      src: "/images/jeep-baluran-oranye-safari.webp",
      alt: "Jeep 4x4 oranye safari melintasi jalur makadam savana Baluran",
      title: "Iringan Safari Savana",
      tag: "Jalur Makadam",
      desc: "Menembus rute alami menuju Pantai Bama dengan aman dan stabil.",
      span: "lg:col-span-4",
      height: "h-[200px] sm:h-[240px]",
    },
    {
      src: "/images/jeep-baluran-kuning-front.webp",
      alt: "Armada Jeep 4x4 Kuning tangguh di Pos Batangan",
      title: "Armada Terawat Siap Jalan",
      tag: "Pos Batangan",
      desc: "Unit 4x4 kokoh dipersiapkan sebelum keberangkatan rombongan.",
      span: "lg:col-span-4",
      height: "h-[200px] sm:h-[240px]",
    },
    {
      src: "/images/jeep-baluran-oranye-tamu.webp",
      alt: "Keseruan wisatawan bersama rombongan berpose di atas Jeep oranye Baluran",
      title: "Keseruan Rombongan Wisatawan",
      tag: "Momen Sahabat & Keluarga",
      desc: "Pengalaman safari menyenangkan dan ramah untuk segala usia.",
      span: "lg:col-span-12",
      height: "h-[220px] sm:h-[280px]",
    },
  ];

  return (
    <section id="galeri" className="py-16 sm:py-20 lg:py-24 bg-savana-canvas border-b border-[#DFD9CC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1A2E22]/5 border border-[#1A2E22]/15 text-[#1A2E22] text-xs font-semibold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C45525]" />
              <span>DOKUMENTASI RIIL</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A1D1A] tracking-tight">
              Sorotan Lapangan Baluran
            </h2>
            <p className="mt-2.5 text-xs sm:text-sm text-[#6E736D] leading-relaxed">
              Dokumentasi nyata para tamu dan armada kami melintasi savana, hutan musim, dan pesisir.
            </p>
          </div>
        </ScrollReveal>

        {/* Asymmetrical Photo Mosaic */}
        <ScrollReveal delay={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5">
            {photos.map((item, idx) => (
              <div
                key={idx}
                className={`group relative rounded-2xl overflow-hidden border border-[#DFD9CC] bg-[#1A1D1A] shadow-soft hover:shadow-elevated transition-all duration-300 ${item.span}`}
              >
                <div className={`relative ${item.height} w-full overflow-hidden`}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 66vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-103"
                  />
                  {/* Subtle gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />

                  {/* Caption & Tag at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 text-white z-10">
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-md bg-[#C45525] text-white">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/80 mt-1 line-clamp-2 max-w-xl leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
