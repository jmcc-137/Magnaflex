import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { productos } from '../data/data_products';

const SliderProductos = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % productos.length);
  const prev = () => setIndex((i) => (i - 1 + productos.length) % productos.length);

  return (
    <section className="relative w-full flex flex-col items-center justify-center py-20 bg-white">
      <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">MODELOS</h2>
      <div className="relative w-full max-w-6xl mx-auto flex items-center justify-center overflow-x-visible">
        <button onClick={prev} className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-3 text-3xl z-10 hover:bg-gray-100">&#60;</button>
        <div className="w-full flex items-center justify-center overflow-x-visible">
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
              {/* Producto actual */}
              <div className="flex flex-col md:flex-row items-center justify-center w-[60%] md:w-[65%] gap-8 bg-white rounded-xl shadow-xl p-8 z-20">
                <img
                  src={productos[index].imagen}
                  alt={productos[index].nombre}
                  className="w-[420px] h-[260px] object-contain rounded shadow-lg"
                />
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-2">{productos[index].nombre}</h3>
                  <p className="text-xl text-gray-700 mb-4">{productos[index].descripcion}</p>
                  <button className="bg-[#FFD700] text-black font-semibold rounded-full px-10 py-4 text-xl shadow hover:bg-[#FFC300] transition">Descubre el modelo</button>
                </div>
              </div>
              {/* Producto siguiente parcialmente visible */}
              <div className="hidden md:flex flex-col items-center justify-center w-[35%] opacity-40 -ml-12 pointer-events-none select-none">
                <img
                  src={productos[(index + 1) % productos.length].imagen}
                  alt={productos[(index + 1) % productos.length].nombre}
                  className="w-[320px] h-[180px] object-contain rounded shadow-lg"
                />
                <h4 className="text-xl font-bold mt-2">{productos[(index + 1) % productos.length].nombre}</h4>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
        <button onClick={next} className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full shadow p-3 text-3xl z-10 hover:bg-gray-100">&#62;</button>
      </div>
    </section>
  );
};

export default SliderProductos;
