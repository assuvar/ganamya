import React from 'react';

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white sticky top-0 z-50 shadow-sm">
            <div className="flex items-center space-x-3">
                <img src="/logo.png" alt="Gnanamaya Edutech Logo" className="h-20 w-auto object-contain" />
                <span className="font-bold text-xl tracking-tight hidden sm:block">
                    Gnanamaya <span className="text-brand-green">Edutech</span>
                </span>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium">
                <a href="#" className="hover:text-brand-green transition">Home</a>
                <a href="#about" className="hover:text-brand-green transition">About</a>
                <a href="#courses" className="hover:text-brand-green transition">Courses</a>
                <a href="#testimonials" className="hover:text-brand-green transition">Testimonials</a>
                <a href="#gallery" className="hover:text-brand-green transition">Gallery</a>
                <a href="#team" className="hover:text-brand-green transition">Team</a>
                <a href="#contact" className="hover:text-brand-green transition">Contact</a>
            </div>
            <a href="#contact" className="bg-brand-green text-white px-5 py-2 rounded-md text-sm font-semibold hover:bg-green-700 transition">
                Start Your Journey
            </a>
        </nav>
    );
};

export default Navbar;
