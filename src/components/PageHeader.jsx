import React from 'react';
import PropTypes from 'prop-types';
import { FaBuilding } from 'react-icons/fa';
import { COLORS } from '../constants/theme';

/**
 * Componente PageHeader
 * Muestra el icono de MAGNAFLEX, el nombre del sitio y la sección actual
 * 
 * @param {string} seccion - Nombre de la sección actual (ej: "Inicio", "Nosotros", etc)
 * @param {string} icon - Icono React (opcional)
 */
const PageHeader = ({ seccion, icon: IconComponent = null }) => {
  return (
    <div 
      className="w-full py-3 sm:py-4 px-4 sm:px-6 md:px-8 border-b-2"
      style={{ 
        background: COLORS.white,
        borderColor: COLORS.primary 
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-start gap-3 sm:gap-4">
        {/* Icono MAGNAFLEX */}
        <div 
          className="flex items-center justify-center p-1.5 sm:p-2 rounded-full"
          style={{ background: COLORS.primary + '15' }}
        >
          <FaBuilding 
            className="text-xl sm:text-2xl"
            style={{ color: COLORS.primary }}
          />
        </div>

        {/* Separador */}
        <div 
          className="h-5 sm:h-6 w-px"
          style={{ background: COLORS.gray300 }}
        />

        {/* Nombre del sitio */}
        <span 
          className="text-sm sm:text-base md:text-lg font-bold tracking-wider hidden sm:inline-block"
          style={{ color: COLORS.darkText }}
        >
          MAGNAFLEX
        </span>

        {/* Separador */}
        <div 
          className="h-5 sm:h-6 w-px hidden sm:block"
          style={{ background: COLORS.gray300 }}
        />

        {/* Icono de sección (opcional) */}
        {IconComponent && (
          <div 
            className="text-lg sm:text-xl"
            style={{ color: COLORS.primary }}
          >
            <IconComponent />
          </div>
        )}

        {/* Sección actual */}
        <span 
          className="text-sm sm:text-base font-semibold"
          style={{ color: COLORS.primary }}
        >
          {seccion}
        </span>
      </div>
    </div>
  );
};

PageHeader.propTypes = {
  seccion: PropTypes.string.isRequired,
  icon: PropTypes.elementType,
};

PageHeader.defaultProps = {
  icon: null,
};

export default PageHeader;
