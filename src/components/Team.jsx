import React, { useState } from 'react';
import { Phone, ChevronDown, ChevronUp } from 'lucide-react';

const Team = () => {
    const [showFullAyyanna, setShowFullAyyanna] = useState(false);
    const [showFullVaishnavi, setShowFullVaishnavi] = useState(false);

    return (
        <section id="team" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Our Leadership</span>
                    <h2 className="text-3xl font-bold mt-2">Visionaries Behind Gnanamaya</h2>
                </div>

                <div className="space-y-20">
                    {/* Founder */}
                    <div className="flex flex-col lg:flex-row gap-12 items-start bg-gray-50 rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm relative group">
                        <div className="w-full lg:w-72 shrink-0">
                            <div className="w-48 h-48 lg:w-full lg:h-72 mx-auto rounded-3xl border-8 border-white shadow-xl overflow-hidden group-hover:-translate-y-2 transition duration-500">
                                <img src="/ayyanna.jpg" className="w-full h-full object-cover object-top" alt="Ayyanna Allura" />
                            </div>
                        </div>
                        <div className="flex-1">
                            <h3 className="text-3xl font-bold text-gray-900">Ayyanna Allura</h3>
                            <p className="text-brand-green font-bold uppercase tracking-wider text-sm mt-2 flex items-center gap-3">
                                Founder & Managing Director
                                <span className="flex items-center gap-1.5 text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 normal-case tracking-normal">
                                    <Phone className="w-3.5 h-3.5 text-brand-green" /> +91 8722282131
                                </span>
                            </p>

                            <div className="mt-6 space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                                <p>
                                    Ayyanna Allura is the Founder and Director of Gnanamaya Edutech, an emerging learning platform dedicated to bridging the gap between academic education and real-world industry skills. With a strong combination of business knowledge and technological expertise, he leads the organization with a clear mission — to make students career-ready through practical, modern learning.
                                </p>

                                <div className={`space-y-4 transition-all duration-500 overflow-hidden ${showFullAyyanna ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
                                    <p className="font-semibold text-gray-800 border-l-4 border-brand-green pl-4 italic mt-6">
                                        "Education should not only provide degrees but should also build confidence, competence, and employability for every student."
                                    </p>
                                </div>

                                <button
                                    onClick={() => setShowFullAyyanna(!showFullAyyanna)}
                                    className="relative z-10 text-brand-green font-bold flex items-center gap-1 hover:text-green-700 transition mt-4 pt-2 w-max"
                                >
                                    {showFullAyyanna ? (
                                        <>Read Less <ChevronUp className="w-5 h-5" /></>
                                    ) : (
                                        <>Read More <ChevronDown className="w-5 h-5" /></>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Co-Founder */}
                    <div className="flex flex-col lg:flex-row-reverse gap-12 items-start bg-gray-50 rounded-3xl p-8 sm:p-12 border border-blue-50 shadow-sm relative group">
                        <div className="w-full lg:w-72 shrink-0">
                            <div className="w-48 h-48 lg:w-full lg:h-72 mx-auto rounded-3xl border-8 border-white shadow-xl overflow-hidden group-hover:-translate-y-2 transition duration-500">
                                <img src="/vaishnavi.jpg" className="w-full h-full object-cover object-top" alt="Vaishnavi Reddy G K" />
                            </div>
                        </div>
                        <div className="flex-1 lg:text-right">
                            <h3 className="text-3xl font-bold text-gray-900">Vaishnavi Reddy G K</h3>
                            <div className="text-brand-green font-bold uppercase tracking-wider text-sm mt-2 flex flex-wrap lg:justify-end items-center gap-3">
                                Co-founder & Director
                                <span className="flex items-center gap-1.5 text-gray-500 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 normal-case tracking-normal">
                                    <Phone className="w-3.5 h-3.5 text-brand-green" /> +91 7899637408
                                </span>
                            </div>

                            <div className="mt-6 space-y-4 text-gray-600 text-sm md:text-base leading-relaxed lg:text-right">
                                <p>
                                    Vaishnavi Reddy G K is the Co-Founder of Gnanamaya Edutech and plays a key role in shaping the academic vision and training excellence of the organization. With a strong passion for teaching and mentoring, she is dedicated to empowering students through structured learning and practical knowledge.
                                </p>

                                <div className={`space-y-4 transition-all duration-500 overflow-hidden ${showFullVaishnavi ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}>
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
                                    className="relative z-10 text-brand-green font-bold flex items-center gap-1 hover:text-green-700 transition mt-4 pt-2 lg:justify-end w-full"
                                >
                                    {showFullVaishnavi ? (
                                        <>Read Less <ChevronUp className="w-5 h-5" /></>
                                    ) : (
                                        <>Read More <ChevronDown className="w-5 h-5" /></>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;
