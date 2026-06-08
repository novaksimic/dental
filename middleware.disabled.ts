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
  res.headers.set('x-locale', locale);
  return res;
}
