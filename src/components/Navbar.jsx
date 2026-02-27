import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="relative bg-white sticky top-0 z-50 shadow-sm">
            <div className="flex items-center justify-between px-8 py-4">
                <div className="flex items-center space-x-3">
                    <img src="/logo.png" alt="Gnanamaya Edutech Logo" className="h-20 w-auto object-contain" />
                    <span className="font-bold text-xl tracking-tight hidden sm:block">
                        Gnanamaya <span className="text-brand-green">Edutech</span>
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-8 text-sm font-medium">
                    <a href="#" className="hover:text-brand-green transition">Home</a>
                    <a href="#about" className="hover:text-brand-green transition">About</a>
                    <a href="#courses" className="hover:text-brand-green transition">Courses</a>
                    <a href="#testimonials" className="hover:text-brand-green transition">Testimonials</a>
                    <a href="#gallery" className="hover:text-brand-green transition">Gallery</a>
                    <a href="#team" className="hover:text-brand-green transition">Team</a>
                    <a href="#contact" className="hover:text-brand-green transition">Contact</a>
                </div>

                <div className="flex items-center gap-4">
                    <a href="#contact" className="hidden sm:inline-block bg-brand-green text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition">
                        Start Your Journey
                    </a>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        onClick={toggleMenu}
                        className="lg:hidden p-2 text-gray-600 hover:text-brand-green transition focus:outline-none"
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg py-4 px-8 flex flex-col space-y-4">
                    <a href="#" onClick={toggleMenu} className="text-gray-700 hover:text-brand-green font-medium transition">Home</a>
                    <a href="#about" onClick={toggleMenu} className="text-gray-700 hover:text-brand-green font-medium transition">About</a>
                    <a href="#courses" onClick={toggleMenu} className="text-gray-700 hover:text-brand-green font-medium transition">Courses</a>
                    <a href="#testimonials" onClick={toggleMenu} className="text-gray-700 hover:text-brand-green font-medium transition">Testimonials</a>
                    <a href="#gallery" onClick={toggleMenu} className="text-gray-700 hover:text-brand-green font-medium transition">Gallery</a>
                    <a href="#team" onClick={toggleMenu} className="text-gray-700 hover:text-brand-green font-medium transition">Team</a>
                    <a href="#contact" onClick={toggleMenu} className="text-gray-700 hover:text-brand-green font-medium transition">Contact</a>

                    <a href="#contact" onClick={toggleMenu} className="w-full text-center mt-4 bg-brand-green text-white px-5 py-3 rounded-md text-sm font-semibold hover:bg-green-700 transition">
                        Start Your Journey
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
