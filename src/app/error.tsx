"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertTriangle, RefreshCw, Home } from "lucide-react";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error securely without exposing PII
    if (process.env.NODE_ENV === "development") {
      console.error("Runtime client error:", error);
    }
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-savana-canvas">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-[#FDE8E8] border border-[#F8B4B4] flex items-center justify-center mx-auto text-[#C45525]">
          <AlertTriangle className="w-8 h-8 text-[#9B1C1C]" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-[#9B1C1C] uppercase tracking-widest">
            Terjadi Kesalahan Sistem
          </span>
          <h1 className="text-2xl sm:text-3xl font-black text-[#1A1D1A] tracking-tight">
            Koneksi Terputus Sementara
          </h1>
          <p className="text-sm text-[#6E736D] leading-relaxed">
            Terjadi kendala saat memuat halaman ini. Silakan coba muat ulang atau kembali ke halaman utama.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            type="button"
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#1A1D1A] hover:bg-[#C45525] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Muat Ulang Halaman</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#FAF7F0] hover:bg-[#ECE7DB] border border-[#DFD9CC] text-[#1A1D1A] text-xs font-bold uppercase tracking-wider transition-colors shadow-xs"
          >
            <Home className="w-4 h-4" />
            <span>Ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
