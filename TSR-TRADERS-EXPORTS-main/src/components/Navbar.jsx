import React, { useState } from 'react';
import logo from '../assets/logo.jpg';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <div className="flex-shrink-0 flex items-center">
                            <img className="h-16 w-auto" src={logo} alt="TSR Traders" />
                            <div className="ml-3">
                                <h1 className="text-xl font-bold text-tsr-blue-dark leading-none">TSR TRADERS</h1>
                                <p className="text-xs text-tsr-blue-light font-medium tracking-wider">& EXPORTS</p>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-gray-600 hover:text-tsr-blue-dark px-3 py-2 text-sm font-medium transition-colors duration-200">Home</a>
                        <a href="#about" className="text-gray-600 hover:text-tsr-blue-dark px-3 py-2 text-sm font-medium transition-colors duration-200">About</a>
                        <a href="#services" className="text-gray-600 hover:text-tsr-blue-dark px-3 py-2 text-sm font-medium transition-colors duration-200">Services</a>
                        <a href="#order" className="text-brand-pink hover:text-pink-700 px-3 py-2 text-sm font-bold transition-colors duration-200">Place Order</a>
                        <a href="tel:9042954268" className="flex items-center text-tsr-blue-dark font-bold px-3 py-2 text-sm hover:text-blue-800 transition-colors duration-200">
                            <span className="mr-2">Make a Call</span>
                        </a>
                        <a href="#contact" className="bg-tsr-blue-dark text-white hover:bg-blue-800 px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200">Contact Us</a>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-tsr-blue-light"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
                        <a href="#home" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
                        <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">About</a>
                        <a href="#services" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Services</a>
                        <a href="#order" className="block px-3 py-2 rounded-md text-base font-medium text-brand-pink hover:text-pink-700 hover:bg-gray-50">Place Order</a>
                        <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-tsr-blue-dark hover:bg-gray-50">Contact Us</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
