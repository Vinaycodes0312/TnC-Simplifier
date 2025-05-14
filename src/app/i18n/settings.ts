// src/app/i18n/settings.ts
export const SUPPORTED_LOCALES = [
  'en', 'es', 'fr',
  'hi', // Hindi
  'bn', // Bengali
  'ta', // Tamil
  'te', // Telugu
  'mr', // Marathi
  'gu', // Gujarati
  'kn', // Kannada
  'ml', // Malayalam
  'pa', // Punjabi
  'or', // Odia
] as const;
export type Locale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'en';
