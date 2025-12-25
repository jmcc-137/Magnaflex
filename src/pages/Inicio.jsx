import React from 'react'
import { usePageTitle, useLanguage, useScrollBounceOnLoad } from '../hooks';
import FadeInText from '../components/FadeInText';
import SliderProductos from '../components/SliderProductos';
import ServiciosSection from '../components/ServiciosSection';
import Footer from '../components/Footer';
import ServiciosCorporativosSection from '../components/ServiciosCorporativosSection';
import { PAGE_NAMES } from '../components/PageHeaderIcons';

const Inicio = () => {
  usePageTitle(PAGE_NAMES.inicio);
  const { t } = useLanguage();
  // Rebote un poco más rápido (pero suave)
  useScrollBounceOnLoad({ distance: 500, delayDown: 150, holdMs: 900, durationDown: 500, durationUp: 700 });
  
  return (
    <>
      <section className="relative w-full min-h-screen flex items-center justify-center pt-20 sm:pt-24 pb-12">
      {/* Fondo principal */}
      
      <div className="absolute inset-0 w-full h-full bg-white/0">
        {/* Video de fondo */}
        <video
          src="/fondo.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        />
      </div>
  <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-6xl px-4 sm:px-6 py-10 sm:py-16 gap-6">
        {/* Bloque de textos centrado */}
  <div className="flex flex-col items-center text-center text-white max-w-4xl">
          <FadeInText delay={0.4}>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-[1.05] text-balance">
            {t('inicio.hero_title')}
          </h1>
          </FadeInText>
          <FadeInText delay={0.5}>

             <p className="text-base sm:text-lg md:text-2xl mb-4 sm:mb-8 max-w-3xl">{t('inicio.hero_subtitle')}</p>

          </FadeInText>


          <FadeInText delay={0.6}>

         <div className="flex gap-3 sm:gap-6 flex-wrap justify-center mt-2">
            <button className="group relative overflow-hidden bg-[#d10c2b] text-white font-semibold rounded-full px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg shadow-lg transition-colors duration-300">
              <span className="relative z-10">{t('inicio.cta_quote')}</span>
              <span className="absolute inset-0 origin-left scale-x-0 bg-[#b80a24] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </button>
            <button className="group relative overflow-hidden border-2 border-white text-white font-semibold rounded-full px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg shadow-lg transition-colors duration-300">
              <span className="relative z-10 transition-colors duration-300 group-hover:text-[#d10c2b]">{t('inicio.cta_call')}</span>
              <span className="absolute inset-0 origin-left scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </button>
          </div>

          </FadeInText>
   
        </div>
      </div>
  </section>
  {/* Sección de productos tipo carrusel */}
  <SliderProductos />

  <ServiciosSection />
  <ServiciosCorporativosSection />
  {/* Sucursales eliminadas */}
  <Footer />
  </>
  );
}

export default Inicio
