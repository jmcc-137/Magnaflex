
import React from 'react';

const sucursales = [
  {
    nombre: 'Sucursal Barinas',
    direccion: '5201, Barinas, Venezuela',
    telefono: '(0273) 123-4567',
    mapa: 'https://www.google.com/maps?q=Barinas,+Venezuela',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.9649640037!2d-70.2360472!3d8.6228576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e7c1e7e7e7e7e7e%3A0x7e7e7e7e7e7e7e7e!2sBarinas%2C%20Venezuela!5e0!3m2!1ses!2sve!4v1698777777777!5m2!1ses!2sve'
  },
  {
    nombre: 'Sucursal CDMX',
    direccion: 'Av. Insurgentes Sur 1234, Ciudad de México',
    telefono: '(55) 1234-5678',
    mapa: 'https://www.google.com/maps?q=Av.+Insurgentes+Sur+1234,+Ciudad+de+México',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.9649640037!2d-99.2360472!3d19.4328576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ff7e7e7e7e7e%3A0x7e7e7e7e7e7e7e7e!2sAv.+Insurgentes+Sur+1234,+Ciudad+de+México!5e0!3m2!1ses!2smx!4v1698777777777!5m2!1ses!2smx'
  },
  {
    nombre: 'Sucursal Monterrey',
    direccion: 'Av. Constitución 567, Monterrey, NL',
    telefono: '(81) 8765-4321',
    mapa: 'https://www.google.com/maps?q=Av.+Constitución+567,+Monterrey,+NL',
    embed: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.9649640037!2d-100.2360472!3d25.6868576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662957e7e7e7e7e%3A0x7e7e7e7e7e7e7e7e!2sAv.+Constitución+567,+Monterrey,+NL!5e0!3m2!1ses!2smx!4v1698777777777!5m2!1ses!2smx'
  }
];

const SucursalCard = ({ nombre, direccion, telefono, mapa, embed }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col items-start w-full max-w-md mx-auto mb-6">
    <h3 className="text-xl font-bold text-[#003366] mb-2">{nombre}</h3>
    <p className="text-gray-700 mb-1">{direccion}</p>
    <p className="text-gray-700 mb-2">Tel: {telefono}</p>
    <a href={mapa} target="_blank" rel="noopener noreferrer" className="text-[#D32F2F] font-semibold hover:underline mb-4">Ver en Google Maps</a>
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

const SucursalesSection = () => (
  <section className="w-full py-12 bg-[#F2F2F2] flex flex-col items-center justify-center">
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center text-[#23272A] mb-8 max-w-3xl mx-auto">
      Nuestras Sucursales
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-2 mb-8">
      {sucursales.map((s, i) => (
        <SucursalCard key={i} {...s} />
      ))}
    </div>
  </section>
);

export default SucursalesSection;
