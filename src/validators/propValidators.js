import PropTypes from 'prop-types';

/**
 * Validadores personalizados y comunes para PropTypes
 */

// Validador para un objeto de color
export const colorPropType = PropTypes.shape({
  primary: PropTypes.string.isRequired,
  dark: PropTypes.string.isRequired,
  light: PropTypes.string.isRequired,
});

// Validador para animaciones
export const animationPropType = PropTypes.shape({
  duration: PropTypes.number,
  delay: PropTypes.number,
  easing: PropTypes.string,
});

// Validador para un slide/item de carrusel
export const slidePropType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  titulo: PropTypes.string.isRequired,
  subtitulo: PropTypes.string,
  imagen: PropTypes.string.isRequired,
  logo: PropTypes.string,
});

// Validador para un producto
export const productPropType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string,
  precio: PropTypes.number,
  imagen: PropTypes.string,
  categoria: PropTypes.string,
});

// Validador para un enlace de navegación
export const navLinkPropType = PropTypes.shape({
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
});
