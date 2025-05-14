// src/components/legalese-lite/summary-display.tsx
"use client";

import type { FC } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ClipboardList } from "lucide-react";
import { useI18n } from '@/app/i18n/client';

interface SummaryDisplayProps {
  summary: string;
}

export const SummaryDisplay: FC<SummaryDisplayProps> = ({ summary }) => {
  const t = useI18n();
  const points = summary
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.length > 0);

  return (
    <Card className="mt-8 w-full max-w-2xl shadow-lg animate-in fade-in-50 duration-500">
      <CardHeader>
        <CardTitle className="flex items-center text-xl">
          <ClipboardList className="mr-3 h-7 w-7 text-accent" />
          {t('summaryDisplay.title')}
        </CardTitle>
      </CardHeader>
      <CardContent>
        {points.length > 0 ? (
          <ul className="list-disc space-y-3 pl-6 text-foreground/90">
            {points.map((point, index) => (
              <li key={index} className="leading-relaxed text-base">
                {point.replace(/^[-*]\s*/, '')}
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-muted-foreground">{t('summaryDisplay.noPoints')}</p>
        )}
      </CardContent>
    </Card>
  );
};
