import { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MdExpandMore } from 'react-icons/md';
import { COLORS } from '../constants/theme';
import { useLanguage } from '../hooks';

const ProductDropdown = ({ navOpacity, submenu, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();
  const dropdownRef = useRef(null);
  const location = useLocation();

  const dropdownVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      pointerEvents: 'none',
    },
    visible: {
      opacity: 1,
      y: 0,
      pointerEvents: 'auto',
      transition: {
        duration: 0.2,
        ease: 'easeOut',
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      pointerEvents: 'none',
      transition: {
        duration: 0.15,
        ease: 'easeIn',
      },
    },
  };

  // Cerrar el dropdown cuando se hace click fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [isOpen]);

  // Extraer la categoría de la URL para marcar en el dropdown
  const getActiveLinkFromUrl = () => {
    const hash = location.hash;
    if (hash) {
      return hash.substring(1); // Remover el #
    }
    return null;
  };

  // Obtener el nombre traducido de la categoría
  const getCategoryTranslation = (categoryId) => {
    return t(`productos.cat_${categoryId}`, categoryId);
  };

  const activeLink = getActiveLinkFromUrl();

  return (
    <div
      className="relative group"
      ref={dropdownRef}
    >
      <button
        className={`px-2 py-1 font-medium transition-colors duration-200 flex items-center gap-1 relative ${
          navOpacity < 0.5 ? 'text-white' : 'text-black'
        } ${isActive ? 'text-primary' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Línea superior */}
        <span
          className={`absolute left-0 right-0 top-0 h-[3px] rounded transition-all duration-300 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
          style={{ transformOrigin: 'left', background: COLORS.primary }}
        />
        {t('navbar.productos', 'Productos')}
        <MdExpandMore
          className={`text-xl transition-transform duration-300 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
        />
        {/* Línea inferior */}
        <span
          className={`absolute left-0 right-0 bottom-0 h-[3px] rounded transition-all duration-300 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
          style={{ transformOrigin: 'left', background: COLORS.primary }}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={dropdownVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-2xl border-t-4 z-50"
            style={{ borderTopColor: COLORS.primary }}
          >
            <div className="py-3">
              {submenu.map((item) => {
                const itemId = item.link.split('#')[1]; // Extraer el id del hash
                const isItemActive = activeLink === itemId;

                return (
                  <NavLink
                    key={item.id}
                    to={item.link}
                    className={`block px-6 py-2 transition-colors duration-150 ${
                      isItemActive
                        ? 'bg-red-50 text-red-600 font-semibold border-l-4 border-red-600'
                        : 'text-gray-800 hover:bg-blue-50'
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="text-sm">{getCategoryTranslation(itemId)}</span>
                  </NavLink>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProductDropdown;
