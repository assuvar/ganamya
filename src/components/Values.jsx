import React from 'react';
import { Lightbulb, Users, BookOpen, TrendingUp } from 'lucide-react';

const Values = () => {
    return (
        <section className="bg-brand-green py-12">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-white">
                    <Lightbulb className="w-6 h-6 mb-3" />
                    <h5 className="font-bold">Innovation</h5>
                    <p className="text-xs opacity-70 mt-1">Constantly evolving our curriculum with latest tech trends.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-white">
                    <Users className="w-6 h-6 mb-3" />
                    <h5 className="font-bold">Mentorship</h5>
                    <p className="text-xs opacity-70 mt-1">Compassionate guidance to nurture individual talent.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-white">
                    <BookOpen className="w-6 h-6 mb-3" />
                    <h5 className="font-bold">Knowledge</h5>
                    <p className="text-xs opacity-70 mt-1">Focusing on practical application rather than rote learning.</p>
                </div>
                <div className="bg-white/10 p-6 rounded-xl border border-white/20 text-white">
                    <TrendingUp className="w-6 h-6 mb-3" />
                    <h5 className="font-bold">Growth</h5>
                    <p className="text-xs opacity-70 mt-1">Ensuring continuous career growth for every student.</p>
                </div>
            </div>
        </section>
    );
};

export default Values;
