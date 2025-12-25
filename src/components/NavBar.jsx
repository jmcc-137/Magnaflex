import { FaDumbbell } from 'react-icons/fa';
import { navbarLinks } from '../data/data.js';
import { NavLink, useLocation } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';
import { useEffect } from 'react';
import PropTypes from 'prop-types';
import ResponsiveMenu from './ResponsiveMenu.jsx';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS, SHADOWS } from '../constants/theme';
import { useScrollOpacity } from '../hooks';
import { navLinkPropType } from '../validators/propValidators';
import ProductDropdown from './ProductDropdown';
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navOpacity = useScrollOpacity(120);
  const location = useLocation();

  // Usar siempre el efecto scroll
  // Opaco solo en detalle de producto: /productos/:id
  const isProductDetail = /^\/productos\/.+/.test(location.pathname);
  const navbarOpacity = isProductDetail ? 1 : navOpacity;
  const navbarBackground = `rgba(255,255,255,${navbarOpacity})`;
  const navbarShadow = navbarOpacity > 0.1 ? SHADOWS.navbar : SHADOWS.sm;
  const navbarBackdrop = navbarOpacity > 0.1 ? 'blur(2px)' : 'none';

  // Al cambiar de ruta (incluido "Ver más"), asegura scroll activo y cierra menú móvil
  useEffect(() => {
    // Rehabilitar el scroll de la página
    if (document && document.body) {
      document.body.style.overflow = 'auto';
    }
    // Cerrar el menú responsive si estaba abierto
    if (open) setOpen(false);
    // Llevar al inicio con scroll suave para modo de lectura
    if (typeof window !== 'undefined' && window.scrollTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location.pathname, location.search, location.hash]);

  return (
    <>
      <nav
        className="w-full fixed top-0 left-0 z-50 transition-colors duration-500"
        style={{
          background: navbarBackground,
          boxShadow: navbarShadow,
          backdropFilter: navbarBackdrop,
        }}
      >
        <div className="max-w-[1700px] w-full mx-auto flex items-center justify-between gap-6 sm:gap-8 lg:gap-12 py-5 px-4 sm:py-4 sm:px-6 md:px-8 md:py-5 lg:py-6 lg:px-10">
          {/* Logo MAGNAFLEX */}
          <div className="flex items-center">
            <div className="w-32 h-10 rounded flex items-center justify-center">
              {navbarOpacity >= 1 ? (
                <img src="/logo2.png" alt="Logo Alternativo" className="h-40 w-auto" />
              ) : (
                <img src="/logo.png" alt="Logo" className="h-40 w-auto" />
              )}
            </div>
          </div>

          {/* Menú principal */}
          <ul className="hidden lg:flex items-center justify-end gap-10 md:gap-18 lg:gap-24 text-base md:text-lg lg:text-xl font-medium relative z-10">
            {navbarLinks.map((item) => (
              <li key={item.id} className="relative flex items-center justify-center">
                {item.submenu ? (
                  <ProductDropdown navOpacity={navbarOpacity} submenu={item.submenu} isActive={location.pathname === '/productos'} />
                ) : (
                  <NavLink
                    to={item.link}
                    className={({ isActive }) =>
                      `px-2 py-1 font-medium transition-colors duration-200 ${navbarOpacity < 0.5 ? 'text-white' : 'text-black'} ${isActive ? 'text-primary' : ''}`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        {/* Línea superior */}
                        <span
                          className={`absolute left-0 right-0 top-0 h-[3px] rounded transition-all duration-300 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
                          style={{ transformOrigin: 'left', background: COLORS.primary }}
                        />
                        {/* Texto en español */}
                        {item.title}
                        {/* Línea inferior */}
                        <span
                          className={`absolute left-0 right-0 bottom-0 h-[3px] rounded transition-all duration-300 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
                          style={{ transformOrigin: 'left', background: COLORS.primary }}
                        />
                      </>
                    )}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          {/* Menú móvil hamburguesa */}
          <div className="lg:hidden ml-30 flex items-center justify-end w-full z-50 relative">
            {!open ? (
              <div onClick={() => setOpen(!open)} className="cursor-pointer">
                <MdMenu className={`text-4xl transition-colors duration-200 ${navbarOpacity < 0.5 ? 'text-white' : 'text-black'}`} />
              </div>
            ) : null}
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} navbarLinks={navbarLinks} setOpen={setOpen} navOpacity={navbarOpacity} />
    </>
  );
};

NavBar.propTypes = {
  // El componente no acepta props
};

NavBar.defaultProps = {
  // Sin props por defecto
};

export default NavBar;