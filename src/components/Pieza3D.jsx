import React from 'react';
import { COLORS, ANIMATIONS } from '../constants/theme';

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
          width: 300px;
          height: 300px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pieza-3d {
          width: 200px;
          height: 200px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate3D ${ANIMATIONS.rotationSpeed}s infinite linear;
        }

        .pieza-face {
          position: absolute;
          width: 200px;
          height: 200px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 80px;
          font-weight: bold;
          border: 3px solid ${COLORS.primary};
          background: rgba(209, 12, 43, 0.1);
          border-radius: 8px;
        }

        .face-front {
          transform: translateZ(100px);
          background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryLight});
          color: white;
        }

        .face-back {
          transform: rotateY(180deg) translateZ(100px);
          background: linear-gradient(135deg, ${COLORS.primary}, ${COLORS.primaryDark});
          color: white;
        }

        .face-right {
          transform: rotateY(90deg) translateZ(100px);
          background: linear-gradient(135deg, ${COLORS.primaryLight}, ${COLORS.primary});
          color: white;
        }

        .face-left {
          transform: rotateY(-90deg) translateZ(100px);
          background: linear-gradient(135deg, ${COLORS.primaryDark}, ${COLORS.primary});
          color: white;
        }

        .face-top {
          transform: rotateX(90deg) translateZ(100px);
          background: linear-gradient(135deg, ${COLORS.primary}, #a00820);
          color: white;
        }

        .face-bottom {
          transform: rotateX(-90deg) translateZ(100px);
          background: linear-gradient(135deg, #ff7373, ${COLORS.primary});
          color: white;
        }
      `}</style>

      <div className="pieza-3d-container">
        <div className="pieza-3d">
          {/* Cara frontal */}
          <div className="pieza-face face-front">
            🔧
          </div>

          {/* Cara trasera */}
          <div className="pieza-face face-back">
            ⚙️
          </div>

          {/* Cara derecha */}
          <div className="pieza-face face-right">
            🔩
          </div>

          {/* Cara izquierda */}
          <div className="pieza-face face-left">
            ⚡
          </div>

          {/* Cara superior */}
          <div className="pieza-face face-top">
            🏭
          </div>

          {/* Cara inferior */}
          <div className="pieza-face face-bottom">
            🛠️
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pieza3D;
