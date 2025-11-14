import { useRef, useCallback } from 'react';

/**
 * Hook para manejar gestos táctiles (swipe)
 * @returns {Object} - { touchStartX, touchEndX, handleTouchStart, handleTouchMove, handleTouchEnd, getSwipeDirection }
 */
export const useTouchGestures = () => {
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = useCallback((e) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const getSwipeDirection = useCallback((threshold = 40) => {
    if (touchStartX.current === null || touchEndX.current === null) {
      return null;
    }

    const diff = touchStartX.current - touchEndX.current;

    if (diff > threshold) return 'left'; // Swiped left
    if (diff < -threshold) return 'right'; // Swiped right
    return null;
  }, []);

  const handleTouchEnd = useCallback(() => {
    touchStartX.current = null;
    touchEndX.current = null;
  }, []);

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    getSwipeDirection,
  };
};
