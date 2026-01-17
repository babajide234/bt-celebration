import React from 'react';
import SectionHeading from './SectionHeading';
import { MILESTONES } from '../constants';

const Milestones: React.FC = () => {
    return (
        <section id="milestones" className="py-32 px-6 bg-background-dark">
            <div className="max-w-[1600px] mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <SectionHeading title="The Past 365 Days" />
                        <p className="text-gray-500 -mt-8 text-lg">Key milestones and achievements from the year.</p>
                    </div>
                </div>

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                    {MILESTONES.map((milestone) => (
                        <div
                            key={milestone.id}
                            className={`group p-10 rounded-[2.5rem] bg-zinc-900 border transition-all duration-500 hover:-translate-y-2 relative overflow-hidden ${milestone.featured
                                ? 'border-primary/40 shadow-[0_20px_40px_rgba(0,0,0,0.5)] z-10'
                                : 'border-zinc-800 hover:border-primary/20'
                                }`}
                        >
                            <div className={`size-16 rounded-full flex items-center justify-center mb-8 transition-all duration-500 group-hover:scale-110 ${milestone.featured ? 'bg-primary text-background-dark' : 'bg-primary/10 text-primary'
                                }`}>
                                <span className="material-symbols-outlined text-3xl">{milestone.icon}</span>
                            </div>
                            <span className={`font-extrabold text-xs uppercase tracking-[0.2em] mb-3 block ${milestone.featured ? 'text-primary' : 'text-primary/70'}`}>
                                {milestone.quarter}
                            </span>
                            <h3 className="text-2xl font-black mb-4 tracking-tight text-white">{milestone.title}</h3>
                            <p className="text-gray-500 leading-relaxed text-lg">{milestone.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Milestones;
