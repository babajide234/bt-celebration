import React from 'react';
import SectionHeading from './SectionHeading';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
    return (
        <section id="gallery" className="py-32 px-6 bg-zinc-950/30">
            <div className="max-w-7xl mx-auto">
                <SectionHeading title="Captured Moments" centered />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">
                    {GALLERY_IMAGES.map((img) => (
                        <div
                            key={img.id}
                            className={`group relative overflow-hidden rounded-2xl cursor-pointer ${img.size === 'large' ? 'md:row-span-2' : ''
                                }`}
                        >
                            <img
                                src={img.src}
                                alt={img.alt}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/0 transition-colors duration-500"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                                <p className="text-sm font-bold tracking-wide uppercase text-primary translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    {img.alt}
                                </p>
                            </div>
                            {/* Decorative overlay */}
                            <div className="absolute inset-0 border border-primary/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;
