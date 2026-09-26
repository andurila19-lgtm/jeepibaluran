import { NextResponse } from "next/server";

/**
 * RFC 9116 - Standard Vulnerability Disclosure Policy
 * International enterprise standard for responsible security reporting.
 */
export async function GET() {
  const securityPolicy = `# Security Policy for Jeep Baluran
# Conforming to RFC 9116 (A File Format to Aid in Security Vulnerability Disclosure)

Contact: mailto:security@jeepbaluran.reaksy.com
Contact: https://wa.me/6285204572677
Expires: 2027-12-31T23:59:59.000Z
Preferred-Languages: id, en
Canonical: https://jeepbaluran.reaksy.com/.well-known/security.txt
Policy: https://jeepbaluran.reaksy.com/tentang
Hiring: https://jeepbaluran.reaksy.com/tentang
`;

  return new NextResponse(securityPolicy, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
