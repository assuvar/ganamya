import React from 'react';
import { Instagram, ArrowRight } from 'lucide-react';

const InstagramFeed = () => {
    const instaLink = "https://www.instagram.com/gnanamaya_edutech_llp/";

    return (
        <section id="gallery" className="py-24 bg-white border-t border-brand-navy/10">
            <div className="max-w-7xl mx-auto px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-brand-green text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                            <Instagram className="w-4 h-4" /> Follow Us on Instagram
                        </span>
                        <h2 className="text-3xl font-bold mt-2">Glimpses of Gnanamaya</h2>
                        <p className="text-brand-navy/60 mt-2 max-w-xl text-sm">
                            Check out our latest training sessions, workshops, and student success stories on our official Instagram page.
                        </p>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-gray-50 to-gray-100 p-8 md:p-12 rounded-3xl flex flex-col items-center justify-center text-center shadow-sm border border-brand-navy/20">
                    <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-md mb-6">
                        <Instagram className="w-10 h-10 text-pink-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Join our Instagram Community</h3>
                    <p className="text-brand-navy/70 mb-8 max-w-md">Stay updated with our latest events, student achievements, and behind-the-scenes moments.</p>
                    <a
                        href={instaLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition shadow-lg flex items-center gap-2"
                    >
                        @gnanamaya_edutech_llp <ArrowRight className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default InstagramFeed;
