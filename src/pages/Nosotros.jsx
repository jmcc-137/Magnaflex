import React from 'react'
import { usePageTitle, useLanguage } from '../hooks';
import { FaWhatsapp } from 'react-icons/fa';
import { MdCheckCircle, MdPeople, MdBuild, MdLightbulb } from 'react-icons/md';
import { FiPackage, FiTruck, FiZap } from 'react-icons/fi';
import { COLORS, GRADIENTS, SHADOWS } from '../constants/theme';
import SloganCarousel from '../components/SloganCarousel';
import MisionVision from '../components/MisionVision';
import Pieza3D from '../components/Pieza3D';
import Logo3D from '../components/Logo3D';
import Estadisticas from '../components/Estadisticas';
import Footer from '../components/Footer';
import { PAGE_NAMES } from '../components/PageHeaderIcons';

const Nosotros = () => {
  usePageTitle(PAGE_NAMES.nosotros);
  const { t } = useLanguage();
  
  return (
    <div className="w-full min-h-screen flex flex-col bg-white">
      <div className="grow">
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
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">{t('nosotros.what_title')}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                {t('nosotros.what_desc')}
              </p>
            </div>

            {/* Logo 3D Derecha */}
            <div className="flex-1 w-full flex justify-center">
              <Logo3D />
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
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-12 text-center">{t('nosotros.values_title')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4" style={{ color: COLORS.primary }}>
                <MdCheckCircle />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.darkText }}>{t('nosotros.quality')}</h3>
              <p className="leading-relaxed" style={{ color: COLORS.gray600 }}>{t('nosotros.quality_desc')}</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4" style={{ color: COLORS.primary }}>
                <MdPeople />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.darkText }}>{t('nosotros.commitment')}</h3>
              <p className="leading-relaxed" style={{ color: COLORS.gray600 }}>{t('nosotros.commitment_desc')}</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4" style={{ color: COLORS.primary }}>
                <MdBuild />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.darkText }}>{t('nosotros.service')}</h3>
              <p className="leading-relaxed" style={{ color: COLORS.gray600 }}>{t('nosotros.service_desc')}</p>
            </div>
            <div className="p-8 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
              <div className="text-5xl mb-4" style={{ color: COLORS.primary }}>
                <MdLightbulb />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.darkText }}>{t('nosotros.innovation')}</h3>
              <p className="leading-relaxed" style={{ color: COLORS.gray600 }}>{t('nosotros.innovation_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: ¿Qué ofrecemos? */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center" style={{ color: COLORS.darkText }}>{t('nosotros.offer_title')}</h2>
          <p className="text-center text-lg mb-12" style={{ color: COLORS.gray600 }}>{t('nosotros.offer_subtitle')}</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg border-l-4" style={{ background: GRADIENTS.redTintBr, borderColor: COLORS.primary }}>
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-1" style={{ color: COLORS.primary }}>
                  <FiPackage />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.darkText }}>{t('nosotros.hoses')}</h3>
                  <p style={{ color: COLORS.gray700 }}>{t('nosotros.hoses_desc')}</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-lg border-l-4" style={{ background: GRADIENTS.redTintBr, borderColor: COLORS.primary }}>
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-1" style={{ color: COLORS.primary }}>
                  <FiTruck />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.darkText }}>{t('nosotros.fittings')}</h3>
                  <p style={{ color: COLORS.gray700 }}>{t('nosotros.fittings_desc')}</p>
                </div>
              </div>
            </div>
            <div className="p-8 rounded-lg border-l-4" style={{ background: GRADIENTS.redTintBr, borderColor: COLORS.primary }}>
              <div className="flex items-start gap-4">
                <div className="text-4xl mt-1" style={{ color: COLORS.primary }}>
                  <FiZap />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2" style={{ color: COLORS.darkText }}>{t('nosotros.accessories')}</h3>
                  <p style={{ color: COLORS.gray700 }}>{t('nosotros.accessories_desc')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Nosotros

