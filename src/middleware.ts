import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  
  const token = request.cookies.get('auth_token')?.value;

  
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    if (!token) {
      
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  
  
  const response = NextResponse.next();
  //  Security Headers
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  
  return response;
}

// กำหนด Matcher เพื่อไม่ให้กระทบกับ Static Files ของ Next.js
export const config = {
  matcher: [
    /*
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};