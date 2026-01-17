import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabaseClient';
import { generateBirthdayWish } from '../services/geminiService';
import { GuestbookMessage } from '../types';
import SectionHeading from './SectionHeading';

interface GuestbookProps {
    isModalOpen: boolean;
    onCloseModal: () => void;
    onOpenModal: () => void;
}

const Guestbook: React.FC<GuestbookProps> = ({ isModalOpen, onCloseModal, onOpenModal }) => {
    const [messages, setMessages] = useState<GuestbookMessage[]>([]);
    const [formName, setFormName] = useState('');
    const [formRelationship, setFormRelationship] = useState('');
    const [formMessage, setFormMessage] = useState('');
    const [isGenerating, setIsGenerating] = useState(false);


    useEffect(() => {
        fetchMessages();
    }, []);

    const fetchMessages = async () => {
        const { data, error } = await supabase
            .from('guestbook')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Error fetching messages:', error);
        } else {
            setMessages(data || []);
        }
    };

    const handlePostMessage = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formName || !formMessage) return;

        const newMessage = {
            name: formName,
            relationship: formRelationship || 'Friend',
            message: `"${formMessage}"`,
            avatar: `https://i.pravatar.cc/150?u=${Date.now()}`,
            is_ai_generated: false
        };

        const { error } = await supabase
            .from('guestbook')
            .insert([newMessage]);

        if (error) {
            console.error('Error posting message:', error);
            alert('Failed to post message. Please try again.');
        } else {
            setFormName('');
            setFormRelationship('');
            setFormMessage('');
            onCloseModal();
            fetchMessages();
        }
    };

    const handleAiSurprise = async () => {
        if (!formName) {
            alert("Please enter your name first for a personalized wish!");
            return;
        }
        setIsGenerating(true);
        const wish = await generateBirthdayWish(formName, "He is a senior lead and loves traveling");
        setFormMessage(wish);
        setIsGenerating(false);
    };

    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2);
    };

    return (
        <>
            <section id="guestbook" className="py-32 px-6">
                <div className="max-w-[1600px] mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-black mb-4 tracking-tight">Wall of Love</h2>
                        <p className="text-gray-400 text-lg max-w-2xl mx-auto">Voices of friends, family, and colleagues celebrating Babajide's journey.</p>
                        <div className="mt-8">
                            <button
                                onClick={onOpenModal}
                                className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-background-dark transition-all"
                            >
                                <span className="material-symbols-outlined">edit_square</span>
                                Sign the Guestbook
                            </button>
                        </div>
                    </div>

                    <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                        {messages.map((msg) => (
                            <div key={msg.id} className="break-inside-avoid">
                                <div className="bg-zinc-900/40 backdrop-blur-md border border-primary/10 p-6 rounded-2xl hover:border-primary/40 transition-all duration-300">
                                    <p className="text-gray-200 leading-relaxed mb-6 italic text-lg">{msg.message}</p>
                                    <div className="flex items-center gap-3">
                                        {msg.avatar ? (
                                            <img alt={msg.name} className="size-10 rounded-full border border-primary/30 object-cover" src={msg.avatar} />
                                        ) : (
                                            <div className="size-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold border border-primary/30">
                                                {getInitials(msg.name)}
                                            </div>
                                        )}
                                        <div>
                                            <p className="font-bold text-sm text-primary">{msg.name}</p>
                                            <p className="text-[10px] uppercase tracking-wider text-gray-500">{msg.relationship || 'Well Wisher'}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <button className="px-12 py-4 rounded-full border border-primary/30 font-bold hover:bg-primary/10 transition-all flex items-center gap-3 mx-auto uppercase text-sm tracking-widest">
                            <span>Load More Messages</span>
                            <span className="material-symbols-outlined">expand_more</span>
                        </button>
                    </div>
                </div>
            </section>

            {/* Modal Backdrop and Content */}
            {isModalOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-background-dark/90 backdrop-blur-xl animate-fade-in">
                    <div className="w-full max-w-xl bg-zinc-900 border border-primary/30 rounded-3xl p-8 relative shadow-2xl">
                        <button
                            onClick={onCloseModal}
                            className="absolute top-6 right-6 text-gray-500 hover:text-primary transition-colors"
                        >
                            <span className="material-symbols-outlined text-3xl">close</span>
                        </button>

                        <div className="mb-8">
                            <h3 className="text-3xl font-black mb-2 tracking-tight">Sign the Guestbook</h3>
                            <p className="text-gray-400">Your message will appear on the wall instantly.</p>
                        </div>

                        <form className="space-y-6" onSubmit={handlePostMessage}>
                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2">Full Name</label>
                                <input
                                    value={formName}
                                    onChange={(e) => setFormName(e.target.value)}
                                    className="w-full bg-background-dark border border-zinc-800 rounded-full px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white placeholder:text-zinc-600"
                                    placeholder="e.g. Chidi Okoro"
                                    required
                                    type="text"
                                />
                            </div>

                            <div>
                                <label className="block text-sm font-bold text-gray-400 mb-2">Relationship</label>
                                <input
                                    value={formRelationship}
                                    onChange={(e) => setFormRelationship(e.target.value)}
                                    className="w-full bg-background-dark border border-zinc-800 rounded-full px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white placeholder:text-zinc-600"
                                    placeholder="e.g. Friend, Colleague"
                                    type="text"
                                />
                            </div>

                            <div>
                                <div className="flex justify-between items-center mb-2">
                                    <label className="text-sm font-bold text-gray-400">Your Birthday Wishes</label>
                                    <button
                                        type="button"
                                        onClick={handleAiSurprise}
                                        disabled={isGenerating}
                                        className="text-[10px] bg-primary/10 text-primary border border-primary/20 px-3 py-1 rounded-full font-bold hover:bg-primary hover:text-background-dark transition-all disabled:opacity-50"
                                    >
                                        {isGenerating ? 'GENIE THINKING...' : '✨ AI SURPRISE ME'}
                                    </button>
                                </div>
                                <textarea
                                    value={formMessage}
                                    onChange={(e) => setFormMessage(e.target.value)}
                                    className="w-full bg-background-dark border border-zinc-800 rounded-2xl px-6 py-4 focus:border-primary focus:ring-1 focus:ring-primary outline-none text-white placeholder:text-zinc-600"
                                    placeholder="Write something heartfelt..."
                                    required
                                    rows={5}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-background-dark font-black py-4 rounded-full hover:shadow-[0_0_20px_rgba(242,185,13,0.3)] transition-all uppercase tracking-widest text-sm"
                            >
                                Post to Wall
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </>
    );
};
// Add helper function to handle sign modal open from other components if needed, or pass props.
// For now, since Navigation and Hero also trigger the modal, we might need to lift the modal state up to App.tsx OR
// expose a way to trigger it. 
// BUT, the request was to refactor. If I move the modal inside Guestbook, other components can't open it easily unless I pass a prop.
// So, I should probably keep `isModalOpen` in App.tsx or use a Context or just pass it down?
// Re-evaluating: Navigation and Hero have "Sign Guestbook" buttons.
// Detailed Plan said: "Navigation Props: onSignGuestbook".
// So `isModalOpen` state should probably remain in `App.tsx` or `Guestbook` needs to expose it.
// Simpler: Keep `isModalOpen` in `App.tsx` (or meaningful parent) and pass `isOpen` to `Guestbook`?
// OR: `Guestbook` component only renders the Section and List. The "Sign" modal could be its own component or part of Guestbook but controlled by props.
// Let's make `Guestbook` accept `isModalOpen` and `setIsModalOpen` as props to allow external control (from Nav/Hero).
// Wait, the code above puts the Modal INSIDE Guestbook and manages it internally. This means the buttons in Nav/Hero won't work unless I pass a control method.
// Let's refactor the code I'm about to write for Guestbook to accept `isModalOpen` and `onCloseModal` as props, OR `onSignClick` passed to others.
// Actually, better pattern: `App` holds `isModalOpen`. `Guestbook` receives `isModalOpen` ? No, `Guestbook` section has a "Sign" button too.
// Let's lift `isModalOpen` state to `App.tsx`.
// So `Guestbook` will take `isModalOpen` and `onClose` props. And `onOpen`? The "Sign" button inside Guestbook also needs to open it.

export default Guestbook;
