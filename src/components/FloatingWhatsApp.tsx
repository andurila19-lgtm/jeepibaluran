import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Baluran%2C%20saya%20ingin%20tanya%20informasi%20paket%20safari%20dan%20ketersediaan%20unit.";

  return (
    <aside aria-label="Kontak WhatsApp Langsung" className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 pointer-events-auto">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-[#2B3E34] hover:bg-[#213129] text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 active:scale-95"
        aria-label="Chat WhatsApp Jeep Baluran"
      >
        <div className="relative flex items-center justify-center">
          <MessageCircle className="w-5 h-5 fill-current text-emerald-400" />
          <span className="absolute -top-1 -right-1 flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
          </span>
        </div>
        <span className="text-xs font-semibold pr-1 hidden sm:inline-block">
          Tanya Pemilik
        </span>
      </a>
    </aside>
  );
}
