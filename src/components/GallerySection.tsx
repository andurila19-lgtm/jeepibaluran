import Image from "next/image";

export default function GallerySection() {
  const photos = [
    {
      src: "/images/jeep-hero.png",
      alt: "Armada Jeep 4x4 Toyota Land Cruiser di Banyuwangi",
      caption: "Armada 4x4 Terawat",
      location: "Banyuwangi",
      span: "md:col-span-2 md:row-span-2",
      aspect: "h-[280px] sm:h-[380px] md:h-full min-h-[320px]",
    },
    {
      src: "https://lh3.googleusercontent.com/aida/AEtjO1UBUdCp9J0xZzv7yrofJSdczqmmrStyjzlmFeVcocgyIYhL4J1nngFSjMoqd_cVxHSsfLNBC4H2pQZlE7QRfY2WPimbLg1qa3oG38MOwictqZNjquwIlBOJLMXatbfwo0cHnT81KcfKs97Pm8noty2jIGen9w8in115IE_FPKCm9ZEyWoYPjWSij0N6jVu6xL9-40AW21nZ4GGSgLli7ruunl7QXAN4BrrTEYuOxbEuHFNEq-BqHFx87A",
      alt: "Pemandangan Kawah Ijen dan danau toska",
      caption: "Kawah Ijen Saat Fajar",
      location: "Paltuding, Ijen",
      span: "md:col-span-1",
      aspect: "h-[220px] sm:h-[240px]",
    },
    {
      src: "/images/jeep-convoy.png",
      alt: "Iringan Jeep wisata di jalur pegunungan Ijen",
      caption: "Iringan Jeep di Rute Lereng",
      location: "Lereng Gunung Ijen",
      span: "md:col-span-1",
      aspect: "h-[220px] sm:h-[240px]",
    },
    {
      src: "https://lh3.googleusercontent.com/aida/AEtjO1VcYTjRVRKcpix9sQzs8KeguUJEWwZumXFnFiIj0Rjv7jhb31p17RjdD7-DM63IetqSH5KyhOjsbw5Iz5KYEgSfmBioskORoZn81JFJ0r5fXFcU0CZYvX_Q5ZKrUjs5RwWa2wEPsfdTmc8xnmcln7HC6bZ7NlJGeDGqNANacy9jI8qfuGP75zI6z9mKLNDJbhOPCLhEeCi79GyM7eH5NEPx8edlErJhNBe6Yn75Fm2n8hOv_wiHiwrhbQ",
      alt: "Wisatawan berfoto bersama Jeep sebelum naik ke Kawah Ijen",
      caption: "Dokumentasi Para Tamu",
      location: "Pos Keberangkatan",
      span: "md:col-span-2",
      aspect: "h-[220px] sm:h-[240px]",
    },
  ];

  return (
    <section id="galeri" className="py-16 sm:py-20 lg:py-24 bg-base-white border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-14 gap-4">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-2.5">
              <span className="w-1.5 h-1.5 rounded-full bg-earth" />
              <span>Dokumentasi Nyata</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
              Galeri Perjalanan Jeep Ijen
            </h2>
            <p className="mt-3 text-base text-charcoal-muted leading-relaxed">
              Momen nyata perjalanan wisatawan dan armada Jeep kami di kawasan Banyuwangi dan lereng Kawah Ijen.
            </p>
          </div>
          <p className="text-xs text-charcoal-light font-medium self-start md:self-end">
            Foto asli perjalanan & armada
          </p>
        </div>

        {/* Asymmetrical Photo Collage */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-xl overflow-hidden border border-base-border bg-base-light flex flex-col ${item.span}`}
            >
              <div className={`relative ${item.aspect} w-full overflow-hidden`}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-3.5 bg-base-white border-t border-base-border/70 flex items-center justify-between text-xs">
                <span className="font-semibold text-charcoal">{item.caption}</span>
                <span className="text-charcoal-light text-[11px]">{item.location}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
