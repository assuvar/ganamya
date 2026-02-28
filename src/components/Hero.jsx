import React from 'react';
import { ShieldCheck, Rocket, Award } from 'lucide-react';

const Hero = () => {
    return (
        <>
            <section className="relative px-8 py-16 lg:py-24 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
                <div className="lg:w-1/2">
                    <span className="bg-brand-green text-white text-xs font-bold px-4 py-1.5 rounded-full border border-green-700 uppercase tracking-widest shadow-sm">
                        ● Admissions Open 2026
                    </span>
                    <h1 className="text-5xl lg:text-6xl font-extrabold mt-6 leading-tight">
                        Learn Skills That <br /> Build <span className="text-brand-green">Real Careers.</span>
                    </h1>
                    <p className="mt-6 text-brand-navy/60 text-lg max-w-lg leading-relaxed">
                        Empowering students through motivational training and industry-led mentorship. <strong className="text-brand-navy/90">We specialize in helping colleges train students</strong> to bridge the gap between traditional education and global employment.
                    </p>
                    <div className="mt-8 flex items-center space-x-4">
                        <a href="#contact" className="inline-block bg-brand-green text-white px-8 py-3 rounded-md font-bold shadow-lg hover:bg-green-700 transition text-center">
                            Start Your Journey
                        </a>
                        <a href="#courses" className="inline-block border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-bold hover:bg-brand-light transition text-center">
                            View Courses
                        </a>
                    </div>
                </div>
                <div className="lg:w-1/2">
                    <div className="rounded-3xl overflow-hidden shadow-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                            alt="Learning Environment"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </section>

            <div className="w-full bg-brand-light border-t border-b border-brand-navy/10 py-12">
                <div className="max-w-7xl mx-auto px-8 flex flex-col items-center">
                    <h3 className="text-brand-navy/60 font-bold uppercase tracking-widest text-sm mb-8 text-center">
                        Trusted certificates officially recognized by government & industry bodies
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6 text-sm font-bold uppercase tracking-wider">
                        <div className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-emerald-200 transform hover:-translate-y-1 transition duration-300">
                            <ShieldCheck className="w-6 h-6 text-emerald-100" />
                            <span>MSME Registered</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-blue-200 transform hover:-translate-y-1 transition duration-300">
                            <Rocket className="w-6 h-6 text-blue-100" />
                            <span>Startup India</span>
                        </div>
                        <div className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-8 py-4 rounded-xl shadow-lg shadow-orange-200 transform hover:-translate-y-1 transition duration-300">
                            <Award className="w-6 h-6 text-orange-100" />
                            <span>Industry Certified</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
