
import React from 'react';
import { sucursales } from '../data/data_sucursales';
import { useLanguage } from '../hooks';
import { BRANCHES_TRANSLATIONS } from '../data/translations';

const SucursalCard = ({ nombre, direccion, telefono, mapa, embed, language, t, flag }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start w-full max-w-md mx-auto mb-6">
    <div className="flex items-center gap-2 mb-2">
      <span className="text-3xl">{flag}</span>
      <h3 className="text-xl font-bold text-[#003366]">{nombre}</h3>
    </div>
    <p className="text-gray-700 mb-1">{direccion}</p>
    <p className="text-gray-700 mb-2">Tel: {telefono}</p>
    <a href={mapa} target="_blank" rel="noopener noreferrer" className="text-[#D32F2F] font-semibold hover:underline mb-4">{t('sucursales.viewMap', 'Ver en Google Maps')}</a>
    {embed && (
      <div className="w-full rounded-xl overflow-hidden mt-2">
        <iframe
          src={embed}
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title={`Mapa de ${nombre}`}
        />
      </div>
    )}
  </div>
);

const SucursalesSection = () => {
  const { language, t } = useLanguage();
  const translatedBranches = BRANCHES_TRANSLATIONS[language] || BRANCHES_TRANSLATIONS.es;
  
  return (
  <section className="w-full py-12 bg-[#F2F2F2] flex flex-col items-center justify-center">
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-[#23272A] mb-8 max-w-3xl mx-auto">
      {t('sucursales.title', 'Nuestras Sucursales')}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-2 mb-8">
      {translatedBranches.map((s, i) => (
        <SucursalCard key={i} nombre={s.nombre} direccion={s.direccion} telefono={s.telefono} flag={s.flag} mapa={sucursales[i].mapa} embed={sucursales[i].embed} language={language} t={t} />
      ))}
    </div>
  </section>
  );
};

export default SucursalesSection;
