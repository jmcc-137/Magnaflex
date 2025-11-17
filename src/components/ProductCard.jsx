import React from 'react';
import { FaFileContract } from 'react-icons/fa';
import { COLORS } from '../constants/theme';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product, index }) => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate(`/productos/${index}`, { state: { product } });
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden border border-gray-100">
      {/* Imagen del producto */}
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden relative">
        {product.imagen ? (
          <img 
            src={product.imagen} 
            alt={product.nombre} 
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="flex items-center justify-center text-gray-400">
            <span className="text-5xl">📦</span>
          </div>
        )}
      </div>

      {/* Contenido */}
      <div className="p-6">
        {/* Nombre del producto */}
        <h3 className="text-lg font-bold text-gray-900 mb-4 line-clamp-2">
          {product.nombre}
        </h3>

        {/* Descripción breve */}
        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
          {product.descripcion}
        </p>

        {/* Especificaciones técnicas */}
        {product.especificaciones && (
          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="text-xs font-bold text-gray-700 mb-3 uppercase tracking-wider">
              Especificaciones
            </h4>
            <ul className="space-y-2">
              {product.especificaciones.slice(0, 3).map((spec, idx) => (
                <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-red-600 mt-0.5">✓</span>
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Botón de acción */}
        <div className="pt-4 border-t border-gray-100">
          <button
            onClick={handleViewMore}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all duration-200"
            style={{
              backgroundColor: COLORS.primary,
              color: 'white',
              border: `2px solid ${COLORS.primary}`
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'white';
              e.target.style.color = COLORS.primary;
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = COLORS.primary;
              e.target.style.color = 'white';
            }}
          >
            <FaFileContract size={14} />
            <span className="text-sm">Ver más</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
