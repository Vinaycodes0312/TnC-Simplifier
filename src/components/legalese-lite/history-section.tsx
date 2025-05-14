// src/components/legalese-lite/history-section.tsx
"use client";

import type { FC } from 'react';
import type { HistoryEntry } from '@/types';
import type { Locale } from '@/app/i18n/settings';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { History as HistoryIcon, Share2, Trash2 } from "lucide-react";
import { useI18n } from '@/app/i18n/client';

interface HistorySectionProps {
  history: HistoryEntry[];
  onShareItem: (item: HistoryEntry) => void;
  onDeleteItem: (id: string) => void;
  onClearAll: () => void;
  currentLocale: Locale; // Pass current locale for date formatting
}

export const HistorySection: FC<HistorySectionProps> = ({ history, onShareItem, onDeleteItem, onClearAll, currentLocale }) => {
  const t = useI18n();

  if (history.length === 0 && !t) { // Ensure t is loaded
    return null; 
  }


  return (
    <Card className="mt-10 w-full max-w-2xl shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center text-xl">
            <HistoryIcon className="mr-3 h-7 w-7 text-accent" />
            {t('historySection.title')}
          </CardTitle>
          {history.length > 0 && (
             <Button variant="outline" size="sm" onClick={onClearAll}>
              <Trash2 className="mr-2 h-4 w-4" /> {t('historySection.clearAll')}
            </Button>
          )}
        </div>
        <CardDescription>
          {t('historySection.description')}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {history.length === 0 ? (
          <p className="text-muted-foreground">{t('historySection.empty')}</p>
        ) : (
          <Accordion type="single" collapsible className="w-full">
            {history.map((item) => (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger>
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium truncate max-w-[calc(100%-4rem)]">{item.url}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(item.timestamp).toLocaleString(currentLocale, {
                        year: 'numeric', month: 'short', day: 'numeric',
                        hour: '2-digit', minute: '2-digit'
                      })}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="prose prose-sm max-w-none dark:prose-invert mb-4">
                    <ul className="list-disc space-y-2 pl-5">
                      {item.summary.split('\n').map((point, index) => (
                        point.trim() && <li key={index}>{point.replace(/^[-*]\s*/, '')}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex space-x-2 justify-end">
                    <Button variant="ghost" size="sm" onClick={() => onShareItem(item)}>
                      <Share2 className="mr-2 h-4 w-4" /> {t('historySection.share')}
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => onDeleteItem(item.id)} className="text-destructive hover:text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" /> {t('historySection.delete')}
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </CardContent>
    </Card>
  );
};
