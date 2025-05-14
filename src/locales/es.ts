// src/locales/es.ts
// THIS IS A PLACEHOLDER FILE. PLEASE PROVIDE ACTUAL SPANISH TRANSLATIONS.
export default {
  app: {
    title: 'T&C Simplifier (ES) - Simplifica Términos y Condiciones',
    description: 'Simplifica términos y condiciones complejos en puntos fáciles de entender.',
  },
  home: {
    title: 'T&C Simplifier (ES)',
    subtitle: '¿Cansado de la jerga legal complicada? Pega una URL para simplificar los términos y condiciones en puntos claros y concisos.',
    error: {
      title: 'Error de Simplificación',
      aiNoSummary: 'La IA no pudo generar un resumen. Por favor, intenta con una URL diferente o revisa el contenido de la página.',
      unexpected: 'Ocurrió un error inesperado al simplificar los términos y condiciones. Por favor, inténtalo de nuevo.',
    },
    shareCurrentSummary: 'Compartir Resumen Actual',
    footerText: '© {year} T&C Simplifier. Entiende mejor, más rápido.',
  },
  urlInputForm: {
    title: 'Ingresa la URL de los Términos y Condiciones',
    description: 'Pega la URL de una página de términos y condiciones y elige tu idioma preferido para el resumen.',
    urlLabel: 'URL',
    urlPlaceholder: 'https://example.com/terms',
    languageLabel: 'Idioma del Resumen',
    languagePlaceholder: 'Seleccionar idioma',
    buttonLoading: 'Simplificando...',
    buttonSimplify: 'Simplificar Términos',
  },
  summaryDisplay: {
    title: 'Resumen Simplificado',
    noPoints: 'No hay puntos de resumen disponibles.',
  },
  historySection: {
    title: 'Historial de Simplificación',
    clearAll: 'Limpiar Todo',
    description: 'Términos y condiciones simplificados previamente.',
    empty: 'Aún no hay historial. Simplifica algunos términos para verlos aquí.',
    share: 'Compartir',
    delete: 'Eliminar',
  },
  toast: {
    storageError: {
      title: 'Error de Almacenamiento',
      description: 'No se pudo guardar el historial. El almacenamiento de tu navegador podría estar lleno o deshabilitado.',
    },
    sharedSuccessfully: {
      title: '¡Compartido exitosamente!',
    },
    shareError: {
      title: 'Error al Compartir',
      description: 'No se pudo compartir el resumen.',
    },
    copiedToClipboard: {
      title: '¡Copiado al portapapeles!',
      description: 'Resumen y URL copiados ya que Web Share no está disponible.',
    },
    copyError: {
      title: 'Error al Copiar',
      description: 'No se pudo copiar el resumen al portapapeles.',
    },
    historyItemDeleted: {
      title: 'Elemento del historial eliminado.',
    },
    allHistoryCleared: {
      title: 'Todo el historial ha sido borrado.',
    },
  },
  languageSwitcher: {
    selectPlaceholder: 'Seleccionar Idioma de IU',
  },
  languages: {
    en: 'Inglés',
    es: 'Español',
    fr: 'Francés',
    hi: 'Hindi', // Placeholder
    bn: 'Bengalí', // Placeholder
    ta: 'Tamil', // Placeholder
    te: 'Telugu', // Placeholder
    mr: 'Maratí', // Placeholder
    gu: 'Guyaratí', // Placeholder
    kn: 'Canarés', // Placeholder
    ml: 'Malayalam', // Placeholder
    pa: 'Panyabí', // Placeholder
    or: 'Oriya', // Placeholder
  },
} as const;
