import React, { useState, useRef } from 'react';
import { FaVolumeMute, FaVolumeUp, FaBullseye, FaEye } from 'react-icons/fa';
import { COLORS, GRADIENTS } from '../constants/theme';

const MisionVision = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <>
      {/* Sección: Misión */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8" style={{ background: GRADIENTS.redTint }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Contenido Izquierda */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl" style={{ color: COLORS.primary }}>
                  <FaBullseye />
                </div>
                <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: COLORS.primary }}>EL OBJETIVO</p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: COLORS.darkText }}>Nuestra Misión</h2>
              <p className="text-lg leading-relaxed" style={{ color: COLORS.gray700 }}>
                Ofrecer productos hidráulicos e industriales de la más alta calidad a precios competitivos, respaldados por un servicio excepcional. Nos esforzamos por ser más que un proveedor, queremos ser tu socio de confianza, acompañándote en cada etapa de tu proyecto, desde la selección de productos hasta la instalación y el mantenimiento.
              </p>
            </div>

            {/* Video Derecha */}
            <div className="flex-1 w-full">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-900 aspect-video">
                <video
                  ref={videoRef}
                  src="/mision-video.mp4"
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Visión */}
      <section className="w-full py-16 sm:py-20 px-4 sm:px-6 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12">
            {/* Contenido Derecha */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="text-4xl" style={{ color: COLORS.primary }}>
                  <FaEye />
                </div>
                <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: COLORS.primary }}>LA PERSPECTIVA</p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: COLORS.darkText }}>Nuestra Visión</h2>
              <p className="text-lg leading-relaxed" style={{ color: COLORS.gray700 }}>
                Creemos en construir relaciones duraderas basadas en la confianza y el entendimiento mutuo. Ya sea que necesites productos para un proyecto específico o busques un proveedor confiable para tu negocio, en MagnaFlex encontrarás la <span className="font-bold" style={{ color: COLORS.primary }}>calidad, innovación y servicio</span> que mereces.
              </p>
            </div>

            {/* Video Izquierda */}
            <div className="flex-1 w-full">
              <div className="relative rounded-lg overflow-hidden shadow-xl bg-gray-900 aspect-video">
                <video
                  src="/vision-video.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  controls
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MisionVision;
