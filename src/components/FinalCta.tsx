import { MessageCircle, Phone } from "lucide-react";

export default function FinalCta() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Kak%2C%20saya%20ingin%20bertanya%20tentang%20paket%20Jeep%20Ijen.";

  return (
    <section className="py-16 sm:py-20 bg-olive text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
          Siap Berangkat ke Ijen?
        </h2>

        <p className="text-base sm:text-lg text-white/85 max-w-xl mx-auto leading-relaxed">
          Tanyakan paket, harga, dan ketersediaan Jeep melalui WhatsApp.
        </p>

        <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg bg-[#25D366] hover:bg-[#20ba5a] text-white text-base font-bold transition-all shadow-md active:scale-[0.99]"
            id="final-cta-btn"
          >
            <MessageCircle className="w-5 h-5 fill-current" />
            <span>Chat WhatsApp</span>
          </a>
        </div>

        <div className="pt-2 flex items-center justify-center gap-2 text-sm text-white/80 font-medium">
          <Phone className="w-4 h-4 text-white/70" />
          <a href="tel:085204572677" className="hover:text-white transition-colors">
            0852-0457-2677
          </a>
        </div>

      </div>
    </section>
  );
}
