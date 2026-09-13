import Image from "next/image";

export default function GallerySection() {
  const photos = [
    {
      src: "/images/jeep-hero.png",
      alt: "Jeep 4x4 Toyota Land Cruiser di Banyuwangi",
      caption: "Armada Jeep 4x4 tangguh",
    },
    {
      src: "https://lh3.googleusercontent.com/aida/AEtjO1UBUdCp9J0xZzv7yrofJSdczqmmrStyjzlmFeVcocgyIYhL4J1nngFSjMoqd_cVxHSsfLNBC4H2pQZlE7QRfY2WPimbLg1qa3oG38MOwictqZNjquwIlBOJLMXatbfwo0cHnT81KcfKs97Pm8noty2jIGen9w8in115IE_FPKCm9ZEyWoYPjWSij0N6jVu6xL9-40AW21nZ4GGSgLli7ruunl7QXAN4BrrTEYuOxbEuHFNEq-BqHFx87A",
      alt: "Pemandangan Kawah Ijen Banyuwangi",
      caption: "Danau toska Kawah Ijen",
    },
    {
      src: "/images/jeep-convoy.png",
      alt: "Iringan Jeep di jalan pegunungan Ijen",
      caption: "Iringan Jeep menyusuri lereng",
    },
    {
      src: "https://lh3.googleusercontent.com/aida/AEtjO1VcYTjRVRKcpix9sQzs8KeguUJEWwZumXFnFiIj0Rjv7jhb31p17RjdD7-DM63IetqSH5KyhOjsbw5Iz5KYEgSfmBioskORoZn81JFJ0r5fXFcU0CZYvX_Q5ZKrUjs5RwWa2wEPsfdTmc8xnmcln7HC6bZ7NlJGeDGqNANacy9jI8qfuGP75zI6z9mKLNDJbhOPCLhEeCi79GyM7eH5NEPx8edlErJhNBe6Yn75Fm2n8hOv_wiHiwrhbQ",
      alt: "Wisatawan berfoto bersama Jeep",
      caption: "Dokumentasi para tamu",
    },
  ];

  return (
    <section id="galeri" className="py-16 sm:py-20 bg-white border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            Galeri Foto
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Dokumentasi Perjalanan
          </h2>
          <p className="mt-2 text-base text-charcoal-muted">
            Momen nyata perjalanan wisatawan bersama armada Jeep Ijen di Banyuwangi.
          </p>
        </div>

        {/* Familiar 4-card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {photos.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl overflow-hidden border border-base-border bg-base-light shadow-sm flex flex-col group"
            >
              <div className="relative h-[220px] sm:h-[240px] w-full">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="p-3.5 bg-white border-t border-base-border/80">
                <p className="text-xs sm:text-sm font-semibold text-charcoal">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
