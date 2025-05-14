// src/components/language-switcher.tsx
"use client";

import type { Locale } from '@/app/i18n/settings';
import { useChangeLocale, useCurrentLocale, useI18n } from '@/app/i18n/client';
import { SUPPORTED_LOCALES } from '@/app/i18n/settings';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe } from 'lucide-react';

export function LanguageSwitcher() {
  const changeLocale = useChangeLocale();
  const currentLocale = useCurrentLocale();
  const t = useI18n();

  return (
    <div className="flex items-center gap-2 mt-4 sm:mt-0">
      <div className="p-0.5 border-2 border-[hsl(var(--muted-foreground))] rounded-full flex items-center justify-center">
        <Globe className="h-5 w-5 text-muted-foreground" />
      </div>
      <Select
        value={currentLocale}
        onValueChange={(newLocale) => {
          changeLocale(newLocale as Locale);
        }}
      >
        <SelectTrigger className="w-auto sm:w-[180px] text-sm py-2 h-auto">
          <SelectValue placeholder={t('languageSwitcher.selectPlaceholder')} />
        </SelectTrigger>
        <SelectContent>
          {SUPPORTED_LOCALES.map((locale) => (
            <SelectItem key={locale} value={locale}>
              {/* Dynamically construct the translation key for each language name */}
              {t(`languages.${locale}` as `languages.${Locale}`)}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
