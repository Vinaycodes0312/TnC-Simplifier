// src/locales/mr.ts
export default {
  app: {
    title: 'T&C Simplifier (MR) - अटी आणि नियम सोपे करा',
    description: 'गुंतागुंतीच्या अटी आणि नियम समजण्यास सोप्या बुलेट पॉइंट्समध्ये सोपे करा.',
  },
  home: {
    title: 'T&C Simplifier (MR)',
    subtitle: 'गुंतागुंतीच्या कायदेशीर शब्दावलीला कंटाळला आहात? अटी आणि नियम स्पष्ट, संक्षिप्त बुलेट पॉइंट्समध्ये सोपे करण्यासाठी URL पेस्ट करा.',
    error: {
      title: 'सुलभीकरण त्रुटी',
      aiNoSummary: 'AI सारांश तयार करू शकला नाही. कृपया वेगळा URL वापरून पहा किंवा पृष्ठावरील सामग्री तपासा.',
      unexpected: 'अटी आणि नियम सोपे करताना अनपेक्षित त्रुटी आली. कृपया पुन्हा प्रयत्न करा.',
    },
    shareCurrentSummary: 'सध्याचा सारांश शेअर करा',
    footerText: '© {year} T&C Simplifier. अधिक चांगले, जलद समजून घ्या.',
  },
  urlInputForm: {
    title: 'अटी आणि नियम URL प्रविष्ट करा',
    description: 'अटी आणि नियम पृष्ठाची URL पेस्ट करा आणि सारांशासाठी आपली आवडती भाषा निवडा.',
    urlLabel: 'URL',
    urlPlaceholder: 'https://example.com/terms',
    languageLabel: 'सारांश भाषा',
    languagePlaceholder: 'भाषा निवडा',
    buttonLoading: 'सुलभ करत आहे...',
    buttonSimplify: 'अटी सोप्या करा',
  },
  summaryDisplay: {
    title: 'सोपा केलेला सारांश',
    noPoints: 'सारांशाचे कोणतेही मुद्दे उपलब्ध नाहीत.',
  },
  historySection: {
    title: 'सुलभीकरण इतिहास',
    clearAll: 'सर्व साफ करा',
    description: 'पूर्वी सोप्या केलेल्या अटी आणि नियम.',
    empty: 'अद्याप कोणताही इतिहास नाही. येथे पाहण्यासाठी काही अटी सोप्या करा.',
    share: 'शेअर करा',
    delete: 'हटवा',
  },
  toast: {
    storageError: {
      title: 'स्टोरेज त्रुटी',
      description: 'इतिहास जतन करता आला नाही. तुमच्या ब्राउझरची स्टोरेज भरलेली असू शकते किंवा अक्षम केलेली असू शकते.',
    },
    sharedSuccessfully: {
      title: 'यशस्वीरित्या शेअर केले!',
    },
    shareError: {
      title: 'शेअर त्रुटी',
      description: 'सारांश शेअर करता आला नाही.',
    },
    copiedToClipboard: {
      title: 'क्लिपबोर्डवर कॉपी केले!',
      description: 'वेब शेअर उपलब्ध नसल्यामुळे सारांश आणि URL कॉपी केले गेले.',
    },
    copyError: {
      title: 'कॉपी त्रुटी',
      description: 'सारांश क्लिपबोर्डवर कॉपी करता आला नाही.',
    },
    historyItemDeleted: {
      title: 'इतिहासातील आयटम हटवला.',
    },
    allHistoryCleared: {
      title: 'सर्व इतिहास साफ केला.',
    },
  },
  languageSwitcher: {
    selectPlaceholder: 'UI भाषा निवडा',
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
