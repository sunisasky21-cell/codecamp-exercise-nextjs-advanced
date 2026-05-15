import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // TODO: Log the request — method, pathname, timestamp
  // Example: console.log(`[${new Date().toISOString()}] ${request.method} ${request.nextUrl.pathname}`)

  // TODO: Create a response and add a custom X-Request-Id header
  // Hint: Use crypto.randomUUID() for the request ID

  // TODO (optional): Check for Authorization header on /api/ routes
  // If missing, return NextResponse.json({ error: "Unauthorized" }, { status: 401 })

  return NextResponse.next();
}

export const config = {
  matcher: ["/api/:path*", "/dashboard/:path*"],
};
