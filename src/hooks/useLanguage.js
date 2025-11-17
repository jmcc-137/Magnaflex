import { useState, useEffect, useCallback } from 'react';
import { translations } from '../data/translations';

/**
 * Hook para manejar idiomas en toda la aplicación
 * @param {string} initialLanguage - Idioma inicial (default: 'es')
 * @returns {Object} - { language, setLanguage, t (función de traducción) }
 */
export const useLanguage = (initialLanguage = 'es') => {
  const [language, setLanguageState] = useState(() => {
    // Recuperar idioma guardado en localStorage o usar el inicial
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || initialLanguage;
    }
    return initialLanguage;
  });

  // Función para cambiar idioma
  const setLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
      // Actualizar atributo lang del HTML para accesibilidad
      document.documentElement.lang = lang;
    }
  }, []);

  // Función de traducción
  const t = useCallback((path, defaultValue = '') => {
    const keys = path.split('.');
    let value = translations[language];

    for (const key of keys) {
      if (value && typeof value === 'object' && key in value) {
        value = value[key];
      } else {
        return defaultValue || path;
      }
    }

    return value || defaultValue || path;
  }, [language]);

  // Establecer atributo lang al cargar
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return { language, setLanguage, t };
};
