import React, { useState, useRef } from 'react';
import { FaVolumeMute, FaVolumeUp, FaBullseye, FaEye } from 'react-icons/fa';
import { COLORS, GRADIENTS } from '../constants/theme';
import { useLanguage } from '../hooks';
import { MISSION_VISION_TRANSLATIONS } from '../data/translations';

const MisionVision = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);
  const { language } = useLanguage();
  const t = MISSION_VISION_TRANSLATIONS[language] || MISSION_VISION_TRANSLATIONS.es;

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
                <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: COLORS.primary }}>{t.mission_label}</p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: COLORS.darkText }}>{t.mission_title}</h2>
              <p className="text-lg leading-relaxed" style={{ color: COLORS.gray700 }}>
                {t.mission_desc}
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
                <p className="text-sm font-semibold tracking-wide uppercase" style={{ color: COLORS.primary }}>{t.vision_label}</p>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold mb-6" style={{ color: COLORS.darkText }}>{t.vision_title}</h2>
              <p className="text-lg leading-relaxed" style={{ color: COLORS.gray700 }}>
                {t.vision_desc.split(t.vision_highlight).map((part, i) => (
                  <span key={i}>
                    {part}
                    {i === 0 && <span className="font-bold" style={{ color: COLORS.primary }}>{t.vision_highlight}</span>}
                  </span>
                ))}
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
