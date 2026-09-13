import Image from "next/image";
import { Compass, ShieldCheck, Mountain } from "lucide-react";

export default function ExperienceSection() {
  return (
    <section id="pengalaman" className="py-16 sm:py-20 lg:py-24 bg-base-subtle border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-earth" />
            <span>Rute & Medan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Pengalaman Menyusuri Jalur Ijen dengan Jeep 4x4
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Perjalanan menuju Kawah Ijen melewati rute pedesaan asri Banyuwangi hingga jalanan berliku lereng pegunungan. Armada 4x4 kami disiapkan khusus untuk menghadapi rute tanjakan dengan aman.
          </p>
        </div>

        {/* Asymmetric Visual Documentary Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Large Photo: Convoy (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative rounded-xl overflow-hidden border border-base-border bg-base-white shadow-sm">
              <div className="relative h-[320px] sm:h-[440px] w-full">
                <Image
                  src="/images/jeep-convoy.png"
                  alt="Iringan Jeep wisata 4x4 melintasi rute perbukitan Banyuwangi menuju Kawah Ijen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-4 bg-base-white border-t border-base-border/70">
                <p className="text-sm font-semibold text-charcoal">
                  Iringan armada Jeep 4x4 melintasi jalur asri lereng Ijen
                </p>
                <p className="text-xs text-charcoal-light mt-0.5">
                  Rute tenang dengan udara sejuk pegunungan Banyuwangi.
                </p>
              </div>
            </div>

            {/* Practical Note beneath main photo */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-lg bg-base-white border border-base-border">
                <div className="text-olive mb-1.5">
                  <Compass className="w-4 h-4" />
                </div>
                <p className="text-xs font-semibold text-charcoal">Rute Fleksibel</p>
                <p className="text-[11px] text-charcoal-muted mt-0.5">Penjemputan titik temu Banyuwangi</p>
              </div>

              <div className="p-3.5 rounded-lg bg-base-white border border-base-border">
                <div className="text-olive mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <p className="text-xs font-semibold text-charcoal">Kondisi Prima</p>
                <p className="text-[11px] text-charcoal-muted mt-0.5">Pemeriksaan rem & mesin rutin</p>
              </div>

              <div className="p-3.5 rounded-lg bg-base-white border border-base-border">
                <div className="text-olive mb-1.5">
                  <Mountain className="w-4 h-4" />
                </div>
                <p className="text-xs font-semibold text-charcoal">Sopir Lokal</p>
                <p className="text-[11px] text-charcoal-muted mt-0.5">Hapal medan tanjakan & tikungan</p>
              </div>
            </div>
          </div>

          {/* Side Supporting Photos (5 cols) - Asymmetric Offset */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Supporting Photo 1: Danau Kawah Ijen */}
            <div className="rounded-xl overflow-hidden border border-base-border bg-base-white shadow-sm">
              <div className="relative h-[200px] sm:h-[220px] w-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1UBUdCp9J0xZzv7yrofJSdczqmmrStyjzlmFeVcocgyIYhL4J1nngFSjMoqd_cVxHSsfLNBC4H2pQZlE7QRfY2WPimbLg1qa3oG38MOwictqZNjquwIlBOJLMXatbfwo0cHnT81KcfKs97Pm8noty2jIGen9w8in115IE_FPKCm9ZEyWoYPjWSij0N6jVu6xL9-40AW21nZ4GGSgLli7ruunl7QXAN4BrrTEYuOxbEuHFNEq-BqHFx87A"
                  alt="Pemandangan Danau Kawah Ijen toska"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-3.5 bg-base-white border-t border-base-border/70">
                <p className="text-xs font-semibold text-charcoal">
                  Tujuan utama: Pos Paltuding menuju puncak Kawah Ijen
                </p>
              </div>
            </div>

            {/* Supporting Photo 2: Momen Wisatawan */}
            <div className="rounded-xl overflow-hidden border border-base-border bg-base-white shadow-sm">
              <div className="relative h-[200px] sm:h-[220px] w-full">
                <Image
                  src="https://lh3.googleusercontent.com/aida/AEtjO1VcYTjRVRKcpix9sQzs8KeguUJEWwZumXFnFiIj0Rjv7jhb31p17RjdD7-DM63IetqSH5KyhOjsbw5Iz5KYEgSfmBioskORoZn81JFJ0r5fXFcU0CZYvX_Q5ZKrUjs5RwWa2wEPsfdTmc8xnmcln7HC6bZ7NlJGeDGqNANacy9jI8qfuGP75zI6z9mKLNDJbhOPCLhEeCi79GyM7eH5NEPx8edlErJhNBe6Yn75Fm2n8hOv_wiHiwrhbQ"
                  alt="Wisatawan berfoto bersama Jeep di pos Ijen"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>
              <div className="p-3.5 bg-base-white border-t border-base-border/70">
                <p className="text-xs font-semibold text-charcoal">
                  Momen kebersamaan para tamu sebelum memulai perjalanan
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
