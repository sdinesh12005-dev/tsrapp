import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
    return (
        <a
            href="tel:9042954268"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl transition-transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-green-300 animate-bounce group"
            aria-label="Call Now"
        >
            <span className="absolute inline-flex h-full w-full rounded-full opacity-75 bg-green-400 animate-ping top-0 left-0 -z-10"></span>
            <Phone className="h-7 w-7" />
        </a>
    );
};

export default FloatingCallButton;
