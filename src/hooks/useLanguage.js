import { useState, useEffect, useCallback, useContext } from 'react';
import { translations } from '../data/translations';
import { LanguageContext } from '../context/LanguageContext';

/**
 * Hook para manejar idiomas en toda la aplicación
 * Usa LanguageContext si está disponible, sino mantiene estado local
 * @param {string} initialLanguage - Idioma inicial (default: 'es')
 * @returns {Object} - { language, setLanguage, t (función de traducción) }
 */
export const useLanguage = (initialLanguage = 'es') => {
  // Intentar obtener el contexto
  const contextValue = useContext(LanguageContext);
  
  // Si el contexto está disponible, usarlo directamente
  if (contextValue) {
    return contextValue;
  }

  // Fallback: estado local si no hay contexto (para componentes fuera del Provider)
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || initialLanguage;
    }
    return initialLanguage;
  });

  const setLanguage = useCallback((lang) => {
    if (translations[lang]) {
      setLanguageState(lang);
      localStorage.setItem('language', lang);
      if (typeof window !== 'undefined') {
        document.documentElement.lang = lang;
      }
    }
  }, []);

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

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.lang = language;
    }
  }, [language]);

  return { language, setLanguage, t };
};
