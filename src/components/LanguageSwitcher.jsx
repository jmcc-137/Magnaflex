import React, { useState, useRef, useEffect } from 'react';
import { LANGUAGE_OPTIONS } from '../data/translations';
import { COLORS, Z_INDEX } from '../constants/theme';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * Componente LanguageSwitcher
 * Botón dropdown para cambiar idioma
 * 
 * @param {string} currentLanguage - Idioma actual
 * @param {function} onLanguageChange - Callback cuando cambia el idioma
 * @param {number} navOpacity - Opacidad del navbar (0-1) para estilos dinámicos
 * @param {boolean} isResponsive - Si es true, muestra "Lenguaje" en lugar del nombre del idioma
 */
const LanguageSwitcher = ({ currentLanguage = 'es', onLanguageChange, navOpacity = 0, isResponsive = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Cerrar dropdown cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = LANGUAGE_OPTIONS.find(lang => lang.code === currentLanguage);
  const labelText = isResponsive ? 'Lenguaje' : (currentLang?.code?.toUpperCase() || 'ES');
  
  // Determinar color según scroll: blanco si navOpacity < 0.5, negro si >= 0.5
  const textColor = navOpacity < 0.5 ? '#FFFFFF' : '#000000';
  const borderColor = navOpacity < 0.5 ? 'rgba(255,255,255,0.3)' : 'rgba(0,0,0,0.2)';
  const hoverBgColor = navOpacity < 0.5 ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)';

  return (
    <div className="relative flex-shrink-0" ref={containerRef}>
      {/* Botón principal */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`inline-flex items-center gap-2 px-3 sm:px-3 py-2 rounded-lg transition-all duration-200 border ${
          isResponsive ? 'w-full justify-between' : 'w-auto whitespace-nowrap'
        }`}
        style={{ 
          color: isResponsive ? COLORS.primary : textColor,
          borderColor: isResponsive ? COLORS.primary : borderColor,
          backgroundColor: isResponsive ? `${COLORS.primary}08` : hoverBgColor,
          zIndex: 'auto'
        }}
        title="Cambiar idioma"
      >
        <div className="flex items-center gap-2">
          <span className="text-lg sm:text-xl">{currentLang?.flag}</span>
          <span className="text-sm sm:text-base font-medium">{labelText}</span>
        </div>
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>

      {/* Dropdown menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.15 }}
            className="absolute top-full right-0 mt-2 w-40 sm:w-48 bg-white rounded-lg shadow-lg border"
            style={{
              borderColor: COLORS.gray200,
              zIndex: 9999,
            }}
          >
            <ul className="py-1">
              {LANGUAGE_OPTIONS.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => {
                      onLanguageChange(lang.code);
                      setIsOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors duration-200 ${
                      currentLanguage === lang.code
                        ? 'bg-gray-100'
                        : 'hover:bg-gray-50'
                    }`}
                    style={{
                      color: currentLanguage === lang.code ? COLORS.primary : COLORS.darkText,
                      fontWeight: currentLanguage === lang.code ? '600' : '500',
                    }}
                  >
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                    {currentLanguage === lang.code && (
                      <span className="ml-auto">✓</span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;
