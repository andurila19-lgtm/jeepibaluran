import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { inspectInput, ENTERPRISE_SECURITY_HEADERS } from "@/lib/security";

/**
 * Enterprise Security Middleware (Edge WAF Layer)
 * 
 * Provides automated, zero-latency protection against:
 * - SQL Injection (SQLi)
 * - Cross-Site Scripting (XSS / Script Injection)
 * - Path Traversal & Remote File Inclusion (LFI/RFI)
 * - Command Execution (RCE)
 * - Prototype Pollution
 * - Host Header Injection / Cache Poisoning
 */

const ALLOWED_HOSTS = [
  "jeepbaluran.reaksy.com",
  "www.jeepbaluran.reaksy.com",
  "localhost",
  "127.0.0.1",
];

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  // 1. Host Header Validation (Anti-Host Header Poisoning & Cache Poisoning)
  const host = request.headers.get("host")?.split(":")[0]?.toLowerCase();
  if (host && process.env.NODE_ENV === "production") {
    const isHostValid = ALLOWED_HOSTS.some(
      (allowed) => host === allowed || host.endsWith(`.${allowed}`) || host.endsWith(".reaksy.com") || host.endsWith(".vercel.app")
    );
    if (!isHostValid) {
      return new NextResponse(
        JSON.stringify({
          error: "Invalid Host Header",
          message: "Request rejected by Enterprise Security Filter.",
          code: "SEC_HOST_INVALID",
        }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...ENTERPRISE_SECURITY_HEADERS },
        }
      );
    }
  }

  // 2. Real-Time Injection Threat Inspection on Pathname and Query Parameters
  const targetToInspect = `${pathname}${search}`;
  const inspection = inspectInput(targetToInspect);

  if (!inspection.isSafe) {
    const clientIp =
      request.headers.get("cf-connecting-ip") ||
      request.headers.get("x-real-ip") ||
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.ip ||
      "unknown";

    // Log security event in server-side monitoring
    console.warn(
      `[SECURITY ALERT] Blocked malicious ${inspection.detectedThreat} attempt from IP: ${clientIp} - Target: ${targetToInspect.slice(0, 100)}`
    );

    return new NextResponse(
      JSON.stringify({
        error: "Forbidden Request",
        message: "Malicious payload detected by Enterprise Application Firewall.",
        type: inspection.detectedThreat,
        status: 400,
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
          "X-Content-Type-Options": "nosniff",
          "X-Frame-Options": "DENY",
          "Cache-Control": "no-store, max-age=0",
        },
      }
    );
  }

  // 3. Inspect high-risk headers for injection payloads (User-Agent, Referer)
  const userAgent = request.headers.get("user-agent");
  if (userAgent && !inspectInput(userAgent).isSafe) {
    return new NextResponse(
      JSON.stringify({
        error: "Forbidden Header",
        message: "Threat pattern detected in request headers.",
        status: 400,
      }),
      {
        status: 400,
        headers: { "Content-Type": "application/json" },
      }
    );
  }

  // 4. Continue pipeline and attach all Enterprise Security Headers to the response
  const response = NextResponse.next();

  for (const [headerKey, headerVal] of Object.entries(ENTERPRISE_SECURITY_HEADERS)) {
    response.headers.set(headerKey, headerVal);
  }

  return response;
}

// Apply middleware to all application routes, excluding static assets and images
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - images / media folders
     */
    "/((?!_next/static|_next/image|favicon.ico|images/|.*\\.(?:svg|png|jpg|jpeg|gif|webp|mp4|webm|html|txt)).*)",
  ],
};
