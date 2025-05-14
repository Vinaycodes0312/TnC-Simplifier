// src/app/[locale]/layout.tsx
import type { Metadata } from 'next';
import { I18nProviderClient } from '@/app/i18n/client';
import { getStaticLocaleParams, getI18n } from '@/app/i18n/server';
import type { Locale } from '@/app/i18n/settings';
// Ensure Geist fonts are imported if used, or manage fonts globally in src/app/layout.tsx
// import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css'; // Ensure path is correct if globals.css is in src/app
// import { Toaster } from "@/components/ui/toaster"; // Toaster is in the root layout

// const geistSans = Geist({
//   variable: '--font-geist-sans',
//   subsets: ['latin'],
// });

// const geistMono = Geist_Mono({
//   variable: '--font-geist-mono',
//   subsets: ['latin'],
// });

export async function generateMetadata({ params: { locale } }: { params: { locale: Locale } }): Promise<Metadata> {
  const t = await getI18n(locale);
  return {
    title: t('app.title'),
    description: t('app.description'),
  };
}

export function generateStaticParams() {
  return getStaticLocaleParams();
}

export default function LocaleLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <I18nProviderClient locale={locale}>
      {/* HTML and Body tags are in the root src/app/layout.tsx */}
      {/* <html lang={locale} className={`${geistSans.variable} ${geistMono.variable} antialiased`}> */}
      {/* <body> */}
        {children}
        {/* <Toaster /> */}
      {/* </body> */}
      {/* </html> */}
    </I18nProviderClient>
  );
}
