import React, { useEffect, useState } from 'react';

const ProductDetail = ({ product, onBack, onAddToCart, cartCount = 0, onOpenCart }) => {
    const [toastMessage, setToastMessage] = useState('');
    const [showQRModal, setShowQRModal] = useState(false);

    // Toast duration effect
    useEffect(() => {
        if (toastMessage) {
            const timer = setTimeout(() => setToastMessage(''), 3000);
            return () => clearTimeout(timer);
        }
    }, [toastMessage]);

    const handleToggleAR = () => {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        if (isMobile) {
            const mv = document.querySelector("model-viewer");
            if (mv && mv.canActivateAR) {
                mv.activateAR();
            } else {
                setToastMessage("AR no disponible en este dispositivo.");
                setShowQRModal(true);
            }
        } else {
            setShowQRModal(true);
        }
    };

    const currentUrl = window.location.href;
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(currentUrl)}`;

    return (
        <div className="fixed inset-0 z-50 flex flex-col bg-transparent md:max-w-lg md:mx-auto animate-in fade-in duration-300">
            {/* Background Image/3D Viewer */}
            <div className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-40">
                <button
                    onClick={onBack}
                    className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-white shadow-lg hover:bg-white/10 box-neon-fire transition-all"
                >
                    <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6"></path></svg>
                </button>

                <div className="flex gap-2 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full border border-green-500/50 items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] font-bold tracking-widest text-green-400 uppercase">DISPONIBLE</span>
                </div>

                {/* Cart button */}
                <div className="relative cursor-pointer" onClick={() => onOpenCart && onOpenCart()}>
                    <div className="w-10 h-10 rounded-full glass-panel box-neon-fire flex items-center justify-center">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                    </div>
                    {cartCount > 0 && (
                        <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-[var(--color-primary-fire)] text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-[0_0_8px_rgba(255,77,0,0.8)]">
                            {cartCount}
                        </span>
                    )}
                </div>
            </div>

            <div className="w-full h-[55vh] relative overflow-hidden bg-black/20">
                {product.modelGlb ? (
                    <div className="w-full h-full">
                        <model-viewer
                            src={product.modelGlb}
                            ar
                            ar-modes="webxr scene-viewer quick-look"
                            camera-controls
                            poster={product.image}
                            shadow-intensity="1"
                            auto-rotate
                            className="w-full h-full"
                        ></model-viewer>
                    </div>
                ) : (
                    <div className="w-full h-full p-8 flex items-center justify-center">
                        <img src={product.image} alt={product.name} className="w-full max-w-sm rounded-[2rem] shadow-2xl glass-panel-heavy object-cover aspect-square img-flicker" />
                    </div>
                )}
            </div>

            {/* Info Panel */}
            <div className="glass-panel-heavy border-t border-white/10 rounded-t-[40px] p-6 relative z-30 shadow-[0_-10px_30px_rgba(0,0,0,0.5)] transform transition-transform h-full">
                <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-6"></div>

                <div className="flex justify-between items-end mb-4">
                    <div>
                        <h2 className="font-tech text-3xl m-0 uppercase leading-none text-neon-fire drop-shadow-sm">{product.name}</h2>
                        <span className="text-orange-400 text-xs font-bold tracking-wider mt-1 block uppercase">{product.subtitle}</span>
                    </div>
                    <div className="text-right">
                        <span className="font-tech text-3xl font-bold text-neon-fire block leading-none price-pulse">${product.price}</span>
                        <span className="text-[10px] text-gray-500 uppercase tracking-widest font-bold">{product.currency}</span>
                    </div>
                </div>

                <div className="flex gap-2 mb-6 overflow-x-auto pb-2 scrollbar-hide">
                    <span className="bg-fire-red/20 border border-fire-red/30 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest flex items-center gap-1.5 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-fire-red"></span>
                        Caliente
                    </span>
                    <span className="bg-orange-500/20 border border-orange-500/30 text-white text-[10px] px-3 py-1 rounded-full font-bold uppercase tracking-widest flex items-center gap-1.5 whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-500"></span>
                        Recomendado
                    </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-8 pr-4 font-medium drop-shadow-sm">
                    {product.description}
                </p>

                {/* AR Button */}
                {product.modelGlb && (
                    <div className="mb-8">
                        <button
                            className="w-full h-14 rounded-2xl bg-black border-2 border-neon-fire flex items-center justify-center gap-3 text-neon-fire font-tech font-bold tracking-widest uppercase hover:bg-fire-red/10 active:scale-95 transition-all box-neon-fire shadow-[0_0_20px_rgba(255,170,0,0.3)] animate-pulse"
                            onClick={() => {
                                const mv = document.querySelector('model-viewer');
                                if (mv) mv.activateAR();
                            }}
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 8V4h4M16 4h4v4M4 16v4h4M16 20h4v-4" /></svg>
                            Ver en VR / Realidad Aumentada
                        </button>
                    </div>
                )}

                {/* Add to Cart Button */}
                <div className="mt-auto">
                    <button
                        onClick={() => {
                            onAddToCart && onAddToCart(product);
                            setToastMessage(`✅ ¡Agregado al carrito! (${cartCount + 1} ítem${cartCount + 1 !== 1 ? 's' : ''})`);
                        }}
                        className="w-full h-16 rounded-2xl bg-gradient-to-r from-fire-red to-orange-600 text-white font-tech font-bold tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3"
                    >
                        {/* Cart icon */}
                        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                            <line x1="3" y1="6" x2="21" y2="6" />
                            <path d="M16 10a4 4 0 0 1-8 0" />
                        </svg>
                        Agregar al carrito
                        {cartCount > 0 && (
                            <span className="ml-1 bg-white/20 text-white text-xs font-bold rounded-full px-2 py-0.5">{cartCount}</span>
                        )}
                    </button>
                </div>
            </div>

            {/* Toast Notification */}
            <div
                className="fixed bottom-24 left-1/2 -translate-x-1/2 bg-orange-600 text-white px-6 py-3 rounded-full font-tech font-bold z-[2000] shadow-lg transition-opacity duration-300 pointer-events-none"
                style={{ opacity: toastMessage ? 1 : 0 }}
            >
                {toastMessage}
            </div>
        </div>
    );
};

export default ProductDetail;
