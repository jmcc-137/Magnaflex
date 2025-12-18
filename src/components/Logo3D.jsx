import React from 'react';
import { COLORS, ANIMATIONS } from '../constants/theme';

const layers = 22; // cantidad de capas para la "extrusión"

const Logo3D = () => {
  const startY = Math.random() * 360; // ángulo inicial aleatorio en Y
  const startX = (Math.random() * 16) - 8; // ligera inclinación en X
  const duration = ANIMATIONS.rotationSpeed * (0.8 + Math.random() * 0.6); // velocidad variable
  const direction = Math.random() > 0.5 ? 'normal' : 'reverse';

  const layerElems = Array.from({ length: layers }).map((_, i) => {
    const depth = i * 3; // separación en Z
    const opacity = 1 - i / layers;
    const color = i === 0 ? COLORS.primary : COLORS.primaryDark;

    return (
      <div
        key={i}
        className="logo3d-layer logo3d-mask"
        style={{
          transform: `translateZ(${depth}px)`,
          opacity,
          WebkitOpacity: opacity,
          filter:
            i === 0
              ? 'drop-shadow(0 0 3px rgba(255,255,255,0.95)) drop-shadow(0 0 7px rgba(255,255,255,0.5)) drop-shadow(0 8px 16px rgba(0,0,0,0.35))'
              : 'none',
          backgroundColor: color,
        }}
      />
    );
  });

  return (
    <div className="w-full h-full flex items-center justify-center">
      <style>{`
        @keyframes spinY {
          0% { transform: rotateY(0deg) rotateX(0deg); }
          50% { transform: rotateY(180deg) rotateX(6deg); }
          100% { transform: rotateY(360deg) rotateX(0deg); }
        }

        .logo3d-container {
          perspective: 1200px;
          width: 520px;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .logo3d {
          width: 1000px;
          height: 500px;
          position: relative;
          transform-style: preserve-3d;
          animation: spinY ${ANIMATIONS.rotationSpeed}s infinite linear;
        }

        .logo3d-layer {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 16px;
        }

        /* Usar el logo como máscara para formar el volumen */
        .logo3d-mask {
          -webkit-mask: url('/logo.png') center/contain no-repeat;
          mask: url('/logo.png') center/contain no-repeat;
          background-clip: padding-box;
        }
      `}</style>

      <div className="logo3d-container">
        <div
          className="logo3d"
          style={{
            animation: `spinY ${duration}s infinite linear`,
            animationDirection: direction,
            transform: `rotateY(${startY}deg) rotateX(${startX}deg)`,
          }}
        >
          {layerElems}
        </div>
      </div>
    </div>
  );
};

export default Logo3D;
