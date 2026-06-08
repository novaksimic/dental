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

export const dynamic = 'force-dynamic';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';



export function middleware(req: NextRequest) {
  let locale = req.cookies.get('NEXT_LOCALE')?.value;

  if (!locale) {
    const acceptLang = req.headers.get('accept-language');

    if (acceptLang) {
      const preferred = acceptLang.split(',')[0];
      locale = preferred.split('-')[0];
    }
  }

  if (!locale) {
    locale = 'sr';
  }

  const res = NextResponse.next();

  // ✅ THIS is what you're missing
  res.cookies.set('NEXT_LOCALE', locale, {
    path: '/',
    maxAge: 60 * 60 * 24 * 365 // 1 year
  });

  res.headers.set('x-locale', locale);

  return res;
}