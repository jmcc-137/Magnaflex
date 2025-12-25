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

        {/* Precios (estándar y especial si disponibles) */}
        {product.precio && (
          <div className="mb-4 flex flex-wrap gap-2 items-center">
            <span
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold"
              style={{ backgroundColor: `${COLORS.primary}10`, color: COLORS.primary }}
            >
              <span>Estándar:</span>
              <span>
                {product.precio.currency || ''} {typeof product.precio.amount === 'number' ? product.precio.amount.toFixed(2) : product.precio.amount}
                {product.precio.unit ? ` / ${product.precio.unit}` : ''}
              </span>
            </span>
            {product.precio.specialAmount !== undefined && (
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold bg-green-50 text-green-700 border border-green-200">
                <span>Especial:</span>
                <span>
                  {product.precio.currency || ''} {typeof product.precio.specialAmount === 'number' ? product.precio.specialAmount.toFixed(2) : product.precio.specialAmount}
                  {product.precio.unit ? ` / ${product.precio.unit}` : ''}
                </span>
              </span>
            )}
          </div>
        )}

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
            className="group relative w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold overflow-hidden bg-[#d10c2b] text-white transition-transform duration-150 active:scale-[0.99]"
            style={{ border: `2px solid ${COLORS.primary}` }}
          >
            <span className="absolute inset-0 bg-[#ad0a24] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden />
            <FaFileContract size={14} className="relative z-10" />
            <span className="relative z-10 text-sm">Ver más</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
