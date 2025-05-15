// src/app/[locale]/page.tsx
"use client";

import type { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import { UrlInputForm } from '@/components/legalese-lite/url-input-form';
import { SummaryDisplay } from '@/components/legalese-lite/summary-display';
import { HistorySection } from '@/components/legalese-lite/history-section';
import { LanguageSwitcher } from '@/components/language-switcher';
import { simplifyTermsAndConditions } from '@/ai/flows/simplify-terms-and-conditions';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ScrollText, Terminal, Share2, Mail, Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
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
  const [isHelpDialogOpen, setIsHelpDialogOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  

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
  }, [t, toast]);

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
    if (!shareSummary || !shareUrl) {
      toast({
        variant: "destructive",
        title: t('toast.shareError.title'),
        description: "Summary or URL is missing.", 
      });
      return;
    }

    const shareText = t('home.shareTextPrefix', { url: shareUrl, appName: t('app.title') }) + `\n\n${shareSummary}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: t('app.title') + ` for ${shareUrl}`, 
          text: shareText,
          url: shareUrl,
        });
        toast({ title: t('toast.sharedSuccessfully.title') });
      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.log('Share operation was cancelled by the user.');
        } else {
          console.error('Error sharing:', err);
          toast({ variant: "destructive", title: t('toast.shareError.title'), description: t('toast.shareError.description')});
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${shareText}\n\nOriginal URL: ${shareUrl}`);
        toast({ title: t('toast.copiedToClipboard.title'), description: t('toast.copiedToClipboard.description') });
      } catch (err) {
        console.error('Failed to copy to clipboard: ', err);
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
      <div className="w-full max-w-2xl h-16 sm:h-18 bg-primary mb-8 relative overflow-hidden">
        {isLoading && (
          <div className="absolute top-0 left-0 h-full w-1/2 bg-primary-foreground/30 animate-shimmer-slide"></div>
        )}
      </div>

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
      
      <footer className="mt-16 mb-8 w-full max-w-2xl flex flex-col items-center text-sm text-muted-foreground">
        <p className="mb-4 text-center">{t('home.footerText', { year: new Date().getFullYear() })}</p>
        <div className="flex flex-wrap justify-center items-center gap-4">
          <LanguageSwitcher />

          <Dialog open={isHelpDialogOpen} onOpenChange={setIsHelpDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <Info className="mr-2 h-4 w-4" /> {t('home.helpAndSupport')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{t('helpDialog.title')}</DialogTitle>
              </DialogHeader>
              <div className="py-4 space-y-4 text-sm">
                <h3 className="font-semibold">{t('helpDialog.q1Title')}</h3>
                <ul className="list-disc list-outside pl-5 space-y-1 text-muted-foreground">
                  <li>{t('helpDialog.q1Answer1')}</li>
                  <li>{t('helpDialog.q1Answer2')}</li>
                  <li>{t('helpDialog.q1Answer3')}</li>
                  <li>{t('helpDialog.q1Answer4')}</li>
                </ul>
                <h3 className="font-semibold">{t('helpDialog.q2Title')}</h3>
                <p className="text-muted-foreground">{t('helpDialog.q2Answer')}</p>
                <h3 className="font-semibold">{t('helpDialog.q3Title')}</h3>
                <p className="text-muted-foreground">{t('helpDialog.q3Answer')}</p>
              </div>
              <DialogFooter>
                <DialogClose asChild>
                  <Button type="button" variant="outline">{t('dialog.close')}</Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>

          <Dialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen}>
            <DialogTrigger asChild>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <Mail className="mr-2 h-4 w-4" /> {t('home.developerContact')}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{t('contactDialog.title')}</DialogTitle>
              </DialogHeader>
              <div className="py-4 space-y-2 text-sm">
                <p className="text-muted-foreground">{t('contactDialog.intro')}</p>
                <p className="font-medium">{t('contactDialog.email')}</p>
                <p className="text-xs text-muted-foreground italic">{t('contactDialog.note')}</p>
              </div>
              <DialogFooter>
                 <DialogClose asChild>
                    <Button type="button" variant="outline">{t('dialog.close')}</Button>
                  </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      </footer>
    </main>
  );
}
