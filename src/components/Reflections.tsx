import React from 'react';

const Reflections: React.FC = () => {
    return (
        <section id="reflections" className="py-32 px-6 bg-zinc-950/50">
            <div className="max-w-4xl mx-auto text-center">
                <div className="mb-8">
                    <span className="material-symbols-outlined text-primary text-6xl opacity-50">format_quote</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-10 tracking-tight">Reflections on Growth</h2>
                <div className="space-y-8 text-xl text-gray-400 leading-loose font-medium italic">
                    <p>
                        "This past year has been a testament to resilience and the beauty of continuous learning. From professional leaps to personal discoveries, every moment has contributed to the man I am today."
                    </p>
                    <p>
                        "I've learned that growth isn't always linear, but it is always necessary. As I step into this new year, I carry with me the wisdom of yesterday and the excitement for the unknown adventures of tomorrow. Thank you for being part of this incredible ride."
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Reflections;
