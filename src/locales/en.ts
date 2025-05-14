// src/locales/en.ts
export default {
  app: {
    title: 'T&C Simplifier - Simplify Terms & Conditions',
    description: 'Simplify complex terms and conditions into easy-to-understand bullet points.',
  },
  home: {
    title: 'T&C Simplifier',
    subtitle: 'Tired of complicated legal jargon? Paste a URL to simplify terms and conditions into clear, concise bullet points.',
    error: {
      title: 'Simplification Error',
      aiNoSummary: 'The AI could not generate a summary. Please try a different URL or check the page content.',
      unexpected: 'An unexpected error occurred while simplifying the terms and conditions. Please try again.',
    },
    shareCurrentSummary: 'Share Current Summary',
    footerText: '© {year} T&C Simplifier. Understand better, faster.',
  },
  urlInputForm: {
    title: 'Enter Terms & Conditions URL',
    description: 'Paste the URL of a terms and conditions page and choose your preferred language for the summary.',
    urlLabel: 'URL',
    urlPlaceholder: 'https://example.com/terms',
    languageLabel: 'Summary Language',
    languagePlaceholder: 'Select language',
    buttonLoading: 'Simplifying...',
    buttonSimplify: 'Simplify Terms',
  },
  summaryDisplay: {
    title: 'Simplified Summary',
    noPoints: 'No summary points available.',
  },
  historySection: {
    title: 'Simplification History',
    clearAll: 'Clear All',
    description: 'Previously simplified terms and conditions.',
    empty: 'No history yet. Simplify some terms to see them here.',
    share: 'Share',
    delete: 'Delete',
  },
  toast: {
    storageError: {
      title: 'Storage Error',
      description: 'Could not save history. Your browser storage might be full or disabled.',
    },
    sharedSuccessfully: {
      title: 'Shared successfully!',
    },
    shareError: {
      title: 'Share Error',
      description: 'Could not share the summary.',
    },
    copiedToClipboard: {
      title: 'Copied to clipboard!',
      description: 'Summary and URL copied as Web Share is not available.',
    },
    copyError: {
      title: 'Copy Error',
      description: 'Could not copy summary to clipboard.',
    },
    historyItemDeleted: {
      title: 'History item deleted.',
    },
    allHistoryCleared: {
      title: 'All history cleared.',
    },
  },
  languageSwitcher: {
    selectPlaceholder: 'Select UI Language',
  },
  languages: {
    en: 'English',
    es: 'Español',
    fr: 'Français',
    hi: 'हिन्दी',
    bn: 'বাংলা',
    ta: 'தமிழ்',
    te: 'తెలుగు',
    mr: 'मराठी',
    gu: 'ગુજરાતી',
    kn: 'ಕನ್ನಡ',
    ml: 'മലയാളം',
    pa: 'ਪੰਜਾਬੀ',
    or: 'ଓଡ଼ିଆ',
  },
} as const;
