import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="py-16 sm:py-20 bg-base-light border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-accent mb-2">
            Dokumentasi
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-charcoal tracking-tight">
            Perjalanan Menuju Ijen
          </h2>
          <p className="mt-2 text-base text-charcoal-muted">
            Armada Jeep 4x4 kami siap mengantar Anda menyusuri rute pegunungan Banyuwangi.
          </p>
        </div>

        {/* 1 Big Photo + 2 Supporting Photos */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Main Large Photo (7 cols) */}
          <div className="lg:col-span-7 rounded-xl overflow-hidden border border-base-border bg-white shadow-sm flex flex-col">
            <div className="relative h-[320px] sm:h-[420px] w-full">
              <Image
                src="/images/jeep-convoy.png"
                alt="Konvoi armada Jeep wisata Ijen di Banyuwangi"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover object-center"
              />
            </div>
            <div className="p-4 bg-white border-t border-base-border">
              <p className="text-sm font-semibold text-charcoal">
                Armada Jeep 4x4 melintasi rute asri Banyuwangi menuju pos Kawah Ijen
              </p>
            </div>
          </div>

          {/* 2 Supporting Photos (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Supporting Photo 1: Kawah Ijen */}
            <div className="rounded-xl overflow-hidden border border-base-border bg-white shadow-sm flex-1 flex flex-col">
              <div className="relative h-[180px] sm:h-[200px] w-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UBUdCp9J0xZzv7yrofJSdczqmmrStyjzlmFeVcocgyIYhL4J1nngFSjMoqd_cVxHSsfLNBC4H2pQZlE7QRfY2WPimbLg1qa3oG38MOwictqZNjquwIlBOJLMXatbfwo0cHnT81KcfKs97Pm8noty2jIGen9w8in115IE_FPKCm9ZEyWoYPjWSij0N6jVu6xL9-40AW21nZ4GGSgLli7ruunl7QXAN4BrrTEYuOxbEuHFNEq-BqHFx87A"
                  alt="Danau Kawah Ijen toska saat matahari terbit"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-3.5 bg-white border-t border-base-border">
                <p className="text-xs font-semibold text-charcoal">
                  Pemandangan fajar di Danau Kawah Ijen
                </p>
              </div>
            </div>

            {/* Supporting Photo 2: Wisatawan */}
            <div className="rounded-xl overflow-hidden border border-base-border bg-white shadow-sm flex-1 flex flex-col">
              <div className="relative h-[180px] sm:h-[200px] w-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VcYTjRVRKcpix9sQzs8KeguUJEWwZumXFnFiIj0Rjv7jhb31p17RjdD7-DM63IetqSH5KyhOjsbw5Iz5KYEgSfmBioskORoZn81JFJ0r5fXFcU0CZYvX_Q5ZKrUjs5RwWa2wEPsfdTmc8xnmcln7HC6bZ7NlJGeDGqNANacy9jI8qfuGP75zI6z9mKLNDJbhOPCLhEeCi79GyM7eH5NEPx8edlErJhNBe6Yn75Fm2n8hOv_wiHiwrhbQ"
                  alt="Wisatawan berfoto bersama Jeep di pos Ijen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-3.5 bg-white border-t border-base-border">
                <p className="text-xs font-semibold text-charcoal">
                  Momen kebersamaan wisatawan di pos keberangkatan
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
