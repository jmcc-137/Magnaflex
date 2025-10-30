import React from 'react'
import FadeInText from '../components/FadeInText';
import SliderProductos from '../components/SliderProductos';
const Inicio = () => {
  return (
    <>
    <section className="relative w-full min-h-screen flex items-center justify-center ">
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
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-7xl px-6 py-20">
        {/* Izquierda: textos */}
        <div className="flex-1 text-left text-white max-w-xl">
          <FadeInText delay={0.}>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            MAGNAFLEX ES TU ALIADO<br />IDEAL EN SOLUCIONES<br />HIDRÁULICAS
          </h1>
          </FadeInText>
          <FadeInText delay={0.3}>

             <p className="text-lg md:text-2xl mb-8">Calidad, servicio y confianza</p>

          </FadeInText>


          <FadeInText delay={0.5}>

         <div className="flex gap-6 flex-wrap">
            <button className="bg-[#d10c2b] text-white font-semibold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-[#b80a24] transition">Obtén una cotización gratis</button>
            <button className="border-2 border-white text-white font-semibold rounded-full px-8 py-4 text-lg shadow-lg hover:bg-white hover:text-black transition">Llámamos ahora</button>
          </div>

          </FadeInText>
   
        </div>
        {/* Derecha: espacio para imagen de persona */}
        <div className="flex-1 flex items-center justify-center min-h-[400px]">
      
        </div>
      </div>
  </section>
  {/* Sección de productos tipo carrusel */}
  <SliderProductos />
  </>
  );
}

export default Inicio
