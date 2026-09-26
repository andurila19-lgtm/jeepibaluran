import { MessageCircle } from "lucide-react";
import TrackedWhatsAppButton from "@/components/TrackedWhatsAppButton";

export default function FloatingWhatsApp() {
  const waUrl =
    "https://wa.me/6285204572677?text=" +
    encodeURIComponent("Halo Kak, saya ingin tanya informasi ketersediaan Jeep Baluran untuk safari.");

  return (
    <aside aria-label="Kontak WhatsApp Langsung" className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 pointer-events-auto">
      <TrackedWhatsAppButton
        href={waUrl}
        packageName="Floating Widget Inquiry"
        ctaPosition="floating_whatsapp_widget"
        className="group flex items-center gap-2 p-2.5 sm:px-3.5 sm:py-2.5 rounded-full bg-[#2B3E34] hover:bg-[#213129] text-white shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 active:scale-95"
        ariaLabel="Chat WhatsApp Jeep Baluran"
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
      </TrackedWhatsAppButton>
    </aside>
  );
}
