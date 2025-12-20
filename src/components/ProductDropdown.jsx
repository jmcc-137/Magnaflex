import { useState, useEffect, useRef, useMemo } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { MdExpandMore } from 'react-icons/md';
import { COLORS } from '../constants/theme';
import { useLanguage } from '../hooks';

const ProductDropdown = ({ navOpacity, submenu, isActive }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCat, setOpenCat] = useState(null);
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

  const getActiveSubFromUrl = () => {
    const hash = location.hash;
    if (!hash) return null;
    const raw = hash.substring(1);
    const parts = raw.split('&');
    const sub = parts.find((p) => p.startsWith('sub='));
    return sub ? sub.split('=')[1] : null;
  };

  // Obtener el nombre traducido de la categoría
  const getCategoryTranslation = (categoryId) => {
    return t(`productos.cat_${categoryId}`, categoryId);
  };

  const activeLink = getActiveLinkFromUrl();
  const activeSub = getActiveSubFromUrl();

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
                const itemId = item.link.split('#')[1]; // id de categoría
                const isItemActive = activeLink === itemId;
                const isOpenCat = openCat === item.id || (isItemActive && activeSub && item.subcategories);

                return (
                  <div key={item.id}>
                    <div className={`flex items-center justify-between px-6 py-2 ${isItemActive ? 'bg-red-50 text-red-600 font-semibold border-l-4 border-red-600' : 'text-gray-800 hover:bg-blue-50'}`}>
                      <NavLink
                        to={item.link}
                        className="text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {getCategoryTranslation(itemId)}
                      </NavLink>
                      {item.subcategories && (
                        <button
                          className="p-1 rounded hover:bg-gray-100"
                          onClick={() => setOpenCat(isOpenCat ? null : item.id)}
                          aria-label="Expandir subcategorías"
                        >
                          <MdExpandMore className={`transition-transform duration-300 ${isOpenCat ? 'rotate-180' : 'rotate-0'}`} />
                        </button>
                      )}
                    </div>

                    {item.subcategories && isOpenCat && (
                      <div className="pl-6">
                        {item.subcategories.map((sc) => (
                          <NavLink
                            key={`${item.id}-${sc.id}`}
                            to={sc.link}
                            className={`block px-6 py-1.5 text-xs border-l ${activeSub === sc.id ? 'text-red-600 font-semibold border-red-600 bg-red-50' : 'text-gray-700 hover:bg-blue-50 border-gray-200'}`}
                            onClick={() => setIsOpen(false)}
                          >
                            {sc.title}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
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
