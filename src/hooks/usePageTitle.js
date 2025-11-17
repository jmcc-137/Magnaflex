import { useEffect } from 'react';

/**
 * Hook para actualizar el título del navegador (head)
 * @param {string} pageTitle - Nombre de la página/sección
 * @param {string} siteName - Nombre del sitio (default: MAGNAFLEX)
 */
export const usePageTitle = (pageTitle, siteName = 'MAGNAFLEX') => {
  useEffect(() => {
    // Actualizar título del navegador
    document.title = `${pageTitle} - ${siteName}`;

    // Opcional: actualizar meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', `${pageTitle} | ${siteName}`);
    }

    // Cleanup: restaurar título original si es necesario
    return () => {
      document.title = siteName;
    };
  }, [pageTitle, siteName]);
};
