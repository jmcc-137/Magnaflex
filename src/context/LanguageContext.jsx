import React, { createContext, useState, useCallback, useEffect, useMemo } from 'react';
import { translations } from '../data/translations';

/**
 * Context para el idioma de la aplicación
 * Proporciona acceso global a cambio de idioma y función de traducción
 */
export const LanguageContext = createContext();

/**
 * Proveedor de idioma
 * Envuelve la aplicación para proporcionar contexto de idioma a todos los componentes
 */
export const LanguageProvider = ({ children }) => {
  const [language, setLanguageState] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('language') || 'es';
    }
    return 'es';
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

  const languageData = useMemo(() => ({
    language,
    setLanguage,
    t,
  }), [language, setLanguage, t]);

  return (
    <LanguageContext.Provider value={languageData}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
