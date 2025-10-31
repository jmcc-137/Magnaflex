import React from 'react';
import { FaHeadset, FaTools, FaTruckMoving, FaRegCheckCircle } from 'react-icons/fa';

const serviciosCorporativos = [
  {
    titulo: 'Asesoría técnica',
    descripcion: 'Sabemos que elegir los productos adecuados es clave para el éxito de tus proyectos.',
    puntos: [],
    imagen: '/Tecnica.jpg',
    icono: <FaHeadset className="text-3xl text-[#23272A]" />,
  },
  {
    titulo: 'Instalación y Mantenimiento',
    descripcion: 'La correcta instalación y el mantenimiento regular son esenciales para maximizar la vida útil y el rendimiento de tus maquinarias.',
    puntos: [],
    imagen: '/instalacion.jpeg',
    icono: <FaTools className="text-3xl text-[#23272A]" />,
  },
  {
    titulo: 'Envíos a Nivel Nacional',
    descripcion: 'Llevamos la calidad de MagnaFlex a cada rincón del país. Con nuestro servicio de envíos a nivel nacional.',
    puntos: [],
    imagen: '/envios.png',
    icono: <FaTruckMoving className="text-3xl text-[#23272A]" />,
  },
  {
    titulo: 'Garantías',
    descripcion: 'En MagnaFlex, respaldamos la calidad de nuestros productos con garantías sólidas y transparentes.',
    puntos: [],
    imagen: '/garantias.jpg',
    icono: <FaRegCheckCircle className="text-3xl text-[#23272A]" />,
  },
];

const ServicioFila = ({ titulo, descripcion, puntos, imagen, icono, invertido }) => (
  <div className={`flex flex-col md:flex-row items-center justify-between bg-[#BDBDBD] rounded-2xl shadow-md p-6 mb-8 transition-all duration-300 ${invertido ? 'md:flex-row-reverse' : ''}`}>
    <div className="flex-1 flex flex-col items-start justify-center text-left px-2 md:px-6">
      <div className="mb-2">{icono}</div>
      <h3 className="text-2xl font-bold text-[#23272A] mb-2">{titulo}</h3>
      <p className="text-[#23272A] text-base md:text-lg mb-2">{descripcion}</p>
      {puntos.length > 0 && (
        <ul className="list-disc pl-5 text-[#23272A]">
          {puntos.map((p, idx) => (
            <li key={idx} className="font-semibold">{p}</li>
          ))}
        </ul>
      )}
    </div>
    <div className="flex-1 flex items-center justify-center w-full md:w-1/2 mt-4 md:mt-0">
      <img src={imagen} alt={titulo} className="rounded-xl object-cover w-full h-40 md:h-48 lg:h-56 shadow-lg" />
    </div>
  </div>
);

const ServiciosCorporativosSection = () => (
  <section className="w-full py-12 bg-[#F5F6F8] flex flex-col items-center justify-center">
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-[#23272A] mb-8 max-w-3xl mx-auto">
      Servicios que ofrecemos
    </h2>
    <div className="w-full max-w-6xl mx-auto">
      {serviciosCorporativos.map((servicio, idx) => (
        <ServicioFila key={idx} {...servicio} invertido={idx % 2 === 1} />
      ))}
    </div>
  </section>
);

export default ServiciosCorporativosSection;
