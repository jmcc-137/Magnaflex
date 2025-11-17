import React, { createContext } from 'react';
import { useLanguage } from '../hooks/useLanguage';

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
  const languageData = useLanguage();

  return (
    <LanguageContext.Provider value={languageData}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageProvider;
