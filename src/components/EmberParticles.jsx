import React, { useMemo } from 'react';

/**
 * EmberParticles — Glowing ash/ember particles rising from the bottom like a volcano/grill.
 * Count: number of particles (default 35, keep low to not overpower content)
 */
const EmberParticles = ({ count = 35 }) => {
    const particles = useMemo(() => {
        return Array.from({ length: count }, (_, i) => {
            const size = Math.random() * 2.5 + 1;        // 1–3.5 px
            const left = Math.random() * 100;             // 0–100% across screen
            const dur = Math.random() * 5 + 4;           // 4–9 s per rise
            const delay = Math.random() * 8;               // stagger 0–8 s
            const drift = (Math.random() - 0.5) * 120;    // ±60 px horizontal drift
            const bright = Math.random() > 0.6;             // some are bright, most dim

            return { id: i, size, left, dur, delay, drift, bright };
        });
    }, [count]);

    return (
        <>
            <style>{`
                @keyframes ember-rise {
                    0% {
                        transform: translateY(0) translateX(0) scale(1);
                        opacity: 0;
                    }
                    8% {
                        opacity: 1;
                    }
                    70% {
                        opacity: 0.7;
                    }
                    100% {
                        transform: translateY(-95vh) translateX(var(--drift)) scale(0.2);
                        opacity: 0;
                    }
                }
            `}</style>

            {/* Fixed layer so it covers every screen without affecting layout */}
            <div
                aria-hidden="true"
                style={{
                    position: 'fixed',
                    inset: 0,
                    pointerEvents: 'none',
                    zIndex: 30,
                    overflow: 'hidden',
                }}
            >
                {particles.map(({ id, size, left, dur, delay, drift, bright }) => (
                    <span
                        key={id}
                        style={{
                            position: 'absolute',
                            bottom: '-4px',
                            left: `${left}%`,
                            width: `${size}px`,
                            height: `${size}px`,
                            borderRadius: '50%',
                            background: bright
                                ? 'radial-gradient(circle, #fff8e0 0%, #ffaa00 40%, #ff4d00 100%)'
                                : 'radial-gradient(circle, #ffaa00 0%, #cc3300 60%, transparent 100%)',
                            boxShadow: bright
                                ? `0 0 ${size * 3}px ${size}px rgba(255,170,0,0.8), 0 0 ${size * 6}px rgba(255,77,0,0.4)`
                                : `0 0 ${size * 2}px rgba(255,100,0,0.5)`,
                            '--drift': `${drift}px`,
                            animation: `ember-rise ${dur}s ease-out ${delay}s infinite`,
                            willChange: 'transform, opacity',
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default EmberParticles;
