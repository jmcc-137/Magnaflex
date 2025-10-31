import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productos } from '../data/data_products';

const SliderProductos = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const next = () => setIndex((i) => (i + 1) % productos.length);
  const prev = () => setIndex((i) => (i - 1 + productos.length) % productos.length);

  // Touch events para deslizar en móvil
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = () => {
    if (touchStartX.current !== null && touchEndX.current !== null) {
      const diff = touchStartX.current - touchEndX.current;
      if (diff > 50) next(); // desliza a la izquierda
      if (diff < -50) prev(); // desliza a la derecha
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Movimiento automático
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % productos.length);
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-10 md:py-20 bg-[#222222] min-h-[520px] md:min-h-[600px]">
      <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 md:mb-12 text-center text-[#F2F2F2]">MODELOS</h2>
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center overflow-x-visible px-2 sm:px-6">
        {/* Flechas solo en tablet y desktop */}
        <button
          onClick={prev}
          className="hidden sm:block absolute left-4 sm:left-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full shadow-lg p-50 sm:p-4 text-2xl sm:text-4xl z-30 hover:bg-yellow-200 transition border border-gray-300"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)' }}
        >&#60;</button>
        <div
          className="w-full flex items-center justify-center overflow-x-visible"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Carrusel con producto actual y el siguiente parcialmente visible */}
          <AnimatePresence mode="wait">
            <motion.div
              key={productos[index].id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="flex items-center w-full gap-0"
              style={{ minHeight: '340px' }}
            >
              {/* Producto anterior parcialmente visible */}
              <div className="hidden md:flex flex-col items-center justify-center w-[25%] opacity-30 -mr-8 pointer-events-none select-none">
                <img
                  src={productos[(index - 1 + productos.length) % productos.length].imagen}
                  alt={productos[(index - 1 + productos.length) % productos.length].nombre}
                  className="w-full max-w-[220px] md:max-w-[280px] h-40 md:h-40 object-cover rounded shadow-lg border-4 border-[#003366] bg-[#F2F2F2] mx-auto"
                  style={{ minWidth: '120px', minHeight: '120px' }}
                />
                <h4 className="text-lg font-bold mt-2 text-[#4C4C4C]">{productos[(index - 1 + productos.length) % productos.length].nombre}</h4>
              </div>
              {/* Producto actual */}
              <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-[65%] gap-4 md:gap-8 bg-white rounded-xl shadow-xl p-4 md:p-8 z-20">
                <img
                  src={productos[index].imagen}
                  alt={productos[index].nombre}
                  className="w-full max-w-[320px] md:max-w-[400px] h-40 md:h-40 object-cover rounded shadow-lg border-4 border-[#003366] bg-[#F2F2F2] mx-auto"
                  style={{ minWidth: '160px', minHeight: '160px' }}
                />
                <div className="flex-1 text-center md:text-left mt-4 md:mt-0">
                  <h3 className="text-lg font-bold mb-2 text-[#4C4C4C]">{productos[index].nombre}</h3>
                  <p className="text-base text-[#4C4C4C] mb-4">{productos[index].descripcion}</p>
                  <button className="bg-[#D32F2F] text-white font-semibold rounded-full px-6 py-2 sm:px-10 sm:py-4 text-base sm:text-xl shadow hover:bg-[#b80a24] transition">Más</button>
                </div>
              </div>
              {/* Producto siguiente parcialmente visible */}
              <div className="hidden md:flex flex-col items-center justify-center w-[25%] opacity-30 -ml-8 pointer-events-none select-none">
                <img
                  src={productos[(index + 1) % productos.length].imagen}
                  alt={productos[(index + 1) % productos.length].nombre}
                  className="w-full max-w-[220px] md:max-w-[280px] h-40 md:h-40 object-cover rounded shadow-lg border-4 border-[#003366] bg-[#F2F2F2] mx-auto"
                  style={{ minWidth: '120px', minHeight: '120px' }}
                />
                <h4 className="text-lg font-bold mt-2 text-[#4C4C4C]">{productos[(index + 1) % productos.length].nombre}</h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button
          onClick={next}
          className="hidden sm:block absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur rounded-full shadow-lg p-2 sm:p-4 text-2xl sm:text-4xl z-30 hover:bg-yellow-200 transition border border-gray-300"
          style={{ boxShadow: '0 4px 24px 0 rgba(0,0,0,0.12)' }}
        >&#62;</button>
      </div>
    </section>
  );
};

export default SliderProductos;
