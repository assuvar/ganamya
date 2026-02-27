import React from 'react';
import { GraduationCap, Users, Layout, TrendingUp, Hammer, Network } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <GraduationCap className="text-brand-green w-8 h-8 mb-4" />,
            title: 'Practical Learning',
            description: 'Move beyond theory with real-world scenarios and hands-on laboratory exercises.'
        },
        {
            icon: <Users className="text-brand-green w-8 h-8 mb-4" />,
            title: 'Industry Mentors',
            description: 'Learn directly from professionals currently working in top-tier tech companies.'
        },
        {
            icon: <Layout className="text-brand-green w-8 h-8 mb-4" />,
            title: 'Certification',
            description: 'Gain industry-recognized certificates that validate your expertise to employers.'
        },
        {
            icon: <TrendingUp className="text-brand-green w-8 h-8 mb-4" />,
            title: 'Career Guidance',
            description: 'Personalized paths, resume building, and mock interviews to land your dream job.'
        },
        {
            icon: <Hammer className="text-brand-green w-8 h-8 mb-4" />,
            title: 'Hands-on Projects',
            description: 'Build a professional portfolio through capstone projects that solve real problems.'
        },
        {
            icon: <Network className="text-brand-green w-8 h-8 mb-4" />,
            title: 'Community',
            description: 'Join a vibrant network of alumni and peers for life-long collaboration.'
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-8">
                <div className="text-center mb-16">
                    <span className="text-brand-green text-xs font-bold uppercase tracking-widest">Why Choose Us</span>
                    <h2 className="text-3xl font-bold mt-2">Empowering Future Leaders</h2>
                </div>
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl border border-gray-100 hover:shadow-lg transition">
                            {feature.icon}
                            <h4 className="font-bold text-lg">{feature.title}</h4>
                            <p className="text-gray-500 text-sm mt-2">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
