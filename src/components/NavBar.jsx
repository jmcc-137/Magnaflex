
import { FaDumbbell } from 'react-icons/fa';
import { FaFacebookSquare } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";
import { FaTiktok } from "react-icons/fa";
import { navbarLinks } from '../data/data.js';
import { NavLink } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { PiShoppingCartThin } from 'react-icons/pi';
import { MdMenu } from 'react-icons/md';
import { useState } from 'react';
import PropTypes from 'prop-types';
import ResponsiveMenu from './ResponsiveMenu.jsx';
import { MdClose } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import { COLORS, SHADOWS } from '../constants/theme';
import { useScrollOpacity } from '../hooks';
import { navLinkPropType } from '../validators/propValidators';
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const navOpacity = useScrollOpacity(120);

  return (
    <>
      <nav
        className="w-full fixed top-0 left-0 z-50 transition-colors duration-500"
        style={{
          background: `rgba(255,255,255,${navOpacity})`,
          boxShadow: navOpacity > 0.1 ? SHADOWS.navbar : SHADOWS.sm,
          backdropFilter: navOpacity > 0.1 ? 'blur(2px)' : 'none',
        }}
      >
        <div className="max-w-[1700px] w-full mx-auto grid grid-cols-3 items-center py-6 px-4 sm:py-4 sm:px-4 md:px-8 md:py-6 lg:py-8 lg:px-10">
          {/* Logo MAGNAFLEX */}
          <div className="flex items-center gap-2 sm:gap-4 md:gap-6 justify-start">
            {/* Aquí va el logo MAGNAFLEX */}
              <div className="flex items-center gap-1">
                <div className="w-32 h-10 rounded flex items-center justify-center">
                    {navOpacity >= 1 ? (
                      <img src="/logo2.png" alt="Logo Alternativo" className="h-40" />
                    ) : (
                      <img src="/logo.png" alt="Logo" className="h-40" />
                    )}
                </div>
                <span className={`font-bold text-2xl tracking-wide -ml-3 ${navOpacity < 0.5 ? 'text-white' : 'text-black'}`}>MAGNAFLEX</span>
              </div>
          </div>

          {/* Menú principal */}
          <ul className="hidden lg:flex items-center justify-center gap-8 md:gap-16 lg:gap-20 text-base md:text-lg lg:text-xl font-medium">
            {navbarLinks.map((item) => (
              <li key={item.id} className="relative flex items-center justify-center">
                <NavLink
                  to={item.link}
                  className={({ isActive }) =>
                    `px-2 py-1 font-medium transition-colors duration-200 ${navOpacity < 0.5 ? 'text-white' : 'text-black'} ${isActive ? 'text-primary' : ''}`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Línea superior */}
                      <span
                        className={`absolute left-0 right-0 top-0 h-[3px] rounded transition-all duration-300 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
                        style={{ transformOrigin: 'left', background: COLORS.primary }}
                      />
                      {/* Texto */}
                      {item.title}
                      {/* Línea inferior */}
                      <span
                        className={`absolute left-0 right-0 bottom-0 h-[3px] rounded transition-all duration-300 ${isActive ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'}`}
                        style={{ transformOrigin: 'left', background: COLORS.primary }}
                      />
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Redes sociales */}
          <div className="hidden lg:flex items-center gap-4 md:gap-8 lg:gap-16 justify-end">
            <div className="flex gap-6">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <FaFacebookSquare className="text-black text-2xl" />
              </div>
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <LuInstagram className="text-black text-2xl" />
              </div>
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <FaTiktok className="text-black text-2xl" />
              </div>
            </div>
          </div>

          {/* Menú móvil hamburguesa */}
          <div className="lg:hidden ml-30 flex items-center justify-end w-full z-50 relative">
            {!open ? (
              <div onClick={() => setOpen(!open)} className="cursor-pointer">
                <MdMenu className={`text-4xl transition-colors duration-200 ${navOpacity < 0.5 ? 'text-white' : 'text-black'}`} />
              </div>
            ) : null}
          </div>
        </div>
      </nav>
      {/* Mobile Sidebar section */}
      <ResponsiveMenu open={open} navbarLinks={navbarLinks} setOpen={setOpen} navOpacity={navOpacity} />
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
