import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();
  const host = request.headers.get('host') || '';
  const protocol = request.headers.get('x-forwarded-proto') || url.protocol.replace(':', '');

  let shouldRedirect = false;

  // 1. Force HTTPS
  if (protocol === 'http') {
    url.protocol = 'https:';
    shouldRedirect = true;
  }

  // 2. Force www (you said www is fine)
  if (!host.startsWith('www.')) {
    url.hostname = 'www.' + host.replace(/^www\./, '');
    shouldRedirect = true;
  }

  // If any change was made, do a permanent 301 redirect (Google loves this)
  if (shouldRedirect) {
    return NextResponse.redirect(url, {
      status: 301,           // Permanent redirect - best for SEO
      headers: {
        'Cache-Control': 'public, max-age=31536000', // Cache the redirect
      },
    });
  }

  return NextResponse.next();
}

// Run middleware on all routes
export const config = {
  matcher: '/:path*',
};
