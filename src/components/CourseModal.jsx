import React from 'react';
import { X, Clock, BookOpen, CheckCircle2, MessageCircle } from 'lucide-react';

const CourseModal = ({ program, onClose }) => {
    if (!program) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/70 backdrop-blur-sm overflow-y-auto">
            <div className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] flex flex-col shadow-2xl relative overflow-hidden animate-in fade-in zoom-in duration-300 m-auto mt-10 mb-10">

                {/* Header Image */}
                <div className="h-48 sm:h-64 relative shrink-0">
                    <img src={program.image} alt={program.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-white/20 hover:bg-white/40 backdrop-blur-md p-2 rounded-full text-white transition z-10"
                    >
                        <X className="w-5 h-5" />
                    </button>
                    <div className="absolute bottom-0 left-0 p-6 sm:p-8 w-full z-10">
                        <span className="bg-brand-green text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3 inline-block">
                            {program.level}
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{program.title}</h2>
                    </div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto p-6 sm:p-8 bg-gray-50/50">
                    <div className="flex flex-wrap gap-4 mb-8 text-sm font-semibold text-gray-600 border-b border-gray-200 pb-6">
                        <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                            <Clock className="w-4 h-4 text-brand-green" /> {program.duration} Total
                        </span>
                        <span className="flex items-center gap-1.5 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-100">
                            <BookOpen className="w-4 h-4 text-brand-green" /> {program.modules?.length || 0} Modules
                        </span>
                    </div>

                    <h3 className="text-xl font-bold mb-6 text-gray-800">Course Curriculum Breakdown</h3>

                    <div className="space-y-5">
                        {program.modules?.map((mod, idx) => (
                            <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                                <div className="flex justify-between items-start gap-4 mb-5">
                                    <h4 className="font-bold text-lg text-gray-900">{mod.title}</h4>
                                    <span className="shrink-0 bg-green-50 text-brand-green text-xs font-bold px-3 py-1.5 rounded-lg border border-green-100">
                                        {mod.hours} Hours
                                    </span>
                                </div>
                                <ul className="grid sm:grid-cols-2 gap-y-3 gap-x-6">
                                    {mod.topics?.map((topic, i) => (
                                        <li key={i} className="flex items-start gap-2.5 text-sm text-gray-600 font-medium">
                                            <CheckCircle2 className="w-4 h-4 text-brand-green shrink-0 mt-0.5" />
                                            {topic}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer actions */}
                <div className="p-5 sm:p-6 bg-white border-t border-gray-100 shrink-0 flex justify-end gap-4 shadow-[0_-10px_40px_rgba(0,0,0,0.03)] relative z-20">
                    <button onClick={onClose} className="px-6 py-2.5 rounded-xl font-bold text-gray-500 hover:bg-gray-100 transition">
                        Close
                    </button>
                    <a href="https://wa.me/918722282131?text=Hi%20Gnanamaya%20Edutech,%20I'm%20interested%20in%20learning%20more%20about%20your%20courses." target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-8 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-xl font-bold shadow-lg shadow-green-500/30 transition">
                        <MessageCircle className="w-5 h-5" />
                        WhatsApp Inquiry
                    </a>
                </div>

            </div>
        </div>
    );
};

export default CourseModal;
