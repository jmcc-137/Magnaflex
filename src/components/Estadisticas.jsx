import React from 'react';
import { FaHistory, FaSmile, FaBoxes } from 'react-icons/fa';
import { COLORS, ANIMATIONS } from '../constants/theme';

const Estadisticas = () => {
  const stats = [
    {
      numero: '10',
      label: 'Años de experiencia',
      icon: FaHistory
    },
    {
      numero: '+5K',
      label: 'Clientes satisfechos',
      icon: FaSmile
    },
    {
      numero: '+100',
      label: 'Productos en stock',
      icon: FaBoxes
    }
  ];

  return (
    <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8" style={{ background: COLORS.dark }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div key={idx} className="flex flex-col items-center justify-center text-center">
                <div className="text-5xl sm:text-6xl font-bold mb-4" style={{ color: COLORS.white }}>
                  {stat.numero}
                </div>
                <p className="text-lg sm:text-xl font-semibold" style={{ color: COLORS.gray300 }}>
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
        
        {/* Línea divisora */}
        <div className="my-12 border-t" style={{ borderColor: COLORS.gray700 }}></div>
      </div>
    </section>
  );
};

export default Estadisticas;
