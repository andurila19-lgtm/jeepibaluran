/**
 * Enterprise-Grade Security Suite for Jeep Baluran
 * Standards: OWASP Top 10, RFC 9116, ISO/IEC 27001 Application Defense
 * 
 * Provides defense-in-depth against:
 * 1. SQL Injection (SQLi)
 * 2. Cross-Site Scripting (XSS / Script Injection)
 * 3. Command Injection (RCE)
 * 4. Path Traversal & Local/Remote File Inclusion (LFI/RFI)
 * 5. Prototype Pollution
 * 6. Open Redirect & Tabnabbing
 * 7. JSON-LD Schema Breakout
 */

// Comprehensive detection regex for known injection attack vectors
export const INJECTION_PATTERNS = {
  // SQL Injection patterns: UNION SELECT, comment sequences, sleep/benchmark delays, boolean-based bypasses
  sqlInjection: /(?:\b(union\s+(?:all\s+)?select|insert\s+into|select\s+.+\s+from|delete\s+from|drop\s+table|drop\s+database|truncate\s+table|alter\s+table|exec(?:ute)?\s*\(|benchmark\s*\(|sleep\s*\(\d+\)|waitfor\s+delay)\b)|(?:--|#|\/\*|\*\/)|(?:\b(and|or)\b\s+[\d\w'"]+\s*=\s*[\d\w'"]+)|(?:\bextractvalue\b|\bupdatexml\b)/i,

  // Cross-Site Scripting (XSS) patterns: script tags, inline event handlers, javascript/vbscript protocols, base64 data URLs
  xss: /(?:<script[\s\S]*?>[\s\S]*?<\/script>)|(?:<[\w\s="']*(?:onload|onerror|onclick|onmouseover|onfocus|onblur|onsubmit|onchange)\s*=)|(?:javascript:\s*[\s\S]*)|(?:vbscript:\s*[\s\S]*)|(?:data:(?:text\/html|application\/javascript);base64,)|(?:<iframe[\s\S]*?>)|(?:<object[\s\S]*?>)|(?:<embed[\s\S]*?>)|(?:<svg[\s\S]*?onload\s*=)/i,

  // Path Traversal / File Inclusion patterns
  pathTraversal: /(?:\.\.[\/\\]|\.\.%2f|\.\.%5c|%2e%2e[\/\\]|\/etc\/(?:passwd|shadow|hosts)|(?:win(?:dows)?|winnt)[\/\\]system32)/i,

  // Remote Code Execution / Command Injection patterns
  commandInjection: /(?:;\s*(?:cat|ls|rm|chmod|chown|wget|curl|nc|bash|sh|powershell|cmd\.exe|whoami|id|uname|dir)\b)|(?:\|\s*(?:cat|ls|rm|wget|curl|nc|bash|sh|powershell|cmd|whoami)\b)|(?:\b(curl|wget)\s+https?:\/\/)|(?:`[\s\S]*`)/i,

  // Prototype Pollution patterns
  prototypePollution: /(?:__proto__|constructor\s*\.\s*prototype|Object\s*\.\s*prototype)/i,

  // Header Injection (CRLF) patterns
  crlf: /(?:%0d|%0a|\r|\n)/i,
};

export interface InspectionResult {
  isSafe: boolean;
  detectedThreat?: string;
  flaggedMatch?: string;
}

/**
 * Inspect any input string against international enterprise threat signatures.
 */
export function inspectInput(value: string | null | undefined): InspectionResult {
  if (!value || typeof value !== "string") {
    return { isSafe: true };
  }

  // Check URL decoding to catch double-encoded or obfuscated vectors
  let decoded = value;
  try {
    decoded = decodeURIComponent(value);
  } catch {
    // Malformed URI could indicate exploit probe
    return {
      isSafe: false,
      detectedThreat: "Malformed URI Component",
      flaggedMatch: value.slice(0, 50),
    };
  }

  for (const [threatType, pattern] of Object.entries(INJECTION_PATTERNS)) {
    const rawMatch = value.match(pattern);
    if (rawMatch) {
      return {
        isSafe: false,
        detectedThreat: threatType,
        flaggedMatch: rawMatch[0],
      };
    }

    const decodedMatch = decoded.match(pattern);
    if (decodedMatch) {
      return {
        isSafe: false,
        detectedThreat: `${threatType} (Decoded)`,
        flaggedMatch: decodedMatch[0],
      };
    }
  }

  return { isSafe: true };
}

/**
 * Enterprise HTML Entity Encoder:
 * Prevents HTML/XSS injection when rendering dynamic content.
 */
export function escapeHtml(str: string): string {
  if (!str) return "";
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;")
    .replace(/\//g, "&#x2F;")
    .replace(/`/g, "&#x60;");
}

/**
 * Sanitize untrusted input: Strips control characters, null bytes, HTML tags, and enforces safe length.
 */
export function sanitizeInput(input: string, maxLength = 1000): string {
  if (!input || typeof input !== "string") return "";

  // 1. Strip null bytes & control chars (except normal newline/tab)
  let clean = input.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F]/g, "");

  // 2. Strip HTML tags completely
  clean = clean.replace(/<[^>]*>?/gm, "");

  // 3. Strip dangerous protocol prefixes
  clean = clean.replace(/^(?:javascript|data|vbscript):/i, "");

  // 4. Enforce max length constraint
  clean = clean.slice(0, maxLength);

  return clean.trim();
}

/**
 * Enterprise Safe JSON Serializer:
 * Escapes characters that could cause script tag break-out in JSON-LD `<script>` tags.
 * Defense against: `</script><script>alert(1)</script>`
 */
export function safeJsonStringify(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026")
    .replace(/\u2028/g, "\\u2028")
    .replace(/\u2029/g, "\\u2029");
}

/**
 * Safe URL Validator against Open Redirect & Reverse Tabnabbing attacks.
 * Verifies that outbound destination or redirects strictly belong to trusted domains.
 */
const TRUSTED_DOMAINS = [
  "jeepbaluran.reaksy.com",
  "wa.me",
  "api.whatsapp.com",
  "maps.google.com",
  "www.google.com",
  "google.com",
  "localhost",
];

export function isSafeUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== "string") return false;

  const trimmed = url.trim();

  // Allow relative URLs starting with / (excluding protocol-relative //)
  if (trimmed.startsWith("/") && !trimmed.startsWith("//") && !trimmed.startsWith("/\\")) {
    return true;
  }

  // Reject pseudo protocols
  if (/^(javascript|vbscript|data|file):/i.test(trimmed)) {
    return false;
  }

  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol !== "https:" && parsed.protocol !== "http:") {
      return false;
    }
    const hostname = parsed.hostname.toLowerCase();
    return TRUSTED_DOMAINS.some(
      (domain) => hostname === domain || hostname.endsWith(`.${domain}`)
    );
  } catch {
    return false;
  }
}

/**
 * Formats a verified, sanitized WhatsApp booking URL.
 */
export function buildSafeWhatsAppUrl(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^\d+]/g, "").replace(/^\+/, "");
  const cleanText = sanitizeInput(text, 500);
  return `https://wa.me/${encodeURIComponent(cleanPhone)}?text=${encodeURIComponent(cleanText)}`;
}

/**
 * Enterprise-grade Security Headers for HTTP responses.
 * Compliant with OWASP Secure Headers Project & HSTS Preload standards.
 */
export const ENTERPRISE_SECURITY_HEADERS: Record<string, string> = {
  // Content Security Policy (CSP)
  "Content-Security-Policy": [
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
  ].join("; "),

  // Anti-Clickjacking / Frame Injection
  "X-Frame-Options": "DENY",

  // Anti-MIME Sniffing Injection
  "X-Content-Type-Options": "nosniff",

  // HTTP Strict Transport Security (HSTS - 2 years + subdomains + preload)
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",

  // Referrer Policy: Protect internal path/parameters
  "Referrer-Policy": "strict-origin-when-cross-origin",

  // Permissions Policy: Block unauthorized device hardware access
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(self), payment=(), usb=(), interest-cohort=()",

  // Cross-Origin Isolation & Isolation Policies
  "Cross-Origin-Opener-Policy": "same-origin-allow-popups",
  "Cross-Origin-Resource-Policy": "same-origin",

  // DNS Prefetch control
  "X-DNS-Prefetch-Control": "on",

  // Adobe Flash / PDF cross-domain blocking
  "X-Permitted-Cross-Domain-Policies": "none",
};
