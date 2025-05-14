// src/locales/fr.ts
export default {
  app: {
    title: 'T&C Simplifier - Simplifiez les Termes et Conditions',
    description: 'Simplifiez les termes et conditions complexes en points faciles à comprendre.',
  },
  home: {
    title: 'T&C Simplifier',
    subtitle: 'Fatigué du jargon juridique compliqué ? Collez une URL pour simplifier les termes et conditions en points clairs et concis.',
    error: {
      title: 'Erreur de Simplification',
      aiNoSummary: "L'IA n'a pas pu générer de résumé. Veuillez essayer une URL différente ou vérifier le contenu de la page.",
      unexpected: 'Une erreur inattendue s\'est produite lors de la simplification des termes et conditions. Veuillez réessayer.',
    },
    shareCurrentSummary: 'Partager le Résumé Actuel',
    footerText: '© {year} T&C Simplifier. Comprenez mieux, plus rapidement.',
  },
  urlInputForm: {
    title: 'Entrez l\'URL des Termes et Conditions',
    description: 'Collez l\'URL d\'une page de termes et conditions et choisissez votre langue préférée pour le résumé.',
    urlLabel: 'URL',
    urlPlaceholder: 'https://example.com/terms',
    languageLabel: 'Langue du Résumé',
    languagePlaceholder: 'Sélectionner la langue',
    buttonLoading: 'Simplification...',
    buttonSimplify: 'Simplifier les Termes',
  },
  summaryDisplay: {
    title: 'Résumé Simplifié',
    noPoints: 'Aucun point de résumé disponible.',
  },
  historySection: {
    title: 'Historique de Simplification',
    clearAll: 'Tout Effacer',
    description: 'Termes et conditions précédemment simplifiés.',
    empty: 'Aucun historique pour le moment. Simplifiez quelques termes pour les voir ici.',
    share: 'Partager',
    delete: 'Supprimer',
  },
  toast: {
    storageError: {
      title: 'Erreur de Stockage',
      description: "Impossible d'enregistrer l'historique. Le stockage de votre navigateur est peut-être plein ou désactivé.",
    },
    sharedSuccessfully: {
      title: 'Partagé avec succès !',
    },
    shareError: {
      title: 'Erreur de Partage',
      description: 'Impossible de partager le résumé.',
    },
    copiedToClipboard: {
      title: 'Copié dans le presse-papiers !',
      description: 'Résumé et URL copiés car Web Share n\'est pas disponible.',
    },
    copyError: {
      title: 'Erreur de Copie',
      description: 'Impossible de copier le résumé dans le presse-papiers.',
    },
    historyItemDeleted: {
      title: 'Élément de l\'historique supprimé.',
    },
    allHistoryCleared: {
      title: 'Tout l\'historique a été effacé.',
    },
  },
  languageSwitcher: {
    selectPlaceholder: "Sélectionner la Langue de l'IU",
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
