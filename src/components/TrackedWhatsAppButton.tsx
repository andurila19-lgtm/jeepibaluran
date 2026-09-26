"use client";

import { ReactNode } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

interface TrackedWhatsAppButtonProps {
  href: string;
  packageName: string;
  pageLocation?: string;
  ctaPosition: string;
  className?: string;
  id?: string;
  children: ReactNode;
  ariaLabel?: string;
}

export default function TrackedWhatsAppButton({
  href,
  packageName,
  pageLocation,
  ctaPosition,
  className = "",
  id,
  children,
  ariaLabel,
}: TrackedWhatsAppButtonProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      id={id}
      aria-label={ariaLabel}
      className={className}
      onClick={() => {
        trackWhatsAppClick({
          packageName,
          pageLocation:
            pageLocation || (typeof window !== "undefined" ? window.location.pathname : "/"),
          ctaPosition,
        });
      }}
    >
      {children}
    </a>
  );
}
