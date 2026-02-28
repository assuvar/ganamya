import React from 'react';

const WhyChooseUs = () => {
    return (
        <section className="py-24 bg-gradient-to-r from-[#f5f8ff] via-[#fdfdff] to-[#f5f8ff] border-y border-blue-50/50">
            <div className="max-w-6xl mx-auto px-8">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-brand-navy mb-16 font-serif tracking-wide">
                    Why Choose Our Training Programs?
                </h2>

                <div className="grid md:grid-cols-3 gap-12 text-center">
                    {/* Item 1 */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-[#4e81ff] rounded-[18px] flex items-center justify-center shadow-[0_8px_16px_rgba(78,129,255,0.25)] mb-6">
                            <span className="text-2xl drop-shadow-md">🎯</span>
                        </div>
                        <h3 className="font-bold text-lg text-brand-navy mb-3">Industry-Focused</h3>
                        <p className="text-brand-navy/60 text-sm leading-relaxed px-4">
                            Curriculum designed with industry partners for real-world relevance
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-[#ebae43] rounded-[18px] flex items-center justify-center shadow-[0_8px_16px_rgba(235,174,67,0.25)] mb-6">
                            <span className="text-2xl drop-shadow-md">🚀</span>
                        </div>
                        <h3 className="font-bold text-lg text-brand-navy mb-3">Placement Ready</h3>
                        <p className="text-brand-navy/60 text-sm leading-relaxed px-4">
                            Comprehensive training with interview preparation and soft skills
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex flex-col items-center">
                        <div className="w-16 h-16 bg-gradient-to-br from-[#4d80ff] to-[#d69f41] rounded-[18px] flex items-center justify-center shadow-[0_8px_16px_rgba(77,128,255,0.2)] mb-6">
                            <span className="text-2xl drop-shadow-md">💡</span>
                        </div>
                        <h3 className="font-bold text-lg text-brand-navy mb-3">Hands-on Learning</h3>
                        <p className="text-brand-navy/60 text-sm leading-relaxed px-4">
                            Practical projects and real-world case studies for better understanding
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
