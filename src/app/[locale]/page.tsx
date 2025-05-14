// src/app/[locale]/page.tsx
"use client";

import type { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import { UrlInputForm } from '@/components/legalese-lite/url-input-form';
import { SummaryDisplay } from '@/components/legalese-lite/summary-display';
import { HistorySection } from '@/components/legalese-lite/history-section';
import { LanguageSwitcher } from '@/components/language-switcher'; // Import LanguageSwitcher
import { simplifyTermsAndConditions } from '@/ai/flows/simplify-terms-and-conditions';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ScrollText, Terminal, Share2 } from "lucide-react";
import type { HistoryEntry } from '@/types';
import { useToast } from "@/hooks/use-toast";
import { useI18n, useCurrentLocale } from '@/app/i18n/client';


const LOCAL_STORAGE_KEY = 'TERMS_SIMPLIFIER_HISTORY';

export default function HomePage() {
  const t = useI18n();
  const currentLocale = useCurrentLocale();
  const { toast } = useToast();

  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentUrl, setCurrentUrl] = useState<string>("");
  

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (e) {
      console.error("Failed to load history from localStorage:", e);
      toast({
        variant: "destructive",
        title: t('toast.storageError.title'),
        description: t('toast.storageError.description'),
      });
    }
  }, [t, toast]); // Added toast to dependencies

  const saveHistory = (newHistory: HistoryEntry[]) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newHistory));
    } catch (e) {
      console.error("Failed to save history to localStorage:", e);
      toast({
        variant: "destructive",
        title: t('toast.storageError.title'),
        description: t('toast.storageError.description'),
      });
    }
  };

  const handleSimplify = async (url: string, language: string) => {
    setIsLoading(true);
    setSummary(null);
    setError(null);
    setCurrentUrl(url); 

    try {
      const result = await simplifyTermsAndConditions({ url, language });
      if (result.summary) {
        setSummary(result.summary);
        const newEntry: HistoryEntry = {
          id: Date.now().toString() + Math.random().toString(36).substring(2, 15),
          url,
          summary: result.summary,
          timestamp: Date.now(),
        };
        const updatedHistory = [newEntry, ...history];
        setHistory(updatedHistory);
        saveHistory(updatedHistory);
      } else {
        setError(t('home.error.aiNoSummary'));
      }
    } catch (e: any) {
      console.error("Simplification error:", e);
      setError(e.message || t('home.error.unexpected'));
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = async (shareSummary: string, shareUrl: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: t('home.title') + ` for ${shareUrl}`,
          text: `Simplified T&C for ${shareUrl}:\n\n${shareSummary}`,
          url: shareUrl,
        });
        toast({ title: t('toast.sharedSuccessfully.title') });
      } catch (err) {
        console.error('Error sharing:', err);
        setError(t('toast.shareError.description')); 
        toast({ variant: "destructive", title: t('toast.shareError.title'), description: t('toast.shareError.description')});
      }
    } else {
      try {
        await navigator.clipboard.writeText(`Simplified T&C for ${shareUrl}:\n\n${shareSummary}\n\nOriginal URL: ${shareUrl}`);
        toast({ title: t('toast.copiedToClipboard.title'), description: t('toast.copiedToClipboard.description') });
      } catch (err) {
        console.error('Failed to copy to clipboard: ', err);
        setError(t('toast.copyError.description'));
        toast({ variant: "destructive", title: t('toast.copyError.title'), description: t('toast.copyError.description')});
      }
    }
  };

  const handleDeleteHistoryItem = (id: string) => {
    const updatedHistory = history.filter(item => item.id !== id);
    setHistory(updatedHistory);
    saveHistory(updatedHistory);
    toast({ title: t('toast.historyItemDeleted.title')});
  };

  const handleClearAllHistory = () => {
    setHistory([]);
    saveHistory([]);
    toast({ title: t('toast.allHistoryCleared.title')});
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground p-4 sm:p-8 pt-12 sm:pt-20">
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
           <ScrollText className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">{t('home.title')}</h1>
        <p className="mt-3 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
          {t('home.subtitle')}
        </p>
      </div>

      <UrlInputForm onSimplify={handleSimplify} isLoading={isLoading} />

      {error && !isLoading && (
        <Alert variant="destructive" className="mt-8 max-w-2xl w-full shadow-md">
          <Terminal className="h-5 w-5" />
          <AlertTitle className="font-semibold">{t('home.error.title')}</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && !isLoading && !error && (
        <div className="w-full max-w-2xl">
          <SummaryDisplay summary={summary} />
          <div className="mt-4 flex justify-end">
            <Button onClick={() => handleShare(summary, currentUrl)} variant="outline">
              <Share2 className="mr-2 h-4 w-4" /> {t('home.shareCurrentSummary')}
            </Button>
          </div>
        </div>
      )}
      
      <HistorySection
        history={history}
        onShareItem={(item) => handleShare(item.summary, item.url)}
        onDeleteItem={handleDeleteHistoryItem}
        onClearAll={handleClearAllHistory}
        currentLocale={currentLocale}
      />
      
      <footer className="mt-16 mb-8 w-full max-w-2xl flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground">
        <p className="mb-4 sm:mb-0">{t('home.footerText', { year: new Date().getFullYear() })}</p>
        <LanguageSwitcher />
      </footer>
    </main>
  );
}
