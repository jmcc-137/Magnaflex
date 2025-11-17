import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';
import { slogans } from '../data/data_slogans';
import { COLORS, GRADIENTS, ANIMATIONS } from '../constants/theme';
import { useCarousel, useTouchGestures, useLanguage } from '../hooks';
import { SLOGAN_TRANSLATIONS } from '../data/translations';
import { slidePropType } from '../validators/propValidators';

const SloganCarousel = () => {
  const { index, goTo } = useCarousel(slogans.length, ANIMATIONS.carouselSpeed, true);
  const { handleTouchStart, handleTouchMove, handleTouchEnd, getSwipeDirection } = useTouchGestures();
  const { language } = useLanguage();
  const translatedSlogans = SLOGAN_TRANSLATIONS[language] || SLOGAN_TRANSLATIONS.es;

  const onTouchEnd = () => {
    const direction = getSwipeDirection();
    if (direction === 'left') goTo((index + 1) % slogans.length);
    if (direction === 'right') goTo((index - 1 + slogans.length) % slogans.length);
    handleTouchEnd();
  };

  return (
    <section className="relative w-full h-screen bg-gray-200 overflow-hidden">
      <div
        className="relative w-full h-full overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={`${language}-${slogans[index].id}`}
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.6 }}
            className="relative w-full h-full"
            style={{
              backgroundImage: `url(${slogans[index].imagen})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          >
            <div className="absolute inset-0 bg-black/50" />
            
            {/* Contenido - Posicionado a la izquierda */}
            <div className="absolute inset-0 flex flex-col items-start justify-center p-6 sm:p-10 md:p-16 lg:p-20 max-w-2xl">
              <motion.h2 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 drop-shadow-lg"
              >
                {translatedSlogans[index].titulo}
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg sm:text-xl md:text-2xl text-white/90 leading-relaxed drop-shadow-lg"
              >
                {translatedSlogans[index].subtitulo}
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                
              >
                <img src={slogans[index].logo} alt="MAGNAFLEX" className="h-16 sm:h-20 md:h-75 object-contain" />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-20">
        {slogans.map((s, i) => (
          <button key={s.id} onClick={() => goTo(i)} className={`w-3 h-3 rounded-full transition`} style={{ background: i === index ? COLORS.primary : 'rgba(255, 255, 255, 0.6)' }} />
        ))}
      </div>
    </section>
  );
};

SloganCarousel.propTypes = {
  // El componente no acepta props externas, pero validamos los datos internos
};

SloganCarousel.defaultProps = {
  // Sin props por defecto
};

export default SloganCarousel;
