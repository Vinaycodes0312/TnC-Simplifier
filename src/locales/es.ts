// src/locales/es.ts
export default {
  app: {
    title: 'T&C Simplifier',
    description: 'Simplifica términos y condiciones complejos en puntos fáciles de entender.',
  },
  home: {
    title: 'T&C Simplifier',
    subtitle: '¿Cansado de la jerga legal complicada? Pega una URL para simplificar los términos y condiciones en puntos claros y concisos.',
    error: {
      title: 'Error de Simplificación',
      aiNoSummary: 'La IA no pudo generar un resumen. Por favor, intenta con una URL diferente o revisa el contenido de la página.',
      unexpected: 'Ocurrió un error inesperado al simplificar los términos y condiciones. Por favor, inténtalo de nuevo.',
    },
    shareCurrentSummary: 'Compartir Resumen Actual',
    footerText: '© {year} T&C Simplifier. Entiende mejor, más rápido.',
    helpAndSupport: 'Ayuda y Soporte',
    developerContact: 'Contacto del Desarrollador',
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
    title: "Ayuda y Soporte",
    q1Title: "¿Cómo usar T&C Simplifier?",
    q1Answer1: "1. Pega la URL de la página de términos y condiciones que deseas simplificar en el campo de entrada.",
    q1Answer2: "2. Selecciona tu idioma preferido para el resumen en el menú desplegable.",
    q1Answer3: "3. Haz clic en el botón 'Simplificar Términos'.",
    q1Answer4: "4. El resumen simplificado aparecerá debajo. Luego puedes compartirlo o encontrarlo más tarde en tu historial.",
    q2Title: "¿Se guardan mis datos?",
    q2Answer: "Tu historial de simplificación (URL, resumen, marca de tiempo) se guarda localmente en el almacenamiento de tu navegador. No se envía a ningún servidor. Puedes borrar tu historial en cualquier momento.",
    q3Title: "¿Qué pasa si obtengo un error?",
    q3Answer: "Asegúrate de que la URL sea correcta y de acceso público. Algunas estructuras de página complejas o documentos muy largos pueden causar problemas ocasionalmente. Intenta con una URL diferente si los problemas persisten.",
  },
  contactDialog: {
    title: "Contacto del Desarrollador",
    intro: "Para consultas, comentarios o soporte, por favor contacta a:",
    email: "developer@example.com", // Placeholder, translate if needed or keep as is.
    note: "Por favor, ten en cuenta: Esta es una aplicación de demostración. La dirección de correo electrónico es un marcador de posición.",
  },
  dialog: {
    close: "Cerrar",
  }
} as const;
