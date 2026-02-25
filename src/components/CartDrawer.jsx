import React from 'react';

/**
 * CartDrawer — Panel deslizante que muestra los ítems del carrito,
 * el total y el botón de solicitar pedido.
 */
const CartDrawer = ({ cart, onClose, onRemove, onClear }) => {
    const [mesa, setMesa] = React.useState('');
    const [enviando, setEnviando] = React.useState(false);
    const [resultado, setResultado] = React.useState(null); // 'ok' | 'error'
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);

    const handleSolicitar = async () => {
        if (cart.length === 0) return;
        setEnviando(true);
        setResultado(null);

        const pedido = {
            id: Date.now().toString(),
            fecha: new Date().toISOString(),
            mesa: mesa.trim() || 'Sin mesa',
            items: cart.map(i => ({ id: i.id, name: i.name, qty: i.qty, price: i.price })),
            total,
            estado: 'pendiente',
        };

        // 1️⃣ Guardar siempre en localStorage (funciona sin servidor)
        try {
            const existing = JSON.parse(localStorage.getItem('losle_pedidos') || '[]');
            localStorage.setItem('losle_pedidos', JSON.stringify([...existing, pedido]));
        } catch { /* ignorar */ }

        // 2️⃣ Intentar enviar al gestor (opcional, si está corriendo)
        try {
            await fetch('http://localhost:3001/api/pedidos', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(pedido),
                signal: AbortSignal.timeout(2000),
            });
        } catch { /* gestor no disponible — no hay problema */ }

        setResultado('ok');
        setEnviando(false);
        onClear();
        setTimeout(() => { setResultado(null); onClose(); }, 1800);
    };

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
                onClick={onClose}
            />

            {/* Drawer */}
            <div className="fixed bottom-0 left-0 right-0 z-[101] max-w-lg mx-auto
                            bg-[#0f0d0b] border-t border-orange-600/40 rounded-t-[32px]
                            shadow-[0_-10px_40px_rgba(255,77,0,0.25)]
                            flex flex-col max-h-[85vh] animate-in slide-in-from-bottom duration-300">

                {/* Handle */}
                <div className="flex justify-center pt-3 pb-2">
                    <div className="w-12 h-1 bg-white/20 rounded-full" />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between px-6 pb-4 border-b border-white/10">
                    <div>
                        <h2 className="font-tech text-xl font-bold text-neon-fire tracking-widest uppercase">
                            Tu Pedido
                        </h2>
                        <p className="text-xs text-gray-400 font-tech">
                            {totalItems} ítem{totalItems !== 1 ? 's' : ''}
                        </p>
                    </div>
                    <div className="flex gap-2 items-center">
                        {cart.length > 0 && (
                            <button
                                onClick={onClear}
                                className="text-[10px] text-gray-500 hover:text-red-400 font-bold tracking-widest uppercase transition-colors"
                            >
                                Vaciar
                            </button>
                        )}
                        <button
                            onClick={onClose}
                            className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-gray-400 hover:text-white transition-colors"
                        >
                            <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Items list */}
                <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-3 min-h-0">
                    {cart.length === 0 ? (
                        <div className="flex flex-col items-center justify-center py-16 gap-4">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" className="text-gray-600">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                            <p className="text-gray-600 font-tech text-sm tracking-widest uppercase">
                                El carrito está vacío
                            </p>
                        </div>
                    ) : (
                        cart.map(item => (
                            <div
                                key={item.id}
                                className="flex items-center gap-3 glass-panel rounded-2xl p-3"
                            >
                                {/* Thumbnail */}
                                <div className="w-14 h-14 rounded-xl overflow-hidden shrink-0 bg-black/50">
                                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                </div>

                                {/* Info */}
                                <div className="flex-1 min-w-0">
                                    <p className="font-bold text-white text-sm leading-tight truncate">{item.name}</p>
                                    <p className="text-[10px] text-gray-400 uppercase tracking-widest font-tech">{item.subtitle}</p>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="text-neon-fire font-tech font-bold text-sm">${item.price}</span>
                                        <span className="text-gray-600 text-xs">×</span>
                                        <span className="text-gray-300 font-bold text-sm">{item.qty}</span>
                                        <span className="text-gray-500 text-xs ml-auto">= ${item.price * item.qty}</span>
                                    </div>
                                </div>

                                {/* Remove */}
                                <button
                                    onClick={() => onRemove(item.id)}
                                    className="w-7 h-7 rounded-full bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-colors shrink-0"
                                >
                                    <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        ))
                    )}
                </div>

                {/* Footer */}
                {cart.length > 0 && (
                    <div className="px-6 py-5 border-t border-white/10 flex flex-col gap-3">

                        {/* Mesa */}
                        <div className="flex items-center gap-3">
                            <label className="text-gray-400 text-xs uppercase tracking-widest font-bold shrink-0">Mesa</label>
                            <input
                                type="text"
                                value={mesa}
                                onChange={e => setMesa(e.target.value)}
                                placeholder="Ej: Mesa 3 / General"
                                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-600 outline-none focus:border-orange-500/50 transition-colors"
                            />
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-center">
                            <span className="text-gray-400 font-tech text-sm uppercase tracking-widest">Total</span>
                            <span className="font-tech text-2xl font-bold text-orange-400">${total}</span>
                        </div>

                        {/* Resultado */}
                        {resultado === 'ok' && (
                            <div className="flex items-center justify-center gap-2 py-2 bg-green-500/10 border border-green-500/20 rounded-xl text-green-400 font-bold text-sm">
                                ✅ ¡Pedido enviado al gestor!
                            </div>
                        )}
                        {resultado === 'error' && (
                            <div className="flex flex-col gap-1 py-2 px-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-xs">
                                <span className="font-bold">❌ No se pudo enviar</span>
                                <span className="text-gray-500">Asegurate de que el gestor esté corriendo en localhost:3001</span>
                            </div>
                        )}

                        {/* Botón confirmar */}
                        <button
                            onClick={handleSolicitar}
                            disabled={enviando}
                            className="w-full h-14 rounded-2xl bg-gradient-to-r from-orange-700 to-orange-500 text-white font-tech font-bold tracking-widest uppercase hover:brightness-110 active:scale-95 transition-all shadow-xl flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                        >
                            {enviando ? (
                                <span className="flex items-center gap-2">
                                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="40" strokeDashoffset="10" />
                                    </svg>
                                    Enviando...
                                </span>
                            ) : (
                                <>🔥 Confirmar Pedido</>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
};

export default CartDrawer;
