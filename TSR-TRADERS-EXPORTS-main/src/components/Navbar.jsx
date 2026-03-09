import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import { Menu, X, MessageCircle, Phone } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Logo className="transform hover:scale-105 transition-transform duration-300" />
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Home', 'About', 'Services'].map((item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="text-gray-600 hover:text-tsr-blue-primary text-sm font-medium transition-colors duration-200 relative group"
                            >
                                {item}
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-tsr-blue-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                            </a>
                        ))}

                        <a href="#order" className="text-gray-600 hover:text-tsr-accent px-3 py-2 text-sm font-medium transition-colors duration-200">
                            Place Order
                        </a>

                        <div className="bg-gray-200 h-6 w-px mx-2"></div>

                        <a href="tel:9042954268" className="flex items-center text-gray-700 hover:text-tsr-blue-dark font-medium text-sm transition-colors duration-200">
                            <Phone className="h-4 w-4 mr-2" />
                            <span>Call Us</span>
                        </a>

                        <a
                            href="#contact"
                            className="bg-tsr-blue-dark text-white hover:bg-tsr-blue-primary px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            Contact Us
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-tsr-blue-dark hover:bg-gray-100 focus:outline-none transition-colors"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div className={`md:hidden absolute top-full left-0 w-full bg-white shadow-xl transition-all duration-300 ease-out origin-top ${isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'}`}>
                <div className="px-4 py-4 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-100">
                    {['Home', 'About', 'Services'].map((item) => (
                        <a
                            key={item}
                            href={`#${item.toLowerCase()}`}
                            onClick={() => setIsOpen(false)}
                            className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-tsr-blue-primary hover:bg-gray-50 transition-colors"
                        >
                            {item}
                        </a>
                    ))}
                    <a href="#order" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-base font-medium text-tsr-accent hover:bg-red-50 transition-colors">Place Order</a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-lg text-base font-medium text-white bg-tsr-blue-dark hover:bg-tsr-blue-primary text-center mt-4 shadow-md">Contact Us</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
