import React, { useState, useEffect, useMemo } from 'react';
import { usePageTitle } from '../hooks';
import { PAGE_NAMES } from '../components/PageHeaderIcons';
import { useLocation, useNavigate } from 'react-router-dom';
import { CiSearch } from 'react-icons/ci';
import { useLanguage } from '../hooks';
import { PRODUCT_TRANSLATIONS } from '../data/translations';
import { PRODUCTS } from '../data/data_products';
import { PRICES_BY_ID } from '../data/data_prices';
import { FaTint, FaBuilding, FaWrench, FaTools, FaCheck } from 'react-icons/fa';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { COLORS } from '../constants/theme';

const BASE_CATEGORY_PRODUCT_MAP = {
  hidraulica: [0, 7, 8, 9, 10, 11, 12, 13, 46],
  industrial: [1],
  accesorios: [2, 19, 47],
};

const Productos = () => {
  usePageTitle(PAGE_NAMES.productos);
  const { language, t } = useLanguage();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState(null);
  const [activeSubcategory, setActiveSubcategory] = useState(null);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const categoriesData = [
    { id: 'todo', icon: FaCheck },
    { id: 'hidraulica', icon: FaTint },
    { id: 'industrial', icon: FaBuilding },
    { id: 'accesorios', icon: FaWrench },
    { id: 'miscelaneos', icon: FaTools },
  ];

  const categories = useMemo(() => 
    categoriesData.map((cat, idx) => ({
      ...cat,
      label: `${idx + 1}. ${t(`productos.cat_${cat.id}`)}`,
    })),
    [language]
  );

  // Fusionar base de productos con textos traducidos
  const products = useMemo(() => {
    const texts = PRODUCT_TRANSLATIONS[language] || PRODUCT_TRANSLATIONS.es;
    const byId = new Map(texts.map((p) => [p.id, p]));
    // Traducciones aportan nombre/descripcion/especificaciones; base aporta imagen/categoría/subcategoría
    return PRODUCTS.map((base) => ({
      ...(byId.get(base.id) || {}),
      ...base,
      precio: PRICES_BY_ID[base.id] || null,
    }));
  }, [language]);

  // IDs de productos por categoría (estable para ES; para otros idiomas se mantiene por ID)
  const categoryProductIds = null; // No se usa; mantenido para referencia

  // Definición de subcategorías por sección
  const subcategoryDefs = {
    miscelaneos: [
      { id: 'abrazaderas_inox', label: 'ABRAZADERAS ACERO INOXIDABLE' },
      { id: 'maquina_prensado', label: 'MÁQUINA DE PRENSADO ELÉCTRICO 1/8”-2”' },
    ].reverse(),
    accesorios: [
      { id: 'acople_macho_ball', label: 'ACOPLE MACHO TIPO BALL' },
      { id: 'acople_macho_aguja', label: 'ACOPLE MACHO TIPO AGUJA' },
      { id: 'acople_aguja', label: 'ACOPLE HIDRÁULICO TIPO AGUJA' },
      { id: 'flange_r12_90_code61', label: 'FLANGE R12 a 90° - CODE 61' },
      { id: 'flange_r12_recto_code63', label: 'FLANGE RECTO R12 - CODE 63' },
      { id: 'flange_r12_90_code63', label: 'FLANGE CAT R12 a 90° - CODE 63' },
      { id: 'flange_r12_recto_code61', label: 'FLANGE RECTO R12 - CODE 61' },
      { id: 'machos_din_sl', label: 'MACHOS MILIMETRICOS DIN\nSERIE LIVIANA' },
      { id: 'hembras_din_sl', label: 'HEMBRAS MILIMETRICAS DIN\nSERIE LIVIANA' },
      { id: 'espiga_npt_interlock_r13', label: 'ESPIGA MACHO NPT INTERLOCK R13' },
      { id: 'espiga_npt_r12', label: 'ESPIGA MACHO NPT R12' },
      { id: 'espiga_npt_r2', label: 'ESPIGA MACHO NPT R2' },
      { id: 'hembra_plano_r12', label: 'HEMBRA GIRATORIA ASIENTO PLANO R12' },
      { id: 'hembra_plano_r2', label: 'HEMBRA GIRATORIA ASIENTO PLANO R2' },
      { id: 'hembra_jic_r12', label: 'HEMBRA GIRATORIA JIC R12' },
      { id: 'hembra_jic_90', label: 'HEMBRA GIRATORIA JIC a 90' },
      { id: 'hembra_jic_r2', label: 'HEMBRA GIRATORIA JIC R2' },
      { id: 'espigas_r12', label: 'ESPIGAS R12' },
      { id: 'espigas_r2', label: 'ESPIGAS R2' },
      { id: 'freno_liquido', label: 'CONEXIONES MANGUERA FRENO LÍQUIDO' },
      { id: 'ferrules_interlock', label: 'FERRULES DE ACERO INTERLOCK 4SH/ R13 / R15' },
      { id: 'ferrules_4sh_r13_r15', label: 'FERRULES DE ACERO 4SH/R13/R15' },
      { id: 'ferrules_4sp_4sh', label: 'FERRULES DE ACERO 4SP/ 4SH' },
      { id: 'ferrules_r12_4sp_4sh', label: 'FERRULES DE ACERO R12 4SP 4SH' },
      { id: 'ferrules_r2', label: 'FERRULES DE ACERO R2' },
      { id: 'ferrules_r1', label: 'FERRULES DE ACERO R1' },
    ].reverse(),
    industrial: [
      { id: 'freno_j1401', label: 'MANGUERA DE FRENO J1401' },
      { id: 'tramo_radiador', label: 'TRAMO RADIADOR' },
      { id: 'agua_aire', label: 'MANGUERA AGUA/AIRE' },
      { id: 'succion_descarga', label: 'MANGUERA SUCCIÓN Y DESCARGA COMBUSTIBLE' },
      { id: 'gasolina_aceite_lona', label: 'MANGUERA GASOLINA/ ACEITE (LONA)' },
      { id: 'gasolina_aceite', label: 'MANGUERA GASOLINA/ ACEITE' },
      { id: 'sae_r6', label: 'MANGUERA SAE 100 R6' },
    ].reverse(),
    hidraulica: [
      { id: 'sae_r15', label: 'MANGUERA SAE 100 R15' },
      { id: 'sae_r14', label: 'MANGUERA SAE 100 R14' },
      { id: 'sae_r13', label: 'MANGUERA SAE 100 R13' },
      { id: 'en856_4sh', label: 'MANGUERA EN856-4SH' },
      { id: 'en856_4sp', label: 'MANGUERA EN856-4SP' },
      { id: 'sae_r2at', label: 'MANGUERA SAE 100 R2AT' },
      { id: 'sae_r1at', label: 'MANGUERA SAE 100 R1AT' },
    ].reverse(),
  };

  // Mapeo de subcategorías a IDs de productos (ES)
  const subcategoryProductIds = {
    // Miscelaneos
    abrazaderas_inox: [5,45],
    maquina_prensado: [6,46],
    // Conexiones
    acople_macho_ball: [4,44],
    acople_macho_aguja: [3,43],
    acople_aguja: [2,42],
    flange_r12_90_code61: [40],
    flange_r12_recto_code63: [41],
    flange_r12_recto_code61: [39],
    flange_r12_90_code63: [48],
    machos_din_sl: [38],
    hembras_din_sl: [37],
    espiga_npt_interlock_r13: [36],
    espiga_npt_r12: [35],
    espiga_npt_r2: [34],
    hembra_plano_r12: [33],
    hembra_plano_r2: [32],
    hembra_jic_r12: [31],
    hembra_jic_90: [30],
    hembra_jic_r2: [29],
    espigas_r12: [28],
    espigas_r2: [27],
    freno_liquido: [26],
    ferrules_interlock: [25],
    ferrules_4sh_r13_r15: [24],
    ferrules_4sp_4sh: [23],
    ferrules_r12_4sp_4sh: [22],
    ferrules_r2: [21],
    ferrules_r1: [20],
    // Industriales
    freno_j1401: [7],
    tramo_radiador: [19],
    agua_aire: [18],
    succion_descarga: [17],
    gasolina_aceite_lona: [16],
    gasolina_aceite: [15],
    sae_r6: [14],
    // Hidráulicas
    sae_r15: [13],
    sae_r14: [12],
    sae_r13: [11],
    en856_4sh: [47],
    en856_4sp: [10],
    sae_r2at: [9],
    sae_r1at: [8],
  };

  // Sincronizar activeCategory y activeSubcategory con el hash
  useEffect(() => {
    const raw = location.hash.substring(1); // sin #
    if (!raw) return;
    const [cat, rest] = raw.split('&');
    if (cat && categories.find(c => c.id === cat)) {
      setActiveCategory(cat);
    }
    const sub = rest && rest.startsWith('sub=') ? rest.split('=')[1] : null;
    setActiveSubcategory(sub || null);
  }, [location.hash, categories]);

  // Actualizar productos filtrados cuando cambie la categoría o búsqueda
  useEffect(() => {
    let filtered = products;

    if (activeCategory && activeCategory !== 'todo') {
      if (activeSubcategory) {
        filtered = filtered.filter((p) => p.subcategoryId === activeSubcategory);
      } else {
        filtered = filtered.filter((p) => p.category === activeCategory);
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
  }, [activeCategory, activeSubcategory, searchTerm, products]);

  const handleSelectSubcategory = (subId) => {
    setActiveSubcategory(subId === activeSubcategory ? null : subId);
    const base = `/productos#${activeCategory}`;
    const next = subId && subId !== activeSubcategory ? `${base}&sub=${subId}` : base;
    navigate(next, { replace: false });
  };

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
                      {activeCategory === category.id && subcategoryDefs[category.id] && (
                        <div className="mt-3 ml-8 border-l pl-4" style={{borderColor: COLORS.gray200}}>
                          <ul className="space-y-2">
                            {subcategoryDefs[category.id].map((sub) => (
                              <li key={sub.id}>
                                <button
                                  onClick={() => handleSelectSubcategory(sub.id)}
                                  className={`w-full text-left px-3 py-1.5 rounded hover:bg-gray-50 ${activeSubcategory === sub.id ? 'font-semibold' : ''}`}
                                  style={activeSubcategory === sub.id ? {color: COLORS.primary} : {color: COLORS.gray700}}
                                >
                                  <span className="text-xs whitespace-pre-line">{sub.label}</span>
                                </button>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
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
                    {t('productos.showing')} <span className="font-bold">{categories.find(c => c.id === activeCategory)?.label}</span>{activeSubcategory && subcategoryDefs[activeCategory] ? ' · ' : ''}{activeSubcategory && subcategoryDefs[activeCategory] ? <span className="font-semibold">{subcategoryDefs[activeCategory].find(s => s.id === activeSubcategory)?.label}</span> : null}
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
                      className="group relative mt-4 px-6 py-2 rounded-lg font-semibold overflow-hidden bg-[#d10c2b] text-white transition-transform duration-150 active:scale-[0.99]"
                      style={{ border: `2px solid ${COLORS.primary}` }}
                    >
                      <span className="absolute inset-0 bg-[#ad0a24] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100" aria-hidden />
                      <span className="relative z-10">{t('productos.view_all')}</span>
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
