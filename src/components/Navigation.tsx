import React from 'react';

interface NavigationProps {
    onScrollToSection: (id: string) => void;
    onSignGuestbook: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ onScrollToSection, onSignGuestbook }) => {
    return (
        <header className="glass-nav sticky top-0 z-50 w-full border-b border-primary/10 transition-all duration-300">
            <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                <div
                    className="flex items-center gap-3 group cursor-pointer"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                    <div className="size-10 bg-primary rounded-full flex items-center justify-center text-background-dark shadow-[0_0_15px_rgba(242,185,13,0.3)] transition-transform group-hover:scale-110">
                        <span className="material-symbols-outlined font-bold">celebration</span>
                    </div>
                    <h2 className="text-xl font-extrabold tracking-tight">BT Celebration</h2>
                </div>

                <nav className="hidden md:flex items-center gap-10">
                    {['Reflections', 'Milestones', 'Gallery'].map((item) => (
                        <button
                            key={item}
                            onClick={() => onScrollToSection(item.toLowerCase())}
                            className="text-sm font-semibold text-gray-400 hover:text-primary transition-colors relative group"
                        >
                            {item}
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                        </button>
                    ))}
                    <button
                        onClick={() => onScrollToSection('guestbook')}
                        className="text-sm font-semibold text-gray-400 hover:text-primary transition-colors relative group"
                    >
                        Wall of Love
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                    </button>
                </nav>

                <button
                    onClick={onSignGuestbook}
                    className="bg-primary text-background-dark px-6 py-2.5 rounded-full text-sm font-bold hover:scale-105 active:scale-95 transition-all shadow-lg hover:shadow-primary/20"
                >
                    Sign Guestbook
                </button>
            </div>
        </header>
    );
};

export default Navigation;
