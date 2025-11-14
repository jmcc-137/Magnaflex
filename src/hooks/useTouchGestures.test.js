/**
 * Tests para useTouchGestures Hook
 * 
 * NOTA: Para ejecutar estos tests en el proyecto, necesitas:
 * npm install --save-dev vitest @testing-library/react @testing-library/hooks
 * 
 * Ejecución: npm run test
 */

import { renderHook, act } from '@testing-library/react';
import { useTouchGestures } from '../useTouchGestures';

describe('useTouchGestures Hook', () => {
  
  test('debe retornar funciones y métodos correctos', () => {
    const { result } = renderHook(() => useTouchGestures());
    
    expect(typeof result.current.handleTouchStart).toBe('function');
    expect(typeof result.current.handleTouchMove).toBe('function');
    expect(typeof result.current.handleTouchEnd).toBe('function');
    expect(typeof result.current.getSwipeDirection).toBe('function');
  });

  test('getSwipeDirection() debe retornar "left" para swipe izquierdo', () => {
    const { result } = renderHook(() => useTouchGestures());

    act(() => {
      // Simular touch start en x=100
      result.current.handleTouchStart({
        touches: [{ clientX: 100 }],
      });

      // Simular touch move a x=30 (más a la izquierda)
      result.current.handleTouchMove({
        touches: [{ clientX: 30 }],
      });
    });

    const direction = result.current.getSwipeDirection(40);
    expect(direction).toBe('left');
  });

  test('getSwipeDirection() debe retornar "right" para swipe derecho', () => {
    const { result } = renderHook(() => useTouchGestures());

    act(() => {
      // Simular touch start en x=50
      result.current.handleTouchStart({
        touches: [{ clientX: 50 }],
      });

      // Simular touch move a x=150 (más a la derecha)
      result.current.handleTouchMove({
        touches: [{ clientX: 150 }],
      });
    });

    const direction = result.current.getSwipeDirection(40);
    expect(direction).toBe('right');
  });

  test('getSwipeDirection() debe retornar null si el swipe es muy pequeño', () => {
    const { result } = renderHook(() => useTouchGestures());

    act(() => {
      // Simular touch start en x=100
      result.current.handleTouchStart({
        touches: [{ clientX: 100 }],
      });

      // Simular touch move a x=110 (solo 10px de diferencia)
      result.current.handleTouchMove({
        touches: [{ clientX: 110 }],
      });
    });

    const direction = result.current.getSwipeDirection(40);
    expect(direction).toBeNull();
  });

  test('handleTouchEnd() debe resetear referencias', () => {
    const { result } = renderHook(() => useTouchGestures());

    act(() => {
      result.current.handleTouchStart({
        touches: [{ clientX: 100 }],
      });

      result.current.handleTouchMove({
        touches: [{ clientX: 50 }],
      });

      result.current.handleTouchEnd();
    });

    const direction = result.current.getSwipeDirection(40);
    expect(direction).toBeNull(); // Debe ser null después de end
  });

  test('debe permitir threshold personalizado', () => {
    const { result } = renderHook(() => useTouchGestures());

    act(() => {
      result.current.handleTouchStart({
        touches: [{ clientX: 100 }],
      });

      // Solo 60px de diferencia
      result.current.handleTouchMove({
        touches: [{ clientX: 40 }],
      });
    });

    // Con threshold 50, debe reconocer el swipe
    const direction1 = result.current.getSwipeDirection(50);
    expect(direction1).toBe('left');

    // Con threshold 70, no debe reconocer el swipe
    const direction2 = result.current.getSwipeDirection(70);
    expect(direction2).toBeNull();
  });

});
