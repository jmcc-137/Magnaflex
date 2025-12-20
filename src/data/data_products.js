// Lista base de productos (sin textos). Las traducciones se aplican por ID.
export const PRODUCTS = [
  // Miscelaneos
  { id: 45, category: 'miscelaneos', subcategoryId: 'abrazaderas_inox', imagen: '/acero.png' },
  { id: 46, category: 'miscelaneos', subcategoryId: 'maquina_prensado', imagen: '/electrico.png' },
  // Conexiones hidráulicas
  { id: 44, category: 'accesorios', subcategoryId: 'acople_macho_ball', imagen: '/ball.png' },
  { id: 43, category: 'accesorios', subcategoryId: 'acople_macho_aguja', imagen: '/aguja2.png' },
  { id: 42, category: 'accesorios', subcategoryId: 'acople_aguja', imagen: '/aguja.png' },
  { id: 40, category: 'accesorios', subcategoryId: 'flange_r12_90_code61', imagen: '/code61.png' },
  { id: 39, category: 'accesorios', subcategoryId: 'flange_r12_recto_code61', imagen: '/code.png' },
  { id: 41, category: 'accesorios', subcategoryId: 'flange_r12_recto_code63', imagen: '/cat.png' },
  { id: 38, category: 'accesorios', subcategoryId: 'machos_din_sl', imagen: '/din2.png' },
  { id: 37, category: 'accesorios', subcategoryId: 'hembras_din_sl', imagen: '/din.png' },
  { id: 36, category: 'accesorios', subcategoryId: 'espiga_npt_interlock_r13', imagen: '/inter.png' },
  { id: 35, category: 'accesorios', subcategoryId: 'espiga_npt_r12', imagen: '/NPT.png' },
  { id: 34, category: 'accesorios', subcategoryId: 'espiga_npt_r2', imagen: '/fijo.png' },
  { id: 33, category: 'accesorios', subcategoryId: 'hembra_plano_r12', imagen: '/plano.png' },
  { id: 32, category: 'accesorios', subcategoryId: 'hembra_plano_r2', imagen: '/orfs.png' },
  { id: 31, category: 'accesorios', subcategoryId: 'hembra_jic_r12', imagen: '/recta.png' },
  { id: 30, category: 'accesorios', subcategoryId: 'hembra_jic_90', imagen: '/jic.png' },
  { id: 29, category: 'accesorios', subcategoryId: 'hembra_jic_r2', imagen: '/r1r12.png' },
  { id: 28, category: 'accesorios', subcategoryId: 'espigas_r12', imagen: '/ea2.png' },
  { id: 27, category: 'accesorios', subcategoryId: 'espigas_r2', imagen: '/ea.png' },
  { id: 26, category: 'accesorios', subcategoryId: 'freno_liquido', imagen: '/f1.png' },
  { id: 25, category: 'accesorios', subcategoryId: 'ferrules_interlock', imagen: '/4sh2.png' },
  { id: 24, category: 'accesorios', subcategoryId: 'ferrules_4sh_r13_r15', imagen: '/4sh.png' },
  { id: 23, category: 'accesorios', subcategoryId: 'ferrules_4sp_4sh', imagen: '/4sp2.png' },
  { id: 22, category: 'accesorios', subcategoryId: 'ferrules_r12_4sp_4sh', imagen: '/4sp.png' },
  { id: 21, category: 'accesorios', subcategoryId: 'ferrules_r2', imagen: '/r1r2.png' },
  { id: 20, category: 'accesorios', subcategoryId: 'ferrules_r1', imagen: '/r1.png' },
  // Mangueras industriales
  { id: 19, category: 'industrial', subcategoryId: 'tramo_radiador', imagen: '/tr.png' },
  { id: 18, category: 'industrial', subcategoryId: 'agua_aire', imagen: '/aa.png' },
  { id: 17, category: 'industrial', subcategoryId: 'succion_descarga', imagen: '/sd.png' },
  { id: 16, category: 'industrial', subcategoryId: 'gasolina_aceite_lona', imagen: '/ag2.png' },
  { id: 15, category: 'industrial', subcategoryId: 'gasolina_aceite', imagen: '/ag.png' },
  { id: 14, category: 'industrial', subcategoryId: 'sae_r6', imagen: '/r6.png' },
  // Mangueras hidráulicas
  { id: 13, category: 'hidraulica', subcategoryId: 'sae_r15', imagen: '/r15.png' },
  { id: 12, category: 'hidraulica', subcategoryId: 'sae_r14', imagen: '/r14.png' },
  { id: 11, category: 'hidraulica', subcategoryId: 'sae_r13', imagen: '/r132.png' },
  { id: 47, category: 'hidraulica', subcategoryId: 'en856_4sh', imagen: '/r13.png' },
  { id: 10, category: 'hidraulica', subcategoryId: 'en856_4sp', imagen: '/r12.png' },
  { id: 9, category: 'hidraulica', subcategoryId: 'sae_r2at', imagen: '/r2at.png' },
  { id: 8, category: 'hidraulica', subcategoryId: 'sae_r1at', imagen: '/r1at.png' },
  // Eliminados duplicados: 1,2,3,4,5,6,7
];

// Alias para compatibilidad con componentes existentes
export const productos = PRODUCTS;