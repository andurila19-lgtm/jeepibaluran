import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#2B3E34",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jeepbaluran.com"),
  title: "Jeep Baluran | Sewa Jeep Wisata Taman Nasional Baluran",
  description:
    "Sewa Jeep 4x4 Taman Nasional Baluran (Africa van Java). Jelajahi Savana Bekol, Pantai Bama, dan safari satwa liar bersama sopir lokal berpengalaman.",
  keywords: [
    "Jeep Baluran",
    "Sewa Jeep Baluran",
    "Jeep Wisata Baluran",
    "Safari Baluran 4x4",
    "Savana Bekol Jeep",
    "Pantai Bama Baluran",
    "Tour Baluran Banyuwangi",
    "Jeep Taman Nasional Baluran",
  ],
  authors: [{ name: "Jeep Baluran Official" }],
  openGraph: {
    title: "Jeep Baluran | Sewa Jeep Wisata Taman Nasional Baluran",
    description:
      "Sewa Jeep 4x4 Taman Nasional Baluran (Africa van Java). Jelajahi Savana Bekol, Pantai Bama, dan safari satwa liar bersama sopir lokal berpengalaman.",
    url: "https://jeepbaluran.com",
    siteName: "Jeep Baluran",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/jeep-hero.png",
        width: 1200,
        height: 630,
        alt: "Jeep Wisata Taman Nasional Baluran",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TouristInformationCenter",
      "@id": "https://jeepbaluran.com/#organization",
      "name": "Jeep Baluran Official",
      "image": "https://jeepbaluran.com/images/jeep-hero.png",
      "description":
        "Penyedia jasa sewa armada Jeep 4x4 untuk eksplorasi wisata Taman Nasional Baluran, Savana Bekol, dan Pantai Bama.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pos Batangan, Gerbang Masuk Taman Nasional Baluran, Jl. Raya Banyuwangi - Situbondo KM 35",
        "addressLocality": "Wongsorejo / Banyuputih",
        "addressRegion": "Jawa Timur",
        "addressCountry": "ID"
      },
      "telephone": "+6285204572677",
      "url": "https://jeepbaluran.com",
      "priceRange": "$$",
      "openingHours": "Mo-Su 05:00-18:00",
      "areaServed": "Taman Nasional Baluran, Savana Bekol, Pantai Bama, Banyuwangi, Situbondo"
    },
    {
      "@type": "FAQPage",
      "@id": "https://jeepbaluran.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Kapan waktu terbaik menyewa Jeep untuk melihat satwa di Savana Bekol Baluran?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Waktu terbaik adalah pagi hari pukul 05:30 - 08:00 (Sunrise Safari) saat kawanan rusa, banteng jawa, dan merak keluar merumput, atau sore hari pukul 15:30 - 17:30 menjelang matahari terbenam."
          }
        },
        {
          "@type": "Question",
          "name": "Apakah rute safari Jeep Baluran ramah untuk anak-anak dan lansia?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Sangat ramah dan aman. Wisata Baluran tidak memerlukan pendakian fisik. Tamu cukup menikmati perjalanan di atas mobil Jeep 4x4 menuju spot-spot savana dan pantai."
          }
        },
        {
          "@type": "Question",
          "name": "Di mana titik temu (meeting point) sewa Jeep Baluran?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Meeting point utama berada di Pos Batangan (Gerbang Masuk TN Baluran). Kami juga melayani penjemputan dari hotel/stasiun di Banyuwangi atau Ketapang sesuai kesepakatan."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${jakartaSans.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-[#1B211E] bg-[#FBFBFA] min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
