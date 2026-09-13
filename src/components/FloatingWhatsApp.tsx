import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Jeep%20Ijen%2C%20saya%20ingin%20tanya%20informasi%20paket%20dan%20ketersediaan.";

  return (
    <aside aria-label="Kontak WhatsApp" className="fixed bottom-5 right-5 z-40">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-olive hover:bg-olive-hover text-white shadow-md hover:shadow-lg transition-all border border-white/20 active:scale-95"
        aria-label="Chat WhatsApp Jeep Ijen"
      >
        <MessageCircle className="w-5 h-5 fill-current text-[#4ADE80]" />
        <span className="text-xs font-semibold pr-0.5 hidden sm:inline-block">
          WhatsApp Kami
        </span>
      </a>
    </aside>
  );
}
