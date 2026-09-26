/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enterprise Security: Suppress Next.js server fingerprinting header
  poweredByHeader: false,
  reactStrictMode: true,
  compress: true,

  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },

  // Enterprise Security & Cloudflare Edge Caching Headers
  async headers() {
    return [
      // 1. Static Asset Caching (Edge / Cloudflare Cache)
      {
        source: '/(images|fonts|icons)/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // 2. Security Headers for all routes
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), payment=(), usb=(), interest-cohort=()',
          },
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin-allow-popups',
          },
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://maps.googleapis.com https://*.google.com https://*.gstatic.com https://www.googletagmanager.com https://*.google-analytics.com",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com data:",
              "img-src 'self' data: blob: https://lh3.googleusercontent.com https://images.unsplash.com https://*.googleapis.com https://*.gstatic.com https://*.google.com https://*.ggpht.com https://*.google-analytics.com https://*.googletagmanager.com",
              "media-src 'self' data: blob:",
              "connect-src 'self' https://maps.googleapis.com https://*.google.com https://wa.me https://api.whatsapp.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
              "frame-src 'self' https://www.google.com https://maps.google.com https://www.google.com/maps/",
              "frame-ancestors 'none'",
              "object-src 'none'",
              "base-uri 'self'",
              "form-action 'self' https://wa.me https://api.whatsapp.com",
              "upgrade-insecure-requests",
            ].join('; '),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
