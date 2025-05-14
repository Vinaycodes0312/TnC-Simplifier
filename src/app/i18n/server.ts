// src/app/i18n/server.ts
import { createI18nServer } from 'next-international/server';
import type { Locale } from './settings';

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } = createI18nServer<Locale>({
  en: () => import('@/locales/en'),
  // Add other locales here, e.g.:
  // es: () => import('@/locales/es'),
});

export function getStaticLocaleParams() {
  return getStaticParams();
}
