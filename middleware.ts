import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const res = NextResponse.next();

  const locale = req.cookies.get('NEXT_LOCALE')?.value ?? 'sr';

  res.cookies.set('NEXT_LOCALE', locale);

  return res;
}