import React from 'react';

interface HeroProps {
    onScrollToSection: (id: string) => void;
    onSignGuestbook: () => void;
}

const Hero: React.FC<HeroProps> = ({ onScrollToSection, onSignGuestbook }) => {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center px-6 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-background-dark/30 via-background-dark/80 to-background-dark z-10"></div>
                <div
                    className="w-full h-full bg-cover bg-center opacity-40 animate-pulse-slow"
                    style={{ backgroundImage: "url('https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop')" }}
                ></div>
            </div>

            <div className="relative z-20 text-center max-w-4xl mx-auto animate-fade-in-up">
                <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6 border border-primary/30 backdrop-blur-sm animate-float">
                    Celebrating a New Chapter
                </span>
                <h1 className="text-6xl md:text-8xl font-black leading-tight mb-8 gold-glow tracking-tighter">
                    Another Year <br /> Around the <span className="text-primary">Sun</span>
                </h1>
                <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Celebrating the journey of <span className="text-primary font-bold">Babajide Tomoshegbo</span>.
                    A year defined by remarkable growth, profound lessons, and unforgettable milestones.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={onSignGuestbook}
                        className="w-full sm:w-auto bg-primary text-background-dark px-10 py-4 rounded-full text-lg font-bold hover:shadow-[0_0_40px_rgba(242,185,13,0.4)] transition-all transform hover:-translate-y-1"
                    >
                        Leave a Birthday Message
                    </button>
                    <button
                        onClick={() => onScrollToSection('reflections')}
                        className="w-full sm:w-auto px-10 py-4 rounded-full text-lg font-bold border border-primary/40 hover:bg-primary/10 transition-all backdrop-blur-sm"
                    >
                        View Journey
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
