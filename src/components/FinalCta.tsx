import { MessageCircle } from "lucide-react";

export default function FinalCta() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20informasi%20paket%20safari%20dan%20ketersediaan%20unit.";

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-olive text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-earth" />
          <span>Layanan Safari Ramah & Terpercaya</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white">
          Rencanakan Safari Anda ke Taman Nasional Baluran
        </h2>

        <p className="text-base sm:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
          Hubungi kami langsung via WhatsApp untuk memastikan ketersediaan armada Jeep 4x4, memilih waktu Sunrise/Day Safari, dan konsultasi penjemputan.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-earth hover:bg-earth-hover text-white text-base font-semibold transition-all duration-200 shadow-md hover:shadow-lg hover:ring-2 hover:ring-earth/30 active:opacity-95"
            id="final-cta-btn"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat WhatsApp Pemilik (0852-0457-2677)</span>
          </a>
        </div>

        <p className="pt-2 text-xs sm:text-sm text-white/70">
          Respons cepat langsung dari pemilik via WhatsApp • Konsultasi jadwal & rute gratis
        </p>

      </div>
    </section>
  );
}
