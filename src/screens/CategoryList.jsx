import React, { useState, useMemo } from 'react';

// countryCode = ISO 3166-1 alpha-2 del país donde más se habla ese idioma
const ALL_LANGUAGES = [
    // ── Prioritarios ──
    { code: 'pt', label: 'Português', countryCode: 'br', priority: true },
    { code: 'fr', label: 'Français', countryCode: 'fr', priority: true },
    { code: 'it', label: 'Italiano', countryCode: 'it', priority: true },
    { code: 'en', label: 'English', countryCode: 'gb', priority: true },
    { code: 'es', label: 'Español', countryCode: 'ar', priority: true },
    // ── Resto del mundo ──
    { code: 'af', label: 'Afrikáans', countryCode: 'za' },
    { code: 'sq', label: 'Albanés', countryCode: 'al' },
    { code: 'am', label: 'Amárico', countryCode: 'et' },
    { code: 'ar', label: 'Árabe', countryCode: 'sa' },
    { code: 'hy', label: 'Armenio', countryCode: 'am' },
    { code: 'az', label: 'Azerbaiyano', countryCode: 'az' },
    { code: 'eu', label: 'Vasco (Euskera)', countryCode: 'es' },
    { code: 'be', label: 'Bielorruso', countryCode: 'by' },
    { code: 'bn', label: 'Bengalí', countryCode: 'bd' },
    { code: 'bs', label: 'Bosanski', countryCode: 'ba' },
    { code: 'bg', label: 'Búlgaro', countryCode: 'bg' },
    { code: 'ca', label: 'Catalán', countryCode: 'es' },
    { code: 'ceb', label: 'Cebuano', countryCode: 'ph' },
    { code: 'zh-CN', label: 'Chino Simplificado', countryCode: 'cn' },
    { code: 'zh-TW', label: 'Chino Tradicional', countryCode: 'tw' },
    { code: 'co', label: 'Corso', countryCode: 'fr' },
    { code: 'hr', label: 'Croata', countryCode: 'hr' },
    { code: 'cs', label: 'Checo', countryCode: 'cz' },
    { code: 'da', label: 'Danés', countryCode: 'dk' },
    { code: 'nl', label: 'Neerlandés', countryCode: 'nl' },
    { code: 'eo', label: 'Esperanto', countryCode: 'eu' },
    { code: 'et', label: 'Estonio', countryCode: 'ee' },
    { code: 'fi', label: 'Finlandés', countryCode: 'fi' },
    { code: 'fy', label: 'Frisón', countryCode: 'nl' },
    { code: 'gl', label: 'Gallego', countryCode: 'es' },
    { code: 'ka', label: 'Georgiano', countryCode: 'ge' },
    { code: 'de', label: 'Alemán', countryCode: 'de' },
    { code: 'el', label: 'Griego', countryCode: 'gr' },
    { code: 'gu', label: 'Gujarati', countryCode: 'in' },
    { code: 'ht', label: 'Haitiano', countryCode: 'ht' },
    { code: 'ha', label: 'Hausa', countryCode: 'ng' },
    { code: 'haw', label: 'Hawaiano', countryCode: 'us' },
    { code: 'iw', label: 'Hebreo', countryCode: 'il' },
    { code: 'hi', label: 'Hindi', countryCode: 'in' },
    { code: 'hmn', label: 'Hmong', countryCode: 'cn' },
    { code: 'hu', label: 'Húngaro', countryCode: 'hu' },
    { code: 'is', label: 'Islandés', countryCode: 'is' },
    { code: 'ig', label: 'Igbo', countryCode: 'ng' },
    { code: 'id', label: 'Indonesio', countryCode: 'id' },
    { code: 'ga', label: 'Irlandés', countryCode: 'ie' },
    { code: 'ja', label: 'Japonés', countryCode: 'jp' },
    { code: 'jw', label: 'Javanés', countryCode: 'id' },
    { code: 'kn', label: 'Kannada', countryCode: 'in' },
    { code: 'kk', label: 'Kazajo', countryCode: 'kz' },
    { code: 'km', label: 'Jemer', countryCode: 'kh' },
    { code: 'rw', label: 'Kinyarwanda', countryCode: 'rw' },
    { code: 'ko', label: 'Coreano', countryCode: 'kr' },
    { code: 'ku', label: 'Kurdo', countryCode: 'iq' },
    { code: 'ky', label: 'Kirguís', countryCode: 'kg' },
    { code: 'lo', label: 'Laosiano', countryCode: 'la' },
    { code: 'lv', label: 'Letón', countryCode: 'lv' },
    { code: 'lt', label: 'Lituano', countryCode: 'lt' },
    { code: 'lb', label: 'Luxemburgués', countryCode: 'lu' },
    { code: 'mk', label: 'Macedonio', countryCode: 'mk' },
    { code: 'mg', label: 'Malagasy', countryCode: 'mg' },
    { code: 'ms', label: 'Malayo', countryCode: 'my' },
    { code: 'ml', label: 'Malayalam', countryCode: 'in' },
    { code: 'mt', label: 'Maltés', countryCode: 'mt' },
    { code: 'mi', label: 'Maorí', countryCode: 'nz' },
    { code: 'mr', label: 'Maratí', countryCode: 'in' },
    { code: 'mn', label: 'Mongol', countryCode: 'mn' },
    { code: 'my', label: 'Birmano', countryCode: 'mm' },
    { code: 'ne', label: 'Nepalés', countryCode: 'np' },
    { code: 'no', label: 'Noruego', countryCode: 'no' },
    { code: 'ny', label: 'Chichewa', countryCode: 'mw' },
    { code: 'or', label: 'Oriya', countryCode: 'in' },
    { code: 'ps', label: 'Pastún', countryCode: 'af' },
    { code: 'fa', label: 'Persa', countryCode: 'ir' },
    { code: 'pl', label: 'Polaco', countryCode: 'pl' },
    { code: 'pa', label: 'Punjabi', countryCode: 'in' },
    { code: 'ro', label: 'Rumano', countryCode: 'ro' },
    { code: 'ru', label: 'Ruso', countryCode: 'ru' },
    { code: 'sm', label: 'Samoano', countryCode: 'ws' },
    { code: 'gd', label: 'Gaélico Escocés', countryCode: 'gb' },
    { code: 'sr', label: 'Serbio', countryCode: 'rs' },
    { code: 'st', label: 'Sesoto', countryCode: 'ls' },
    { code: 'sn', label: 'Shona', countryCode: 'zw' },
    { code: 'sd', label: 'Sindhi', countryCode: 'pk' },
    { code: 'si', label: 'Cingalés', countryCode: 'lk' },
    { code: 'sk', label: 'Eslovaco', countryCode: 'sk' },
    { code: 'sl', label: 'Esloveno', countryCode: 'si' },
    { code: 'so', label: 'Somalí', countryCode: 'so' },
    { code: 'su', label: 'Sundanés', countryCode: 'id' },
    { code: 'sw', label: 'Suajili', countryCode: 'ke' },
    { code: 'sv', label: 'Sueco', countryCode: 'se' },
    { code: 'tl', label: 'Filipino', countryCode: 'ph' },
    { code: 'tg', label: 'Tayiko', countryCode: 'tj' },
    { code: 'ta', label: 'Tamil', countryCode: 'in' },
    { code: 'tt', label: 'Tártaro', countryCode: 'ru' },
    { code: 'te', label: 'Telugu', countryCode: 'in' },
    { code: 'th', label: 'Tailandés', countryCode: 'th' },
    { code: 'tr', label: 'Turco', countryCode: 'tr' },
    { code: 'tk', label: 'Turcomano', countryCode: 'tm' },
    { code: 'uk', label: 'Ucraniano', countryCode: 'ua' },
    { code: 'ur', label: 'Urdu', countryCode: 'pk' },
    { code: 'ug', label: 'Uigur', countryCode: 'cn' },
    { code: 'uz', label: "O'zbek", countryCode: 'uz' },
    { code: 'vi', label: 'Vietnamita', countryCode: 'vn' },
    { code: 'cy', label: 'Galés', countryCode: 'gb' },
    { code: 'xh', label: 'isiXhosa', countryCode: 'za' },
    { code: 'yi', label: 'Yídish', countryCode: 'il' },
    { code: 'yo', label: 'Yoruba', countryCode: 'ng' },
    { code: 'zu', label: 'Zulú', countryCode: 'za' },
];

const changeLanguage = (langCode) => {
    // Borrar cookies anteriores
    const eraseCookie = (name) => {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=' + window.location.hostname;
    };
    eraseCookie('googtrans');

    if (langCode !== 'es') {
        // Google Translate lee esta cookie al cargar la página
        document.cookie = `googtrans=/es/${langCode}; path=/`;
    }
    // Recargar para que Google Translate aplique la traducción
    window.location.reload();
};

const CategoryList = ({ categories, onSelectCategory, cartCount = 0, onOpenCart, onOpenAdmin }) => {
    const [showLangPanel, setShowLangPanel] = useState(false);
    const [activeLang, setActiveLang] = useState('es');
    const [search, setSearch] = useState('');

    const filteredLangs = useMemo(() => {
        const q = search.toLowerCase().trim();
        if (!q) return ALL_LANGUAGES;
        return ALL_LANGUAGES.filter(
            (l) => l.label.toLowerCase().includes(q) || l.code.toLowerCase().includes(q)
        );
    }, [search]);

    const handleLangSelect = (code) => {
        setActiveLang(code);
        changeLanguage(code);
        setShowLangPanel(false);
        setSearch('');
    };
    const [showPasswordModal, setShowPasswordModal] = useState(false);
    const [passwordInput, setPasswordInput] = useState('');
    const [passwordError, setPasswordError] = useState(false);

    const handlePasswordSubmit = () => {
        if (passwordInput === 'losle2024') {
            setShowPasswordModal(false);
            setPasswordInput('');
            setPasswordError(false);
            onOpenAdmin && onOpenAdmin();
        } else {
            setPasswordError(true);
            setPasswordInput('');
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col pt-8 pb-12 px-4 md:px-8 max-w-lg mx-auto text-white charred-container">

            {/* Header */}
            <header className="mb-8 flex justify-between items-center px-2">
                <h2 className="text-4xl font-bold font-tech text-neon-cyan tracking-widest">MENÚ</h2>

                {/* Right buttons */}
                <div className="flex items-center gap-2">

                    {/* Language button */}
                    <div
                        className="w-10 h-10 rounded-full glass-panel box-neon-cyan flex items-center justify-center cursor-pointer hover:shadow-[0_0_20px_rgba(255,77,0,0.6)] transition-shadow"
                        onClick={() => { setShowLangPanel(v => !v); setSearch(''); }}
                        title="Idioma"
                    >
                        {/* Globe icon */}
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                        </svg>
                    </div>

                    {/* Cart button */}
                    <div className="relative">
                        <div
                            className="w-10 h-10 rounded-full glass-panel box-neon-cyan flex items-center justify-center cursor-pointer hover:shadow-[0_0_20px_rgba(255,77,0,0.6)] transition-shadow"
                            title="Ver carrito"
                            onClick={() => onOpenCart && onOpenCart()}
                        >
                            {/* Cart icon */}
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 0 1-8 0" />
                            </svg>
                        </div>
                        {/* Badge */}
                        {cartCount > 0 && (
                            <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-orange-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center px-1 shadow-[0_0_8px_rgba(234,88,12,0.8)] border border-orange-300/30">
                                {cartCount}
                            </span>
                        )}
                    </div>

                </div>
            </header>

            {/* ── Modal contraseña personal ── */}
            {showPasswordModal && (
                <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6">
                    <div className="w-full max-w-xs bg-[#100e0b] border border-orange-900/40 rounded-2xl p-6 flex flex-col gap-4 shadow-2xl">
                        <div className="text-center">
                            <div className="text-2xl mb-1">🔐</div>
                            <h3 className="font-tech text-white font-bold uppercase tracking-widest text-sm">Acceso Personal</h3>
                            <p className="text-[10px] text-gray-600 mt-1">Ingresá la contraseña de staff</p>
                        </div>
                        <input
                            type="password"
                            value={passwordInput}
                            onChange={e => { setPasswordInput(e.target.value); setPasswordError(false); }}
                            onKeyDown={e => e.key === 'Enter' && handlePasswordSubmit()}
                            placeholder="••••••••"
                            autoFocus
                            className={`w-full bg-white/5 border rounded-xl px-4 py-3 text-white text-sm outline-none transition-colors text-center tracking-widest
                                ${passwordError ? 'border-red-500/60 placeholder-red-500/40' : 'border-white/10 placeholder-gray-700 focus:border-orange-500/50'}`}
                        />
                        {passwordError && (
                            <p className="text-red-400 text-xs text-center -mt-2">Contraseña incorrecta</p>
                        )}
                        <div className="flex gap-2">
                            <button
                                onClick={() => setShowPasswordModal(false)}
                                className="flex-1 py-2.5 rounded-xl border border-white/10 text-gray-500 text-xs font-bold uppercase tracking-wide hover:bg-white/5 transition-colors"
                            >Cancelar</button>
                            <button
                                onClick={handlePasswordSubmit}
                                className="flex-1 py-2.5 rounded-xl bg-orange-700 text-white text-xs font-bold uppercase tracking-wide hover:bg-orange-600 transition-colors"
                            >Entrar</button>
                        </div>
                    </div>
                </div>
            )}

            {showLangPanel && (
                <div className="fixed inset-0 z-50 flex items-end justify-center" onClick={() => setShowLangPanel(false)}>
                    <div
                        className="w-full max-w-lg rounded-t-[2rem] p-5 pb-8 border-t border-[var(--color-primary-fire)] shadow-[0_-20px_60px_rgba(255,77,0,0.25)]"
                        style={{ background: 'rgba(8,3,0,0.97)', backdropFilter: 'blur(20px)' }}
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Handle */}
                        <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-4"></div>

                        {/* Title */}
                        <p className="text-xs text-[var(--color-primary-fire)] uppercase tracking-[0.3em] font-bold text-center mb-3">
                            🌐 Seleccioná el idioma
                        </p>

                        {/* Search */}
                        <div className="relative mb-3">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-sm">🔍</span>
                            <input
                                type="text"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                                placeholder="Buscar idioma..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl py-2.5 pl-9 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[var(--color-primary-fire)]"
                            />
                        </div>

                        {/* Language list */}
                        <div className="flex flex-col gap-2 overflow-y-auto max-h-64 hide-scrollbar">
                            {filteredLangs.length === 0 && (
                                <p className="text-center text-gray-500 py-4 text-sm">No se encontró ningún idioma</p>
                            )}
                            {filteredLangs.map((lang) => (
                                <button
                                    key={lang.code}
                                    onClick={() => handleLangSelect(lang.code)}
                                    className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl font-tech text-sm font-bold tracking-wide transition-all duration-150
                                        ${activeLang === lang.code
                                            ? 'bg-[var(--color-primary-fire)]/20 border border-[var(--color-primary-fire)] text-white'
                                            : 'border border-white/10 text-white hover:border-[var(--color-primary-fire)] hover:bg-white/5'
                                        }
                                        ${lang.priority ? 'border-[var(--color-primary-fire)]/40' : ''}
                                    `}
                                >
                                    <img
                                        src={`https://flagcdn.com/24x18/${lang.countryCode}.png`}
                                        alt={lang.label}
                                        width="24"
                                        height="18"
                                        className="rounded-sm shrink-0 shadow-sm"
                                        style={{ minWidth: '24px' }}
                                    />
                                    <span className="truncate">{lang.label}</span>
                                    {activeLang === lang.code && (
                                        <span className="ml-auto text-[var(--color-primary-fire)]">✓</span>
                                    )}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}

            {/* Category List */}
            <div className="flex flex-col gap-4 flex-1">
                {categories.map((cat) => (
                    <div key={cat.id} className="card-rotating-border w-full">
                        <div
                            className="w-full h-44 rounded-[1.9rem] cursor-pointer relative overflow-hidden glass-panel transform transition-all duration-300 hover:scale-[1.01] hover:bg-white/5 active:scale-95 group box-border shadow-2xl"
                            onClick={() => onSelectCategory(cat)}
                        >
                            {/* Background Image (right side) */}
                            <div className="absolute right-0 top-0 bottom-0 w-3/5 opacity-50 transition-opacity duration-300 group-hover:opacity-80">
                                {/* Gradient to blend image smoothly into the glass panel on the left */}
                                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                                <img src={cat.image} alt={cat.name} className="w-full h-full object-cover origin-center" />
                                <div className="absolute inset-0 bg-fire-red/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>
                            </div>

                            {/* Text Overlay */}
                            <div className="absolute inset-0 p-6 flex flex-col justify-center z-20 w-3/4">
                                <h3 className="font-tech text-3xl font-bold mb-2 tracking-tight text-white group-hover:text-neon-fire transition-colors drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">{cat.name}</h3>
                                <p className="text-sm text-gray-300 leading-snug line-clamp-2 pr-4 drop-shadow-md">
                                    {cat.subtitle}
                                </p>

                                {/* Button */}
                                <div className="mt-5 text-xs font-bold tracking-widest uppercase text-neon-fire flex items-center gap-2 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300">
                                    Explorar
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* ── Footer discreto ── */}
            <footer className="mt-16 flex flex-col items-center gap-1 pb-6">
                <p className="text-[9px] text-gray-700 tracking-widest uppercase text-center">
                    <a href="https://nortechly.com" target="_blank" rel="noreferrer" className="hover:text-gray-500 transition-colors">nortechly.com</a>
                    {' · '}
                    <span className="cursor-pointer hover:text-gray-500 transition-colors">Términos y condiciones</span>
                    {' · '}
                    <span
                        className="cursor-pointer hover:text-gray-500 transition-colors"
                        onClick={() => { setShowPasswordModal(true); setPasswordError(false); setPasswordInput(''); }}
                    >Personal</span>
                </p>
            </footer>
        </div>
    );
};

export default CategoryList;
