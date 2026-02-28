import React from 'react';
import { Instagram, Linkedin, MapPin, Phone, Mail, ShieldCheck, Rocket, Award } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16 px-8 border-t border-gray-800">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-8">
                {/* Brand & Socials */}
                <div className="space-y-6">
                    <div className="flex items-center space-x-3">
                        <div className="bg-white p-2 rounded-xl">
                            <img src="/logo.png" alt="Gnanamaya Edutech Logo" className="h-12 w-auto object-contain" />
                        </div>
                        <span className="font-bold text-xl">
                            Gnanamaya <span className="text-brand-green">Edutech</span>
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-3 pt-2">
                        <span className="flex items-center gap-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm"><ShieldCheck className="w-3.5 h-3.5" /> MSME Registered</span>
                        <span className="flex items-center gap-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm"><Rocket className="w-3.5 h-3.5" /> Startup India</span>
                        <span className="flex items-center gap-1.5 bg-gradient-to-r from-orange-500 to-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-md shadow-sm"><Award className="w-3.5 h-3.5" /> Industry Certified</span>
                    </div>
                    <div className="flex space-x-5 pt-4">
                        <a href="https://www.instagram.com/gnanamaya_edutech_llp?igsh=MXA0NjB1Y3kybGgxZg==" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition">
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-brand-green hover:text-white transition">
                            <Linkedin className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                {/* Quick Links (Placeholder) */}
                <div className="space-y-6 lg:pl-16">
                    <h4 className="font-bold text-lg text-white">Quick Links</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><a href="#about" className="hover:text-brand-green transition">About Us</a></li>
                        <li><a href="#courses" className="hover:text-brand-green transition">Our Programs</a></li>
                        <li><a href="#team" className="hover:text-brand-green transition">Founder Profile</a></li>
                        <li><a href="#contact" className="hover:text-brand-green transition">Contact Us</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className="space-y-6">
                    <h4 className="font-bold text-lg text-white">Contact Us</h4>
                    <div className="space-y-4 text-sm text-gray-400">
                        <p className="flex items-start gap-3">
                            <MapPin className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                            <span>No 22, Vasanthappa Garden, HAL 2nd Stage, Doopanahalli, Indiranagar, Bangalore – 560008</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-brand-green shrink-0" />
                            <span>+91 8722282131</span>
                        </p>
                        <p className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-brand-green shrink-0" />
                            <span>gnanamyaedutech@gmail.com</span>
                        </p>
                    </div>
                </div>
            </div>

            {/* Copyright & Credits */}
            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
                <p>© {new Date().getFullYear()} Gnanamaya Edutech LLP. All Rights Reserved.</p>

                {/* Developer Credit */}
                <div className="flex flex-col items-center md:items-end gap-2 my-4 md:my-0">
                    <p className="font-medium text-gray-500 text-sm">This website is maintained and powered by</p>
                    <a href="https://assuvar.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 group hover:opacity-80 transition bg-white/5 py-2 px-4 rounded-xl">
                        <img src="/assuvar-logo.png" alt="Assuvar Logo" className="h-6 object-contain filter brightness-200" />
                        <span className="text-blue-400 font-bold text-xs tracking-wider uppercase">Next Gen Infrastructure</span>
                    </a>
                </div>

                <div className="flex gap-4">
                    <a href="#" className="hover:text-gray-300">Privacy Policy</a>
                    <a href="#" className="hover:text-gray-300">Terms of Service</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
