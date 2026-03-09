import React from 'react';
import { CheckCircle } from 'lucide-react';

const pxFeatures = [
    'International Quality Standards',
    'Global Logistics Network',
    'Customer-Centric Approach',
    'Timely Delivery Guarantee',
];

const About = () => {
    return (
        <div id="about" className="py-20 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
                    <div className="mb-12 lg:mb-0 relative">
                        <div className="absolute top-0 left-0 -ml-10 -mt-10 w-40 h-40 bg-tsr-blue-light/10 rounded-full blur-3xl"></div>
                        <div className="absolute bottom-0 right-0 -mr-10 -mb-10 w-40 h-40 bg-tsr-accent/10 rounded-full blur-3xl"></div>
                        <img
                            className="relative rounded-3xl shadow-2xl ring-1 ring-gray-900/5 hover:scale-[1.02] transition-transform duration-500"
                            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"
                            alt="Team meeting"
                        />
                    </div>
                    <div>
                        <h2 className="text-base text-tsr-blue-primary font-semibold tracking-wide uppercase">Who We Are</h2>
                        <h3 className="mt-2 text-3xl leading-9 font-extrabold text-tsr-blue-dark sm:text-4xl sm:leading-10">
                            Driving Global Commerce with Integrity
                        </h3>
                        <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                            At TSR Traders and Exports, we bridge the gap between quality manufacturers and global markets.
                            Our commitment to excellence ensures that every transaction is seamless, transparent, and profitable for our partners.
                        </p>

                        <div className="mt-8">
                            <ul className="space-y-4">
                                {pxFeatures.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <div className="flex-shrink-0">
                                            <CheckCircle className="h-6 w-6 text-green-500" />
                                        </div>
                                        <p className="ml-3 text-base text-gray-700 font-medium">{feature}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="mt-10">
                            <a href="#contact" className="text-tsr-blue-primary font-semibold hover:text-tsr-blue-dark transition-colors inline-flex items-center group">
                                Learn more about our values
                                <span className="ml-2 transform group-hover:translate-x-1 transition-transform">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
