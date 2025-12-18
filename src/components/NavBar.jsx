import { FaDumbbell } from 'react-icons/fa';
import { FaFacebookSquare } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
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
import { useScrollOpacity, useLanguage } from '../hooks';
import { navLinkPropType } from '../validators/propValidators';
import LanguageSwitcher from './LanguageSwitcher';
import ProductDropdown from './ProductDropdown';
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navOpacity = useScrollOpacity(120);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  // Usar siempre el efecto scroll
  // Opaco solo en detalle de producto: /productos/:id
  const isProductDetail = /^\/productos\/.+/.test(location.pathname);
  const navbarOpacity = isProductDetail ? 1 : navOpacity;
  const navbarBackground = `rgba(255,255,255,${navbarOpacity})`;
  const navbarShadow = navbarOpacity > 0.1 ? SHADOWS.navbar : SHADOWS.sm;
  const navbarBackdrop = navbarOpacity > 0.1 ? 'blur(2px)' : 'none';

  // Ajuste de color para iconos sociales según fondo de la barra
  const iconBaseBg = navbarOpacity < 0.5 ? 'rgba(0,0,0,0.45)' : 'rgba(255,255,255,0.95)';
  const iconHoverBg = navbarOpacity < 0.5 ? 'rgba(209,12,43,0.35)' : 'rgba(209,12,43,0.12)';
  const iconColor = navbarOpacity < 0.5 ? COLORS.white : COLORS.primary;
  const iconBorder = navbarOpacity < 0.5 ? 'rgba(255,255,255,0.35)' : 'rgba(209,12,43,0.65)';
  const iconShadow = navbarOpacity < 0.5 ? '0 6px 18px rgba(0,0,0,0.35)' : '0 10px 18px rgba(209,12,43,0.18)';

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
        <div className="max-w-[1700px] w-full mx-auto grid grid-cols-3 items-center py-6 px-4 sm:py-4 sm:px-4 md:px-8 md:py-6 lg:py-8 lg:px-10">
          {/* Logo MAGNAFLEX */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 justify-start">
            {/* Aquí va el logo MAGNAFLEX */}
              <div className="flex items-center gap-1">
                <div className="w-32 h-10 rounded flex items-center justify-center">
                    {navbarOpacity >= 1 ? (
                      <img src="/logo2.png" alt="Logo Alternativo" className="h-40" />
                    ) : (
                      <img src="/logo.png" alt="Logo" className="h-40" />
                    )}
                </div>
                <span className={`font-bold text-2xl tracking-wide -ml-3 ${navbarOpacity < 0.5 ? 'text-white' : 'text-black'}`}>MAGNAFLEX</span>
              </div>
          </div>

          {/* Menú principal */}
          <ul className="hidden lg:flex items-center justify-center gap-8 md:gap-16 lg:gap-20 text-base md:text-lg lg:text-xl font-medium relative z-10">
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
                        {/* Texto traducido */}
                        {t(`navbar.${item.id === 1 ? 'inicio' : item.id === 2 ? 'nosotros' : item.id === 3 ? 'productos' : 'contactos'}`)}
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

          {/* Redes sociales */}
          <div className="hidden lg:flex items-center gap-4 md:gap-8 lg:gap-16 justify-end">
            <LanguageSwitcher 
              currentLanguage={language} 
              onLanguageChange={setLanguage}
              navOpacity={navbarOpacity}
              isResponsive={false}
            />
            <div className="flex gap-6">
              <a
                href="https://www.facebook.com/share/17tmnTEatD/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--hover-bg)] hover:shadow-xl"
                style={{
                  background: iconBaseBg,
                  color: iconColor,
                  border: `1px solid ${iconBorder}`,
                  boxShadow: iconShadow,
                  '--hover-bg': iconHoverBg,
                }}
                aria-label="Facebook"
              >
                <FaFacebookSquare className="text-xl" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--hover-bg)] hover:shadow-xl"
                style={{
                  background: iconBaseBg,
                  color: iconColor,
                  border: `1px solid ${iconBorder}`,
                  boxShadow: iconShadow,
                  '--hover-bg': iconHoverBg,
                }}
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="text-xl" />
              </a>
              <a
                href="https://www.instagram.com/magnaflex.ve?igsh=dW4xd3BramU2OXd4"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--hover-bg)] hover:shadow-xl"
                style={{
                  background: iconBaseBg,
                  color: iconColor,
                  border: `1px solid ${iconBorder}`,
                  boxShadow: iconShadow,
                  '--hover-bg': iconHoverBg,
                }}
                aria-label="Instagram"
              >
                <LuInstagram className="text-xl" />
              </a>
              <a
                href="https://www.tiktok.com/@magnaflex?_r=1&_t=ZM-91VZQpvSZXn"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:bg-[var(--hover-bg)] hover:shadow-xl"
                style={{
                  background: iconBaseBg,
                  color: iconColor,
                  border: `1px solid ${iconBorder}`,
                  boxShadow: iconShadow,
                  '--hover-bg': iconHoverBg,
                }}
                aria-label="TikTok"
              >
                <FaTiktok className="text-xl" />
              </a>
            </div>
          </div>

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