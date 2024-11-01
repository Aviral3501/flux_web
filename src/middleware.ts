import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

const isProtectedRoutes = createRouteMatcher([
  '/dashboard(.*)',
  '/api/payment',
  '/payment(.*)',
])

export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoutes(req)) {
    await auth.protect()
  }
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    '/((?!_next/|.*\\.[^.]*$).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}