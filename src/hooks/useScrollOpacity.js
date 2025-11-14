import { useState, useEffect, useCallback } from 'react';

/**
 * Hook para manejar scroll opacity (cambios de opacidad al hacer scroll)
 * @param {number} threshold - Valor en px hasta donde calcular opacidad (default: 120)
 * @returns {number} - Opacidad calculada (0 a 1)
 */
export const useScrollOpacity = (threshold = 120) => {
  const [opacity, setOpacity] = useState(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const calculatedOpacity = Math.min(scrollY / threshold, 1);
    setOpacity(calculatedOpacity);
  }, [threshold]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return opacity;
};
