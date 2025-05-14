// src/components/legalese-lite/url-input-form.tsx
"use client";

import type { FC } from 'react';
import { useState } from 'react';
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link as LinkIcon, Wand2, Loader2, Languages } from "lucide-react";
import { ScrollArea } from '@/components/ui/scroll-area';

const urlSchema = z.object({
  url: z.string().url({ message: "Please enter a valid URL." }),
});

type UrlFormData = z.infer<typeof urlSchema>;

interface UrlInputFormProps {
  onSimplify: (url: string, language: string) => Promise<void>;
  isLoading: boolean;
}

const languages = [
  { value: "Afrikaans", label: "Afrikaans" },
  { value: "Albanian", label: "Albanian (Shqip)" },
  { value: "Amharic", label: "Amharic (አማርኛ)" },
  { value: "Arabic", label: "Arabic (العربية)" },
  { value: "Armenian", label: "Armenian (Հայերեն)" },
  { value: "Azerbaijani", label: "Azerbaijani (Azərbaycan dili)" },
  { value: "Basque", label: "Basque (Euskara)" },
  { value: "Belarusian", label: "Belarusian (Беларуская)" },
  { value: "Bengali", label: "Bengali (বাংলা)" },
  { value: "Bosnian", label: "Bosnian (Bosanski)" },
  { value: "Bulgarian", label: "Bulgarian (Български)" },
  { value: "Catalan", label: "Catalan (Català)" },
  { value: "Chinese (Simplified)", label: "Chinese (Simplified) (中文 (简体))" },
  { value: "Croatian", label: "Croatian (Hrvatski)" },
  { value: "Czech", label: "Czech (Čeština)" },
  { value: "Danish", label: "Danish (Dansk)" },
  { value: "Dutch", label: "Dutch (Nederlands)" },
  { value: "English", label: "English" },
  { value: "Esperanto", label: "Esperanto" },
  { value: "Estonian", label: "Estonian (Eesti)" },
  { value: "Filipino (Tagalog)", label: "Filipino (Tagalog)" },
  { value: "Finnish", label: "Finnish (Suomi)" },
  { value: "French", label: "French (Français)" },
  { value: "Galician", label: "Galician (Galego)" },
  { value: "Georgian", label: "Georgian (ქართული)" },
  { value: "German", label: "German (Deutsch)" },
  { value: "Greek", label: "Greek (Ελληνικά)" },
  { value: "Gujarati", label: "Gujarati (ગુજરાતી)" },
  { value: "Haitian Creole", label: "Haitian Creole (Kreyòl ayisyen)" },
  { value: "Hausa", label: "Hausa" },
  { value: "Hebrew", label: "Hebrew (עברית)" },
  { value: "Hindi", label: "Hindi (हिन्दी)" },
  { value: "Hungarian", label: "Hungarian (Magyar)" },
  { value: "Icelandic", label: "Icelandic (Íslenska)" },
  { value: "Igbo", label: "Igbo" },
  { value: "Indonesian", label: "Indonesian (Bahasa Indonesia)" },
  { value: "Irish", label: "Irish (Gaeilge)" },
  { value: "Italian", label: "Italian (Italiano)" },
  { value: "Japanese", label: "Japanese (日本語)" },
  { value: "Javanese", label: "Javanese (Basa Jawa)" },
  { value: "Kannada", label: "Kannada (ಕನ್ನಡ)" },
  { value: "Kazakh", label: "Kazakh (Қазақ тілі)" },
  { value: "Khmer", label: "Khmer (ភាសាខ្មែរ)" },
  { value: "Korean", label: "Korean (한국어)" },
  { value: "Lao", label: "Lao (ລາວ)" },
  { value: "Latin", label: "Latin (Latina)" },
  { value: "Latvian", label: "Latvian (Latviešu)" },
  { value: "Lithuanian", label: "Lithuanian (Lietuvių)" },
  { value: "Luxembourgish", label: "Luxembourgish (Lëtzebuergesch)" },
  { value: "Macedonian", label: "Macedonian (Македонски)" },
  { value: "Malagasy", label: "Malagasy" },
  { value: "Malay", label: "Malay (Bahasa Melayu)" },
  { value: "Malayalam", label: "Malayalam (മലയാളം)" },
  { value: "Maltese", label: "Maltese (Malti)" },
  { value: "Marathi", label: "Marathi (मराठी)" },
  { value: "Mongolian", label: "Mongolian (Монгол)" },
  { value: "Nepali", label: "Nepali (नेपाली)" },
  { value: "Norwegian", label: "Norwegian (Norsk)" },
  { value: "Odia", label: "Odia (ଓଡ଼ିଆ)" },
  { value: "Pashto", label: "Pashto (پښتو)" },
  { value: "Persian (Farsi)", label: "Persian (Farsi) (فارسی)" },
  { value: "Polish", label: "Polish (Polski)" },
  { value: "Portuguese", label: "Portuguese (Português)" },
  { value: "Punjabi", label: "Punjabi (ਪੰਜਾਬੀ)" },
  { value: "Romanian", label: "Romanian (Română)" },
  { value: "Russian", label: "Russian (Русский)" },
  { value: "Serbian", label: "Serbian (Српски / Srpski)" },
  { value: "Sindhi", label: "Sindhi (سنڌي)" },
  { value: "Sinhala", label: "Sinhala (සිංහල)" },
  { value: "Slovak", label: "Slovak (Slovenčina)" },
  { value: "Slovenian", label: "Slovenian (Slovenščina)" },
  { value: "Somali", label: "Somali (Soomaali)" },
  { value: "Spanish", label: "Spanish (Español)" },
  { value: "Sundanese", label: "Sundanese (Basa Sunda)" },
  { value: "Swahili", label: "Swahili (Kiswahili)" },
  { value: "Swedish", label: "Swedish (Svenska)" },
  { value: "Tajik", label: "Tajik (Тоҷикӣ)" },
  { value: "Tamil", label: "Tamil (தமிழ்)" },
  { value: "Telugu", label: "Telugu (తెలుగు)" },
  { value: "Thai", label: "Thai (ไทย)" },
  { value: "Turkish", label: "Turkish (Türkçe)" },
  { value: "Turkmen", label: "Turkmen (Türkmençe)" },
  { value: "Ukrainian", label: "Ukrainian (Українська)" },
  { value: "Urdu", label: "Urdu (اردو)" },
  { value: "Uzbek", label: "Uzbek (Oʻzbekcha)" },
  { value: "Vietnamese", label: "Vietnamese (Tiếng Việt)" },
  { value: "Welsh", label: "Welsh (Cymraeg)" },
  { value: "Xhosa", label: "Xhosa (isiXhosa)" },
  { value: "Yiddish", label: "Yiddish (ייִדיש)" },
  { value: "Yoruba", label: "Yoruba (Yorùbá)" },
  { value: "Zulu", label: "Zulu (isiZulu)" },
].sort((a, b) => a.label.localeCompare(b.label));


export const UrlInputForm: FC<UrlInputFormProps> = ({ onSimplify, isLoading }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(languages.find(l => l.value === "English")?.value || languages[0].value);

  const form = useForm<UrlFormData>({
    resolver: zodResolver(urlSchema),
    defaultValues: {
      url: "",
    },
  });

  async function onSubmit(data: UrlFormData) {
    await onSimplify(data.url, selectedLanguage);
  }

  return (
    <Card className="w-full max-w-2xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl">Enter Terms & Conditions URL</CardTitle>
        <CardDescription>
          Paste the URL of a terms and conditions page and choose your preferred language for the summary.
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
                  <FormLabel htmlFor="url-input">URL</FormLabel>
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

            <FormItem>
              <FormLabel htmlFor="language-select">Summary Language</FormLabel>
              <div className="relative">
                <Languages className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground z-10" />
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <FormControl>
                    <SelectTrigger id="language-select" className="pl-10 text-base">
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <ScrollArea className="h-[200px]"> {/* Adjust height as needed */}
                      {languages.map((lang) => (
                        <SelectItem key={lang.value} value={lang.value}>
                          {lang.label}
                        </SelectItem>
                      ))}
                    </ScrollArea>
                  </SelectContent>
                </Select>
              </div>
            </FormItem>

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
