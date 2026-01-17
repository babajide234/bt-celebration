import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="py-20 border-t border-white/5 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-black mb-3">BT <span className="text-primary">Celebration</span></h2>
                    <p className="text-gray-500 text-lg">Thank you for being part of my journey.</p>
                </div>

                <div className="flex gap-4">
                    {['share', 'link', 'mail'].map((icon) => (
                        <button
                            key={icon}
                            className="size-14 rounded-full border border-zinc-800 flex items-center justify-center hover:bg-primary/10 hover:border-primary transition-all group"
                        >
                            <span className="material-symbols-outlined group-hover:scale-110 transition-transform">{icon}</span>
                        </button>
                    ))}
                </div>

                <div className="text-center md:text-right">
                    <p className="text-sm text-gray-500 font-medium">© 2024 Babajide Tomoshegbo. All rights reserved.</p>
                    <div className="flex gap-4 mt-2 justify-center md:justify-end text-[10px] text-zinc-600 font-bold tracking-widest">
                        <span className="hover:text-primary cursor-pointer">PRIVACY</span>
                        <span className="hover:text-primary cursor-pointer">TERMS</span>
                        <span className="hover:text-primary cursor-pointer">COOKIES</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
