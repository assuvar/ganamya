import React, { useState } from 'react';
import { Phone, ChevronDown, ChevronUp, ShieldCheck, Rocket, Award, Linkedin, Mail } from 'lucide-react';

const Team = () => {
    const [showFullAyyanna, setShowFullAyyanna] = useState(false);
    const [showFullVaishnavi, setShowFullVaishnavi] = useState(false);

    return (
        <section id="team" className="py-24 bg-[#f8f9fa]">
            <div className="max-w-6xl mx-auto px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-brand-navy font-serif tracking-wide">
                        Meet Our <span className="text-blue-500">Leadership Team</span>
                    </h2>
                    <p className="text-brand-navy/70 mt-4 max-w-2xl mx-auto">
                        Industry veterans committed to transforming technical education and empowering the next generation of skilled professionals.
                    </p>

                    <div className="flex justify-center flex-wrap gap-3 mt-8 text-xs font-bold uppercase tracking-widest">
                        <span className="flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-5 py-2.5 rounded-xl shadow-md"><ShieldCheck className="w-5 h-5" /> MSME Registered</span>
                        <span className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-5 py-2.5 rounded-xl shadow-md"><Rocket className="w-5 h-5" /> Startup India</span>
                        <span className="flex items-center gap-2 bg-gradient-to-r from-orange-500 to-amber-600 text-white px-5 py-2.5 rounded-xl shadow-md"><Award className="w-5 h-5" /> Industry Certified</span>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Founder Card */}
                    <div className="bg-white rounded-2xl shadow-lg border border-brand-navy/10 overflow-hidden flex flex-col group">
                        <div className="h-96 w-full overflow-hidden bg-brand-light flex items-center justify-center">
                            <img
                                src="/ayyanna.jpg"
                                className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                                alt="Ayyanna Allura"
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold text-brand-navy font-serif">Ayyanna Allura</h3>
                            <p className="text-blue-500 font-medium mt-1 mb-4">Founder & Managing Director</p>

                            <div className="text-brand-navy/70 text-sm leading-relaxed flex-1">
                                <p>
                                    Ayyanna Allura is the Founder and Director of Gnanamaya Edutech, an emerging learning platform dedicated to bridging the gap between academic education and real-world industry skills. With a strong combination of business knowledge and technological expertise, he leads the organization with a clear mission — to make students career-ready through practical, modern learning.
                                </p>

                                <div className={`space-y-4 transition-all duration-500 overflow-hidden ${showFullAyyanna ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                    <p>
                                        He holds an MBA in Finance and Business Analytics, which provided him with deep understanding of financial systems, data-driven decision making, and organizational management. To strengthen his technical foundation, he also completed a Master Diploma in Code Programming, gaining hands-on skills in software development and problem solving.
                                    </p>
                                    <p>
                                        Ayyanna brings valuable professional experience from the IT industry, having worked with global organizations including Oracle and Broadridge. During his tenure, he was exposed to enterprise applications, data operations, and corporate workflows, helping him understand the exact technical and professional expectations of the industry.
                                    </p>
                                    <p>
                                        Motivated by a passion for teaching and student development, he founded Gnanamaya Edutech with the vision of transforming traditional education into skill-based education. His training methodology focuses on practical sessions, real-time projects, and industry-oriented learning rather than theory-only teaching.
                                    </p>
                                    <p>
                                        He actively promotes learning in Artificial Intelligence, Data Analytics, and modern technologies, preparing students to adapt to the rapidly evolving digital world. Under his leadership, Gnanamaya Edutech continues to guide learners from classroom knowledge to successful professional careers.
                                    </p>
                                    <p className="font-semibold text-brand-navy/90 border-l-4 border-emerald-500 pl-4 italic mt-4 mb-4">
                                        "Education should not only provide degrees but should also build confidence, competence, and employability for every student."
                                    </p>
                                </div>

                                <button
                                    onClick={() => setShowFullAyyanna(!showFullAyyanna)}
                                    className="text-blue-500 font-bold flex items-center gap-1 hover:text-blue-700 transition mt-2 mb-6"
                                >
                                    {showFullAyyanna ? (
                                        <>Read Less <ChevronUp className="w-4 h-4" /></>
                                    ) : (
                                        <>Read More <ChevronDown className="w-4 h-4" /></>
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-100">
                                <a href="tel:+918722282131" className="w-10 h-10 rounded-lg bg-brand-green text-white flex items-center justify-center hover:bg-green-700 transition shadow-sm">
                                    <Phone className="w-5 h-5" />
                                </a>
                                <a href="mailto:gnanamyaedutech@gmail.com" className="w-10 h-10 rounded-lg bg-green-100 text-brand-green flex items-center justify-center hover:bg-green-200 transition shadow-sm border border-green-200">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Co-Founder Card */}
                    <div className="bg-white rounded-2xl shadow-lg border border-brand-navy/10 overflow-hidden flex flex-col group">
                        <div className="h-96 w-full overflow-hidden bg-blue-50/50 flex items-center justify-center">
                            <img
                                src="/vaishnavi.jpg"
                                className="w-full h-full object-contain group-hover:scale-105 transition duration-500"
                                alt="Vaishnavi Reddy G K"
                            />
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <h3 className="text-2xl font-bold text-brand-navy font-serif">Vaishnavi Reddy G K</h3>
                            <p className="text-blue-500 font-medium mt-1 mb-4">Co-founder & Director</p>

                            <div className="text-brand-navy/70 text-sm leading-relaxed flex-1">
                                <p>
                                    Vaishnavi Reddy G K is the Co-Founder of Gnanamaya Edutech and plays a key role in shaping the academic vision and training excellence of the organization. With a strong passion for teaching and mentoring, she is dedicated to empowering students through structured learning and practical knowledge.
                                </p>

                                <div className={`space-y-4 transition-all duration-500 overflow-hidden ${showFullVaishnavi ? 'max-h-[1000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                                    <p>
                                        She holds an MBA in Finance and Business Analytics, which has provided her with deep expertise in financial management, data interpretation, and strategic decision-making. Her specialization in Business Analytics enables her to guide students in understanding data-driven approaches and applying analytical thinking in real-world business scenarios.
                                    </p>
                                    <p>
                                        Vaishnavi is highly inclined toward teaching and student development. She believes in building strong conceptual foundations and ensuring that learners gain clarity, confidence, and competence. Her teaching methodology focuses on interactive sessions, practical examples, and personalized mentoring to help students grow academically and professionally.
                                    </p>
                                    <p>
                                        At Gnanamaya Edutech, she actively contributes to curriculum planning, academic mentoring, and quality training delivery. Her mission is to create a positive learning environment where students not only acquire technical skills but also develop confidence and career readiness. Through her dedication and commitment, she continues to inspire learners and support them in achieving their professional goals.
                                    </p>
                                </div>

                                <button
                                    onClick={() => setShowFullVaishnavi(!showFullVaishnavi)}
                                    className="text-blue-500 font-bold flex items-center gap-1 hover:text-blue-700 transition mt-2 mb-6"
                                >
                                    {showFullVaishnavi ? (
                                        <>Read Less <ChevronUp className="w-4 h-4" /></>
                                    ) : (
                                        <>Read More <ChevronDown className="w-4 h-4" /></>
                                    )}
                                </button>
                            </div>

                            <div className="flex items-center gap-3 mt-auto pt-6 border-t border-gray-100">
                                <a href="tel:+917899637408" className="w-10 h-10 rounded-lg bg-brand-green text-white flex items-center justify-center hover:bg-green-700 transition shadow-sm">
                                    <Phone className="w-5 h-5" />
                                </a>
                                <a href="mailto:gnanamyaedutech@gmail.com" className="w-10 h-10 rounded-lg bg-green-100 text-brand-green flex items-center justify-center hover:bg-green-200 transition shadow-sm border border-green-200">
                                    <Mail className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
