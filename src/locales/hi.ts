// src/locales/hi.ts
export default {
  app: {
    title: 'T&C Simplifier (HI) - नियम और शर्तें सरल बनाएं',
    description: 'जटिल नियमों और शर्तों को समझने में आसान बुलेट बिंदुओं में सरल बनाएं।',
  },
  home: {
    title: 'T&C Simplifier (HI)',
    subtitle: 'जटिल कानूनी शब्दावली से थक गए हैं? नियमों और शर्तों को स्पष्ट, संक्षिप्त बुलेट बिंदुओं में सरल बनाने के लिए एक URL पेस्ट करें।',
    error: {
      title: 'सरलीकरण त्रुटि',
      aiNoSummary: 'AI सारांश उत्पन्न नहीं कर सका। कृपया एक भिन्न URL आज़माएँ या पृष्ठ सामग्री की जाँच करें।',
      unexpected: 'नियमों और शर्तों को सरल करते समय एक अप्रत्याशित त्रुटि हुई। कृपया पुनः प्रयास करें।',
    },
    shareCurrentSummary: 'वर्तमान सारांश साझा करें',
    footerText: '© {year} T&C Simplifier. बेहतर, तेजी से समझें।',
  },
  urlInputForm: {
    title: 'नियम और शर्तें URL दर्ज करें',
    description: 'नियम और शर्तों वाले पृष्ठ का URL पेस्ट करें और सारांश के लिए अपनी पसंदीदा भाषा चुनें।',
    urlLabel: 'URL',
    urlPlaceholder: 'https://example.com/terms',
    languageLabel: 'सारांश भाषा',
    languagePlaceholder: 'भाषा चुनें',
    buttonLoading: 'सरल किया जा रहा है...',
    buttonSimplify: 'शर्तें सरल करें',
  },
  summaryDisplay: {
    title: 'सरलीकृत सारांश',
    noPoints: 'कोई सारांश बिंदु उपलब्ध नहीं है।',
  },
  historySection: {
    title: 'सरलीकरण इतिहास',
    clearAll: 'सभी साफ़ करें',
    description: 'पहले से सरलीकृत नियम और शर्तें।',
    empty: 'अभी तक कोई इतिहास नहीं है। उन्हें यहां देखने के लिए कुछ शब्दों को सरल बनाएं।',
    share: 'साझा करें',
    delete: 'हटाएं',
  },
  toast: {
    storageError: {
      title: 'संग्रहण त्रुटि',
      description: 'इतिहास सहेजा नहीं जा सका। आपके ब्राउज़र का संग्रहण भरा हो सकता है या अक्षम हो सकता है।',
    },
    sharedSuccessfully: {
      title: 'सफलतापूर्वक साझा किया गया!',
    },
    shareError: {
      title: 'साझा करने में त्रुटि',
      description: 'सारांश साझा नहीं किया जा सका।',
    },
    copiedToClipboard: {
      title: 'क्लिपबोर्ड पर कॉपी किया गया!',
      description: 'सारांश और URL कॉपी किए गए क्योंकि वेब शेयर उपलब्ध नहीं है।',
    },
    copyError: {
      title: 'कॉपी करने में त्रुटي',
      description: 'सारांश को क्लिपबोर्ड पर कॉपी नहीं किया जा सका।',
    },
    historyItemDeleted: {
      title: 'इतिहास आइटम हटा दिया गया।',
    },
    allHistoryCleared: {
      title: 'सभी इतिहास साफ़ कर दिया गया है।',
    },
  },
  languageSwitcher: {
    selectPlaceholder: 'UI भाषा चुनें',
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
