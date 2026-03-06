// Categorías — carta real de Los Leños Parrilla
export const categories = [
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
        id: 'Cheff',
        name: 'Sugerencia del Cheff',
        subtitle: 'Platos exclusivos de la cocina.',
        color: 'from-rose-900 to-rose-800',
        image: 'https://images.unsplash.com/photo-1544025162-8360dbd863d0?q=80&w=600&auto=format&fit=crop'
    },
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
        subtitle: 'Para compartir en familia.',
        color: 'from-orange-900 to-orange-800',
        image: '/assets/milanesa-napolitana.jpg'
    },
    {
        id: 'Cortes',
        name: 'Cortes de Asado, Cerdo y Pollo',
        subtitle: 'Cortes seleccionados.',
        color: 'from-orange-800 to-red-800',
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
        id: 'Pastas',
        name: 'Pastas y Salsas',
        subtitle: 'Artesanales, de la casa.',
        color: 'from-stone-800 to-stone-700',
        image: 'https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=600&auto=format&fit=crop'
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
        id: 'Sandwicheria',
        name: 'Sandwichería',
        subtitle: 'Napolitanas y lomitos.',
        color: 'from-yellow-900 to-yellow-800',
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'Wok',
        name: 'Wok y Salteados',
        subtitle: 'Sabores orientales.',
        color: 'from-pink-900 to-purple-800',
        image: 'https://images.unsplash.com/photo-1544233726-9f1d6b2f6e91?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'Ensaladas',
        name: 'Ensaladas Especiales',
        subtitle: 'Frescas y naturales.',
        color: 'from-green-900 to-green-800',
        image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop'
    },
    {
        id: 'Guarnicion',
        name: 'Guarnición y Papas',
        subtitle: 'Para acompañar tus platos.',
        color: 'from-yellow-900 to-yellow-800',
        image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?q=80&w=600&auto=format&fit=crop'
    }
];

// Generador de ID autoincremental para facilitar
let currentId = 1;
const getNextId = () => currentId++;

export const menuItems = [
    // 🥩 COMIDAS REGIONALES
    { id: getNextId(), category: 'Regionales', name: 'Cordero al horno con entrada norteña', subtitle: 'REGIONAL', price: 22000 },
    { id: getNextId(), category: 'Regionales', name: 'Locro', subtitle: 'REGIONAL', price: 18000 },
    { id: getNextId(), category: 'Regionales', name: 'Picante de Pollo', subtitle: 'REGIONAL', price: 18500 },
    { id: getNextId(), category: 'Regionales', name: 'Picante de Lengua', subtitle: 'REGIONAL', price: 19500 },
    { id: getNextId(), category: 'Regionales', name: 'Estofado de Llama', subtitle: 'REGIONAL', price: 18500 },
    { id: getNextId(), category: 'Regionales', name: 'Estofado de Cordero', subtitle: 'REGIONAL', price: 19500 },

    // 🍽️ SUGERENCIA DE LA CASA
    { id: getNextId(), category: 'Sugerencias', name: 'Bife de Chorizo', subtitle: 'PARRILLA', price: 23000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Matambre Tiernizado al Verdeo', subtitle: 'CON GUARNICIÓN', price: 22000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Matambre Tiernizado a los 4 quesos', subtitle: 'CON GUARNICIÓN', price: 22000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Matambre Tiernizado a la Pizza', subtitle: 'CON GUARNICIÓN', price: 22000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Matambre Tiernizado a la Fugazetta', subtitle: 'CON GUARNICIÓN', price: 22000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Matambre Tiernizado a la Napolitana', subtitle: 'CON GUARNICIÓN', price: 22000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Matambre Tiernizado al Champignon', subtitle: 'CON GUARNICIÓN', price: 22000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Mollejas a la Crema de Verdeo', subtitle: 'ACHURAS', price: 21000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Mollejas a la Provenzal', subtitle: 'ACHURAS', price: 21000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Mollejas al Limón', subtitle: 'ACHURAS', price: 21000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Riñón a la Provenzal', subtitle: 'ACHURAS', price: 20000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Riñón al Vino', subtitle: 'ACHURAS', price: 20000 },
    { id: getNextId(), category: 'Sugerencias', name: 'Costeleta de Cerdo', subtitle: 'CON GUARNICIÓN', price: 0 },

    // 👨🍳 SUGERENCIA DEL CHEFF
    { id: getNextId(), category: 'Cheff', name: 'Lomo al Champignon', subtitle: 'CON GUARNICIÓN', price: 23000 },
    { id: getNextId(), category: 'Cheff', name: 'Lomo a la Frontera', subtitle: 'CON GUARNICIÓN', price: 23000 },
    { id: getNextId(), category: 'Cheff', name: 'Lomo a la Crema de Verdeo', subtitle: 'CON GUARNICIÓN', price: 23000 },
    { id: getNextId(), category: 'Cheff', name: 'Lomo a los 4 Quesos', subtitle: 'CON GUARNICIÓN', price: 23000 },
    { id: getNextId(), category: 'Cheff', name: 'Lomo a Caballo', subtitle: 'CON GUARNICIÓN', price: 23000 },
    { id: getNextId(), category: 'Cheff', name: 'Churrasco', subtitle: 'CON GUARNICIÓN', price: 19500 },
    { id: getNextId(), category: 'Cheff', name: 'Churrasco a Caballo', subtitle: 'CON GUARNICIÓN', price: 20000 },
    { id: getNextId(), category: 'Cheff', name: 'Suprema de Pollo', subtitle: 'CON GUARNICIÓN', price: 19500 },
    { id: getNextId(), category: 'Cheff', name: 'Suprema a Caballo', subtitle: 'CON GUARNICIÓN', price: 20000 },
    { id: getNextId(), category: 'Cheff', name: 'Suprema a la Napolitana', subtitle: 'CON GUARNICIÓN', price: 20000 },
    { id: getNextId(), category: 'Cheff', name: 'Suprema a la Fugazzeta', subtitle: 'CON GUARNICIÓN', price: 20000 },
    { id: getNextId(), category: 'Cheff', name: 'Pollo Deshuesado al Limón', subtitle: 'AVES', price: 19500 },
    { id: getNextId(), category: 'Cheff', name: 'Pollo Deshuesado a la Crema de Verdeo', subtitle: 'AVES', price: 19500 },
    { id: getNextId(), category: 'Cheff', name: 'Pollo Deshuesado a la Crema de Queso', subtitle: 'AVES', price: 19500 },
    { id: getNextId(), category: 'Cheff', name: 'Pollo Deshuesado a la Crema de Limón', subtitle: 'AVES', price: 19500 },
    { id: getNextId(), category: 'Cheff', name: 'Solomillo de Cerdo con Salsa de Ciruela', subtitle: 'CON GUARNICIÓN', price: 0 },
    { id: getNextId(), category: 'Cheff', name: 'Pamplona de Pollo con Salsa Oriental y Semillas', subtitle: 'ESPECIAL', price: 0 },

    // 🥗 ENTRADAS
    { id: getNextId(), category: 'Entradas', name: 'Empanadas - Carne cortada cuchillo (x doc.)', subtitle: 'EMPANADAS', price: 18000 },
    { id: getNextId(), category: 'Entradas', name: 'Empanadas - Pollo (x doc.)', subtitle: 'EMPANADAS', price: 18000 },
    { id: getNextId(), category: 'Entradas', name: 'Empanadas - Queso (x doc.)', subtitle: 'EMPANADAS', price: 18000 },
    { id: getNextId(), category: 'Entradas', name: 'Empanadas - Matambre (x doc.)', subtitle: 'EMPANADAS', price: 0 },
    { id: getNextId(), category: 'Entradas', name: 'Entrada Norteña', subtitle: 'QUESO CRIOLLO, CHOCLO Y PAPA', price: 0 },
    { id: getNextId(), category: 'Entradas', name: 'Entrada Los Leños', subtitle: 'PAQUETITOS DE VERDURA Y QUESO', price: 0 },
    { id: getNextId(), category: 'Entradas', name: 'Tamales', subtitle: 'REGIONAL', price: 6000 },

    // 🔥 PARRILLA
    { id: getNextId(), category: 'Parrilla', name: 'Parrilla Los Leños 1 Persona', subtitle: 'PARRILLA', price: 34000 },
    { id: getNextId(), category: 'Parrilla', name: 'Parrilla Los Leños 2 Personas', subtitle: 'PARRILLA', price: 58000 },
    { id: getNextId(), category: 'Parrilla', name: 'Parrilla Especial 1 Persona', subtitle: 'PARRILLA', price: 36000 },
    { id: getNextId(), category: 'Parrilla', name: 'Parrilla Especial 2 Personas', subtitle: 'PARRILLA', price: 56000 },

    // 🥩 CORTES DE ASADO, CERDO Y POLLO
    { id: getNextId(), category: 'Cortes', name: 'Tira de Asado', subtitle: 'PARRILLADA', price: 31000 },
    { id: getNextId(), category: 'Cortes', name: 'Vacío', subtitle: 'PARRILLADA', price: 31000 },
    { id: getNextId(), category: 'Cortes', name: 'Entraña', subtitle: 'PARRILLADA', price: 31000 },
    { id: getNextId(), category: 'Cortes', name: 'Picaña', subtitle: 'PARRILLADA', price: 0 },
    { id: getNextId(), category: 'Cortes', name: 'Matambre Tiernizado', subtitle: 'PARRILLADA', price: 31000 },
    { id: getNextId(), category: 'Cortes', name: 'Tira de Cerdo', subtitle: 'PARRILLADA', price: 29000 },
    { id: getNextId(), category: 'Cortes', name: 'Bondiola', subtitle: 'PARRILLADA', price: 0 },
    { id: getNextId(), category: 'Cortes', name: '½ Pollo Deshuesado', subtitle: 'PARRILLADA', price: 29000 },
    { id: getNextId(), category: 'Cortes', name: 'Mollejas', subtitle: 'ACHURAS', price: 19000 },
    { id: getNextId(), category: 'Cortes', name: 'Chinchulines', subtitle: 'ACHURAS', price: 18000 },
    { id: getNextId(), category: 'Cortes', name: 'Riñones', subtitle: 'ACHURAS', price: 18000 },
    { id: getNextId(), category: 'Cortes', name: 'Chorizos', subtitle: 'EMBUTIDOS', price: 18000 },
    { id: getNextId(), category: 'Cortes', name: 'Morcillas', subtitle: 'EMBUTIDOS', price: 18000 },

    // 🐟 PESCADOS
    { id: getNextId(), category: 'Pescados', name: 'Surubí al Paquete con guarnición', subtitle: 'DE RÍO', price: 0 },
    { id: getNextId(), category: 'Pescados', name: 'Truchas con guarnición', subtitle: 'DE RÍO', price: 28000 },
    { id: getNextId(), category: 'Pescados', name: 'Truchas a los 4 Quesos', subtitle: 'DE RÍO', price: 28500 },
    { id: getNextId(), category: 'Pescados', name: 'Truchas a la Salsa de Queso', subtitle: 'DE RÍO', price: 28500 },
    { id: getNextId(), category: 'Pescados', name: 'Truchas al Limón', subtitle: 'DE RÍO', price: 28500 },
    { id: getNextId(), category: 'Pescados', name: 'Truchas a la Crema de Limón', subtitle: 'DE RÍO', price: 28500 },
    { id: getNextId(), category: 'Pescados', name: 'Truchas a la Provenzal', subtitle: 'DE RÍO', price: 28500 },
    { id: getNextId(), category: 'Pescados', name: 'Truchas a la Pimienta Negra', subtitle: 'DE RÍO', price: 28500 },
    { id: getNextId(), category: 'Pescados', name: 'Truchas a la Manteca Negra', subtitle: 'DE RÍO', price: 28500 },
    { id: getNextId(), category: 'Pescados', name: 'Pacú con guarnición', subtitle: 'DE RÍO', price: 26000 },
    { id: getNextId(), category: 'Pescados', name: 'Pacú a los 4 Quesos', subtitle: 'DE RÍO', price: 26500 },
    { id: getNextId(), category: 'Pescados', name: 'Pacú a la Salsa de Queso', subtitle: 'DE RÍO', price: 26500 },
    { id: getNextId(), category: 'Pescados', name: 'Pacú al Limón', subtitle: 'DE RÍO', price: 26500 },
    { id: getNextId(), category: 'Pescados', name: 'Pacú a la Crema de Limón', subtitle: 'DE RÍO', price: 26500 },
    { id: getNextId(), category: 'Pescados', name: 'Pacú a la Provenzal', subtitle: 'DE RÍO', price: 26500 },
    { id: getNextId(), category: 'Pescados', name: 'Pacú a la Pimienta Negra', subtitle: 'DE RÍO', price: 26500 },
    { id: getNextId(), category: 'Pescados', name: 'Pacú a la Manteca Negra', subtitle: 'DE RÍO', price: 26500 },

    // 🍝 PASTAS
    { id: getNextId(), category: 'Pastas', name: 'Spaghetti', subtitle: 'PASTAS', price: 13000 },
    { id: getNextId(), category: 'Pastas', name: 'Tagliatelle', subtitle: 'PASTAS', price: 13000 },
    { id: getNextId(), category: 'Pastas', name: 'Papardelle', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Ñoquis de Papa', subtitle: 'PASTAS', price: 13500 },
    { id: getNextId(), category: 'Pastas', name: 'Ñoquis Soufflé', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Ñoquis Calabaza', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Ñoquis Relleno', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Ravioles', subtitle: 'PASTAS', price: 13500 },
    { id: getNextId(), category: 'Pastas', name: 'Ravioles de Verduras', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Ravioles de Carne', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Ravioles de Ricota', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Cappellitti', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Cappellitti (jamón y queso)', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Cappellitti Verduras', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Cappellitti Carne', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Lasagna Verduras con salsa', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Lasagna Carne', subtitle: 'PASTAS', price: 14000 },
    { id: getNextId(), category: 'Pastas', name: 'Canelones Verduras con salsa', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Sorrentinos (jamón y queso)', subtitle: 'PASTAS', price: 13500 },
    { id: getNextId(), category: 'Pastas', name: 'Sorrentinos (bondiola, cebolla ahumada)', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Sorrentinos Pollo', subtitle: 'PASTAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Salsa Bolognesa', subtitle: 'SALSAS', price: 4000 },
    { id: getNextId(), category: 'Pastas', name: 'Salsa Parissienne', subtitle: 'SALSAS', price: 4000 },
    { id: getNextId(), category: 'Pastas', name: 'Salsa 4 Quesos', subtitle: 'SALSAS', price: 4000 },
    { id: getNextId(), category: 'Pastas', name: 'Salsa Al Pesto', subtitle: 'SALSAS', price: 3800 },
    { id: getNextId(), category: 'Pastas', name: 'Salsa Roquefort', subtitle: 'SALSAS', price: 3800 },
    { id: getNextId(), category: 'Pastas', name: 'Salsa Rosa', subtitle: 'SALSAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Salsa Mixta', subtitle: 'SALSAS', price: 0 },
    { id: getNextId(), category: 'Pastas', name: 'Salsa Criolla', subtitle: 'SALSAS', price: 4500 },
    { id: getNextId(), category: 'Pastas', name: 'Salsa Al Champignon', subtitle: 'SALSAS', price: 4500 },

    // 🍔 HAMBURGUESAS
    { id: getNextId(), category: 'Hamburguesas', name: 'Clásica', subtitle: 'HAMBURGUESA', price: 10000 },
    { id: getNextId(), category: 'Hamburguesas', name: 'Los Leños', subtitle: 'HAMBURGUESA', price: 10200 },
    { id: getNextId(), category: 'Hamburguesas', name: 'Americana', subtitle: 'HAMBURGUESA', price: 10200 },
    { id: getNextId(), category: 'Hamburguesas', name: 'Argenta', subtitle: 'HAMBURGUESA', price: 10300 },
    { id: getNextId(), category: 'Hamburguesas', name: 'Cheedar', subtitle: 'HAMBURGUESA', price: 10300 },
    { id: getNextId(), category: 'Hamburguesas', name: 'Pepo', subtitle: 'HAMBURGUESA', price: 10400 },
    { id: getNextId(), category: 'Hamburguesas', name: 'Tristán', subtitle: 'HAMBURGUESA', price: 10300 },

    // 🍕 PIZZAS
    { id: getNextId(), category: 'Pizzas', name: 'Champignon', subtitle: 'PIZZA', price: 14000 },
    { id: getNextId(), category: 'Pizzas', name: 'Calabaza', subtitle: 'PIZZA', price: 16500 },
    { id: getNextId(), category: 'Pizzas', name: 'Fugazzeta', subtitle: 'PIZZA', price: 16000 },
    { id: getNextId(), category: 'Pizzas', name: 'Napolitana', subtitle: 'PIZZA', price: 16000 },
    { id: getNextId(), category: 'Pizzas', name: 'Muzarella', subtitle: 'PIZZA', price: 15500 },
    { id: getNextId(), category: 'Pizzas', name: 'Especial', subtitle: 'PIZZA', price: 16000 },
    { id: getNextId(), category: 'Pizzas', name: 'A los 4 Quesos', subtitle: 'PIZZA', price: 16500 },
    { id: getNextId(), category: 'Pizzas', name: 'De Anchoas', subtitle: 'PIZZA', price: 14000 },

    // 🥪 SANDWICHERÍA
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana Especial (Individual)', subtitle: 'NAPOLITANA', price: 23000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana Especial (Para 2)', subtitle: 'NAPOLITANA', price: 35000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana A la Pizza (Individual)', subtitle: 'NAPOLITANA', price: 23000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana A la Pizza (Para 2)', subtitle: 'NAPOLITANA', price: 35000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana 4 Quesos (Individual)', subtitle: 'NAPOLITANA', price: 26000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana 4 Quesos (Para 2)', subtitle: 'NAPOLITANA', price: 38000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana Fugazzeta (Individual)', subtitle: 'NAPOLITANA', price: 26000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana Fugazzeta (Para 2)', subtitle: 'NAPOLITANA', price: 38000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana Con Panceta y Cheddar (Individual)', subtitle: 'NAPOLITANA', price: 26000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana Con Panceta y Cheddar (Para 2)', subtitle: 'NAPOLITANA', price: 38000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana Con Cebolla Caramelizada (Individual)', subtitle: 'NAPOLITANA', price: 26000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Napolitana Con Cebolla Caramelizada (Para 2)', subtitle: 'NAPOLITANA', price: 38000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Super Napolitana (Individual)', subtitle: 'NAPOLITANA', price: 0 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Super Napolitana (Para 2)', subtitle: 'NAPOLITANA', price: 43000 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Milanesa Especial con papas', subtitle: 'SANDWICH', price: 13500 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Milanesa Capresse con papas', subtitle: 'SANDWICH', price: 0 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Lomito Especial con papas', subtitle: 'SANDWICH', price: 13500 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Lomito Capresse con papas', subtitle: 'SANDWICH', price: 0 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Matambre con papas', subtitle: 'SANDWICH', price: 14500 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Entraña con papas', subtitle: 'SANDWICH', price: 14500 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Vacío con papas', subtitle: 'SANDWICH', price: 14500 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Bondiola con papas', subtitle: 'SANDWICH', price: 0 },
    { id: getNextId(), category: 'Sandwicheria', name: 'Milanesa de Pollo con papas', subtitle: 'SANDWICH', price: 0 },

    // 🥘 WOK Y SALTEADOS
    { id: getNextId(), category: 'Wok', name: 'Wok de Carne', subtitle: 'WOK', price: 15800 },
    { id: getNextId(), category: 'Wok', name: 'Wok de Pollo', subtitle: 'WOK', price: 15800 },
    { id: getNextId(), category: 'Wok', name: 'Wok de Verdura', subtitle: 'WOK', price: 15800 },

    // 🥗 ENSALADAS ESPECIALES
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada Los Leños', subtitle: 'ENSALADA', price: 10500 },
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada Mixta', subtitle: 'ENSALADA', price: 9000 },
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada Brown', subtitle: 'ENSALADA', price: 10500 },
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada Renata', subtitle: 'ENSALADA', price: 9500 },
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada The Luxe', subtitle: 'ENSALADA', price: 11000 },
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada Simón', subtitle: 'ENSALADA', price: 9500 },
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada Súper Verde', subtitle: 'ENSALADA', price: 10500 },
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada Tadeo', subtitle: 'ENSALADA', price: 9500 },
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada César', subtitle: 'ENSALADA', price: 11000 },
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada Criolla', subtitle: 'ENSALADA', price: 10000 },
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada Caprese', subtitle: 'ENSALADA', price: 10000 },
    { id: getNextId(), category: 'Ensaladas', name: 'Ensalada de Palta', subtitle: 'ENSALADA', price: 0 },
    { id: getNextId(), category: 'Ensaladas', name: 'Panache de Verdura', subtitle: 'ENSALADA', price: 10500 },

    // 🍟 GUARNICIÓN Y PAPAS
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Fritas', subtitle: 'GUARNICIÓN', price: 9000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Fritas con huevo revuelto', subtitle: 'GUARNICIÓN', price: 10000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Fritas con huevo y jamón', subtitle: 'GUARNICIÓN', price: 10500 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Frita revuelto gramajo', subtitle: 'GUARNICIÓN', price: 11000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Fritas pico con cheddar y verdeo', subtitle: 'GUARNICIÓN', price: 10500 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Frita con huevo y queso gratinado', subtitle: 'GUARNICIÓN', price: 11000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Frita a los 4 quesos', subtitle: 'GUARNICIÓN', price: 11000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Frita con chorizo, salsa brava y verdeo', subtitle: 'GUARNICIÓN', price: 11000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Fritas a caballo', subtitle: 'GUARNICIÓN', price: 9500 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Fritas a la crema de queso', subtitle: 'GUARNICIÓN', price: 10000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Fritas a la provenzal', subtitle: 'GUARNICIÓN', price: 9500 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Natural', subtitle: 'GUARNICIÓN', price: 9000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Natural a la crema de queso', subtitle: 'GUARNICIÓN', price: 10000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Natural a los 4 quesos', subtitle: 'GUARNICIÓN', price: 14000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Doradas', subtitle: 'GUARNICIÓN', price: 9000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Dorada a la crema de queso', subtitle: 'GUARNICIÓN', price: 10000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Papa Dorada a los 4 quesos', subtitle: 'GUARNICIÓN', price: 11000 },
    { id: getNextId(), category: 'Guarnicion', name: 'Puré', subtitle: 'GUARNICIÓN', price: 10500 },
    { id: getNextId(), category: 'Guarnicion', name: 'Ensalada Rusa', subtitle: 'GUARNICIÓN', price: 10500 },
    { id: getNextId(), category: 'Guarnicion', name: 'Arroz', subtitle: 'GUARNICIÓN', price: 9000 }
].map(item => ({
    ...item,
    currency: 'ARS',
    description: '',
    image: null,
    modelGlb: null,
    tags: []
}));

export const fetchMenu = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ categories, menuItems });
        }, 800);
    });
};
