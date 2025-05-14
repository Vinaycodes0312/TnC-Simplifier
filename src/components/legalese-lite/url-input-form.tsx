// src/components/legalese-lite/url-input-form.tsx
"use client";

import type { FC } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link as LinkIcon, Wand2, Loader2 } from "lucide-react";

const urlSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL." }),
});

type UrlFormData = z.infer<typeof urlSchema>;

interface UrlInputFormProps {
  onSimplify: (url: string) => Promise<void>;
  isLoading: boolean;
}

export const UrlInputForm: FC<UrlInputFormProps> = ({ onSimplify, isLoading }) => {
  const form = useForm<UrlFormData>({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      url: "",
    },
  });

  async function onSubmit(data: UrlFormData) {
    await onSimplify(data.url);
  }

  return (
    <Card className="w-full max-w-2xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Enter Terms & Conditions URL</CardTitle>
        <CardDescription>
          Paste the URL of a terms and conditions page to get a simplified summary.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="url-input" className="sr-only">URL</FormLabel>
                  <div className="relative">
                    <LinkIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <FormControl>
                      <Input
                        id="url-input"
                        type="url"
                        placeholder="https://example.com/terms"
                        className="pl-10 text-base"
                        {...field}
                      />
                    </FormControl>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full sm:w-auto text-base py-3 px-6">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Simplifying...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-5 w-5" />
                  Simplify Terms
                </>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};
