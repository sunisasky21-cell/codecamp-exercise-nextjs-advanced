import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // TODO: Log the request — method, pathname, timestamp
  // Example: console.log(`[${new Date().toISOString()}] ${request.method} ${request.nextUrl.pathname}`)
  const timestamp = new Date().toISOString();
  const method = request.method;
  const pathname = request.nextUrl.pathname;
  console.log(`[${timestamp}] ${method} ${pathname}`);

  // TODO (optional): Check for Authorization header on /api/ routes
  // If missing, return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  if (pathname.startsWith("/api")) {
    const authHeader = request.headers.get("authorization");
    
    if (!authHeader) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }
  }

  // TODO: Create a response and add a custom X-Request-Id header
  // Hint: Use crypto.randomUUID() for the request ID
  const requestId = crypto.randomUUID();
  
  // Clone request headers or create a response to inject the custom header
  // Note: In Next.js, it is recommended to set headers on both the incoming request 
  // (so API routes can read it) and the outgoing response (to return it to the client).
  const response = NextResponse.next();
  response.headers.set("X-Request-Id", requestId);

  return response;
}

export const config = {
  matcher: ["/api/:path*", "/dashboard/:path*"],
};