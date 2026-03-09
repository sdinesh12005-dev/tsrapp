import React from 'react';
import { Phone, MapPin, Mail, MessageCircle } from 'lucide-react';
import Logo from './Logo';

const Footer = () => {
    return (
        <footer id="contact" className="bg-tsr-blue-dark text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <div className="flex items-center space-x-3">
                            <Logo light={true} />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your trusted partner in global trade and exports. Delivering quality and reliability across borders with a commitment to excellence.
                        </p>
                        <div className="inline-block">
                            <span className="text-xs font-semibold bg-white/10 border border-white/20 px-3 py-1 rounded-full text-gray-300 tracking-wider">
                                GST: 33BPMPS9494C2ZB
                            </span>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-tsr-blue-light">Quick Links</h3>
                        <ul className="space-y-3 text-sm">
                            {['Home', 'About', 'Services', 'Contact'].map((item) => (
                                <li key={item}>
                                    <a href={`#${item.toLowerCase()}`} className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-300 inline-block">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold mb-6 text-tsr-blue-light">Contact Us</h3>
                        <ul className="space-y-4 text-sm">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-tsr-blue-light mr-3 mt-0.5" />
                                <span className="text-gray-300">
                                    Main Road Thiruvettanallur, Tenkasi District - 627855
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
                                    WhatsApp Chat
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
                </div>

                <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} TSR Traders And Exports. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
