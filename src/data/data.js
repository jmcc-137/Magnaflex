export const navbarLinks = [
  {
    id: 1,
    title: "Inicio",
    link: "/"
  },
  {
    id: 2,
    title: "Nosotros",
    link: "/nosotros"
  },
  {
    id: 3,
    title: "Productos",
    link: "/productos",
    submenu: [
      {
        id: 3.1,
        title: "Mangueras hidráulicas",
        link: "/productos#hidraulica",
        subcategories: [
          { id: "sae_r15", title: "MANGUERA SAE 100 R15", link: "/productos#hidraulica&sub=sae_r15" },
          { id: "sae_r14", title: "MANGUERA SAE 100 R14", link: "/productos#hidraulica&sub=sae_r14" },
          { id: "sae_r13", title: "MANGUERA SAE 100 R13", link: "/productos#hidraulica&sub=sae_r13" },
          { id: "en856_4sh", title: "MANGUERA EN856-4SH", link: "/productos#hidraulica&sub=en856_4sh" },
          { id: "en856_4sp", title: "MANGUERA EN856-4SP", link: "/productos#hidraulica&sub=en856_4sp" },
          { id: "sae_r2at", title: "MANGUERA SAE 100 R2AT", link: "/productos#hidraulica&sub=sae_r2at" },
          { id: "sae_r1at", title: "MANGUERA SAE 100 R1AT", link: "/productos#hidraulica&sub=sae_r1at" },
        ].reverse()
      },
      {
        id: 3.2,
        title: "Mangueras industriales",
        link: "/productos#industrial",
        subcategories: [
          { id: "freno_j1401", title: "MANGUERA DE FRENO J1401", link: "/productos#industrial&sub=freno_j1401" },
          { id: "tramo_radiador", title: "TRAMO RADIADOR", link: "/productos#industrial&sub=tramo_radiador" },
          { id: "agua_aire", title: "MANGUERA AGUA/AIRE", link: "/productos#industrial&sub=agua_aire" },
          { id: "succion_descarga", title: "MANGUERA SUCCIÓN Y DESCARGA COMBUSTIBLE", link: "/productos#industrial&sub=succion_descarga" },
          { id: "gasolina_aceite_lona", title: "MANGUERA GASOLINA/ ACEITE (LONA)", link: "/productos#industrial&sub=gasolina_aceite_lona" },
          { id: "gasolina_aceite", title: "MANGUERA GASOLINA/ ACEITE", link: "/productos#industrial&sub=gasolina_aceite" },
          { id: "sae_r6", title: "MANGUERA SAE 100 R6", link: "/productos#industrial&sub=sae_r6" },
        ].reverse()
      },
      {
        id: 3.3,
        title: "Conexiones Hidráulicas",
        link: "/productos#accesorios",
        subcategories: [
          { id: "acople_macho_ball", title: "ACOPLE MACHO TIPO BALL", link: "/productos#accesorios&sub=acople_macho_ball" },
          { id: "acople_macho_aguja", title: "ACOPLE MACHO TIPO AGUJA", link: "/productos#accesorios&sub=acople_macho_aguja" },
          { id: "acople_aguja", title: "ACOPLE HIDRÁULICO TIPO AGUJA", link: "/productos#accesorios&sub=acople_aguja" },
          { id: "flange_r12_90_code61", title: "FLANGE R12 a 90° - CODE 61", link: "/productos#accesorios&sub=flange_r12_90_code61" },
          { id: "flange_r12_recto_code63", title: "FLANGE RECTO R12 - CODE 63", link: "/productos#accesorios&sub=flange_r12_recto_code63" },
          { id: "flange_r12_90_code63", title: "FLANGE CAT R12 a 90° - CODE 63", link: "/productos#accesorios&sub=flange_r12_90_code63" },
          { id: "flange_r12_recto_code61", title: "FLANGE RECTO R12 - CODE 61", link: "/productos#accesorios&sub=flange_r12_recto_code61" },
          { id: "machos_din_sl", title: "MACHOS MILIMETRICOS DIN\nSERIE LIVIANA", link: "/productos#accesorios&sub=machos_din_sl" },
          { id: "hembras_din_sl", title: "HEMBRAS MILIMETRICAS DIN\nSERIE LIVIANA", link: "/productos#accesorios&sub=hembras_din_sl" },
          { id: "espiga_npt_interlock_r13", title: "ESPIGA MACHO NPT INTERLOCK R13", link: "/productos#accesorios&sub=espiga_npt_interlock_r13" },
          { id: "espiga_npt_r12", title: "ESPIGA MACHO NPT R12", link: "/productos#accesorios&sub=espiga_npt_r12" },
          { id: "espiga_npt_r2", title: "ESPIGA MACHO NPT R2", link: "/productos#accesorios&sub=espiga_npt_r2" },
          { id: "hembra_plano_r12", title: "HEMBRA GIRATORIA ASIENTO PLANO R12", link: "/productos#accesorios&sub=hembra_plano_r12" },
          { id: "hembra_plano_r2", title: "HEMBRA GIRATORIA ASIENTO PLANO R2", link: "/productos#accesorios&sub=hembra_plano_r2" },
          { id: "hembra_jic_r12", title: "HEMBRA GIRATORIA JIC R12", link: "/productos#accesorios&sub=hembra_jic_r12" },
          { id: "hembra_jic_90", title: "HEMBRA GIRATORIA JIC a 90", link: "/productos#accesorios&sub=hembra_jic_90" },
          { id: "hembra_jic_r2", title: "HEMBRA GIRATORIA JIC R2", link: "/productos#accesorios&sub=hembra_jic_r2" },
          { id: "espigas_r12", title: "ESPIGAS R12", link: "/productos#accesorios&sub=espigas_r12" },
          { id: "espigas_r2", title: "ESPIGAS R2", link: "/productos#accesorios&sub=espigas_r2" },
          { id: "freno_liquido", title: "CONEXIONES MANGUERA FRENO LÍQUIDO", link: "/productos#accesorios&sub=freno_liquido" },
          { id: "ferrules_interlock", title: "FERRULES DE ACERO INTERLOCK 4SH/ R13 / R15", link: "/productos#accesorios&sub=ferrules_interlock" },
          { id: "ferrules_4sh_r13_r15", title: "FERRULES DE ACERO 4SH/R13/R15", link: "/productos#accesorios&sub=ferrules_4sh_r13_r15" },
          { id: "ferrules_4sp_4sh", title: "FERRULES DE ACERO 4SP/ 4SH", link: "/productos#accesorios&sub=ferrules_4sp_4sh" },
          { id: "ferrules_r12_4sp_4sh", title: "FERRULES DE ACERO R12 4SP 4SH", link: "/productos#accesorios&sub=ferrules_r12_4sp_4sh" },
          { id: "ferrules_r2", title: "FERRULES DE ACERO R2", link: "/productos#accesorios&sub=ferrules_r2" },
          { id: "ferrules_r1", title: "FERRULES DE ACERO R1", link: "/productos#accesorios&sub=ferrules_r1" },
        ].reverse()
      },
      {
        id: 3.4,
        title: "Misceláneos",
        link: "/productos#miscelaneos",
        subcategories: [
          { id: "abrazaderas_inox", title: "ABRAZADERAS ACERO INOXIDABLE", link: "/productos#miscelaneos&sub=abrazaderas_inox" },
          { id: "maquina_prensado", title: "MÁQUINA DE PRENSADO ELÉCTRICO 1/8”-2”", link: "/productos#miscelaneos&sub=maquina_prensado" },
        ].reverse()
      },
    ]
  },
  {
    id: 4,
    title: "Contactos",
    link: "/contactos"
  }
]