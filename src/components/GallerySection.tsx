import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

export default function GallerySection() {
  const photos = [
    {
      src: "/images/jeep-baluran-kuning-tamu.webp",
      alt: "Wisatawan berfoto seru di atas atap Jeep Kuning Baluran",
      caption: "Spot Foto Favorit di Atas Atap Jeep",
      location: "Savana Bekol, Baluran",
      span: "md:col-span-2 md:row-span-2",
      aspect: "h-[300px] sm:h-[400px] md:h-full min-h-[340px]",
    },
    {
      src: "/images/jeep-baluran-oranye-tamu.webp",
      alt: "Rombongan tamu berfoto di atas Jeep Oranye Baluran",
      caption: "Keseruan Bersama Sahabat & Keluarga",
      location: "Savana Bekol",
      span: "md:col-span-1",
      aspect: "h-[220px] sm:h-[240px]",
    },
    {
      src: "/images/jeep-baluran-kuning-front.webp",
      alt: "Armada Jeep 4x4 Kuning tangguh siap safari Baluran",
      caption: "Armada 4x4 Tangguh Siap Safari",
      location: "Pos Batangan, Baluran",
      span: "md:col-span-1",
      aspect: "h-[220px] sm:h-[240px]",
    },
    {
      src: "/images/jeep-baluran-oranye-safari.webp",
      alt: "Jeep 4x4 Oranye safari melintasi jalan savana Baluran",
      caption: "Jelajah Jalur Savana & Pantai Bama",
      location: "Evergreen Forest & Savana",
      span: "md:col-span-2",
      aspect: "h-[220px] sm:h-[240px]",
    },
  ];

  return (
    <section id="galeri" className="py-16 sm:py-20 lg:py-24 bg-base-white border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-earth" />
              <span>Dokumentasi Safari</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Galeri Wisata Jeep Baluran
            </h2>
            <p className="mt-3 text-base text-charcoal-muted leading-relaxed">
              Potret keindahan lanskap Savana Bekol, Pantai Bama, dan keseruan para tamu bersama armada Jeep 4x4 kami.
            </p>
          </div>
          <p className="text-xs text-charcoal-light font-medium self-start md:self-end">
            Dokumentasi asli perjalanan safari
          </p>
        </div>
        </ScrollReveal>

        {/* Asymmetrical Photo Collage */}
        <ScrollReveal delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className={`group rounded-xl overflow-hidden border border-base-border hover:border-charcoal/40 bg-base-light flex flex-col transition-all duration-300 ${item.span}`}
            >
              <div className={`relative ${item.aspect} w-full overflow-hidden bg-charcoal`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-all duration-500 opacity-95 group-hover:opacity-100 group-hover:brightness-105"
                />
              </div>
              <div className="p-3.5 bg-base-white border-t border-base-border/70 flex items-center justify-between text-xs transition-colors group-hover:bg-base-subtle">
                <span className="font-semibold text-charcoal">{item.caption}</span>
                <span className="text-charcoal-light text-[11px]">{item.location}</span>
              </div>
            </div>
          ))}
        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
