// Mapeo de precios por ID de producto.
// Rellena con datos estructurados para cada producto según la lista.
// Ejemplo de entrada:
//  13: { amount: 100.00, currency: 'USD', unit: 'm' }
//  45: { amount: 5.50, currency: 'USD', unit: 'pieza' }

export const PRICES_BY_ID = {
  // TODO: Completar con valores reales a partir de la lista PDF
  // Manguera de Freno J1401 (según imagen proporcionada)
  // Nota: El ID 7 corresponde a la traducción de este producto.
  7: {
    amount: 4.25,           // Precio Estándar
    specialAmount: 2.55,    // Precio Especial
    currency: 'USD',
    unit: 'm',              // Asumido por metro (ajustar si aplica)
  },
  // Manguera SAE 100 R1AT (EN853) - ID 8
  8: {
    amount: 3.33,           // Precio Estándar (desde 3/16")
    specialAmount: 2.00,    // Precio Especial (desde 3/16")
    currency: 'USD',
    unit: 'm',
    // Variantes detalladas (opcional para futura visualización)
    variants: [
      { size: '3/16"', amount: 3.33, specialAmount: 2.00, pressurePsi: 3625 },
      { size: '1/4"',  amount: 3.30, specialAmount: 1.98, pressurePsi: 3263 },
      { size: '3/8"',  amount: 4.45, specialAmount: 2.67, pressurePsi: 2610 },
      { size: '1/2"',  amount: 5.51, specialAmount: 3.31, pressurePsi: 2320 },
    ],
  },
  // Manguera SAE 100 R2AT (EN853) - ID 9
  9: {
    amount: 5.82,           // Precio Estándar (desde 3/8")
    specialAmount: 3.49,    // Precio Especial (desde 3/8")
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '3/8"', amount: 5.82, specialAmount: 3.49, pressurePsi: 4800 },
      { size: '1/2"', amount: 7.06, specialAmount: 4.24, pressurePsi: 4200 },
      { size: '5/8"', amount: 8.84, specialAmount: 5.30, pressurePsi: 3625 },
      { size: '3/4"', amount: 9.90, specialAmount: 5.94, pressurePsi: 3118 },
    ],
  },
  // Manguera SAE 100 R12 / EN856-4SP - ID 10
  10: {
    amount: 16.08,
    specialAmount: 9.65,
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '1/2"', amount: 16.08, specialAmount: 9.65, pressurePsi: 6018 },
    ],
  },
  // Manguera SAE 100 R13 / EN856-4SH - ID 47
  47: {
    amount: 21.12,
    specialAmount: 12.67,
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '3/4"', amount: 21.12, specialAmount: 12.67, pressurePsi: 6090 },
      { size: '1"', amount: 25.00, specialAmount: 15.00, pressurePsi: 5510 },
    ],
  },
  // Manguera SAE 100 R13 - ID 11
  11: {
    amount: 25.51,
    specialAmount: 15.31,
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '3/4"', amount: 25.51, specialAmount: 15.31, pressurePsi: 5075 },
      { size: '1"', amount: 31.67, specialAmount: 19.00, pressurePsi: 5075 },
    ],
  },
  // Manguera SAE 100 R14 - ID 12
  12: {
    amount: 15.67,
    specialAmount: 9.40,
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '1/2"', amount: 15.67, specialAmount: 9.40, pressurePsi: 2016 },
    ],
  },
  // Manguera SAE 100 R15 - ID 13
  13: {
    amount: 39.02,
    specialAmount: 23.41,
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '1"', amount: 39.02, specialAmount: 23.41, pressurePsi: 6090 },
      { size: '1 1/4"', amount: 57.20, specialAmount: 34.32, pressurePsi: 6090 },
      { size: '1 1/2"', amount: 66.57, specialAmount: 39.94, pressurePsi: 6090 },
    ],
  },
  // Manguera SAE 100 R6 - ID 14
  14: {
    amount: 3.73,
    specialAmount: 2.24,
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '5/16"', amount: 3.73, specialAmount: 2.24, pressurePsi: 406 },
      { size: '3/8"', amount: 4.35, specialAmount: 2.61, pressurePsi: 406 },
    ],
  },
  // Manguera Gasolina/Aceite - ID 15
  15: {
    amount: 2.63,
    specialAmount: 1.58,
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '3/16"', amount: 2.63, specialAmount: 1.58, pressurePsi: 300 },
      { size: '1/4"', amount: 2.63, specialAmount: 1.58, pressurePsi: 300 },
      { size: '5/16"', amount: 3.14, specialAmount: 1.88, pressurePsi: 300 },
      { size: '3/8"', amount: 3.73, specialAmount: 2.24, pressurePsi: 300 },
      { size: '1/2"', amount: 5.92, specialAmount: 3.55, pressurePsi: 300 },
      { size: '5/8"', amount: 7.47, specialAmount: 4.48, pressurePsi: 300 },
      { size: '3/4"', amount: 9.96, specialAmount: 5.98, pressurePsi: 300 },
      { size: '1"', amount: 13.63, specialAmount: 8.18, pressurePsi: 300 },
    ],
  },
  // Manguera Gasolina/Aceite Lona - ID 16
  16: {
    amount: 22.12,
    specialAmount: 13.27,
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '1 1/4"', amount: 22.12, specialAmount: 13.27, pressurePsi: 300 },
      { size: '1 1/2"', amount: 25.27, specialAmount: 15.16, pressurePsi: 300 },
      { size: '2"', amount: 35.08, specialAmount: 21.05, pressurePsi: 300 },
    ],
  },
  // Manguera Succión y Descarga Combustible - ID 17
  17: {
    amount: 34.92,
    specialAmount: 20.95,
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '2"', amount: 34.92, specialAmount: 20.95, pressurePsi: 300 },
      { size: '4"', amount: 78.82, specialAmount: 47.29, pressurePsi: 300 },
    ],
  },
  // Manguera Agua/Aire - ID 18
  18: {
    amount: 2.76,
    specialAmount: 1.66,
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '5/16"', amount: 2.76, specialAmount: 1.66, pressurePsi: 300 },
      { size: '3/8"', amount: 3.25, specialAmount: 1.95, pressurePsi: 300 },
      { size: '1/2"', amount: 4.33, specialAmount: 2.60, pressurePsi: 300 },
      { size: '3/4"', amount: 7.67, specialAmount: 4.60, pressurePsi: 300 },
      { size: '1"', amount: 10.84, specialAmount: 6.50, pressurePsi: 300 },
    ],
  },
  // Tramo Radiador 1M - ID 19
  19: {
    amount: 34.80,
    specialAmount: 20.88,
    currency: 'USD',
    unit: 'm',
    variants: [
      { size: '2"', amount: 34.80, specialAmount: 20.88, pressurePsi: 75 },
      { size: '2 1/2"', amount: 42.94, specialAmount: 25.76, pressurePsi: 75 },
      { size: '3"', amount: 52.76, specialAmount: 31.66, pressurePsi: 75 },
    ],
  },
  // Ferrul de Acero R1 - ID 20
  20: {
    amount: 0.42,
    specialAmount: 0.25,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/4"', amount: 0.42, specialAmount: 0.25 },
      { size: '5/16"', amount: 0.59, specialAmount: 0.35 },
      { size: '3/8"', amount: 0.55, specialAmount: 0.33 },
      { size: '1/2"', amount: 1.00, specialAmount: 0.60 },
      { size: '3/4"', amount: 1.37, specialAmount: 0.82 },
    ],
  },
  // Ferrul de Acero R1/R2 - ID 21
  21: {
    amount: 0.48,
    specialAmount: 0.29,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/4"', amount: 0.48, specialAmount: 0.29 },
      { size: '3/8"', amount: 0.60, specialAmount: 0.36 },
      { size: '1/2"', amount: 1.10, specialAmount: 0.66 },
      { size: '5/8"', amount: 1.49, specialAmount: 0.89 },
      { size: '3/4"', amount: 1.60, specialAmount: 0.96 },
      { size: '1"', amount: 2.50, specialAmount: 1.50 },
      { size: '1 1/4"', amount: 4.70, specialAmount: 2.82 },
    ],
  },
  // Ferrul de Acero R12 4SP/4SH - ID 22
  22: {
    amount: 1.30,
    specialAmount: 0.78,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '3/8"', amount: 1.30, specialAmount: 0.78 },
      { size: '1/2"', amount: 1.33, specialAmount: 0.80 },
      { size: '3/4"', amount: 1.80, specialAmount: 1.08 },
      { size: '1"', amount: 2.83, specialAmount: 1.70 },
      { size: '1 1/4"', amount: 6.00, specialAmount: 3.60 },
    ],
  },
  // Ferrul de Acero Corto 4SP/4SH (Sin Pelar) - ID 23
  23: {
    amount: 2.30,
    specialAmount: 1.38,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '3/4"', amount: 2.30, specialAmount: 1.38 },
      { size: '1"', amount: 3.63, specialAmount: 2.18 },
      { size: '1 1/4"', amount: 6.50, specialAmount: 3.90 },
      { size: '1 1/2"', amount: 9.60, specialAmount: 5.76 },
    ],
  },
  // Ferrul de Acero 4SH/R13/R15 - ID 24
  24: {
    amount: 7.50,
    specialAmount: 4.50,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '3/4"', amount: 7.50, specialAmount: 4.50 },
      { size: '1"', amount: 10.96, specialAmount: 6.58 },
      { size: '1 1/4"', amount: 23.50, specialAmount: 14.10 },
      { size: '1 1/2"', amount: 29.82, specialAmount: 17.89 },
    ],
  },
  // Ferrul de Acero Interlock 4SH/R13/R15 - ID 25
  25: {
    amount: 3.45,
    specialAmount: 2.07,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '3/4"', amount: 3.45, specialAmount: 2.07 },
      { size: '1"', amount: 5.41, specialAmount: 3.25 },
      { size: '1 1/4"', amount: 11.40, specialAmount: 6.84 },
      { size: '1 1/2"', amount: 16.08, specialAmount: 9.65 },
    ],
  },
  // Conexión Manguera de Freno Líquido J1401 (Hembra) - ID 26
  26: {
    amount: 1.05,
    specialAmount: 0.63,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/8" 20-102', amount: 1.20, specialAmount: 0.72 },
      { size: '1/8" 23-104', amount: 1.20, specialAmount: 0.72 },
      { size: '1/8" 14-001', amount: 1.05, specialAmount: 0.63 },
      { size: '1/8" 14-006', amount: 1.05, specialAmount: 0.63 },
    ],
  },
  // Espiga de Acero R2 (2 mallas) - ID 27
  27: {
    amount: 0.59,
    specialAmount: 0.35,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/4"', amount: 0.59, specialAmount: 0.35 },
      { size: '3/8"', amount: 0.75, specialAmount: 0.45 },
      { size: '1/2"', amount: 1.00, specialAmount: 0.60 },
      { size: '5/8"', amount: 2.00, specialAmount: 1.20 },
    ],
  },
  // Espiga de Acero R12 (4 mallas) - ID 28
  28: {
    amount: 2.35,
    specialAmount: 1.41,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/2"', amount: 2.62, specialAmount: 1.57 },
      { size: '3/4"', amount: 2.35, specialAmount: 1.41 },
      { size: '1"', amount: 3.92, specialAmount: 2.35 },
      { size: '1 1/4"', amount: 7.40, specialAmount: 4.44 },
      { size: '1 1/2"', amount: 13.61, specialAmount: 8.17 },
    ],
  },
  // Hembra Giratoria JIC 37° Recta R2/R12 (2 mallas) - ID 29
  29: {
    amount: 1.24,
    specialAmount: 0.74,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/4" x 1/4"', amount: 1.24, specialAmount: 0.74 },
      { size: '3/8" x 3/8"', amount: 1.43, specialAmount: 0.86 },
      { size: '3/8" x 3/8" (NS)', amount: 2.08, specialAmount: 1.25 },
      { size: '3/8" x 1/2"', amount: 2.16, specialAmount: 1.30 },
      { size: '1/2" x 1/2"', amount: 1.84, specialAmount: 1.10 },
    ],
  },
  // Hembra Giratoria JIC 90° R2 (2 mallas) - ID 30
  30: {
    amount: 2.63,
    specialAmount: 1.58,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '3/8" x 3/8"', amount: 2.63, specialAmount: 1.58 },
      { size: '1/2" x 1/2"', amount: 4.40, specialAmount: 2.64 },
    ],
  },
  // Hembra Giratoria JIC 37° Recta R12 (4 mallas) - ID 31
  31: {
    amount: 4.17,
    specialAmount: 2.50,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '3/4" x 3/4"', amount: 4.17, specialAmount: 2.50 },
      { size: '1" x 1"', amount: 6.12, specialAmount: 3.67 },
    ],
  // Acople Hidráulico de Aguja - ID 42
  42: {
    amount: 18.93,
    specialAmount: 11.36,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '3/8"', amount: 18.93, specialAmount: 11.36, pressurePsi: 4500 },
      { size: '1/2"', amount: 19.84, specialAmount: 11.90, pressurePsi: 4500 },
      { size: '3/4"', amount: 42.90, specialAmount: 25.74, pressurePsi: 4500 },
      { size: '1"', amount: 52.94, specialAmount: 31.76, pressurePsi: 4500 },
    ],
  },
  },
  // Hembra Giratoria Asiento Plano (ORFS) R2/R12 (2 mallas) - ID 32
  32: {
    amount: 2.10,
    specialAmount: 1.26,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '3/8" x 3/8"', amount: 2.10, specialAmount: 1.26 },
      { size: '1/2" x 1/2"', amount: 3.27, specialAmount: 1.96 },
    ],
  },
  // Hembra Giratoria Asiento Plano (ORFS) R12 (4 mallas) - ID 33
  33: {
    amount: 5.57,
    specialAmount: 3.34,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '3/4" x 3/4"', amount: 5.57, specialAmount: 3.34 },
    ],
  },
  // Espiga Macho Fijo NPT R2 (2 mallas) - ID 34
  34: {
    amount: 1.33,
    specialAmount: 0.80,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/4" x 1/8"', amount: 1.33, specialAmount: 0.80 },
      { size: '1/4" x 1/4"', amount: 1.55, specialAmount: 0.93 },
      { size: '3/8" x 3/8"', amount: 1.76, specialAmount: 1.06 },
      { size: '1/2" x 1/2"', amount: 2.50, specialAmount: 1.50 },
    ],
  },
  // Acople Macho Tipo Aguja - ID 43
  43: {
    amount: 10.84,
    specialAmount: 6.50,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/2"', amount: 10.84, specialAmount: 6.50, pressurePsi: 4500 },
    ],
  },
  // Acople Macho Tipo Ball - ID 44
  44: {
    amount: 9.83,
    specialAmount: 5.90,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/2"', amount: 9.83, specialAmount: 5.90, pressurePsi: 4500 },
    ],
  },
  // Abrazadera de Acero Inoxidable - ID 45
  45: {
    amount: 0.94,
    specialAmount: 0.56,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/4" (6-16mm, banda 8mm)', amount: 0.33, specialAmount: 0.20 },
      { size: '3/8" (8-22mm, banda 8mm)', amount: 0.37, specialAmount: 0.22 },
      { size: '1/2" (11-25mm, banda 12.7mm)', amount: 0.90, specialAmount: 0.54 },
      { size: '5/8" (13-27mm, banda 12.7mm)', amount: 0.92, specialAmount: 0.55 },
      { size: '3/4" (13-32mm, banda 12.7mm)', amount: 0.93, specialAmount: 0.56 },
      { size: '1" (18-38mm, banda 12.7mm)', amount: 0.94, specialAmount: 0.56 },
    ],
  },
  // Espiga Macho Fijo NPT R12 (4 mallas) - ID 35
  35: {
    amount: 4.90,
    specialAmount: 2.94,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '3/4" x 3/4"', amount: 4.90, specialAmount: 2.94 },
      { size: '1" x 1"', amount: 6.20, specialAmount: 3.72 },
      { size: '1 1/4" x 1 1/4"', amount: 14.78, specialAmount: 8.87 },
      { size: '1 1/2" x 1 1/2"', amount: 23.61, specialAmount: 14.17 },
    ],
  },
  // Espiga Macho NPT Interlock R13/R15 - ID 36
  36: {
    amount: 12.88,
    specialAmount: 7.73,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '3/4" x 3/4"', amount: 12.88, specialAmount: 7.73 },
      { size: '1" x 1"', amount: 20.53, specialAmount: 12.32 },
      { size: '1 1/4" x 1 1/4"', amount: 31.24, specialAmount: 18.74 },
      { size: '1 1/2" x 1 1/2"', amount: 38.53, specialAmount: 23.12 },
    ],
  },
  // Hembra Milimétrica DIN Serie Liviana - ID 37
  37: {
    amount: 2.75,
    specialAmount: 1.65,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/4 x 12 TB6', amount: 2.75, specialAmount: 1.65 },
      { size: '1/4 x 14 TB8', amount: 2.75, specialAmount: 1.65 },
      { size: '5/16 x 16 TB10', amount: 3.50, specialAmount: 2.10 },
      { size: '3/8 x 18 TB12', amount: 3.53, specialAmount: 2.12 },
      { size: '1/2 x 22 TB15', amount: 4.06, specialAmount: 2.44 },
      { size: '5/8 x 26 TB18', amount: 6.35, specialAmount: 3.81 },
      { size: '3/4 x 30 TB22', amount: 8.62, specialAmount: 5.17 },
    ],
  },
  // Macho Milimétrico DIN Serie Liviana - ID 38
  38: {
    amount: 3.02,
    specialAmount: 1.81,
    currency: 'USD',
    unit: 'pieza',
    variants: [
      { size: '1/4 x 12 TB6', amount: 3.02, specialAmount: 1.81 },
      { size: '1/4 x 14 TB8', amount: 3.17, specialAmount: 1.90 },
      { size: '5/16 x 16 TB10', amount: 3.66, specialAmount: 2.20 },
      { size: '3/8 x 18 TB12', amount: 3.92, specialAmount: 2.35 },
      { size: '1/2 x 22 TB15', amount: 6.00, specialAmount: 3.60 },
      { size: '5/8 x 26 TB18', amount: 8.53, specialAmount: 5.12 },
      { size: '3/4 x 30 TB22', amount: 14.67, specialAmount: 8.80 },
    ],
  },
    39: {
      amount: 6.54,
      specialAmount: 3.92,
      currency: 'USD',
      unit: 'pieza',
      variants: [
        { size: "1 x 1", amount: 6.54, specialAmount: 3.92, pressurePsi: 3000 },
      ],
    },
    40: {
      amount: 10.59,
      specialAmount: 6.35,
      currency: 'USD',
      unit: 'pieza',
      variants: [
        { size: "1 x 1", amount: 10.59, specialAmount: 6.35, pressurePsi: 3000 },
      ],
    },
    41: {
      amount: 14.18,
      specialAmount: 8.51,
      currency: 'USD',
      unit: 'pieza',
      variants: [
        { size: "1 x 1", amount: 14.18, specialAmount: 8.51, pressurePsi: 3000 },
      ],
    },
    48: {
      amount: 18.16,
      specialAmount: 10.90,
      currency: 'USD',
      unit: 'pieza',
      variants: [
        { size: "1 x 1", amount: 18.16, specialAmount: 10.90, pressurePsi: 3000 },
      ],
    },
    // Máquina de Prensado Eléctrico 1/8" - 2" MAG-DX68 - ID 46
    46: {
      amount: 4699.0,
      specialAmount: 4699.0,
      currency: 'USD',
      unit: 'equipo',
      variants: [
        { size: 'MAG-DX68 (4mm-69mm, 1/8"-2" R13)', amount: 4699.0, specialAmount: 4699.0 },
      ],
    },
};
