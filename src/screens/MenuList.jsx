import React, { useState } from 'react';

const MenuList = ({ category, items, onSelectProduct, onBack, onAddToCart, cartCount = 0, onOpenCart }) => {
    const filteredItems = items.filter(item => item.category === category.id);
    const [toast, setToast] = useState('');

    const handleAdd = (e, item) => {
        e.stopPropagation();
        onAddToCart && onAddToCart(item);
        setToast(`✅ ${item.name} agregado`);
        setTimeout(() => setToast(''), 2000);
    };

    return (
        <div className="min-h-screen w-full flex flex-col pt-8 pb-20 px-4 md:px-8 max-w-lg mx-auto bg-transparent">

            {/* Header */}
            <header className="mb-6 flex items-center gap-4">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white shrink-0 hover:bg-white/10 box-neon-fire transition-colors"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
                </button>
                <div className="flex-1">
                    <h2 className="text-xl font-bold tracking-wider font-tech text-neon-fire uppercase drop-shadow-sm">{category.name}</h2>
                    <p className="text-xs text-[var(--color-primary-cyan)] uppercase tracking-widest font-bold font-tech">{filteredItems.length} opciones</p>
                </div>

                {/* Cart badge */}
                <div className="relative">
                    <div
                        className="w-10 h-10 rounded-full glass-panel box-neon-fire flex items-center justify-center cursor-pointer hover:brightness-125 transition-all"
                        onClick={() => onOpenCart && onOpenCart()}
                        title="Ver carrito"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                    </div>
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-orange-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-[0_0_8px_rgba(234,88,12,0.8)] border border-orange-300/30">
                            {cartCount}
                        </span>
                    )}
                </div>
            </header>

            {/* List of Products */}
            <div className="flex flex-col gap-4">
                {filteredItems.length === 0 ? (
                    <p className="text-center text-gray-500 py-10 font-tech">Categoría en construcción...</p>
                ) : (
                    filteredItems.map((item) => (
                        <div
                            key={item.id}
                            className="glass-panel rounded-2xl p-4 flex gap-4 items-center cursor-pointer hover:bg-white/5 transition-colors relative shadow-2xl"
                            onClick={() => onSelectProduct(item)}
                        >
                            {/* Image Thumbnail */}
                            <div className="w-24 h-24 rounded-xl overflow-hidden shrink-0 bg-black/50">
                                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                            </div>

                            {/* Info */}
                            <div className="flex-1 min-w-0 py-1">
                                <h3 className="font-bold text-lg leading-tight mb-1 truncate text-white">{item.name}</h3>
                                <p className="text-xs text-gray-400 line-clamp-2 mb-2 leading-relaxed">
                                    {item.description}
                                </p>
                                <div className="font-tech text-xl text-neon-fire font-bold price-pulse">
                                    ${item.price}
                                </div>
                            </div>

                            {/* + button — adds directly to cart */}
                            <button
                                className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold text-2xl hover:bg-orange-500 active:scale-90 transition-all shrink-0 shadow-[0_0_14px_rgba(234,88,12,0.7)] border border-orange-400/30"
                                onClick={(e) => handleAdd(e, item)}
                                title="Agregar al carrito"
                            >
                                +
                            </button>

                            {/* 3D Badge */}
                            {item.modelGlb && (
                                <div className="absolute -top-2 -left-2 bg-black border border-fire-red text-neon-fire text-[10px] px-2 py-0.5 rounded-full shadow-[0_0_15px_var(--color-fire-red)] font-bold tracking-widest z-10">
                                    3D / AR
                                </div>
                            )}
                        </div>
                    ))
                )}
            </div>

            {/* Toast */}
            <div
                className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-3 rounded-full font-tech font-bold z-[2000] shadow-lg transition-all duration-300 pointer-events-none whitespace-nowrap"
                style={{ opacity: toast ? 1 : 0, transform: `translateX(-50%) translateY(${toast ? '0' : '10px'})` }}
            >
                {toast}
            </div>
        </div>
    );
};

export default MenuList;
