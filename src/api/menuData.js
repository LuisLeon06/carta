// Estructura de categorías
export const categories = [
    {
        id: 'Platos Principales',
        name: 'Platos Principales',
        subtitle: 'Para los de buen comer.',
        color: 'from-orange-900 to-orange-800',
        image: '/assets/milanesa-napolitana.jpg'
    },
    {
        id: 'Tradicional',
        name: 'Comida Tradicional',
        subtitle: 'Nuestros platos autóctonos.',
        color: 'from-emerald-900 to-emerald-800',
        image: '/assets/locro-casero.jpg'
    },
    {
        id: 'Entradas',
        name: 'Entradas',
        subtitle: 'Para ir picando.',
        color: 'from-red-900 to-red-800',
        image: '/assets/empanadas-fritas.jpg'
    },
    {
        id: 'Postres',
        name: 'Postres',
        subtitle: 'Los mejores postres para terminar tu comida.',
        color: 'from-fuchsia-900 to-fuchsia-800',
        image: '/assets/volcan-chocolate.jpg'
    },
    {
        id: 'Bebidas',
        name: 'Bebidas',
        subtitle: 'Refrescantes, jugos naturales y más.',
        color: 'from-[var(--color-primary-dark)] to-blue-900',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop'
    }
];

// Simulated database of menu items
const menuItems = [
    {
        id: 1,
        category: 'Platos Principales',
        name: 'Milanesa Napolitana Completa',
        subtitle: 'PARA COMPARTIR',
        price: 12500,
        currency: 'ARS',
        description: 'Mega milanesa de ternera cubierta de jamón, queso, salsa de tomate y huevos fritos. Acompañada de abundantes papas fritas.',
        image: '/assets/milanesa-napolitana.jpg',
        modelGlb: null,
        tags: [
            { text: '🥩 Carne', highlight: true },
            { text: '🍟 Papas Fritas', highlight: false }
        ]
    },
    {
        id: 2,
        category: 'Entradas',
        name: 'Empanadas Fritas',
        subtitle: 'DE CARNE',
        price: 9000,
        currency: 'ARS',
        description: 'Docena de empanadas fritas de carne cortada a cuchillo, bien jugosas y humeantes.',
        image: '/assets/empanadas-fritas.jpg',
        modelGlb: null,
        tags: [
            { text: '🥟 Fritas', highlight: true }
        ]
    },
    {
        id: 3,
        category: 'Tradicional',
        name: 'Picante de Pollo',
        subtitle: 'CLÁSICO DEL NORTE',
        price: 7500,
        currency: 'ARS',
        description: 'Trozos de pollo bañados en una rica salsa amarilla a base de ají, acompañado de arroz blanco, papa cocida y deliciosa sarsa de tomate y cebolla.',
        image: '/assets/picante-de-pollo.png',
        modelGlb: null,
        tags: [
            { text: '🍗 Pollo', highlight: true },
            { text: '🌶️ Picante', highlight: false }
        ]
    },
    {
        id: 4,
        category: 'Postres',
        name: 'Volcán de Chocolate',
        subtitle: 'CON HELADO',
        price: 4500,
        currency: 'ARS',
        description: 'Exquisito volcán de chocolate caliente acompañado de una generosa bocha de helado de crema americana, crema batida y salsa de frutos rojos.',
        image: '/assets/volcan-chocolate.jpg',
        modelGlb: null,
        tags: [
            { text: '🍫 Chocolate', highlight: true },
            { text: '🍦 Helado', highlight: false }
        ]
    },
    {
        id: 5,
        category: 'Tradicional',
        name: 'Locro Casero',
        subtitle: 'BIEN PULENTA',
        price: 6000,
        currency: 'ARS',
        description: 'Tradicional guiso a base de zapallo, maíz, porotos, carne de vaca, cerdo y panceta, servido en cazuela de barro con cebollita de verdeo y salsita picante.',
        image: '/assets/locro-casero.jpg',
        modelGlb: null,
        tags: [
            { text: '🍲 Cazuela', highlight: true },
            { text: '🤤 100% Argentino', highlight: false }
        ]
    },
    {
        id: 6,
        category: 'Bebidas',
        name: 'Limonada de Jengibre',
        subtitle: 'REFRESCANTE',
        price: 2000,
        currency: 'ARS',
        description: 'Limonada natural exprimida en el momento con un toque de jengibre y menta fresca.',
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?q=80&w=600&auto=format&fit=crop',
        modelGlb: null,
        tags: [
            { text: '🍋 Limón natural', highlight: true },
            { text: '🌿 Menta', highlight: false }
        ]
    }
];

// Fake API call with artificial delay
export const fetchMenu = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ categories, menuItems });
        }, 1500); // 1.5 second simulated loading time
    });
};

