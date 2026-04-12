import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  let hostname = request.headers.get('host') || '';

  // Remove www if you prefer non-www version
  //const shouldUseWww = true;   // Change to false if you want non-www

  const protocol = request.headers.get('x-forwarded-proto') || 'http';
  const isHttp = protocol === 'http';

  // Build the desired final URL
  let newUrl = url.clone();

  // Force HTTPS
  if (isHttp || newUrl.protocol === 'http:') {
    newUrl.protocol = 'https:';
  }

  // Force www (change to false if you prefer without www)
  const shouldUseWww = true;

  if (shouldUseWww && !hostname.startsWith('www.')) {
    hostname = 'www.' + hostname.replace(/^www\./, '');
    newUrl.hostname = hostname;
  } else if (!shouldUseWww && hostname.startsWith('www.')) {
    hostname = hostname.replace(/^www\./, '');
    newUrl.hostname = hostname;
  }

  // If anything changed, redirect (301 = permanent)
  if (newUrl.toString() !== request.url) {
    return NextResponse.redirect(newUrl, { status: 301 });
  }

  return NextResponse.next();
}

// Apply middleware to all routes
export const config = {
  matcher: '/:path*',
};
