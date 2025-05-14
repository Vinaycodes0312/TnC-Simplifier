// src/locales/fr.ts
export default {
  app: {
    title: 'T&C Simplifier',
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
    helpAndSupport: 'Aide et Support',
    developerContact: 'Contact Développeur',
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
  helpDialog: {
    title: "Aide et Support",
    q1Title: "Comment utiliser T&C Simplifier ?",
    q1Answer1: "1. Collez l'URL de la page des termes et conditions que vous souhaitez simplifier dans le champ de saisie.",
    q1Answer2: "2. Sélectionnez votre langue préférée pour le résumé dans le menu déroulant.",
    q1Answer3: "3. Cliquez sur le bouton 'Simplifier les Termes'.",
    q1Answer4: "4. Le résumé simplifié apparaîtra ci-dessous. Vous pouvez ensuite le partager ou le retrouver plus tard dans votre historique.",
    q2Title: "Mes données sont-elles sauvegardées ?",
    q2Answer: "Votre historique de simplification (URL, résumé, horodatage) est sauvegardé localement dans le stockage de votre navigateur. Il n'est envoyé à aucun serveur. Vous pouvez effacer votre historique à tout moment.",
    q3Title: "Que faire si je rencontre une erreur ?",
    q3Answer: "Assurez-vous que l'URL est correcte et accessible publiquement. Certaines structures de page complexes ou des documents très longs могут occasionnellement causer des problèmes. Essayez une URL différente si les problèmes persistent.",
  },
  contactDialog: {
    title: "Contact Développeur",
    intro: "Pour toute demande, commentaire ou support, veuillez contacter :",
    email: "developer@example.com", // Placeholder
    note: "Veuillez noter : Ceci est une application de démonstration. L'adresse e-mail est un placeholder.",
  },
  dialog: {
    close: "Fermer",
  }
} as const;
