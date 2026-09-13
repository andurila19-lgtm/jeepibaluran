import { MessageCircle, Check, ArrowRight } from "lucide-react";

export default function PackagesSection() {
  const waBase = "https://wa.me/6285204572677";
  const waPaket1 = `${waBase}?text=${encodeURIComponent(
    "Halo Jeep Ijen, saya ingin menanyakan paket Jeep Ijen dan ketersediaan unit untuk rencana perjalanan saya."
  )}`;
  const waPaket2 = `${waBase}?text=${encodeURIComponent(
    "Halo Jeep Ijen, saya ingin menanyakan layanan Private Trip Jeep Ijen khusus rombongan/keluarga."
  )}`;

  return (
    <section id="paket" className="py-16 sm:py-20 lg:py-24 bg-base-white border-b border-base-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header: Centered on mobile, clean left-aligned on desktop */}
        <div className="max-w-2xl mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-charcoal-muted tracking-wide mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-earth" />
            <span>Pilihan Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal tracking-tight">
            Paket Perjalanan Jeep Ijen
          </h2>
          <p className="mt-3 text-base sm:text-lg text-charcoal-muted leading-relaxed">
            Layanan sewa armada Jeep 4x4 beserta sopir lokal berpengalaman untuk menemani rute Anda menuju kawasan Kawah Ijen, Banyuwangi.
          </p>
        </div>

        {/* 2 Packages Layout: Organic, tactile, grounded */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Paket 1: Paket Jeep Ijen */}
          <div className="rounded-xl border border-base-border bg-base-light p-7 sm:p-9 flex flex-col justify-between hover:border-charcoal/30 transition-all">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-base-border/80 pb-4">
                <span className="text-xs font-semibold text-olive uppercase tracking-wider">
                  Layanan Standar
                </span>
                <span className="text-xs text-charcoal-light">Tujuan: Kawasan Ijen</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-charcoal">
                  Paket Jeep Ijen
                </h3>
                <p className="mt-2 text-sm sm:text-base text-charcoal-muted leading-relaxed">
                  Layanan perjalanan Jeep 4x4 untuk Anda yang ingin mengunjungi Kawah Ijen dengan rute aman dan sopir lokal yang ramah.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-sm text-charcoal">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Armada 4x4 siap medan tanjakan pegunungan</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Didampingi sopir lokal Banyuwangi</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Penjemputan sesuai kesepakatan</span>
                </div>
              </div>

              <div className="pt-4 border-t border-base-border/80">
                <p className="text-xs text-charcoal-light font-medium">Informasi Tarif:</p>
                <p className="text-base font-bold text-charcoal mt-1">
                  Hubungi kami via WhatsApp untuk harga terbaru
                </p>
                <p className="text-xs text-charcoal-muted mt-0.5">
                  Tarif disesuaikan dengan titik penjemputan dan tanggal perjalanan.
                </p>
              </div>
            </div>

            <div className="pt-7">
              <a
                href={waPaket1}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg bg-earth hover:bg-earth-hover text-white text-sm font-semibold transition-all shadow-sm"
                id="paket-jeep-ijen-btn"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Tanya Paket via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Paket 2: Private Trip Jeep Ijen */}
          <div className="rounded-xl border-2 border-olive/30 bg-base-light p-7 sm:p-9 flex flex-col justify-between relative hover:border-olive transition-all">
            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-base-border/80 pb-4">
                <span className="text-xs font-semibold text-earth uppercase tracking-wider">
                  Khusus Rombongan / Keluarga
                </span>
                <span className="text-xs text-charcoal-light">Perjalanan Fleksibel</span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-charcoal">
                  Private Trip Jeep Ijen
                </h3>
                <p className="mt-2 text-sm sm:text-base text-charcoal-muted leading-relaxed">
                  Sewa satu unit Jeep penuh khusus untuk Anda bersama keluarga atau teman. Waktu dan suasana perjalanan lebih santai dan privat.
                </p>
              </div>

              <div className="space-y-3 pt-2 text-sm text-charcoal">
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Satu unit Jeep khusus untuk rombongan Anda</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Sopir lokal siap membantu selama perjalanan</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-olive shrink-0 mt-0.5" />
                  <span>Jadwal dan ritme perjalanan lebih fleksibel</span>
                </div>
              </div>

              <div className="pt-4 border-t border-base-border/80">
                <p className="text-xs text-charcoal-light font-medium">Informasi Tarif:</p>
                <p className="text-base font-bold text-charcoal mt-1">
                  Hubungi kami via WhatsApp untuk harga terbaru
                </p>
                <p className="text-xs text-charcoal-muted mt-0.5">
                  Konsultasikan jumlah rombongan dan titik temu langsung dengan pemilik.
                </p>
              </div>
            </div>

            <div className="pt-7">
              <a
                href={waPaket2}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-5 rounded-lg bg-olive hover:bg-olive-hover text-white text-sm font-semibold transition-all shadow-sm"
                id="paket-private-trip-btn"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Tanya Private Trip via WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Practical reassurance notice */}
        <div className="mt-10 p-4 sm:p-5 rounded-xl bg-base-subtle border border-base-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs sm:text-sm text-charcoal-muted">
          <p className="leading-relaxed">
            <strong className="text-charcoal font-semibold">Pemesanan Mudah:</strong> Cukup kirim pesan WhatsApp dengan tanggal rencana dan jumlah peserta. Kami akan segera mengonfirmasi unit yang tersedia.
          </p>
          <a
            href="https://wa.me/6285204572677"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 font-semibold text-earth hover:text-earth-hover inline-flex items-center gap-1"
          >
            <span>Hubungi 0852-0457-2677</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
