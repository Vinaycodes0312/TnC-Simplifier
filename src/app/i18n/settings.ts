// src/app/i18n/settings.ts
export const SUPPORTED_LOCALES = ['en', 'es', 'fr'] as const; // Add more locales like 'es', 'fr'
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
