import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Old to new slug mappings
const redirects = {
  '/fintech': '/fin-tech',
  '/consumertech': '/consumer-tech',
  '/opensource': '/open-source',
  '/autofocus': '/auto-focus'
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Skip middleware for static files, api routes, and studio
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/') ||
    pathname.startsWith('/studio/') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Handle legacy redirects
  const redirect = redirects[pathname]
  if (redirect) {
    return NextResponse.redirect(new URL(redirect, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}
