import React from 'react';
import { Instagram, Linkedin, MapPin, Phone, Mail, ShieldCheck, Rocket, Award } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#111827] text-white py-16 px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                {/* Brand & Socials & Certs */}
                <div className="space-y-6 lg:col-span-2">
                    <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl">
                            <img src="/logo.png" alt="Gnanamaya Edutech Logo" className="h-12 w-auto object-contain" />
                        </div>
                        <span className="font-bold text-xl">
                            Gnanamaya <span className="text-brand-green">Edutech</span>
                        </span>
                    </div>

                    <div className="flex flex-wrap gap-3 pt-2">
                        <span className="flex items-center gap-2 bg-[#1aa589] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded shadow-sm"><ShieldCheck className="w-4 h-4" /> MSME REGISTERED</span>
                        <span className="flex items-center gap-2 bg-[#4c5df4] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded shadow-sm"><Rocket className="w-4 h-4" /> STARTUP INDIA</span>
                        <span className="flex items-center gap-2 bg-[#d7781b] text-white text-[10px] font-bold uppercase tracking-widest px-4 py-2 rounded shadow-sm"><Award className="w-4 h-4" /> INDUSTRY CERTIFIED</span>
                    </div>

                    <div className="flex space-x-4 pt-4">
                        <a href="https://www.instagram.com/gnanamaya_edutech_llp?igsh=MXA0NjB1Y3kybGgxZg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-green transition shadow-md">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="https://www.linkedin.com/company/gnanamaya-edutech-llp" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-brand-green transition shadow-md">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links */}
                <div className="space-y-6">
                    <h4 className="font-bold text-lg">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#about" className="hover:text-brand-green transition font-medium">About Us</a></li>
                        <li><a href="#courses" className="hover:text-brand-green transition font-medium">Our Programs</a></li>
                        <li><a href="#team" className="hover:text-brand-green transition font-medium">Founder Profile</a></li>
                        <li><a href="#contact" className="hover:text-brand-green transition font-medium">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="font-bold text-lg">Contact Us</h4>
                    <div className="space-y-4 text-sm text-gray-400">
                        <p className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                            <span className="leading-relaxed">No 22, Vasanthappa Garden, HAL 2nd Stage, Doopanahalli, Indiranagar, Bangalore – 560008</span>
                        </p>
                        <p className="flex items-center gap-4">
                            <Phone className="w-5 h-5 text-brand-green shrink-0" />
                            <a href="tel:+918722282131" className="hover:text-brand-green transition font-medium">+91 8722282131</a>
                        </p>
                        <p className="flex items-center gap-4">
                            <Mail className="w-5 h-5 text-brand-green shrink-0" />
                            <a href="mailto:gnanamyaedutech@gmail.com" className="hover:text-brand-green transition font-medium">gnanamyaedutech@gmail.com</a>
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright & Credits */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex justify-between items-end gap-6 text-xs text-gray-500 font-medium pb-4 relative">

                <p>© {new Date().getFullYear()} Gnanamaya Edutech LLP. All Rights Reserved.</p>

                {/* Developer Credit - Centered */}
                <div className="absolute left-1/2 -translate-x-1/2 bottom-0 flex flex-col items-center">
                    <p className="mb-2">This website is maintained and powered by</p>
                    <a href="https://assuvar.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 group hover:opacity-80 transition py-2 px-4 bg-[#1f2937] border border-gray-700 rounded-lg">
                        <div className="bg-white p-1 rounded-md">
                            <img src="/assuvar-logo.png" alt="Assuvar Logo" className="h-4 sm:h-5 object-contain" />
                        </div>
                        <span className="text-blue-400 font-bold text-[10px] sm:text-xs tracking-widest uppercase">NEXT GEN INFRASTRUCTURE</span>
                    </a>
                </div>

                <div className="flex gap-6 z-10">
                    <a href="#" className="hover:text-brand-green transition">Privacy Policy</a>
                    <a href="#" className="hover:text-brand-green transition">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
