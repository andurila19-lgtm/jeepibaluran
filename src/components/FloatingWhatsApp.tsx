import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20informasi%20paket%20safari%20dan%20ketersediaan%20unit.";

  return (
    <aside aria-label="Kontak WhatsApp" className="fixed bottom-4 sm:bottom-5 right-4 sm:right-6 z-50 pointer-events-auto">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 p-3 sm:px-4 sm:py-3 rounded-full bg-olive hover:bg-olive-hover text-white shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-olive/20 transition-all duration-300 border border-white/20 active:scale-95"
        aria-label="Chat WhatsApp Jeep Baluran"
      >
        <div className="relative">
          <MessageCircle className="w-5 h-5 fill-current text-[#4ADE80]" />
          <span className="absolute -top-0.5 -right-0.5 flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
        </div>
        <span className="text-xs font-semibold pr-0.5 hidden sm:inline-block">
          WhatsApp Kami
        </span>
      </a>
    </aside>
  );
}
