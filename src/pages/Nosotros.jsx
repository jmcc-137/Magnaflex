import React from 'react'
import { FaWhatsapp } from 'react-icons/fa';
import { MdCheckCircle, MdPeople, MdBuild, MdLightbulb } from 'react-icons/md';
import { FiPackage, FiTruck, FiZap } from 'react-icons/fi';
import { COLORS, GRADIENTS, SHADOWS } from '../constants/theme';
import SloganCarousel from '../components/SloganCarousel';
import MisionVision from '../components/MisionVision';
import Pieza3D from '../components/Pieza3D';
import Estadisticas from '../components/Estadisticas';
import Footer from '../components/Footer';

const Nosotros = () => {
  return (
    <div className="w-full bg-white">
      {/* Carrusel de eslóganes - Pantalla completa */}
      <section className="relative w-full h-screen flex items-center justify-center">
        <SloganCarousel />
      </section>

      {/* Sección: ¿Qué es MAGNAFLEX? */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Texto Izquierda */}
            <div className="flex-1">
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">¿Qué es MAGNAFLEX?</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                MAGNAFLEX es una empresa dedicada a la fabricación y distribución de productos hidráulicos e industriales de alta calidad. Su catálogo incluye mangueras, conexiones, accesorios y sistemas hidráulicos e industriales para diversos sectores y aplicaciones.
              </p>
            </div>

            {/* Pieza 3D Derecha */}
            <div className="flex-1 w-full flex justify-center">
              <Pieza3D />
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Estadísticas */}
      <Estadisticas />

      {/* Sección: Misión y Visión */}
      <MisionVision />

      {/* Sección: Valores */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8" style={{ background: GRADIENTS.redTint }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4" style={{ color: COLORS.primary }}>
                <MdCheckCircle />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.darkText }}>CALIDAD</h3>
              <p className="leading-relaxed" style={{ color: COLORS.gray600 }}>Garantizamos la calidad de nuestros productos, cumpliendo con los más altos estándares y certificaciones nacionales e internacionales.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4" style={{ color: COLORS.primary }}>
                <MdPeople />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.darkText }}>COMPROMISO</h3>
              <p className="leading-relaxed" style={{ color: COLORS.gray600 }}>Nos comprometemos con la seguridad y satisfacción de clientes, proveedores y colaboradores.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4" style={{ color: COLORS.primary }}>
                <MdBuild />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.darkText }}>SERVICIO</h3>
              <p className="leading-relaxed" style={{ color: COLORS.gray600 }}>Brindamos un servicio personalizado, profesional y eficiente, asesorando en todo el proceso.</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4" style={{ color: COLORS.primary }}>
                <MdLightbulb />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.darkText }}>INNOVACIÓN</h3>
              <p className="leading-relaxed" style={{ color: COLORS.gray600 }}>Siempre a la vanguardia de la tecnología, ofreciendo productos que se adaptan al mercado.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: ¿Qué ofrecemos? */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center" style={{ color: COLORS.darkText }}>¿Qué Ofrecemos?</h2>
          <p className="text-center text-lg mb-12" style={{ color: COLORS.gray600 }}>Garantizamos calidad y seguridad en todos nuestros productos</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border-l-4" style={{ background: GRADIENTS.redTintBr, borderColor: COLORS.primary }}>
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-1" style={{ color: COLORS.primary }}>
                  <FiPackage />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.darkText }}>Mangueras Hidráulicas</h3>
                  <p style={{ color: COLORS.gray700 }}>Productos de alta resistencia y durabilidad para aplicaciones industriales.</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-lg border-l-4" style={{ background: GRADIENTS.redTintBr, borderColor: COLORS.primary }}>
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-1" style={{ color: COLORS.primary }}>
                  <FiTruck />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.darkText }}>Acoples y Conexiones</h3>
                  <p style={{ color: COLORS.gray700 }}>Soluciones completas para sistemas hidráulicos integrados.</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-lg border-l-4" style={{ background: GRADIENTS.redTintBr, borderColor: COLORS.primary }}>
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-1" style={{ color: COLORS.primary }}>
                  <FiZap />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.darkText }}>Accesorios e Sistemas</h3>
                  <p style={{ color: COLORS.gray700 }}>Componentes especializados para optimizar rendimiento.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Footer */}
        <Footer/>

    </div>
  )
}

export default Nosotros

