import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const Hero = () => {
    return (
        <div id="home" className="relative bg-white overflow-hidden pt-10 pb-0 sm:pt-16 lg:pt-0 lg:pb-0">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 lg:bg-transparent">
                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl animate-fade-in">
                                <span className="block xl:inline">TSR</span>{' '}
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-tsr-blue-primary to-tsr-blue-light xl:inline">Traders & Exports</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                                TSR Traders and Exports delivers excellence in global trade. We specialize in connecting markets and providing top-tier logistics solutions for your business needs.
                            </p>
                            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start animate-slide-up" style={{ animationDelay: '0.4s' }}>
                                <div className="rounded-md shadow">
                                    <a
                                        href="#contact"
                                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-tsr-blue-dark hover:bg-tsr-blue-primary md:py-4 md:text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                                    >
                                        Get Started <ArrowRight className="ml-2 h-5 w-5" />
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a
                                        href="tel:9042954268"
                                        className="w-full flex items-center justify-center px-8 py-3 border-2 border-gray-100 text-base font-medium rounded-full text-gray-700 bg-white hover:border-tsr-blue-light hover:text-tsr-blue-primary md:py-4 md:text-lg transition-all duration-300"
                                    >
                                        <Phone className="mr-2 h-5 w-5" /> Call Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/50 to-transparent z-10 lg:from-white lg:via-white/20"></div>
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full transform scale-100 hover:scale-105 transition-transform duration-1000 ease-out"
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                    alt="Global trade container ship"
                />
            </div>
        </div>
    );
};

export default Hero;
