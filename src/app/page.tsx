// src/app/page.tsx
"use client";

import type { ChangeEvent } from 'react';
import { useState, useEffect } from 'react';
import { UrlInputForm } from '@/components/legalese-lite/url-input-form';
import { SummaryDisplay } from '@/components/legalese-lite/summary-display';
import { HistorySection } from '@/components/legalese-lite/history-section';
import { simplifyTermsAndConditions } from '@/ai/flows/simplify-terms-and-conditions';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ScrollText, Terminal, Share2 } from "lucide-react";
import type { HistoryEntry } from '@/types';
import { useToast } from "@/hooks/use-toast";

const LOCAL_STORAGE_KEY = 'TERMS_SIMPLIFIER_HISTORY';

export default function HomePage() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [currentUrl, setCurrentUrl] = useState<string>("");
  const { toast } = useToast();

  useEffect(() => {
    try {
      const storedHistory = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (storedHistory) {
        setHistory(JSON.parse(storedHistory));
      }
    } catch (e) {
      console.error("Failed to load history from localStorage:", e);
      // Optionally show a toast or message to the user
    }
  }, []);

  const saveHistory = (newHistory: HistoryEntry[]) => {
    try {
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newHistory));
    } catch (e) {
      console.error("Failed to save history to localStorage:", e);
      toast({
        variant: "destructive",
        title: "Storage Error",
        description: "Could not save history. Your browser storage might be full or disabled.",
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
        setError("The AI could not generate a summary. Please try a different URL or check the page content.");
      }
    } catch (e: any) {
      console.error("Simplification error:", e);
      setError(e.message || "An unexpected error occurred while simplifying the terms and conditions. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleShare = async (shareSummary: string, shareUrl: string) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Summary for ${shareUrl}`,
          text: `Simplified T&C for ${shareUrl}:\n\n${shareSummary}`,
          url: shareUrl,
        });
        toast({ title: "Shared successfully!" });
      } catch (err) {
        console.error('Error sharing:', err);
        setError('Could not share the summary. Your browser might not support this feature or an error occurred.');
         toast({ variant: "destructive", title: "Share Error", description: "Could not share the summary."});
      }
    } else {
      try {
        await navigator.clipboard.writeText(`Simplified T&C for ${shareUrl}:\n\n${shareSummary}\n\nOriginal URL: ${shareUrl}`);
        toast({ title: "Copied to clipboard!", description: "Summary and URL copied as Web Share is not available." });
      } catch (err) {
        console.error('Failed to copy to clipboard: ', err);
        setError('Could not copy the summary to clipboard.');
        toast({ variant: "destructive", title: "Copy Error", description: "Could not copy summary to clipboard."});
      }
    }
  };

  const handleDeleteHistoryItem = (id: string) => {
    const updatedHistory = history.filter(item => item.id !== id);
    setHistory(updatedHistory);
    saveHistory(updatedHistory);
    toast({ title: "History item deleted."});
  };

  const handleClearAllHistory = () => {
    setHistory([]);
    saveHistory([]);
    toast({ title: "All history cleared."});
  };

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground p-4 sm:p-8 pt-12 sm:pt-20">
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
           <ScrollText className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">T&C Simplifier</h1>
        <p className="mt-3 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto">
          Tired of complicated legal jargon? Paste a URL to simplify terms and conditions into clear, concise bullet points.
        </p>
      </div>

      <UrlInputForm onSimplify={handleSimplify} isLoading={isLoading} />

      {error && !isLoading && (
        <Alert variant="destructive" className="mt-8 max-w-2xl w-full shadow-md">
          <Terminal className="h-5 w-5" />
          <AlertTitle className="font-semibold">Simplification Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      {summary && !isLoading && !error && (
        <div className="w-full max-w-2xl">
          <SummaryDisplay summary={summary} />
          <div className="mt-4 flex justify-end">
            <Button onClick={() => handleShare(summary, currentUrl)} variant="outline">
              <Share2 className="mr-2 h-4 w-4" /> Share Current Summary
            </Button>
          </div>
        </div>
      )}
      
      <HistorySection
        history={history}
        onShareItem={(item) => handleShare(item.summary, item.url)}
        onDeleteItem={handleDeleteHistoryItem}
        onClearAll={handleClearAllHistory}
      />
      
      <footer className="mt-16 mb-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} T&C Simplifier. Understand better, faster.</p>
      </footer>
    </main>
  );
}
