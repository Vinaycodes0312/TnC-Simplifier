// src/locales/bn.ts
// THIS IS A PLACEHOLDER FILE. PLEASE PROVIDE ACTUAL BENGALI TRANSLATIONS.
export default {
  app: {
    title: 'T&C Simplifier (BN) - শর্তাবলী সরল করুন',
    description: 'জটিল শর্তাবলী সহজবোধ্য বুলেট পয়েন্টে সরল করুন।',
  },
  home: {
    title: 'T&C Simplifier (BN)',
    subtitle: 'জটিল আইনি পরিভাষায় ক্লান্ত? শর্তাবলী পরিষ্কার, সংক্ষিপ্ত বুলেট পয়েন্টে সরল করতে একটি URL পেস্ট করুন।',
    error: {
      title: 'সরলীকরণ ত্রুটি',
      aiNoSummary: 'AI একটি সারাংশ তৈরি করতে পারেনি। অনুগ্রহ করে একটি ভিন্ন URL চেষ্টা করুন বা পৃষ্ঠার বিষয়বস্তু পরীক্ষা করুন।',
      unexpected: 'শর্তাবলী সরল করার সময় একটি অপ্রত্যাশিত ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
    },
    shareCurrentSummary: 'বর্তমান সারাংশ শেয়ার করুন',
    footerText: '© {year} T&C Simplifier. আরও ভাল, দ্রুত বুঝুন।',
  },
  urlInputForm: {
    title: 'শর্তাবলী URL লিখুন',
    description: 'শর্তাবলী পৃষ্ঠার URL পেস্ট করুন এবং সারাংশের জন্য আপনার পছন্দের ভাষা নির্বাচন করুন।',
    urlLabel: 'URL',
    urlPlaceholder: 'https://example.com/terms',
    languageLabel: 'সারাংশের ভাষা',
    languagePlaceholder: 'ভাষা নির্বাচন করুন',
    buttonLoading: 'সরল করা হচ্ছে...',
    buttonSimplify: 'শর্তাবলী সরল করুন',
  },
  summaryDisplay: {
    title: 'সরলীকৃত সারাংশ',
    noPoints: 'কোন সারাংশ পয়েন্ট উপলব্ধ নেই।',
  },
  historySection: {
    title: 'সরলীকরণ ইতিহাস',
    clearAll: 'সব মুছে ফেলুন',
    description: 'পূর্বে সরলীকৃত শর্তাবলী।',
    empty: 'এখনও কোন ইতিহাস নেই। এখানে দেখতে কিছু শর্তাবলী সরল করুন।',
    share: 'শেয়ার করুন',
    delete: 'মুছে ফেলুন',
  },
  toast: {
    storageError: {
      title: 'স্টোরেজ ত্রুটি',
      description: 'ইতিহাস সংরক্ষণ করা যায়নি। আপনার ব্রাউজার স্টোরেজ পূর্ণ বা নিষ্ক্রিয় হতে পারে।',
    },
    sharedSuccessfully: {
      title: 'সফলভাবে শেয়ার করা হয়েছে!',
    },
    shareError: {
      title: 'শেয়ার ত্রুটি',
      description: 'সারাংশ শেয়ার করা যায়নি।',
    },
    copiedToClipboard: {
      title: 'ক্লিপবোর্ডে কপি করা হয়েছে!',
      description: 'সারাংশ এবং URL কপি করা হয়েছে কারণ ওয়েব শেয়ার উপলব্ধ নেই।',
    },
    copyError: {
      title: 'কপি ত্রুটি',
      description: 'সারাংশ ক্লিপবোর্ডে কপি করা যায়নি।',
    },
    historyItemDeleted: {
      title: 'ইতিহাসের আইটেম মুছে ফেলা হয়েছে।',
    },
    allHistoryCleared: {
      title: 'সমস্ত ইতিহাস মুছে ফেলা হয়েছে।',
    },
  },
  languageSwitcher: {
    selectPlaceholder: 'UI ভাষা নির্বাচন করুন',
  },
  languages: {
    en: 'English',
    es: 'Spanish',
    fr: 'French',
    hi: 'Hindi',
    bn: 'বাংলা',
    ta: 'Tamil',
    te: 'Telugu',
    mr: 'Marathi',
    gu: 'Gujarati',
    kn: 'Kannada',
    ml: 'Malayalam',
    pa: 'Punjabi',
    or: 'Odia',
  },
} as const;
