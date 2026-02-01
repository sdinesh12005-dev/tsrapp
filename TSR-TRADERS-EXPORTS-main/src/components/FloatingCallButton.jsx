import React from 'react';
import { Phone } from 'lucide-react';

const FloatingCallButton = () => {
    return (
        <a
            href="tel:9042954268"
            className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 animate-bounce-subtle"
            aria-label="Call Now"
        >
            <Phone className="h-8 w-8" />
        </a>
    );
};

export default FloatingCallButton;
