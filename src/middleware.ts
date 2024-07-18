import { NextResponse,NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublicPath = path === '/login' || path === '/signup';

  const token = request.cookies.get("token")?.value || '';

  // Logged in user tries to access login or signup to be redirected 
  // to root page or profile page whatever is required
  if(isPublicPath && token){
    return NextResponse.redirect(new URL('/',request.nextUrl))
  }

  // User not logged in tries to access protected page to be redirected
  // to login page
  if(!isPublicPath && !token){
    return NextResponse.redirect(new URL('/login',request.nextUrl))
  }
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup'
  ]
}