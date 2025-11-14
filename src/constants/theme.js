// src/constants/theme.js
// Colores principales de la aplicación
export const COLORS = {
  primary: '#d10c2b',
  primaryDark: '#b80a24',
  primaryLight: '#ff5252',
  
  secondary: '#D32F2F',
  
  dark: '#1a1f2e',
  darkText: '#1a1f2e',
  
  white: '#ffffff',
  offWhite: '#f2f2f2',
  
  gray50: '#fafafa',
  gray100: '#f3f4f6',
  gray200: '#e5e7eb',
  gray300: '#d1d5db',
  gray600: '#4b5563',
  gray700: '#374151',
  gray900: '#111827',
  
  black: '#000000',
  blackLight: '#222222',
};

// Animaciones
export const ANIMATIONS = {
  carouselSpeed: 3500, // ms
  rotationSpeed: 8, // segundos (3D cube)
  misionVisionSpeed: 0.8, // segundos (transiciones de texto)
  navbarTransition: 500, // ms
};

// Breakpoints (deben coincidir con Tailwind)
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
};

// Espaciado
export const SPACING = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
};

// Bordes redondeados
export const BORDER_RADIUS = {
  sm: '4px',
  md: '8px',
  lg: '12px',
  xl: '16px',
  full: '9999px',
};

// Sombras
export const SHADOWS = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
  navbar: '0 2px 16px 0 rgba(0, 0, 0, 0.07)',
  navbarScroll: '0 4px 24px 0 rgba(0, 0, 0, 0.12)',
};

// Gradientes
export const GRADIENTS = {
  redTint: 'linear-gradient(to right, rgba(209, 12, 43, 0.05), rgba(209, 12, 43, 0.1))',
  redTintBr: 'linear-gradient(to bottom right, rgba(209, 12, 43, 0.1), rgba(209, 12, 43, 0.05))',
  darkOverlay: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4), transparent)',
};

// Z-Index
export const Z_INDEX = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  fixed: 30,
  overlay: 40,
  modal: 50,
  tooltip: 60,
  navbar: 100,
};
