// src/locales/gu.ts
export default {
  app: {
    title: 'T&C Simplifier - નિયમો અને શરતો સરળ બનાવો',
    description: 'જટિલ નિયમો અને શરતોને સમજવામાં સરળ બુલેટ પોઇન્ટમાં સરળ બનાવો.',
  },
  home: {
    title: 'T&C Simplifier',
    subtitle: 'જટિલ કાનૂની શબ્દભંડોળથી કંટાળી ગયા છો? નિયમો અને શરતોને સ્પષ્ટ, સંક્ષિપ્ત બુલેટ પોઇન્ટમાં સરળ બનાવવા માટે URL પેસ્ટ કરો.',
    error: {
      title: 'સરળીકરણ ભૂલ',
      aiNoSummary: 'AI સારાંશ જનરેટ કરી શક્યું નથી. કૃપા કરીને એક અલગ URL અજમાવો અથવા પૃષ્ઠ સામગ્રી તપાસો.',
      unexpected: 'નિયમો અને શરતોને સરળ બનાવતી વખતે અનપેક્ષિત ભૂલ આવી. કૃપા કરીને ફરી પ્રયાસ કરો.',
    },
    shareCurrentSummary: 'વર્તમાન સારાંશ શેર કરો',
    footerText: '© {year} T&C Simplifier. વધુ સારી રીતે, ઝડપથી સમજો.',
  },
  urlInputForm: {
    title: 'નિયમો અને શરતો URL દાખલ કરો',
    description: 'નિયમો અને શરતોના પૃષ્ઠનું URL પેસ્ટ કરો અને સારાંશ માટે તમારી પસંદગીની ભાષા પસંદ કરો.',
    urlLabel: 'URL',
    urlPlaceholder: 'https://example.com/terms',
    languageLabel: 'સારાંશ ભાષા',
    languagePlaceholder: 'ભાષા પસંદ કરો',
    buttonLoading: 'સરળ બનાવી રહ્યું છે...',
    buttonSimplify: 'શરતો સરળ બનાવો',
  },
  summaryDisplay: {
    title: 'સરળ સારાંશ',
    noPoints: 'કોઈ સારાંશ પોઇન્ટ ઉપલબ્ધ નથી.',
  },
  historySection: {
    title: 'સરળીકરણ ઇતિહાસ',
    clearAll: 'બધું સાફ કરો',
    description: 'અગાઉ સરળ બનાવેલા નિયમો અને શરતો.',
    empty: 'હજી સુધી કોઈ ઇતિહાસ નથી. તેમને અહીં જોવા માટે કેટલીક શરતો સરળ બનાવો.',
    share: 'શેર કરો',
    delete: 'કાઢી નાખો',
  },
  toast: {
    storageError: {
      title: 'સ્ટોરેજ ભૂલ',
      description: 'ઇતિહાસ સાચવી શકાયો નથી. તમારું બ્રાઉઝર સ્ટોરેજ ભરેલું હોઈ શકે છે અથવા અક્ષમ હોઈ શકે છે.',
    },
    sharedSuccessfully: {
      title: 'સફળતાપૂર્વક શેર કર્યું!',
    },
    shareError: {
      title: 'શેર ભૂલ',
      description: 'સારાંશ શેર કરી શકાયો નથી.',
    },
    copiedToClipboard: {
      title: 'ક્લિપબોર્ડ પર કોપી કર્યું!',
      description: 'વેબ શેર ઉપલબ્ધ ન હોવાથી સારાંશ અને URL કોપી કરવામાં આવ્યા.',
    },
    copyError: {
      title: 'કોપી ભૂલ',
      description: 'સારાંશ ક્લિપબોર્ડ પર કોપી કરી શકાયો નથી.',
    },
    historyItemDeleted: {
      title: 'ઇતિહાસ આઇટમ કાઢી નાખવામાં આવી.',
    },
    allHistoryCleared: {
      title: 'બધો ઇતિહાસ સાફ કરવામાં આવ્યો.',
    },
  },
  languageSwitcher: {
    selectPlaceholder: 'UI ભાષા પસંદ કરો',
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
