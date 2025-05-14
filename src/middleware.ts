// src/middleware.ts
import type { NextRequest } from 'next/server';
import { createI18nMiddleware } from 'next-international/middleware';
import { SUPPORTED_LOCALES, DEFAULT_LOCALE } from '@/app/i18n/settings';

const I18nMiddleware = createI18nMiddleware({
  locales: SUPPORTED_LOCALES,
  defaultLocale: DEFAULT_LOCALE,
  urlMappingStrategy: 'rewrite', // or 'redirect'
});

export function middleware(request: NextRequest) {
  return I18nMiddleware(request);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|images|img).*)'],
};
