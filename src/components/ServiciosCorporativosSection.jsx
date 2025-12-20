import React from 'react';
import { FaHeadset, FaTruckMoving, FaRegCheckCircle } from 'react-icons/fa';
import { serviciosCorporativos } from '../data/data_serviciosCorporativos';
import { useLanguage } from '../hooks';
import { CORPORATE_SERVICE_TRANSLATIONS } from '../data/translations';

const iconosMap = {
  FaHeadset: <FaHeadset className="text-3xl text-[#23272A]" />,
  FaTruckMoving: <FaTruckMoving className="text-3xl text-[#23272A]" />,
  FaRegCheckCircle: <FaRegCheckCircle className="text-3xl text-[#23272A]" />,
};

const ServicioFila = ({ titulo, descripcion, puntos, imagen, icono, invertido }) => (
  <div className={`flex flex-col md:flex-row items-center justify-between bg-[#BDBDBD] rounded-2xl shadow-md p-6 md:p-8 mb-8 transition-all duration-300 ${invertido ? 'md:flex-row-reverse' : ''}`}>
    <div className="flex-1 flex flex-col items-start justify-center text-left px-2 md:px-6">
      <div className="mb-2">{iconosMap[icono] || icono}</div>
      <h3 className="text-2xl font-bold text-[#23272A] mb-2">{titulo}</h3>
      <p className="text-[#23272A] text-base md:text-lg mb-2">{descripcion}</p>
      {puntos && puntos.length > 0 && (
        <ul className="list-disc pl-5 text-[#23272A]">
          {puntos.map((p, idx) => (
            <li key={idx} className="font-semibold">{p}</li>
          ))}
        </ul>
      )}
    </div>
    <div className="flex-1 flex items-center justify-center w-full md:w-1/2 mt-4 md:mt-0">
      <img src={imagen} alt={titulo} className="rounded-xl object-cover object-center w-full max-w-[560px] h-56 md:h-64 lg:h-72 shadow-lg" />
    </div>
  </div>
);

const ServiciosCorporativosSection = () => {
  const { language, t } = useLanguage();
  const translatedServices = CORPORATE_SERVICE_TRANSLATIONS[language] || CORPORATE_SERVICE_TRANSLATIONS.es;
  
  return (
  <section className="w-full py-12 bg-[#F5F6F8] flex flex-col items-center justify-center">
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-[#23272A] mb-8 max-w-3xl mx-auto">
      {t('serviciosCorporativos.title')}
    </h2>
    <div className="w-full max-w-6xl mx-auto">
      {translatedServices.map((servicio, idx) => (
        <ServicioFila key={idx} {...servicio} imagen={serviciosCorporativos[idx].imagen} icono={serviciosCorporativos[idx].icono} invertido={idx % 2 === 1} />
      ))}
    </div>
  </section>
  );
};

export default ServiciosCorporativosSection;
