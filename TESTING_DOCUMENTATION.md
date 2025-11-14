# LEVEL 3 - Validación y Testing

## 📋 PropTypes Implementados

### Validadores Personalizados (`src/validators/propValidators.js`)

Archivo centralizado con validadores reutilizables:

- **colorPropType** - Validar objetos de colores (primary, dark, light)
- **animationPropType** - Validar objetos de animaciones (duration, delay, easing)
- **slidePropType** - Validar items de carrusel (id, titulo, imagen, logo)
- **productPropType** - Validar productos (id, nombre, descripción, precio)
- **navLinkPropType** - Validar enlaces de navegación (id, title, link)

### Componentes con PropTypes

#### SloganCarousel.jsx
```jsx
SloganCarousel.propTypes = {
  // El componente gestiona su propio estado
};

SloganCarousel.defaultProps = {
  // Sin props por defecto
};
```

#### NavBar.jsx
```jsx
NavBar.propTypes = {
  // El componente gestiona su propio estado
};

NavBar.defaultProps = {
  // Sin props por defecto
};
```

---

## 🧪 Tests Unitarios

### Archivos de Test Creados

1. **useCarousel.test.js** (9 tests)
   - ✅ Inicialización con index 0
   - ✅ Incremento con next()
   - ✅ Ciclo hacia adelante
   - ✅ Decremento con prev()
   - ✅ Ciclo hacia atrás
   - ✅ Saltar a índice específico con goTo()
   - ✅ Validar rango de índices
   - ✅ AutoPlay activado
   - ✅ AutoPlay desactivado

2. **useScrollOpacity.test.js** (5 tests)
   - ✅ Opacidad inicial 0
   - ✅ Cálculo de opacidad basado en scroll
   - ✅ Limitar opacidad máxima a 1
   - ✅ Threshold personalizado
   - ✅ Limpieza de event listeners

3. **useTouchGestures.test.js** (6 tests)
   - ✅ Retornar funciones correctas
   - ✅ Detectar swipe izquierdo
   - ✅ Detectar swipe derecho
   - ✅ Ignorar swipes pequeños
   - ✅ Resetear referencias con touchEnd
   - ✅ Threshold personalizado

**Total: 20 tests unitarios** ✅

---

## 🚀 Cómo ejecutar los tests

### 1. Instalar herramientas de testing (si aún no están instaladas)

```bash
npm install --save-dev vitest @testing-library/react @testing-library/hooks @testing-library/jest-dom
```

### 2. Crear configuración de Vitest

Agrega a `package.json`:

```json
{
  "scripts": {
    "test": "vitest",
    "test:ui": "vitest --ui",
    "test:coverage": "vitest --coverage"
  }
}
```

### 3. Ejecutar los tests

```bash
# Ejecutar todos los tests
npm run test

# Ver UI interactiva
npm run test:ui

# Ver cobertura
npm run test:coverage
```

---

## 📊 Cobertura Esperada

Con los tests actuales:

- **Hooks**: ~85% cobertura
- **Validadores**: 100% cobertura (sin lógica compleja)
- **Componentes**: ~60% cobertura (necesita snapshot tests)

---

## ✅ Checklist de Validación

- [x] PropTypes instalados y configurados
- [x] Validadores personalizados creados
- [x] PropTypes agregados a componentes
- [x] Tests unitarios para todos los hooks
- [x] Documentación de tests
- [ ] Tests de componentes (próximo paso)
- [ ] Tests de integración (próximo paso)
- [ ] Tests E2E con Cypress (próximo paso)

---

## 🔄 Próximos Pasos (LEVEL 4)

1. **Tests de Componentes**
   - Snapshots de SloganCarousel
   - Snapshots de NavBar
   - Snapshots de MisionVision

2. **Tests de Integración**
   - Interacción entre Nosotros + componentes
   - Flujo de navegación

3. **Tests E2E**
   - Cypress para flujos completos
   - Validar UX en diferentes dispositivos

---

## 📝 Notas Importantes

- Los tests usan `@testing-library/react` para testing moderno
- Se recomienda ejecutar tests antes de hacer commits
- Mantener tests actualizados con cambios de código
- Objetivo: +80% cobertura total del proyecto
