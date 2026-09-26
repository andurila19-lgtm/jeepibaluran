import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jeep Baluran - Layanan Safari & Shuttle Resmi",
    short_name: "Jeep Baluran",
    description:
      "Sewa Jeep 4x4 Resmi Taman Nasional Baluran. Paket Shuttle Rp 600.000 PP Savana Bekol & Pantai Bama.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F0E6",
    theme_color: "#1A2E22",
    icons: [
      {
        src: "/images/logo-baluran-emblem.webp",
        sizes: "192x192",
        type: "image/webp",
      },
      {
        src: "/images/logo-baluran-emblem.webp",
        sizes: "512x512",
        type: "image/webp",
      },
    ],
  };
}
