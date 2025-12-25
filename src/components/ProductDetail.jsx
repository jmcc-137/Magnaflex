import React, { useEffect, useMemo, useState } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { FaDownload, FaPhone, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import { COLORS } from '../constants/theme';
import Footer from './Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState(null);

  const product = location.state?.product;

  if (!product) {
    return (
      <div className="pt-40 pb-20 text-center">
        <p className="text-gray-500 text-lg">Producto no encontrado</p>
        <button
          onClick={() => navigate('/productos')}
          className="mt-4 px-6 py-2 bg-primary text-white rounded-lg"
        >
          Volver a Productos
        </button>
      </div>
    );
  }

  const images = [product.imagen, product.imagen, product.imagen, product.imagen];

  // Variantes de precio (si existen)
  const variants = useMemo(() => product?.precio?.variants || [], [product]);

  useEffect(() => {
    if (variants.length && !selectedVariant) {
      setSelectedVariant(variants[0]);
    }
  }, [variants]);

  const activeAmount = selectedVariant?.amount ?? product?.precio?.amount;
  const activeSpecial = selectedVariant?.specialAmount ?? product?.precio?.specialAmount;
  const activeSize = selectedVariant?.size || null;

  return (
    <div className="min-h-screen flex flex-col bg-white pt-32">
      <div className="grow">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate('/productos')}
          className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
        >
          <FaArrowLeft size={14} />
          <span>Volver a Productos</span>
        </button>
      </div>

      {/* Hero Section - Galería + Información */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Columna Izquierda - Galería */}
          <div className="flex flex-col gap-4">
            {/* Imagen principal */}
            <div className="w-full h-96 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              <img
                src={images[selectedImage]}
                alt="Producto"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 cursor-zoom-in"
              />
            </div>

            {/* Miniaturas */}
            <div className="flex gap-3">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === idx
                      ? `border-2`
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                  style={{
                    borderColor: selectedImage === idx ? COLORS.primary : undefined,
                  }}
                >
                  <img src={img} alt={`Miniatura ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Columna Derecha - Información */}
          <div className="flex flex-col gap-6">
            {/* Nombre y código */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.nombre}</h1>
              <p className="text-sm text-gray-500">Código: AH-{id}-001</p>
            </div>

            {/* Precios */}
            {product.precio && (
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <h3 className="font-bold text-gray-900 mb-2">Precios</h3>
                <div className="flex flex-wrap gap-3">
                  <div
                    className="flex items-center gap-2 px-3 py-2 rounded-lg border"
                    style={{ borderColor: COLORS.primary, backgroundColor: `${COLORS.primary}10` }}
                  >
                    <span className="text-sm font-semibold" style={{ color: COLORS.primary }}>Estándar</span>
                    <span className="text-sm text-gray-800">
                      {product.precio.currency || ''} {typeof activeAmount === 'number' ? activeAmount.toFixed(2) : activeAmount}
                      {product.precio.unit ? ` / ${product.precio.unit}` : ''}
                    </span>
                  </div>
                  {activeSpecial !== undefined && (
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg border border-green-300 bg-green-50">
                      <span className="text-sm font-semibold text-green-700">Especial</span>
                      <span className="text-sm text-gray-800">
                        {product.precio.currency || ''} {typeof activeSpecial === 'number' ? activeSpecial.toFixed(2) : activeSpecial}
                        {product.precio.unit ? ` / ${product.precio.unit}` : ''}
                      </span>
                    </div>
                  )}
                </div>
                {activeSize && (
                  <p className="text-xs text-gray-600">Medida seleccionada: <span className="font-semibold text-gray-800">{activeSize}</span></p>
                )}
              </div>
            )}

            {/* Especificaciones clave */}
            <div className="bg-gray-50 p-6 rounded-lg space-y-3">
              <h3 className="font-bold text-gray-900 mb-4">Especificaciones principales</h3>
              {product.especificaciones && product.especificaciones.slice(0, 4).map((spec, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <FaCheckCircle className="text-red-600 mt-1 shrink-0" size={16} />
                  <span className="text-sm text-gray-700">{spec}</span>
                </div>
              ))}
            </div>

            {/* Botones de acción */}
            <div className="space-y-3">
              <button
                className="group relative w-full py-3 rounded-lg font-semibold flex items-center justify-center gap-2 overflow-hidden bg-[#d10c2b] text-white transition-transform duration-150 active:scale-[0.99]"
              >
                <span className="absolute inset-0 bg-[#ad0a24] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden />
                <FaPhone size={16} className="relative z-10" />
                <span className="relative z-10">Cotizar</span>
              </button>

              <button className="w-full py-3 rounded-lg font-semibold bg-gray-100 text-gray-700 hover:bg-gray-200 transition-colors flex items-center justify-center gap-2">
                <FaDownload size={16} />
                Descargar PDF técnico
              </button>
            </div>

            {/* Compatibilidad */}
            <div className="border-t pt-6">
              <h4 className="font-bold text-gray-900 mb-2">Compatibilidad</h4>
              <p className="text-sm text-gray-700">Compatible con mangueras 1SN / 2SN / R2AT</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sección de variaciones (dinámica) */}
      {variants.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 border-t pt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Variaciones disponibles</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-700 mb-3">Medida</h3>
              <div className="flex flex-wrap gap-3">
                {variants.map((v) => {
                  const active = selectedVariant?.size === v.size;
                  return (
                    <button
                      key={v.size}
                      onClick={() => setSelectedVariant(v)}
                      className={`px-4 py-2 rounded-lg font-semibold transition-all border-2 ${
                        active
                          ? 'border-red-600 bg-red-50 text-red-600'
                          : 'border-gray-300 bg-white text-gray-700 hover:border-gray-400'
                      }`}
                    >
                      {v.size}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tabla de características técnicas */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Características técnicas completas</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b-2 border-gray-300">
                <th className="px-6 py-3 text-left font-bold text-gray-900">Especificación</th>
                <th className="px-6 py-3 text-left font-bold text-gray-900">Valor</th>
              </tr>
            </thead>
            <tbody>
              {product.especificaciones && product.especificaciones.map((spec, idx) => (
                <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="px-6 py-4 text-gray-700 font-semibold">{spec.split(':')[0]}</td>
                  <td className="px-6 py-4 text-gray-600">{spec.split(':')[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Tabla de variantes de precio (si existen) */}
      {variants.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Tabla de precios por medida</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 border-b-2 border-gray-300">
                  <th className="px-6 py-3 text-left font-bold text-gray-900">Medida</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-900">Presión (PSI)</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-900">Precio Estándar</th>
                  <th className="px-6 py-3 text-left font-bold text-gray-900">Precio Especial</th>
                </tr>
              </thead>
              <tbody>
                {variants.map((v) => (
                  <tr key={v.size} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-6 py-4 text-gray-700 font-semibold">{v.size}</td>
                    <td className="px-6 py-4 text-gray-600">{v.pressurePsi ?? '-'}</td>
                    <td className="px-6 py-4 text-gray-600">{product.precio.currency || ''} {v.amount.toFixed(2)} {product.precio.unit ? ` / ${product.precio.unit}` : ''}</td>
                    <td className="px-6 py-4 text-gray-600">{product.precio.currency || ''} {v.specialAmount !== undefined ? v.specialAmount.toFixed(2) : '-'} {product.precio.unit ? ` / ${product.precio.unit}` : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Descripción del producto */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 border-t pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Descripción del producto</h2>
        <div className="prose prose-sm text-gray-700 space-y-4">
          <p>{product.descripcion}</p>
          <p>
            Este producto está diseñado para soportar aplicaciones de alta presión en maquinaria industrial,
            montajes hidráulicos, sistemas de construcción, transporte, agricultura y equipos OEM.
          </p>
          <p>
            Fabricado con los más altos estándares de calidad, garantiza durabilidad y resistencia a la
            corrosión en los ambientes más exigentes.
          </p>
        </div>
      </div>

      {/* Productos relacionados */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t pt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Productos relacionados</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {['Ferrule compatible', 'Adaptador recomendado', 'Manguera según norma', 'Kit armado completo'].map((item) => (
            <div
              key={item}
              className="p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow cursor-pointer bg-gray-50"
            >
              <p className="font-semibold text-gray-700 text-center">{item}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetail;
