import { AnimatePresence, motion } from 'framer-motion';
import { MdClose, MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import { COLORS } from '../constants/theme';
import { useLanguage } from '../hooks';
import LanguageSwitcher from './LanguageSwitcher';
import { useState } from 'react';

const ResponsiveMenu = ({ open, navbarLinks, setOpen, navOpacity = 0 }) => {
  const { language, setLanguage, t } = useLanguage();
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [openNested, setOpenNested] = useState(null);
  
  const menuAnimation = {
    initial: { x: '100%', opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: '100%', opacity: 0 },
    transition: { duration: 0.3, ease: 'easeInOut' },
  };

  const overlayAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 },
  };

  const getNavLabel = (item) => {
    // Mapear a las mismas keys usadas en el NavBar
    if (item.id === 1) return t('navbar.inicio');
    if (item.id === 2) return t('navbar.nosotros');
    if (item.id === 3) return t('navbar.productos');
    if (item.id === 4) return t('navbar.contactos');
    return item.title;
  };

  const handleSubmenuClick = (itemId) => {
    setOpenSubmenu(openSubmenu === itemId ? null : itemId);
    setOpenNested(null);
  };

  const handleNestedClick = (subItemId) => {
    setOpenNested(openNested === subItemId ? null : subItemId);
  };

  return (
    <AnimatePresence mode="wait">
      {open && (
        <>
          {/* Overlay oscuro de fondo */}
          <motion.div
            {...overlayAnimation}
            className="fixed inset-0 bg-black/40"
            style={{ zIndex: 40 }}
            onClick={() => setOpen(false)}
          />

          {/* Panel deslizable desde la derecha */}
          <motion.div
            {...menuAnimation}
            className="fixed top-0 right-0 h-screen w-80 sm:w-96 bg-white shadow-2xl overflow-y-auto flex flex-col"
            style={{ zIndex: 50 }}
          >
            {/* Botón de cerrar - esquina superior derecha */}
            <button
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 z-10"
              aria-label="Cerrar menú"
            >
              <MdClose className="text-3xl" style={{ color: COLORS.primary }} />
            </button>

            {/* Contenido del menú */}
            <div className="flex flex-col pt-16 px-6 pb-6">
              {/* Logo/título */}
              <div className="mb-8 pb-6 border-b" style={{ borderColor: COLORS.gray200 }}>
                <h2 className="text-2xl font-bold" style={{ color: COLORS.primary }}>
                  MAGNAFLEX
                </h2>
              </div>

              {/* Items del menú */}
              <nav className="flex-1">
                <ul className="flex flex-col gap-0">
                  {navbarLinks.map((item) => (
                    <li key={`menu-item-${item.id}`}>
                      {item.submenu ? (
                        <div>
                          <button
                            onClick={() => handleSubmenuClick(item.id)}
                            className="w-full flex items-center justify-between py-4 px-4 text-base font-medium border-b transition-colors duration-200 hover:bg-gray-100"
                            style={{ 
                              color: COLORS.darkText,
                              borderColor: COLORS.gray200
                            }}
                          >
                            <span>{getNavLabel(item)}</span>
                            <MdExpandMore
                              className={`transition-transform duration-300 ${
                                openSubmenu === item.id ? 'rotate-180' : 'rotate-0'
                              }`}
                            />
                          </button>
                          <AnimatePresence>
                            {openSubmenu === item.id && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                              >
                                <ul className="flex flex-col gap-0 bg-gray-50">
                                  {item.submenu.map((subitem) => (
                                    <li key={`submenu-item-${subitem.id}`}>
                                      {subitem.subcategories ? (
                                        <div>
                                          <button
                                            onClick={() => handleNestedClick(subitem.id)}
                                            className="w-full flex items-center justify-between py-3 px-6 text-sm font-medium border-b transition-colors duration-200 hover:bg-gray-100 ml-4"
                                            style={{ color: COLORS.darkText, borderColor: COLORS.gray200 }}
                                          >
                                            <span>{subitem.title}</span>
                                            <MdExpandMore
                                              className={`transition-transform duration-300 ${openNested === subitem.id ? 'rotate-180' : 'rotate-0'}`}
                                            />
                                          </button>
                                          <AnimatePresence>
                                            {openNested === subitem.id && (
                                              <motion.ul
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden bg-gray-50 ml-8"
                                              >
                                                {subitem.subcategories.map((sc) => (
                                                  <li key={`subcat-${sc.id}`}>
                                                    <Link
                                                      to={sc.link}
                                                      className="block py-2 px-6 text-xs font-medium border-b transition-colors duration-200 hover:bg-blue-50"
                                                      style={{ color: COLORS.darkText, borderColor: COLORS.gray200 }}
                                                      onClick={() => {
                                                        setOpen(false);
                                                        setOpenSubmenu(null);
                                                        setOpenNested(null);
                                                      }}
                                                    >
                                                      {sc.title}
                                                    </Link>
                                                  </li>
                                                ))}
                                              </motion.ul>
                                            )}
                                          </AnimatePresence>
                                        </div>
                                      ) : (
                                        <Link
                                          to={subitem.link}
                                          className="block py-3 px-6 text-sm font-medium border-b transition-colors duration-200 hover:bg-blue-50 ml-4"
                                          style={{ color: COLORS.darkText, borderColor: COLORS.gray200 }}
                                          onClick={() => {
                                            setOpen(false);
                                            setOpenSubmenu(null);
                                          }}
                                        >
                                          {subitem.title}
                                        </Link>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <Link
                          to={item.link}
                          className="block py-4 px-4 text-base font-medium border-b transition-colors duration-200 hover:bg-gray-100"
                          style={{ 
                            color: COLORS.darkText,
                            borderColor: COLORS.gray200
                          }}
                          onClick={() => setOpen(false)}
                        >
                          {getNavLabel(item)}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Sección inferior - Idioma y contacto */}
              <div className="pt-0 border-t space-y-4" style={{ borderColor: COLORS.gray200 }}>
                {/* Language Switcher */}
                <div className="px-4 pt-4">
                  <LanguageSwitcher 
                    currentLanguage={language}
                    onLanguageChange={(newLang) => {
                      setLanguage(newLang);
                    }}
                    navOpacity={1}
                    isResponsive={true}
                  />
                </div>

                {/* Email */}
                <a
                  href="mailto:sales@magnaflex.com"
                  className="flex items-center gap-2 px-4 py-3 rounded-lg transition-colors duration-200 hover:bg-gray-100"
                  style={{ color: COLORS.primary }}
                >
                  <span>📧</span>
                  <span className="text-sm font-medium">sales@magnaflex.com</span>
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
