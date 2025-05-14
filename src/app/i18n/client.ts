// src/app/i18n/client.ts
'use client';

import { createI18nClient } from 'next-international/client';
import type { Locale } from './settings';

export const { 
  useI18n, 
  useScopedI18n, 
  I18nProviderClient,
  useChangeLocale,
  useCurrentLocale
} = createI18nClient<Locale>({
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
