import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  let changed = false;

  // Force HTTPS
  if (url.protocol === 'http:') {
    url.protocol = 'https:';
    changed = true;
  }

  // Force www
  if (!url.hostname.startsWith('www.')) {
    url.hostname = `www.${url.hostname}`;
    changed = true;
  }

  // Remove trailing slash (except root)
  if (url.pathname !== '/' && url.pathname.endsWith('/')) {
    url.pathname = url.pathname.slice(0, -1);
    changed = true;
  }

  // If anything changed, do ONE redirect
  if (changed) {
    return NextResponse.redirect(url, 301);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
};
