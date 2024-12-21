import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// List of valid routes
const validRoutes = [
  '/',
  '/blog',
  '/studio',
  '/ai-ml',
  '/fin-tech',
  '/consumer-tech',
  '/open-source',
  '/autofocus'
]

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Check if the pathname starts with any valid route
  const isValidRoute = validRoutes.some(route => 
    pathname === route || 
    pathname.startsWith(`${route}/`) ||
    pathname.startsWith('/blog/') ||
    pathname.startsWith('/studio/') ||
    pathname.match(/^\/\[category\]\/.*/)
  )

  // If it's not a valid route and not an asset request, redirect to home
  if (!isValidRoute && 
      !pathname.startsWith('/_next/') && 
      !pathname.startsWith('/api/') &&
      !pathname.includes('.')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

// Configure which paths the middleware will run on
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    '/((?!_next/static|_next/image|favicon.ico|public/).*)',
  ],
}
