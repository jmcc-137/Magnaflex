/**
 * Tests para useCarousel Hook
 * 
 * NOTA: Para ejecutar estos tests en el proyecto, necesitas:
 * npm install --save-dev vitest @testing-library/react @testing-library/hooks
 * 
 * Ejecución: npm run test
 */

import { renderHook, act } from '@testing-library/react';
import { useCarousel } from '../useCarousel';

describe('useCarousel Hook', () => {
  
  test('debe inicializar con index 0', () => {
    const { result } = renderHook(() => useCarousel(3, 1000, false));
    expect(result.current.index).toBe(0);
  });

  test('next() debe incrementar el index', () => {
    const { result } = renderHook(() => useCarousel(3, 1000, false));
    
    act(() => {
      result.current.next();
    });
    
    expect(result.current.index).toBe(1);
  });

  test('next() debe hacer ciclo desde el último item al primero', () => {
    const { result } = renderHook(() => useCarousel(3, 1000, false));
    
    act(() => {
      result.current.goTo(2); // Último item
      result.current.next();
    });
    
    expect(result.current.index).toBe(0);
  });

  test('prev() debe decrementar el index', () => {
    const { result } = renderHook(() => useCarousel(3, 1000, false));
    
    act(() => {
      result.current.goTo(1);
      result.current.prev();
    });
    
    expect(result.current.index).toBe(0);
  });

  test('prev() debe hacer ciclo desde el primer item al último', () => {
    const { result } = renderHook(() => useCarousel(3, 1000, false));
    
    act(() => {
      result.current.prev();
    });
    
    expect(result.current.index).toBe(2);
  });

  test('goTo() debe saltar a un index específico', () => {
    const { result } = renderHook(() => useCarousel(5, 1000, false));
    
    act(() => {
      result.current.goTo(3);
    });
    
    expect(result.current.index).toBe(3);
  });

  test('goTo() no debe permitir índices fuera de rango', () => {
    const { result } = renderHook(() => useCarousel(3, 1000, false));
    
    act(() => {
      result.current.goTo(10);
    });
    
    expect(result.current.index).toBe(0); // Mantiene el índice actual
  });

  test('debe activar autoPlay cuando autoPlay es true', (done) => {
    const { result } = renderHook(() => useCarousel(3, 100, true));
    
    setTimeout(() => {
      expect(result.current.index).toBeGreaterThan(0);
      done();
    }, 150);
  });

  test('no debe activar autoPlay cuando autoPlay es false', (done) => {
    const { result } = renderHook(() => useCarousel(3, 100, false));
    
    setTimeout(() => {
      expect(result.current.index).toBe(0);
      done();
    }, 150);
  });

});
