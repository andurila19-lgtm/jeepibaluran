import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://jeepijen.com"),
  title: "Jeep Ijen Banyuwangi | Booking Jeep Wisata Ijen",
  description:
    "Jeep Ijen Banyuwangi untuk perjalanan wisata kawasan Ijen. Lihat paket dan hubungi kami langsung melalui WhatsApp.",
  keywords: [
    "Jeep Ijen",
    "Sewa Jeep Ijen",
    "Jeep Wisata Banyuwangi",
    "Kawah Ijen Jeep",
    "Tour Ijen Banyuwangi",
    "Private Trip Ijen",
  ],
  authors: [{ name: "Jeep Ijen Banyuwangi" }],
  openGraph: {
    title: "Jeep Ijen Banyuwangi | Booking Jeep Wisata Ijen",
    description:
      "Jeep Ijen Banyuwangi untuk perjalanan wisata kawasan Ijen. Lihat paket dan hubungi kami langsung melalui WhatsApp.",
    url: "https://jeepijen.com",
    siteName: "Jeep Ijen",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/jeep-hero.png",
        width: 1200,
        height: 630,
        alt: "Jeep Ijen Banyuwangi",
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
  "@type": "TouristInformationCenter",
  "name": "Jeep Ijen",
  "image": "https://jeepijen.com/images/jeep-hero.png",
  "description": "Jeep Ijen Banyuwangi melayani perjalanan wisata kawasan Ijen dan sekitarnya.",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Dusun Watu Ulo, Rejosari",
    "addressLocality": "Kecamatan Glagah",
    "addressRegion": "Kabupaten Banyuwangi, Jawa Timur",
    "addressCountry": "ID"
  },
  "telephone": "+6285204572677",
  "url": "https://jeepijen.com",
  "priceRange": "$$",
  "openingHours": "Mo-Su 00:00-23:59",
  "areaServed": "Kawasan Kawah Ijen dan Banyuwangi"
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
      <body className="font-sans antialiased text-[#1A1E1C] bg-[#FAFAF7] min-h-screen flex flex-col">
        {children}
      </body>
    </html>
  );
}
