// src/locales/te.ts
export default {
  app: {
    title: 'T&C Simplifier - నిబంధనలను సరళీకరించండి',
    description: 'సంక్లిష్టమైన నిబంధనలు మరియు షరతులను సులభంగా అర్థమయ్యే బుల్లెట్ పాయింట్లలోకి సరళీకరించండి.',
  },
  home: {
    title: 'T&C Simplifier',
    subtitle: 'సంక్లిష్టమైన చట్టపరమైన పరిభాషతో విసిగిపోయారా? నిబంధనలు మరియు షరతులను స్పష్టమైన, సంక్షిప్త బుల్లెట్ పాయింట్లలోకి సరళీకరించడానికి ఒక URLను అతికించండి.',
    error: {
      title: 'సరళీకరణ లోపం',
      aiNoSummary: 'AI సారాంశాన్ని రూపొందించలేకపోయింది. దయచేసి వేరే URLను ప్రయత్నించండి లేదా పేజీ కంటెంట్‌ను తనిఖీ చేయండి.',
      unexpected: 'నిబంధనలు మరియు షరతులను సరళీకరించేటప్పుడు ఊహించని లోపం సంభవించింది. దయచేసి మళ్లీ ప్రయత్నించండి.',
    },
    shareCurrentSummary: 'ప్రస్తుత సారాంశాన్ని పంచుకోండి',
    footerText: '© {year} T&C Simplifier. బాగా, వేగంగా అర్థం చేసుకోండి.',
  },
  urlInputForm: {
    title: 'నిబంధనలు మరియు షరతుల URLను నమోదు చేయండి',
    description: 'నిబంధనలు మరియు షరతుల పేజీ యొక్క URLను అతికించి, సారాంశం కోసం మీకు ఇష్టమైన భాషను ఎంచుకోండి.',
    urlLabel: 'URL',
    urlPlaceholder: 'https://example.com/terms',
    languageLabel: 'సారాంశ భాష',
    languagePlaceholder: 'భాషను ఎంచుకోండి',
    buttonLoading: 'సరళీకరిస్తోంది...',
    buttonSimplify: 'నిబంధనలను సరళీకరించండి',
  },
  summaryDisplay: {
    title: 'సరళీకరించిన సారాంశం',
    noPoints: 'సారాంశ పాయింట్లు ఏవీ అందుబాటులో లేవు.',
  },
  historySection: {
    title: 'సరళీకరణ చరిత్ర',
    clearAll: 'అన్నీ క్లియర్ చేయి',
    description: 'గతంలో సరళీకరించిన నిబంధనలు మరియు షరతులు.',
    empty: 'ఇంకా చరిత్ర ఏమీ లేదు. వాటిని ఇక్కడ చూడటానికి కొన్ని నిబంధనలను సరళీకరించండి.',
    share: 'పంచుకోండి',
    delete: 'తొలగించు',
  },
  toast: {
    storageError: {
      title: 'నిల్వ లోపం',
      description: 'చరిత్రను సేవ్ చేయలేకపోయాము. మీ బ్రౌజర్ నిల్వ నిండిపోయి ఉండవచ్చు లేదా నిలిపివేయబడి ఉండవచ్చు.',
    },
    sharedSuccessfully: {
      title: 'విజయవంతంగా పంచుకోబడింది!',
    },
    shareError: {
      title: 'భాగస్వామ్య లోపం',
      description: 'సారాంశాన్ని పంచుకోలేకపోయాము.',
    },
    copiedToClipboard: {
      title: 'క్లిప్‌బోర్డ్‌కు కాపీ చేయబడింది!',
      description: 'వెబ్ షేర్ అందుబాటులో లేనందున సారాంశం మరియు URL కాపీ చేయబడ్డాయి.',
    },
    copyError: {
      title: 'కాపీ లోపం',
      description: 'సారాంశాన్ని క్లిప్‌బోర్డ్‌కు కాపీ చేయలేకపోయాము.',
    },
    historyItemDeleted: {
      title: 'చరిత్ర అంశం తొలగించబడింది.',
    },
    allHistoryCleared: {
      title: 'అంత చరిత్ర క్లియర్ చేయబడింది.',
    },
  },
  languageSwitcher: {
    selectPlaceholder: 'UI భాషను ఎంచుకోండి',
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
