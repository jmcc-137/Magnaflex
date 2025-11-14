/**
 * Tests para useScrollOpacity Hook
 * 
 * NOTA: Para ejecutar estos tests en el proyecto, necesitas:
 * npm install --save-dev vitest @testing-library/react @testing-library/hooks
 * 
 * Ejecución: npm run test
 */

import { renderHook, act } from '@testing-library/react';
import { useScrollOpacity } from '../useScrollOpacity';

describe('useScrollOpacity Hook', () => {
  
  let initialScrollY;

  beforeEach(() => {
    // Guardar el valor inicial de scroll
    initialScrollY = window.scrollY;
  });

  afterEach(() => {
    // Restaurar scroll a valor inicial
    window.scrollY = initialScrollY;
  });

  test('debe retornar opacidad 0 al inicio', () => {
    const { result } = renderHook(() => useScrollOpacity(120));
    expect(result.current).toBe(0);
  });

  test('debe calcular opacidad basada en scroll', () => {
    const { result } = renderHook(() => useScrollOpacity(120));

    act(() => {
      window.scrollY = 60;
      window.dispatchEvent(new Event('scroll'));
    });

    // Esperamos opacidad de 0.5 (60/120)
    expect(result.current).toBeCloseTo(0.5, 1);
  });

  test('debe limitar opacidad máxima a 1', () => {
    const { result } = renderHook(() => useScrollOpacity(120));

    act(() => {
      window.scrollY = 240;
      window.dispatchEvent(new Event('scroll'));
    });

    expect(result.current).toBe(1);
  });

  test('debe permitir threshold personalizado', () => {
    const { result } = renderHook(() => useScrollOpacity(200));

    act(() => {
      window.scrollY = 100;
      window.dispatchEvent(new Event('scroll'));
    });

    // Con threshold 200: opacidad = 100/200 = 0.5
    expect(result.current).toBeCloseTo(0.5, 1);
  });

  test('debe limpiar event listener al desmontar', () => {
    const removeEventListenerSpy = jest.spyOn(window, 'removeEventListener');
    const { unmount } = renderHook(() => useScrollOpacity(120));

    unmount();

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    removeEventListenerSpy.mockRestore();
  });

});
