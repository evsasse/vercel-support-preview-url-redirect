import { type NextRequest, NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const { hostname, pathname, search } = request.nextUrl
  console.log("I am going through the middleware!", { hostname, pathname, search });

  if (Math.random() > 0.5) {
    // Pretend specific preview scenario was identified, and we want to a certain redirect...
    // return NextResponse.redirect("https://google.com/", 307)
    return NextResponse.redirect(new URL("https://google.com/", request.url))
  }

  return NextResponse.next();
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
    // The above doesnt match the root path for some reason, so we also need something like this:
    "/",
  ],
}
