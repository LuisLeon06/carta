import React, { useState, useMemo } from 'react';

// Top-priority languages first, then all world languages
const ALL_LANGUAGES = [
    // ── Prioritarios ──
    { code: 'pt', label: 'Português', flag: '🇧🇷', priority: true },
    { code: 'fr', label: 'Français', flag: '🇫🇷', priority: true },
    { code: 'it', label: 'Italiano', flag: '🇮🇹', priority: true },
    { code: 'en', label: 'English', flag: '🇬🇧', priority: true },
    { code: 'es', label: 'Español', flag: '🇦🇷', priority: true },
    // ── Resto del mundo ──
    { code: 'af', label: 'Afrikáans', flag: '🇿🇦' },
    { code: 'sq', label: 'Albanés', flag: '🇦🇱' },
    { code: 'am', label: 'Amárico', flag: '🇪🇹' },
    { code: 'ar', label: 'Árabe', flag: '🇸🇦' },
    { code: 'hy', label: 'Armenio', flag: '🇦🇲' },
    { code: 'az', label: 'Azerbaiyano', flag: '🇦🇿' },
    { code: 'eu', label: 'Vasco (Euskera)', flag: '🏴󠁥󠁳󠁰󠁶󠁿' },
    { code: 'be', label: 'Bielorruso', flag: '🇧🇾' },
    { code: 'bn', label: 'Bengalí', flag: '🇧🇩' },
    { code: 'bs', label: 'Bosanski', flag: '🇧🇦' },
    { code: 'bg', label: 'Búlgaro', flag: '🇧🇬' },
    { code: 'ca', label: 'Catalán', flag: '🏴󠁥󠁳󠁣󠁴󠁿' },
    { code: 'ceb', label: 'Cebuano', flag: '🇵🇭' },
    { code: 'zh-CN', label: 'Chino Simplificado', flag: '🇨🇳' },
    { code: 'zh-TW', label: 'Chino Tradicional', flag: '🇹🇼' },
    { code: 'co', label: 'Corso', flag: '🇫🇷' },
    { code: 'hr', label: 'Croata', flag: '🇭🇷' },
    { code: 'cs', label: 'Checo', flag: '🇨🇿' },
    { code: 'da', label: 'Danés', flag: '🇩🇰' },
    { code: 'nl', label: 'Neerlandés', flag: '🇳🇱' },
    { code: 'eo', label: 'Esperanto', flag: '🌍' },
    { code: 'et', label: 'Estonio', flag: '🇪🇪' },
    { code: 'fi', label: 'Finlandés', flag: '🇫🇮' },
    { code: 'fy', label: 'Frisón', flag: '🇳🇱' },
    { code: 'gl', label: 'Gallego', flag: '🇪🇸' },
    { code: 'ka', label: 'Georgiano', flag: '🇬🇪' },
    { code: 'de', label: 'Alemán', flag: '🇩🇪' },
    { code: 'el', label: 'Griego', flag: '🇬🇷' },
    { code: 'gu', label: 'Gujarati', flag: '🇮🇳' },
    { code: 'ht', label: 'Haitiano', flag: '🇭🇹' },
    { code: 'ha', label: 'Hausa', flag: '🇳🇬' },
    { code: 'haw', label: 'Hawaiano', flag: '🇺🇸' },
    { code: 'iw', label: 'Hebreo', flag: '🇮🇱' },
    { code: 'hi', label: 'Hindi', flag: '🇮🇳' },
    { code: 'hmn', label: 'Hmong', flag: '🌏' },
    { code: 'hu', label: 'Húngaro', flag: '🇭🇺' },
    { code: 'is', label: 'Islandés', flag: '🇮🇸' },
    { code: 'ig', label: 'Igbo', flag: '🇳🇬' },
    { code: 'id', label: 'Indonesio', flag: '🇮🇩' },
    { code: 'ga', label: 'Irlandés', flag: '🇮🇪' },
    { code: 'ja', label: 'Japonés', flag: '🇯🇵' },
    { code: 'jw', label: 'Javanés', flag: '🇮🇩' },
    { code: 'kn', label: 'Kannada', flag: '🇮🇳' },
    { code: 'kk', label: 'Kazajo', flag: '🇰🇿' },
    { code: 'km', label: 'Jemer', flag: '🇰🇭' },
    { code: 'rw', label: 'Kinyarwanda', flag: '🇷🇼' },
    { code: 'ko', label: 'Coreano', flag: '🇰🇷' },
    { code: 'ku', label: 'Kurdo', flag: '🇮🇶' },
    { code: 'ky', label: 'Kirguís', flag: '🇰🇬' },
    { code: 'lo', label: 'Laosiano', flag: '🇱🇦' },
    { code: 'lv', label: 'Letón', flag: '🇱🇻' },
    { code: 'lt', label: 'Lituano', flag: '🇱🇹' },
    { code: 'lb', label: 'Luxemburgués', flag: '🇱🇺' },
    { code: 'mk', label: 'Macedonio', flag: '🇲🇰' },
    { code: 'mg', label: 'Malagasy', flag: '🇲🇬' },
    { code: 'ms', label: 'Malayo', flag: '🇲🇾' },
    { code: 'ml', label: 'Malayalam', flag: '🇮🇳' },
    { code: 'mt', label: 'Maltés', flag: '🇲🇹' },
    { code: 'mi', label: 'Maorí', flag: '🇳🇿' },
    { code: 'mr', label: 'Maratí', flag: '🇮🇳' },
    { code: 'mn', label: 'Mongol', flag: '🇲🇳' },
    { code: 'my', label: 'Birmano', flag: '🇲🇲' },
    { code: 'ne', label: 'Nepalés', flag: '🇳🇵' },
    { code: 'no', label: 'Noruego', flag: '🇳🇴' },
    { code: 'ny', label: 'Chichewa', flag: '🇲🇼' },
    { code: 'or', label: 'Oriya', flag: '🇮🇳' },
    { code: 'ps', label: 'Pastún', flag: '🇦🇫' },
    { code: 'fa', label: 'Persa', flag: '🇮🇷' },
    { code: 'pl', label: 'Polaco', flag: '🇵🇱' },
    { code: 'pa', label: 'Punjabi', flag: '🇮🇳' },
    { code: 'ro', label: 'Rumano', flag: '🇷🇴' },
    { code: 'ru', label: 'Ruso', flag: '🇷🇺' },
    { code: 'sm', label: 'Samoano', flag: '🇼🇸' },
    { code: 'gd', label: 'Gaélico Escocés', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿' },
    { code: 'sr', label: 'Serbio', flag: '🇷🇸' },
    { code: 'st', label: 'Sesoto', flag: '🇱🇸' },
    { code: 'sn', label: 'Shona', flag: '🇿🇼' },
    { code: 'sd', label: 'Sindhi', flag: '🇵🇰' },
    { code: 'si', label: 'Cingalés', flag: '🇱🇰' },
    { code: 'sk', label: 'Eslovaco', flag: '🇸🇰' },
    { code: 'sl', label: 'Esloveno', flag: '🇸🇮' },
    { code: 'so', label: 'Somalí', flag: '🇸🇴' },
    { code: 'su', label: 'Sundanés', flag: '🇮🇩' },
    { code: 'sw', label: 'Suajili', flag: '🇰🇪' },
    { code: 'sv', label: 'Sueco', flag: '🇸🇪' },
    { code: 'tl', label: 'Filipino', flag: '🇵🇭' },
    { code: 'tg', label: 'Tayiko', flag: '🇹🇯' },
    { code: 'ta', label: 'Tamil', flag: '🇮🇳' },
    { code: 'tt', label: 'Tártaro', flag: '🇷🇺' },
    { code: 'te', label: 'Telugu', flag: '🇮🇳' },
    { code: 'th', label: 'Tailandés', flag: '🇹🇭' },
    { code: 'tr', label: 'Turco', flag: '🇹🇷' },
    { code: 'tk', label: 'Turcomano', flag: '🇹🇲' },
    { code: 'uk', label: 'Ucraniano', flag: '🇺🇦' },
    { code: 'ur', label: 'Urdu', flag: '🇵🇰' },
    { code: 'ug', label: 'Uigur', flag: '🇨🇳' },
    { code: 'uz', label: "O'zbek", flag: '🇺🇿' },
    { code: 'vi', label: 'Vietnamita', flag: '🇻🇳' },
    { code: 'cy', label: 'Galés', flag: '🏴󠁧󠁢󠁷󠁬󠁳󠁿' },
    { code: 'xh', label: 'isiXhosa', flag: '🇿🇦' },
    { code: 'yi', label: 'Yídish', flag: '🌍' },
    { code: 'yo', label: 'Yoruba', flag: '🇳🇬' },
    { code: 'zu', label: 'Zulú', flag: '🇿🇦' },
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

const CategoryList = ({ categories, onSelectCategory }) => {
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

    return (
        <div className="min-h-screen w-full flex flex-col pt-8 pb-12 px-4 md:px-8 max-w-lg mx-auto bg-[var(--color-dark-bg)] text-white">

            {/* Header */}
            <header className="mb-8 flex justify-between items-center px-2">
                <h2 className="text-4xl font-bold font-tech text-neon-cyan tracking-widest">MENÚ</h2>
                <div
                    className="w-10 h-10 rounded-full glass-panel box-neon-cyan flex flex-col justify-center items-center gap-1 cursor-pointer hover:shadow-[0_0_20px_rgba(255,77,0,0.6)] transition-shadow"
                    onClick={() => { setShowLangPanel(v => !v); setSearch(''); }}
                >
                    <span className="w-4 h-0.5 bg-white rounded"></span>
                    <span className="w-4 h-0.5 bg-white rounded"></span>
                    <span className="w-4 h-0.5 bg-white rounded"></span>
                </div>
            </header>

            {/* Language Panel */}
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
                                    <span className="text-xl w-7 shrink-0">{lang.flag}</span>
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
        </div>
    );
};

export default CategoryList;
