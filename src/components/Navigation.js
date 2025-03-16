import React from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../images/csp.png';

const NavLink = ({ href, children, activeSection }) => (
    <a
        href={href}
        className={`text-gray-600 hover:text-blue-600 px-4 py-2 transition-colors duration-200
        ${activeSection === href.slice(1) ? 'text-blue-600 font-semibold' : ''}`}
    >
        {children}
    </a>
);

const Navigation = ({ isMenuOpen, setIsMenuOpen, activeSection }) => (
    <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <img alt="CloudSaverPro.com" src={logo} className="object-cover h-20" />
                    </div>
                    <div className="ml-2 text-blue-600 text-3xl md:text-4xl " style={{ fontFamily: "Bebas Neue" }}>
                        CLOUDSAVERPRO
                    </div>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex space-x-4">
                    <NavLink href="#home" activeSection={activeSection}>Home</NavLink>
                    <NavLink href="#features" activeSection={activeSection}>Features</NavLink>
                    <NavLink href="#testimonials" activeSection={activeSection}>Testimonials</NavLink>
                    <NavLink href="#contact" activeSection={activeSection}>Contact</NavLink>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
                <a href="#home" className="block px-3 py-2 rounded-md hover:bg-gray-100">Home</a>
                <a href="#features" className="block px-3 py-2 rounded-md hover:bg-gray-100">Features</a>
                <a href="#testimonials" className="block px-3 py-2 rounded-md hover:bg-gray-100">Testimonials</a>
                <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-100">Contact</a>
            </div>
        </div>
    </nav>
);

export default Navigation;
