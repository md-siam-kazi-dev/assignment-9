import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';
 
// This function can be marked `async` if using `await` inside
export async function proxy(request) {
  const session = await auth.api.getSession({
  headers: await headers(),
});
 console.log(session)

  if(!session || !session?.user){
    return NextResponse.redirect(new URL('/signup', request.url))
  }
  return NextResponse.next();
  
}
 
//  const isLoggedIn = !!session?.user;
//   const { pathname } = request.nextUrl;

//   if (isLoggedIn && (pathname === "/login" || pathname === "/signup")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// Alternatively, you can use a default export:
// export default function proxy(request) { ... }
 
export const config = {
  matcher: [
    '/dashboard',
    '/:name/:id',
    '/dashboard/listing',
    '/dashboard/addpet',
    
  ]
}