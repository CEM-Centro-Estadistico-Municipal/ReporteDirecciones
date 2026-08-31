/* ============================================================================
   CATÁLOGO DE UNIDADES REPORTANTES
   Fuente: Anexo II — Manual de Funciones del Departamento Ejecutivo Municipal
           (Ordenanza de Reordenamiento Administrativo Integral) + Organigrama
           Municipal, Departamento Ejecutivo Municipal.
   Las denominaciones NO deben modificarse sin actualizar el Anexo II.

   indicadores: hasta 3 por dirección. Se repiten idénticos todos los períodos.
                Son los que construyen serie temporal. Validarlos con cada
                director en la reunión de puesta en marcha.
   ========================================================================== */

const CATALOGO = {

  /* ---------- INTENDENCIA — dependencias directas ---------- */
  "int-privada": {
    sec: "Intendencia", dir: "Secretaría Privada",
    indicadores: [
      { id: "audiencias", label: "Audiencias oficiales registradas", unidad: "cantidad" },
      { id: "actos", label: "Actos institucionales coordinados", unidad: "cantidad" },
      { id: "correspondencia", label: "Notas y memorándums tramitados", unidad: "cantidad" }
    ]
  },
  "int-letrada": {
    sec: "Intendencia", dir: "Asesoría Letrada",
    indicadores: [
      { id: "dictamenes", label: "Dictámenes emitidos", unidad: "cantidad" },
      { id: "juicios", label: "Causas judiciales activas", unidad: "cantidad" },
      { id: "omic", label: "Reclamos OMIC recibidos", unidad: "cantidad" }
    ]
  },
  "int-escribania": {
    sec: "Intendencia", dir: "Escribanía Municipal",
    indicadores: [
      { id: "escrituras", label: "Escrituras y actas autorizadas", unidad: "cantidad" },
      { id: "certificaciones", label: "Certificaciones y autenticaciones", unidad: "cantidad" }
    ]
  },

  /* ---------- 3 · COORDINACIÓN GENERAL ---------- */
  "cg-cem": {
    sec: "Coordinación General", dir: "Centro Estadístico Municipal (CEM)",
    indicadores: [
      { id: "productos", label: "Productos estadísticos entregados", unidad: "cantidad" },
      { id: "pedidos", label: "Pedidos de información atendidos", unidad: "cantidad" },
      { id: "relevamientos", label: "Relevamientos en campo", unidad: "cantidad" }
    ]
  },
  "cg-planificacion": {
    sec: "Coordinación General", dir: "Dirección de Planificación y Modernización",
    indicadores: [
      { id: "tramites_dig", label: "Trámites digitalizados acumulados", unidad: "cantidad" },
      { id: "tickets", label: "Tickets de soporte informático resueltos", unidad: "cantidad" },
      { id: "procesos", label: "Procesos rediseñados", unidad: "cantidad" }
    ]
  },
  "cg-comunicacion": {
    sec: "Coordinación General", dir: "Dirección de Comunicación Institucional",
    indicadores: [
      { id: "piezas", label: "Piezas producidas", unidad: "cantidad" },
      { id: "coberturas", label: "Coberturas de actos y operativos", unidad: "cantidad" },
      { id: "gacetillas", label: "Gacetillas enviadas a medios", unidad: "cantidad" }
    ]
  },
  "cg-rrhh": {
    sec: "Coordinación General", dir: "Dirección de Recursos Humanos y Personal",
    indicadores: [
      { id: "movimientos", label: "Movimientos de personal procesados", unidad: "cantidad" },
      { id: "ausentismo", label: "Tasa de ausentismo del período", unidad: "porcentaje" },
      { id: "capacitados", label: "Agentes capacitados", unidad: "personas" }
    ]
  },
  "cg-psicosocial": {
    sec: "Coordinación General", dir: "Gabinete Psicosocial",
    indicadores: [
      { id: "casos_nuevos", label: "Casos nuevos abiertos", unidad: "cantidad" },
      { id: "casos_activos", label: "Casos activos en seguimiento", unidad: "cantidad" },
      { id: "casos_cerrados", label: "Casos cerrados", unidad: "cantidad" }
    ]
  },

  /* ---------- 4 · GOBIERNO ---------- */
  "gob-seguridad": {
    sec: "Gobierno", dir: "Dirección de Seguridad Urbana y Vial",
    indicadores: [
      { id: "operativos", label: "Operativos de tránsito y alcoholemia", unidad: "cantidad" },
      { id: "actas", label: "Actas de infracción labradas", unidad: "cantidad" },
      { id: "accidentes", label: "Accidentes registrados en el período", unidad: "cantidad" }
    ]
  },
  "gob-inspeccion": {
    sec: "Gobierno", dir: "Dirección de Inspección y Fiscalización",
    indicadores: [
      { id: "inspecciones", label: "Inspecciones realizadas", unidad: "cantidad" },
      { id: "habilitaciones", label: "Habilitaciones comerciales tramitadas", unidad: "cantidad" },
      { id: "clausuras", label: "Clausuras y sanciones aplicadas", unidad: "cantidad" }
    ]
  },
  "gob-defensacivil": {
    sec: "Gobierno", dir: "Dirección de Defensa Civil",
    indicadores: [
      { id: "intervenciones", label: "Intervenciones ante emergencias", unidad: "cantidad" },
      { id: "personas", label: "Personas asistidas", unidad: "personas" },
      { id: "capacitaciones", label: "Simulacros y capacitaciones", unidad: "cantidad" }
    ]
  },
  "gob-administracion": {
    sec: "Gobierno", dir: "Dirección de Administración y Servicios",
    indicadores: [
      { id: "recaudacion", label: "Recaudación por cánones y arriendos", unidad: "pesos" },
      { id: "cementerio", label: "Trámites de cementerio gestionados", unidad: "cantidad" },
      { id: "faena", label: "Animales faenados en el Matadero", unidad: "cantidad" }
    ]
  },

  /* ---------- 5 · HACIENDA Y FINANZAS ---------- */
  "hac-tesoreria": {
    sec: "Hacienda y Finanzas", dir: "Tesorería Municipal",
    indicadores: [
      { id: "ingresos", label: "Ingresos percibidos en el período", unidad: "pesos" },
      { id: "pagos", label: "Órdenes de pago canceladas", unidad: "cantidad" },
      { id: "flotante", label: "Deuda flotante al cierre", unidad: "pesos" }
    ]
  },
  "hac-contabilidad": {
    sec: "Hacienda y Finanzas", dir: "Dirección de Contabilidad y Administración",
    indicadores: [
      { id: "ejecucion", label: "Ejecución presupuestaria acumulada", unidad: "porcentaje" },
      { id: "compras", label: "Procesos de compra cerrados", unidad: "cantidad" },
      { id: "dias_compra", label: "Días promedio del proceso de compra", unidad: "días" }
    ]
  },
  "hac-ingresos": {
    sec: "Hacienda y Finanzas", dir: "Dirección de Ingresos Públicos",
    indicadores: [
      { id: "cumplimiento", label: "Tasa de cumplimiento tributario", unidad: "porcentaje" },
      { id: "planes", label: "Planes de pago otorgados", unidad: "cantidad" },
      { id: "altas_padron", label: "Altas en los padrones impositivos", unidad: "cantidad" }
    ]
  },

  /* ---------- 6 · OBRAS Y SERVICIOS PÚBLICOS ---------- */
  "obr-subsecretaria": {
    sec: "Obras y Servicios Públicos", dir: "Subsecretaría de Obras Públicas",
    indicadores: [
      { id: "obras_curso", label: "Obras en ejecución", unidad: "cantidad" },
      { id: "obras_fin", label: "Obras finalizadas en el período", unidad: "cantidad" },
      { id: "reclamos_sanit", label: "Reclamos de agua y cloacas atendidos", unidad: "cantidad" }
    ]
  },
  "obr-vivienda": {
    sec: "Obras y Servicios Públicos", dir: "Dirección de Vivienda Municipal",
    indicadores: [
      { id: "postulantes", label: "Postulantes en registro", unidad: "cantidad" },
      { id: "unidades", label: "Unidades entregadas o en gestión", unidad: "cantidad" },
      { id: "mejoramientos", label: "Operatorias de mejoramiento activas", unidad: "cantidad" }
    ]
  },
  "obr-higieneseguridad": {
    sec: "Obras y Servicios Públicos", dir: "Dirección de Higiene y Seguridad",
    indicadores: [
      { id: "auditorias", label: "Auditorías de obra realizadas", unidad: "cantidad" },
      { id: "actas", label: "Actas de infracción y emplazamientos", unidad: "cantidad" }
    ]
  },
  "obr-servicios": {
    sec: "Obras y Servicios Públicos", dir: "Dirección de Servicios Públicos",
    indicadores: [
      { id: "reclamos_ing", label: "Reclamos ingresados", unidad: "cantidad" },
      { id: "reclamos_res", label: "Reclamos resueltos", unidad: "cantidad" },
      { id: "luminarias", label: "Luminarias repuestas o reparadas", unidad: "cantidad" }
    ]
  },
  "obr-catastro": {
    sec: "Obras y Servicios Públicos", dir: "Catastro y Urbanismo",
    indicadores: [
      { id: "permisos", label: "Permisos de obra otorgados", unidad: "cantidad" },
      { id: "planos", label: "Planos de mensura visados", unidad: "cantidad" },
      { id: "finales", label: "Finales de obra emitidos", unidad: "cantidad" }
    ]
  },

  /* ---------- 7 · DESARROLLO HUMANO ---------- */
  "dh-accionsocial": {
    sec: "Desarrollo Humano", dir: "Dirección de Acción Social",
    indicadores: [
      { id: "familias", label: "Familias asistidas", unidad: "cantidad" },
      { id: "relevamientos", label: "Relevamientos socioeconómicos realizados", unidad: "cantidad" },
      { id: "comedores", label: "Raciones entregadas en comedores", unidad: "cantidad" }
    ]
  },
  "dh-familia": {
    sec: "Desarrollo Humano", dir: "Dirección de Familia, Niñez y Adolescencia",
    indicadores: [
      { id: "casos_nuevos", label: "Situaciones nuevas atendidas", unidad: "cantidad" },
      { id: "casos_seguim", label: "Situaciones en seguimiento activo", unidad: "cantidad" },
      { id: "prevencion", label: "Actividades de prevención realizadas", unidad: "cantidad" }
    ]
  },
  "dh-genero": {
    sec: "Desarrollo Humano", dir: "Dirección de Género y Diversidades",
    indicadores: [
      { id: "acompanamientos", label: "Personas acompañadas", unidad: "personas" },
      { id: "talleres", label: "Talleres de sensibilización dictados", unidad: "cantidad" }
    ]
  },
  "dh-adultosmayores": {
    sec: "Desarrollo Humano", dir: "Dirección de Políticas para Adultos Mayores",
    indicadores: [
      { id: "clubes", label: "Clubes de adultos mayores activos", unidad: "cantidad" },
      { id: "participantes", label: "Participantes en programas", unidad: "personas" }
    ]
  },
  "dh-discapacidad": {
    sec: "Desarrollo Humano", dir: "Dirección de Discapacidad",
    indicadores: [
      { id: "censo", label: "Personas en el censo municipal de discapacidad", unidad: "personas" },
      { id: "inclusion", label: "Personas en programas de inclusión", unidad: "personas" },
      { id: "accesibilidad", label: "Intervenciones de accesibilidad gestionadas", unidad: "cantidad" }
    ]
  },
  "dh-juventud": {
    sec: "Desarrollo Humano", dir: "Dirección de Juventud",
    indicadores: [
      { id: "participantes", label: "Jóvenes participantes en programas", unidad: "personas" },
      { id: "actividades", label: "Actividades realizadas", unidad: "cantidad" },
      { id: "orientacion", label: "Orientaciones vocacionales o laborales", unidad: "cantidad" }
    ]
  },
  "dh-deportes": {
    sec: "Desarrollo Humano", dir: "Dirección de Deportes y Recreación",
    indicadores: [
      { id: "escuelas", label: "Inscriptos en Escuelas Deportivas Municipales", unidad: "personas" },
      { id: "torneos", label: "Torneos y eventos organizados", unidad: "cantidad" },
      { id: "clubes", label: "Clubes y asociaciones asistidas", unidad: "cantidad" }
    ]
  },

  /* ---------- 8 · SALUD PÚBLICA ---------- */
  "sal-saludpublica": {
    sec: "Salud Pública", dir: "Dirección de Salud Pública",
    indicadores: [
      { id: "consultas", label: "Consultas atendidas en consultorios", unidad: "cantidad" },
      { id: "vacunas", label: "Dosis aplicadas", unidad: "cantidad" },
      { id: "operativos", label: "Operativos itinerantes en parajes", unidad: "cantidad" }
    ]
  },
  "sal-bromatologia": {
    sec: "Salud Pública", dir: "Dirección de Bromatología y Zoonosis",
    indicadores: [
      { id: "inspecciones", label: "Inspecciones bromatológicas", unidad: "cantidad" },
      { id: "castraciones", label: "Castraciones realizadas", unidad: "cantidad" },
      { id: "antirrabica", label: "Dosis antirrábicas aplicadas", unidad: "cantidad" }
    ]
  },
  "sal-interdisciplinario": {
    sec: "Salud Pública", dir: "Equipo Interdisciplinario",
    indicadores: [
      { id: "intervenciones", label: "Intervenciones realizadas", unidad: "cantidad" },
      { id: "informes", label: "Informes técnicos emitidos", unidad: "cantidad" }
    ]
  },

  /* ---------- 9 · TURISMO Y CULTURA ---------- */
  "tc-turismo": {
    sec: "Turismo y Cultura", dir: "Dirección de Promoción Turística",
    indicadores: [
      { id: "consultas", label: "Consultas en oficinas de informes", unidad: "cantidad" },
      { id: "ocupacion", label: "Ocupación hotelera promedio", unidad: "porcentaje" },
      { id: "prestadores", label: "Prestadores capacitados", unidad: "cantidad" }
    ]
  },
  "tc-cultura": {
    sec: "Turismo y Cultura", dir: "Dirección de Cultura",
    indicadores: [
      { id: "eventos", label: "Eventos culturales realizados", unidad: "cantidad" },
      { id: "talleristas", label: "Inscriptos en talleres y escuelas", unidad: "personas" },
      { id: "asistentes", label: "Asistentes estimados", unidad: "personas" }
    ]
  },
  "tc-festividades": {
    sec: "Turismo y Cultura", dir: "Dirección de Festividades",
    indicadores: [
      { id: "eventos", label: "Eventos del calendario ejecutados", unidad: "cantidad" },
      { id: "mesas", label: "Mesas operativas con comisiones", unidad: "cantidad" },
      { id: "contratos", label: "Contratos artísticos y técnicos gestionados", unidad: "cantidad" }
    ]
  },
  "tc-patrimonio": {
    sec: "Turismo y Cultura", dir: "Dirección de Patrimonio",
    indicadores: [
      { id: "catalogo", label: "Bienes en el Catálogo de Bienes Patrimoniales", unidad: "cantidad" },
      { id: "visitantes", label: "Visitantes al Museo Municipal", unidad: "personas" },
      { id: "intervenciones", label: "Intervenciones de preservación supervisadas", unidad: "cantidad" }
    ]
  },

  /* ---------- 10 · DESARROLLO PRODUCTIVO ---------- */
  "dp-produccion": {
    sec: "Desarrollo Productivo", dir: "Dirección de Producción",
    indicadores: [
      { id: "productores", label: "Productores asistidos", unidad: "cantidad" },
      { id: "financiamiento", label: "Microcréditos e incentivos otorgados", unidad: "cantidad" },
      { id: "plantines", label: "Plantines producidos en el vivero", unidad: "cantidad" }
    ]
  },
  "dp-emprendedores": {
    sec: "Desarrollo Productivo", dir: "Dirección de Emprendedores",
    indicadores: [
      { id: "emprendedores", label: "Emprendedores acompañados", unidad: "personas" },
      { id: "formalizados", label: "Emprendimientos formalizados", unidad: "cantidad" },
      { id: "ferias", label: "Ferias y paseos organizados", unidad: "cantidad" }
    ]
  },
  "dp-educacion": {
    sec: "Desarrollo Productivo", dir: "Dirección de Educación",
    indicadores: [
      { id: "cursantes", label: "Estudiantes en trayectos formativos", unidad: "personas" },
      { id: "convenios", label: "Convenios formativos vigentes", unidad: "cantidad" },
      { id: "becas", label: "Becas y apoyos gestionados", unidad: "cantidad" }
    ]
  },
  "dp-empleo": {
    sec: "Desarrollo Productivo", dir: "Dirección de Empleo",
    indicadores: [
      { id: "inscriptos", label: "Inscriptos en la Oficina de Empleo", unidad: "personas" },
      { id: "intermediaciones", label: "Intermediaciones laborales concretadas", unidad: "cantidad" },
      { id: "talleres", label: "Talleres de orientación dictados", unidad: "cantidad" }
    ]
  },
  "dp-medioambiente": {
    sec: "Desarrollo Productivo", dir: "Dirección de Medio Ambiente",
    indicadores: [
      { id: "fiscalizaciones", label: "Fiscalizaciones de impacto ambiental", unidad: "cantidad" },
      { id: "reciclado", label: "Toneladas ingresadas a reciclaje", unidad: "toneladas" },
      { id: "concientizacion", label: "Acciones de concientización", unidad: "cantidad" }
    ]
  }
};

const SECRETARIAS = [
  "Intendencia",
  "Coordinación General",
  "Gobierno",
  "Hacienda y Finanzas",
  "Obras y Servicios Públicos",
  "Desarrollo Humano",
  "Salud Pública",
  "Turismo y Cultura",
  "Desarrollo Productivo"
];

if (typeof module !== "undefined") module.exports = { CATALOGO, SECRETARIAS };
