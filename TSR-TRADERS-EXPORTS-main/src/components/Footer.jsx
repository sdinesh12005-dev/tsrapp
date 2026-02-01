import React from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import logo from '../assets/logo.jpg';

const Footer = () => {
    return (
        <footer id="contact" className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                            <img src={logo} alt="Logo" className="h-10 w-auto rounded-full bg-white p-0.5" />
                            <h3 className="text-2xl font-bold text-white">TSR TRADERS</h3>
                        </div>
                        <p className="text-gray-400 max-w-xs">
                            Your trusted partner in global trade and exports. Delivering quality and reliability across borders.
                        </p>
                        <div className="pt-4  flex items-center space-x-2">
                            <span className="text-xs font-semibold bg-gray-800 px-2 py-1 rounded text-gray-300">GST: 33BPMPS9494C2ZB</span>
                        </div>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-tsr-blue-light">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <MapPin className="h-6 w-6 text-tsr-blue-light mr-3 mt-0.5" />
                                <span className="text-gray-300">
                                    Main Road Thiruvettanallur,<br />
                                    Tenkasi District - 627855
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-tsr-blue-light mr-3" />
                                <a href="tel:9042954268" className="text-gray-300 hover:text-white transition-colors">
                                    +91 90429 54268
                                </a>
                            </li>
                            <li className="flex items-center">
                                <MessageCircle className="h-5 w-5 text-green-500 mr-3" />
                                <a href="https://wa.me/919042954268" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white transition-colors">
                                    WhatsApp Support
                                </a>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-tsr-blue-light mr-3" />
                                <a href="mailto:sdinesh12005@gmail.com" className="text-gray-300 hover:text-white transition-colors">
                                    sdinesh12005@gmail.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Quick Links / Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-tsr-blue-light">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
                            <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
                            <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} TSR Traders And Exports. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
