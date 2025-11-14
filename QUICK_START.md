# 🚀 QUICK START - GUÍA RÁPIDA PARA DESARROLLADORES

## 📌 Estructura Nueva del Proyecto

### 1️⃣ Constantes (`src/constants/`)
```javascript
import { COLORS, GRADIENTS, ANIMATIONS, SHADOWS } from '../constants/theme';
```

**Nunca** hagas esto:
```javascript
// ❌ MAL
const color = '#d10c2b';
style={{ background: 'linear-gradient(...)' }}

// ✅ BIEN
import { COLORS, GRADIENTS } from '../constants/theme';
style={{ background: COLORS.primary }}
style={{ background: GRADIENTS.redTint }}
```

---

### 2️⃣ Hooks Personalizados (`src/hooks/`)

#### useCarousel - Para carruseles
```javascript
import { useCarousel } from '../hooks';

const MyCarousel = () => {
  const { index, goTo, next, prev } = useCarousel(
    items.length,      // cantidad de items
    3500,               // intervalo en ms
    true                // auto-play
  );

  return (
    <div>
      <button onClick={next}>Siguiente</button>
      <button onClick={prev}>Anterior</button>
      <button onClick={() => goTo(2)}>Ir a 2</button>
      <p>Slide actual: {index}</p>
    </div>
  );
};
```

#### useScrollOpacity - Para navbar/headers
```javascript
import { useScrollOpacity } from '../hooks';

const MyNavbar = () => {
  const opacity = useScrollOpacity(120); // threshold en px

  return (
    <nav style={{ backgroundColor: `rgba(255,255,255,${opacity})` }}>
      {/* contenido */}
    </nav>
  );
};
```

#### useTouchGestures - Para swipes
```javascript
import { useTouchGestures } from '../hooks';

const MySwipeComponent = () => {
  const {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    getSwipeDirection,
  } = useTouchGestures();

  const onTouchEnd = () => {
    const direction = getSwipeDirection(40); // threshold
    if (direction === 'left') console.log('Swipe izquierda');
    if (direction === 'right') console.log('Swipe derecha');
    handleTouchEnd();
  };

  return (
    <div
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* contenido */}
    </div>
  );
};
```

---

### 3️⃣ Validadores (`src/validators/`)

```javascript
import PropTypes from 'prop-types';
import { slidePropType, productPropType } from '../validators/propValidators';

// Usar validadores predefinidos
const MyComponent = ({ slides, products }) => {
  return <div>{/* ... */}</div>;
};

MyComponent.propTypes = {
  slides: PropTypes.arrayOf(slidePropType).isRequired,
  products: PropTypes.arrayOf(productPropType),
};

MyComponent.defaultProps = {
  products: [],
};
```

---

## 🛠️ Tareas Comunes

### Cambiar el tema de colores
```javascript
// Edita SOLO este archivo:
// src/constants/theme.js

export const COLORS = {
  primary: '#d10c2b',  // ← Cambia aquí
  // ... resto de colores
};
```

Todo se actualiza automáticamente en toda la app ✨

---

### Agregar un nuevo color
```javascript
// En src/constants/theme.js

export const COLORS = {
  // ... colores existentes
  accentBlue: '#0066cc',  // ← Nuevo color
};

// En tu componente
import { COLORS } from '../constants/theme';

<div style={{ color: COLORS.accentBlue }} />
```

---

### Crear un nuevo Hook
```javascript
// src/hooks/myNewHook.js

import { useState, useEffect } from 'react';

export const useMyHook = (param1, param2) => {
  const [state, setState] = useState(null);

  useEffect(() => {
    // tu lógica
  }, [param1, param2]);

  return { state, setState };
};

// Luego exportar en src/hooks/index.js
export { useMyHook } from './myNewHook';

// Usar en componentes
import { useMyHook } from '../hooks';
```

---

### Agregar PropTypes a un componente
```javascript
import PropTypes from 'prop-types';

const MyComponent = ({ title, items, onClose }) => {
  return <div>{title}</div>;
};

MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array,
  onClose: PropTypes.func,
};

MyComponent.defaultProps = {
  items: [],
  onClose: () => {},
};

export default MyComponent;
```

---

## 🧪 Ejecutar Tests

```bash
# Todos los tests
npm run test

# Tests en modo watch
npm run test -- --watch

# Cobertura de tests
npm run test:coverage

# UI interactiva
npm run test:ui
```

---

## 📋 Checklist para Nuevo Código

Antes de hacer commit:

- [ ] ¿Usé constantes en lugar de hardcoded values?
- [ ] ¿Extraje lógica en un hook si es reutilizable?
- [ ] ¿Agregué PropTypes al componente?
- [ ] ¿Los tests pasan sin warning?
- [ ] ¿El código sigue el estilo del proyecto?

---

## ⚠️ Errores Comunes

### ❌ Hardcoded Colors
```javascript
// NO HAGAS ESTO
style={{ color: '#d10c2b' }}

// HAGA ESTO
import { COLORS } from '../constants/theme';
style={{ color: COLORS.primary }}
```

### ❌ Lógica en Componentes
```javascript
// NO HAGAS ESTO (lógica de carrusel directamente en componente)
const [index, setIndex] = useState(0);
const next = () => setIndex(i => (i + 1) % items.length);

// HAGA ESTO (usar hook)
import { useCarousel } from '../hooks';
const { index, next } = useCarousel(items.length);
```

### ❌ Sin Validación de Props
```javascript
// NO HAGAS ESTO
const MyComponent = ({ title, items }) => {
  return <div>{title}</div>;
};

// HAGA ESTO
MyComponent.propTypes = {
  title: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
};
```

---

## 📚 Recursos

- **Constantes**: `src/constants/theme.js`
- **Hooks**: `src/hooks/index.js`
- **Validadores**: `src/validators/propValidators.js`
- **Documentación Completa**: `REFACTORING_SUMMARY.md`
- **Guía de Testing**: `TESTING_DOCUMENTATION.md`

---

**¡Listo para codificar! 🚀**
