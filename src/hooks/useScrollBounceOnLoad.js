import { useEffect } from 'react';

// Desplazamiento con animación controlada
function animateScroll(to, duration) {
  const start = window.scrollY || window.pageYOffset || 0;
  const change = to - start;
  const startTime = performance.now();

  const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

  function step(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutQuad(progress);
    const current = start + change * eased;
    window.scrollTo(0, current);
    if (progress < 1) requestAnimationFrame(step);
  }

  if (duration && duration > 0 && 'requestAnimationFrame' in window) {
    requestAnimationFrame(step);
  } else {
    // Fallback: comportamiento suave nativo
    try {
      window.scrollTo({ top: to, behavior: 'smooth' });
    } catch (_) {
      window.scrollTo(0, to);
    }
  }
}

// Hace un salto más largo y despacio al cargar y vuelve arriba.
// Úsalo en la página de Inicio para dar un efecto de "rebote".
export function useScrollBounceOnLoad(options = {}) {
  const {
    distance = 600,
    delayDown = 200,
    holdMs = 1200,
    durationDown = 400,
    durationUp = 500,
    triggerKey = undefined,
  } = options;

  useEffect(() => {
    const t1 = setTimeout(() => {
      animateScroll(distance, durationDown);
    }, delayDown);

    const t2 = setTimeout(() => {
      animateScroll(0, durationUp);
    }, delayDown + holdMs + durationDown);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [distance, delayDown, holdMs, durationDown, durationUp, triggerKey]);
}