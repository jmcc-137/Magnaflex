
import React from 'react';
import { IoMdConstruct } from "react-icons/io";
import { MdAgriculture } from "react-icons/md";
import { GiFactory } from "react-icons/gi";
import { FaTruck } from "react-icons/fa";

const servicios = [
  {
    titulo: 'Construcción',
    descripcion: 'Soluciones resistentes para soportar las condiciones más desafiantes en obras y proyectos de infraestructura.',
    imagen: '/tractor.jpg',
  },
  {
    titulo: 'Agricultura',
    descripcion: 'Productos diseñados para maximizar la eficiencia y reducir los tiempos de inactividad.',
    imagen: '/agricultura.jpg',
  },
  {
    titulo: 'Industria',
    descripcion: 'Componentes que garantizan precisión y durabilidad en procesos industriales críticos.',
    imagen: '/industria.webp',
  },
  {
    titulo: 'Automotriz',
    descripcion: 'Productos que brindan seguridad y eficiencia en el sector automotriz.',
    imagen: '/automotriz.avif',
  },
];

const ServicioCard = ({ titulo, descripcion, imagen }) => (
  <div
    className="relative rounded-2xl overflow-hidden shadow-lg flex items-center justify-center min-h-[220px] h-48 sm:h-56 md:h-64 lg:h-72 transition-transform duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
    style={{ backgroundImage: `url(${imagen})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
  >
    <div className="absolute inset-0 bg-black/50 transition duration-300 hover:bg-black/30" />
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
      <h3 className="text-white text-xl md:text-2xl font-bold text-center drop-shadow-lg mb-2">{titulo}</h3>
      <p className="text-white text-base md:text-lg text-center drop-shadow-lg">{descripcion}</p>
    </div>
  </div>
);

const ServiciosSection = () => (
  <section className="w-full py-12 bg-[#23272A] flex flex-col items-center justify-center">
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-white mb-8 max-w-3xl mx-auto">
      Fabricamos mangueras de alta calidad<br />que garantizan seguridad y durabilidad en todos los rubros.
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-7xl px-2 mb-8 relative">
      {servicios.map((s, i) => {
        // Definir el arco con transformaciones
        let arco = 'translateY(0px) scale(1)';
        if (typeof window !== 'undefined') {
          if (window.innerWidth >= 1024) {
            arco = [
              'translateY(40px) scale(0.95)',
              'translateY(0px) scale(1)',
              'translateY(0px) scale(1)',
              'translateY(40px) scale(0.95)',
            ][i];
          } else if (window.innerWidth >= 640) {
            arco = [
              'translateY(24px) scale(0.97)',
              'translateY(0px) scale(1)',
              'translateY(0px) scale(1)',
              'translateY(24px) scale(0.97)',
            ][i];
          }
        }
        return (
          <div
            key={i}
            style={{ transform: arco, zIndex: i === 1 || i === 2 ? 2 : 1 }}
            className="transition-transform duration-500"
          >
            <ServicioCard {...s} />
          </div>
        );
      })}
    </div>
    <button className="mt-4 px-8 py-3 bg-white text-[#003366] font-semibold rounded-full shadow border border-[#4C4C4C] hover:bg-[#FFD700] transition">
      Explora nuestros servicios ➔
    </button>
  </section>
);

export default ServiciosSection;
