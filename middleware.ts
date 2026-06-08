// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   let locale = req.cookies.get('NEXT_LOCALE')?.value;

//   if (!locale) {
//     const acceptLang = req.headers.get('accept-language');
//     if (acceptLang) {
//       const preferred = acceptLang.split(',')[0];
      
//       locale = preferred.split('-')[0];
//     }
//   }

//   if (!locale) {
//     locale = 'sr';
//   }

//   const res = NextResponse.next();
//   res.headers.set('x-locale', locale);
//   return res;
// }

// import { NextResponse } from 'next/server';
// import type { NextRequest } from 'next/server';

// export function middleware(req: NextRequest) {
//   try {
//     let locale = req.cookies.get('NEXT_LOCALE')?.value;

//     if (!locale) {
//       const acceptLang = req.headers.get('accept-language');

//       if (acceptLang) {
//         const first = acceptLang.split(',')[0];
//         const parsed = first?.split('-')?.[0];
//         if (parsed) locale = parsed;
//       }
//     }

//     if (!locale) {
//       locale = 'sr';
//     }

//     const res = NextResponse.next();

//     // ✅ safer cookie setting for Edge runtime
//     res.cookies.set({
//       name: 'NEXT_LOCALE',
//       value: locale,
//       path: '/',
//       maxAge: 60 * 60 * 24 * 365
//     });

//     res.headers.set('x-locale', locale);

//     return res;
//   } catch (err) {
//     console.error('Middleware error:', err);

//     // fallback so Vercel doesn't show 500
//     return NextResponse.next();
//   }
// }

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  console.log("Middleware started:", req.nextUrl.pathname);

  try {
    // force crash visibility
    throw new Error("TEST ERROR FROM MIDDLEWARE");
  } catch (e) {
    console.error("Middleware caught error:", e);
  }

  return NextResponse.next();
}