import React from 'react';
import { Map, Eye, ShieldCheck, Rocket, Award } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-24 max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                    <div className="bg-green-50 p-6 rounded-2xl">
                        <img
                            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80"
                            className="rounded-xl w-full"
                            alt="Industry Focus"
                        />
                        <div className="mt-4 text-center">
                            <div className="text-2xl font-bold text-brand-green">100%</div>
                            <div className="text-xs text-brand-navy/50 font-bold uppercase">Industry Focus</div>
                        </div>
                    </div>
                </div>
                <div className="space-y-4 pt-12">
                    <div className="bg-blue-50 p-4 rounded-xl text-center">
                        <div className="text-lg font-bold">24/7</div>
                        <div className="text-xs text-brand-navy/50">Student Support</div>
                    </div>
                    <img
                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80"
                        className="rounded-xl w-full"
                        alt="Student Support"
                    />
                </div>
            </div>
            <div>
                <span className="text-brand-green text-xs font-bold uppercase tracking-widest">About Gnanamaya</span>
                <h2 className="text-4xl font-extrabold mt-4 leading-snug">
                    Bridging the Gap Between <br /> Education & Employment
                </h2>

                <div className="mt-6 flex flex-wrap gap-3 text-xs font-bold uppercase tracking-wider">
                    <span className="flex items-center gap-2 text-white bg-gradient-to-r from-emerald-500 to-teal-600 px-4 py-2.5 rounded-xl shadow-md">
                        <ShieldCheck className="w-5 h-5" /> MSME Registered
                    </span>
                    <span className="flex items-center gap-2 text-white bg-gradient-to-r from-blue-500 to-indigo-600 px-4 py-2.5 rounded-xl shadow-md">
                        <Rocket className="w-5 h-5" /> Startup India
                    </span>
                    <span className="flex items-center gap-2 text-white bg-gradient-to-r from-orange-500 to-amber-600 px-4 py-2.5 rounded-xl shadow-md">
                        <Award className="w-5 h-5" /> Industry Certified
                    </span>
                </div>

                <div className="mt-10 space-y-8">
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                            <Map className="text-brand-green w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Our Mission</h4>
                            <p className="text-brand-navy/60 text-sm mt-1">
                                To bridge the gap between education and employment by delivering hands-on, industry-oriented training and continuous mentorship.
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center shrink-0">
                            <Eye className="text-brand-green w-6 h-6" />
                        </div>
                        <div>
                            <h4 className="font-bold text-lg">Our Vision</h4>
                            <p className="text-brand-navy/60 text-sm mt-1">
                                To empower learners with future-ready skills and practical knowledge that goes beyond textbooks. To create confident, industry-ready professionals who can adapt, innovate, and succeed in the modern digital world.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
