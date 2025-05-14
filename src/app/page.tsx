// src/app/page.tsx
"use client";

import { useState } from 'react';
import { UrlInputForm } from '@/components/legalese-lite/url-input-form';
import { SummaryDisplay } from '@/components/legalese-lite/summary-display';
import { simplifyTermsAndConditions } from '@/ai/flows/simplify-terms-and-conditions';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ScrollText, Terminal } from "lucide-react";

export default function HomePage() {
  const [summary, setSummary] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSimplify = async (url: string) => {
    setIsLoading(true);
    setSummary(null);
    setError(null);
    try {
      const result = await simplifyTermsAndConditions({ url });
      if (result.summary) {
        setSummary(result.summary);
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

  return (
    <main className="flex flex-col items-center justify-start min-h-screen bg-background text-foreground p-4 sm:p-8 pt-12 sm:pt-20">
      <div className="text-center mb-10 sm:mb-12">
        <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
           <ScrollText className="h-10 w-10 sm:h-12 sm:w-12 text-primary" />
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-primary tracking-tight">Legalese Lite</h1>
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
        <SummaryDisplay summary={summary} />
      )}
      
      <footer className="mt-16 mb-8 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Legalese Lite. Understand better, faster.</p>
      </footer>
    </main>
  );
}
