import React, { useState, useEffect, useMemo } from 'react';
import { usePageTitle } from '../hooks';
import { PAGE_NAMES } from '../components/PageHeaderIcons';
import { useLocation } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { useLanguage } from '../hooks';
import { PRODUCT_TRANSLATIONS } from '../data/translations';
import { FaTint, FaBuilding, FaWrench, FaWind, FaCar, FaSquare, FaBox, FaCube, FaTools, FaCheck } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { COLORS } from '../constants/theme';

const Productos = () => {
  usePageTitle(PAGE_NAMES.productos);
  const { language, t } = useLanguage();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categoriesData = [
    { id: 'todo', icon: FaCheck },
    { id: 'hidraulica', icon: FaTint },
    { id: 'industrial', icon: FaBuilding },
    { id: 'accesorios', icon: FaWrench },
    { id: 'neumatica', icon: FaWind },
    { id: 'automovil', icon: FaCar },
    { id: 'silicona', icon: FaSquare },
    { id: 'pvc', icon: FaBox },
    { id: 'vacio', icon: FaCube },
    { id: 'maquina', icon: FaTools },
    { id: 'protector', icon: FaCheck },
  ];

  const categories = useMemo(() => 
    categoriesData.map((cat, idx) => ({
      ...cat,
      label: `${idx + 1}. ${t(`productos.cat_${cat.id}`)}`,
    })),
    [language]
  );

  const products = useMemo(
    () => PRODUCT_TRANSLATIONS[language] || PRODUCT_TRANSLATIONS.es,
    [language]
  );

  // Mapeo de categorías a índices de productos
  const categoryProductMap = {
    todo: [],
    hidraulica: [0, 7, 8, 9, 10, 11, 12, 13, 46],
    industrial: [1],
    accesorios: [2, 19, 47],
    neumatica: [3],
    automovil: [4, 6, 14, 15, 16, 17, 18],
    silicona: [5],
    pvc: [6],
    vacio: [6],
    maquina: [5],
    protector: [5],
  };

  // Sincronizar activeCategory con el hash de la URL
  useEffect(() => {
    const hash = location.hash.substring(1); // Remover el #
    if (hash && categories.find(c => c.id === hash)) {
      setActiveCategory(hash);
    }
  }, [location.hash]);

  // Actualizar productos filtrados cuando cambie la categoría o búsqueda
  useEffect(() => {
    let filtered = products;

    if (activeCategory) {
      if (activeCategory !== 'todo') {
        const categoryIndices = categoryProductMap[activeCategory] || [];
        filtered = filtered.filter((_, idx) => categoryIndices.includes(idx));
      }
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.nombre.toLowerCase().includes(searchTerm.toLowerCase()) ||
          product.descripcion.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [activeCategory, searchTerm, products]);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <div className="grow">
        {/* Hero Section con imagen de fondo */}
        <div 
          className="relative w-full min-h-96 flex items-center justify-center pt-32 pb-12 bg-cover bg-center"
          style={{
            backgroundImage: 'url(/industria.webp)',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          {/* Overlay oscuro */}
          <div className="absolute inset-0 bg-black/50"></div>
          
          {/* Contenido */}
          <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {t('productos.title')}
            </h1>
            <p className="text-lg md:text-xl opacity-90">
              {t('productos.breadcrumb')}
            </p>
          </div>
        </div>

        {/* Barra de búsqueda */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 mt-12">
          <div className="relative">
            <CiSearch className="absolute left-4 top-3.5 text-2xl text-gray-400" />
            <input
              type="text"
              placeholder={t('productos.search_placeholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:outline-none transition-colors"
              style={{ "--tw-ring-color": COLORS.primary }}
              onFocus={(e) => e.target.style.borderColor = COLORS.primary}
              onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
            />
          </div>
        </div>

        {/* Contenedor principal */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar izquierdo - Categorías - Solo visible en desktop */}
            <div className="hidden lg:block lg:col-span-1">
              <div className="bg-white rounded-lg p-6 shadow-sm sticky top-40">
                <h3 className="text-lg font-bold text-gray-900 mb-6">{t('productos.category_title')}</h3>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.id}>
                      <button
                        onClick={() => setActiveCategory(activeCategory === category.id ? null : category.id)}
                        className={`w-full text-left flex items-center gap-3 px-4 py-2 rounded-lg transition-all duration-200 ${
                          activeCategory === category.id
                            ? 'font-semibold border-l-4'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                        style={activeCategory === category.id ? { 
                          borderLeftColor: COLORS.primary, 
                          color: COLORS.primary,
                          backgroundColor: `${COLORS.primary}10`
                        } : {}}
                      >
                        <category.icon 
                          className="text-lg shrink-0" 
                          style={{ color: activeCategory === category.id ? COLORS.primary : '#999' }} 
                        />
                        <span className="text-sm">{category.label}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contenido principal - Productos */}
            <div className="lg:col-span-3">
              {activeCategory && (
                <div className="mb-6 p-4 rounded-lg border" style={{ 
                  backgroundColor: `${COLORS.primary}10`,
                  borderColor: COLORS.primary 
                }}>
                  <p style={{ color: COLORS.primary }} className="font-medium">
                    {t('productos.showing')} <span className="font-bold">{categories.find(c => c.id === activeCategory)?.label}</span>
                  </p>
                </div>
              )}

              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {filteredProducts.map((product) => {
                    // Usar el id único del producto y su posición real para navegación
                    const realIndex = products.findIndex(p => p.id === product.id);
                    const key = product.id ?? realIndex;
                    return (
                      <ProductCard key={key} product={product} index={realIndex} />
                    );
                  })}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-12 text-center">
                  <p className="text-gray-500 text-lg mb-4">
                    {searchTerm 
                      ? `${t('productos.no_search_results')} "${searchTerm}"`
                      : t('productos.no_products')}
                  </p>
                  {activeCategory && (
                    <button
                      onClick={() => setActiveCategory(null)}
                      className="mt-4 px-6 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
                      style={{ backgroundColor: COLORS.primary }}
                    >
                      {t('productos.view_all')}
                    </button>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Productos;
