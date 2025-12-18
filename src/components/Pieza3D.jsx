import React from 'react';
import { COLORS, ANIMATIONS } from '../constants/theme';

// Componente mantenido por compatibilidad; considera usar Logo3D
const Pieza3D = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <style>{`
        @keyframes rotate3D {
          0% {
            transform: rotateX(0deg) rotateY(0deg) rotateZ(0deg);
          }
          100% {
            transform: rotateX(360deg) rotateY(360deg) rotateZ(0deg);
          }
        }

        .pieza-3d-container {
          perspective: 1000px;
          width: 320px;
          height: 320px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pieza-3d {
          width: 220px;
          height: 220px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate3D ${ANIMATIONS.rotationSpeed}s infinite linear;
        }

        .pieza-face {
          position: absolute;
          width: 220px;
          height: 220px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: ${COLORS.primary} url('/logo.png') center center / 78% no-repeat;
          border: 3px solid ${COLORS.primaryDark};
          border-radius: 14px;
          box-shadow: 0 12px 30px rgba(0,0,0,0.35);
        }

        .face-front { transform: translateZ(110px); }
        .face-back { transform: rotateY(180deg) translateZ(110px); }
        .face-right { transform: rotateY(90deg) translateZ(110px); }
        .face-left { transform: rotateY(-90deg) translateZ(110px); }
        .face-top { transform: rotateX(90deg) translateZ(110px); }
        .face-bottom { transform: rotateX(-90deg) translateZ(110px); }
      `}</style>

      <div className="pieza-3d-container">
        <div className="pieza-3d">
          <div className="pieza-face face-front" />
          <div className="pieza-face face-back" />
          <div className="pieza-face face-right" />
          <div className="pieza-face face-left" />
          <div className="pieza-face face-top" />
          <div className="pieza-face face-bottom" />
        </div>
      </div>
    </div>
  );
};

export default Pieza3D;
