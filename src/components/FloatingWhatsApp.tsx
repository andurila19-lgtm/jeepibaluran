import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const waUrl =
    "https://wa.me/6285204572677?text=Halo%20Kak%2C%20saya%20ingin%20bertanya%20tentang%20paket%20Jeep%20Ijen.";

  return (
    <aside aria-label="Kontak WhatsApp" className="fixed bottom-5 right-5 z-40">
      <a
        href={waUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white shadow-md hover:shadow-lg transition-all focus:outline-none"
        aria-label="Chat WhatsApp Jeep Ijen"
      >
        <MessageCircle className="w-5 h-5 fill-current shrink-0" />
        <span className="text-xs font-bold hidden sm:inline-block pr-1">
          Chat WhatsApp
        </span>
      </a>
    </aside>
  );
}
