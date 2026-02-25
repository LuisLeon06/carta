import React, { useState, useEffect } from 'react';

const ESTADOS = ['pendiente', 'en preparacion', 'listo', 'entregado'];
const ESTADO_COLORS = {
    'pendiente': 'bg-amber-500/20 text-amber-400 border-amber-500/30',
    'en preparacion': 'bg-blue-500/20  text-blue-400  border-blue-500/30',
    'listo': 'bg-green-500/20 text-green-400 border-green-500/30',
    'entregado': 'bg-gray-500/20  text-gray-400  border-gray-500/30',
};

const STORAGE_KEY = 'losle_pedidos';

function loadPedidos() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'); }
    catch { return []; }
}
function savePedidos(list) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
}

const AdminPanel = ({ onBack }) => {
    const [pedidos, setPedidos] = useState([]);
    const [filtro, setFiltro] = useState('todos');

    const recargar = () => setPedidos(loadPedidos());

    useEffect(() => {
        recargar();
        const iv = setInterval(recargar, 5000);
        return () => clearInterval(iv);
    }, []);

    const cambiarEstado = (id, estado) => {
        const updated = pedidos.map(p =>
            p.id === id ? { ...p, estado } : p
        );
        savePedidos(updated);
        setPedidos(updated);
    };

    const eliminar = (id) => {
        const updated = pedidos.filter(p => p.id !== id);
        savePedidos(updated);
        setPedidos(updated);
    };

    const visibles = filtro === 'todos'
        ? [...pedidos].reverse()
        : [...pedidos].reverse().filter(p => p.estado === filtro);

    // Stats
    const hoy = new Date().toDateString();
    const pedidosHoy = pedidos.filter(p => new Date(p.fecha).toDateString() === hoy);
    const totalHoy = pedidosHoy.reduce((s, p) => s + (p.total || 0), 0);

    return (
        <div className="min-h-screen w-full flex flex-col pb-16 bg-transparent">

            {/* Header */}
            <div className="sticky top-0 z-20 bg-[rgba(8,4,0,0.95)] backdrop-blur-md border-b border-orange-800/30 px-4 py-4 flex items-center gap-3">
                <button
                    onClick={onBack}
                    className="w-9 h-9 rounded-full glass-panel flex items-center justify-center shrink-0 hover:bg-white/10 transition-colors"
                >
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                        <path d="M15 18l-6-6 6-6" />
                    </svg>
                </button>
                <div className="flex-1">
                    <h1 className="font-tech text-lg font-bold text-orange-400 tracking-widest uppercase">Panel de Personal</h1>
                    <p className="text-xs text-gray-500">Los Leños Parrilla · Pedidos del día</p>
                </div>
                <div className="text-right">
                    <div className="text-orange-400 font-tech font-bold text-lg">${totalHoy}</div>
                    <div className="text-[10px] text-gray-500 uppercase tracking-widest">Hoy</div>
                </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-4 gap-2 px-4 py-3">
                {[
                    { label: 'Pendiente', estado: 'pendiente', color: 'text-amber-400' },
                    { label: 'En prep.', estado: 'en preparacion', color: 'text-blue-400' },
                    { label: 'Listos', estado: 'listo', color: 'text-green-400' },
                    { label: 'Entregado', estado: 'entregado', color: 'text-gray-400' },
                ].map(s => (
                    <div key={s.estado} className="glass-panel rounded-xl p-2 text-center">
                        <div className={`font-tech font-bold text-xl ${s.color}`}>
                            {pedidos.filter(p => p.estado === s.estado).length}
                        </div>
                        <div className="text-[9px] text-gray-500 uppercase tracking-wide leading-tight">{s.label}</div>
                    </div>
                ))}
            </div>

            {/* Filter tabs */}
            <div className="flex gap-2 px-4 pb-3 overflow-x-auto">
                {['todos', ...ESTADOS].map(f => (
                    <button
                        key={f}
                        onClick={() => setFiltro(f)}
                        className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide whitespace-nowrap transition-all border
                            ${filtro === f
                                ? 'bg-orange-600 border-orange-500 text-white'
                                : 'border-white/10 text-gray-500 hover:border-orange-600/40'
                            }`}
                    >
                        {f === 'todos' ? 'Todos' : f}
                    </button>
                ))}
            </div>

            {/* Pedidos */}
            <div className="flex flex-col gap-3 px-4">
                {visibles.length === 0 ? (
                    <div className="text-center py-20 text-gray-600">
                        <div className="text-4xl mb-3">📭</div>
                        <p className="text-sm font-tech uppercase tracking-widest">Sin pedidos</p>
                    </div>
                ) : (
                    visibles.map(p => {
                        const hora = new Date(p.fecha).toLocaleTimeString('es-AR', { hour: '2-digit', minute: '2-digit' });
                        const estCls = ESTADO_COLORS[p.estado] || '';
                        const sigEst = ESTADOS[ESTADOS.indexOf(p.estado) + 1];

                        return (
                            <div key={p.id} className="glass-panel rounded-2xl overflow-hidden">
                                {/* Card header */}
                                <div className="flex items-center justify-between px-4 py-3 border-b border-white/5">
                                    <div>
                                        <div className="text-[10px] text-gray-600 font-mono">#{String(p.id).slice(-4)}</div>
                                        <div className="text-white font-bold">{p.mesa || 'Sin mesa'}</div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className={`text-[10px] px-3 py-1 rounded-full border font-bold uppercase tracking-wider ${estCls}`}>
                                            {p.estado}
                                        </span>
                                        <span className="text-xs text-gray-600">{hora}</span>
                                    </div>
                                </div>

                                {/* Items */}
                                <div className="px-4 py-2 flex flex-col gap-1">
                                    {(p.items || []).map((it, idx) => (
                                        <div key={idx} className="flex justify-between text-sm">
                                            <span className="text-gray-300">
                                                <span className="text-orange-400 font-bold">{it.qty}×</span> {it.name}
                                            </span>
                                            <span className="text-green-400 font-mono">${it.price * it.qty}</span>
                                        </div>
                                    ))}
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between px-4 py-3 border-t border-white/5 gap-2">
                                    <div className="font-tech text-orange-400 font-bold">${p.total}</div>
                                    <div className="flex gap-2">
                                        {sigEst && (
                                            <button
                                                onClick={() => cambiarEstado(p.id, sigEst)}
                                                className="px-3 py-1.5 rounded-xl bg-orange-600/20 text-orange-400 text-xs font-bold uppercase border border-orange-600/30 hover:bg-orange-600/30 transition-colors"
                                            >
                                                → {sigEst}
                                            </button>
                                        )}
                                        <button
                                            onClick={() => eliminar(p.id)}
                                            className="w-8 h-8 rounded-xl bg-red-500/10 text-red-400 flex items-center justify-center border border-red-500/20 hover:bg-red-500/20 transition-colors"
                                        >
                                            ✕
                                        </button>
                                    </div>
                                </div>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
};

export default AdminPanel;
