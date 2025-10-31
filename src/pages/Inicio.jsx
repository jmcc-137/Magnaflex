import React from 'react'
import FadeInText from '../components/FadeInText';
import SliderProductos from '../components/SliderProductos';
import ServiciosSection from '../components/ServiciosSection';
import Footer from '../components/Footer';
import ServiciosCorporativosSection from '../components/ServiciosCorporativosSection';
import SucursalesSection from '../components/SucursalesSection';
const Inicio = () => {
  return (
    <>
  <section className="relative w-full min-h-[40vh] sm:min-h-screen flex items-center justify-center py-24 sm:py-0">
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
  <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-4 sm:px-6 py-8 sm:py-20">
        {/* Izquierda: textos */}
  <div className="flex-1 flex flex-col items-center sm:items-start text-center sm:text-left text-white max-w-xl mt-8 sm:mt-0">
          <FadeInText delay={0.4}>
          <h1 className="text-2xl sm:text-4xl md:text-6xl font-extrabold mb-4 sm:mb-6 leading-tight">
            MAGNAFLEX ES TU ALIADO<br />IDEAL EN SOLUCIONES<br />HIDRÁULICAS
          </h1>
          </FadeInText>
          <FadeInText delay={0.5}>

             <p className="text-base sm:text-lg md:text-2xl mb-4 sm:mb-8">Calidad, servicio y confianza</p>

          </FadeInText>


          <FadeInText delay={0.6}>

         <div className="flex gap-3 sm:gap-6 flex-wrap justify-center sm:justify-start mt-2">
            <button className="bg-[#d10c2b] text-white font-semibold rounded-full px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg shadow-lg hover:bg-[#b80a24] transition">Obtén una cotización gratis</button>
            <button className="border-2 border-white text-white font-semibold rounded-full px-4 sm:px-8 py-2 sm:py-4 text-base sm:text-lg shadow-lg hover:bg-white hover:text-black transition">Llámamos ahora</button>
          </div>

          </FadeInText>
   
        </div>
        {/* Derecha: espacio para imagen de persona */}
  <div className="flex-1 flex items-center justify-center min-h-[200px] sm:min-h-[400px]">
      
        </div>
      </div>
  </section>
  {/* Sección de productos tipo carrusel */}
  <SliderProductos />

  <ServiciosSection />
  <ServiciosCorporativosSection />
  <SucursalesSection />
  <Footer />
  </>
  );
}

export default Inicio
