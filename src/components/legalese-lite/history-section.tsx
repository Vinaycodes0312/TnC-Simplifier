// src/components/legalese-lite/history-section.tsx
"use client";

import type { FC } from 'react';
import type { HistoryEntry } from '@/types';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { History as HistoryIcon, Share2, Trash2 } from "lucide-react";

interface HistorySectionProps {
  history: HistoryEntry[];
  onShareItem: (item: HistoryEntry) => void;
  onDeleteItem: (id: string) => void;
  onClearAll: () => void;
}

export const HistorySection: FC<HistorySectionProps> = ({ history, onShareItem, onDeleteItem, onClearAll }) => {
  if (history.length === 0) {
    return null; // Don't render anything if history is empty, or a small message
  }

  return (
    <Card className="mt-10 w-full max-w-2xl shadow-lg">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="flex items-center text-xl">
            <HistoryIcon className="mr-3 h-7 w-7 text-accent" />
            Simplification History
          </CardTitle>
          {history.length > 0 && (
             <Button variant="outline" size="sm" onClick={onClearAll}>
              <Trash2 className="mr-2 h-4 w-4" /> Clear All
            </Button>
          )}
        </div>
        <CardDescription>
          Previously simplified terms and conditions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {history.length === 0 ? (
          <p className="text-muted-foreground">No history yet. Simplify some terms to see them here.</p>
        ) : (
          <Accordion type="single" collapsible className="w-full">
            {history.map((item) => (
              <AccordionItem value={item.id} key={item.id}>
                <AccordionTrigger>
                  <div className="flex flex-col items-start text-left">
                    <span className="font-medium truncate max-w-[calc(100%-4rem)]">{item.url}</span>
                    <span className="text-xs text-muted-foreground">
                      {new Date(item.timestamp).toLocaleString()}
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
                      <Share2 className="mr-2 h-4 w-4" /> Share
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => onDeleteItem(item.id)} className="text-destructive hover:text-destructive">
                      <Trash2 className="mr-2 h-4 w-4" /> Delete
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
