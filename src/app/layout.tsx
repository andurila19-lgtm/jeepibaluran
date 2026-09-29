import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import { safeJsonStringify } from "@/lib/security";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

export const viewport: Viewport = {
  themeColor: "#1C2621",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jeepbaluran.reaksy.com"),
  title: {
    default: "Tour Banyuwangi & Jeep Baluran | Open Trip Jawa Timur",
    template: "%s | Jeep Baluran",
  },
  description:
    "Layanan sewa armada 4x4 Jeep Baluran untuk tour Banyuwangi & open trip Jawa Timur. Jelajahi Savana Bekol, Pantai Bama, dan satwa liar bersama pengemudi lokal. Hubungi WhatsApp untuk cek unit.",
  keywords: [
    "tour Banyuwangi",
    "Jeep Baluran",
    "open trip Baluran",
    "tour Jawa Timur",
    "open trip Jawa Timur",
    "sewa Jeep Baluran",
    "Baluran Jeep",
    "Banyuwangi Jeep",
    "Situbondo Jeep",
    "Savana Bekol 4x4",
    "Pantai Bama Baluran",
  ],
  authors: [{ name: "Jeep Baluran Official" }],
  creator: "Jeep Baluran Official",
  publisher: "Jeep Baluran Official",
  alternates: {
    canonical: "https://jeepbaluran.reaksy.com",
  },
  openGraph: {
    title: "Tour Banyuwangi & Jeep Baluran | Open Trip Jawa Timur",
    description:
      "Layanan sewa armada 4x4 Jeep Baluran untuk tour Banyuwangi & open trip Jawa Timur. Jelajahi Savana Bekol, Pantai Bama, dan satwa liar bersama pengemudi lokal.",
    url: "https://jeepbaluran.reaksy.com",
    siteName: "Jeep Baluran",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/og-image.webp",
        width: 1200,
        height: 630,
        alt: "JEEP BALURAN - Safari Jeep 4x4 Baluran Resmi",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tour Banyuwangi & Jeep Baluran | Open Trip Jawa Timur",
    description:
      "Layanan sewa armada 4x4 Jeep Baluran untuk tour Banyuwangi & open trip Jawa Timur. Jelajahi Savana Bekol dan Pantai Bama bersama sopir lokal.",
    images: ["/images/og-image.webp"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/images/logo-baluran-emblem.webp", type: "image/webp" },
    ],
    apple: [{ url: "/apple-icon.png" }],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["TravelAgency", "TouristInformationCenter", "LocalBusiness"],
      "@id": "https://jeepbaluran.reaksy.com/#organization",
      "name": "Jeep Baluran Official",
      "alternateName": "Sewa Jeep Baluran Pos Batangan",
      "legalName": "Paguyuban Pengemudi Jeep Safari Baluran",
      "image": "https://jeepbaluran.reaksy.com/images/jeep-baluran-oranye-tamu.webp",
      "logo": "https://jeepbaluran.reaksy.com/images/logo-baluran-emblem.webp",
      "description":
        "Penyedia jasa sewa armada Jeep 4x4 untuk eksplorasi wisata Taman Nasional Baluran, Savana Bekol, dan Pantai Bama sebagai pendukung tour Banyuwangi dan open trip Jawa Timur.",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Pos Batangan, Gerbang Masuk Taman Nasional Baluran, Jl. Raya Banyuwangi - Situbondo KM 35, Desa Wonorejo",
        "addressLocality": "Banyuputih",
        "addressRegion": "Jawa Timur",
        "postalCode": "68374",
        "addressCountry": "ID"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": -7.8385,
        "longitude": 114.4287
      },
      "telephone": "+6285204572677",
      "url": "https://jeepbaluran.reaksy.com",
      "priceRange": "Rp 597.000",
      "currenciesAccepted": "IDR",
      "paymentAccepted": "Cash, QRIS, Bank Transfer",
      "openingHours": "Mo-Su 05:00-18:00",
      "areaServed": [
        {
          "@type": "Place",
          "name": "Taman Nasional Baluran"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Banyuwangi"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Situbondo"
        },
        {
          "@type": "AdministrativeArea",
          "name": "Jawa Timur"
        }
      ]
    },
    {
      "@type": "TouristAttraction",
      "@id": "https://jeepbaluran.reaksy.com/#baluran",
      "name": "Taman Nasional Baluran",
      "description": "Kawasan konservasi alam liar dengan julukan Africa van Java, memiliki padang savana terluas di Pulau Jawa, hutan musim tropis, dan pantai pesisir.",
      "url": "https://jeepbaluran.reaksy.com/rute"
    },
    {
      "@type": "TouristAttraction",
      "@id": "https://jeepbaluran.reaksy.com/#savana-bekol",
      "name": "Savana Bekol",
      "description": "Padang rumput alami 300 hektare berlatar panorama Gunung Baluran dengan kawanan rusa timor, merak liar, dan banteng Jawa."
    },
    {
      "@type": "TouristAttraction",
      "@id": "https://jeepbaluran.reaksy.com/#pantai-bama",
      "name": "Pantai Bama & Hutan Mangrove",
      "description": "Pantai pasir putih berair tenang dan jembatan kayu konservasi hutan mangrove purba di ujung timur Baluran."
    },
    {
      "@type": "TouristTrip",
      "@id": "https://jeepbaluran.reaksy.com/#trip-shuttle",
      "name": "Paket Shuttle Safari Baluran (PP 3-4 Jam)",
      "description": "Layanan sewa Jeep 4x4 kapasitas ideal 5 orang pulang pergi dari Pos Batangan ke Evergreen Forest, Savana Bekol, dan Pantai Bama.",
      "touristType": "Keluarga, Sahabat, Wisatawan Nusantara & Mancanegara",
      "offers": {
        "@type": "Offer",
        "price": "597000",
        "priceCurrency": "IDR",
        "availability": "https://schema.org/InStock",
        "validFrom": "2024-01-01"
      }
    },
    {
      "@type": "FAQPage",
      "@id": "https://jeepbaluran.reaksy.com/#faq",
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
    <html lang="id" className={`${jakartaSans.variable} ${playfairDisplay.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJsonStringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased text-[#1E2521] min-h-screen flex flex-col selection:bg-[#2B3E34] selection:text-white">
        <GoogleAnalytics />
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
