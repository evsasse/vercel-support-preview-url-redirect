import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { hostname, pathname, search } = request.nextUrl
  const vercelEnv = process.env.VERCEL_ENV

  // Only redirect in preview environment
  if (vercelEnv !== "preview") {
    return NextResponse.next()
  }

  // Check if current hostname is a vercel.app domain
  if (hostname.includes(".vercel.app")) {
    // Replace with your custom domain
    const customDomain = process.env.CUSTOM_DOMAIN || "yourdomain.com"

    // Construct the redirect URL
    const redirectUrl = new URL(`https://${customDomain}${pathname}${search}`)

    console.log(`[v0] Redirecting from ${hostname} to ${customDomain}`)

    return NextResponse.redirect(redirectUrl, 301)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
}
