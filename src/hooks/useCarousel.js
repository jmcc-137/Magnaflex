import { useState, useEffect, useRef, useCallback } from 'react';

/**
 * Hook para manejar la lógica de carruseles
 * @param {number} itemCount - Cantidad total de items
 * @param {number} interval - Intervalo de auto-avance en ms
 * @param {boolean} autoPlay - Si debe auto-avanzar
 * @returns {Object} - { index, setIndex, next, prev, goTo }
 */
export const useCarousel = (itemCount, interval = 3500, autoPlay = true) => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = useCallback(() => {
    setIndex((prev) => (prev + 1) % itemCount);
  }, [itemCount]);

  const prev = useCallback(() => {
    setIndex((prev) => (prev - 1 + itemCount) % itemCount);
  }, [itemCount]);

  const goTo = useCallback((newIndex) => {
    if (newIndex >= 0 && newIndex < itemCount) {
      setIndex(newIndex);
    }
  }, [itemCount]);

  // Auto-play
  useEffect(() => {
    if (!autoPlay) return;

    intervalRef.current = setInterval(() => next(), interval);
    return () => clearInterval(intervalRef.current);
  }, [interval, autoPlay, next]);

  return {
    index,
    setIndex,
    next,
    prev,
    goTo,
  };
};
