// src/app/i18n/server.ts
import { createI18nServer } from 'next-international/server';
import type { Locale } from './settings';

export const { getI18n, getScopedI18n, getStaticParams, getCurrentLocale } = createI18nServer<Locale>({
  en: () => import('@/locales/en'),
  es: () => import('@/locales/es'),
  fr: () => import('@/locales/fr'),
  hi: () => import('@/locales/hi'),
  bn: () => import('@/locales/bn'),
  ta: () => import('@/locales/ta'),
  te: () => import('@/locales/te'),
  mr: () => import('@/locales/mr'),
  gu: () => import('@/locales/gu'),
  kn: () => import('@/locales/kn'),
  ml: () => import('@/locales/ml'),
  pa: () => import('@/locales/pa'),
  or: () => import('@/locales/or'),
});

export function getStaticLocaleParams() {
  return getStaticParams();
}
