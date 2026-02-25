// Categorías — carta real de Los Leños Parrilla
export const categories = [
    {
        id: 'Entradas',
        name: 'Entradas',
        subtitle: 'Para ir picando.',
        color: 'from-red-900 to-red-800',
        image: '/assets/empanadas-fritas.jpg'
    },
    {
        id: 'Parrilla',
        name: 'Parrilla',
        subtitle: 'Nuestros cortes a las brasas.',
        color: 'from-orange-900 to-orange-800',
        image: '/assets/milanesa-napolitana.jpg'
    },
    {
        id: 'Pescados',
        name: 'Pescados',
        subtitle: 'Del río a tu mesa.',
        color: 'from-blue-900 to-blue-800',
        image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'Sandwicheria',
        name: 'Sandwichería',
        subtitle: 'Especial de la casa.',
        color: 'from-yellow-900 to-yellow-800',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'Hamburguesas',
        name: 'Hamburguesas',
        subtitle: 'Especial de la casa.',
        color: 'from-red-900 to-red-800',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'Pizzas',
        name: 'Pizzas',
        subtitle: 'Al horno de barro.',
        color: 'from-orange-800 to-red-800',
        image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'Guarnicion',
        name: 'Guarnición y Papas',
        subtitle: 'Para acompañar tus platos.',
        color: 'from-yellow-900 to-yellow-800',
        image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'Ensaladas',
        name: 'Ensaladas Especiales',
        subtitle: 'Frescas y naturales.',
        color: 'from-green-900 to-green-800',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'Regionales',
        name: 'Comidas Regionales',
        subtitle: 'Sabor del norte argentino.',
        color: 'from-emerald-900 to-emerald-800',
        image: '/assets/locro-casero.jpg'
    },
    {
        id: 'Sugerencias',
        name: 'Sugerencia de la Casa',
        subtitle: 'Lo mejor de Los Leños.',
        color: 'from-amber-900 to-amber-800',
        image: '/assets/milanesa-napolitana.jpg'
    },
    {
        id: 'Pastas',
        name: 'Pastas',
        subtitle: 'Artesanales, con salsa.',
        color: 'from-stone-800 to-stone-700',
        image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop'
    },
];

// Platos — carta completa (precios en 0)
const menuItems = [

    // ─────────────────────────────────────────────────
    // ENTRADAS
    // ─────────────────────────────────────────────────
    {
        id: 1, category: 'Entradas',
        name: 'Empanada de Carne Cortada a Cuchillo', subtitle: 'EMPANADAS',
        price: 0, currency: 'ARS',
        description: 'Empanada rellena de carne cortada a cuchillo.',
        image: '/assets/empanadas-fritas.jpg', modelGlb: null,
        tags: [{ text: '🥩 Carne', highlight: true }]
    },
    {
        id: 2, category: 'Entradas',
        name: 'Empanada de Pollo', subtitle: 'EMPANADAS',
        price: 0, currency: 'ARS',
        description: 'Empanada rellena de pollo.',
        image: '/assets/empanadas-fritas.jpg', modelGlb: null,
        tags: [{ text: '🍗 Pollo', highlight: true }]
    },
    {
        id: 3, category: 'Entradas',
        name: 'Empanada de Queso', subtitle: 'EMPANADAS',
        price: 0, currency: 'ARS',
        description: 'Empanada rellena de queso.',
        image: '/assets/empanadas-fritas.jpg', modelGlb: null,
        tags: [{ text: '🧀 Queso', highlight: true }]
    },
    {
        id: 4, category: 'Entradas',
        name: 'Empanada de Matambre', subtitle: 'EMPANADAS',
        price: 0, currency: 'ARS',
        description: 'Empanada rellena de matambre.',
        image: '/assets/empanadas-fritas.jpg', modelGlb: null,
        tags: [{ text: '🥩 Matambre', highlight: true }]
    },
    {
        id: 5, category: 'Entradas',
        name: 'Entrada Norteña', subtitle: 'ENTRADA NORTEÑA',
        price: 0, currency: 'ARS',
        description: 'Queso criollo, choclo y papa del norte.',
        image: '/assets/empanadas-fritas.jpg', modelGlb: null,
        tags: [{ text: '🌽 Del Norte', highlight: true }]
    },
    {
        id: 6, category: 'Entradas',
        name: 'Entrada Los Leños', subtitle: 'ENTRADA LOS LEÑOS',
        price: 0, currency: 'ARS',
        description: 'Paquetitos de verdura y queso, al horno.',
        image: '/assets/empanadas-fritas.jpg', modelGlb: null,
        tags: [{ text: '🫑 Verdura', highlight: true }, { text: '🧀 Queso', highlight: false }]
    },
    {
        id: 7, category: 'Entradas',
        name: 'Tamales', subtitle: 'TAMALES',
        price: 0, currency: 'ARS',
        description: 'Tamales tradicionales.',
        image: '/assets/empanadas-fritas.jpg', modelGlb: null,
        tags: [{ text: '🌽 Tradicional', highlight: true }]
    },

    // ─────────────────────────────────────────────────
    // PARRILLA — Sets
    // ─────────────────────────────────────────────────
    {
        id: 8, category: 'Parrilla',
        name: 'Parrilla Los Leños 1 Persona', subtitle: 'PARRILLA LOS LEÑOS',
        price: 0, currency: 'ARS',
        description: 'Porción de tira de asado, vacío, tira de cerdo, molleja, chorizo, morcilla, riñón y chinchulin.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🔥 Parrilla', highlight: true }, { text: '👤 1 Persona', highlight: false }]
    },
    {
        id: 9, category: 'Parrilla',
        name: 'Parrilla Los Leños 2 Personas', subtitle: 'PARRILLA LOS LEÑOS',
        price: 0, currency: 'ARS',
        description: 'DOBLE porción de tira de asado, vacío, tira de cerdo, molleja, chorizo, morcilla, riñón y chinchulin.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🔥 Parrilla', highlight: true }, { text: '👥 2 Personas', highlight: false }]
    },
    {
        id: 10, category: 'Parrilla',
        name: 'Parrilla Especial 1 Persona', subtitle: 'PARRILLA ESPECIAL',
        price: 0, currency: 'ARS',
        description: 'Porción de tira de asado, vacío, pollo, chorizo, morcilla, riñón y chinchulin.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🔥 Especial', highlight: true }, { text: '👤 1 Persona', highlight: false }]
    },
    {
        id: 11, category: 'Parrilla',
        name: 'Parrilla Especial 2 Personas', subtitle: 'PARRILLA ESPECIAL',
        price: 0, currency: 'ARS',
        description: 'DOBLE porción de tira de asado, vacío, pollo, chorizo, morcilla, riñón y chinchulin.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🔥 Especial', highlight: true }, { text: '👥 2 Personas', highlight: false }]
    },
    // PARRILLA — Cortes de Asado, Cerdo y Pollo
    {
        id: 12, category: 'Parrilla',
        name: 'Tira de Asado', subtitle: 'CORTES',
        price: 0, currency: 'ARS',
        description: 'Porción de tira de asado a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🥩 Vacuno', highlight: true }]
    },
    {
        id: 13, category: 'Parrilla',
        name: 'Vacío', subtitle: 'CORTES',
        price: 0, currency: 'ARS',
        description: 'Porción de vacío a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🥩 Vacuno', highlight: true }]
    },
    {
        id: 14, category: 'Parrilla',
        name: 'Entraña', subtitle: 'CORTES',
        price: 0, currency: 'ARS',
        description: 'Porción de entraña a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🥩 Vacuno', highlight: true }]
    },
    {
        id: 15, category: 'Parrilla',
        name: 'Picaña', subtitle: 'CORTES',
        price: 0, currency: 'ARS',
        description: 'Porción de picaña a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🥩 Vacuno', highlight: true }]
    },
    {
        id: 16, category: 'Parrilla',
        name: 'Matambre Tiernizado', subtitle: 'CORTES',
        price: 0, currency: 'ARS',
        description: 'Matambre tiernizado a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🥩 Vacuno', highlight: true }]
    },
    {
        id: 17, category: 'Parrilla',
        name: 'Tira de Cerdo', subtitle: 'CORTES',
        price: 0, currency: 'ARS',
        description: 'Porción de tira de cerdo a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🐷 Cerdo', highlight: true }]
    },
    {
        id: 18, category: 'Parrilla',
        name: 'Bondio', subtitle: 'CORTES',
        price: 0, currency: 'ARS',
        description: 'Bondio de cerdo a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🐷 Cerdo', highlight: true }]
    },
    {
        id: 19, category: 'Parrilla',
        name: '¼ de Pollo Deshuesado', subtitle: 'CORTES',
        price: 0, currency: 'ARS',
        description: 'Un cuarto de pollo deshuesado a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🍗 Pollo', highlight: true }]
    },
    // PARRILLA — Embutidos y Achuras
    {
        id: 20, category: 'Parrilla',
        name: 'Mollejas', subtitle: 'EMBUTIDOS Y ACHURAS',
        price: 0, currency: 'ARS',
        description: 'Porción de mollejas a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🔥 Achuras', highlight: true }]
    },
    {
        id: 21, category: 'Parrilla',
        name: 'Chinchulines', subtitle: 'EMBUTIDOS Y ACHURAS',
        price: 0, currency: 'ARS',
        description: 'Porción de chinchulines a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🔥 Achuras', highlight: true }]
    },
    {
        id: 22, category: 'Parrilla',
        name: 'Riñones', subtitle: 'EMBUTIDOS Y ACHURAS',
        price: 0, currency: 'ARS',
        description: 'Porción de riñones a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🔥 Achuras', highlight: true }]
    },
    {
        id: 23, category: 'Parrilla',
        name: 'Chorizos', subtitle: 'EMBUTIDOS Y ACHURAS',
        price: 0, currency: 'ARS',
        description: 'Porción de chorizos a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🌭 Embutido', highlight: true }]
    },
    {
        id: 24, category: 'Parrilla',
        name: 'Morcillas', subtitle: 'EMBUTIDOS Y ACHURAS',
        price: 0, currency: 'ARS',
        description: 'Porción de morcillas a las brasas.',
        image: '/assets/milanesa-napolitana.jpg', modelGlb: null,
        tags: [{ text: '🌭 Embutido', highlight: true }]
    },

    // ─────────────────────────────────────────────────
    // GUARNICIÓN Y PAPAS
    // ─────────────────────────────────────────────────
    { id: 25, category: 'Guarnicion', name: 'Papa Fritas', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papas fritas clásicas.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍟 Fritas', highlight: true }] },
    { id: 26, category: 'Guarnicion', name: 'Papa Fritas con Huevo Revuelto', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papas fritas con huevo revuelto.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍟 Fritas', highlight: true }] },
    { id: 27, category: 'Guarnicion', name: 'Papa Fritas con Huevo y Jamón', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papas fritas con huevo y jamón.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍟 Fritas', highlight: true }] },
    { id: 28, category: 'Guarnicion', name: 'Papa Frita Revuelto Gramajo', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa frita estilo revuelto gramajo.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍟 Fritas', highlight: true }] },
    { id: 29, category: 'Guarnicion', name: 'Papa Fritas Pico con Cheddar y Verdeo', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papas fritas con pico de gallo, cheddar y cebolla de verdeo.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 Cheddar', highlight: true }] },
    { id: 30, category: 'Guarnicion', name: 'Papa Frita con Huevo y Queso Gratinado', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa frita con huevo y queso gratinado.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 Gratinado', highlight: true }] },
    { id: 31, category: 'Guarnicion', name: 'Papa Frita a los 4 Quesos', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa frita con salsa de cuatro quesos.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 4 Quesos', highlight: true }] },
    { id: 32, category: 'Guarnicion', name: 'Papa Frita con Chorizo, Salsa Brava y Verdeo', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa frita con chorizo, salsa brava y verdeo.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🌭 Chorizo', highlight: true }] },
    { id: 33, category: 'Guarnicion', name: 'Papa Fritas a Caballo', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa fritas con huevo frito encima.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍟 Fritas', highlight: true }] },
    { id: 34, category: 'Guarnicion', name: 'Papa Fritas a la Crema de Queso', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa fritas con crema de queso.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 Crema', highlight: true }] },
    { id: 35, category: 'Guarnicion', name: 'Papa Fritas a la Provenzal', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa fritas con salsa provenzal.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍟 Provenzal', highlight: true }] },
    { id: 36, category: 'Guarnicion', name: 'Papa Natural', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa hervida natural.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥔 Natural', highlight: true }] },
    { id: 37, category: 'Guarnicion', name: 'Papa Natural a la Crema de Queso', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa natural con crema de queso.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 Crema', highlight: true }] },
    { id: 38, category: 'Guarnicion', name: 'Papa Natural a los 4 Quesos', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa natural con salsa de cuatro quesos.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 4 Quesos', highlight: true }] },
    { id: 39, category: 'Guarnicion', name: 'Papa Dorada', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa dorada al horno.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥔 Dorada', highlight: true }] },
    { id: 40, category: 'Guarnicion', name: 'Papa Dorada a la Crema de Queso', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa dorada con crema de queso.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 Crema', highlight: true }] },
    { id: 41, category: 'Guarnicion', name: 'Papa Dorada a los 4 Quesos', subtitle: 'PAPAS', price: 0, currency: 'ARS', description: 'Papa dorada con salsa de cuatro quesos.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 4 Quesos', highlight: true }] },
    { id: 42, category: 'Guarnicion', name: 'Puré', subtitle: 'GUARNICIÓN', price: 0, currency: 'ARS', description: 'Puré de papas casero.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 43, category: 'Guarnicion', name: 'Ensalada Rusa', subtitle: 'GUARNICIÓN', price: 0, currency: 'ARS', description: 'Ensalada rusa tradicional.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 44, category: 'Guarnicion', name: 'Arroz', subtitle: 'GUARNICIÓN', price: 0, currency: 'ARS', description: 'Arroz blanco.', image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },

    // ─────────────────────────────────────────────────
    // ENSALADAS ESPECIALES
    // ─────────────────────────────────────────────────
    { id: 45, category: 'Ensaladas', name: 'Ensalada Los Leños', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Tomate, cebolla, lechuga, huevo duro, zanahoria, remolacha, chaucha y papa.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥗 Especial', highlight: true }] },
    { id: 46, category: 'Ensaladas', name: 'Ensalada Mixta', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Tomate, cebolla y lechuga.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 47, category: 'Ensaladas', name: 'Ensalada Brown', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Queso criollo, mote, tomate y cebolla.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 48, category: 'Ensaladas', name: 'Ensalada Renata', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Papa, huevo, remolacha y mayonesa.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 49, category: 'Ensaladas', name: 'Ensalada The Luxe', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Apio, manzana verde, crema, mayonesa y nuez.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '⭐ Premium', highlight: true }] },
    { id: 50, category: 'Ensaladas', name: 'Ensalada Simón', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Papa, huevo, perejil y mayonesa.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 51, category: 'Ensaladas', name: 'Ensalada Super Verde', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Lechuga, rúcula, radicheta, perejil y queso.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥬 Verde', highlight: true }] },
    { id: 52, category: 'Ensaladas', name: 'Ensalada Tadeo', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Chaucha, zanahoria y huevo.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 53, category: 'Ensaladas', name: 'Ensalada César', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Lechuga, pollo, tostado, queso sardo y aderezo.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍗 Pollo', highlight: true }] },
    { id: 54, category: 'Ensaladas', name: 'Ensalada Criolla', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Tomate, cebolla, morrón verde y morrón rojo.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 55, category: 'Ensaladas', name: 'Ensalada Caprese', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Cherry, albahaca y queso criollo.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍅 Italiana', highlight: true }] },
    { id: 56, category: 'Ensaladas', name: 'Ensalada de Palta', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Apio, morrón y palta.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥑 Palta', highlight: true }] },
    { id: 57, category: 'Ensaladas', name: 'Panache de Verdura', subtitle: 'ENSALADAS', price: 0, currency: 'ARS', description: 'Papa, remolacha, chaucha, zanahoria y huevo.', image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },

    // ─────────────────────────────────────────────────
    // COMIDAS REGIONALES
    // ─────────────────────────────────────────────────
    { id: 58, category: 'Regionales', name: 'Cordero al Horno', subtitle: 'REGIONALES', price: 0, currency: 'ARS', description: 'Cordero al horno con entrada norteña.', image: '/assets/locro-casero.jpg', modelGlb: null, tags: [{ text: '🐑 Cordero', highlight: true }] },
    { id: 59, category: 'Regionales', name: 'Locro', subtitle: 'REGIONALES', price: 0, currency: 'ARS', description: 'Locro tradicional norteño.', image: '/assets/locro-casero.jpg', modelGlb: null, tags: [{ text: '🍲 Tradicional', highlight: true }] },
    { id: 60, category: 'Regionales', name: 'Picante de Pollo', subtitle: 'REGIONALES', price: 0, currency: 'ARS', description: 'Picante de pollo estilo norteño.', image: '/assets/picante-de-pollo.png', modelGlb: null, tags: [{ text: '🍗 Pollo', highlight: true }, { text: '🌶️ Picante', highlight: false }] },
    { id: 61, category: 'Regionales', name: 'Picante de Lengua', subtitle: 'REGIONALES', price: 0, currency: 'ARS', description: 'Picante de lengua estilo norteño.', image: '/assets/locro-casero.jpg', modelGlb: null, tags: [{ text: '🌶️ Picante', highlight: true }] },
    { id: 62, category: 'Regionales', name: 'Estofado de Llama', subtitle: 'REGIONALES', price: 0, currency: 'ARS', description: 'Estofado de carne de llama.', image: '/assets/locro-casero.jpg', modelGlb: null, tags: [{ text: '🦙 Llama', highlight: true }] },
    { id: 63, category: 'Regionales', name: 'Estofado de Cordero', subtitle: 'REGIONALES', price: 0, currency: 'ARS', description: 'Estofado de carne de cordero.', image: '/assets/locro-casero.jpg', modelGlb: null, tags: [{ text: '🐑 Cordero', highlight: true }] },

    // ─────────────────────────────────────────────────
    // SUGERENCIA DE LA CASA
    // ─────────────────────────────────────────────────
    { id: 64, category: 'Sugerencias', name: 'Bife de Chorizo', subtitle: 'SUGERENCIAS', price: 0, currency: 'ARS', description: 'Bife de chorizo a las brasas.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [{ text: '🥩 Estrella', highlight: true }] },
    { id: 65, category: 'Sugerencias', name: 'Matambre Tiernizado con Guarnición', subtitle: 'SUGERENCIAS', price: 0, currency: 'ARS', description: 'Matambre tiernizado con guarnición a elección.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [] },
    { id: 66, category: 'Sugerencias', name: 'Matambre al Verdeo con Guarnición', subtitle: 'MATAMBRE', price: 0, currency: 'ARS', description: 'Matambre tiernizado al verdeo con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [] },
    { id: 67, category: 'Sugerencias', name: 'Matambre a los Cuatro Quesos con Guarnición', subtitle: 'MATAMBRE', price: 0, currency: 'ARS', description: 'Matambre tiernizado a los cuatro quesos con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [{ text: '🧀 4 Quesos', highlight: true }] },
    { id: 68, category: 'Sugerencias', name: 'Matambre a la Pizza con Guarnición', subtitle: 'MATAMBRE', price: 0, currency: 'ARS', description: 'Matambre tiernizado a la pizza con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [] },
    { id: 69, category: 'Sugerencias', name: 'Matambre a la Fugazetta con Guarnición', subtitle: 'MATAMBRE', price: 0, currency: 'ARS', description: 'Matambre tiernizado a la fugazetta con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [] },
    { id: 70, category: 'Sugerencias', name: 'Matambre a la Napolitana con Guarnición', subtitle: 'MATAMBRE', price: 0, currency: 'ARS', description: 'Matambre tiernizado a la napolitana con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [] },
    { id: 71, category: 'Sugerencias', name: 'Matambre al Champignon con Guarnición', subtitle: 'MATAMBRE', price: 0, currency: 'ARS', description: 'Matambre tiernizado al champignon con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [] },
    { id: 72, category: 'Sugerencias', name: 'Mollejas a la Crema de Verdeo con Guarnición', subtitle: 'MOLLEJAS', price: 0, currency: 'ARS', description: 'Mollejas a la crema de verdeo con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [{ text: '🔥 Achuras', highlight: true }] },
    { id: 73, category: 'Sugerencias', name: 'Mollejas a la Provenzal con Guarnición', subtitle: 'MOLLEJAS', price: 0, currency: 'ARS', description: 'Mollejas a la provenzal con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [{ text: '🔥 Achuras', highlight: true }] },
    { id: 74, category: 'Sugerencias', name: 'Mollejas al Limón con Guarnición', subtitle: 'MOLLEJAS', price: 0, currency: 'ARS', description: 'Mollejas al limón con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [{ text: '🔥 Achuras', highlight: true }] },
    { id: 75, category: 'Sugerencias', name: 'Riñón a la Provenzal con Guarnición', subtitle: 'RIÑÓN', price: 0, currency: 'ARS', description: 'Riñón a la provenzal con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [{ text: '🔥 Achuras', highlight: true }] },
    { id: 76, category: 'Sugerencias', name: 'Riñón al Vino con Guarnición', subtitle: 'RIÑÓN', price: 0, currency: 'ARS', description: 'Riñón al vino con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [{ text: '🔥 Achuras', highlight: true }] },
    { id: 77, category: 'Sugerencias', name: 'Costeleta de Cerdo al Verdeo con Guarnición', subtitle: 'SUGERENCIAS', price: 0, currency: 'ARS', description: 'Costeleta de cerdo al verdeo con guarnición.', image: '/assets/milanesa-napolitana.jpg', modelGlb: null, tags: [{ text: '🐷 Cerdo', highlight: true }] },

    // ─────────────────────────────────────────────────
    // PASTAS
    // ─────────────────────────────────────────────────
    { id: 78, category: 'Pastas', name: 'Spaghetti', subtitle: 'PASTAS', price: 0, currency: 'ARS', description: 'Al huevo, espinaca o morrón, con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍝 Pasta', highlight: true }] },
    { id: 79, category: 'Pastas', name: 'Tagliatelle', subtitle: 'PASTAS', price: 0, currency: 'ARS', description: 'Al huevo o espinaca, con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍝 Pasta', highlight: true }] },
    { id: 80, category: 'Pastas', name: 'Papardelle', subtitle: 'PASTAS', price: 0, currency: 'ARS', description: 'Al huevo o espinaca, con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍝 Pasta', highlight: true }] },
    { id: 81, category: 'Pastas', name: 'Ñoquis de Papa', subtitle: 'ÑOQUIS', price: 0, currency: 'ARS', description: 'Queso rallado con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 82, category: 'Pastas', name: 'Ñoquis Soufflé', subtitle: 'ÑOQUIS', price: 0, currency: 'ARS', description: 'Espinaca, queso rallado con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 83, category: 'Pastas', name: 'Ñoquis Calabaza', subtitle: 'ÑOQUIS', price: 0, currency: 'ARS', description: 'Calabaza, queso rallado con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 84, category: 'Pastas', name: 'Ñoquis Relleno', subtitle: 'ÑOQUIS', price: 0, currency: 'ARS', description: 'Jamón y queso con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 85, category: 'Pastas', name: 'Ravioles', subtitle: 'RAVIOLES', price: 0, currency: 'ARS', description: 'Jamón, queso, ralladura de limón con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 86, category: 'Pastas', name: 'Ravioles de Verduras', subtitle: 'RAVIOLES', price: 0, currency: 'ARS', description: 'Acelga, cebolla, morrón, zanahoria, queso rallado con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🫑 Verdura', highlight: true }] },
    { id: 87, category: 'Pastas', name: 'Ravioles de Carne', subtitle: 'RAVIOLES', price: 0, currency: 'ARS', description: 'Carne de lomo, queso criollo, cebolla de verdeo, con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥩 Carne', highlight: true }] },
    { id: 88, category: 'Pastas', name: 'Ravioles de Ricota', subtitle: 'RAVIOLES', price: 0, currency: 'ARS', description: 'Ricota y queso rallado con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 89, category: 'Pastas', name: 'Cappellitti de Choclo', subtitle: 'CAPPELLITTI', price: 0, currency: 'ARS', description: 'Choclo, queso criollo y albahaca con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 90, category: 'Pastas', name: 'Cappellitti de Jamón y Queso', subtitle: 'CAPPELLITTI', price: 0, currency: 'ARS', description: 'Jamón y queso con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 91, category: 'Pastas', name: 'Cappellitti Verduras', subtitle: 'CAPPELLITTI', price: 0, currency: 'ARS', description: 'Acelga, cebolla, morrón, zanahoria, queso rallado con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🫑 Verdura', highlight: true }] },
    { id: 92, category: 'Pastas', name: 'Cappellitti Carne', subtitle: 'CAPPELLITTI', price: 0, currency: 'ARS', description: 'Carne de lomo, queso criollo, cebolla de verdeo con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥩 Carne', highlight: true }] },
    { id: 93, category: 'Pastas', name: 'Lasagna Verduras', subtitle: 'LASAGNA', price: 0, currency: 'ARS', description: 'Lasagna de verduras con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🫑 Verdura', highlight: true }] },
    { id: 94, category: 'Pastas', name: 'Lasagna Carne', subtitle: 'LASAGNA', price: 0, currency: 'ARS', description: 'Lasagna de carne con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥩 Carne', highlight: true }] },
    { id: 95, category: 'Pastas', name: 'Canelones Verduras', subtitle: 'CANELONES', price: 0, currency: 'ARS', description: 'Canelones de verduras con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🫑 Verdura', highlight: true }] },
    { id: 96, category: 'Pastas', name: 'Sorrentinos de Jamón y Queso', subtitle: 'SORRENTINOS', price: 0, currency: 'ARS', description: 'Jamón y queso con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 97, category: 'Pastas', name: 'Sorrentinos de Bondiola y Cebolla Ahumada', subtitle: 'SORRENTINOS', price: 0, currency: 'ARS', description: 'Bondiola y cebolla ahumada con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '💨 Ahumado', highlight: true }] },
    { id: 98, category: 'Pastas', name: 'Sorrentinos de Pollo', subtitle: 'SORRENTINOS', price: 0, currency: 'ARS', description: 'Pollo, puerro, jamón y queso con salsa.', image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍗 Pollo', highlight: true }] },

    // ─────────────────────────────────────────────────
    // PESCADOS
    // ─────────────────────────────────────────────────
    { id: 99, category: 'Pescados', name: 'Surubí al Paquete', subtitle: 'PESCADOS', price: 0, currency: 'ARS', description: 'Surubí al paquete con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Pescado', highlight: true }] },
    { id: 100, category: 'Pescados', name: 'Trucha a los 4 Quesos', subtitle: 'TRUCHAS', price: 0, currency: 'ARS', description: 'Trucha a los 4 quesos con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Trucha', highlight: true }] },
    { id: 101, category: 'Pescados', name: 'Trucha a la Salsa de Queso', subtitle: 'TRUCHAS', price: 0, currency: 'ARS', description: 'Trucha a la salsa de queso con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Trucha', highlight: true }] },
    { id: 102, category: 'Pescados', name: 'Trucha al Limón', subtitle: 'TRUCHAS', price: 0, currency: 'ARS', description: 'Trucha al limón con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Trucha', highlight: true }] },
    { id: 103, category: 'Pescados', name: 'Trucha a la Crema de Limón', subtitle: 'TRUCHAS', price: 0, currency: 'ARS', description: 'Trucha a la crema de limón con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Trucha', highlight: true }] },
    { id: 104, category: 'Pescados', name: 'Trucha a la Provenzal', subtitle: 'TRUCHAS', price: 0, currency: 'ARS', description: 'Trucha a la provenzal con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Trucha', highlight: true }] },
    { id: 105, category: 'Pescados', name: 'Trucha a la Pimienta Negra', subtitle: 'TRUCHAS', price: 0, currency: 'ARS', description: 'Trucha a la pimienta negra con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Trucha', highlight: true }] },
    { id: 106, category: 'Pescados', name: 'Trucha a la Manteca Negra', subtitle: 'TRUCHAS', price: 0, currency: 'ARS', description: 'Trucha a la manteca negra con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Trucha', highlight: true }] },
    { id: 107, category: 'Pescados', name: 'Pacú a los 4 Quesos', subtitle: 'PACÚ', price: 0, currency: 'ARS', description: 'Pacú a los 4 quesos con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Pacú', highlight: true }] },
    { id: 108, category: 'Pescados', name: 'Pacú a la Salsa de Queso', subtitle: 'PACÚ', price: 0, currency: 'ARS', description: 'Pacú a la salsa de queso con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Pacú', highlight: true }] },
    { id: 109, category: 'Pescados', name: 'Pacú al Limón', subtitle: 'PACÚ', price: 0, currency: 'ARS', description: 'Pacú al limón con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Pacú', highlight: true }] },
    { id: 110, category: 'Pescados', name: 'Pacú a la Crema de Limón', subtitle: 'PACÚ', price: 0, currency: 'ARS', description: 'Pacú a la crema de limón con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Pacú', highlight: true }] },
    { id: 111, category: 'Pescados', name: 'Pacú a la Provenzal', subtitle: 'PACÚ', price: 0, currency: 'ARS', description: 'Pacú a la provenzal con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Pacú', highlight: true }] },
    { id: 112, category: 'Pescados', name: 'Pacú a la Pimienta Negra', subtitle: 'PACÚ', price: 0, currency: 'ARS', description: 'Pacú a la pimienta negra con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Pacú', highlight: true }] },
    { id: 113, category: 'Pescados', name: 'Pacú a la Manteca Negra', subtitle: 'PACÚ', price: 0, currency: 'ARS', description: 'Pacú a la manteca negra con guarnición.', image: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐟 Pacú', highlight: true }] },

    // ─────────────────────────────────────────────────
    // SANDWICHERÍA
    // ─────────────────────────────────────────────────
    { id: 114, category: 'Sandwicheria', name: 'Napolitana Especial', subtitle: 'NAPOLITANAS', price: 0, currency: 'ARS', description: 'Napolitana especial con guarnición.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '⭐ Especial', highlight: true }] },
    { id: 115, category: 'Sandwicheria', name: 'Napolitana a la Pizza', subtitle: 'NAPOLITANAS', price: 0, currency: 'ARS', description: 'Napolitana a la pizza con guarnición.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 116, category: 'Sandwicheria', name: 'Napolitana 4 Quesos', subtitle: 'NAPOLITANAS', price: 0, currency: 'ARS', description: 'Napolitana 4 quesos con guarnición.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 4 Quesos', highlight: true }] },
    { id: 117, category: 'Sandwicheria', name: 'Napolitana Fugazzeta', subtitle: 'NAPOLITANAS', price: 0, currency: 'ARS', description: 'Napolitana fugazzeta con guarnición.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 118, category: 'Sandwicheria', name: 'Napolitana con Panceta y Cheddar', subtitle: 'NAPOLITANAS', price: 0, currency: 'ARS', description: 'Napolitana con panceta y cheddar con guarnición.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 Cheddar', highlight: true }] },
    { id: 119, category: 'Sandwicheria', name: 'Napolitana con Cebolla Caramelizada', subtitle: 'NAPOLITANAS', price: 0, currency: 'ARS', description: 'Napolitana con cebolla caramelizada con guarnición.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 120, category: 'Sandwicheria', name: 'Super Napolitana', subtitle: 'NAPOLITANAS', price: 0, currency: 'ARS', description: 'Super napolitana con guarnición.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '⭐ Super', highlight: true }] },
    { id: 121, category: 'Sandwicheria', name: 'Sandwich Milanesa Especial', subtitle: 'SANDWICHES', price: 0, currency: 'ARS', description: 'Sandwich de milanesa especial con papas.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥪 Sandwich', highlight: true }] },
    { id: 122, category: 'Sandwicheria', name: 'Sandwich Milanesa Capresse', subtitle: 'SANDWICHES', price: 0, currency: 'ARS', description: 'Sandwich de milanesa capresse con papas.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥪 Sandwich', highlight: true }] },
    { id: 123, category: 'Sandwicheria', name: 'Sandwich Lomito Especial', subtitle: 'SANDWICHES', price: 0, currency: 'ARS', description: 'Sandwich de lomito especial con papas.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥪 Sandwich', highlight: true }] },
    { id: 124, category: 'Sandwicheria', name: 'Sandwich Lomito Capresse', subtitle: 'SANDWICHES', price: 0, currency: 'ARS', description: 'Sandwich de lomito capresse con papas.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥪 Sandwich', highlight: true }] },
    { id: 125, category: 'Sandwicheria', name: 'Sandwich de Matambre', subtitle: 'SANDWICHES', price: 0, currency: 'ARS', description: 'Sandwich de matambre con papas.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥪 Sandwich', highlight: true }] },
    { id: 126, category: 'Sandwicheria', name: 'Sandwich de Entraña', subtitle: 'SANDWICHES', price: 0, currency: 'ARS', description: 'Sandwich de entraña con papas.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥩 Entraña', highlight: true }] },
    { id: 127, category: 'Sandwicheria', name: 'Sandwich de Vacío', subtitle: 'SANDWICHES', price: 0, currency: 'ARS', description: 'Sandwich de vacío con papas.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🥩 Vacío', highlight: true }] },
    { id: 128, category: 'Sandwicheria', name: 'Sandwich de Bondiola', subtitle: 'SANDWICHES', price: 0, currency: 'ARS', description: 'Sandwich de bondiola con papas.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🐷 Bondiola', highlight: true }] },
    { id: 129, category: 'Sandwicheria', name: 'Sandwich Milanesa de Pollo', subtitle: 'SANDWICHES', price: 0, currency: 'ARS', description: 'Sandwich de milanesa de pollo con papas.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍗 Pollo', highlight: true }] },

    // ─────────────────────────────────────────────────
    // HAMBURGUESAS
    // ─────────────────────────────────────────────────
    { id: 130, category: 'Hamburguesas', name: 'Hamburguesa Clásica', subtitle: 'HAMBURGUESAS', price: 0, currency: 'ARS', description: 'Medallón de carne, tomate, jamón, queso tybo y huevo.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍔 Classic', highlight: true }] },
    { id: 131, category: 'Hamburguesas', name: 'Hamburguesa Los Leños', subtitle: 'HAMBURGUESAS', price: 0, currency: 'ARS', description: 'Medallón de carne, tomate en rodajas (opcional cherry), cheddar, panceta y huevo.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '⭐ Especial', highlight: true }] },
    { id: 132, category: 'Hamburguesas', name: 'Hamburguesa Americana', subtitle: 'HAMBURGUESAS', price: 0, currency: 'ARS', description: 'Medallón de carne, cheddar, panceta, ketchup y huevo.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🇺🇸 Americana', highlight: true }] },
    { id: 133, category: 'Hamburguesas', name: 'Hamburguesa Argenta', subtitle: 'HAMBURGUESAS', price: 0, currency: 'ARS', description: 'Medallón de carne, muzzarella, panceta, cebolla caramelizada y barbacoa.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🇦🇷 Argenta', highlight: true }] },
    { id: 134, category: 'Hamburguesas', name: 'Hamburguesa Cheedar', subtitle: 'HAMBURGUESAS', price: 0, currency: 'ARS', description: 'Baño de cheddar, medallón de carne, panceta, morrones salteados y barbacoa.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 Cheddar', highlight: true }] },
    { id: 135, category: 'Hamburguesas', name: 'Hamburguesa Pepo', subtitle: 'HAMBURGUESAS', price: 0, currency: 'ARS', description: 'Medallón de carne, muzzarella, tomate cherry, rúcula, queso parmesano, jamón crudo y barbacoa.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '⭐ Gourmet', highlight: true }] },
    { id: 136, category: 'Hamburguesas', name: 'Hamburguesa Tristán', subtitle: 'HAMBURGUESAS', price: 0, currency: 'ARS', description: 'Medallón de carne, cheddar, panceta, tomate, huevo y barbacoa.', image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🍔 BBQ', highlight: true }] },

    // ─────────────────────────────────────────────────
    // PIZZAS
    // ─────────────────────────────────────────────────
    { id: 137, category: 'Pizzas', name: 'Pizza Champignon', subtitle: 'PIZZAS', price: 0, currency: 'ARS', description: 'Pizza de champignon.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 138, category: 'Pizzas', name: 'Pizza Calabaza', subtitle: 'PIZZAS', price: 0, currency: 'ARS', description: 'Pizza de calabaza.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 139, category: 'Pizzas', name: 'Pizza Fugazzeta', subtitle: 'PIZZAS', price: 0, currency: 'ARS', description: 'Pizza fugazzeta.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 140, category: 'Pizzas', name: 'Pizza Napolitana', subtitle: 'PIZZAS', price: 0, currency: 'ARS', description: 'Pizza napolitana.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 141, category: 'Pizzas', name: 'Pizza Muzarella', subtitle: 'PIZZAS', price: 0, currency: 'ARS', description: 'Pizza de muzarella.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
    { id: 142, category: 'Pizzas', name: 'Pizza Especial', subtitle: 'PIZZAS', price: 0, currency: 'ARS', description: 'Pizza especial de la casa.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '⭐ Especial', highlight: true }] },
    { id: 143, category: 'Pizzas', name: 'Pizza a los 4 Quesos', subtitle: 'PIZZAS', price: 0, currency: 'ARS', description: 'Pizza a los cuatro quesos.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [{ text: '🧀 4 Quesos', highlight: true }] },
    { id: 144, category: 'Pizzas', name: 'Pizza de Anchoas', subtitle: 'PIZZAS', price: 0, currency: 'ARS', description: 'Pizza de anchoas.', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=600&auto=format&fit=crop', modelGlb: null, tags: [] },
];

// Fake API call with artificial delay
// Prices are randomized 1–15 for cart testing purposes
export const fetchMenu = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const itemsWithPrices = menuItems.map(item => ({
                ...item,
                price: Math.floor(Math.random() * 15) + 1,
            }));
            resolve({ categories, menuItems: itemsWithPrices });
        }, 1500);
    });
};
