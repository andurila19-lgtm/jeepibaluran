import Link from "next/link";
import { Compass, Home, MessageCircle } from "lucide-react";

export default function NotFound() {
  const waUrl =
    "https://wa.me/6285204572677?text=" +
    encodeURIComponent("Halo Jeep Baluran, saya tersesat di halaman website dan ingin tanya info paket.");

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-savana-canvas">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#ECE7DB] border border-[#DFD9CC] flex items-center justify-center mx-auto text-[#C45525]">
          <Compass className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-[#C45525] uppercase tracking-widest">
            Halaman Tidak Ditemukan (404)
          </span>
          <h1 className="text-3xl font-black text-[#1A1D1A] tracking-tight">
            Tersesat di Savana?
          </h1>
          <p className="text-sm text-[#6E736D] leading-relaxed">
            Halaman yang Anda cari tidak tersedia atau alamat URL telah dipindahkan. Mari kembali ke jalur utama atau hubungi kami langsung.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1A1D1A] hover:bg-[#C45525] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Kembali ke Beranda</span>
          </Link>

          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FAF7F0] hover:bg-[#ECE7DB] border border-[#DFD9CC] text-[#1A1D1A] text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-[#25D366]" />
            <span>Hubungi WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
}
